<template>
    <footer class="static_footer self_module">
        <article class="top_container">
            <div class="policy_link">
                <a href="#"> <strong>머스트잇만의 안전한 정책</strong>을 확인하세요! </a>
            </div>
            <div class="tabs">
                <a
                    :href="`${VUE_URL}/m/board/purchasing_safety_campaign?contents=compensation_forgery`"
                    class="tab"
                >
                    <p class="strong">무조건 200%</p>
                    <p class="desc">정품 책임 보상</p>
                </a>
                <a
                    :href="`${VUE_URL}/m/board/purchasing_safety_campaign?contents=delayed_delivery_compensation`"
                    class="tab"
                >
                    <p class="strong">최대 10만원</p>
                    <p class="desc">품절/배송 지연 보상</p>
                </a>
                <a
                    :href="`${VUE_URL}/m/board/purchasing_safety_campaign?contents=direct_deal_report_reward`"
                    class="tab"
                >
                    <p class="strong">무상 A/S</p>
                    <p class="desc">최대 12개월까지</p>
                </a>
                <a
                    :href="`${VUE_URL}/m/board/purchasing_safety_campaign?contents=free_exchange_return`"
                    class="tab"
                >
                    <p class="strong">무료 교환 반품</p>
                    <p class="desc">월 최대 5회까지</p>
                </a>
            </div>
            <menu class="footer_menu">
                <a class="menu" @click.prevent="clickLogout" v-if="isLogined">로그아웃</a>
                <a @click.prevent="clickLogin" class="menu" v-else>로그인</a>
                <a href="/m/board/service_error?click=footer_error" class="menu"
                    >오류신고</a
                >
                <a href="/m/board/service?click=footer_service" class="menu">고객센터</a>
            </menu>
        </article>
        <article class="bottom_container">
            <dl class="corp_info" :class="{ active: toggleShow }">
                <dt>
                    <button type="button" @click="toggleShow = !toggleShow">
                        (주)머스트잇 사업자정보
                    </button>
                </dt>
                <dd>
                    <p>대표자 : 조용민</p>
                    <p>주소 : 서울시 강남구 압구정로 148, 머스트잇빌딩 (신사동)</p>
                    <p>사업자등록번호 : 101-86-75400</p>
                    <p>
                        통신판매업신고 : 서울강남 03391호
                        <a
                            href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1018675400"
                            class="link"
                            >사업자정보확인</a
                        >
                    </p>
                    <p>개인정보관리책임자 : 조영훈 (help@mustit.co.kr)</p>
                    <p>고객센터 : <a href="tel:1566-3516">1566-3516</a></p>
                    <p>호스팅 서비스 : (주)머스트잇</p>
                    <p class="debt_guarantee">
                        신한은행 채무지급보증 안내
                        <button type="button" class="link">서비스가입사실 확인</button>
                    </p>
                </dd>
            </dl>
            <menu class="bottom_menu">
                <a href="http://corp.mustit.co.kr">회사소개</a>
                <i class="part_divider"></i>
                <a href="/m/etc/user_stipulation">이용약관</a>
                <i class="part_divider"></i>
                <a href="/m/etc/user_defend"><strong>개인정보처리방침</strong></a>
                <i class="part_divider"></i>
                <a href="/m/etc/user_forgery">위조품처리정책</a>
            </menu>
            <menu class="bottom_menu">
                <a href="#a">지식재산권센터</a>
                <i class="part_divider"></i>
                <a href="/m/etc/other_partnership">제휴문의</a>
            </menu>
            <div class="corp_terms">
                <p>
                    (주)머스트잇에서는 진품만을 거래할 수 있으며, 불확실한 상품의 거래는
                    엄격히 제한 됩니다.
                </p>
                <p>
                    머스트잇은 통신판매중개자이며, 상품은 개별판매자가 등록한 것으로 상품
                    거래에 관한 의무와 책임은 판매자에게 있습니다.
                </p>
            </div>
            <div class="copy">Copyright © MUST’IT. All rights reserved.</div>
            <div class="watch_sns">
                <a href="http://www.facebook.com/mustit.co.kr">
                    <i class="icon_facebook"></i>
                </a>
                <a href="https://www.instagram.com/mustit_official">
                    <i class="icon_instagram"></i>
                </a>
                <a href="https://m.youtube.com/channel/UC9zA4kfRyDr2SvAntu-9V2w">
                    <i class="icon_youtube"></i>
                </a>
                <a href="https://pf.kakao.com/_pHxdvxl">
                    <i class="icon_kakaotalk"></i>
                </a>
                <a href="https://m.post.naver.com/mustit200">
                    <i class="icon_naver"></i>
                </a>
            </div>
        </article>
        <ConfirmLogout :isConfirmLogout="isConfirmLogout" />
    </footer>
</template>

<script>
    import EventBus from '@/assets/js/EventBus'
    import ConfirmLogout from '@/components/ConfirmLogout.vue'
    export default {
        components: {
            ConfirmLogout
        },
        data() {
            return {
                VUE_URL: 'https://m-dev.web.mustit.xyz',
                toggleShow: false,
                isLogined: true,
                isConfirmLogout: false
            }
        },
        methods: {
            clickLogout() {
                EventBus.$emit('openLogout')
            },
            clickLogin() {
                this.isLogined = true
            }
        },
        created() {
            const HTML = document.getElementsByTagName('html')[0]
            const BODY = document.body
            EventBus.$on('closeLogout', () => {
                this.isConfirmLogout = false
                HTML.classList.remove('html_scroll')
                BODY.classList.remove('body_scroll')
            })
            EventBus.$on('openLogout', () => {
                this.isConfirmLogout = true
                HTML.classList.add('html_scroll')
                BODY.classList.add('body_scroll')
            })
            EventBus.$on('confirmLogout', () => {
                this.isConfirmLogout = false
                HTML.classList.remove('html_scroll')
                BODY.classList.remove('body_scroll')
                this.isLogined = false
            })
        },
        beforeDestroy() {
            EventBus.$off('closeLogout')
            EventBus.$off('openLogout')
            EventBus.$off('confirmLogout')
        }
    }
</script>
