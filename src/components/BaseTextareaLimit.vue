<template>
    <div class="b_textarea_limit_box">
        <textarea
            :placeholder="placeholder"
            :maxlength="max"
            @input="textValue($event)"
        ></textarea
        ><span class="limit_length"
            ><span class="current">{{ current }}</span> / {{ max }}
        </span>
    </div>
</template>
<script>
    export default {
        props: {
            placeholder: { type: String, default: '최대 40자까지 입력 가능합니다.' },
            max: { type: Number, default: 50 }
        },
        data() {
            return {
                current: 0,
                alertShow: false
            }
        },
        methods: {
            textValue(e) {
                this.current = e.target.value.length
                if (this.current >= this.max && !this.alertShow) {
                    alert('입력을 초과하셨습니다.')
                    this.alertShow = true
                }
            }
        }
    }
</script>
