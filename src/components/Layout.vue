<template>
    <div class="layout-wrapper" :class="prefixClass && `${prefixClass}-wrapper`">
        <div class="content" :class="prefixClass && `${prefixClass}-content`">
            <slot/>
        </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
  export default {
    props: ['prefixClass'],
    name: "Layout"
  }
</script>

<style scoped lang="scss">
    .layout-wrapper {
        display: flex;
        flex-direction: column;
        height: 100vh;

        .content {
            overflow: auto;
            flex-grow: 1;
        }
    }
</style>
