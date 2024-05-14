<script setup>
import NavItem from "./NavItem.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { dom } from "@fortawesome/fontawesome-svg-core";

library.add(far, fab, fas);
</script>

<template>
  <div class="flex h-full w-60 flex-col bg-primary text-primary-content">
    <a href="/">
      <img src="../assets/logo-gold.png" alt="" class="mx-auto mt-12 w-1/2" />
    </a>
    <div class="my-8 flex justify-center gap-1">
      <a
        href="https://www.linkedin.com/in/emily-gorelik/"
        target="_blank"
        title="LinkedIn"
      >
        <font-awesome-icon
          :icon="['fab', 'linkedin']"
          class="aspect-square h-8 rounded p-1 text-secondary hover:bg-accent"
        />
      </a>
      <a href="https://github.com/emilygorelik" target="_blank" title="Github">
        <font-awesome-icon
          :icon="['fab', 'github']"
          class="aspect-square h-8 rounded-full p-1 text-secondary hover:bg-accent"
        />
      </a>
      <a
        href="https://www.thingiverse.com/emgore1016/designs"
        target="_blank"
        title="Thingiverse"
      >
        <font-awesome-icon
          :icon="['fas', 't']"
          class="aspect-square h-8 rounded-full p-1 text-secondary hover:bg-accent"
        />
      </a>
    </div>
    <NavItem href="/about-me" label="About Me" />
    <NavItem href="/software-projects" label="Software Projects" />
    <NavItem href="/experience" label="Experience" />
    <NavItem href="/hobbies" label="Hobbies" />
  </div>
</template>
