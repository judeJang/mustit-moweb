<template>
    <article class="order_info" :class="[isOpen ? 'toggle_open' : 'toggle_hide']">
        <div class="title">
            <h2>주문자 정보</h2>
            <div class="summary">홍길동 / 010-1234-5678</div>
            <div class="arr_container" @click="toggle"></div>
            <!-- 클릭영역 -->
        </div>
        <!-- // title -->
        <div class="toggle_box" v-show="isOpen">
            <div class="order_user">
                <dl>
                    <dt>이름</dt>
                    <dd>홍길동</dd>
                </dl>
                <dl>
                    <dt>휴대폰</dt>
                    <dd>010-1234-5678</dd>
                </dl>
                <dl>
                    <dt>이메일</dt>
                    <dd>test123@gmail.com</dd>
                </dl>
                <button type="button" class="btn">변경</button>
            </div>
            <!-- // order_user-->
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
