<template>
    <Layout>
        edit
    </Layout>
</template>

<script lang="ts">
  import Vue from "vue"
  import {Component} from "vue-property-decorator"
  import tagListModel from "@/models/tagListModel"

  @Component
  export default class EditLabel extends Vue {
    created() {
      const id = this.$route.params.id
      tagListModel.fetch()
      const tags = tagListModel.data
      const tag = tags.find(tag => tag.id === id)
      if (tag) {
        console.log(tag)
      } else {
        this.$router.replace('/404')
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
