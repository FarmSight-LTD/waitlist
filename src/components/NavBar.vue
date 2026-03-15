<script setup>
import logo from '@/assets/img/fs_logo_only.png'
</script>

<template>
  <header class="flex items-center justify-between px-6 py-6 lg:px-20 max-w-7xl mx-auto w-full">
    <div class="flex items-center gap-1">
      <img :src="logo" alt="" class="w-8 h-8" />
      <h2 class="text-lg font-semibold">FarmSight</h2>
    </div>
    <div class="hidden sm:block">
      <span class="text-xs rounded-full bg-primary/10 text-primary px-3 py-2"
        >Early Access Beta</span
      >
    </div>
  </header>
</template>
