<template>
    <Layout prefix-class="money">
        <div class="number-pad">
            <div class="amount">100</div>
            <div class="number">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button class="ok-button">OK</button>
                <button class="zero-button">0</button>
                <button>.</button>
            </div>
        </div>
        <div>
            <ul class="types">
                <li class="selected">支出</li>
                <li>收入</li>
            </ul>
        </div>
        <div>
            <label class="notes">
                <span class="name">备注</span>
                <input type="text" placeholder="在这里输入备注">
            </label>
        </div>
        <div class="tags">
            <ol class="current">
                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>
            </ol>
            <div class="new">
                <button>新增标签</button>
            </div>
        </div>
    </Layout>
</template>

<script lang="ts">
  export default {
    name: "Money",
  }
</script>

<style lang="scss">
    .money-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>

<style scoped lang="scss">
    @import "~@/assets/styles/helper.scss";
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
                $h: 24px;
                background: #d9d9d9;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                padding: 0 12px;
                margin-right: 12px;
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
    .types {
        background: #c4c4c4;
        display: flex;
        text-align: center;
        font-size: 24px;
        > li {
            width: 50%;
            height: 64px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            &.selected::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: #333;
            }
        }
    }
    .number-pad {
        .amount {
            @extend %clearfix;
            @extend %innerShadow;
            text-align: right;
            font-size: 36px;
            font-family: Consolas, monospace;
            padding: 9px 16px;
        }
        .number {
            @extend %clearfix;
            > button {
                width: 25%;
                height: 64px;
                float: left;
                background: transparent;
                border: none;
                &.ok-button {
                    height: 64*2px;
                    float: right;
                }
                &.zero-button {
                    width: 25*2%;
                }
                $bg: #f2f2f2;
                &:nth-child(1) {
                    background: $bg;
                }
                &:nth-child(2), &:nth-child(5) {
                    background: darken($bg, 4%);
                }
                &:nth-child(3), &:nth-child(6), &:nth-child(9) {
                    background: darken($bg, 4*2%);
                }
                &:nth-child(4), &:nth-child(7), &:nth-child(10) {
                    background: darken($bg, 4*3%);
                }
                &:nth-child(8), &:nth-child(11), &:nth-child(13) {
                    background: darken($bg, 4*4%);
                }
                &:nth-child(14) {
                    background: darken($bg, 4*5%);
                }
                &:nth-child(12) {
                    background: darken($bg, 4*6%);
                }
            }
        }
    }
</style>
