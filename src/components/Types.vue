<template>
    <div>
        <ul class="types">
            <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
            <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
        </ul>
    </div>
</template>

<script lang="ts">
  import Vue from "vue"
  import {Component, Prop} from "vue-property-decorator"

  @Component({
    props: {
      propMessage: String
    }
  })
  export default class Types extends Vue {
    // data
    type = "-"
    // props
    // Prop 告诉 Vue, xxx 不是 data 是 prop
    // Number 告诉 Vue xxx 运行时是个 Number
    // xxx 属性名
    // number | undefined 告诉 TS = xxx 编译时的类型
    @Prop(Number) xxx: number | undefined
    // methods
    selectType(type: string) {
      if (type !== "-" && type !== "+") {
        throw new Error("type is unknown")
      }
      this.type = type
    }
    mounted() {
      if (this.xxx === undefined) {
        console.log("没有xxx")
      }
      else {
        console.log(this.xxx.toString())
      }
    }
  }
</script>

<style scoped lang="scss">
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
</style>
