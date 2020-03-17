<template>
    <div>
        <ul class="types">
            <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
            <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
        </ul>
    </div>
</template>

<script>
export default {
	name: "Types",
	props: ['xxx'],
	data() {
		return {
			// '-' 表示支出，'+' 表示收入
			type: '-'
		}
	},
	methods: {
		selectType(type) {
			console.log(type)
			if (type !== '-' && type !== '+') {
				throw new Error('type is unkown')
			}
			this.type = type
		}
	},
	mounted() {
		console.log(this.xxx)
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
