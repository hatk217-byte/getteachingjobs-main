<template>
  <div />
</template>

<script setup lang="ts">
// Automatically redirect /teacher-support/services to the main /teacher-support#services section
await navigateTo('/teacher-support#services', { replace: true, redirectCode: 301 })
</script>
