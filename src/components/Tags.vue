<template>
    <div class="tags">
        <ol class="current">
            <li v-for="tag in tags" :key="tag"
                :class="{selected: selectedTags.indexOf(tag) >= 0}"
                @click="select(tag)">
                {{tag}}
            </li>
        </ol>
        <div class="new">
            <button>新增标签</button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop} from 'vue-property-decorator'

    @Component
    export default class Tags extends Vue {
      @Prop() tags: string[] | undefined
      selectedTags: string[] = []

      select(tag: string) {
        this.selectedTags.push(tag)
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
