<template>
  <div>
    <div class="flex">
      <!-- TODO: add job imgs -->
      <div class="mr-4 w-1/6 border-2">placeholder</div>
      <div class="w-full text-lg">
        <p class="text-lg">{{ jobTitle }} | {{ company }}</p>
        <p class="mb-2 text-lg italic">{{ startDate }} - {{ endDate }}</p>
        <div class="text-base">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    jobTitle: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
  },
};
</script>
