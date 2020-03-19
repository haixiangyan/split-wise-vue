<template>
    <Layout>
        <div class="nav-bar">
            <Icon class="back-icon" name="left" @click="back"/>
            <span class="title">编辑标签</span>
            <Icon class="empty-icon"/>
        </div>
        <div class="form-wrapper">
            <FormItem field-name="标签名"
                      placeholder="请输入标签名"
                      :value="tag.name"
                      @update:value="updateTag"
            />
        </div>
        <div class="button-wrapper">
            <Button @click="removeTag">删除标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from "vue"
  import {Component} from "vue-property-decorator"
  import FormItem from "@/components/FormItem.vue"
  import Button from "@/components/Button.vue"

  @Component({
    components: {FormItem, Button},
  })
  export default class EditLabel extends Vue {
    tag?: Tag

    created() {
      this.tag = this.$store.getters.findTag(this.$route.params.id)
      if (!this.tag) {
        this.$router.replace("/404")
      }
    }

    updateTag(name: string) {
      if (this.tag) {
        this.$store.commit('updateTag', {id: this.tag.id, name})
      }
    }

    removeTag() {
      if (this.tag) {
        this.$store.commit('removeTag', this.tag.id)
      }
    }

    back() {
      this.$router.push("/label")
    }
  }
</script>

<style scoped lang="scss">
    .nav-bar {
        text-align: center;
        font-size: 16px;
        padding: 12px 16px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title {

        }

        .back-icon, .empty-icon {
            width: 16px;
            height: 16px;
        }
    }

    .form-wrapper {
        background: white;
        margin-top: 8px;
    }

    .button-wrapper {
        text-align: center;
        padding: 16px;
        margin-top: 44-16px;
    }
</style>
