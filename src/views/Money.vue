<template>
    <Layout prefix-class="money">
        <NumberPad/>
        <Types xxx="hi"/>
        <Notes/>
        <Tags/>
    </Layout>
</template>

<script lang="ts">
  import NumberPad from '@/components/NumberPad.vue'
  import Tags from '@/components/Tags.vue'
  import Types from '@/components/Types.vue'
  import Notes from '@/components/Notes.vue'
  export default {
    name: "Money",
    components: {Notes, Types, Tags, NumberPad},
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
