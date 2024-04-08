<template>
    <button
        type="button"
        class="btn_zzim"
        ref="btn_zzim"
        :class="{ active: isLiked }"
        @click.prevent="clickButton"
    >
        <LottieAnimation
            :options="optionsOff"
            :height="24"
            :width="24"
            ref="animOff"
            @animCreated="handleAnimationOff"
            v-show="isLiked"
        />
        <LottieAnimation
            :options="optionsOn"
            :height="24"
            :width="24"
            ref="animOn"
            @animCreated="handleAnimationOn"
            v-show="!isLiked"
        />
    </button>
</template>
<script>
    import LottieAnimation from 'vue-lottie'
    // import * as animationData from '@/assets/img/230825_loading_spinner.json'
    import * as heartOn from '@/assets/img/lp_heart_on.json'
    import * as heartOff from '@/assets/img/lp_heart_off.json'
    // https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/front/lottie/lp_heart_off.json
    // https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/front/lottie/lp_heart_on.json

    export default {
        components: {
            LottieAnimation
        },
        data() {
            return {
                optionsOn: {
                    animationData: heartOn,
                    animationSpeed: 1,
                    autoplay: false,
                    loop: false
                },
                optionsOff: {
                    animationData: heartOff,
                    animationSpeed: 1,
                    autoplay: false,
                    loop: false
                },
                isLiked: false
            }
        },
        methods: {
            handleAnimationOn: function (anim) {
                this.animOn = anim
            },
            handleAnimationOff: function (anim) {
                this.animOff = anim
            },
            clickButton: function () {
                let target = this.isLiked ? this.animOff : this.animOn
                target.play()
                target.onComplete = () => {
                    this.isLiked = !this.isLiked
                    target.goToAndStop(0, true)
                }
            }
        }
    }
</script>
