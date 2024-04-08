<template>
    <section class="layer_all">
        <header>
            <button type="button" class="layer_close" @click="modalClose()"></button>
            <h2>통관고유부호 안내</h2>
        </header>
        <div class="layer_container">
            <article class="inner_container order_clearance_info_container">
                <p class="dot">
                    아래의 관세법에 의거하여 국내에서 해외상품을 개인이 '직배송' 받는 모든
                    경우에 예외없이 개인통관고유부호를 입력하도록 되어있습니다.
                </p>
                <p class="dot">
                    해외직배송이 아닌 판매자가 상품을 국내로 수입하여 재발송하는 경우에는
                    통관고유부호가 필요없으며, 현재 상품은 해외직배송으로 판매자가
                    통관고유부호 입력을 요청한 상품입니다.
                </p>
                <p class="dot">
                    개인통관고유부호는 관세청 사이트에서 신청하여 받으실 수 있습니다.
                </p>
                <p class="dot">
                    머스트잇은 구매회원의 빠른 상품 수령과 편의를 제공하기 위해
                    통관고유부호를 입력받고 있기때문에 머스트잇이 아닌 다른 경로를 통해
                    전달하실 수도 있습니다.
                </p>
                <hr />
                <h3>관세법시행령 [대통령령 제29530호, 2019.02.12]</h3>
                <p>제246조(수출·수입 또는 반송의 신고)</p>
                <p>
                    ① 법 제241조제1항에서 "대통령령으로 정하는 사항"이란 다음 각 호의
                    사항을 말한다.
                </p>
                <p>&#60;개정 2016.2.5 &#62;</p>
                <p class="mt16">1. 포장의 종류·번호 및 개수</p>
                <p>2. 목적지·원산지 및 선적지</p>
                <p>3. 원산지표시 대상물품인 경우에는 표시유무·방법 및 형태</p>
                <p>4. 상품</p>
                <p>
                    5. 납세의무자 또는 화주의 상호(개인의 경우 성명을
                    말한다)·사업자등록번호·통관고유부호 및 해외공급자부호 또는
                    해외구매자부호
                </p>
                <p>6. 물품의 장치장소</p>
                <p>7. 그 밖에 기획재정부령으로 정하는 참고사항</p>
            </article>
        </div>
    </section>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {
            modalClose: function () {
                this.$parent.close()
            }
        }
    }
</script>
