<template>
    <article class="policy_care_container">
        <div class="top_text_box">
            <h3 class="title">
                <img
                    :src="$S3 + imgPath + 'followup_title_3.png'"
                    alt="명품은 클리닝도 명품답게 받아야죠"
                    class="img02"
                />
            </h3>
            <p class="text">
                국내 최초 프리미엄 의류 전문 케어 서비스인 런드리고 <br />프리미엄
                서비스와 제휴해 30년 세탁 전문가들의 전담 케어를 받아 볼 수 있어요.
            </p>
        </div>
        <div class="cleaning_img_box">
            <p class="desc">※ 프리미엄 지정 브랜드</p>
            <img
                :src="$S3 + imgPath + 'followup_cleaning_brand.png'"
                alt="프리미엄 지정 브랜드"
                class="fit_img"
            />
        </div>
        <div class="art_text_box">
            <p class="title">혜택은 계속되어야 하니까</p>
            <p class="text">
                런드리고 프리미엄 서비스는 머스트잇 VIP(BLACK/RED) 고객 약 10,000명이
                혜택을 누리고 있어요.<br />
                앞으로도 머스트잇은 지속적인 제휴를 통해 고객들에게 다양한 혜택들을 제공할
                거예요.
            </p>
        </div>
        <div class="cleaning_btn_box">
            <a href="#" class="care_btn">나의 멤버십 혜택 확인하기</a>
        </div>
    </article>
</template>

<script>
    export default {
        data() {
            return {
                imgPath: 'm_board/introduce_our_policies/followup_care/'
            }
        }
    }
</script>
