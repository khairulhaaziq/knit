<template>
  <div
    class="w-[240px] absolute right-full bg-[#262626] border-[#3A3A3A] mr-[1px] rounded flex flex-col border-y"
  >
    <div class="flex flex-row justify-between pl-3 pr-1 py-[6px]">
      <select name="" id="" class="bg-transparent focus:outline-none">
        <option value="">Solid</option>
      </select>
      <div class="flex flex-row">
        <div
          class="aspect-square h-8 flex flex-col justify-center items-center hover:bg-[#2E2E2E] rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"
            ></path>
          </svg>
        </div>
        <div
          class="aspect-square h-8 flex flex-col justify-center items-center hover:bg-[#2E2E2E] rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </div>
    </div>
    <div
      id="colorHex"
      class="w-full aspect-square flex-none relative color-hex"
      @mousedown.stop.prevent="pickColor"
    >
      <div
        class="h-3 -ml-[6px] -mt-[6px] aspect-square rounded-full -outline-offset-2 outline-none outline-white absolute"
        :style="{ left: posX + 'px', top: posY + 'px' }"
      ></div>
    </div>
    <div class="flex flex-row justify-evenly gap-3 py-4 pl-3 pr-4 w-full">
      <div
        class="aspect-square h-8 flex flex-col justify-center items-center hover:bg-[#2E2E2E] rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m2 22 1-1h3l9-9"></path>
          <path d="M3 21v-3l9-9"></path>
          <path
            d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"
          ></path>
        </svg>
      </div>
      <div class="flex flex-col gap-4 w-full">
        <div
          id="hexSlider"
          class="w-full h-3 rounded-full relative color-saturation-slider"
          @mousedown.stop.prevent="pickHue"
        >
          <div
            class="h-3 aspect-square rounded-full -outline-offset-2 outline-none outline-white absolute"
            :style="{ left: hexSliderX + 'px' }"
          ></div>
        </div>
        <div
          id="opacitySlider"
          class="w-full h-3 rounded-full relative color-opacity-slider"
          @mousedown.stop.prevent="pickOpacity"
        >
          <div
            class="h-3 aspect-square rounded-full -outline-offset-2 outline-none outline-white absolute"
            :style="{ left: opacitySliderX + 'px' }"
          ></div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-row px-3 pb-[10px] border-b border-inherit gap-1 justify-between"
    >
      <select name="" id="" class="bg-transparent focus:outline-none w-16">
        <option value="">RGB</option>
        <option value="">HSL</option>
      </select>
      <div
        class="flex flex-row appearance-none focus-within:outline outline-blue-600"
      >
        <input
          type="number"
          :value="selectedRed"
          class="w-9 pl-[6px] py-[6px] bg-transparent m-0 leading-[10px] focus:outline-none"
        />
        <input
          type="number"
          :value="selectedGreen"
          class="w-9 pl-[6px] py-[6px] bg-transparent m-0 leading-[10px] focus:outline-none"
        />
        <input
          type="number"
          :value="selectedBlue"
          class="w-9 pl-[6px] py-[6px] bg-transparent m-0 leading-[10px] focus:outline-none"
        />
        <input
          type="text"
          :value="selectedOpacity + '%'"
          class="w-11 pl-[6px] py-[6px] bg-transparent m-0 leading-[10px] focus:outline-none"
        />
      </div>
    </div>
    <div class="px-3 py-3 pb-4 flex flex-col gap-3">
      <select name="" id="" class="bg-transparent focus:outline-none w-fit">
        <option value="">Document colors</option>
      </select>
      <div class="grid grid-cols-9 gap-2 px-1">
        <div class="border border-[#3A3A3A] aspect-square"></div>
        <div class="border border-[#3A3A3A] aspect-square"></div>
        <div class="border border-[#3A3A3A] aspect-square"></div>
        <div class="border border-[#3A3A3A] aspect-square"></div>
        <div class="border border-[#3A3A3A] aspect-square"></div>
        <div class="border border-[#3A3A3A] aspect-square"></div>
        <div class="border border-[#3A3A3A] aspect-square"></div>
        <div class="border border-[#3A3A3A] aspect-square"></div>
        <div class="border border-[#3A3A3A] aspect-square"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "~~/src/stores/counter";
import { useCanvasStore } from "@/stores/canvas";

const selectToi = useCounterStore();
const canvasStore = useCanvasStore();

const posX = ref(0);
const posY = ref(0);

const hexSliderX = ref(0);
const opacitySliderX = ref(0);

//opacity store

//color hex store
const hueRed = ref(255);
const hueGreen = ref(0);
const hueBlue = ref(0);

//RGB store

//selected color store
const selectedRed = ref(0);
const selectedGreen = ref(0);
const selectedBlue = ref(0);
const selectedOpacity = ref(100);

type RGB = {
  r: number;
  g: number;
  b: number;
};
// watch selection change to change initial color
watchEffect(() => {
  if (!selectToi.selectedBoxData && canvasStore.showColorMenu) {
    canvasStore.showColorMenu = false;
  }
  if (selectToi.selectedBoxData && canvasStore.showColorMenu) {
    let hexColor = getBackgroundColor();
    let hex: RGB;
    if (hexColor) {
      Promise.resolve()
        .then(() => {
          hex = useHexToRGB(hexColor) as RGB;

          selectedRed.value = hex.r;
          selectedGreen.value = hex.g;
          selectedBlue.value = hex.b;
        })
        .then(() => {
          let color = getColor(hex);

          if (color) {
            posX.value = color.posX;
            posY.value = color.posY;

            if (color.r || color.g || color.b) {
              hueRed.value = color.r;
              hueGreen.value = color.g;
              hueBlue.value = color.b;
            }
          }
        });
    }
  }
});

//styling for hue slider
const RGBColor = computed(
  () =>
    `linear-gradient(to right, rgb(255,255,255),rgb(${hueRed.value},${hueGreen.value},${hueBlue.value}))`
);

//watch hue change and change color
watch(RGBColor, () => {
  setColor();
});

//styling for opacity slider
const opacitySliderColor = computed(
  () =>
    `linear-gradient(to right, rgb(255,255,255),rgb(${selectedRed.value},${selectedGreen.value},${selectedBlue.value}))`
);

type GetColor = {
  posX: number;
  posY: number;
  r?: number;
  g?: number;
  b?: number;
};
//get color
function getColor(hex: RGB): GetColor | undefined {
  if (hex) {
    let color = hex;
    let target = document.querySelector("#colorHex")!;
    let rect = target.getBoundingClientRect();
    let slider = document.querySelector("#hexSlider")!;
    let sliderRect = slider.getBoundingClientRect();
    let sliderRectWidth = sliderRect.width - 6;

    let red = color.r;
    let green = color.g;
    let blue = color.b;

    let max = Math.max(red, green, blue);
    let min = Math.min(red, green, blue);

    // all greyscale colors have hue of 0deg
    if (max - min == 0) {
      let posY = ((255 - red) / 255) * rect.height;
      return { posX: 0, posY: posY };
    }

    // if red is the predominent color
    else if (max === red && green === blue) {
      let posX = ((red - blue) / red) * rect.width;
      let posY = ((255 - red) / 255) * rect.height;
      hexSliderX.value = 0;
      return { posX: posX, posY: posY, r: 255, g: 0, b: 0 };
    }

    // if red is the only predominent color and min is blue
    else if (max === red && min === blue && red !== green) {
      let posY = ((255 - red) / 255) * rect.height;
      let posX = ((red - blue) / red) * rect.width;

      let lightness = (rect.height - posY) / rect.height;
      let saturationGreen = Math.round(green / lightness);

      let hueGreen = Math.round(
        (saturationGreen - ((rect.width - posX) / rect.width) * 255) /
          (posX / rect.width)
      );

      hexSliderX.value = ((hueGreen / 255) * sliderRectWidth) / 6;
      return { posX: posX, posY: posY, r: 255, g: hueGreen, b: 0 };
    }
    //if red and green predominent
    else if (max === red && min === blue && red === green) {
      let posY = ((255 - red) / 255) * rect.height;
      let posX = ((red - blue) / red) * rect.width;

      hexSliderX.value = sliderRectWidth / 6;
      return { posX: posX, posY: posY, r: 255, g: 255, b: 0 };
    }
    // if green is the predominent color and blue is min
    else if (max === green && min === blue && green !== red && blue !== red) {
      let posY = ((255 - green) / 255) * rect.height;
      let posX = ((green - blue) / green) * rect.width;

      let lightness = (rect.height - posY) / rect.height;
      let saturationRed = Math.round(red / lightness);

      let hueRed = Math.round(
        (saturationRed - ((rect.width - posX) / rect.width) * 255) /
          (posX / rect.width)
      );

      hexSliderX.value =
        sliderRectWidth / 6 + ((sliderRectWidth / 6) * (255 - hueRed)) / 255;
      return { posX: posX, posY: posY, r: hueRed, g: 255, b: 0 };
    }
    // if green is predominant and blue and red same and min
    else if (max === green && blue === red) {
      let posY = ((255 - green) / 255) * rect.height;
      let posX = ((green - blue) / green) * rect.width;

      hexSliderX.value = (sliderRectWidth * 2) / 6;
      return { posX: posX, posY: posY, r: 0, g: 255, b: 0 };
    }
    // if green is predominant and red is min
    else if (max === green && min === red && blue !== red && green !== red) {
      let posY = ((255 - green) / 255) * rect.height;
      let posX = ((green - red) / green) * rect.width;

      let lightness = (rect.height - posY) / rect.height;
      let saturationBlue = Math.round(blue / lightness);

      let hueBlue = Math.round(
        (saturationBlue - ((rect.width - posX) / rect.width) * 255) /
          (posX / rect.width)
      );

      hexSliderX.value =
        (sliderRectWidth * 2) / 6 + ((sliderRectWidth / 6) * hueBlue) / 255;
      return { posX: posX, posY: posY, r: 0, g: 255, b: hueBlue };
    }
    // if green and blue is predominant
    else if (max === green && green === blue && green !== red) {
      let posY = ((255 - green) / 255) * rect.height;
      let posX = ((green - red) / green) * rect.width;

      hexSliderX.value = (sliderRectWidth * 3) / 6;
      return { posX: posX, posY: posY, r: 0, g: 255, b: 255 };
    } else if (max === blue && min === red && green !== red) {
      let posY = ((255 - blue) / 255) * rect.height;
      let posX = ((blue - red) / blue) * rect.width;

      let lightness = (rect.height - posY) / rect.height;
      let saturationGreen = Math.round(green / lightness);

      let hueGreen = Math.round(
        (saturationGreen - ((rect.width - posX) / rect.width) * 255) /
          (posX / rect.width)
      );

      hexSliderX.value =
        (sliderRectWidth * 3) / 6 +
        ((sliderRectWidth / 6) * (255 - hueGreen)) / 255;
      return { posX: posX, posY: posY, r: 0, g: hueGreen, b: 255 };
    }
    // if blue is predominant and green and red same and min
    else if (max === blue && green === red) {
      let posY = ((255 - blue) / 255) * rect.height;
      let posX = ((blue - red) / blue) * rect.width;

      hexSliderX.value = (sliderRectWidth * 4) / 6;
      return { posX: posX, posY: posY, r: 0, g: 0, b: 255 };
    }
    //blue is predominant green is min
    else if (max === blue && min === green && green !== red) {
      let posY = ((255 - blue) / 255) * rect.height;
      let posX = ((blue - green) / blue) * rect.width;

      let lightness = (rect.height - posY) / rect.height;
      let saturationRed = Math.round(red / lightness);

      let hueRed = Math.round(
        (saturationRed - ((rect.width - posX) / rect.width) * 255) /
          (posX / rect.width)
      );

      hexSliderX.value =
        (sliderRectWidth * 4) / 6 + ((sliderRectWidth / 6) * hueRed) / 255;
      return { posX: posX, posY: posY, r: hueRed, g: 0, b: 255 };
    }
    // if green and blue is predominant
    else if (max === blue && blue === red && green !== red) {
      let posY = ((255 - blue) / 255) * rect.height;
      let posX = ((blue - red) / blue) * rect.width;

      hexSliderX.value = (sliderRectWidth * 5) / 6;
      return { posX: posX, posY: posY, r: 255, g: 0, b: 255 };
    }
    //red is predominant green is min
    else if (max === red && min === green && green !== blue) {
      let posY = ((255 - red) / 255) * rect.height;
      let posX = ((red - green) / red) * rect.width;

      let lightness = (rect.height - posY) / rect.height;
      let saturationBlue = Math.round(blue / lightness);

      let hueBlue = Math.round(
        (saturationBlue - ((rect.width - posX) / rect.width) * 255) /
          (posX / rect.width)
      );

      hexSliderX.value =
        (sliderRectWidth * 5) / 6 +
        ((sliderRectWidth / 6) * (255 - hueBlue)) / 255;
      return { posX: posX, posY: posY, r: 255, g: 0, b: hueBlue };
    }
  } else return undefined;
}

function setColor() {
  let target = document.querySelector("#colorHex");
  let rect = target.getBoundingClientRect();

  let lightness = (rect.height - posY.value) / rect.height;
  let saturationRed =
    ((rect.width - posX.value) / rect.width) * 255 +
    (posX.value / rect.width) * hueRed.value;
  let saturationGreen =
    ((rect.width - posX.value) / rect.width) * 255 +
    (posX.value / rect.width) * hueGreen.value;
  let saturationBlue =
    ((rect.width - posX.value) / rect.width) * 255 +
    (posX.value / rect.width) * hueBlue.value;

  selectedRed.value = Math.round(saturationRed * lightness);
  selectedGreen.value = Math.round(saturationGreen * lightness);
  selectedBlue.value = Math.round(saturationBlue * lightness);

  changeBackgroundColor(
    useRGBToHex(selectedRed.value, selectedGreen.value, selectedBlue.value)
  );
}

function pickColor(e: MouseEvent) {
  let target = document.querySelector("#colorHex")!;
  let rect = target.getBoundingClientRect();

  posX.value = e.clientX - rect.left;
  posY.value = e.clientY - rect.top - 5;

  setColor();

  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseup", mouseup);

  function mousemove(e: MouseEvent) {
    if (posX.value <= rect.width && e.clientX - rect.left >= 0) {
      posX.value = e.clientX - rect.left;
    }
    if (posY.value <= rect.height && e.clientY - rect.top - 5 >= 0) {
      posY.value = e.clientY - rect.top - 5;
    }
    if (posX.value > rect.width) {
      posX.value = rect.width;
    }
    if (posY.value > rect.height) {
      posY.value = rect.height;
    }
    if (e.clientX - rect.left < 0) {
      posX.value = 0;
    }
    if (e.clientY - rect.top - 5 < 0) {
      posY.value = 0;
    }

    setColor();
  }

  function mouseup() {
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
  }
}

function pickHue(e: MouseEvent) {
  let target = document.querySelector("#hexSlider")!;
  let rect = target.getBoundingClientRect();
  let rectWidth = rect.width - 6;

  hexSliderX.value = e.clientX - rect.left - 6;

  setHexColor(e);

  function setHexColor(e: MouseEvent) {
    if (hexSliderX.value <= rect.width / 6) {
      hueRed.value = 255;
      hueGreen.value = Math.round((hexSliderX.value / (rectWidth / 6)) * 255);
      hueBlue.value = 0;
    }
    if (
      hexSliderX.value <= (rect.width * 2) / 6 &&
      hexSliderX.value > (rect.width * 1) / 6
    ) {
      hueRed.value = Math.round(
        ((rectWidth / 6 - (hexSliderX.value - rectWidth / 6)) /
          (rectWidth / 6)) *
          255
      );
      hueGreen.value = 255;
      hueBlue.value = 0;
    }
    if (
      hexSliderX.value <= (rectWidth * 3) / 6 &&
      hexSliderX.value > (rectWidth * 2) / 6
    ) {
      hueRed.value = 0;
      hueGreen.value = 255;
      hueBlue.value = Math.round(
        ((hexSliderX.value - (rectWidth * 2) / 6) / (rectWidth / 6)) * 255
      );
    }
    if (
      hexSliderX.value <= (rectWidth * 4) / 6 &&
      hexSliderX.value > (rectWidth * 3) / 6
    ) {
      hueRed.value = 0;
      hueGreen.value = Math.round(
        ((rectWidth / 6 - (hexSliderX.value - (rectWidth * 3) / 6)) /
          (rectWidth / 6)) *
          255
      );
      hueBlue.value = 255;
    }
    if (
      hexSliderX.value <= (rectWidth * 5) / 6 &&
      hexSliderX.value > (rectWidth * 4) / 6
    ) {
      hueRed.value = Math.round(
        ((hexSliderX.value - (rectWidth * 4) / 6) / (rectWidth / 6)) * 255
      );
      hueGreen.value = 0;
      hueBlue.value = 255;
    }
    if (
      hexSliderX.value <= rectWidth &&
      hexSliderX.value > (rectWidth * 5) / 6
    ) {
      hueRed.value = 255;
      hueGreen.value = 0;
      hueBlue.value = Math.round(
        ((rectWidth / 6 - (hexSliderX.value - (rectWidth * 5) / 6)) /
          (rectWidth / 6)) *
          255
      );
    }
    if (e.clientX - rect.left > rectWidth) {
      hueRed.value = 255;
      hueGreen.value = 0;
      hueBlue.value = 0;
    }
  }

  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseup", mouseup);

  function mousemove(e: MouseEvent) {
    if (hexSliderX.value <= rect.width - 12 && e.clientX - rect.left - 6 >= 0) {
      hexSliderX.value = e.clientX - rect.left - 6;
    }
    if (hexSliderX.value > rect.width - 12) {
      hexSliderX.value = rect.width - 12;
    }
    if (e.clientX - rect.left - 6 < 0) {
      hexSliderX.value = 0;
    }
    setHexColor(e);
  }

  function mouseup() {
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
  }
}

function setOpacity(e: MouseEvent) {
  let target = document.querySelector("#opacitySlider")!;
  let rect = target.getBoundingClientRect();

  if (e.clientX - rect.left >= 0 && e.clientX - rect.left <= rect.width) {
    selectedOpacity.value = Math.round(
      ((e.clientX - rect.left) / rect.width) * 100
    );
  }
  if (e.clientX - rect.left < 0) {
    selectedOpacity.value = 0;
  }
  if (opacitySliderX.value > rect.width) {
    selectedOpacity.value = 100;
  }
}
function pickOpacity(e: MouseEvent) {
  let target = document.querySelector("#opacitySlider")!;
  let rect = target.getBoundingClientRect();

  opacitySliderX.value = e.clientX - rect.left - 6;

  setOpacity(e);

  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseup", mouseup);

  function mousemove(e: MouseEvent) {
    if (
      opacitySliderX.value <= rect.width - 12 &&
      e.clientX - rect.left - 6 >= 0
    ) {
      opacitySliderX.value = e.clientX - rect.left - 6;
    }
    if (opacitySliderX.value > rect.width - 12) {
      opacitySliderX.value = rect.width - 12;
      selectedOpacity.value = 100;
    }
    if (e.clientX - rect.left - 6 < 0) {
      opacitySliderX.value = 0;
    }
    setOpacity(e);
  }

  function mouseup() {
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
  }
}
</script>

<style scoped>
.color-hex {
  background-image: linear-gradient(to top, rgb(0, 0, 0), rgb(255, 255, 255));
  position: relative;
}
.color-hex::before {
  background-image: v-bind("RGBColor");
  position: absolute;
  inset: 0;
  mix-blend-mode: multiply;
  content: "";
}

.color-saturation-slider {
  background-image: linear-gradient(
    to right,
    rgb(255, 0, 0),
    rgb(255, 255, 0),
    rgb(0, 255, 0),
    rgb(0, 255, 255),
    rgb(0, 0, 255),
    rgb(255, 0, 255),
    rgb(255, 0, 0)
  );
}

.color-opacity-slider {
  background-image: v-bind("opacitySliderColor");
  position: relative;
}

.color-opacity-slider::before {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(45deg, #0000000f 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #0000000f 75%),
    linear-gradient(45deg, transparent 75%, #0000000f 75%),
    linear-gradient(45deg, #0000000f 25%, transparent 25%);
  background-size: 6px 6px;
  background-position: 0 0, 0 0, -3px -3px, 3px 3px;
  mix-blend-mode: multiply;
  content: "";
}
</style>
