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
            <button @click="createTag">新增标签</button>
        </div>
    </div>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator"
  import {mixins} from "vue-class-component"
  import TagHelper from "@/mixins/TagHelper"

  @Component
  export default class Tags extends mixins(TagHelper) {
    get tags() {
      return this.$store.state.tagList
    }

    selectedTags: string[] = []

    created() {
      this.$store.commit('fetchTags')
    }

    toggle(tag: string) {
      const index = this.selectedTags.indexOf(tag)
      if (index >= 0) {
        this.selectedTags.splice(index, 1)
      } else {
        this.selectedTags.push(tag)
      }
      this.$emit("update:selectedTags", this.selectedTags)
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
        background: white;

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
