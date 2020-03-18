<template>
    <Layout prefix-class="money">
        <NumberPad :output.sync="record.amount" @submit="saveRecord"/>
        <Types :type.sync="record.type"/>
        <Notes @update:note="onUpdateNote"/>
        <Tags :tags.sync="tags" @update:selectedTags="onUpdateSelectedTags"/>
    </Layout>
</template>

<script lang="ts">
  import Vue from "vue"
  import {Component, Watch} from "vue-property-decorator"

  import NumberPad from "@/components/NumberPad.vue"
  import Tags from "@/components/Tags.vue"
  import Types from "@/components/Types.vue"
  import Notes from "@/components/Notes.vue"

  type Record = {
    tags: string[];
    note: string;
    type: string;
    amount: number;
  }

  @Component({
    components: {Tags, Notes, Types, NumberPad}
  })
  export default class Money extends Vue {
    tags = ["衣", "食", "住", "行", "玩"]
    recordList: Record[] = []
    record: Record = { tags: [], note: '', type: '-', amount: 0 }

    onUpdateSelectedTags(selectedTags: string[]) {
      this.record.tags = selectedTags
    }

    saveRecord() {
      const deepClone = JSON.parse(JSON.stringify(this.record))
      this.recordList.push(deepClone)
    }

    @Watch('recordList')
    onRecordListChanged() {
      window.localStorage.setItem('recordList', JSON.stringify(this.recordList))
    }

    onUpdateNote(note: string) {
      this.record.note = note
    }
  }
</script>

<style lang="scss">
    .money-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>

<style scoped lang="scss">
</style>
