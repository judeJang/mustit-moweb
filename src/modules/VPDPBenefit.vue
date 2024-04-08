<template>
    <article class="PDP_benefit">
        <h3>혜택안내</h3>
        <ul class="benefit_list">
            <li
                v-for="(list, index) in benefits"
                :key="index"
                :class="[list.name, { 'is_open': list.isOpen }]"
                class="b_list"
            >
                <p
                    class="name"
                    v-html="list.text"
                    @click="benefitClick($event, index)"
                ></p>
                <ul v-if="list.children && list.isOpen" class="children_list">
                    <li v-for="(child, index) in list.children" :key="index">
                        {{ child }}
                    </li>
                </ul>
            </li>
        </ul>
        <button type="button" class="show_membership_benefit">
            머스트잇 멤버십 혜택보기
        </button>
    </article>
</template>

<script>
    export default {
        name: 'PDP_BENEFIT',
        data() {
            return {
                benefits: [
                    {
                        name: 'point',
                        text: '포인트 적립 최대 <strong>5,200원</strong>'
                    },
                    {
                        name: 'installment',
                        text: '무이자 할부 최대 <strong>12개월</strong> <span>(월 63,452원)</span>',
                        clickEvent: 'modal'
                    },
                    {
                        name: 'as',
                        text: '무상 A/S 제공',
                        children: [
                            '구매 후 6개월 이내 무상 A/S',
                            '신뢰할 수 있는 백화점 수준의 A/S 서비스'
                        ],
                        isOpen: false
                    },
                    {
                        name: 'free_exchange',
                        text: '무료 교환/반품 제공',
                        children: [
                            '상품 1회 무료 교환/반품 제공 프로모션',
                            '프로모션 대상 : 회원에 한하여 2023년 5월 1일 결제완료 주문부터 무료교환반품 가능'
                        ],
                        isOpen: false
                    }
                ]
            }
        },
        methods: {
            benefitClick(e, num) {
                if (
                    e.target.parentElement.classList.contains('as') ||
                    e.target.parentElement.classList.contains('free_exchange')
                ) {
                    this.benefits[num].isOpen = !this.benefits[num].isOpen
                }
            }
        }
    }
</script>
