<template>
    <article class="policy_care_container">
        <div class="top_text_box">
            <h3 class="title">
                <img
                    :src="$S3 + imgPath + 'followup_title_1.png'"
                    alt="위조품은 철저하게 보상은 확실하게"
                    class="img02"
                />
            </h3>
            <p class="text">
                우리는 정품만을 추구하지만 만에 하나, 위조품으로 판정된다면 책임지고
                200%를 보상해드려요.
            </p>
            <p class="text">
                또한, 직접 위조품을 입증해야 하는 것이 아닌 의심 상품 신고 시 즉시
                회수하고 감정해요.
            </p>
            <p class="text">
                불법 판매자는 근절하고, 정품 판매자는 보호하고 <br />
                고객은 믿고 구매할 수 있는 플랫폼을 만드는 것이 <br />
                우리의 의무에요.
            </p>
        </div>
        <div>
            <div class="art_text_box">
                <p class="title">머스트잇의 보상 정책</p>
            </div>
            <img
                :src="$S3 + imgPath + 'followup_compensation_policy.png'"
                alt="위조품 정책"
                class="fit_img"
            />
        </div>
        <div class="forgery_policy__table">
            <table>
                <colgroup>
                    <col width="34.6875%" />
                    <col width="*" />
                </colgroup>
                <thead>
                    <tr>
                        <th>구분</th>
                        <th>보상 관련</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="text_center">결제일 1년 이내</td>
                        <td>주문건 취소 + 100% 보상금액 + 10만원 적립금</td>
                    </tr>
                    <tr>
                        <td class="text_center">결제일 1년 이후</td>
                        <td>200% 보상금액 + 10만원 적립금</td>
                    </tr>
                </tbody>
            </table>
            <div class="table_notice">
                <p>
                    ※ 단, 구입결정일로부터
                    <strong>2년 이내 주문건에 한해서 보상</strong> 가능하며, 2년 지난
                    주문건은 판매자에게 적절한 보상을 받으실 수 있도록 최대한 도움을
                    드려요.
                </p>
            </div>
            <div class="btn_box">
                <button type="button" class="care_btn">실제 보상 사례 보기</button>
            </div>
        </div>
        <div class="process_forgery">
            <div class="art_text_box">
                <p class="title">위조품은 이렇게 처리해요</p>
            </div>
            <img
                :src="$S3 + imgPath + 'followup_counterfeit_goods_0.png'"
                alt="위조품 처리 프로세스"
                class="fit_img"
            />
            <div class="btn_box">
                <a href="#" class="care_btn"> 위조품 신고하기 </a>
            </div>
        </div>
        <div class="forgery_qna_container">
            <p class="qna_title">자주하는 질문</p>
            <div class="qna_box" v-for="(qna, index) in qnaData" :key="index">
                <p class="question">{{ qna.question }}</p>
                <p class="answer" v-html="qna.answer"></p>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        data() {
            return {
                imgPath: 'm_board/introduce_our_policies/followup_care/',
                qnaData: [
                    {
                        question: 'Q 위조품 구매 보상에 대한 실제 사례가 있나요?',
                        answer: '물론입니다. 머스트잇은 위조품이 거래되고 판정된 건들에 대해 도의적 책임과 해결을 위해 최선을 다했으며, 최종적으로 위조품 판정된 모든 건들에 대해서 2배 환불의 보상을 진행하였습니다.'
                    },
                    {
                        question: 'Q 정가품 판정은 어떻게 이루어지나요?',
                        answer: '위조품 의심으로 신고된 상품 또는 모니터링을 통해 위조품으로 의심되는 상품을 확보하여 머스트잇과 계약된 <a href="http://www.k-royal.com/" class="qna_link">한국명품감정원</a>으로 상품을 보내어 위조품 여부를 판정하고 있습니다.'
                    },
                    {
                        question:
                            'Q 구매한지 3년이 지난 상품도 위조품으로 판정되면 보상해주나요?',
                        answer: '구매결정일로부터 2년 이내의 주문건에서 위조품이 발견될 경우 위조품 200% 책임 보상을 해드립니다. 다만, 구매결정일로부터 2년이 지난 주문건의 경우에는 판매자에게 적절한 보상을 받으실 수 있도록 최대한의 도움을 드리고 있습니다.'
                    },
                    {
                        question: 'Q 위조품 보상 받을 수 있는 조건이 있나요?',
                        answer: '상품을 수령한 후 반품하지 않고 보유하고 있어야 해당 물품에 대한 감정이 가능하기 때문에 이미 취소 완료이거나 반품 완료되어 환불된 경우에는 위조품 접수가 불가합니다.'
                    },
                    {
                        question: 'Q 위조품 보상 감정이 불가할 수도 있나요?',
                        answer: '브랜드, 카테고리별로 감정이 어려운 상품이 있습니다. 구매 이력에서 확인된 상품과 다른 상품, 제품 훼손, 사용 흔적 등으로 인해 감정이 어려운 경우에는 접수가 취소될 수 있습니다.'
                    },
                    {
                        question: 'Q 사설 감정업체의 의심소견을 받으면 보상 가능한가요?',
                        answer: '머스트잇은 정품 판매 보증약관을 근거로 한국명품감정원과 공공기관의 감정 결과만 인정합니다. 따라서 다른 사설업체에서 감정을 받아 문의를 접수한 경우 해당 상품은 회수하여 머스트잇과 계약한 감정원에서 감정을 진행합니다.'
                    }
                ]
            }
        }
    }
</script>

<style></style>
