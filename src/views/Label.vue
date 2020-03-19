<template>
    <Layout>
        <ol class="labels">
            <router-link :to="`/label/edit/${tag.id}`" tag="li" v-for="tag in tags" :key="tag.id">
                <span>{{tag.name}}</span>
                <Icon name="right"/>
            </router-link>
        </ol>
        <div class="create-tag-wrapper">
            <Button @click.native="createTag">新建标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
  import {Component} from "vue-property-decorator"
  import Button from '@/components/Button.vue'
  import tagHelper from '@/mixins/TagHelper'
  import {mixins} from "vue-class-component"
  import TagHelper from "@/mixins/TagHelper"

  @Component({
    components: {Button}
  })
  export default class Label extends mixins(TagHelper) {
    get tags() {
      return this.$store.state.tagList
    }

    created() {
      this.$store.commit('fetchTags')
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

    .create-tag-wrapper {
        text-align: center;
        padding: 16px;
        margin-top: 44-16px;
    }
</style>
