<template>
    <section class="public_content">
        <SubHeader title="머스트잇만의 정책 소개" />
        <!-- <SubTopHeader :data="headerName" :isDropState="false" :rightShow="false" /> -->
        <div class="policy_content">
            <article class="top_visual">
                <img
                    :src="`${$S3 + imgPath}top_banner_policy.png`"
                    alt=""
                    class="fit_img"
                />
                <h2 class="blind">중요한 건 고객을 향한 꺾이지 않는 마음</h2>
                <p class="blind">
                    우리는 누구나 명품을 합리적이고 믿을 수 있게 사야 된다고 생각해요.
                    과거에는 명품이 정보 비대칭성, 가격 불합리성으로 소수만의
                    전유물이었다면 머스트잇의 등장으로, 누구나 명품을 누릴 수 있게
                    되었어요. 우리는 언제나 고객을 위해 앞장서서 업계를 바꿔 나갈 거에요.
                </p>
            </article>
            <article class="policy_video">
                <h2 class="title">
                    <img
                        :src="`${$S3 + imgPath}policy_title_01.png`"
                        alt="어려운 건 쉽게!"
                    />
                </h2>
                <p class="txt">
                    안전한 명품 구매를 위한 <br />
                    오직 머스트잇만의 정책들을 함께 봐요!
                </p>
                <div class="video_box">
                    <button type="button" @click="videoModalOpen" class="btn_play">
                        <img
                            :src="`${$S3 + imgPath}thimbnail-video.png`"
                            alt="비디오 썸네일"
                            class="thum"
                        />
                        <img
                            :src="`${$S3 + imgPath}button-play.png`"
                            alt="재생"
                            class="img_btn"
                        />
                    </button>
                </div>
            </article>
            <article class="care_program">
                <h2 class="title">
                    <img
                        :src="`${$S3 + imgPath}policy_title_02.png`"
                        alt="머스트케어 프로그램으로 명품을 명품답게!"
                    />
                </h2>
                <div class="care_container pre_care">
                    <div class="text_box">
                        <h3 class="care_title">사전케어</h3>
                        <img
                            :src="`${$S3 + imgPath}policy_title_sub_01.png`"
                            alt="미리미리 철저하게"
                            class="care_txt_img"
                        />
                        <p class="care_txt">
                            온라인으로 명품을 사기 불안하시다고요? <br />
                            우리는 고객이 명품을 구매하기 전까지 <br />
                            발생할 수 있는 모든 이슈를 철저하게 차단해요.
                        </p>
                    </div>
                    <ul class="care_list">
                        <li class="care" v-for="(list, index) in preCare" :key="index">
                            <router-link :to="list.link">
                                <i class="icon_care"></i>
                                <p class="text">{{ list.text }}</p>
                                <i class="icon_arr"></i>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="care_container followup_care">
                    <div class="text_box">
                        <h3 class="care_title">사후케어</h3>
                        <img
                            :src="`${$S3 + imgPath}policy_title_sub_02.png`"
                            alt="이후에도 책임지고"
                            class="care_txt_img"
                        />
                        <p class="care_txt">
                            명품을 사고 나서도 안심이 안되신다고요? <br />구매 이후 혹시나
                            이슈가 발생한다면 <br />명품 답게 케어 받을 수 있게 책임져요.
                        </p>
                    </div>
                    <ul class="care_list">
                        <li
                            class="care"
                            v-for="(list, index) in followupCare"
                            :key="index"
                        >
                            <router-link :to="list.link">
                                <i class="icon_care"></i>
                                <p class="text">{{ list.text }}</p>
                                <i class="icon_arr"></i>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </article>
            <article class="numbers_container">
                <div class="text_box">
                    <h2 class="title">
                        <img
                            :src="`${$S3 + imgPath}policy_num_title.png`"
                            alt="숫자가 말해줘요!"
                        />
                    </h2>
                    <p class="text">
                        우리가 고객을 향한 마음만큼<br />
                        고객도 우리를 더 큰 사랑으로 보답해줬어요.<br />
                        고객님의 사랑이야말로<br />
                        우리를 성장하게 하는 원천이에요.
                    </p>
                </div>
                <div class="numbers_swiper" ref="numbersSwiper">
                    <ul class="swiper-wrapper">
                        <li
                            class="swiper-slide"
                            :class="`slide_${index}`"
                            v-for="(list, index) in numbersSwiper"
                            :key="index"
                        >
                            <i class="icon"></i>
                            <div class="number_box">
                                <span class="number">{{ list.number }}</span>
                                <span class="text">{{ list.text }}</span>
                            </div>
                            <div class="desc_box">
                                <p class="desc">{{ list.desc }}</p>
                                <p class="desc_sub">{{ list.subDesc }}</p>
                            </div>
                        </li>
                    </ul>
                    <div class="numbers_pagination" ref="numbersPaging"></div>
                </div>
            </article>
        </div>
        <transition name="slide-up">
            <div class="layer_node" v-if="isVideoModalOpen">
                <VideoModal
                    videoUrl="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/front/board/mustit_policies/mov.mp4"
                    :poster="`${$S3 + imgPath}thum_video.jpg`"
                />
            </div>
        </transition>
    </section>
</template>

<script>
    import Swiper from 'swiper'
    import EventBus from '@/assets/js/EventBus'
    import SubTopHeader from '@/components/SubTopHeader.vue'
    import SubHeader from '@/components/SubHeader.vue'
    import VideoModal from '@/views/layer/VideoModal.vue'

    export default {
        components: {
            SubTopHeader,
            VideoModal,
            SubHeader
        },
        data() {
            return {
                headerName: [{ name: '머스트잇만의 정책 소개' }],
                imgPath: 'm_board/introduce_our_policies/home/',
                preCare: [
                    {
                        text: '까다로운 입점 심사',
                        link: '/board/pre_care?contents=entrance_examination'
                    },
                    {
                        text: '판매자 신용등급제도',
                        link: '/board/pre_care?contents=seller_credit_rating'
                    },
                    {
                        text: '품절/배송 지연율 관리',
                        link: '/board/pre_care?contents=soldout_delivery_management'
                    },
                    {
                        text: '꼼꼼한 상시 모니터링',
                        link: '/board/pre_care?contents=always_monitoring'
                    }
                ],

                followupCare: [
                    {
                        text: '200% 책임보상제',
                        link: '/board/followup_care?contents=forgery_compensation'
                    },
                    {
                        text: '명품 A/S',
                        link: '/board/followup_care?contents=luxury_as'
                    },
                    {
                        text: '프리미엄 클리닝 서비스',
                        link: '/board/followup_care?contents=premium_cleaning_service'
                    },
                    {
                        text: '품절/지연 보상제',
                        link: '/board/followup_care?contents=soldout_delivery_compensation'
                    },
                    {
                        text: '무료 교환·반품',
                        link: '/board/followup_care?contents=free_exchange_return'
                    }
                ],

                numbersSwiper: [
                    {
                        number: '300',
                        text: '만+',
                        desc: '약 300만 명이 머스트잇을 이용해요!',
                        subDesc: '총 3,062,488명의 회원수 (2022년 기준)'
                    },
                    {
                        number: '400',
                        text: '만+',
                        desc: '400만 개의 명품이 여러분들을 만났어요!',
                        subDesc: '총 4,022,364개의 누적 판매수 (2022년 기준)'
                    },
                    {
                        number: '100',
                        text: '만',
                        desc: '약 100만 개의 소중한 후기가 있어요!',
                        subDesc: '총 911,637개의 구매 후기 (2022년 기준)'
                    },
                    {
                        number: '4.7',
                        text: '점',
                        desc: '100명 중에 94명은 우리를 만족스러워해요!',
                        subDesc: '앱 평점 4.7/5 (2022년 기준)'
                    },
                    {
                        number: '1',
                        text: '등',
                        desc: '대국민 투표에서 1등을 했어요!',
                        subDesc: '올해의 브랜드 대상 명품플랫폼 부문 (2022년 기준)'
                    }
                ],
                swiper: null,
                isVideoModalOpen: false
            }
        },
        methods: {
            videoModalOpen() {
                EventBus.$emit('videoModalOpen')
            }
        },
        mounted() {
            this.swiper = new Swiper(this.$refs.numbersSwiper, {
                speed: 500,
                resizeObserver: true,
                followFinger: false,
                observer: true,
                observeParents: true,
                loop: true,
                pagination: {
                    el: this.$refs.numbersPaging,
                    clickable: true
                }
            })
        },
        created() {
            const HTML = document.getElementsByTagName('html')[0]
            const BODY = document.body
            EventBus.$on('videoModalOpen', () => {
                this.isVideoModalOpen = true
                HTML.classList.add('html_scroll')
                BODY.classList.add('body_scroll')
            })
            EventBus.$on('videoModalClose', () => {
                this.isVideoModalOpen = false
                HTML.classList.remove('html_scroll')
                BODY.classList.remove('body_scroll')
            })
        },
        beforeDestroy() {
            EventBus.$off('videoModalOpen')
            EventBus.$off('videoModalClose')
        }
    }
</script>
