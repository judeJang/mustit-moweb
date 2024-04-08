<template>
    <section class="common_alert_wrap account_list">
        <header class="common_alert_header">
            <h1>구매 계정 선택</h1>
            <button
                type="button"
                class="layer_close"
                title="close layer"
                @click="close()"
            ></button>
        </header>
        <article class="common_alert_content">
            <p class="info">
                이미 가입된 계정 중 1개의 계정으로만 상품 구매가 가능합니다.
                <span class="c_red">최초 1회에 한하여</span> 구매 계정 변경을 할 수 있으며
                이후에는 변경이 어렵습니다.
            </p>
            <p class="tip">
                쿠폰, 적립금, 상품권에 관한 기타 문의는 고객센터로 연락해주세요.
            </p>
            <p class="tip">
                선택한 계정으로 로그인 시 장바구니는 비워지므로 상품을 다시 담아주세요.
            </p>
            <div class="inner_scroll">
                <ul>
                    <li class="your_id">
                        <div class="b_radio_red">
                            <label>
                                <input
                                    type="radio"
                                    name="mode"
                                    checked
                                    value="OrderReturn"
                                />
                                <span class="circle"></span>
                                <span class="text">K@2392273***</span>
                            </label>
                        </div>
                    </li>
                    <li class="your_id verified">
                        <div class="b_radio_red">
                            <label>
                                <input type="radio" name="mode" value="OrderReturn" />
                                <span class="circle"></span>
                                <span class="text">grkimT***</span>
                            </label>
                        </div>
                    </li>
                    <li class="your_id verified">
                        <div class="b_radio_red">
                            <label>
                                <input type="radio" name="mode" value="OrderReturn" />
                                <span class="circle"></span>
                                <span class="text">grkimT***</span>
                            </label>
                        </div>
                    </li>
                    <li class="your_id verified">
                        <div class="b_radio_red">
                            <label>
                                <input type="radio" name="mode" value="OrderReturn" />
                                <span class="circle"></span>
                                <span class="text">grkimT***</span>
                            </label>
                        </div>
                    </li>
                    <li class="your_id verified">
                        <div class="b_radio_red">
                            <label>
                                <input type="radio" name="mode" value="OrderReturn" />
                                <span class="circle"></span>
                                <span class="text">grkimT***</span>
                            </label>
                        </div>
                    </li>
                    <li class="your_id verified">
                        <div class="b_radio_red">
                            <label>
                                <input type="radio" name="mode" value="OrderReturn" />
                                <span class="circle"></span>
                                <span class="text">grkimT***</span>
                            </label>
                        </div>
                    </li>
                    <li class="your_id verified">
                        <div class="b_radio_red">
                            <label>
                                <input type="radio" name="mode" value="OrderReturn" />
                                <span class="circle"></span>
                                <span class="text">grkimT***</span>
                            </label>
                        </div>
                    </li>
                    <li class="your_id verified">
                        <div class="b_radio_red">
                            <label>
                                <input type="radio" name="mode" value="OrderReturn" />
                                <span class="circle"></span>
                                <span class="text">grkimT***</span>
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="btn_box">
                <button
                    type="button"
                    class="bottom_btn"
                    title="close layer"
                    onclick="popup_close_fade();"
                >
                    선택한 계정으로 구매하기
                </button>
            </div>
        </article>
    </section>
</template>
<script>
    import EventBus from '@/assets/js/EventBus'
    export default {
        components: {},
        data: function () {
            return {}
        },
        methods: {
            close() {
                EventBus.$emit('AccountSelectClose')
            }
        }
    }
</script>
<style scoped></style>
