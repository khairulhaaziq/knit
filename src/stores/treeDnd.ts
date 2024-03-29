import { defineStore } from "pinia";
import { Node } from "./counter";

export const useTreeDndStore = defineStore({
  id: "treeDnd",
  state: () => ({
    isDragging: false,
    isDroppable: false,
    displayDroppable: false,
    currHover: "",
    currDrop: "",
    currDropPosition: "",
    currDrag: "",
    currDragValue: {} as Node,
    currDropHTML: "",
    clientY: "",
    dragzone: "",
    spareDragzone: "",
  }),
  actions: {
    setCurrDragValue(arr: Node[], value: string) {
      arr.every((i) => {
        if (i.id === value) {
          this.currDragValue = i;
          return false;
        } else {
          this.setCurrDragValue(i.children, value);
          return true;
        }
      });
    },
    removeDroppable() {
      this.currDrop = "";
      this.displayDroppable = false;
      console.log("remove droppable");
    },
    dndRemove(arr: Node[]) {
      arr.every((i) => {
        if (i.id === this.currDrag) {
          arr.splice(
            arr.findIndex(({ id }) => id == this.currDrag),
            1
          );
          return false;
        } else {
          this.dndRemove(i.children);
          return true;
        }
      });
    },
    dndAppendTop(arr: Node[], currDrop: string) {
      arr.every((i) => {
        if (i.id === this.currDrop) {
          if (currDrop) {
            arr.splice(
              arr.findIndex(({ id }) => id == currDrop) + 1,
              0,
              this.currDragValue
            );
            return false;
          }
        } else {
          this.dndAppendTop(i.children, currDrop);
          return true;
        }
      });
    },
    dndAppendBottom(arr: Node[], currDrop: string) {
      arr.every((i) => {
        if (i.id === this.currDrop) {
          if (currDrop) {
            if (arr.findIndex(({ id }) => id == currDrop) === 0) {
              arr.unshift(this.currDragValue);
            } else {
              arr.splice(
                arr.findIndex(({ id }) => id == currDrop),
                0,
                this.currDragValue
              );
              return false;
            }
          }
        } else {
          this.dndAppendBottom(i.children, currDrop);
          return true;
        }
      });
    },
    dndAppendMiddle(arr: Node[], currDrop: string) {
      arr.every((i) => {
        if (i.id === this.currDrop) {
          if (currDrop) {
            i.children.push(this.currDragValue);
            i.expandTree = true;
            return false;
          }
        } else {
          this.dndAppendMiddle(i.children, currDrop);
          return true;
        }
      });
    },
  },
});
