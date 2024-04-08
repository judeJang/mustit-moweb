<template>
    <section class="public_content">
        <SubHeader title="머스트잇만의 정책 소개" />
        <!-- <SubTopHeader :data="headerName" :isDropState="false" :rightShow="false" /> -->
        <div class="policy_care_content">
            <div class="care_top">
                <h2 class="top_img_box pre_care">
                    <img
                        :src="$S3 + imgPath + topImg[content].img"
                        :alt="topImg[content].imgAlt"
                        class="top_img"
                    />
                    <p class="top_title" v-html="topImg[content].text"></p>
                </h2>
                <!-- tab -->
                <div class="policy_care_tab pre_care" ref="policy_care_tab">
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

            <!-- 까다로운 입점심사 -->
            <PreEntranceExamination v-if="content == 0" />

            <!-- 판매자 신용등급제도 -->
            <PreSellerCredit v-if="content == 1" />

            <!-- 품절/배송지연율 관리 -->
            <PreSoldoutDelivery v-if="content == 2" />

            <!-- 상시 모니터링 -->
            <PreMonitoring v-if="content == 3" />
        </div>
        <CareFloatingBnr />
    </section>
</template>

<script>
    // import SubTopHeader from '@/components/SubTopHeader.vue'
    import SubHeader from '@/components/SubHeader.vue'
    import CareFloatingBnr from '@/views/board/CareFloatingBnr.vue'
    import PreEntranceExamination from '@/views/board/PreEntranceExamination.vue'
    import PreSellerCredit from '@/views/board/PreSellerCredit.vue'
    import PreSoldoutDelivery from '@/views/board/PreSoldoutDelivery.vue'
    import PreMonitoring from '@/views/board/PreMonitoring.vue'
    import Swiper from 'swiper'
    export default {
        components: {
            // SubTopHeader,
            CareFloatingBnr,
            PreEntranceExamination,
            PreSellerCredit,
            PreSoldoutDelivery,
            PreMonitoring,
            SubHeader
        },
        data() {
            return {
                headerName: [{ name: '머스트잇만의 정책 소개' }],
                imgPath: 'm_board/introduce_our_policies/pre_care/',
                query: this.$route.query.contents,
                content: 0,
                topImg: [
                    {
                        img: 'top_title_01.png',
                        imgAlt: '까다로운 입점 심사',
                        text: '단계별 철저한 검증을 통해 <br/>믿을 수 있는 최고의 상품만 입점해요.'
                    },
                    {
                        img: 'top_title_02.png',
                        imgAlt: '판매자 신용등급제도',
                        text: '판매자 별 신용등급에 따라 어드벤티지&패널티 제도를<br/> 운영해 건강한 명품 쇼핑 환경을 조성해요.'
                    },
                    {
                        img: 'top_title_03.png',
                        imgAlt: '품절/배송 지연율 관리',
                        text: '고질적으로 발생할 수 있는 <br/>고객 부정 경험을 더욱 기민하게 관리해요.'
                    },
                    {
                        img: 'top_title_04.png',
                        imgAlt: '꼼꼼한 상시 모니터링',
                        text: '자체 모니터링 프로그램으로 <br/>위조품 유통을 사전에 차단해요.'
                    }
                ],
                tabData: [
                    {
                        content: 0,
                        text: '까다로운 입점 심사',
                        link: '/board/pre_care?contents=entrance_examination'
                    },
                    {
                        content: 1,
                        text: '판매자 신용등급제도',
                        link: '/board/pre_care?contents=seller_credit_rating'
                    },
                    {
                        content: 2,
                        text: '품절/배송 지연율 관리',
                        link: '/board/pre_care?contents=soldout_delivery_management'
                    },
                    {
                        content: 3,
                        text: '꼼꼼한 상시 모니터링',
                        link: '/board/pre_care?contents=always_monitoring'
                    }
                ]
            }
        },
        created() {
            window.scrollTo(0, 0)
            switch (this.query) {
                case 'entrance_examination':
                    this.content = 0
                    break

                case 'seller_credit_rating':
                    this.content = 1
                    break

                case 'soldout_delivery_management':
                    this.content = 2
                    break

                case 'always_monitoring':
                    this.content = 3
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
