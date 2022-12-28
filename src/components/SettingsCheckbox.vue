<template>
  <div class="mb-4">
    <input :type="type" :id="label" />
    <label class="text-lg text-slate-600 ml-2" :for="label">{{ label }}</label>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  type: String,
});
</script>
