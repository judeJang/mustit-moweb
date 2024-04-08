<template>
    <article class="policy_care_container">
        <div class="top_text_box">
            <h3 class="title">
                <img
                    :src="$S3 + imgPath + 'followup_title_5.png'"
                    alt="부담 없이 즐기는 명품 쇼핑"
                    class="img02"
                />
            </h3>
            <p class="text">
                실물을 확인하지 못해, 사이즈가 고민되어 <br />
                구매 결정이 부담되었다면 이제 걱정하지 마세요!
            </p>
        </div>
        <div class="art_text_box">
            <p class="title">무료 교환·반품 정책</p>
        </div>
        <ul class="free_return_policy">
            <li class="policy_box" v-for="(list, index) in freeReturnPolicy" :key="index">
                <div class="icon_box">
                    <img :src="$S3 + imgPath + list.icon" :alt="list.icon" class="icon" />
                </div>
                <div class="text_box">
                    <p class="title">{{ list.title }}</p>
                    <p class="text" v-html="list.text"></p>
                    <p class="sub_text" v-if="list.subText">
                        {{ list.subText }}
                    </p>
                </div>
            </li>
        </ul>
        <div class="art_text_box">
            <p class="title">적용 상품 확인 방법</p>
        </div>
        <ul class="free_return_tips">
            <li class="tip_box" v-for="(list, index) in freeReturnTips" :key="index">
                <p class="step">{{ list.step }}</p>
                <p class="text" v-html="list.text"></p>
                <img :src="$S3 + imgPath + list.img" :alt="list.icon" class="img" />
            </li>
        </ul>
        <div class="btn_box">
            <a href="#" class="care_btn"> 무료 교환·반품 신청 바로가기 </a>
        </div>
    </article>
</template>

<script>
    export default {
        data() {
            return {
                imgPath: 'm_board/introduce_our_policies/followup_care/',
                freeReturnPolicy: [
                    {
                        icon: 'icon-aftercare-free-return-01.png',
                        title: '대상',
                        text: '머스트잇 회원이라면 누구나'
                    },
                    {
                        icon: 'icon-aftercare-free-return-02.png',
                        title: '기간',
                        text: '별도 공지 시까지'
                    },
                    {
                        icon: 'icon-aftercare-free-return-03.png',
                        title: '적용 상품',
                        text: '국내 배송 약 100만여 개 상품',
                        subText: '※ 무료 교환·반품 별도 표기'
                    },
                    {
                        icon: 'icon-aftercare-free-return-04.png',
                        title: '내용',
                        text: '기간내 ‘무료 교환 반품’ 적용 상품 구매시 <br/> 회원당 <strong>월 최대 5회 무료 교환/반품 지원</strong>'
                    }
                ],
                freeReturnTips: [
                    {
                        step: 'TIP 1',
                        text: '상품 리스트에서 <strong>‘무료교환반품’</strong> 상품 확인',
                        img: 'free_return_frame_01.png'
                    },
                    {
                        step: 'TIP 2',
                        text: '상품 상세정보 이미지 내 <strong>‘무료교환반품’</strong> 표기 확인',
                        img: 'free_return_frame_02.png'
                    },
                    {
                        step: 'TIP 3',
                        text: '검색 결과 내 <strong>‘무료교환반품’</strong> 상품만 모아 보기',
                        img: 'free_return_frame_03.png'
                    }
                ]
            }
        }
    }
</script>
