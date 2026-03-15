<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  icon: String,
  title: String,
  description: String,
})
</script>

<template>
  <div class="flex flex-col items-center gap-2 border border-gray-100 p-4 rounded-lg shadow-xs">
    <div class="bg-primary/10 p-1 rounded-lg w-10 h-10 flex items-center justify-center">
      <i :class="'pi pi-' + icon" style="color: #166534"></i>
    </div>
    <p class="font-semibold">{{ title }}</p>
    <p class="text-gray-500 font-normal text-sm text-center">
      {{ description }}
    </p>
  </div>
</template>
