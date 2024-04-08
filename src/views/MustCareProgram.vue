<template>
    <section class="public_content">
        <SubHeader title="머스트케어 프로그램" />
        <!-- <SubTopHeader
            :isDropState="false"
            :data="menuData"
            :count="9"
            :scrollEvent="mixinScrollUpDownState"
        /> -->
        <div class="must_care_program_container">
            <article class="top_visual">
                <img :src="`${$S3 + imgPath}top_banner.png`" alt="" class="fit_img" />
                <h2 class="blind">MUST CARE PROGRAM</h2>
                <p class="blind">명품답게 사고, 명품답게 관리받는 머스트 케어 프로그램</p>
            </article>
            <article class="program_desc">
                <h2>머스트잇은 단순히,<br />명품만을 팔지 않습니다.</h2>
                <p>
                    구매 전부터 구매 이후까지 고객이 명품을 접하는 <br />
                    전 과정에서 <strong>머스트 케어 프로그램</strong>을 통해<br />
                    합리적인 가격의 제품을 믿을 수 있게 구매하고,<br />
                    명품 답게 케어 받을 수 있도록 합니다.<br />
                </p>
                <ul class="program_list">
                    <li v-for="list in programList" :key="list.path">
                        <img
                            :src="`${$S3 + imgPath + list.path}`"
                            :alt="list.alt"
                            class="fit_img"
                        />
                    </li>
                </ul>
            </article>
            <article class="diagram_wrap">
                <div class="text_box">
                    <h2>
                        <img
                            :src="`${$S3 + imgPath}care_program_txt.png`"
                            alt="MUST CARE PROGRAM"
                        />
                    </h2>
                    <p>
                        머스트 케어 프로그램 시스템은<br />
                        사전케어와 사후케어 두가지 서비스로 나뉘며, <br />
                        고객의 럭셔리한 라이프를 만들어가는 <br />
                        온라인 No.1 명품 라이프스타일 플랫폼입니다.
                    </p>
                </div>
                <div class="img_box">
                    <img
                        :src="`${$S3 + imgPath}must_care_program.png`"
                        alt="M care"
                        class="fit_img"
                    />
                </div>
            </article>
            <article class="care_layout">
                <div class="text_box">
                    <h2>사전케어</h2>
                    <p>
                        머스트잇은 까다로운 입점 심사, 철저한 판매자 관리, 꼼꼼한 상시
                        모니터링을 통해 발생할 수 있는 위조품 유통을 사전에 방지합니다.<br />
                        또한, 상시 고객 응대를 통해 고객님의 불편함을 최소화하고 사용자
                        환경 개선에 앞장서고 있습니다
                    </p>
                </div>
                <ul class="img_list">
                    <li v-for="(list, index) in preCare" :key="index">
                        <router-link
                            :to="list.link != 'none' ? list.link : ''"
                            @click="preventClick(list.link)"
                            :class="list.link == 'none' ? 'no_link' : ''"
                        >
                            <img
                                :src="`${$S3 + imgPath + list.path}`"
                                :alt="list.alt"
                                class="fit_img"
                            />
                        </router-link>
                    </li>
                </ul>
                <div class="text_box">
                    <h2>사후케어</h2>
                    <p>
                        머스트잇은 구매 이후 발생할 수 있는 이슈에도 철저하고 신속하게
                        대응하고 있습니다.<br />
                        200% 책임 보상, 품절/지연 보상, A/S 서비스 등으로 단순히,
                        명품구매에서 끝나는 것이 아닌 구매 이후까지 명품 답게 케어 받으실
                        수 있게 책임지고 노력합니다.
                    </p>
                </div>
                <ul class="img_list">
                    <li v-for="(list, index) in followupCare" :key="index">
                        <router-link
                            :to="list.link != 'none' ? list.link : ''"
                            @click="preventClick(list.link, $event)"
                            :class="list.link == 'none' ? 'no_link' : ''"
                        >
                            <img
                                :src="`${$S3 + imgPath + list.path}`"
                                :alt="list.alt"
                                class="fit_img"
                            />
                        </router-link>
                    </li>
                </ul>
            </article>
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
        data: function () {
            return {
                menuData: [{ name: '머스트케어 프로그램' }],
                imgPath: 'm_board/must_care_program/',
                programList: [
                    {
                        path: 'program_list3.png',
                        alt: '상품 구매부터 사후 관리까지 머스트잇에서!'
                    },
                    {
                        path: 'program_list2.png',
                        alt: '위조품으로 판정되는 경우 200% 책임보상'
                    },
                    {
                        path: 'program_list1.png',
                        alt: '판매자와 배송상태를 지속적으로 모니터링!'
                    }
                ],
                preCare: [
                    {
                        path: 'pre_care_swiper1.png',
                        alt: '까다로운 입점 심사',
                        link: '/pre_care?contents=seller_monitoring'
                    },
                    {
                        path: 'pre_care_swiper2.png',
                        alt: '철저한 판매자 관리',
                        link: 'none'
                    },
                    {
                        path: 'pre_care_swiper3.png',
                        alt: '꼼꼼한 모니터링',
                        link: 'none'
                    },
                    { path: 'pre_care_swiper4.png', alt: '상시 고객 응대', link: 'none' }
                ],

                followupCare: [
                    {
                        path: 'followup_care_swiper1.png',
                        alt: '200% 책임보상',
                        link: '/followup_care?contents=compensation_forgery'
                    },
                    {
                        path: 'followup_care_swiper2.png',
                        alt: '품질지연보상',
                        link: '/followup_care?contents=delayed_delivery_compensation'
                    },
                    {
                        path: 'followup_care_swiper3.png',
                        alt: '패션 전 상품 a/s',
                        link: '/followup_care?contents=service_as'
                    },
                    {
                        path: 'followup_care_swiper4.png',
                        alt: '프리미엄 클리닝 서비스',
                        link: 'none'
                    }
                ]
            }
        },
        methods: {
            preventClick(data) {
                if (data != 'none') location.href = data
            }
        }
    }
</script>
