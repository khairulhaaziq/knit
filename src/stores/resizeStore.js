import { defineStore } from "pinia";
import { useCounterStore } from "./counter";
import { useSquareStore } from "./dataSquare";

export const useResizeStore = defineStore({
  id: "resize",

  state: () => ({
    isResizing: false,
  }),
  actions: {
    resizeBottomRight(e) {
      const squareStore = useSquareStore();
      if (!squareStore.dragPointer && !squareStore.draggingPointer) {
        const selectToi = useCounterStore();

        let prevWidth = selectToi.selectedBoxData.width;
        let prevHeight = selectToi.selectedBoxData.height;

        let prevX = e.clientX;
        let prevY = e.clientY;

        this.isResizing = true;

        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);

        function mousemove(e) {
          selectToi.selectedBoxData.width =
            prevWidth + ((e.clientX - prevX) * 1) / squareStore.scale;
          selectToi.selectedBoxData.height =
            prevHeight + ((e.clientY - prevY) * 1) / squareStore.scale;
          selectToi.selectedBoxHTMLWidth =
            prevWidth + ((e.clientX - prevX) * 1) / squareStore.scale;
          selectToi.selectedBoxHTMLHeight =
            prevHeight + ((e.clientY - prevY) * 1) / squareStore.scale;
          console.log("mousemove!");
        }

        function mouseup() {
          this.isResizing = false;
          window.removeEventListener("mousemove", mousemove);
          window.removeEventListener("mouseup", mouseup);
          console.log("mouseup!");
        }
      }
    },
    resizeBottomLeft(e) {
      const squareStore = useSquareStore();
      if (!squareStore.dragPointer && !squareStore.draggingPointer) {
        const selectToi = useCounterStore();

        let prevWidth = selectToi.selectedBoxData.width;
        let prevHeight = selectToi.selectedBoxData.height;
        let prevWidth2 = selectToi.selectedBoxData.X;
        let prevWidthX = selectToi.selectedBoxHTMLX;

        let prevX = e.clientX;
        let prevY = e.clientY;

        this.isResizing = true;

        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);

        function mousemove(e) {
          selectToi.selectedBoxData.width = Math.round(
            prevWidth + ((prevX - e.clientX) * 1) / squareStore.scale
          );
          selectToi.selectedBoxData.height = Math.round(
            prevHeight + ((e.clientY - prevY) * 1) / squareStore.scale
          );
          selectToi.selectedBoxHTMLWidth = Math.round(
            prevWidth + ((prevX - e.clientX) * 1) / squareStore.scale
          );
          selectToi.selectedBoxHTMLHeight = Math.round(
            prevHeight + ((e.clientY - prevY) * 1) / squareStore.scale
          );
          selectToi.selectedBoxHTMLX = Math.round(
            prevWidthX + ((e.clientX - prevX) * 1) / squareStore.scale
          );
          selectToi.selectedBoxData.X = Math.round(
            prevWidth2 + ((e.clientX - prevX) * 1) / squareStore.scale
          );
          console.log("mousemove!");
        }

        function mouseup() {
          this.isResizing = false;
          window.removeEventListener("mousemove", mousemove);
          window.removeEventListener("mouseup", mouseup);
          console.log("mouseup!");
        }
      }
    },
    resizeTopLeft(e) {
      const squareStore = useSquareStore();
      if (!squareStore.dragPointer && !squareStore.draggingPointer) {
        const selectToi = useCounterStore();

        let prevWidth = selectToi.selectedBoxData.X;
        let prevHeight = selectToi.selectedBoxData.Y;
        let prevWidthX = selectToi.selectedBoxHTMLX;
        let prevHeightY = selectToi.selectedBoxHTMLY;
        let prevWidth2 = selectToi.selectedBoxData.width;
        let prevHeight2 = selectToi.selectedBoxData.height;

        let prevX = e.clientX;
        let prevY = e.clientY;

        this.isResizing = true;

        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);

        function mousemove(e) {
          selectToi.selectedBoxData.X =
            prevWidth + ((e.clientX - prevX) * 1) / squareStore.scale;
          selectToi.selectedBoxData.Y =
            prevHeight + ((e.clientY - prevY) * 1) / squareStore.scale;
          selectToi.selectedBoxData.width =
            prevWidth2 + ((prevX - e.clientX) * 1) / squareStore.scale;
          selectToi.selectedBoxData.height =
            prevHeight2 + ((prevY - e.clientY) * 1) / squareStore.scale;

          selectToi.selectedBoxHTMLWidth =
            prevWidth2 + ((prevX - e.clientX) * 1) / squareStore.scale;
          selectToi.selectedBoxHTMLHeight =
            prevHeight2 + ((prevY - e.clientY) * 1) / squareStore.scale;
          selectToi.selectedBoxHTMLX =
            prevWidthX + ((e.clientX - prevX) * 1) / squareStore.scale;
          selectToi.selectedBoxHTMLY =
            prevHeightY + ((e.clientY - prevY) * 1) / squareStore.scale;
          console.log("mousemove!");
        }

        function mouseup() {
          this.isResizing = false;
          window.removeEventListener("mousemove", mousemove);
          window.removeEventListener("mouseup", mouseup);
          console.log("mouseup!");
        }
      }
    },
    resizeTopRight(e) {
      const squareStore = useSquareStore();
      if (!squareStore.dragPointer && !squareStore.draggingPointer) {
        const selectToi = useCounterStore();

        let prevWidth = selectToi.selectedBoxData.width;
        let prevHeight = selectToi.selectedBoxData.Y;
        let prevHeight2 = selectToi.selectedBoxData.height;
        let prevHeightY = selectToi.selectedBoxHTMLY;

        let prevX = e.clientX;
        let prevY = e.clientY;

        this.isResizing = true;

        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);

        function mousemove(e) {
          selectToi.selectedBoxData.width =
            prevWidth + ((e.clientX - prevX) * 1) / squareStore.scale;
          selectToi.selectedBoxData.Y =
            prevHeight + ((e.clientY - prevY) * 1) / squareStore.scale;
          selectToi.selectedBoxData.height =
            prevHeight2 + ((prevY - e.clientY) * 1) / squareStore.scale;
          selectToi.selectedBoxHTMLWidth =
            prevWidth + ((e.clientX - prevX) * 1) / squareStore.scale;
          selectToi.selectedBoxHTMLHeight =
            prevHeight2 + ((prevY - e.clientY) * 1) / squareStore.scale;

          selectToi.selectedBoxHTMLY =
            prevHeightY + ((e.clientY - prevY) * 1) / squareStore.scale;

          console.log("mousemove!");
        }

        function mouseup() {
          this.isResizing = false;
          window.removeEventListener("mousemove", mousemove);
          window.removeEventListener("mouseup", mouseup);
          console.log("mouseup!");
        }
      }
    },
    resizeRight(e) {
      const squareStore = useSquareStore();
      if (!squareStore.dragPointer && !squareStore.draggingPointer) {
        const selectToi = useCounterStore();

        let prevWidth = selectToi.selectedBoxData.width;

        let prevX = e.clientX;

        this.isResizing = true;

        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);

        function mousemove(e) {
          selectToi.selectedBoxData.width =
            prevWidth + ((e.clientX - prevX) * 1) / squareStore.scale;
          selectToi.selectedBoxHTMLWidth =
            prevWidth + ((e.clientX - prevX) * 1) / squareStore.scale;
        }

        function mouseup() {
          this.isResizing = false;
          window.removeEventListener("mousemove", mousemove);
          window.removeEventListener("mouseup", mouseup);
          console.log("mouseup!");
        }
      }
    },
    resizeLeft(e) {
      const squareStore = useSquareStore();
      if (!squareStore.dragPointer && !squareStore.draggingPointer) {
        const selectToi = useCounterStore();

        let prevWidth = selectToi.selectedBoxData.width;
        let prevWidth2 = selectToi.selectedBoxData.X;
        let prevWidthX = selectToi.selectedBoxHTMLX;

        let prevX = e.clientX;

        this.isResizing = true;

        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);

        function mousemove(e) {
          selectToi.selectedBoxData.width =
            prevWidth + ((prevX - e.clientX) * 1) / squareStore.scale;
          selectToi.selectedBoxData.X =
            prevWidth2 + ((e.clientX - prevX) * 1) / squareStore.scale;
          selectToi.selectedBoxHTMLWidth =
            prevWidth + ((prevX - e.clientX) * 1) / squareStore.scale;
          selectToi.selectedBoxHTMLX =
            prevWidthX + ((e.clientX - prevX) * 1) / squareStore.scale;
        }

        function mouseup() {
          this.isResizing = false;
          window.removeEventListener("mousemove", mousemove);
          window.removeEventListener("mouseup", mouseup);
          console.log("mouseup!");
        }
      }
    },
    resizeTop(e) {
      const squareStore = useSquareStore();
      if (!squareStore.dragPointer && !squareStore.draggingPointer) {
        const selectToi = useCounterStore();

        let prevHeight = selectToi.selectedBoxData.height;
        let prevHeight2 = selectToi.selectedBoxData.Y;
        let prevHeightY = selectToi.selectedBoxHTMLY;

        let prevY = e.clientY;

        this.isResizing = true;

        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);

        function mousemove(e) {
          selectToi.selectedBoxData.height =
            prevHeight + ((prevY - e.clientY) * 1) / squareStore.scale;
          selectToi.selectedBoxData.Y =
            prevHeight2 + ((e.clientY - prevY) * 1) / squareStore.scale;
          selectToi.selectedBoxHTMLHeight =
            prevHeight + ((prevY - e.clientY) * 1) / squareStore.scale;
          selectToi.selectedBoxHTMLY =
            prevHeightY + ((e.clientY - prevY) * 1) / squareStore.scale;
        }

        function mouseup() {
          isResizing = false;
          window.removeEventListener("mousemove", mousemove);
          window.removeEventListener("mouseup", mouseup);
          console.log("mouseup!");
        }
      }
    },
    resizeBottom(e) {
      const squareStore = useSquareStore();
      if (!squareStore.dragPointer && !squareStore.draggingPointer) {
        const selectToi = useCounterStore();

        let prevHeight = selectToi.selectedBoxData.height;

        let prevY = e.clientY;

        this.isResizing = true;

        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);

        function mousemove(e) {
          selectToi.selectedBoxData.height =
            prevHeight + ((e.clientY - prevY) * 1) / squareStore.scale;
          selectToi.selectedBoxHTMLHeight =
            prevHeight + ((e.clientY - prevY) * 1) / squareStore.scale;
        }

        function mouseup() {
          this.isResizing = false;
          window.removeEventListener("mousemove", mousemove);
          window.removeEventListener("mouseup", mouseup);
          console.log("mouseup!");
        }
      }
    },
  },
});