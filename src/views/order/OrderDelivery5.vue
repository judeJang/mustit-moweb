<template>
    <article class="order_info">
        <div class="title">
            <h2>배송지 정보</h2>
            <button type="button" class="btn w80">{{ deliveryBtnText }}</button>
        </div>

        <div class="delivery_info">
            <p class="name" v-if="!isEmptyAddr">홍길동 / 집</p>
            <p :class="isEmptyAddr ? 'no_addr' : 'addr'" v-html="deliveryAddrText"></p>
            <p class="tel" v-if="!isEmptyAddr">010-1234-5678 / 02-1234-5678</p>
        </div>
        <div class="delivery_overseas" v-if="isOverseasDelivery">
            <p>
                반드시 수령인의 통관고유부호와 이름(실명)을 입력하셔야 하며 정보가 다를 시
                통관되지 않고 과태료가 발생할 수 있습니다.
            </p>
        </div>

        <div class="delivery_request">
            <div class="sub_title">
                <p>배송 요청사항</p>
                <div class="checkbox_container">
                    <BaseCheckboxRed
                        text="상품별 입력"
                        :cheked="true"
                        @change="checkboxChange"
                        v-if="manyItems"
                    />
                </div>
            </div>
            <template v-if="!eachItems">
                <BaseSelect :selectOpt="opt" @change="defaultSelectChange" />
                <BaseTextareaLimit v-if="showTextArea1" />
            </template>
        </div>

        <template v-if="eachItems">
            <div class="delivery_item">
                <p class="product_name">
                    [Nike] 나이키 에어 포스 1 07 올백 로우 CW2288-111
                </p>
                <BaseSelect :selectOpt="opt" @change="selectChangeItem1" />
                <BaseTextareaLimit v-if="showTextArea2" />
            </div>
            <div class="delivery_item">
                <p class="product_name">
                    [Loro Piana] 로로피아나 썸머 참 워크 스웨이드 로퍼 모카신 1…
                </p>

                <BaseSelect :selectOpt="opt" @change="selectChangeItem2" />
                <BaseTextareaLimit v-if="showTextArea3" />
            </div>
        </template>
        <div class="delivery_option" v-if="deliveryOpt">
            <div class="sub_title">
                <p>배송 구분</p>
                <div class="radio_container">
                    <BaseRadioRed
                        v-for="(rd, index) in radioData"
                        :key="index"
                        :named="rd.named"
                        :text="rd.text"
                        :isChecked="rd.checked"
                        :disabled="rd.disabled"
                        :value="String(index)"
                        @change="radioChange"
                    />
                </div>
            </div>

            <div class="quick_delivery_desc" v-if="quickDelivery">
                <p>서비스 이용시간 <span>10:00 ~ 15:00</span></p>
                <p>수도권만 가능 (주말, 공휴일 제외)</p>
                <div class="list_box">
                    <ul>
                        <li>주문하신 상품은 지금 바로 받으실 수 있습니다.</li>
                        <li>교통 상황에 따라 배송시간이 상이할 수 있습니다.</li>
                    </ul>
                </div>
                <button
                    type="button"
                    class="btn bg_white"
                    v-if="!calcuratorDeliveryPay"
                    @click="deliveryPay()"
                >
                    배송비 계산하기
                </button>
                <div class="map_container" v-else>
                    <div class="map_box">지도영역</div>
                    <div class="map_detail">
                        <dl>
                            <dt>거리</dt>
                            <dd>15.89km</dd>
                        </dl>
                        <dl>
                            <dt>예상 배송시간</dt>
                            <dd>약 139분</dd>
                        </dl>
                        <hr />
                        <dl>
                            <dt>결제방법</dt>
                            <dd>
                                <div class="radio_container">
                                    <BaseRadioRed
                                        v-for="(rd, index) in paymentRadio"
                                        :key="index"
                                        :named="rd.named"
                                        :text="rd.text"
                                        :isChecked="rd.checked"
                                        :value="String(index)"
                                    />
                                </div>
                            </dd>
                        </dl>
                        <dl>
                            <dt>배송비</dt>
                            <dd>22,000원</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
    import BaseSelect from '@/components/BaseSelect.vue'
    import BaseTextareaLimit from '@/components/BaseTextareaLimit.vue'
    import BaseCheckboxRed from '@/components/BaseCheckboxRed'
    import BaseRadioRed from '@/components/BaseRadioRed.vue'
    export default {
        components: { BaseSelect, BaseTextareaLimit, BaseCheckboxRed, BaseRadioRed },
        props: {
            manyItems: { type: Boolean, default: false }, //상품별 입력
            deliveryOpt: { type: Boolean, default: false }, //배송 옵션
            radioData: {
                type: Array,
                default: () => [
                    { text: '일반택배', named: 'radio_1', checked: true },
                    { text: '깜짝배송', named: 'radio_1', checked: false }
                ]
            },
            isEmptyAddr: { type: Boolean, default: false }, //등록된 배송지가 없을 경우
            isOverseasDelivery: { type: Boolean, default: false } //해외상품 주문 시 배송정보 안내
        },
        data() {
            return {
                opt: [
                    { text: '배송시 요청사항을 선택해 주세요', selected: true },
                    { text: '부재시 경비실에 맡겨주세요.', selected: false },
                    { text: '부재시 휴대폰으로 연락바랍니다.', selected: false },
                    { text: '집 앞에 놓아주세요.', selected: false },
                    { text: '배송전에 연락주세요.', selected: false },
                    { text: '택배함에 넣어주세요.', selected: false },
                    { text: '직접 입력', selected: false }
                ],
                paymentRadio: [
                    { text: '선결제', checked: true, named: 'radio_2' },
                    { text: '착불', checked: false, named: 'radio_2' }
                ],
                eachItems: false,
                showTextArea1: false,
                showTextArea2: false,
                showTextArea3: false,
                quickDelivery: false,
                calcuratorDeliveryPay: false,
                deliveryBtnText: this.isEmptyAddr ? '배송지 입력' : '배송지 변경',
                deliveryAddrText: this.isEmptyAddr
                    ? '등록된 기본 배송지가 없습니다.<br />배송지 정보를 입력해 주세요.'
                    : '(06030) 서울 강남구 압구정로 148 머스트잇빌딩 4층 서울 강남구 압구정로 148 머스트잇빌딩 4층'
            }
        },
        methods: {
            defaultSelectChange(value) {
                value == 6 ? (this.showTextArea1 = true) : (this.showTextArea1 = false)
            },
            checkboxChange(checked) {
                // console.log(checked)
                this.eachItems = checked
            },
            selectChangeItem1(value) {
                value == 6 ? (this.showTextArea2 = true) : (this.showTextArea2 = false)
            },
            selectChangeItem2(value) {
                value == 6 ? (this.showTextArea3 = true) : (this.showTextArea3 = false)
            },
            radioChange(value) {
                if (value == String(1)) {
                    this.quickDelivery = true
                } else {
                    this.quickDelivery = false
                    this.calcuratorDeliveryPay = false
                }
            },
            deliveryPay() {
                this.calcuratorDeliveryPay = true
            }
        }
    }
</script>

<style></style>
