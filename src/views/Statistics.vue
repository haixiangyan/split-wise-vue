<template>
    <Layout>
        <Tabs class-prefix="type" :data-source="types" :value.sync="type"></Tabs>
        <Tabs class-prefix="interval" :value.sync="tab" :data-source="tabs"/>
        <ol>
            <li v-for="(group, index) in result" :key="index">
                <h3 class="title">{{group.title}}</h3>
                <ol>
                    <li v-for="item in group.items" :key="item.id" class="record">
                        <span>{{tagString(item.tags)}}</span>
                        <span class="note">{{item.note}}</span>
                        <span>{{item.amount}}$</span>
                    </li>
                </ol>
            </li>
        </ol>
    </Layout>
</template>

<script lang="ts">
  import Vue from "vue"
  import {Component} from "vue-property-decorator"
  import Tabs from "@/components/Tabs.vue"
  import intervalList from "@/constants/intervalList"
  import typeList from "@/constants/typeList"

  @Component({
    components: {Tabs}
  })
  export default class Statistics extends Vue {
    tagString(tags: Tag[]) {
      return tags.length === 0 ? "无" : tags.join(",")
    }

    get recordList() {
      return this.$store.state.recordList
    }

    get result() {
      type Items = RecordItem[]
      type HashTableValue = { title: string; items: Items }

      const {recordList} = this
      const hashTable: { [key: string]: HashTableValue } = {}
      for (let i = 0; i < recordList.length; i++) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const [date, time] = recordList[i].createdAt!.split("T")
        hashTable[date] = hashTable[date] || {title: date, items: []}
        hashTable[date].items.push(recordList[i])
      }
      return hashTable
    }

    beforeCreate() {
      this.$store.commit("fetchRecords")
    }

    type = "-"
    tab = "day"
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

    ::-v-deep .interval-wrapper {
        height: 48px !important;
    }

    %item {
        padding: 8px 16px;
        min-height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .title {
        @extend %item;
    }

    .record {
        background: white;
        @extend %item;
    }
    .note {
        margin-right: auto;
        margin-left: 16px;
        color: #999;
    }
</style>
