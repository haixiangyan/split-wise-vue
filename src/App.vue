<template>
    <router-view/>
</template>

<style lang="scss">
    @import "~@/assets/styles/helper.scss";
    @import "~@/assets/styles/reset.scss";

    body {
        line-height: 1.5;
        font-family: $font-hei;
        color: #333;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16px;
        background: #f5f5f5;
    }
    .clearfix::after {
        content: '';
        display: block;
        clear: both;
    }
</style>
