<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  fullName: String,
  lastName: String,
});
</script>
<template>
  <h2>{{ props.fullName }} / {{ props.lastName }}</h2>
</template>
