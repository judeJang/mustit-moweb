<template>
    <article class="policy_care_container">
        <div class="top_text_box">
            <h3 class="title">
                <img
                    :src="$S3 + imgPath + 'precare_title_2.png'"
                    alt="건강한 경쟁이 고객에겐 품질로"
                    class="img02"
                />
            </h3>
            <p class="text">
                우리는 판매 관리가 우수한 판매자에게는 <br />
                높은 신용등급을 부여하여 등급별 다양한 혜택을 제공하고 <br />
                판매 관리가 저조한 판매자에게는 <br />
                상품등록 불가, 노출 중단, 판매 정지 등의 조치를 취함으로 <br />
                고객에게는 우수한 품질의 서비스만 제공될 수 있도록 노력하고 있어요.
            </p>
        </div>
        <div>
            <div class="art_text_box">
                <p class="title">항목별 신용점수 산정</p>
            </div>
            <img
                :src="$S3 + imgPath + 'credit_score.png'"
                alt="항목별 신용점수 산정 표"
                class="fit_img"
            />
        </div>
    </article>
</template>

<script>
    export default {
        data() {
            return {
                imgPath: 'm_board/introduce_our_policies/pre_care/'
            }
        }
    }
</script>
