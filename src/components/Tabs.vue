<template>
    <ul class="tabs" :class="{[`${classPrefix}-wrapper`]: classPrefix}">
        <li
            @click="select(item)"
            v-for="item in dataSource"
            class="tabs-item"
            :class="{selected: item.value === value, [`${classPrefix}-item`]: classPrefix}"
            :key="item.value">
            {{item.text}}
        </li>
    </ul>
</template>

<script lang="ts">
  import Vue from "vue"
  import {Component, Prop} from "vue-property-decorator"

  type DataSourceItem = {
    text: string;
    value: string;
  }

  @Component
  export default class Tabs extends Vue {
    @Prop({required: true, type: Array})
    dataSource!: DataSourceItem
    @Prop(String)
    readonly value!: string
    @Prop(String)
    classPrefix?: string

    select(item: DataSourceItem) {
      this.$emit("update:value", item.value)
    }
  }
</script>

<style scoped lang="scss">
    .tabs {
        background: #c4c4c4;
        display: flex;
        text-align: center;
        font-size: 24px;

        &-item {
            width: 50%;
            height: 64px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;

            &.selected::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: #333;
            }
        }
    }
</style>
