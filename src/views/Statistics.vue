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
  import Tabs from "@/components/Tabs.vue"
  import intervalList from "@/constants/intervalList"
  import typeList from "@/constants/typeList"

  @Component({
    components: {Tabs}
  })
  export default class Statistics extends Vue{
    type = '-'
    tab = 'day'
    tabs = intervalList
    types = typeList
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
