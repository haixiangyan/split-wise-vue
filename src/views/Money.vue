<template>
    <Layout prefix-class="money">
        <NumberPad :output.sync="record.amount" @submit="saveRecord"/>
        <Types :type.sync="record.type"/>
        <div class="notes">
            <FormItem field-name="备注" placeholder="在这里输入备注" :value.sync="record.note"/>
        </div>
        <Tags :tags.sync="tags" @update:selectedTags="onUpdateSelectedTags"/>
    </Layout>
</template>

<script lang="ts">
  import Vue from "vue"
  import {Component} from "vue-property-decorator"

  import NumberPad from "@/components/NumberPad.vue"
  import Tags from "@/components/Tags.vue"
  import Types from "@/components/Types.vue"
  import FormItem from "@/components/FormItem.vue"
  import xxx from "@/lib/xxx"

  @Component({
    components: {Tags, FormItem, Types, NumberPad}
  })
  export default class Money extends Vue {
    tags = xxx.tagList
    recordList = xxx.recordList

    record: RecordItem = { tags: [], note: '', type: '-', amount: 0 }

    onUpdateSelectedTags(selectedTags: string[]) {
      this.record.tags = selectedTags
    }

    saveRecord() {
      xxx.createRecord(this.record)
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
    .notes {
        padding: 12px 0;
    }
</style>
