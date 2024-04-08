<template>
    <article class="PDP_delivery">
        <h3>배송정보</h3>
        <ul>
            <!-- 국내배송 -->
            <List
                type="domestic"
                :data="domestic"
                :dataItem="dlv"
                v-for="(dlv, index) in domestic[0].info"
                :key="index"
                :keyNum="1"
            />
            <!-- 해외배송 -->
            <List
                type="international"
                :data="international"
                :dataItem="dlv"
                v-for="(dlv, index) in international[0].info"
                :key="index + 10"
                :keyNum="100"
            />
            <!-- 예약배송 -->
            <List
                type="reservation"
                :data="reservation"
                :dataItem="dlv"
                v-for="(dlv, index) in reservation[0].info"
                :key="index + 1000"
                :keyNum="10000"
            />
            <!-- 깜짝배송 -->
            <List
                type="quick"
                :data="quick"
                :dataItem="dlv"
                v-for="(dlv, index) in quick[0].info"
                :key="index + 100000"
                :keyNum="1000000"
            />
        </ul>
    </article>
</template>

<script>
    import List from '@/modules/VPDPDeliveryList.vue'

    export default {
        name: 'PDP_BENEFIT',
        components: { List },
        data() {
            return {
                // 국내배송
                domestic: [
                    {
                        name: '국내배송',
                        info: [
                            {
                                payment: 'free',
                                expectedDate: '8/8(화)~8/9(수)'
                            },
                            {
                                payment: '4,000원',
                                expectedDate: '8/8(화)~8/9(수)',
                                addInfo: {
                                    name: 'addFee',
                                    type: 'text',
                                    desc: [
                                        '추가 배송비 : 제주도 3,000원, 도서산간 5,000원'
                                    ],
                                    isOpen: false
                                }
                            },
                            {
                                payment: '4,000원',
                                expectedDate: '8/8(화)~8/9(수)',
                                addInfo: {
                                    name: 'addFee',
                                    type: 'text',
                                    desc: [
                                        '추가 배송비 : 제주도 3,000원, 도서산간 5,000원'
                                    ],
                                    groupDelivery: true,
                                    isOpen: false
                                }
                            },
                            {
                                payment: '4,000원',
                                cargo: true,
                                expectedDate: '8/8(화)~8/9(수)',
                                addInfo: {
                                    name: 'cargo',
                                    type: 'list',
                                    listTitle: '화물직배송이란',
                                    list: [
                                        '택배로 배송이 불가한 상품으로 화물직배송만 가능한 상품입니다.',
                                        '해당 상품은 묶음배송이 불가합니다.',
                                        '배송불가 지역 : 제주도, 도서산간지역'
                                    ],
                                    isOpen: false
                                }
                            }
                        ]
                    }
                ],
                // 해외배송
                international: [
                    {
                        name: '해외배송',
                        info: [
                            {
                                payment: 'free',
                                includeTax: true,
                                avgArriveDate: '6일 소요',
                                addInfo: {
                                    desc: [
                                        '관부가세 미포함인 경우 구매금액이 약 $150이 넘을 시 관부가세가 발생할 수 있습니다.',
                                        '구매한 여러 개의 상품이 동일한 날짜에 통관될 경우 합산과세가 발생할 수 있습니다.'
                                    ],
                                    isOpen: false
                                }
                            },
                            {
                                payment: '27,000원',
                                includeTax: false,
                                avgArriveDate: '6일 소요',
                                addInfo: {
                                    desc: [
                                        '관부가세 미포함인 경우 구매금액이 약 $150이 넘을 시 관부가세가 발생할 수 있습니다.',
                                        '구매한 여러 개의 상품이 동일한 날짜에 통관될 경우 합산과세가 발생할 수 있습니다.'
                                    ],
                                    isOpen: false
                                }
                            },
                            {
                                name: 'domestic',
                                payment: '3,000원',
                                includeTax: false,
                                avgArriveDate: '6일 소요',
                                cargo: true,
                                addInfo: {
                                    listTitle: '화물직배송이란?',
                                    desc: [
                                        '관부가세 미포함인 경우 구매금액이 약 $150이 넘을 시 관부가세가 발생할 수 있습니다.',
                                        '구매한 여러 개의 상품이 동일한 날짜에 통관될 경우 합산과세가 발생할 수 있습니다.'
                                    ],
                                    list: [
                                        '택배로 배송이 불가한 상품으로 화물직배송만 가능한 상품입니다.',
                                        '해당 상품은 묶음배송이 불가합니다.',
                                        '배송불가 지역 : 제주도, 도서산간지역'
                                    ],
                                    isOpen: false
                                }
                            }
                        ]
                    }
                ],
                // 예약배송
                reservation: [
                    {
                        name: '예약배송',
                        info: [
                            {
                                sendDate: '2022.01.20',
                                addInfo: {
                                    textTitle: '예약주문기간 : 2022.01.04~2022.01.10',
                                    desc: [
                                        '본 상품은 예약배송 상품으로 배송일이 지정되어 있으니 구매 시 참고해 주시기 바랍니다.'
                                    ],
                                    isOpen: false
                                }
                            }
                        ]
                    }
                ],
                // 깜짝배송
                quick: [
                    {
                        name: '깜짝배송',
                        info: [
                            {
                                time: '수도권 10:00~15:00 출고가능',
                                addInfo: {
                                    list: [
                                        '머스트잇 전용 퀵배송으로 수도권(서울,경기,인천)만 이용 가능',
                                        '당일 평균 3시간 이내 수령 가능한 특급배송 서비스',
                                        '기본 퀵비용 7,000원부터 (거리에 따라 배송비 상이함)',
                                        '최종 퀵비용 주문결제 페이지 > 깜짝배송 클릭시 확인 가능'
                                    ],
                                    isOpen: false
                                }
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
