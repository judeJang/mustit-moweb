<template>
    <section class="public_content">
        <SubHeader title="머스트잇만의 정책 소개" />
        <!-- <SubTopHeader :data="headerName" :isDropState="false" :rightShow="false" /> -->
        <div class="policy_care_content">
            <div class="care_top">
                <h2 class="top_img_box followup_care">
                    <img
                        :src="$S3 + imgPath + topImg[content].img"
                        :alt="topImg[content].imgAlt"
                        class="top_img"
                    />
                    <p class="top_title" v-html="topImg[content].text"></p>
                </h2>
                <!-- tab -->
                <div class="policy_care_tab followup_care" ref="policy_care_tab">
                    <ul class="tabs_nav swiper-wrapper">
                        <li
                            class="tab_item swiper-slide"
                            :class="{
                                'tab_on': content == list.content
                            }"
                            v-for="list in tabData"
                            :key="list.content"
                        >
                            <router-link :to="list.link">
                                <span class="tab_box" v-html="list.text"></span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- 200% 책임보상제 -->
            <FollowupForgeryCompensation v-if="content == 0" />

            <!-- 명품 A/S -->
            <FollowupLuxuryAs v-if="content == 1" />

            <!-- 프리미엄 클리닝 서비스 -->
            <FollowupPremiumCleaning v-if="content == 2" />

            <!-- 품절/지연 보상제 -->
            <FollowupSoldoutDelivery v-if="content == 3" />

            <!-- 무료 교환 반품 -->
            <FollowupFreeExchangeReturn v-if="content == 4" />
        </div>
        <CareFloatingBnr />
    </section>
</template>

<script>
    import SubTopHeader from '@/components/SubTopHeader.vue'
    import SubHeader from '@/components/SubHeader.vue'
    import CareFloatingBnr from '@/views/board/CareFloatingBnr.vue'
    import FollowupForgeryCompensation from '@/views/board/FollowupForgeryCompensation.vue'
    import FollowupLuxuryAs from '@/views/board/FollowupLuxuryAs.vue'
    import FollowupPremiumCleaning from '@/views/board/FollowupPremiumCleaning.vue'
    import FollowupSoldoutDelivery from '@/views/board/FollowupSoldoutDelivery.vue'
    import FollowupFreeExchangeReturn from '@/views/board/FollowupFreeExchangeReturn.vue'
    import Swiper from 'swiper'
    export default {
        components: {
            SubTopHeader,
            CareFloatingBnr,
            FollowupForgeryCompensation,
            FollowupLuxuryAs,
            FollowupPremiumCleaning,
            FollowupSoldoutDelivery,
            FollowupFreeExchangeReturn,
            SubHeader
        },
        data() {
            return {
                headerName: [{ name: '머스트잇만의 정책 소개' }],
                imgPath: 'm_board/introduce_our_policies/followup_care/',
                query: this.$route.query.contents,
                content: 0,
                topImg: [
                    {
                        img: 'top_title_01.png',
                        imgAlt: '200% 책임보상제',
                        text: '끝까지 책임지는 머스트잇 <br/>정품이 아니면 200%를 보상해 드려요.'
                    },
                    {
                        img: 'top_title_02.png',
                        imgAlt: '명품 A/S',
                        text: '구매완료 시점 6개월부터 최대 12개월까지  <br/>무상으로 A/S를 해드려요.'
                    },
                    {
                        img: 'top_title_03.png',
                        imgAlt: '프리미엄 클리닝 서비스',
                        text: 'VIP 고객 대상으로 <br/> 런드리고 프리미엄 클리닝 서비스를 제공해요.'
                    },
                    {
                        img: 'top_title_04.png',
                        imgAlt: '품절/지연 보상제',
                        text: '불편함을 겪으신 고객님들을 위해<br/>품절 시 7% 쿠폰, 배송 지연 최대 10,000원 적립금 드려요.'
                    },
                    {
                        img: 'top_title_05.png',
                        imgAlt: '품절/지연 보상제',
                        text: '약 100만여 개의 국내 배송 상품을<br/>무료로 교환·반품 해드려요'
                    }
                ],
                swiper: null,
                tabData: [
                    {
                        content: 0,
                        text: '200% 책임보상제',
                        link: '/board/followup_care?contents=forgery_compensation'
                    },
                    {
                        content: 1,
                        text: '명품 A/S',
                        link: '/board/followup_care?contents=luxury_as'
                    },
                    {
                        content: 2,
                        text: '프리미엄 클리닝 서비스',
                        link: '/board/followup_care?contents=premium_cleaning_service'
                    },
                    {
                        content: 3,
                        text: '품절/지연 보상제',
                        link: '/board/followup_care?contents=soldout_delivery_compensation'
                    },
                    {
                        content: 4,
                        text: '무료 교환·반품',
                        link: '/board/followup_care?contents=free_exchange_return'
                    }
                ]
            }
        },
        created() {
            window.scrollTo(0, 0)
            switch (this.query) {
                case 'forgery_compensation':
                    this.content = 0
                    break

                case 'luxury_as':
                    this.content = 1
                    break

                case 'premium_cleaning_service':
                    this.content = 2
                    break

                case 'soldout_delivery_compensation':
                    this.content = 3
                    break
                case 'free_exchange_return':
                    this.content = 4
                    break
            }
        },
        mounted() {
            this.swiper = new Swiper(this.$refs['policy_care_tab'], {
                slidesPerView: 'auto',
                freeMode: true,
                speed: 500,
                observer: true,
                observeParents: true,
                initialSlide:
                    this.content < this.tabData.length - 2 && this.content > 0
                        ? this.content - 1
                        : this.content
            })
        }
    }
</script>
