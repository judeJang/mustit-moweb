<template>
    <article class="policy_care_container">
        <div class="top_text_box">
            <h3 class="title">
                <img
                    :src="$S3 + imgPath + 'precare_title_1.png'"
                    alt="시작부터 까다롭게"
                    class="img01"
                />
            </h3>
            <p class="text">
                모든 이슈는 발생하기 이전에 <br />
                차단하는 것이 무엇보다 중요해요.
            </p>
            <p class="text">
                우리는 전담팀을 배치하여 판매자들을 철저하게 검증하고 판매하고자 하는
                상품이 머스트잇의 사업 방향성과 맞는지 또 한 번 검증을 통해 고객에게
                최고의 상품만 제공될 수 있도록 노력하고 있어요.
            </p>
        </div>
        <div class="step_container">
            <div
                class="step_box"
                v-for="(item, index) in entranceExamination"
                :key="index"
            >
                <div class="step_top_box">
                    <p class="step">{{ item.stepText }}</p>
                    <p class="text">{{ item.stepTitle }}</p>
                </div>
                <ul class="step_list">
                    <li
                        class="step_item"
                        v-for="(list, index) in item.stepList"
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
                entranceExamination: [
                    {
                        stepText: '1단계',
                        stepTitle: '판매자 심사',
                        stepList: [
                            {
                                icon: 'icon-precare-audit-01.png',
                                title: '판매자 인증',
                                text: '휴대폰 인증, 사업자 등록증(or 주민등록)의 2단계로 신원 확인'
                            },
                            {
                                icon: 'icon-precare-audit-02.png',
                                title: '정품판매 보증 약관',
                                text: '정품판매 의무와 위반시 조치사항 안내 <br/> → ‘정품판매 보증약관’ 동의 받기'
                            },
                            {
                                icon: 'icon-precare-audit-03.png',
                                title: '상품 보장 각서',
                                text: '상품 등록 시, 필수로 서명하는 각서 <br/> → 가품 시 민사/형사 책임 약속'
                            },
                            {
                                icon: 'icon-precare-audit-04.png',
                                title: '증빙 서류 제출',
                                text: '정품 및 정상 유통을 증명할 수 있는 서류 (수입신고필증 등) 제출을 요구'
                            }
                        ]
                    },
                    {
                        stepText: '2단계',
                        stepTitle: '상품 심사',
                        stepList: [
                            {
                                icon: 'icon-precare-audit-05.png',
                                title: '판매 가능 브랜드 기준 검토',
                                text: '머스트잇의 내부 기준에 충족하는 브랜드만 입점 가능'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
