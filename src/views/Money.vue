<template>
    <Layout prefix-class="money">
        <NumberPad :output.sync="record.amount"/>
        <Types :type.sync="record.type"/>
        <Notes @update:note="onUpdateNote"/>
        <Tags :tags.sync="tags" @update:selectedTags="onUpdateSelectedTags"/>
    </Layout>
</template>

<script lang="ts">
  import Vue from "vue"
  import {Component} from "vue-property-decorator"

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
    record: Record = { tags: [], note: '', type: '-', amount: 10 }

    onUpdateSelectedTags(selectedTags: string[]) {
      this.record.tags = selectedTags
    }

    onUpdateAmount(amount: string) {
      this.record.amount = parseFloat(amount)
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
