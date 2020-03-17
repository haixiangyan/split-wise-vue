<template>
    <div>
        <label class="notes">
            <span class="name">备注</span>
            <input type="text" :value="note" @input="onInput" placeholder="在这里输入备注">
        </label>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component} from "vue-property-decorator"

    @Component
    export default class Notes extends Vue {
      note = ''
      onInput(event: KeyboardEvent) {
        const input = event.target as HTMLInputElement
        this.note = input.value
      }
    }
</script>

<style scoped lang="scss">
    .notes {
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
