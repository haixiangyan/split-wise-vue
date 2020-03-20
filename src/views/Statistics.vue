<template>
    <Layout>
        <Tabs class-prefix="type" :data-source="types" :value.sync="type"></Tabs>
        <Tabs class-prefix="interval" :value.sync="tab" :data-source="tabs"/>
        <div>
            {{type}}
            {{tab}}
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from "vue-property-decorator"
  import Types from "@/components/Types.vue"
  import Tabs from "@/components/Tabs.vue"

  @Component({
    components: {Types, Tabs}
  })
  export default class Statistics extends Vue{
    type = '-'
    tab = 'day'
    tabs = [
      {text: '按天', value: 'day'},
      {text: '按周', value: 'week'},
      {text: '按月', value: 'month'},
    ]
    types = [
      {text: '支出', value: '-'},
      {text: '收入', value: '+'}
    ]
  }
</script>

<style scoped lang="scss">
::v-deep .type-item {
    background: white;
    &.selected {
        background: #c4c4c4;
        &::after {
            display: none;
        }
    }
}
</style>
