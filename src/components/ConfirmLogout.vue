<template>
    <div>
        <transition name="fade-ani">
            <div class="black_deem" v-if="isConfirmLogout" @click="clickCancle"></div>
        </transition>
        <!-- 로그아웃을 시도하면?-->
        <transition name="slide-up">
            <div class="bottom_confirm self_module" v-if="isConfirmLogout">
                <div class="confirm_text_box">
                    <p class="text">로그아웃 하시려구요?</p>
                    <p class="sub">기다리고 있을게요. 또 오세요!</p>
                </div>
                <div class="confirm_btn_container">
                    <div class="btn_box">
                        <input
                            type="button"
                            value="안할래요"
                            class="btn_cancle"
                            @click="clickCancle"
                        />
                    </div>
                    <div class="btn_box">
                        <a class="btn_confirm" @click.prevent="clickConfirm">
                            로그아웃 하기
                        </a>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import EventBus from '@/assets/js/EventBus'
    export default {
        props: {
            isConfirmLogout: { type: Boolean, required: true }
        },
        methods: {
            clickCancle() {
                EventBus.$emit('closeLogout')
            },
            clickConfirm() {
                EventBus.$emit('confirmLogout')
            }
        }
    }
</script>
