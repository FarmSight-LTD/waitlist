<script setup>
import logo from '@/assets/img/fs_logo_only.png'
</script>

<template>
  <div
    class="flex flex-col sm:flex-row w-full mt-16 justify-between px-6 py-6 border-t border-gray-200 text-xs"
  >
    <div class="flex flex-row gap-1 items-center">
      <img :src="logo" alt="" class="w-6 h-6" />
      <p class="font-semibold text-gray-600">FarmSight</p>
    </div>
    <div class="flex sm:flex-row flex-col gap-3 font-semibold ml-6 md:ml-0 mt-2 md:mt-0">
      <p class="text-gray-400">Terms of Service</p>
      <p class="text-gray-400">Privacy Policy</p>
    </div>
    <p class="text-gray-400 mt-2 md:mt-0 ml-6 md:ml-0">© 2026 FarmSight. All rights reserved.</p>
  </div>
</template>
