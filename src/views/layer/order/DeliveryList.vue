<template>
    <section class="layer_all">
        <header>
            <button type="button" class="layer_close" @click="modalClose()"></button>
            <h2>배송지 목록</h2>
        </header>
        <div class="layer_container fix_bottom_button delivery_content list">
            <div class="divider"></div>
            <DeliveryCurrent />
            <div class="divider"></div>
            <ul class="delivery_locales_list">
                <li class="default locale_info">
                    <div>
                        <p class="name">홍길동 / 집</p>
                        <p class="addr">
                            (06030) 서울 강남구 압구정로 148 머스트잇빌딩 4층 엘레베이터
                            앞
                        </p>
                        <p class="tel">010-5640-0229</p>
                    </div>
                    <div class="btn_container">
                        <button class="white_btn">수정</button>
                        <button class="select_btn" @click="openConfirm()">선택</button>
                    </div>
                </li>
                <li class="locale_info">
                    <div>
                        <p class="name">회사</p>
                        <p class="addr">
                            (06030) 서울 강남구 압구정로 148 머스트잇빌딩 4층
                        </p>
                        <p class="tel">010-1234-5678 / 02-1234-5678</p>
                    </div>
                    <div class="btn_container">
                        <button class="white_btn">수정</button>
                        <button class="white_btn">삭제</button>
                        <button class="select_btn" @click="openConfirm()">선택</button>
                    </div>
                </li>
                <li class="locale_info">
                    <div>
                        <p class="name">머스트잇</p>
                        <p class="addr">
                            (06030) 서울 강남구 압구정로 148 머스트잇빌딩 4층 엘레베이터
                            문 앞
                        </p>
                        <p class="tel">010-1234-5678 / 02-1234-5678</p>
                    </div>
                    <div class="btn_container">
                        <button class="white_btn">수정</button>
                        <button class="white_btn">삭제</button>
                        <button class="select_btn" @click="openConfirm()">선택</button>
                    </div>
                </li>

                <!-- 리스트 없는경우  -->
                <li class="empty_list" id="emptyList" style="display: none">
                    등록된 배송지가 없습니다.<br />
                    새로운 배송지를 등록해 주세요.
                </li>
            </ul>

            <div class="fix_button">
                <button type="button" class="black"><i></i>새로운 배송지 등록</button>
            </div>
        </div>
    </section>
</template>
<script>
    import Vue from 'vue'
    import DeliveryCurrent from './DeliveryCurrent.vue'
    export default {
        components: {
            DeliveryCurrent
        },
        methods: {
            modalClose: function () {
                this.$parent.close()
            },
            openConfirm: function () {
                Vue.Alert.open('views/layer/order/ConfirmDeliverySelectModal')
            }
        }
    }
</script>

<style scoped></style>
