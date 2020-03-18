<template>
    <Layout prefix-class="money">
        <NumberPad/>
        <Types/>
        <Notes/>
        <Tags :tags.sync="tags"/>
    </Layout>
</template>

<script>
    import NumberPad from '@/components/NumberPad.vue'
    import Tags from '@/components/Tags.vue'
    import Types from '@/components/Types.vue'
    import Notes from '@/components/Notes.vue'

    export default {
        name: "Money",
        data() {
            return {
                tags: ['衣', '食', '住', '行', '玩']
            }
        },
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
