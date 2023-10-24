<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const text = ref('not loaded');

onMounted(async () => {
    const env = await import.meta.env;
  try {
    const response = await axios.get(`${env.VITE_APP_API_BASE_URL}/api/ping`);
    text.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>

<template>
  <div>
    <hr>
    <h1>{{ text }}</h1>
    <hr>
  </div>
</template>
