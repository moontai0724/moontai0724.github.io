<script setup lang="ts">
import Button from "primevue/button";
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <Button type="button" @click="count++">count is {{ count }}</Button>
  </div>
</template>

<style scoped></style>
