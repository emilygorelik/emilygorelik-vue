<template>
  <div>
    <p class="mb-4 text-lg">{{ title }}</p>
    <div class="flex">
      <!-- TODO: add project imgs -->
      <div class="mr-4 w-1/6 border-2">placeholder</div>
      <div class="w-full text-base">
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
