<template>
  <template v-for="frame in frames">
    <div
      :style="{
        willChange: 'left, top',
        left: frame.attr?.style?.left
          ? (parseInt(frame.attr?.style?.left) +
              squareStore.offsetLeft / squareStore.scale) *
              squareStore.scale +
            'px'
          : useGetElementRect(frame.id)?.x + 'px',
        top: frame.attr?.style?.top
          ? (parseInt(frame.attr?.style?.top) +
              squareStore.offsetTop / squareStore.scale) *
              squareStore.scale +
            'px'
          : useGetElementRect(frame.id)?.y + 'px',
        width: useGetElementRect(frame.id)?.width + 'px',
        maxWidth: useGetElementRect(frame.id)?.width + 'px',
        overflow: 'hidden',
      }"
      class="fixed overflow-visible -mt-5 will-change-transform pointer-events-auto cursor-default hover:text-[#6EB0E0] hover:opacity-100 overflow-ellipsis"
      :class="{
        'text-[#6EB0E0] opacity-100':
          selectToi.selectedBox === frame.id ||
          selectToi.treeHoverId === frame.id,
        'text-[#FAFAFA] opacity-40':
          selectToi.selectedBox !== frame.id &&
          selectToi.treeHoverId !== frame.id,
      }"
      @mousedown.stop="
        canvasStore.dndWithoutParent($event, frame.id, frame.type)
      "
      @mouseover.stop="
        () => {
          if (!canvasFF.isDragging) {
            useSetOutlineHover(frame.id);
          }
          selectToi.treeHoverId = frame.id;
        }
      "
      @mouseout="
        () => {
          selectToi.treeHover = false;
          selectToi.treeHoverId = '';
        }
      "
      @click="selectToi.changeSelected($event, frame.id, frame.type)"
    >
      <span>
        {{ frame.name }}
      </span>
    </div>
  </template>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
import { useSquareStore } from "@/stores/dataSquare";
import { storeCanvas } from "@/stores/storeCanvas";
import { useCanvasFF } from "@/stores/canvasFreeForm";

const selectToi = useCounterStore();
const squareStore = useSquareStore();
const canvasStore = storeCanvas();
const canvasFF = useCanvasFF();

const props = defineProps({
  frames: Array,
});
</script>