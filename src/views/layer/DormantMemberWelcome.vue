<template>
    <article class="layer_welcome_back self_module">
        <button
            type="button"
            class="layer_close"
            title="close layer"
            @click="close()"
        ></button>
        <div class="welcome_content">
            <img
                :src="`${$S3}m_popup/welcome_back.png`"
                alt="welcome back!"
                class="img_welcome"
            />
            <div class="txt_box">
                <h2 class="txt_main">고객님, 다시 뵙게 되어 반갑습니다.</h2>
                <p class="txt">
                    머스트잇을 잊지 않고, 방문해 주셔서 감사합니다. <br />
                    최근 <strong class="emph_primary">1년 동안</strong> 방문이 뜸하셨네요.
                </p>
                <p class="txt">
                    안정적인 서비스 제공을 위해 <br />
                    <strong class="emph_primary">휴대폰 본인인증</strong>을 실행해 주세요.
                </p>
            </div>
            <div class="btn_box">
                <button type="button" class="btn_confirm">본인인증하기</button>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        methods: {
            close() {
                this.$parent.close()
            }
        }
    }
</script>
