import { useCounterStore } from "../stores/counter";
import { usePaddingResizeStore } from "../stores/paddingResizeStore";
import { useCanvasStore } from "../stores/canvas";
import { useSquareStore } from "../stores/dataSquare";

export function useResizeGap(e: MouseEvent) {
  const selectToi = useCounterStore();
  const squareStore = useSquareStore();

  if (selectToi.selectedBoxData) {
    const paddingResize = usePaddingResizeStore();
    const canvasStore = useCanvasStore();
    canvasStore.isResizingGap = true;
    canvasStore.cursorType =
      getFlexDirection() && getFlexDirection() === "column"
        ? "row-resize"
        : "col-resize";

    let prevY = e.clientY;
    let prevX = e.clientX;
    let prevGap: number;
    if (getGap()) {
      prevGap = getGap() as number;
    } else prevGap = 0;

    document.addEventListener("mousemove", mousemove);
    document.addEventListener("mouseup", mouseup);

    function mousemove(e: MouseEvent) {
      function update() {
        if (!getGap() || getGap()! >= 0) {
          if (getFlexDirection() && getFlexDirection() === "column") {
            changeGap(
              Math.round(prevGap + (e.clientY - prevY) / squareStore.scale)
            );
          } else {
            changeGap(
              Math.round(prevGap + (e.clientX - prevX) / squareStore.scale)
            );
          }
        }
        if (getGap() && getGap()! <= 0) {
          changeGap(0);
        }
        if (getGap()) {
          canvasStore.cursorLabel = getGap() as string;
        } else canvasStore.cursorLabel = "";
        paddingResize.setGap(selectToi.selectedBoxData.id);
      }
      requestAnimationFrame(update);
    }

    function mouseup() {
      function update() {
        canvasStore.isResizingGap = false;
        canvasStore.cursorLabel = "";
        canvasStore.cursorType = "";
        document.removeEventListener("mousemove", mousemove);
        document.removeEventListener("mouseup", mouseup);
      }
      requestAnimationFrame(update);
    }
  }
}
