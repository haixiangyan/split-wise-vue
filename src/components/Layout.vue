<template>
    <div class="nav-wrapper">
        <div class="content">
            <slot/>
        </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
  export default {
    name: "Layout"
  }
</script>

<style scoped lang="scss">
    .nav-wrapper {
        display: flex;
        flex-direction: column;
        height: 100vh;

        .content {
            overflow: auto;
            flex-grow: 1;
        }
    }
</style>
