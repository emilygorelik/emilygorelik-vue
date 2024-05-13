<template>
  <div>
    <h2 class="mb-4 text-3xl">{{ title }}</h2>
    <div class="flex">
      <div class="mr-4 w-1/6 border-2">placeholder</div>
      <div class="w-full text-lg text-accent">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
