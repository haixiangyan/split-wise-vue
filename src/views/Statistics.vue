<template>
    <Layout>
        <Tabs class-prefix="type" :data-source="types" :value.sync="type"></Tabs>
        <ol>
            <li v-for="(group, index) in groupList" :key="index">
                <h3 class="title">{{beautify(group.title)}}</h3>
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
  import dayjs from "dayjs"
  import {Component} from "vue-property-decorator"
  import Tabs from "@/components/Tabs.vue"
  import typeList from "@/constants/typeList"
  import clone from "@/lib/clone"

  @Component({
    components: {Tabs}
  })
  export default class Statistics extends Vue {
    tagString(tags: Tag[]) {
      return tags.length === 0 ? "无" : tags.join(",")
    }

    get recordList() {
      return this.$store.state.recordList as RecordItem[]
    }

    get groupList() {
      const {recordList} = this
      if (recordList.length === 0) {
        return []
      }
      const newList = clone(recordList).filter(r => r.type === this.type)
        .sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf())
      const groupList = [{title: dayjs(recordList[0].createdAt).format("YYYY-MM-DD"), items: [recordList[0]]}]
      for (let i = 1; i < newList.length; i++) {
        const current = newList[i]
        const last = groupList[groupList.length - 1]
        if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
          last.items.push(current)
        } else {
          groupList.push({title: dayjs(current.createdAt).format('YYYY-MM-DD'), items: [current]})
        }
      }
      return groupList
    }

    beautify(title: string) {
      const day = dayjs(title)
      const now = dayjs()
      if (dayjs(title).isSame(now, "day")) {
        return "今天"
      } else if (dayjs(title).isSame(now.subtract(1, "day"))) {
        return "昨天"
      } else if (day.isSame(now, "year")) {
        return day.format("M月D日")
      } else {
        return day.format("YYYY年MM月DD日")
      }
    }

    beforeCreate() {
      this.$store.commit("fetchRecords")
    }

    type = "-"
    types = typeList
  }
</script>

<style scoped lang="scss">
    ::v-deep .type-item {
        background: #c4c4c4;
        &.selected {
            background: white;

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
