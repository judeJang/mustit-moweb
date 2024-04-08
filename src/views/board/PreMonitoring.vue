<template>
    <article class="policy_care_container">
        <div class="top_text_box">
            <h3 class="title">
                <img
                    :src="$S3 + imgPath + 'precare_title_4.png'"
                    alt="체계적인 모니터링"
                    class="img01"
                />
            </h3>
            <p class="text">
                우리는 전담팀을 구축하고 모니터링 프로그램을 운영하여 위조품 유통 가능성이
                있는 모든 것들을 체계적이고 꼼꼼하게 체크해요.
            </p>
        </div>
        <div class="step_container">
            <div class="step_box" v-for="(item, index) in monitoring" :key="index">
                <div class="step_top_box">
                    <p class="step">{{ item.monitoringText }}</p>
                    <p class="text">{{ item.monitoringTitle }}</p>
                </div>
                <ul class="step_list">
                    <li
                        class="step_item"
                        v-for="(list, index) in item.monitoringList"
                        :key="index"
                    >
                        <div class="icon_box">
                            <img
                                :src="$S3 + imgPath + list.icon"
                                :alt="list.icon"
                                class="icon"
                            />
                        </div>
                        <div class="text_box">
                            <p class="title">{{ list.title }}</p>
                            <p class="text" v-html="list.text"></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        data() {
            return {
                imgPath: 'm_board/introduce_our_policies/pre_care/',
                monitoring: [
                    {
                        monitoringText: '01',
                        monitoringTitle: '365일 24시간 모니터링',
                        monitoringList: [
                            {
                                icon: 'icon-precare-monitoring-01.png',
                                title: '등록 상품 상시 모니터링',
                                text: '수급이 어려운 모델을 단기간 많이 판매하거나, 온라인 평균 가격보다 저렴하게 판매하는 경우'
                            }
                        ]
                    },
                    {
                        monitoringText: '02',
                        monitoringTitle: '의심된다면 직접 체크',
                        monitoringList: [
                            {
                                icon: 'icon-precare-monitoring-02.png',
                                title: '미스터리 쇼퍼 운영',
                                text: '기준 상품 중 의심되는 상품을 직접 몰래 구매하여 감정 진행'
                            },
                            {
                                icon: 'icon-precare-monitoring-03.png',
                                title: '판매자 모니터링',
                                text: '비정기적 판매자 사무실 방문하여 직접 검수 진행'
                            }
                        ]
                    },
                    {
                        monitoringText: '03',
                        monitoringTitle: '감정도 곧바로',
                        monitoringList: [
                            {
                                icon: 'icon-precare-monitoring-04.png',
                                title: '위조품 처리 센터',
                                text: '의심 상품 신고 시 즉각적인 감정 진행'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
