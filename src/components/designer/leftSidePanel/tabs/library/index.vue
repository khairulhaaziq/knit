<template>
  <div class="flex flex-col pt-[5px] gap-[1px] pb-3">
    <div class="flex flex-row justify-between pl-4 pr-2 items-center">
      <p class="font-medium">Library</p>
      <div
        class="aspect-square h-8 flex flex-col justify-center items-center rounded opacity-80 hover:bg-[#2E2E2E] hover:opacity-100 transition-all duration-300"
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
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </div>
    </div>
    <div class="flex flex-row items-center pb-2">
      <input
        placeholder="Search library"
        class="flex-grow bg-transparent px-4 py-2 focus:outline-none placeholder-[#EFEEF1] placeholder-opacity-60"
      />
    </div>
    <div class="flex flex-col border-t border-[#3A3A3A] p-2">
      <div class="flex flex-row gap-[10px] pl-2 items-center">
        <p class="flex-grow opacity-80">Font</p>
        <div
          class="aspect-square h-8 flex flex-col justify-center items-center rounded opacity-80 hover:bg-[#2E2E2E] hover:opacity-100 transition-all duration-300"
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
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
      </div>
      <div
        class="flex flex-row gap-[10px] px-2 py-2 items-center border border-transparent hover:bg-[#2E2E2E] rounded-md opacity-80 hover:opacity-100"
      >
        <div
          class="aspect-square h-[14px] flex items-center justify-center opacity-80"
        >
          <p>Ag</p>
        </div>
        <p class="flex-grow">Inter</p>
      </div>
      <div
        class="flex flex-row gap-[10px] px-2 py-2 items-center border border-transparent hover:bg-[#2E2E2E] rounded-md opacity-80 hover:opacity-100"
      >
        <div
          class="aspect-square h-[14px] flex items-center justify-center opacity-80"
        >
          <p>Ag</p>
        </div>
        <p class="flex-grow">SF Pro</p>
      </div>
    </div>
    <div class="flex flex-col border-t border-[#3A3A3A] p-2">
      <div class="flex flex-row gap-[10px] pl-2 items-center">
        <p class="flex-grow opacity-80">Text</p>
        <div
          class="aspect-square h-8 flex flex-col justify-center items-center rounded opacity-80 hover:bg-[#2E2E2E] hover:opacity-100 transition-all duration-300"
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
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
      </div>
      <div
        class="flex flex-row gap-[10px] px-2 py-2 items-center border border-transparent hover:bg-[#2E2E2E] rounded-md opacity-80 hover:opacity-100"
      >
        <div
          class="aspect-square h-[14px] flex items-center justify-center opacity-80"
        >
          <p>Ag</p>
        </div>
        <p class="flex-grow">text-xs</p>
      </div>
      <div
        class="flex flex-row gap-[10px] px-2 py-2 items-center border border-transparent hover:bg-[#2E2E2E] rounded-md opacity-80 hover:opacity-100"
      >
        <div
          class="aspect-square h-[14px] flex items-center justify-center opacity-80"
        >
          <p>Ag</p>
        </div>
        <p class="flex-grow">text-sm</p>
      </div>
      <div
        class="flex flex-row gap-[10px] px-2 py-2 items-center border border-transparent hover:bg-[#2E2E2E] rounded-md opacity-80 hover:opacity-100"
      >
        <div
          class="aspect-square h-[14px] flex items-center justify-center opacity-80"
        >
          <p>Ag</p>
        </div>
        <p class="flex-grow">text-md</p>
      </div>
    </div>
    <div class="flex flex-col border-t border-[#3A3A3A] p-2">
      <div class="flex flex-row gap-[10px] pl-2 items-center">
        <p class="flex-grow opacity-80">Colors</p>
        <div
          class="aspect-square h-8 flex flex-col justify-center items-center rounded opacity-80 hover:bg-[#2E2E2E] hover:opacity-100 transition-all duration-300"
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
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
      </div>
      <div
        class="flex flex-row gap-[10px] px-2 py-2 items-center border border-transparent hover:bg-[#2E2E2E] rounded-md"
      >
        <div class="aspect-square h-[14px] bg-slate-300 rounded-full"></div>
        <p class="flex-grow opacity-80">Color 1</p>
      </div>
      <div
        class="flex flex-row gap-[10px] px-2 py-2 items-center border border-transparent hover:bg-[#2E2E2E] rounded-md"
      >
        <div class="aspect-square h-[14px] bg-slate-300 rounded-full"></div>
        <p class="flex-grow opacity-80">Color 1</p>
      </div>
      <div
        class="flex flex-row gap-[10px] px-2 py-2 items-center border border-transparent hover:bg-[#2E2E2E] rounded-md"
      >
        <div class="aspect-square h-[14px] bg-slate-300 rounded-full"></div>
        <p class="flex-grow opacity-80">Color 1</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "~~/src/stores/counter";

const route = useRoute();
const paramsId = route.params.id;
const paramsPageId = route.params.pageId;

const selectToi = useCounterStore();
</script>
