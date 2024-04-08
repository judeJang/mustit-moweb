<template>
    <article class="order_info" :class="[isOpen ? 'toggle_open' : 'toggle_hide']">
        <div class="title">
            <h2>결제수단</h2>
            <div class="summary">신용카드 (롯데카드/6개월 무이자)</div>
            <div class="arr_container" @click="toggle"></div>
            <!-- 클릭영역 -->
        </div>
        <!-- // title -->
        <div class="toggle_box" v-show="isOpen">
            <div class="payment_type_box">
                <div class="btns">
                    <span class="btn_box"><button type="button">신용카드</button></span>
                    <span class="btn_box"><button type="button">무통장입금</button></span>
                    <span class="btn_box">
                        <button type="button" class="active">
                            <img :src="`${path}m_order/payment-npay.png`" alt="npay" />
                        </button>
                    </span>
                    <span class="btn_box">
                        <button type="button">
                            <img
                                :src="`${path}m_order/payment-kakaopay.png`"
                                alt="kakaopay"
                            />
                        </button>
                    </span>
                    <span class="btn_box">
                        <button type="button">
                            <img :src="`${path}m_order/payment-toss.png`" alt="toss" />
                        </button>
                    </span>
                    <span class="btn_box">
                        <button type="button">
                            <img :src="`${path}m_order/payment-payco.png`" alt="payco" />
                        </button>
                    </span>
                    <span class="btn_box">
                        <button type="button">
                            <img
                                :src="`${path}m_order/payment-samsungpay.png`"
                                alt="samsungpay"
                            />
                        </button>
                    </span>
                </div>
                <!-- type -->
                <div class="checkbox_container">
                    <BaseCheckboxRed text="이 결제 수단을 다음에도 사용" />
                </div>
                <div class="payment_type_detail">
                    <!-- 시스템 점검 시 노출, 시스템 점검 시 결제하기 버튼 비활성화-->
                    <div class="system_check">
                        <dl>
                            <dt>네이버페이 시스템 점검 중</dt>
                            <dd>일시 : 11월 17일 00:35 ~ 11월 17일 23:59</dd>
                        </dl>
                    </div>
                    <!-- system_check -->
                    <div class="list_box no_margin">
                        <ul class="payment_guide_list">
                            <li>
                                주문 변경 시 카드사 혜택 및 할부 적용 여부는 해당 카드사
                                정책에 따라 변경될 수 있습니다.
                            </li>
                            <li>
                                네이버페이는 네이버ID로 별도 앱 설치 없이 신용카드 또는
                                은행계좌 정보를 등록하여 네이버페이 비밀번호로 결제할 수
                                있는 간편결제 서비스입니다.
                            </li>
                            <li>
                                네이버페이 카드 간편결제는 네이버페이에서 제공하는 카드사
                                별 무이자, 청구할인 혜택을 받을 수 있습니다.
                            </li>
                        </ul>
                    </div>
                    <div class="accordions">
                        <div
                            class="accordion_item"
                            @click="accordion(0)"
                            :class="
                                accordionData[0].isActive
                                    ? 'accordion_open'
                                    : 'accordion_close'
                            "
                        >
                            <div class="accordion_title">지원 은행</div>
                            <div class="accordion_desc" v-if="accordionData[0].isActive">
                                <img
                                    :src="`${path}m_order/img-naverpay-bank.png`"
                                    alt="naverpay-bank"
                                />
                            </div>
                        </div>
                        <!-- // accordion_item -->
                        <div
                            class="accordion_item"
                            @click="accordion(1)"
                            :class="
                                accordionData[1].isActive
                                    ? 'accordion_open'
                                    : 'accordion_close'
                            "
                        >
                            <div class="accordion_title">지원 카드</div>
                            <div class="accordion_desc" v-if="accordionData[1].isActive">
                                <img
                                    :src="`${path}m_order/img-naverpay-card.png`"
                                    alt="naverpay-card"
                                />
                            </div>
                        </div>
                        <!-- // accordion_item -->
                        <div
                            class="accordion_item"
                            @click="accordion(2)"
                            :class="
                                accordionData[2].isActive
                                    ? 'accordion_open'
                                    : 'accordion_close'
                            "
                        >
                            <div class="accordion_title">
                                은행별 점검시간에 따른 결제불가 안내
                            </div>
                            <div class="accordion_desc" v-if="accordionData[2].isActive">
                                <ul>
                                    <li>공통 점검시간 : 매일 23:20~익일 00:40</li>
                                    <li>은행별 정기 점검시간</li>
                                </ul>
                                <div class="table_container">
                                    <table>
                                        <colgroup>
                                            <col width="80px" />
                                            <col width="*" />
                                        </colgroup>
                                        <tbody class="th_left td_left">
                                            <tr>
                                                <th>KDB산업</th>
                                                <td>매주 일요일 00:00~04:00</td>
                                            </tr>
                                            <tr>
                                                <th>KB국민</th>
                                                <td>
                                                    매월 세번째 일요일 전날
                                                    23:50~00:30,<br />
                                                    일요일 05:00~05:30
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>NH농협</th>
                                                <td>매월 셋째주 월요일 00:00~04:00</td>
                                            </tr>
                                            <tr>
                                                <th>우리은행</th>
                                                <td>
                                                    매주 목요일 23:45~금요일 00:45,<br />
                                                    매달 둘째주 일요일 02:00~06:00
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>씨티은행</th>
                                                <td>
                                                    공휴일 다음날<br />
                                                    (매주 월요일 포함 00:00~02:00)
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>대구은행</th>
                                                <td>분기말에 한번 토요일 00:00~06:00</td>
                                            </tr>
                                            <tr>
                                                <th>부산은행</th>
                                                <td>매월 셋째주 월요일 00:00~04:00</td>
                                            </tr>
                                            <tr>
                                                <th>광주은행</th>
                                                <td>둘째주 일요일 02:00~06:00</td>
                                            </tr>
                                            <tr>
                                                <th>제주은행</th>
                                                <td>월, 목 04:30~05:00</td>
                                            </tr>
                                            <tr>
                                                <th>전북은행</th>
                                                <td>매월 둘째주 토요일 00:00~04:00</td>
                                            </tr>
                                            <tr>
                                                <th>경남은행</th>
                                                <td>매월 둘째주 일요일 00:00~03:00</td>
                                            </tr>
                                            <tr>
                                                <th>우체국</th>
                                                <td>매일 04:00~05:00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <!-- // accordion_item -->
                    </div>
                    <!-- // accordions-->
                </div>
                <!-- payment_type_detail -->
            </div>
            <!-- payment_type_box -->
        </div>
        <!-- toggle_box -->
    </article>
</template>

<script>
    // 혜택이 있때 배너 노출
    import BaseCheckboxRed from '@/components/BaseCheckboxRed'
    export default {
        components: { BaseCheckboxRed },
        data: function () {
            return {
                path: this.$S3,
                isOpen: false,
                accordionData: [
                    { name: '지원 은행', isActive: false },
                    { name: '지원 카드', isActive: false },
                    { name: '은행별 점검시간에 따른 결제불가 안내', isActive: false }
                ]
            }
        },
        methods: {
            toggle() {
                this.isOpen = !this.isOpen
            },
            accordion(id) {
                this.accordionData[id].isActive = !this.accordionData[id].isActive
            }
        },
        mounted() {}
    }
</script>

<style scoped></style>
