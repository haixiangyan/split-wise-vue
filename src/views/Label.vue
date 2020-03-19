<template>
    <Layout>
        <ol class="labels">
            <router-link :to="`/label/edit/${tag.id}`" tag="li" v-for="tag in tags" :key="tag.id">
                <span>{{tag.name}}</span>
                <Icon name="right"/>
            </router-link>
        </ol>
        <div class="create-tag-wrapper">
            <button class="create-tag" @click="createTag">新建标签</button>
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from "vue"
  import {Component} from "vue-property-decorator"
  import tagListModel from '@/models/tagListModel'

  tagListModel.fetch()

  @Component
  export default class Label extends Vue {
    tags = tagListModel.data

    createTag() {
      const name = window.prompt('请输出标签名')
      if (name) {
        const message = tagListModel.create(name)
        if (message === 'duplicated') {
          window.alert('标签名重复了')
        } else if (message === 'success') {
          window.alert('添加成功')
        }
      }
    }
  }
</script>

<style scoped lang="scss">
    .labels {
        background: white;
        font-size: 16px;
        padding-left: 16px;

        > li {
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #e6e6e6;

            svg {
                fill: #666;
                margin-right: 16px;
            }
        }
    }

    .create-tag {
        background: #767676;
        color: white;
        border: none;
        border-radius: 4px;
        height: 40px;
        padding: 0 16px;

        &-wrapper {
            text-align: center;
            padding: 16px;
            margin-top: 44-16px;
        }
    }
</style>
