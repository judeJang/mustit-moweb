<template>
    <section class="common_confirm_wrap">
        <article class="confirm_content">
            <h2 v-if="mainText">{{ mainText }}</h2>
            <p v-if="subText">{{ subText }}</p>
        </article>
        <div class="confirm_button_box">
            <button type="button" class="btn_negative" @click="close()">
                {{ nagativBtn }}
            </button>
            <button type="button" class="btn_positive" @click="close()">
                {{ positiveBtn }}
            </button>
        </div>
    </section>
</template>
<script>
    export default {
        props: {
            mainText: { type: String, default: '' },
            subText: { type: String, default: '' },
            nagativBtn: { type: String, default: '아니오' },
            positiveBtn: { type: String, default: '네' }
        },
        methods: {
            close() {
                this.$parent.$parent.close()
            }
        }
    }
</script>
