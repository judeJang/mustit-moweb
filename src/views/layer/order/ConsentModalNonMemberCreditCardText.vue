<template>
    <div>
        <h3>비회원 개인정보 수집 및 이용 동의</h3>
        <p>
            머스트잇은 고객님께서 구매하실 상품의 원활한 제공을 위해 아래와 같이
            개인정보를 수집.이용합니다.
        </p>
        <p>
            고객님께서는 개인정보 수집.이용에 동의하지 않을 수 있으며 동의하지 않으실 경우
            구매가 제한됩니다.
        </p>
        <div class="table_wrap">
            <table>
                <colgroup>
                    <col style="width: 32.5%" />
                    <col style="width: 15%" />
                    <col style="width: 27.5%" />
                    <col style="width: 25%" />
                </colgroup>
                <thead>
                    <tr>
                        <th>수집 및 이용목적</th>
                        <th>유형</th>
                        <th>항목</th>
                        <th>보유기간</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            상품 및 경품 배송(반품/환불), 배송지 및 연락처 확인(최초 입력
                            후 불러오기 기능 제공)
                        </td>
                        <td class="center">필수</td>
                        <td>
                            주문자명, 수령자명, 이메일, 휴대폰번호, 배송지주소, 일반전화
                            (입력했을 시)
                        </td>
                        <td rowspan="3">
                            5년간<br />(대금결제 및 재화 등의 공급에 관한 기록은
                            전자상거래법상 5년간 보유 가능)
                        </td>
                    </tr>
                    <tr>
                        <td>대금결제 서비스, 구매취소 등에 따른 거래금액 환불</td>
                        <td class="center">필수</td>
                        <td>
                            신용카드정보, 은행계좌정보(계좌번호, 예금주, 은행명), 결제수단
                            정보
                        </td>
                    </tr>
                    <tr>
                        <td>해외 직배송 상품 구매 시 통관을 위해 이용</td>
                        <td class="center">필수</td>
                        <td>개인고유통관부호</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'consentNonMembersCreditCardText'
    }
</script>
