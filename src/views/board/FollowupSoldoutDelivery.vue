<template>
    <article class="policy_care_container">
        <div class="top_text_box">
            <h3 class="title">
                <img
                    :src="$S3 + imgPath + 'followup_title_4.png'"
                    alt="예상치 못한 불편함은 확실한 보상으로"
                    class="img02"
                />
            </h3>
            <p class="text">
                설렘 가득한 쇼핑 경험이 되어야 하지만 <br />간혹 배송 지연과 품절로 인한
                돌연 취소로 불편했던 <br />경험이 있으시죠?
            </p>
            <p class="text">
                이런 고객님들을 위해 위로의 마음을 담아 <br />쿠폰과 적립금으로 보상해
                드려요!
            </p>
        </div>
        <div class="soldout_delivery__table">
            <p class="title">품절/지연 보상 정책</p>
            <div class="table_box">
                <table>
                    <colgroup>
                        <col width="19.0625%" />
                        <col width="25.3125%" />
                        <col width="28.125%" />
                        <col width="27.5%" />
                    </colgroup>
                    <tr>
                        <th rowspan="2">구분</th>
                        <td rowspan="2" class="text_center">품절 보상</td>
                        <td colspan="2" class="text_center">배송지연 보상</td>
                    </tr>
                    <tr>
                        <td class="text_center">국내</td>
                        <td class="text_center">해외</td>
                    </tr>
                    <tr>
                        <th>
                            지급 <br />
                            조건
                        </th>
                        <td>결제 후 상품 품절로 취소 되는 경우</td>
                        <td>결제일로부터 10일(주말/공휴일 제외) 이후 배송완료</td>
                        <td>결제일로부터 20일(주말/공휴일 제외) 이후 배송완료</td>
                    </tr>
                    <tr>
                        <th>보상</th>
                        <td class="text_center">7% 쿠폰</td>
                        <td colspan="2">
                            배송완료 : 5,000원 적립금 <br />
                            배송지연 취소 : 10,000원 적립금
                        </td>
                    </tr>
                    <tr>
                        <th>
                            지급 <br />
                            방법
                        </th>
                        <td>별도 신청 절차 없이 품절 취소완료일 다음날 자동 지급</td>
                        <td colspan="2">
                            1:1 문의 게시판 또는 머스트잇 고객센터(1566-3516)를 이용하여
                            신청 접수
                        </td>
                    </tr>
                </table>
            </div>
            <div class="soldout_delivery_notice">
                <p class="notice_title">유의 사항</p>
                <div class="notice_box">
                    <p class="p_num"><span>1.</span>품절 보상</p>
                    <p class="p_dot">
                        품절 보상 쿠폰은 타 쿠폰과 중복으로 사용할 수 없습니다.
                    </p>
                    <p class="p_dot">
                        최대 할인은 100,000원이며, 지급일로부터 30일 이내 사용 가능합니다.
                    </p>
                </div>
                <div class="notice_box">
                    <p class="p_num"><span>2.</span> 배송지연 보상</p>
                    <p class="p_txt">
                        아래 3가지에 해당할 경우에는 배송지연 보상 조건에 해당하지
                        않습니다.
                    </p>
                    <p class="p_dot">상품 상세페이지에 배송 기간이 명시된 경우</p>
                    <p class="p_dot">판매자와 구매자의 상호 협의하에 배송 지연된 경우</p>
                    <p class="p_dot">
                        구매자 또는 제 3자(택배사, 관세청)의 귀책으로 배송이 지연되는 경우
                    </p>
                </div>
                <div class="info_box">
                    <p>
                        보상 쿠폰 사용 후 그 해당 상품이 ‘품절’로 취소되어 복원 된 쿠폰의
                        사용 가능 기간이 1일 이내 일 경우
                    </p>
                    <p>
                        <a href="#">1:1 문의 게시판</a> 또는 머스트잇
                        대표번호(1566-3516)로 연락하여 요청주시기 바랍니다.
                    </p>
                </div>
            </div>
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
