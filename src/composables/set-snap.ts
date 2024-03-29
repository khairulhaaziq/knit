import * as PIXI from "pixi.js";
import { createElement, getElementById } from "../utils/get-element-by-id";
import { Sprite } from "pixi.js";
import { RectangleNode } from "../utils/class-rectangle-node";

type Line = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type Point = {
  x: number;
  y: number;
};

type LinePosition = {
  lineTop?: number;
  lineMiddleY?: number;
  lineBottom?: number;
  lineLeft?: number;
  lineMiddleX?: number;
  lineRight?: number;
  lineMiddle?: number;
};

type OriginLinePosition = {
  lineTop: number;
  lineMiddleY: number;
  lineBottom: number;
  lineLeft: number;
  lineMiddleX: number;
  lineRight: number;
};

type Position = "left" | "middleX" | "right" | "top" | "middleY" | "bottom";

type Axis = "horizontal" | "vertical";

const intersectionSensitivity = 5;
let snapLines: LinePosition = {};
const renderedLinesId: Position[] = [];

export function setDragSnap(
  event: MouseEvent,
  origin: PIXI.Sprite | RectangleNode,
  prevX: number,
  prevY: number
) {
  const id = origin.name;
  const originNode = setOriginPosition(event, origin, prevX, prevY);
  const originSiblings = setOriginSiblings(origin);
  const container = getElementById("root-container")!;

  let snapLinesPlaceholder = {} as LinePosition;

  if (originSiblings.length) {
    originSiblings.forEach((sibling) => {
      const lineHorizontal: number[] = [
        sibling.x,
        sibling.x + sibling.width / 2,
        sibling.x + sibling.width,
      ];
      const lineVertical: number[] = [
        sibling.y,
        sibling.y + sibling.height / 2,
        sibling.y + sibling.height,
      ];

      lineHorizontal.forEach((x) => {
        if (checkIntersection(originNode.lineLeft, x)) {
          if (
            !snapLinesPlaceholder.lineLeft ||
            (snapLinesPlaceholder.lineLeft &&
              originNode.lineLeft - x <
                originNode.lineLeft - snapLinesPlaceholder.lineLeft)
          ) {
            snapLinesPlaceholder.lineLeft = x;
          }
        }
        if (checkIntersection(originNode.lineMiddleX, x)) {
          if (
            !snapLinesPlaceholder.lineMiddleX ||
            (snapLinesPlaceholder.lineMiddleX &&
              originNode.lineMiddleX - x <
                originNode.lineMiddleX - snapLinesPlaceholder.lineMiddleX)
          ) {
            snapLinesPlaceholder.lineMiddleX = x;
          }
        }
        if (checkIntersection(originNode.lineRight, x)) {
          if (
            !snapLinesPlaceholder.lineRight ||
            (snapLinesPlaceholder.lineRight &&
              originNode.lineRight - x <
                originNode.lineRight - snapLinesPlaceholder.lineRight)
          ) {
            snapLinesPlaceholder.lineRight = x;
          }
        }
      });

      lineVertical.forEach((y) => {
        if (checkIntersection(originNode.lineTop, y)) {
          if (
            !snapLinesPlaceholder.lineTop ||
            (snapLinesPlaceholder.lineTop &&
              originNode.lineTop - y <
                originNode.lineTop - snapLinesPlaceholder.lineTop)
          ) {
            snapLinesPlaceholder.lineTop = y;
          }
        }
        if (checkIntersection(originNode.lineMiddleY, y)) {
          if (
            !snapLinesPlaceholder.lineMiddleY ||
            (snapLinesPlaceholder.lineMiddleY &&
              originNode.lineMiddleY - y <
                originNode.lineMiddleY - snapLinesPlaceholder.lineMiddleY)
          ) {
            snapLinesPlaceholder.lineMiddleY = y;
          }
        }
        if (checkIntersection(originNode.lineBottom, y)) {
          if (
            !snapLinesPlaceholder.lineBottom ||
            (snapLinesPlaceholder.lineBottom &&
              originNode.lineBottom - y <
                originNode.lineBottom - snapLinesPlaceholder.lineBottom)
          ) {
            snapLinesPlaceholder.lineBottom = y;
          }
        }
      });
    });

    //check if theres 2 lines on same axis: cancel out farther
    snapLines = findClosestIntersection(originNode, snapLinesPlaceholder);
    console.log(snapLines);

    //render the lines
    if (
      snapLines.lineLeft ||
      snapLines.lineMiddleX ||
      snapLines.lineRight ||
      snapLines.lineTop ||
      snapLines.lineMiddleY ||
      snapLines.lineBottom
    ) {
      renderAllLines(snapLines, id);
    } else if (renderedLinesId.length) {
      destroyLines();
    }

    //snap to closest line
    if (setSnapLeft(id, snapLines) || setSnapTop(id, snapLines)) {
      if (setSnapLeft(id, snapLines) && !setSnapTop(id, snapLines)) {
        pixiNodesSelection().value[0].y = Math.round(
          (event.clientY - 56) / container.scale.x - prevY
        );
        origin.x = setSnapLeft(id, snapLines)!;
        origin.y = Math.round((event.clientY - 56) / container.scale.x - prevY);
      } else if (setSnapTop(id, snapLines) && !setSnapLeft(id, snapLines)) {
        pixiNodesSelection().value[0].x = Math.round(
          (event.clientX - 296) / container.scale.x - prevX
        );
        origin.y = setSnapTop(id, snapLines)!;
        origin.x = Math.round(
          (event.clientX - 296) / container.scale.x - prevX
        );
      } else {
        pixiNodesSelection().value[0].x = Math.round(
          (event.clientX - 296) / container.scale.x - prevX
        );
        pixiNodesSelection().value[0].y = Math.round(
          (event.clientY - 56) / container.scale.x - prevY
        );
        origin.x = setSnapLeft(id, snapLines)!;
        origin.y = setSnapTop(id, snapLines)!;
      }
    } else {
      pixiNodesSelection().value[0].x = Math.round(
        (event.clientX - 296) / container.scale.x - prevX
      );
      pixiNodesSelection().value[0].y = Math.round(
        (event.clientY - 56) / container.scale.x - prevY
      );
      origin.x = Math.round((event.clientX - 296) / container.scale.x - prevX);
      origin.y = Math.round((event.clientY - 56) / container.scale.x - prevY);
    }
  }
}

function setOriginPosition(
  event: MouseEvent,
  origin: PIXI.Sprite,
  prevX: number,
  prevY: number
): OriginLinePosition {
  const container = getElementById("root-container")!;
  return {
    lineTop: (event.clientY - 56) / container.scale.x - prevY,
    lineMiddleY:
      (event.clientY - 56) / container.scale.x - prevY + origin.height / 2,
    lineBottom:
      (event.clientY - 56) / container.scale.x - prevY + origin.height,
    lineLeft: (event.clientX - 296) / container.scale.x - prevX,
    lineMiddleX:
      (event.clientX - 296) / container.scale.x - prevX + origin.width / 2,
    lineRight: (event.clientX - 296) / container.scale.x - prevX + origin.width,
  };
}

function setOriginSiblings(origin: PIXI.Sprite): PIXI.Sprite[] {
  if (origin.parent.children.length) {
    const filteredSiblings = [
      ...origin.parent.children.filter(
        (i) =>
          i.name !== origin.name &&
          i.name !== "selectorLeft" &&
          i.name !== "selectorTop" &&
          i.name !== "selectorRight" &&
          i.name !== "selectorBottom" &&
          i.name !== "selectorTopLeft" &&
          i.name !== "selectorLeft" &&
          i.name !== "selectorTopRight" &&
          i.name !== "selectorBottomLeft" &&
          i.name !== "selectorBottomRight"
      ),
    ];
    return filteredSiblings as PIXI.Sprite[];
  } else return [];
}

function checkIntersection(origin: number, measured: number) {
  const container = getElementById("root-container")!;
  if (
    origin < measured + intersectionSensitivity / container.scale.x &&
    origin > measured - intersectionSensitivity / container.scale.x
  ) {
    return true;
  } else return false;
}

function findClosestIntersection(
  originNode: OriginLinePosition,
  snapLinesPlaceholder: LinePosition
) {
  if (
    snapLinesPlaceholder.lineLeft ||
    snapLinesPlaceholder.lineMiddleX ||
    snapLinesPlaceholder.lineRight ||
    snapLinesPlaceholder.lineTop ||
    snapLinesPlaceholder.lineMiddleY ||
    snapLinesPlaceholder.lineBottom
  ) {
    if (snapLinesPlaceholder.lineLeft && snapLinesPlaceholder.lineMiddleX) {
      if (
        snapLinesPlaceholder.lineLeft - originNode.lineLeft <
        snapLinesPlaceholder.lineMiddleX - originNode.lineMiddleX
      ) {
        snapLinesPlaceholder.lineMiddleX = undefined;
      } else if (
        snapLinesPlaceholder.lineLeft - originNode.lineLeft >
        snapLinesPlaceholder.lineMiddleX - originNode.lineMiddleX
      ) {
        snapLinesPlaceholder.lineLeft = undefined;
      }
    }
    if (snapLinesPlaceholder.lineLeft && snapLinesPlaceholder.lineRight) {
      if (
        snapLinesPlaceholder.lineLeft - originNode.lineLeft <
        snapLinesPlaceholder.lineRight - originNode.lineRight
      ) {
        snapLinesPlaceholder.lineRight = undefined;
      } else if (
        snapLinesPlaceholder.lineLeft - originNode.lineLeft >
        snapLinesPlaceholder.lineRight - originNode.lineRight
      ) {
        snapLinesPlaceholder.lineLeft = undefined;
      }
    }
    if (snapLinesPlaceholder.lineMiddleX && snapLinesPlaceholder.lineRight) {
      if (
        snapLinesPlaceholder.lineMiddleX - originNode.lineMiddleX <
        snapLinesPlaceholder.lineRight - originNode.lineRight
      ) {
        snapLinesPlaceholder.lineRight = undefined;
      } else if (
        snapLinesPlaceholder.lineMiddleX - originNode.lineMiddleX >
        snapLinesPlaceholder.lineRight - originNode.lineRight
      ) {
        snapLinesPlaceholder.lineMiddleX = undefined;
      }
    }

    if (snapLinesPlaceholder.lineTop && snapLinesPlaceholder.lineMiddleY) {
      if (
        snapLinesPlaceholder.lineTop - originNode.lineTop <
        snapLinesPlaceholder.lineMiddleY - originNode.lineMiddleY
      ) {
        snapLinesPlaceholder.lineMiddleY = undefined;
      } else if (
        snapLinesPlaceholder.lineTop - originNode.lineTop >
        snapLinesPlaceholder.lineMiddleY - originNode.lineMiddleY
      ) {
        snapLinesPlaceholder.lineTop = undefined;
      }
    }
    if (snapLinesPlaceholder.lineTop && snapLinesPlaceholder.lineBottom) {
      if (
        snapLinesPlaceholder.lineTop - originNode.lineTop <
        snapLinesPlaceholder.lineBottom - originNode.lineBottom
      ) {
        snapLinesPlaceholder.lineBottom = undefined;
      } else if (
        snapLinesPlaceholder.lineTop - originNode.lineTop >
        snapLinesPlaceholder.lineBottom - originNode.lineBottom
      ) {
        snapLinesPlaceholder.lineTop = undefined;
      }
    }
    if (snapLinesPlaceholder.lineMiddleY && snapLinesPlaceholder.lineBottom) {
      if (
        snapLinesPlaceholder.lineMiddleY - originNode.lineMiddleY <
        snapLinesPlaceholder.lineBottom - originNode.lineBottom
      ) {
        snapLinesPlaceholder.lineBottom = undefined;
      } else if (
        snapLinesPlaceholder.lineMiddleY - originNode.lineMiddleY >
        snapLinesPlaceholder.lineBottom - originNode.lineBottom
      ) {
        snapLinesPlaceholder.lineMiddleY = undefined;
      }
    }
  }
  return snapLinesPlaceholder;
}

function renderLine(axis: Axis, point: number, position: Position) {
  const container = getElementById("root-container")!;
  const pointXTransformed = point * container.scale.x + container.x;
  const pointYTransformed = point * container.scale.x + container.y;
  let line: PIXI.Sprite;

  if (
    !getElementById(position) ||
    (getElementById(position) &&
      axis === "vertical" &&
      getElementById(position)!.x !== pointXTransformed) ||
    (axis === "horizontal" && getElementById(position)!.y !== pointYTransformed)
  ) {
    if (!getElementById(position)) {
      line = createElement(Sprite, position, PIXI.Texture.WHITE);
      line.name = position;
      pixiApp().value!.stage.addChild(line);
      line.tint = PIXI.utils.string2hex("E93372");
      renderedLinesId.push(position);
      console.log("newline");
    }
    const element = getElementById(position) as PIXI.Sprite;
    if (axis === "vertical") {
      element.x = point * container.scale.x + container.x;
      element.y = 0;
      element.width = 1;
      element.height = window.innerHeight - 56;
    } else {
      element.x = 0;
      element.y = point * container.scale.x + container.y;
      element.width = window.innerWidth - 240;
      element.height = 1;
    }
  }
}

export function destroyLines() {
  const ids = renderedLinesId;
  console.log(ids);
  ids.forEach((id) => {
    const element = getElementById(id)!;
    if (element) {
      element.parent.removeChild(element);
      element.destroy();
    }
  });
  ids.splice(0, ids.length);
}

function destroySingle(position: Position) {
  const ids = renderedLinesId;
  const index = ids.findIndex((id) => id === position);
  const element = getElementById(position)!;
  element.parent.removeChild(element);
  element.destroy();

  if (index) {
    ids.splice(index, 1);
  }
}

function renderAllLines(lines: LinePosition, id: string) {
  if (pixiApp().value!.stage.getChildByName("left")) {
    destroySingle("left");
  }
  if (lines.lineLeft) {
    renderLine("vertical", lines.lineLeft, "left");
  }
  if (pixiApp().value!.stage.getChildByName("middleX")) {
    destroySingle("middleX");
  }
  if (lines.lineMiddleX) {
    renderLine("vertical", lines.lineMiddleX, "middleX");
  }
  if (pixiApp().value!.stage.getChildByName("right")) {
    destroySingle("right");
  }
  if (lines.lineRight) {
    renderLine("vertical", lines.lineRight, "right");
  }
  if (pixiApp().value!.stage.getChildByName("top")) {
    destroySingle("top");
  }
  if (lines.lineTop) {
    renderLine("horizontal", lines.lineTop, "top");
  }
  if (pixiApp().value!.stage.getChildByName("middleY")) {
    destroySingle("middleY");
  }
  if (lines.lineMiddleY) {
    renderLine("horizontal", lines.lineMiddleY, "middleY");
  }
  if (pixiApp().value!.stage.getChildByName("bottom")) {
    destroySingle("bottom");
  }
  if (lines.lineBottom) {
    renderLine("horizontal", lines.lineBottom, "bottom");
  }
}

export function setSnapLeft(id: string, lines: LinePosition) {
  const origin = getElementById(id) as PIXI.Sprite;

  if (lines.lineLeft || lines.lineMiddleX || lines.lineRight) {
    if (lines.lineLeft) {
      return lines.lineLeft;
    } else if (lines.lineMiddleX) {
      return lines.lineMiddleX - origin.width / 2;
    } else {
      return lines.lineRight! - origin.width;
    }
  } else return;
}

export function setSnapTop(id: string, lines: LinePosition) {
  const origin = getElementById(id) as PIXI.Sprite;

  if (lines.lineTop || lines.lineMiddleY || lines.lineBottom) {
    if (lines.lineTop) {
      return lines.lineTop;
    } else if (lines.lineMiddleY) {
      return lines.lineMiddleY - origin.height / 2;
    } else {
      return lines.lineBottom! - origin.height;
    }
  } else return;
}

function setPoints(points: Point[]) {}
