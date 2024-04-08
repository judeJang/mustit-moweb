<template>
    <select
        class="b_select"
        required
        @change="selectChange($event)"
        :class="{ 'selected': isSelected }"
    >
        <option
            v-for="(opt, index) in data"
            :key="index"
            :value="index"
            :selected="opt.selected"
        >
            {{ opt.text }}
        </option>
    </select>
</template>
<script>
    export default {
        props: {
            selectOpt: {
                type: Array,
                default: () => [
                    { text: '배송시 요청사항을 선택해 주세요', selected: true },
                    { text: '부재시 경비실에 맡겨주세요.', selected: false },
                    { text: '부재시 휴대폰으로 연락바랍니다.', selected: false },
                    { text: '집 앞에 놓아주세요.', selected: false },
                    { text: '배송전에 연락주세요.', selected: false },
                    { text: '택배함에 넣어주세요.', selected: false },
                    { text: '직접 입력', selected: false }
                ]
            },
            select: { type: Boolean, default: false } //option text color change
        },
        data() {
            return {
                isSelected: this.select,
                data: this.selectOpt
            }
        },
        methods: {
            selectChange(e) {
                this.isSelected = e.target.value == 0 ? false : true
                this.$emit('change', e.target.value)
            }
        }
    }
</script>
