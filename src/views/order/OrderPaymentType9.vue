<template>
    <article class="order_info" :class="[isOpen ? 'toggle_open' : 'toggle_hide']">
        <div class="title">
            <h2>결제수단</h2>
            <div class="summary">신용카드 (롯데카드/6개월 무이자)</div>
            <div class="arr_container" @click="toggle"></div>
            <!-- 클릭영역 -->
        </div>
        <!-- title -->
        <div class="toggle_box" v-show="isOpen">
            <div class="payment_type_box">
                <div class="btns">
                    <span class="btn_box"><button type="button">신용카드</button></span>
                    <span class="btn_box"><button type="button">무통장입금</button></span>
                    <span class="btn_box">
                        <button type="button">
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
                        <button type="button" class="active">
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
                    <div class="list_box no_margin">
                        <ul class="payment_guide_list">
                            <li>
                                Toss Pay는 (주)비바리퍼블리카에서 운영하는 간편송금/결제
                                서비스이며, 등록된 계좌로 쉽게 결제가 가능합니다.
                            </li>
                            <li class="warning">
                                현금영수증은 자동으로 신청되며, Toss Pay가 직접
                                발행합니다.
                            </li>
                            <li>
                                Toss Pay는 송금을 통한 결제 서비스로, 머스트잇이 제공하는
                                무이자 할부와 무관합니다.
                            </li>
                            <li>
                                결제 및 사용관련 문의는 Toss Pay 고객센터(1599-4905 /
                                24시간 연중무휴)를 이용 바랍니다.
                            </li>
                            <li class="warning">
                                Toss Pay 결제 선택 시 깜짝배송 이용은 불가합니다.
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
                            <div class="accordion_title">Toss Pay 지원 은행</div>
                            <div class="accordion_desc" v-if="accordionData[0].isActive">
                                <img
                                    :src="`${path}m_order/img-toss-bank.png`"
                                    alt="img-toss-bank"
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
                            <div class="accordion_title">
                                은행별 점검시간에 따른 결제불가 안내
                            </div>
                            <div class="accordion_desc" v-if="accordionData[1].isActive">
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
                                은행별 송금한도 제한으로 인한 결제한도 안내
                            </div>
                            <div class="accordion_desc" v-if="accordionData[2].isActive">
                                <ul>
                                    <li>성인 : 1일(누적) , 1회 200만원 한도</li>
                                    <li>
                                        미성년자 : 1주문당 30만원, 1일 누적 30만원, 1개월
                                        누적 100만원
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- // accordion_item -->
                        <div
                            class="accordion_item"
                            @click="accordion(3)"
                            :class="
                                accordionData[3].isActive
                                    ? 'accordion_open'
                                    : 'accordion_close'
                            "
                        >
                            <div class="accordion_title">지원 단말기 버전</div>
                            <div class="accordion_desc" v-if="accordionData[3].isActive">
                                <ul>
                                    <li>
                                        ie11, Safari 7, Chrome 38, Firefox 27 부터 지원
                                    </li>
                                    <li>
                                        ie9, 10 는 일부 지원 (Window 8.1 이상, Enable TLS
                                        1.1, 1.2)
                                    </li>
                                    <li>Android 5.0 Lollipop 부터 지원</li>
                                    <li>iOS 9 부터 지원</li>
                                    <li>
                                        브라우저, 안드로이드, ios 모두 TLS 1.1 이상
                                        지원해야 되고, 디바이스 같은 경우 토스 앱의 최소
                                        지원 버전 기준입니다.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- // accordion_item -->
                    </div>
                    <!-- // accordions -->
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
                    { name: 'Toss Pay 지원 은행', isActive: false },
                    { name: '은행별 점검시간에 따른 결제불가 안내', isActive: false },
                    {
                        name: '은행별 송금한도 제한으로 인한 결제한도 안내',
                        isActive: false
                    },
                    {
                        name: '지원 단말기 버전',
                        isActive: false
                    }
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
