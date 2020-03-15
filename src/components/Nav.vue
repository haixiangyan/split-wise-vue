<template>
    <nav>
        <router-link to="/money" class="item" active-class="selected">
            <Icon name="money"></Icon>
            记账
        </router-link>
        <router-link to="/label" class="item" active-class="selected">
            <Icon name="label"></Icon>
            标签
        </router-link>
        <router-link to="/statistics" class="item" active-class="selected">
            <Icon name="chart"></Icon>
            统计
        </router-link>
    </nav>
</template>

<script lang="ts">
  import Icon from "./Icon.vue"

  export default {
    name: "Nav",
    components: {Icon}
  }
</script>

<style scoped lang="scss">
    nav {
        display: flex;
        flex-direction: row;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
        font-size: 12px;

        > .item {
            padding: 2px 0;
            width: 33.3333333%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .icon {
                width: 30px;
                height: 30px;
            }
        }
        > .item.selected {
            color: red;
            fill: red;
        }
    }
</style>
