<template>
    <div class="tags">
        <ol class="current">
            <li v-for="tag in tags" :key="tag.id"
                :class="{selected: selectedTags.indexOf(tag.id) >= 0}"
                @click="toggle(tag)">
                {{tag.name}}
            </li>
        </ol>
        <div class="new">
            <button @click="create">新增标签</button>
        </div>
    </div>
</template>

<script lang="ts">
  import Vue from "vue"
  import {Component, Prop} from "vue-property-decorator"

  @Component
  export default class Tags extends Vue {
    @Prop() readonly tags: string[] | undefined
    selectedTags: string[] = []

    create() {
      const name = window.prompt("请输入标签名")
      if (!name) {
        window.alert("标签名不能为空")
        return
      }
      if (this.tags) {
        this.$emit('update:tags', [...this.tags, name])
      }
    }

    toggle(tag: string) {
      const index = this.selectedTags.indexOf(tag)
      if (index >= 0) {
        this.selectedTags.splice(index, 1)
      } else {
        this.selectedTags.push(tag)
      }
      this.$emit('update:selectedTags', this.selectedTags)
    }
  }
</script>

<style scoped lang="scss">
    .tags {
        font-size: 14px;
        padding: 16px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > .current {
            display: flex;
            flex-wrap: wrap;

            > li {
                $bg: #d9d9d9;
                $h: 24px;
                background: #d9d9d9;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                padding: 0 12px;
                margin-right: 12px;
                margin-bottom: 8px;

                &.selected {
                    background: darken($bg, 50%)
                }
            }
        }

        > .new {
            padding: 16px 0;

            button {
                padding: 0 4px;
                background: transparent;
                border: none;
                color: #999;
                border-bottom: 1px solid;
            }
        }
    }
</style>
