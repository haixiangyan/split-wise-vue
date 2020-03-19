<template>
    <div>
        <label class="form-item">
            <span class="name">{{fieldName}}</span>
            <input
                type="text" v-model="note"
                :placeholder="placeholder"
            >
        </label>
    </div>
</template>

<script lang="ts">
  import Vue from "vue"
  import {Component, Prop, Watch} from "vue-property-decorator"

  @Component
  export default class FormItem extends Vue {
    note = ""

    @Prop({required: true}) fieldName!: string
    @Prop(String) placeholder?: string

    @Watch('note')
    onNoteChanged(note: string) {
      this.$emit('update:note', note)
    }
  }
</script>

<style scoped lang="scss">
    .form-item {
        font-size: 14px;
        background: #f5f5f5;
        padding-left: 16px;
        display: flex;
        align-items: center;

        .name {
            padding-right: 16px;
        }

        input {
            height: 64px;
            flex-grow: 1;
            background: transparent;
            border: none;
            padding-right: 16px;
        }
    }
</style>
