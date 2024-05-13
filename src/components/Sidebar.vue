<script setup>
import NavItem from "./NavItem.vue";
</script>

<template>
  <div class="flex h-full w-60 flex-col bg-primary text-primary-content">
    <a href="/">
      <img src="../assets/logo-gold.png" alt="" class="mx-auto my-12 w-1/2" />
    </a>
    <div class="mx-auto flex gap-4 border-2">
      <a href="https://www.linkedin.com/in/emily-gorelik/" target="_blank"
        ><img src="../assets/linkedin.svg"
      /></a>
      <a href="https://github.com/emilygorelik" target="_blank">th</a>
      <a
        href="https://www.thingiverse.com/emgore1016/designs"
        class="rounded-full p-2 hover:bg-accent"
        target="_blank"
        ><img src="../assets/thingiverse.svg"
      /></a>
    </div>
    <NavItem href="/about-me" label="About Me" />
    <NavItem href="/software-projects" label="Software Projects" />
    <NavItem href="/experience" label="Experience" />
    <NavItem href="/hobbies" label="Hobbies" />
  </div>
</template>
