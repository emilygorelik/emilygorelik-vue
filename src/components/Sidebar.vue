<script setup>
import NavItem from "./NavItem.vue";
</script>

<template>
  <div class="flex h-full w-60 flex-col bg-primary text-primary-content">
    <a href="/">
      <img src="../assets/logo-gold.png" alt="" class="mx-auto my-12 w-1/2" />
    </a>
    <NavItem href="/about-me" label="About Me" />
    <NavItem href="/experience" label="Experience" />
    <NavItem href="/software-projects" label="Software Projects" />
    <NavItem href="/hobbies" label="Hobbies" />
  </div>
</template>
