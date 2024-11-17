<script setup lang="ts">
const { data } = await useFetch('/api/hello')
</script>

<template>
  <h1>Testing server route from nuxt layer</h1>
  <pre>{{ data }}</pre>
</template>