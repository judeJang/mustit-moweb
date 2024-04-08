<template>
    <section class="layer_all public_content">
        <header>
            <button type="button" class="layer_close" @click="modalClose()"></button>
            <h1>신고 내역</h1>
        </header>
        <div class="layer_container forgery_apply_layer">
            <ForgeryApplyOrderInfo />
            <div class="divider"></div>
            <article class="forgery_history">
                <div class="forgery_layer_container">
                    <div class="layer_title">
                        <h3 class="title">신청 회원정보</h3>
                    </div>
                    <div class="forgery_detail">
                        <dl class="forgery_user_info">
                            <dt>신고자 이름</dt>
                            <dd>홍길동</dd>
                        </dl>
                        <dl class="forgery_user_info">
                            <dt>휴대폰 번호</dt>
                            <dd>010-1234-5678</dd>
                        </dl>
                        <dl class="forgery_user_info">
                            <dt>이메일 주소</dt>
                            <dd>test123@gmail.com</dd>
                        </dl>
                    </div>
                </div>
                <div class="divider"></div>
                <div class="forgery_layer_container">
                    <div class="layer_title">
                        <h3 class="title">신고 내용</h3>
                    </div>
                    <div class="forgery_detail">
                        <div class="text_box">
                            <p>
                                위조품으로 의심되니 확인 부탁드립니다. 위조품으로 의심되니
                                확인 부탁드립니다.
                            </p>
                            <p>위조품으로 의심되니 확인 부탁드립니다.</p>
                            <p>
                                위조품으로 의심되니 확인 부탁드립니다. 위조품으로 의심되니
                                확인 부탁드립니다.
                            </p>
                            <p>위조품으로 의심되니 확인 부탁드립니다.</p>
                        </div>
                        <div class="link_box">
                            <button
                                type="button"
                                class="link"
                                v-for="index in 3"
                                :key="index"
                                @click="imgModalOpen()"
                            >
                                MAW020L00198001_감정서.png
                            </button>
                        </div>
                    </div>
                </div>
                <div class="divider"></div>
                <div class="forgery_layer_container">
                    <div class="layer_title">
                        <h3 class="title">처리 내용</h3>
                    </div>
                    <div class="forgery_detail">
                        <div class="text_box">
                            <p>
                                현재 정품판매보증서약서에 의거한 배상조치 진행중입니다.
                                현재 정품판매보증서약서에 의거한 배상조치 진행중입니다.
                                현재 정품판매보증서약서에 의거한 배상조치 진행중입니다.
                                현재 정품판매보증서약서에 의거한 배상조치 진행중입니다.
                            </p>
                        </div>
                        <div class="date">처리 일자 : 2022-04-29</div>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

<script>
    import EventBus from '@/assets/js/EventBus'
    import ForgeryApplyOrderInfo from '@/views/mypage/ForgeryApplyOrderInfo'
    export default {
        components: {
            ForgeryApplyOrderInfo
        },
        methods: {
            modalClose() {
                EventBus.$emit('forgeryHistoryModalClose')
            },
            imgModalOpen() {
                EventBus.$emit('imageModalOpen')
            }
        }
    }
</script>

<style></style>
