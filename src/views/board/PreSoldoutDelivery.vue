<template>
    <article class="policy_care_container">
        <div class="top_text_box">
            <h3 class="title">
                <img
                    :src="$S3 + imgPath + 'precare_title_3.png'"
                    alt="주요한 불편은 더 깐깐하게"
                    class="img02"
                />
            </h3>
            <p class="text">
                온라인 명품 구매에서 고객에게 불편을 줄 수 있는<br />
                주요한 문제점인 품절취소, 배송지연, 문의답변 지연 현황을 매월 데이터로
                분석하고 관리해요.
            </p>
        </div>
        <div class="art_text_box">
            <p class="title">데이터로 현명하게</p>
            <p class="text">
                전월과 당월 판매 관리 현황을 데이터로 실시간 관리하여 관리가 부실한
                판매자에게는 단계별로 패널티를 부과해요.
            </p>
        </div>
        <div class="data_graph">
            <div class="graph_box" v-for="(graph, index) in graphData" :key="index">
                <p class="grade">{{ graph.grade }}</p>
                <p class="title">{{ graph.title }}</p>
                <div class="graph graph_soldout" v-if="graph.soldout">
                    <div class="text_box">
                        <p class="graph_title">품절율</p>
                    </div>
                    <div class="graph_bar"></div>
                </div>
                <div class="graph graph_delay" v-if="graph.delay">
                    <div class="text_box">
                        <p class="graph_title">배송 지연</p>
                    </div>
                    <div class="graph_bar"></div>
                </div>
                <div class="graph graph_question_delay" v-if="graph.questionDelay">
                    <div class="text_box">
                        <p class="graph_title">문의 답변 지연</p>
                    </div>
                    <div class="graph_bar"></div>
                </div>
            </div>
        </div>
        <div class="art_text_box">
            <p class="title">정직하게 공개</p>
            <p class="text">
                데이터를 기반으로 선별된
                <br />
                우수/불량 판매자는 사이트에 표시되어 <br />
                고객들의 구매에 도움이 될 수 있도록 해요.
            </p>
        </div>
        <div class="seller_example">
            <div class="seller_box">
                <img
                    :src="$S3 + imgPath + 'precare_bad_seller.png'"
                    alt="불량 판매자"
                    class="fit_img"
                />
                <p class="text">불량 판매자</p>
            </div>
            <div class="seller_box">
                <img
                    :src="$S3 + imgPath + 'precare_best_seller.png'"
                    alt="우수 판매자"
                    class="fit_img"
                />
                <p class="text">우수 판매자</p>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        data() {
            return {
                imgPath: 'm_board/introduce_our_policies/pre_care/',
                graphData: [
                    {
                        grade: '1단계',
                        title: '불량 마크 표시',
                        soldout: '40% 이상',
                        delay: '10건 이상',
                        questionDelay: '30% 이상'
                    },
                    {
                        grade: '2단계',
                        title: '무료 제공 서비스 제거',
                        soldout: '45% 이상',
                        delay: '15건 이상'
                    },
                    {
                        grade: '3단계',
                        title: '상품 등록 금지',
                        soldout: '55% 이상',
                        delay: '25건 이상'
                    },
                    {
                        grade: '4단계',
                        title: '직권 품절',
                        soldout: '60% 이상',
                        delay: '30건 이상'
                    },
                    {
                        grade: '5단계',
                        title: '정산 보류',
                        delay: '50건 이상'
                    },
                    {
                        grade: '6단계',
                        title: '판매 정지',
                        soldout: '3개월 평균 70% 이상'
                    }
                ]
            }
        }
    }
</script>
