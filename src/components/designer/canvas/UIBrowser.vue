<template>
  <template v-for="node in nodes" :key="node.id">
    <component
      :is="node.type === 'text' || node.type === 'box' ? 'div' : node.type"
      :data-droppable="
        node.type === 'text' || node.type === 'box' ? null : true
      "
      :data-id="node.id"
      :data-component="node.type"
      @mousedown.stop="mousedown($event, node.id, node.type)"
      @mouseout="!canvasStore.isPinchZoom ? mouseout(node.id, node.type) : ''"
      @mouseover.stop="
        !canvasStore.isPinchZoom ? mouseover(node.id, node.type) : ''
      "
      @dblclick.stop="dblclick(node.id, node.type)"
      :class="{
        'pointer-events-none':
          selectToi.selectedBox === node.id &&
          canvasStore.isDragging &&
          (node.type !== 'text' ||
            (node.type === 'text' &&
              canvasStore.isDragging &&
              selectToi.selectedTextEditor !== node.id)),
        '!hidden': node.display && node.display === 'hide',
      }"
      :style="styleProps(node, depth)"
    >
      <div
        v-if="node.type === 'text'"
        v-html="node.textContent"
        class="cursor-default whitespace-pre"
        :class="{
          'underline decoration-[#0191FA]':
            selectToi.selectedBox === node.id && !canvasStore.isDragging,
          'hover:underline decoration-[#0191FA]': !canvasStore.isDragging,
          'opacity-0': selectToi.selectedTextEditor === node.id,
        }"
        :style="{
          textDecorationThickness:
            canvasStore.textHover && selectToi.selectedBox !== node.id
              ? `${2 / squareStore.scale}px`
              : `${1 / squareStore.scale}px`,
        }"
        draggable="false"
      ></div>
      <DesignerCanvasUIBrowser
        v-else-if="node.children"
        :key="node.id"
        :nodes="node.children"
        :depth="depth + 1"
      />
    </component>
  </template>
</template>

<script setup lang="ts">
import { Node, useCounterStore } from "~~/src/stores/counter";
import { useSquareStore } from "~~/src/stores/dataSquare";
import { usePaddingResizeStore } from "~~/src/stores/paddingResizeStore";
import { useCanvasStore } from "~~/src/stores/canvas";

const selectToi = useCounterStore();
const squareStore = useSquareStore();
const paddingResize = usePaddingResizeStore();
const canvasStore = useCanvasStore();

function dblclick(id: string, type: string) {
  if (type === "text") {
    makeEditable(id);
  }
  function makeEditable(id: string) {
    selectToi.selectedTextEditor = id;
    useSetOutlineSelector("");
  }
}

function mousedown(e: MouseEvent, id: string, type: string) {
  if (type !== "text" || selectToi.selectedTextEditor !== id) {
    if (!squareStore.dragPointer && !squareStore.draggingPointer) {
      if (!useCheckParent(id) && !canvasStore.selection.length) {
        canvasStore.dndWithoutParent(e, id);
      }
      if (useCheckParent(id) && !canvasStore.selection.length) {
        canvasStore.dndWithParent(e, id);
      }
      if (canvasStore.selection.length) {
        canvasStore.setPositionMultiElement(e);
      }
      canvasStore.hoverId = "";
      selectToi.treeHoverId = "";
    }
  } else return;
}

function mouseout(id: string, type: string) {
  selectToi.treeHover = false;
  selectToi.treeHoverId = "";
  canvasStore.textHover = false;
  canvasStore.hoverId = "";

  if (selectToi.selectedBox === id && type !== "text") {
    paddingResize.showPaddingResizer = false;
  }
}

function mouseover(id: string, type: string) {
  if (
    selectToi.selectedBox !== id &&
    type !== "text" &&
    (type !== "box" || (type === "box" && !canvasStore.isDragging)) &&
    canvasStore.selection.findIndex((i) => i.id === id) === -1 &&
    !canvasStore.isResizingGap &&
    !canvasStore.isResizingPadding &&
    !canvasStore.isDragging &&
    !canvasStore.isPinchZoom
  ) {
    canvasStore.hoverId = id;
  } else if (
    selectToi.selectedBox !== id &&
    type === "text" &&
    !canvasStore.isDragging
  ) {
    canvasStore.textHover = true;
  }
  selectToi.treeHoverId = id;

  if (event.altKey) {
    calculateDistance(selectToi.selectedBoxData.id, selectToi.treeHoverId);
  }
  if (selectToi.selectedBox === id) {
    canvasStore.hoverId = "";
    selectToi.treeHoverId = "";
  }
}

const props = defineProps({
  nodes: Array<Node>,
  depth: {
    type: Number,
    default: 0,
  },
});

function styleProps(node: Node, depth: number) {
  return {
    display: node.cssRules[0]?.style?.display?.value,
    flexDirection: node.cssRules[0]?.style?.flexDirection?.value,
    justifyContent: node.cssRules[0]?.style?.justifyContent?.value,
    alignItems: node.cssRules[0]?.style?.alignItems?.value,
    gap:
      node.cssRules[0]?.style?.gap?.value! +
      node.cssRules[0]?.style?.gap?.unit!,
    borderRadius:
      node.cssRules[0]?.style?.borderRadius?.value! +
      node.cssRules[0]?.style?.borderRadius?.unit!,
    position: node.cssRules[0]?.style?.position?.value,
    left:
      depth !== 0
        ? node.cssRules[0]?.style?.left?.value! +
          node.cssRules[0]?.style?.left?.unit!
        : "",
    top:
      depth !== 0
        ? node.cssRules[0]?.style?.top?.value! +
          node.cssRules[0]?.style?.top?.unit!
        : "",
    right:
      node.cssRules[0]?.style?.right?.value! +
      node.cssRules[0]?.style?.right?.unit!,
    bottom:
      node.cssRules[0]?.style?.bottom?.value! +
      node.cssRules[0]?.style?.bottom?.unit!,
    height:
      node.cssRules[0]?.style?.height?.type === "unit"
        ? node.cssRules[0]?.style?.height?.value +
          node.cssRules[0]?.style?.height?.unit!
        : node.cssRules[0]?.style?.height?.value,
    width:
      node.cssRules[0]?.style?.width?.type === "unit"
        ? node.cssRules[0]?.style?.width?.value +
          node.cssRules[0]?.style?.width?.unit!
        : node.cssRules[0]?.style?.width?.value,
    backgroundColor: node.cssRules[0]?.style?.backgroundColor?.value,
    color: node.cssRules[0]?.style?.color?.value,
    fontSize:
      node.cssRules[0]?.style?.fontSize?.value! +
      node.cssRules[0]?.style?.fontSize?.unit!,
    lineHeight:
      node.cssRules[0]?.style?.lineHeight?.value! +
      node.cssRules[0]?.style?.lineHeight?.unit!,
    paddingLeft:
      node.cssRules[0]?.style?.paddingLeft?.value! +
      node.cssRules[0]?.style?.paddingLeft?.unit!,
    paddingRight:
      node.cssRules[0]?.style?.paddingRight?.value! +
      node.cssRules[0]?.style?.paddingRight?.unit!,
    paddingTop:
      node.cssRules[0]?.style?.paddingTop?.value! +
      node.cssRules[0]?.style?.paddingTop?.unit!,
    paddingBottom:
      node.cssRules[0]?.style?.paddingBottom?.value! +
      node.cssRules[0]?.style?.paddingBottom?.unit!,
    transform:
      depth === 0
        ? `translate(${node.cssRules[0]?.style?.left?.value}px, ${node.cssRules[0]?.style?.top?.value}px)`
        : "",
    transition: "all 0s linear",
  };
}

useHead({
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
      crossorigin: "",
    },
  ],
});
</script>
