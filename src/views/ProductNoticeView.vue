<template>
    <section class="product_detail_area common_css">
        <SubHeader title="상품 고시 정보" />
        <article class="product_notice">
            <div class="product_notice__inner_box">
                <div class="product_notice__table">
                    <table>
                        <colgroup>
                            <col width="140px" />
                            <col width="*" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>항목</th>
                                <th>내용</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>종류</th>
                                <td>반지갑</td>
                            </tr>
                            <tr>
                                <th>소재</th>
                                <td>상세 설명 참조</td>
                            </tr>
                            <tr>
                                <th>치수</th>
                                <td>상세 설명 참조</td>
                            </tr>
                            <tr>
                                <th>제조자(수입자)</th>
                                <td>BALNCIAGA</td>
                            </tr>
                            <tr>
                                <th>제조국</th>
                                <td>ITALY</td>
                            </tr>
                            <tr>
                                <th>세탁방법 및 취급 시 주의사항</th>
                                <td>상세 설명 참조</td>
                            </tr>
                            <tr>
                                <th>품질보증 기준</th>
                                <td>관련법 및 소비자 분쟁해결 기준 따름</td>
                            </tr>
                            <tr>
                                <th>A/S 책임자와 전화번호</th>
                                <td>머스트잇 고객센터<br />(1566-3516)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="product_notice__txt_box">
                    <h3 class="title_box">KC 안전인증정보</h3>
                    <div class="txt_box">
                        <div class="txt_inner_box">
                            <div class="logo">
                                <img
                                    src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/logo_mark_kc.svg"
                                    alt=""
                                />
                            </div>
                            <div class="txt">
                                [안전인증대상]<br />
                                인증상호/수입업자명 : 입력내용출력<br />
                                인증번호 : 입력내용출력
                            </div>
                        </div>
                        <div class="tip_txt">
                            해당 인증/검사 정보는 판매자가 직접 등록한 것으로 등록 정보에
                            대한 책임은 판매자에게 있습니다.
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </section>
</template>
<script>
    import SubHeader from '@/components/SubHeader.vue'
    export default {
        components: {
            SubHeader
        }
    }
</script>
