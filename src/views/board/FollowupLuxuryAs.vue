<template>
    <article class="policy_care_container">
        <div class="top_text_box">
            <h3 class="title">
                <img
                    :src="$S3 + imgPath + 'followup_title_2.png'"
                    alt="AS 서비스의 모든 것"
                    class="img01"
                />
            </h3>
        </div>
        <div class="as_desc_container">
            <div class="desc_box" v-for="(desc, index) in asDesc" :key="index">
                <p class="title">{{ desc.title }}</p>
                <p class="text" v-html="desc.text"></p>
                <p class="text_sub" v-if="desc.subText">{{ desc.subText }}</p>
            </div>
        </div>
        <div class="art_text_box">
            <p class="title">이렇게 이용해요!</p>
        </div>
        <div class="as_step_container">
            <ul class="step_list">
                <li class="step_item" v-for="(list, index) in asStepList" :key="index">
                    <div class="icon_box">
                        <img
                            :src="$S3 + imgPath + list.icon"
                            :alt="list.icon"
                            class="icon"
                        />
                    </div>
                    <div class="text_box">
                        <p class="step">{{ list.step }}</p>
                        <p class="title">{{ list.title }}</p>
                        <p class="text" v-html="list.text"></p>
                    </div>
                </li>
            </ul>
            <div class="btn_box">
                <a href="#" class="care_btn">A/S 신청 바로가기</a>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        data() {
            return {
                imgPath: 'm_board/introduce_our_policies/followup_care/',
                asDesc: [
                    {
                        title: '누가 하나요?',
                        text: '머스트잇은 담당자가 상품 상태를 1차로 확인하고 <br/> 신뢰할 수 있는 명품 전문 수선업체와 제휴를 통해 편리하고 저렴하게 A/S 서비스를 제공하고 있어요.'
                    },
                    {
                        title: '어디까지?',
                        text: '패션 전 상품에 한해 구매 완료일로부터 <br/> 6개월에서 최대 12개월까지 무상으로 제공해요. <br/> 구매 기간이 경과했더라도, 저렴한 비용으로 A/S 서비스를 이용하실 수 있게 제휴 서비스를 제공하고 있어요.',
                        subText: '※ 멤버십 등급에 따라 차등 적용'
                    },
                    {
                        title: '백화점과 차이?',
                        text: '백화점의 A/S 서비스도 대부분 본사가 아닌 전문 수선업체를 통해 진행해요. <br/> 머스트잇은 백화점 수준의 A/S를 제공하기 때문에 서비스 품질은 동일해요.'
                    }
                ],
                asStepList: [
                    {
                        icon: 'icon-aftercare-as-01.png',
                        step: 'STEP 1',
                        title: '신청서 작성',
                        text: '신청서를 작성해주시면 A/S 담당자가 수선 내용 확인을 위해 연락 드립니다.'
                    },
                    {
                        icon: 'icon-aftercare-as-02.png',
                        step: 'STEP 2',
                        title: '머스트잇으로 상품 발송',
                        text: '상품을 보내주시면 담당자가 상품의 상태를 확인하고 신뢰할 수 있는 전문 업체에 수선을 진행합니다.'
                    },
                    {
                        icon: 'icon-aftercare-as-03.png',
                        step: 'STEP 3',
                        title: '수선',
                        text: '전문업체에서 수선 가능 여부와 비용을 확인하고 수선을 진행합니다.'
                    },
                    {
                        icon: 'icon-aftercare-as-04.png',
                        step: 'STEP 4',
                        title: '수선 완료',
                        text: '수선된 상품을 고객님께 전달 드립니다.'
                    }
                ]
            }
        }
    }
</script>
