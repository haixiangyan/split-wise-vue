<template>
    <div class="nav">
        <router-link to="/money">Money</router-link>
        |
        <router-link to="/label">标签</router-link>
        |
        <router-link to="/statistics">统计</router-link>
    </div>
</template>

<script lang="ts">
  export default {
    name: "Nav"
  }
</script>

<style scoped lang="scss">
    .nav {
        border: 1px solid red;
    }
</style>
