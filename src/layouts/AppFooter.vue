<template>
    <footer class="home_footer self_module">
        <article class="top_container">
            <div class="banner">
                <a href="/m/board/customer"
                    ><img
                        src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_footer/footer_banner.png"
                        alt=""
                /></a>
            </div>
        </article>
        <article class="bottom_container">
            <p class="tit"><a href="/m/board/introduce_our_policies">MUST CARE</a></p>
            <ul class="care_list">
                <li class="care">
                    <a href="/m/board/followup_care?contents=forgery_compensation"
                        ><i class="icon_care"></i>
                        <p class="text">무조건 200% 책임보상</p>
                        <i class="icon_arr"></i
                    ></a>
                </li>
                <li class="care">
                    <a
                        href="/m/board/followup_care?contents=soldout_delivery_compensation"
                    >
                        <i class="icon_care"></i>
                        <p class="text">품절/지연 최대 10만원 보상</p>
                        <i class="icon_arr"></i
                    ></a>
                </li>
                <li class="care">
                    <a href="/m/board/followup_care?contents=luxury_as">
                        <i class="icon_care"></i>
                        <p class="text">무상 A/S 최대 12개월</p>
                        <i class="icon_arr"></i
                    ></a>
                </li>
                <li class="care">
                    <a href="/m/board/followup_care?contents=free_exchange_return">
                        <i class="icon_care"></i>
                        <p class="text">무료 교환 반품 월 최대 5회</p>
                        <i class="icon_arr"></i
                    ></a>
                </li>
            </ul>
            <dl class="corp_info" :class="{ active: toggleShow }">
                <dt class="tit">
                    <button type="button" @click="toggleDetails">
                        (주)머스트잇
                    </button>
                </dt>
                <dd>
                    <p><span>대표자</span> 조용민</p>
                    <p><span>사업자등록번호</span> 101-86-75400</p>
                    <p>
                        <span>통신판매업신고</span> 서울강남 03391호
                        <a
                            href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1018675400"
                            target="_blank"
                            class="link"
                            >사업자정보확인</a
                        >
                    </p>
                    <p>
                        <span>주소</span> 서울시 강남구 압구정로 148, 머스트잇 빌딩(신사동)
                    </p>
                
                    <p><span>개인정보관리책임자</span> 조영훈 (help@mustit.co.kr)</p>
                    <p><span>고객센터</span> <a href="tel:1566-3516">1566-3516</a></p>
                    <p><span>호스팅 서비스</span> (주)머스트잇</p>
                    <p class="debt_guarantee">
                        신한은행 채무지급보증 안내
                        <button type="button" class="link">서비스가입사실 확인</button>
                    </p>
                </dd>
            </dl>
            <menu class="bottom_menu">
                <a href="http://corp.mustit.co.kr" target="_blank">회사소개</a>
                <a href="/m/etc/user_stipulation">이용약관</a>
                <a href="/m/etc/user_defend"><strong>개인정보처리방침</strong></a>
                <a href="/m/etc/user_forgery">위조품처리정책</a>
                <a href="/m/etc/other_partnership">제휴문의</a>
                <a href="/m/etc/intellectual_property">지식재산권센터</a>
            </menu>
            <div class="corp_terms">
                <p>
                    (주)머스트잇에서는 정품만을 거래할 수 있으며, 불확실한 상품의 거래는
                    엄격히 제한됩니다. 머스트잇은 통신판매중개자이며, 상품은 개별판매자가
                    등록한 것으로 거래에 관한 의무와 책임은 판매자에게 있습니다.
                </p>
                <p>Copyright (c) MUST’IT. All Rights Reserved.</p>
            </div>
            <div class="isms">
                <div class="isms_info">
                    <p>정보보호 관리체계 인증 ISMS</p>
                    <ul>
                        <li>인증범위 : 온라인 쇼핑몰 서비스(머스트잇)</li>
                        <li>유효기간 : 2021.10.06 ~ 2024.10.05</li>
                    </ul>
                </div>
                <div class="logo">
                    <img
                        src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_footer/footer_logo.svg"
                        alt=""
                    />
                </div>
            </div>
        </article>
    </footer>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                toggleShow: false
            }
        },
        methods: {
            toggleDetails() {
                this.toggleShow = !this.toggleShow
            }
        },
    }
</script>
