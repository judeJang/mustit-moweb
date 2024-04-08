<template>
    <article class="delivery_current" :class="[isOpen ? 'toggle_open' : 'toggle_hide']">
        <div class="title">
            <h2>현재 배송지</h2>
            <div class="summary">
                홍길동 / 집 / 서울 강남구 압구정로 148 머스트잇빌딩 4층
            </div>
            <div class="arr_container" @click="toggle"></div>
            <!-- 클릭영역 -->
        </div>
        <!-- // title -->
        <div class="toggle_box" v-show="isOpen">
            <div class="locale_info">
                <p class="name">홍길동 / 집</p>
                <p class="addr">
                    (06030) 서울 강남구 압구정로 148 머스트잇빌딩 4층 엘레베이터 앞
                </p>
                <p class="tel">010-1234-5678 / 02-1234-5678</p>
            </div>
        </div>
        <!-- // toggle_box -->
    </article>
    <!-- // order_info -->
</template>

<script>
    export default {
        data: function () {
            return {
                isOpen: false
            }
        },
        methods: {
            toggle() {
                this.isOpen = !this.isOpen
            }
        }
    }
</script>

<style scoped></style>
