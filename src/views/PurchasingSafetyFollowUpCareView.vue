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
                        <router-link to="/followup_care?contents=compensation_forgery">
                            <span class="tab_box">200% 책임<br />보상제</span>
                        </router-link>
                    </li>
                    <li
                        class="tab_item"
                        :class="{
                            'tab_on': content == 1
                        }"
                    >
                        <router-link
                            to="/followup_care?contents=delayed_delivery_compensation"
                        >
                            <span class="tab_box">품절/지연<br />보상제</span>
                        </router-link>
                    </li>
                    <li
                        class="tab_item"
                        :class="{
                            'tab_on': content == 2
                        }"
                    >
                        <router-link
                            to="/followup_care?contents=direct_deal_report_reward"
                        >
                            <span class="tab_box">직거래 신고<br />포상제</span>
                        </router-link>
                    </li>
                    <li
                        class="tab_item"
                        :class="{
                            'tab_on': content == 3
                        }"
                    >
                        <router-link to="/followup_care?contents=service_as">
                            <span class="tab_box">A/S<br />서비스</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div>
                <!-- 200% 책임 보상제 -->
                <div
                    id="compensationForgery"
                    class="safety_campaign_container campaign_content"
                    v-if="content == 0"
                >
                    <div class="safety_campaign_box">
                        <div class="safety_campaign_h2">
                            머스트잇은 위조품 판매를 하지 않습니다.
                            <br />
                            <span class="safety_campaign_emph">정품</span>만을 추구하는
                            머스트잇!
                        </div>
                        <p class="safety_campaign_top_text">
                            위조품으로 판정되는 경우 200% 책임 보상!
                        </p>
                        <p class="safety_campaign_top_text">
                            불법 판매자를 근절하고 정품 판매자를 보호하는 것!
                            <br />
                            구매자는 안심하고 정품을 구매할 수 있는 플랫폼을 만드는 것이
                            머스트잇의 의무입니다.
                        </p>
                        <div class="campaign_compensation_policy">
                            <div class="safety_campaign_h2">머스트잇의 보상 정책</div>
                            <div class="img_box">
                                <img
                                    src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_contents/compensation-forgery-01.png"
                                    alt="머스트잇 보상정책"
                                    class="full_img"
                                />
                            </div>
                        </div>
                        <div class="campaign_table_box">
                            <table class="campaign_table">
                                <colgroup>
                                    <col width="110px" />
                                    <col width="auto" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th class="">구분</th>
                                        <th class="">보상 관련</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="td_center">결제일 1년 이내</td>
                                        <td>
                                            주문건 취소 + 100% 보상금액 + 10만원 적립금
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="td_center">결제일 1년 이후</td>
                                        <td>
                                            주문금액 보상 + 100% 보상금액 + 10만원 적립금
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p class="safety_campaign_subtext">
                            ※ 단, 구입결정일로부터
                            <span class="safety_campaign_black"
                                >2년 이내 주문건에 한해서만 보상</span
                            >해 드리며 2년 지난 주문건은 판매자에게 적절한 보상 받으실 수
                            있도록 최대한 도움 드립니다.
                        </p>
                    </div>
                    <div class="safety_campaign_btn_box">
                        <button type="button" class="campaign_btn">
                            실제 사례 보러가기
                        </button>
                    </div>
                    <div class="process_countereit">
                        <img
                            src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_contents/cont-process-countereit-goods.png"
                            alt="위조품 처리 프로세스 확인"
                            class="full_img"
                        />
                        <div class="btn_box">
                            <button type="button" class="campaign_btn">
                                위조품 신고하기
                            </button>
                        </div>
                    </div>
                    <div class="campaign_qna_container">
                        <div class="safety_campaign_h2">자주하는 질문</div>
                        <div class="campaign_qna_box">
                            <div class="campaign_question">
                                Q 위조품 구매 보상에 대한 실제 사례가 있나요?
                            </div>
                            <div class="campaign_answer">
                                물론입니다. 머스트잇은 위조품이 거래되고 판정된 건들에
                                대하여 도의적 책임과 해결을 위해 최선을 다했으며,
                                최종적으로 위조품 판정된 모든 건들에 대해서 2배 환불의
                                보상을 진행하였습니다.
                            </div>
                        </div>
                        <div class="campaign_qna_box">
                            <div class="campaign_question">
                                Q 정가품 판정은 어떻게 이루어지나요?
                            </div>
                            <div class="campaign_answer">
                                위조품 의심으로 신고된 상품 또는 모니터링을 통해
                                위조품으로 의심되는 상품을 확보하여 머스트잇과 계약된
                                <a href="http://www.k-royal.com/" class="qna_link"
                                    >한국명품감정원</a
                                >으로 상품을 보내어 위조품 여부를 판정하고 있습니다.
                            </div>
                        </div>
                        <div class="campaign_qna_box">
                            <div class="campaign_question">
                                Q 구매한지 3년이 지난 상품도 위조품으로 판정되면
                                보상해주나요?
                            </div>
                            <div class="campaign_answer">
                                구매결정일로부터 2년 이내의 주문건에서 위조품이 발견될
                                경우 위조품 200% 책임 보상을 해드립니다. 다만,
                                구매결정일로부터 2년이 지난 주문건의 경우에는 판매자에게
                                적절한 보상을 받으실 수 있도록 최대한의 도움을 드리고
                                있습니다.
                            </div>
                        </div>
                        <div class="campaign_qna_box">
                            <div class="campaign_question">
                                Q 위조품 보상 받을 수 있는 조건이 있나요?
                            </div>
                            <div class="campaign_answer">
                                상품을 수령한 후 반품하지 않고 보유하고 있어야 해당 물품에
                                대한 감정이 가능하기 때문에 이미 취소 완료이거나 반품
                                완료되어 환불된 경우에는 위조품 접수가 불가합니다.
                            </div>
                        </div>
                        <div class="campaign_qna_box">
                            <div class="campaign_question">
                                Q 위조품 보상 감정이 불가할 수도 있나요?
                            </div>
                            <div class="campaign_answer">
                                브랜드, 카테고리별로 감정이 어려운 상품이 있습니다. 구매
                                이력에서 확인된 상품과 다른 상품, 제품 훼손, 사용 흔적
                                등으로 인해 감정이 어려운 상품의 경우에는 접수가 취소될 수
                                있습니다.
                            </div>
                        </div>
                        <div class="campaign_qna_box">
                            <div class="campaign_question">
                                Q 사설 감정업체의 의심소견을 받으면 보상 가능한가요?
                            </div>
                            <div class="campaign_answer">
                                머스트잇은 정품 판매 보증약관을 근거로 한국 명품 감정원과
                                공공기관의 감정 결과만 인정합니다. 따라서 다른
                                사설업체에서 감정을 받아 문의를 접수한 경우 해당 상품은
                                회수하여 머스트잇과 계약한 감정원에서 감정을 진행합니다.
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 품절/지연 보상제 -->
                <div
                    id="delayedDeliveryCompensation"
                    class="safety_campaign_container campaign_content"
                    v-else-if="content == 1"
                >
                    <div class="safety_campaign_box">
                        <div class="safety_campaign_h2">
                            해외에서 배송되는 상품 중<br />
                            배송 지연되거나 갑작스런 취소를<br />
                            경험해 보신 적이 있으신가요?
                        </div>
                        <p class="safety_campaign_top_text">
                            언제나 기쁨, 설렘으로 가득한 좋은 경험이 되어야 하는 쇼핑!<br />간혹
                            배송지연과 품절로 인한 돌연 취소로 힘드셨던 경험 있으시죠?
                        </p>
                        <p class="safety_campaign_top_text">
                            불편함을 겪으신 고객님의 마음에 공감을 담아 쿠폰과 적립금으로
                            보상해 드립니다. <br />
                            품절과 배송지연이 없는 쇼핑 경험을 드리기 위해 최선을
                            다하겠습니다.<br />
                        </p>
                    </div>
                    <div class="campaign_delay_delivery">
                        <div class="safety_campaign_h2">품절/지연 보상 정책</div>
                        <div>
                            <div class="campaign_table_box safety_delay_table">
                                <table class="campaign_table">
                                    <colgroup>
                                        <col width="18.29%" />
                                        <col width="25%" />
                                        <col width="28.355%" />
                                        <col width="28.355%" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th rowspan="2" class="">구분</th>
                                            <td rowspan="2" class="td_center">
                                                품절 보상
                                            </td>
                                            <td colspan="2" class="td_center">
                                                배송지연보상
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="td_center">국내</td>
                                            <td class="td_center">해외</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th class="">지급<br />조건</th>
                                            <td class="">
                                                결제 후 상품 품절로 취소되는 경우
                                            </td>
                                            <td class="">
                                                결제일로부터 10일(주말/공휴일 제외) 이후
                                                배송완료
                                            </td>
                                            <td class="">
                                                결제일로부터 20일(주말/공휴일 제외) 이후
                                                배송완료
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="">보상</th>
                                            <td>7% 쿠폰</td>
                                            <td colspan="2">
                                                배송완료 : 5,000원 적립금
                                                <br />배송지연 취소 : 10,000원 적립금
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="">지급<br />방법</th>
                                            <td class="">
                                                별도 신청 절차 없이 품절취소완료일 다음날
                                                자동 지급
                                            </td>
                                            <td colspan="2" class="">
                                                1:1 문의 게시판 또는 머스트잇
                                                고객센터(1566-3516)를 이용하여 신청 접수
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="safety_delay_notice">
                                <div class="safety_delay_title">※ 유의 사항</div>
                                <ul>
                                    <li class="safety_delay_text">
                                        <span class="num">1.</span>품절 보상
                                        <p class="safety_delay_text_dot">
                                            품절 보상 쿠폰은 타 쿠폰과 중복으로 사용할 수
                                            없습니다.
                                        </p>
                                        <p class="safety_delay_text_dot">
                                            최대 할인은 100,000원이며, 지급일로부터 30일
                                            이내 사용 가능합니다.
                                        </p>
                                    </li>
                                    <li class="safety_delay_text">
                                        <span class="num">2.</span>배송지연 보상
                                        <p class="safety_delay_text_sub">
                                            아래 3가지에 해당할 경우에는 배송지연 보상
                                            조건에 해당하지 않습니다.
                                        </p>
                                        <p class="safety_delay_text_dot">
                                            상품 상세페이지에 배송 기간이 명시된 경우
                                        </p>
                                        <p class="safety_delay_text_dot">
                                            판매자와 구매자의 상호 협의하에 배송 지연된
                                            경우
                                        </p>
                                        <p class="safety_delay_text_dot">
                                            구매자 또는 제3자(택배사, 관세청)의 귀책으로
                                            배송이 지연되는 경우
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div class="">
                                <div class="safety_soldout_coupon">
                                    보상 쿠폰 사용 후 그 해당 상품이 ‘품절’로 취소되어
                                    복원 된 쿠폰의 사용 가능 기간이 1일 이내 일 경우
                                    <br />
                                    <a
                                        href="https://release.mustit.xyz/m/board/qna_customer"
                                        class="safety_campaign_link_emph"
                                        >1:1 문의 게시판</a
                                    >
                                    또는 머스트잇 대표번호(1566-3516)로 연락하여
                                    요청주시기 바랍니다.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 직거래 신고 포상제 -->
                <div
                    id="directDealReportReward"
                    class="safety_campaign_container campaign_content"
                    v-else-if="content == 2"
                >
                    <div class="safety_campaign_box">
                        <div class="safety_campaign_h2">
                            직거래를 유도하는 판매자는 <br />
                            반드시 신고해 주세요!
                        </div>
                        <p class="safety_campaign_top_text">
                            머스트잇에서 구매했으나 구매 취소와 함께 직거래를 유도하는
                            것은 불법 거래입니다.
                        </p>
                        <p class="safety_campaign_top_text">
                            피해 방지를 위해 직거래 관련 정책 및 자체 모니터링을
                            지속적으로 강화하고, 제보 및 신고 접수 시
                            <span class="safety_campaign_emph"
                                >10,000원 포상 적립금을 지급</span
                            >하오니 적극적 협조 부탁드립니다.
                        </p>
                    </div>
                    <div class="campaign_case_damage">
                        <div class="safety_campaign_h2">피해 사례 관련</div>
                        <div class="campaign_table_box">
                            <table class="campaign_table">
                                <colgroup>
                                    <col width="80px" />
                                    <col width="auto" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th class="">사례</th>
                                        <th class="">내용</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="td_center">판매자<br />연락 두절</td>
                                        <td>
                                            머스트잇에서 구매 취소 후 판매자에게 직접
                                            입금<br />
                                            → 판매자 연락 두절로 상품 배송 지연 발생<br />
                                            → 직거래 주문 건은 중재 불가 안내
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="td_center">불량상품<br />수령</td>
                                        <td>
                                            머스트잇에서 구매 취소 후 판매자에게 직접
                                            입금<br />
                                            → 불량 상품이 배송<br />
                                            → 판매자에게 상품 교환 요구했으나 거부 당함<br />
                                            → 직거래 주문 건은 중재 불가 안내
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="campaign_reporting">
                        <div class="safety_campaign_h4">직거래 유도 신고 방법</div>
                        <p class="campaign_reporting_text">
                            -
                            <a
                                href="https://release.mustit.xyz/m/board/qna_customer"
                                class="mi-font-basic mi-font-link role_btn safety_campaign_link_emph undefined"
                                >1:1 문의 게시판</a
                            >에 신고해 주시면 됩니다.<br />
                            - 상품문의 관련 답변, 문의, 카카오톡, 유선 녹음파일, 이메일
                            답변 등 증거자료 첨부도 부탁드립니다.
                        </p>
                    </div>
                </div>
                <!-- as 서비스 -->
                <div
                    id="onlineGenuineGuide"
                    class="safety_campaign_container campaign_content"
                    v-else-if="content == 3"
                >
                    <div class="safety_campaign_box">
                        <div class="safety_campaign_h2">
                            No.1 온라인 명품 플랫폼에서<br />
                            편리하고 안전하게 명품 쇼핑하세요!
                        </div>
                    </div>
                    <div class="after_service_box">
                        <div class="after_service_card">
                            <img
                                src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_contents/thum-after-service-01.png"
                                alt="A/S 서비스"
                                class="after_service_thumb"
                            />
                            <div class="after_service_text_box">
                                <div class="after_service_title">
                                    상품 구매부터 사후 관리까지 <br />
                                    머스트잇에서!
                                </div>
                                <div class="after_service_text">
                                    머스트잇에서 구매한 상품은 A/S까지 모두
                                    처리해드립니다.<br />
                                    <span class="safety_campaign_bold"
                                        >신뢰할 수 있는 전문 수선업체와 제휴</span
                                    >를 통해 편리하고 저렴하게 A/S서비스를 받으실 수
                                    있습니다.
                                </div>
                            </div>
                        </div>
                        <div class="after_service_card">
                            <img
                                src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_contents/thum-after-service-02.png"
                                alt="A/S 서비스"
                                class="after_service_thumb"
                            />
                            <div class="after_service_text_box">
                                <div class="after_service_title">
                                    백화점의 A/S서비스는 브랜드 <br />
                                    본사에서 직접 진행한다?
                                </div>
                                <div class="after_service_text">
                                    백화점의 A/S 서비스도 대부분 브랜드 본사 가 아닌 전문
                                    수선업체에서 유상으로 서비스 하는 것을 알고
                                    계시나요?<br />
                                    <span class="safety_campaign_bold"
                                        >머스트잇은 백화점 수준의 A/S 서비스를 편리하게
                                        제공</span
                                    >해 드리고 있습니다.
                                </div>
                            </div>
                        </div>
                        <div class="after_service_card">
                            <img
                                src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_contents/thum-after-service-03.png"
                                alt="A/S 서비스"
                                class="after_service_thumb"
                            />
                            <div class="after_service_text_box">
                                <div class="after_service_title">
                                    병행수입은 A/S가 불가능하다?
                                </div>
                                <div class="after_service_text">
                                    <span class="safety_campaign_bold"
                                        >병행수입 명품도 판매자들이 전문 수선업체 를 통해
                                        A/S를 제공</span
                                    >하고 있습니다.<br />
                                    백화점 명품도 전문 수선업체를 통해 A/S 제공하기 때문에
                                    서비스 품질의 큰 차이는 없습니다.
                                </div>
                            </div>
                        </div>
                        <div class="after_service_card">
                            <img
                                src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_contents/thum-after-service-04.png"
                                alt="A/S 서비스"
                                class="after_service_thumb"
                            />
                            <div class="after_service_text_box">
                                <div class="after_service_title">
                                    머스트잇의 A/S서비스는 편리하고 안심할 수 있습니다.
                                </div>
                                <div class="after_service_text">
                                    머스트잇은 담당자가 상품 상태를 확인하고 가장 적절한
                                    전문 업체에 수선을 진행합니다.<br />
                                    머스트잇은 제휴 서비스를 통해
                                    <span class="safety_campaign_bold"
                                        >최대 10~20%의 할인된 가격으로 수선 서비스를
                                        제공</span
                                    >해 드립니다.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="compensation_policy">
                        <h3 class="compensation_policy_title">A/S 서비스 이용 방법</h3>
                        <ul class="compensation_policy_list">
                            <li class="compensation_policy_item">
                                <div class="compensation_policy_card">
                                    <div class="compensation_policy_text_box">
                                        <p class="text_step">STEP 1</p>
                                        <p class="text_title">신청서 작성</p>
                                        <p class="text_desc">
                                            신청서를 작성해주시면 A/S 담당자가 수선 내용
                                            확인을 위해 연락을 드립니다.
                                        </p>
                                    </div>
                                    <div class="compensation_policy_img_box">
                                        <img
                                            src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_contents/icon-compensation-policy01.png"
                                            alt="step1 icon"
                                            class="full_img"
                                        />
                                    </div>
                                </div>
                            </li>
                            <li class="compensation_policy_item">
                                <div class="compensation_policy_card">
                                    <div class="compensation_policy_text_box">
                                        <p class="text_step">STEP 2</p>
                                        <p class="text_title">머스트잇으로 상품 발송</p>
                                        <p class="text_desc">
                                            상품을 보내주시면 담당자가 상품의 상태를
                                            확인하고 신뢰 할 수 있는 전문 업체에 수선을
                                            진행합니다.
                                        </p>
                                    </div>
                                    <div class="compensation_policy_img_box">
                                        <img
                                            src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_contents/icon-compensation-policy02.png"
                                            alt="step2 icon"
                                            class="full_img"
                                        />
                                    </div>
                                </div>
                            </li>
                            <li class="compensation_policy_item">
                                <div class="compensation_policy_card">
                                    <div class="compensation_policy_text_box">
                                        <p class="text_step">STEP 3</p>
                                        <p class="text_title">수선</p>
                                        <p class="text_desc">
                                            전문 업체에서 수선 가능<br />
                                            여부와 비용을 확인하고<br />
                                            수선을 진행합니다.
                                        </p>
                                    </div>
                                    <div class="compensation_policy_img_box">
                                        <img
                                            src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_contents/icon-compensation-policy03.png"
                                            alt="step3 icon"
                                            class="full_img"
                                        />
                                    </div>
                                </div>
                            </li>
                            <li class="compensation_policy_item">
                                <div class="compensation_policy_card">
                                    <div class="compensation_policy_text_box">
                                        <p class="text_step">STEP 4</p>
                                        <p class="text_title">수선 완료</p>
                                        <p class="text_desc">
                                            수선된 상품을 고객님께<br />전달드립니다.
                                        </p>
                                    </div>
                                    <div class="compensation_policy_img_box">
                                        <img
                                            src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_contents/icon-compensation-policy04.png"
                                            alt="step4 icon"
                                            class="full_img"
                                        />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="safety_campaign_btn_box">
                        <button type="button" class="campaign_btn">
                            A/S 신청 바로가기
                        </button>
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
                        img: 'top-compensation-forgery.png',
                        imgAlt: '200% 책임 보상제'
                    },
                    {
                        img: 'top-delayed-delivery_2023.png',
                        imgAlt: '품절/지연 보상제'
                    },
                    {
                        img: 'top-direct-deal-report-reward.png',
                        imgAlt: '직거래 신고 포상제'
                    },
                    {
                        img: 'top-after-service.png',
                        imgAlt: 'A/S 서비스'
                    }
                ],
                menuData: [{ name: '머스트케어 프로그램' }]
            }
        },
        created() {
            window.scrollTo(0, 0)
            switch (this.query) {
                case 'compensation_forgery':
                    this.content = 0
                    break

                case 'delayed_delivery_compensation':
                    this.content = 1
                    break

                case 'direct_deal_report_reward':
                    this.content = 2
                    break

                case 'service_as':
                    this.content = 3
                    break
            }
        }
    }
</script>
