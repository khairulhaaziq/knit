import { CSSRuleDetails, Node, useCounterStore } from "~~/src/stores/counter";

//getters
export function getLeft(): number | string | null {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.left) {
      return null;
    } else {
      return selectToi.selectedBoxData.cssRules[0].style.left.value;
    }
  } else return null;
}
export function getTop(): number | string | null {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (selectToi.selectedBoxData.cssRules[0].style.top) {
      return selectToi.selectedBoxData.cssRules[0].style.top.value;
    } else {
      return null;
    }
  } else return null;
}
export function getRight(): number | string | null {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (selectToi.selectedBoxData.cssRules[0].style.right) {
      return selectToi.selectedBoxData.cssRules[0].style.right.value;
    } else {
      return null;
    }
  } else return null;
}
export function getBottom(): number | string | null {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (selectToi.selectedBoxData.cssRules[0].style.bottom) {
      return selectToi.selectedBoxData.cssRules[0].style.bottom.value;
    } else {
      return null;
    }
  } else return null;
}
export function getWidth(): number | string | null {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (selectToi.selectedBoxData.cssRules[0].style.width) {
      return selectToi.selectedBoxData.cssRules[0].style.width.value;
    } else {
      return null;
    }
  } else return null;
}
export function getHeight(): number | string | null {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (selectToi.selectedBoxData.cssRules[0].style.height) {
      return selectToi.selectedBoxData.cssRules[0].style.height.value;
    } else {
      return null;
    }
  } else return null;
}
export function getBorderRadius(): number | string | null {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.borderRadius) {
      return null;
    } else {
      return selectToi.selectedBoxData.cssRules[0].style.borderRadius.value;
    }
  } else return null;
}
export function getGap(): number | string | null {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.gap) {
      return null;
    } else {
      return selectToi.selectedBoxData.cssRules[0].style.gap.value;
    }
  } else return null;
}
export function getPaddingLeft(): number | string | null {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.paddingLeft) {
      return null;
    } else {
      return selectToi.selectedBoxData.cssRules[0].style.paddingLeft.value;
    }
  } else return null;
}
export function getPaddingRight(): number | string | null {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.paddingRight) {
      return null;
    } else {
      return selectToi.selectedBoxData.cssRules[0].style.paddingRight.value;
    }
  } else return null;
}
export function getPaddingTop(): number | string | null {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.paddingTop) {
      return null;
    } else {
      return selectToi.selectedBoxData.cssRules[0].style.paddingTop.value;
    }
  } else return null;
}
export function getPaddingBottom(): number | string | null {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.paddingBottom) {
      return null;
    } else {
      return selectToi.selectedBoxData.cssRules[0].style.paddingBottom.value;
    }
  } else return null;
}
export function getBackgroundColor(): string | null {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.backgroundColor) {
      return null;
    } else {
      let backgroundColor = selectToi.selectedBoxData.cssRules[0].style
        .backgroundColor.value as string;
      return backgroundColor;
    }
  } else return null;
}
export function getColor(): string | null {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.color) {
      return null;
    } else {
      let color = selectToi.selectedBoxData.cssRules[0].style.color
        .value as string;
      return color;
    }
  } else return null;
}
export function getFlexDirection(): number | string | null {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.flexDirection) {
      return null;
    } else {
      return selectToi.selectedBoxData.cssRules[0].style.flexDirection.value;
    }
  } else return null;
}
export function getAlign(): number | string | null {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.alignItems) {
      return null;
    } else {
      return selectToi.selectedBoxData.cssRules[0].style.alignItems.value;
    }
  } else return null;
}
export function getJustify(): number | string | null {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.justifyContent) {
      return null;
    } else {
      return selectToi.selectedBoxData.cssRules[0].style.justifyContent.value;
    }
  } else return null;
}

export function getFontSize(): number | string | null {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.fontSize) {
      return null;
    } else {
      let fontSize = selectToi.selectedBoxData.cssRules[0].style.fontSize.value;
      return fontSize;
    }
  } else return null;
}
export function getLineHeight(): number | string | null {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.lineHeight) {
      return null;
    } else {
      let lineHeight =
        selectToi.selectedBoxData.cssRules[0].style.lineHeight.value;
      return lineHeight;
    }
  } else return null;
}

//functions
export function changeLeft(value: number, unit: string = "px") {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (
      !selectToi.selectedBoxData.cssRules[0].style.left &&
      selectToi.selectedBoxData.cssRules[0].style.position?.value === "absolute"
    ) {
      selectToi.selectedBoxData.cssRules[0].style.left = {
        type: "unit",
        value: value,
        unit: unit,
      };
    }
    if (selectToi.selectedBoxData.cssRules[0].style.left) {
      selectToi.selectedBoxData.cssRules[0].style.left.value = value;
    }
  }
}
export function changeTop(value: number, unit: string = "px") {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (
      !selectToi.selectedBoxData.cssRules[0].style.top &&
      selectToi.selectedBoxData.cssRules[0].style.position?.value === "absolute"
    ) {
      selectToi.selectedBoxData.cssRules[0].style.top = {
        type: "unit",
        value: value,
        unit: unit,
      };
    }
    if (selectToi.selectedBoxData.cssRules[0].style.top) {
      selectToi.selectedBoxData.cssRules[0].style.top.value = value;
    }
  }
}
export function changeWidth(value: number, unit: string = "px") {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.width) {
      selectToi.selectedBoxData.cssRules[0].style.width = {
        type: "unit",
        value: value,
        unit: unit,
      };
    }
    if (selectToi.selectedBoxData.cssRules[0].style.width) {
      selectToi.selectedBoxData.cssRules[0].style.width.value = value;
    }
  }
}
export function changeHeight(value: number, unit: string = "px") {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.height) {
      selectToi.selectedBoxData.cssRules[0].style.height = {
        type: "unit",
        value: value,
        unit: unit,
      };
    }
    if (selectToi.selectedBoxData.cssRules[0].style.height) {
      selectToi.selectedBoxData.cssRules[0].style.height.value = value;
    }
  }
}
export function changeBorderRadius(value: number, unit: string = "px") {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.borderRadius) {
      selectToi.selectedBoxData.cssRules[0].style.borderRadius = {
        type: "unit",
        value: value,
        unit: unit,
      };
    }
    if (selectToi.selectedBoxData.cssRules[0].style.borderRadius) {
      selectToi.selectedBoxData.cssRules[0].style.borderRadius.value = value;
    }
  }
}
export function changeGap(value: number, unit: string = "px") {
  const selectToi = useCounterStore();
  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.gap) {
      selectToi.selectedBoxData.cssRules[0].style.gap = {
        type: "unit",
        value: value,
        unit: unit,
      };
    }
    if (selectToi.selectedBoxData.cssRules[0].style.gap) {
      selectToi.selectedBoxData.cssRules[0].style.gap.value = value;
    }
  }
}
export function changePaddingLeft(value: number, unit: string = "px") {
  const selectToi = useCounterStore();
  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.paddingLeft) {
      selectToi.selectedBoxData.cssRules[0].style.paddingLeft = {
        type: "unit",
        value: value,
        unit: unit,
      };
    }
    if (selectToi.selectedBoxData.cssRules[0].style.paddingLeft) {
      selectToi.selectedBoxData.cssRules[0].style.paddingLeft.value = value;
    }
  }
}
export function changePaddingRight(value: number, unit: string = "px") {
  const selectToi = useCounterStore();
  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.paddingRight) {
      selectToi.selectedBoxData.cssRules[0].style.paddingRight = {
        type: "unit",
        value: value,
        unit: unit,
      };
    }
    if (selectToi.selectedBoxData.cssRules[0].style.paddingRight) {
      selectToi.selectedBoxData.cssRules[0].style.paddingRight.value = value;
    }
  }
}
export function changePaddingTop(value: number, unit: string = "px") {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.paddingTop) {
      selectToi.selectedBoxData.cssRules[0].style.paddingTop = {
        type: "unit",
        value: value,
        unit: unit,
      };
    }
    if (selectToi.selectedBoxData.cssRules[0].style.paddingTop) {
      selectToi.selectedBoxData.cssRules[0].style.paddingTop.value = value;
    }
  }
}
export function changePaddingBottom(value: number, unit: string = "px") {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.paddingBottom) {
      selectToi.selectedBoxData.cssRules[0].style.paddingBottom = {
        type: "unit",
        value: value,
        unit: unit,
      };
    }
    if (selectToi.selectedBoxData.cssRules[0].style.paddingBottom) {
      selectToi.selectedBoxData.cssRules[0].style.paddingBottom.value = value;
    }
  }
}
export function changeFlexDirection(value: string) {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!getFlexDirection()) {
      selectToi.selectedBoxData.cssRules[0].style.flexDirection = {
        type: "keyword",
        value: value,
      };
    }
    if (getFlexDirection()) {
      let flexDirection = selectToi.selectedBoxData.cssRules[0].style
        .flexDirection as CSSRuleDetails;
      flexDirection.value = value;
    }
  }
}
export function changeAlign(value: string) {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.alignItems) {
      selectToi.selectedBoxData.cssRules[0].style.alignItems = {
        type: "keyword",
        value: value,
      };
    }
    if (selectToi.selectedBoxData.cssRules[0].style.alignItems) {
      selectToi.selectedBoxData.cssRules[0].style.alignItems.value = value;
    }
  }
}
export function changeJustify(value: string) {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.justifyContent) {
      selectToi.selectedBoxData.cssRules[0].style.justifyContent = {
        type: "keyword",
        value: value,
      };
    }
    if (selectToi.selectedBoxData.cssRules[0].style.justifyContent) {
      selectToi.selectedBoxData.cssRules[0].style.justifyContent.value = value;
    }
  }
}
export function changeBackgroundColor(value: string) {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.backgroundColor) {
      selectToi.selectedBoxData.cssRules[0].style.backgroundColor = {
        type: "keyword",
        value: value,
      };
    }
    if (selectToi.selectedBoxData.cssRules[0].style.backgroundColor) {
      selectToi.selectedBoxData.cssRules[0].style.backgroundColor.value = value;
    }
  }
}
export function changeColor(value: string) {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.color) {
      selectToi.selectedBoxData.cssRules[0].style.color = {
        type: "keyword",
        value: value,
      };
    }
    if (selectToi.selectedBoxData.cssRules[0].style.color) {
      selectToi.selectedBoxData.cssRules[0].style.color.value = value;
    }
  }
}

export function changeFontSize(value: number, unit: string = "px") {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.fontSize) {
      selectToi.selectedBoxData.cssRules[0].style.fontSize = {
        type: "unit",
        value: value,
        unit: unit,
      };
    }
    if (selectToi.selectedBoxData.cssRules[0].style.fontSize) {
      selectToi.selectedBoxData.cssRules[0].style.fontSize.value = value;
    }
  }
}

export function changeLineHeight(value: number, unit: string = "px") {
  const selectToi = useCounterStore();

  if (selectToi.selectedBoxData && selectToi.selectedBoxData.cssRules) {
    if (!selectToi.selectedBoxData.cssRules[0].style.lineHeight) {
      selectToi.selectedBoxData.cssRules[0].style.lineHeight = {
        type: "unit",
        value: value,
        unit: unit,
      };
    }
    if (selectToi.selectedBoxData.cssRules[0].style.lineHeight) {
      selectToi.selectedBoxData.cssRules[0].style.lineHeight.value = value;
    }
  }
}
