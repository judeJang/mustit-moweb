<template>
    <section class="public_content">
        <SubHeader title="머스트케어 프로그램" />
        <!-- <SubTopHeader
            :isDropState="false"
            :data="menuData"
            :count="9"
            :scrollEvent="mixinScrollUpDownState"
        /> -->
        <div class="safety_campaign_wrap">
            <div>
                <div class="top_img_box">
                    <img
                        :src="`https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_contents/${topImg[content].img}`"
                        :alt="topImg[content].imgAlt"
                        class="full_img"
                    />
                </div>
            </div>
            <!-- tab -->
            <div
                id="safetyContentsTabs"
                class="safety_campaign_tab"
                :class="{ 'scroll_down': mixinScrollUpDownState == 'down' }"
            >
                <ul class="tabs_nav">
                    <li
                        class="tab_item"
                        :class="{
                            'tab_on': content == 0
                        }"
                    >
                        <router-link to="/pre_care?contents=seller_monitoring">
                            <span class="tab_box">판매자 관리 / 모니터링</span>
                        </router-link>
                    </li>
                    <li
                        class="tab_item"
                        :class="{
                            'tab_on': content == 1
                        }"
                    >
                        <router-link to="/pre_care?contents=online_genuine_guide">
                            <span class="tab_box">온라인 정품 가이드</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div>
                <!-- 판매자 관리 / 모니터링 -->
                <div
                    id="sellerMonitoring"
                    class="safety_campaign_container campaign_content seller_monitoring_contents"
                    v-if="content == 0"
                >
                    <div class="safety_campaign_box">
                        <div class="safety_campaign_h2">
                            머스트잇은 시작부터<br />
                            철저하고 까다롭게 관리하고 있습니다.
                        </div>
                        <p class="safety_campaign_top_text">
                            위조품 유통은 발생 전부터 책임지고 차단하는 것이 <br />
                            무엇보다 지켜져야 할
                            <span class="safety_campaign_emph">머스트잇의 원칙</span
                            >입니다.
                        </p>
                    </div>
                    <div class="monitoring_container">
                        <h3 class="monitoring_title">ONLY 머스트잇만의 정품 검증 방법</h3>
                        <div class="monitoring_box01">
                            <h4 class="monitoring_title_sub">모니터링 프로그램</h4>
                            <ul class="monitoring_list">
                                <li class="monitoring_item">
                                    <div class="img_thum">
                                        <img
                                            src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_contents/care-forgery-icon1.png"
                                            alt=""
                                            class="full_img"
                                        />
                                    </div>
                                    <div class="text_box">
                                        <p class="list_title">상시 모니터링</p>
                                        <p class="list_desc">
                                            등록 상품 및<br />구매 모니터링 진행
                                        </p>
                                        <p class="list_person">머스트잇 관리팀</p>
                                    </div>
                                </li>
                                <li class="monitoring_item">
                                    <div class="img_thum">
                                        <img
                                            src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_contents/care-forgery-icon2.png"
                                            alt=""
                                            class="full_img"
                                        />
                                    </div>
                                    <div class="text_box">
                                        <p class="list_title">판매자 모니터링</p>
                                        <p class="list_desc">
                                            비정기적 판매자 사무실<br />방문 → 직접 검수
                                            진행
                                        </p>
                                        <p class="list_person">머스트잇 관리팀</p>
                                    </div>
                                </li>
                                <li class="monitoring_item">
                                    <div class="img_thum">
                                        <img
                                            src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_contents/care-forgery-icon3.png"
                                            alt=""
                                            class="full_img"
                                        />
                                    </div>
                                    <div class="text_box">
                                        <p class="list_title">상품 감시 프로그램</p>
                                        <p class="list_desc">
                                            정/가품 프로그램이<br />
                                            사이트에 24시간 운영 및 판별
                                        </p>
                                        <p class="list_person">머스트잇 관리팀</p>
                                    </div>
                                </li>
                                <li class="monitoring_item">
                                    <div class="img_thum">
                                        <img
                                            src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_contents/care-forgery-icon4.png"
                                            alt=""
                                            class="full_img"
                                        />
                                    </div>
                                    <div class="text_box">
                                        <p class="list_title">위조품 처리 센터</p>
                                        <p class="list_desc">
                                            의심상품 신고<br />→ 바로 감정 진행
                                        </p>
                                        <p class="list_person">고객 → 머스트잇</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="monitoring_box02">
                            <h4 class="monitoring_title_sub">
                                철저한 판매자 관리 프로그램
                            </h4>
                            <ul class="monitoring_list">
                                <li class="monitoring_item">
                                    <div class="img_thum">
                                        <img
                                            src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_contents/care-forgery-icon5.png"
                                            alt=""
                                            class="full_img"
                                        />
                                    </div>
                                    <div class="text_box">
                                        <p class="list_title">판매자 인증</p>
                                        <p class="list_desc">
                                            휴대폰 인증, 사업자 등록증(or 주민등록)의
                                            <br />
                                            2단계로 신원 확인
                                        </p>
                                    </div>
                                </li>
                                <li class="monitoring_item">
                                    <div class="img_thum">
                                        <img
                                            src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_contents/care-forgery-icon6.png"
                                            alt=""
                                            class="full_img"
                                        />
                                    </div>
                                    <div class="text_box">
                                        <p class="list_title">정품판매 보증 약관</p>
                                        <p class="list_desc">
                                            정품판매 의무와 위반시 조치사항 안내<br />
                                            → ‘정품판매 보증약관’ 동의 받기
                                        </p>
                                    </div>
                                </li>
                                <li class="monitoring_item">
                                    <div class="img_thum">
                                        <img
                                            src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_contents/care-forgery-icon7.png"
                                            alt=""
                                            class="full_img"
                                        />
                                    </div>
                                    <div class="text_box">
                                        <p class="list_title">상품 보장 각서</p>
                                        <p class="list_desc">
                                            상품 등록 시, 필수로 서명하는 각서 <br />→
                                            가품 시 민사/형사 책임 약속
                                        </p>
                                    </div>
                                </li>
                                <li class="monitoring_item">
                                    <div class="img_thum">
                                        <img
                                            src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_contents/care-forgery-icon8.png"
                                            alt=""
                                            class="full_img"
                                        />
                                    </div>
                                    <div class="text_box">
                                        <p class="list_title">증빙 서류 제출</p>
                                        <p class="list_desc">
                                            정품 및 정상 유통을 증명할 수 있는 서류<br />
                                            (수입신고필증 등) 제출을 요구
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- 온라인 정품 가이드 -->
                <div
                    id="onlineGenuineGuide"
                    class="safety_campaign_container campaign_content"
                    v-else-if="content == 1"
                >
                    <div class="safety_campaign_box">
                        <div class="safety_campaign_h2">
                            머스트잇은 다양한 판매자가<br />
                            직접 상품을 수입 및 판매하고 있습니다.<br />
                            구매 전 정품에 대해 알고 구매해 주세요!
                        </div>
                        <p class="safety_campaign_top_text">
                            동일한 상품이라도 구매처와 방식에 따라 가격과 상품구성이 서로
                            다를 수 있습니다.<br />
                            명품에 대한 위조품으로
                            <span class="safety_campaign_emph">
                                의심하기 전 아래 내용을 <br />꼭 확인해 주세요.
                            </span>
                        </p>
                    </div>
                    <div class="safety_campaign_box">
                        <div class="online_genuine_guide_card">
                            <img
                                src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_contents/thumb-online-genuine-guide-01.png"
                                alt="개런티 카드"
                                class="genuine_guide_thumb"
                            />
                            <div>
                                <div class="safety_campaign_h3">개런티 카드</div>
                                <div class="genuine_guide_text">
                                    동봉된 개런티 카드는 '품질 보증서'입니다.
                                    <br />
                                    <span class="safety_campaign_bold"
                                        >자체적으로 발행하는 브랜드는 소수</span
                                    >이고 구입한 곳에 따라
                                    <span class="safety_campaign_bold"
                                        >모양이 다를 수 있어</span
                                    >
                                    정품 판단 기준에 해당하지 않습니다.
                                </div>
                            </div>
                        </div>
                        <div class="online_genuine_guide_card">
                            <img
                                src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_contents/thumb-online-genuine-guide-02.png"
                                alt="구성품"
                                class="genuine_guide_thumb"
                            />
                            <div>
                                <div class="safety_campaign_h3">구성품</div>
                                <div class="genuine_guide_text">
                                    제공되는 쇼핑백이나 브랜드 박스는 카테고리나 생산
                                    시즌에 따라
                                    <span class="safety_campaign_bold"
                                        >국내 브랜드 지사에서 자체 제작하는 경우가
                                        많음</span
                                    >으로 구성품이 없다고 위조품이라 판단할 수는 없습니다.
                                </div>
                            </div>
                        </div>
                        <div class="online_genuine_guide_card">
                            <img
                                src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_contents/thumb-online-genuine-guide-03.png"
                                alt="원산지/유통 국가"
                                class="genuine_guide_thumb"
                            />
                            <div>
                                <div class="safety_campaign_h3">원산지/유통 국가</div>
                                <div class="genuine_guide_text">
                                    동일 브랜드의
                                    <span class="safety_campaign_bold"
                                        >정품이라도 원산지가 다양할 수 있음으로</span
                                    >
                                    상품의 원산지 또는 어느 국가에서 유통되는 상품인지에
                                    관해서 확인이 필요합니다.
                                </div>
                            </div>
                        </div>
                        <div class="online_genuine_guide_card">
                            <img
                                src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_contents/thumb-online-genuine-guide-04.png"
                                alt="브랜드 정품인증 서류"
                                class="genuine_guide_thumb"
                            />
                            <div>
                                <div class="safety_campaign_h3">브랜드 정품인증 서류</div>
                                <div class="genuine_guide_text">
                                    <span class="safety_campaign_bold"
                                        >브랜드에서는 정품 여부에 대한 보증을 별도로 하지
                                        않고</span
                                    >
                                    관세청에서 발급한 서류는 통관 절차 거친 수입
                                    상품이라는 서류이므로 정품 여부를 판단할 수 없습니다.
                                </div>
                            </div>
                        </div>
                        <div class="online_genuine_guide_card">
                            <img
                                src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_contents/thumb-online-genuine-guide-05.png"
                                alt="제품 퀄리티"
                                class="genuine_guide_thumb"
                            />
                            <div>
                                <div class="safety_campaign_h3">제품 퀄리티</div>
                                <div class="genuine_guide_text">
                                    상품의 제작 과정에서 아래와 같은 사항 발생으로 동일한
                                    제품 퀄리티가 아닐 수 있습니다.
                                </div>
                                <div class="genuine_guide_dot_box">
                                    <p class="genuine_guide_dot">
                                        제작 공정 중 발생하는 미세한 스크래치와 자국
                                    </p>
                                    <p class="genuine_guide_dot">
                                        마무리 미흡으로 인한 실밥 또는 미세 초크 자국
                                    </p>
                                    <p class="genuine_guide_dot">
                                        수출 업체 정보 포함된 바코드, 케어라벨, RFID택의
                                        일부 제거 흔적
                                    </p>
                                    <p class="genuine_guide_dot">
                                        금속 부자재의 미세한 기스 및 도색 까짐
                                    </p>
                                    <p class="genuine_guide_dot">
                                        운송 과정에서 제품 박스 파손이나 구겨짐 및
                                        더스트백의 오염
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import scrollMixin from '@/mixin/scrollEvent'
    // import SubTopHeader from '@/components/SubTopHeader.vue'
    import SubHeader from '@/components/SubHeader.vue'
    export default {
        components: {
            // SubTopHeader,
            SubHeader
        },
        mixins: [scrollMixin],
        data() {
            return {
                query: this.$route.query.contents,
                content: 0,
                topImg: [
                    {
                        img: 'cont-seller-monitoring-topimg.png',
                        imgAlt: '판매자 관리 / 모니터링'
                    },
                    {
                        img: 'top-online-genuine-guide.png',
                        imgAlt: '온라인 정품 가이드'
                    }
                ],
                menuData: [{ name: '머스트케어 프로그램' }]
            }
        },
        created() {
            window.scrollTo(0, 0)
            switch (this.query) {
                case 'seller_monitoring':
                    this.content = 0
                    break

                case 'online_genuine_guide':
                    this.content = 1
                    break
            }
        }
    }
</script>
