<template>
    <article class="product_qna box_border_top">
        <div class="top_container" @click="changeCase()">
            <p class="title">상품문의 <span class="count">(3)</span></p>
            <a
                href="https://m.mustit.co.kr/m/product/qna_seller/16348561/cuneo"
                class="go_question"
                v-if="caseNum == 1"
                >상품문의하기</a
            >
        </div>
        <ul class="qna_lists" v-if="caseNum == 1">
            <!-- 
                    [D] gna_list
                    accordion 일 때 active 추가
                    secret 글일때 secret 추가
                 -->
            <li
                class="qna_list"
                v-for="(list, index) in qnaList"
                :key="index"
                :class="{
                    active: list.isExtend,
                    secret: list.isSecret,
                    'e_accordion': list.myWriting
                }"
            >
                <div class="qna_short" @click="extendToggle(index)">
                    <p class="title">
                        <template v-if="!list.isSecret">{{ list.title }}</template>
                        <template v-else>비밀글입니다.</template>
                    </p>
                    <div class="info">
                        <p class="state" :class="{ completed: list.replyComplete }">
                            <template v-if="!list.replyComplete">답변대기</template>
                            <template v-else>답변완료</template>
                        </p>
                        <p>{{ list.id }}</p>
                        <p>{{ list.date }}</p>
                    </div>
                </div>
                <div class="qna_extend">
                    <div
                        class="each"
                        :class="{ secret: reply.isSecret }"
                        v-for="(reply, index) in list.extend"
                        :key="`replay_${index}`"
                    >
                        <i class="icon" :class="[reply.name === 'A' ? 'answer' : '']">
                            {{ reply.name }}
                        </i>
                        <div class="desc">
                            <p>
                                <template v-if="reply.isSecret">비밀글입니다.</template>
                                <template v-else>{{ reply.desc }}</template>
                            </p>
                            <span class="date">{{ reply.date }}</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

        <div class="nothing" v-if="caseNum == 2">
            <i class="icon"></i>
            <p>
                아직 등록된 상품문의가 없습니다.<br />궁금한 점은 언제든지 문의해 주세요.
            </p>
        </div>
        <a :href="productBottomBtnLink" class="bottom_btn">
            <template v-if="caseNum == 1">상품문의 전체보기</template>
            <template v-if="caseNum == 2">상품문의하기</template>
        </a>
    </article>
</template>

<script>
    export default {
        data() {
            return {
                qnaList: [
                    {
                        title: '배송이 언제 되나요?',
                        isExtend: false,
                        replyComplete: false,
                        isSecret: true,
                        id: 'chlwlfk***',
                        date: '2022.02.18',
                        extend: [
                            {
                                name: 'Q',
                                desc: '오늘 주문하면 다음주 주중에 받을 수 있을까요? 선물 포장 따로 신청하면 해주시나요?',
                                date: '2022.02.13'
                            },
                            {
                                name: 'A',
                                desc: '오늘 주문하면 다음주 주중에 받을 수 있을까요? 선물 포장 따로 신청하면 해주시나요?',
                                date: '2022.02.13'
                            }
                        ]
                    },
                    {
                        title: '배송이 언제 되나요?',
                        isExtend: false,
                        isSecret: true,
                        myWriting: true,
                        replyComplete: true,
                        id: 'chlwlfk***',
                        date: '2022.02.18',
                        extend: [
                            {
                                name: 'Q',
                                desc: '오늘 주문하면 다음주 주중에 받을 수 있을까요? 선물 포장 따로 신청하면 해주시나요?',
                                date: '2022.02.13'
                            },
                            {
                                name: 'A',
                                desc: '오늘 주문하면 다음주 주중에 받을 수 있을까요? 선물 포장 따로 신청하면 해주시나요?',
                                date: '2022.02.13'
                            }
                        ]
                    },
                    {
                        title: '오늘 주문하면 다음주 주중에 받을 수 있을까요? 선물 포장 따로 신청하면 해주시나요?',
                        isExtend: false,
                        replyComplete: true,
                        id: 'chlwlfk***',
                        date: '2022.02.18',
                        extend: [
                            {
                                name: 'Q',
                                desc: '오늘 주문하면 다음주 주중에 받을 수 있을까요? 선물 포장 따로 신청하면 해주시나요?',
                                date: '2022.02.13'
                            },
                            {
                                name: 'A',
                                desc: '오늘 주문하면 다음주 주중에 받을 수 있을까요? 선물 포장 따로 신청하면 해주시나요?',
                                date: '2022.02.13',
                                isSecret: true
                            }
                        ]
                    }
                ],
                caseNum: 1,
                productBottomBtnLink:
                    'https://m.web.mustit.co.kr/m/product/inquries/16348561'
            }
        },
        watch: {
            caseNum: function (n) {
                if (n == 1) {
                    this.productBottomBtnLink =
                        'https://m.mustit.co.kr/m/product/qna_seller/16348561'
                } else {
                    this.productBottomBtnLink =
                        'https://m.mustit.co.kr/m/product/qna_seller/16348561/cuneo'
                }
            }
        },
        methods: {
            extendToggle(id) {
                if (!this.qnaList[id].isSecret || this.qnaList[id].myWriting) {
                    this.qnaList[id].isExtend = !this.qnaList[id].isExtend
                }
            },
            changeCase() {
                this.caseNum++
                if (this.caseNum > 2) this.caseNum = 1
            }
        }
    }
</script>

<style></style>
