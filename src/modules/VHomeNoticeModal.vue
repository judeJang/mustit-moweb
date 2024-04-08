<template>
    <transition name="fade-ani">
        <section class="self_module notice_modal" v-if="hasNotice">
            <div class="black_deem" @click="close()"></div>
            <div
                class="notice_modal_content"
                style="
                    background-image: url('https://mustit-upload.s3.ap-northeast-2.amazonaws.com/mobile/popup/mo_notice_bg.png');
                "
            >
                <div class="contents">
                    <h2 class="title">시스템 점검 안내</h2>
                    <div class="desc_container">
                        보다 안정적인 서비스 제공을 위해<br />
                        아래와 같이 시스템 점검을 진행 할 예정입니다.<br />
                        점검 시간 동안 모든 서비스가<br />
                        일시적으로 중단되오니 양해 부탁 드립니다.<br /><br />
                        보다 안정적인 서비스 제공을 위해<br />
                        아래와 같이 시스템 점검을 진행 할 예정입니다.<br />
                        점검 시간 동안 결제/로그인 시<br />
                        장애가 발생할 수 있으니 양해 부탁 드립니다.
                    </div>
                </div>
                <div class="bottom">
                    <button type="button" @click="coockieClose()">다시 보지 않기</button>
                    <button type="button" @click="close()">닫기</button>
                </div>
            </div>
        </section>
    </transition>
</template>

<script>
    import { getCookie, setCookie } from '@/assets/js/Common'

    const HTML = document.getElementsByTagName('html')[0]
    const BODY = document.body
    export default {
        name: 'NoticeModal',
        data() {
            return {
                hasNotice: true
            }
        },
        watch: {
            hasNotice(update) {
                if (!update) {
                    HTML.classList.remove('html_scroll')
                    BODY.classList.remove('body_scroll')
                }
            }
        },
        created() {
            if (getCookie('noticeModal') == 'Y') {
                this.hasNotice = false
            } else {
                HTML.classList.add('html_scroll')
                BODY.classList.add('body_scroll')
            }
        },
        methods: {
            close() {
                this.hasNotice = false
            },
            coockieClose() {
                setCookie('noticeModal', 'Y')
                this.close()
            }
        }
    }
</script>
