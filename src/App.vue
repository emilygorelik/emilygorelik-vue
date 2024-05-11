<script setup>
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <div class="app flex h-screen w-screen">
    <Sidebar />
    <router-view class="flex h-full w-fit" />
  </div>
</template>
