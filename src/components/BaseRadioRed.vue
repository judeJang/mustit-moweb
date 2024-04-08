<template>
    <div class="b_radio_red">
        <label>
            <input
                type="radio"
                :name="named"
                :checked="isChecked"
                :disabled="disabled"
                :value="value"
                @change="radioChange($event)"
            />
            <span class="circle"></span>
            <span class="text">{{ text }}</span>
        </label>
    </div>
</template>
<script>
    export default {
        props: {
            isChecked: { type: Boolean, default: false },
            disabled: { type: Boolean, default: false },
            text: { type: String, default: '임시 텍스트' },
            named: { type: String, default: 'radio1' },
            value: { type: String, defalut: '' }
        },
        mounted() {
            console.log(this.isChecked)
        },
        methods: {
            radioChange(e) {
                this.$emit('change', e.target.value)
            }
        }
    }
</script>
