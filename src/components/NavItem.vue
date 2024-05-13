<template>
  <router-link
    :to="href"
    class="mb-8 mr-4 flex rounded-r p-4 text-xl text-secondary transition-all duration-300 ease-in-out hover:bg-accent"
    >{{ label }}</router-link
  >
</template>

<script>
export default {
  name: "NavItem",
  props: {
    href: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
