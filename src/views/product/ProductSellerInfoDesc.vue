<template>
    <article class="seller_info_desc">
        <div class="notice_box">
            <div class="inner_box">
                <div class="title">
                    <a href="#">공지사항</a>
                </div>
                <div class="list">
                    <ul>
                        <li><a href="#">[할인혜택] 2주간 구매고객 5% 추가할인</a></li>
                        <li><a href="#">설 연휴 휴무 안내(1.31 ~ 2.2)</a></li>
                        <li>
                            <a href="#"
                                >[신상품 입고] 22SS AMI 아미 빅 하트 로고 가디...</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="seller_media">
            <a href="https://m.youtube.com/watch?v=TeZAOqU6WXs">
                <img
                    src="https://img.youtube.com/vi/TeZAOqU6WXs/maxresdefault.jpg"
                    alt="샵이미지"
                />
            </a>
        </div>
        <div class="seller_write">
            <div class="code_box" :class="{ 'on_box': viewMore }">
                <!--
                    test code 
                    판매자가 작성하는 html 영역
                    -->
                <SellerCodeBox />
            </div>
            <div class="btn_accordion">
                <button
                    class="btn_more"
                    :class="{ on_btn: viewMore }"
                    @click="viewMoreBtn()"
                >
                    판매자 소개 {{ btnMoreText }}
                </button>
            </div>
        </div>
    </article>
</template>

<script>
    import SellerCodeBox from '@/views/product/VSellerCodeBox.vue'
    export default {
        name: 'ProductSellerInfoDesc',
        components: {
            SellerCodeBox
        },
        data() {
            return {
                viewMore: false,
                btnMoreText: '더보기'
            }
        },

        mounted() {},

        methods: {
            viewMoreBtn() {
                this.viewMore = !this.viewMore
                if (!this.viewMore) {
                    this.btnMoreText = '더보기'
                } else {
                    this.btnMoreText = '접기'
                }
            }
        }
    }
</script>

<style lang="scss" scoped></style>
