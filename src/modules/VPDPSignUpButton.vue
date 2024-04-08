<template>
    <article class="PDP_sign_up_btn">
        <!-- 만약 버튼이 로그인시 없어진다면 a tag만 숨김처리하면 됩니다. feat 간격 -->
        <a href="#" v-if="true"> 회원가입하고 <strong>최대혜택가로 구매하기</strong> </a>
    </article>
</template>

<script>
    export default {
        name: 'PDP_SIGN_UP',
        props: {
            data: { type: Object }
        }
    }
</script>
