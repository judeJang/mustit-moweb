<template>
    <section class="layer_all">
        <header>
            <button type="button" class="layer_close" @click="modalClose()"></button>
            <h2>배송지 수정</h2>
        </header>
        <div class="layer_container fix_bottom_button delivery_content form modify">
            <dl class="input_form">
                <dt class="define">배송지 이름</dt>
                <dd class="desc">
                    <BaseInputClear
                        maxlength="20"
                        placeholder="배송지 이름을 입력해 주세요."
                    />
                </dd>
            </dl>
            <dl class="input_form">
                <dt class="define essential">이름</dt>
                <dd class="desc">
                    <BaseInputClear maxlength="50" placeholder="이름을 입력해 주세요." />
                </dd>
            </dl>
            <dl class="input_form">
                <dt class="define essential">휴대폰번호</dt>
                <dd class="desc">
                    <BaseInputClear
                        type="tel"
                        placeholder="'-' 없이 번호만 입력해 주세요."
                        maxlength="11"
                        pattern="[0-9]*"
                        inputmode="numeric"
                        oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                    />
                </dd>
            </dl>
            <dl class="input_form">
                <dt class="define">일반전화</dt>
                <dd class="desc">
                    <BaseInputClear
                        type="tel"
                        placeholder="'-' 없이 번호만 입력해 주세요."
                        maxlength="11"
                        pattern="[0-9]*"
                        inputmode="numeric"
                        oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                    />
                </dd>
            </dl>
            <dl class="input_form">
                <dt class="define essential">주소</dt>
                <dd class="desc">
                    <div class="addr_form">
                        <div class="search_addr">
                            <input type="text" readonly />
                            <input type="button" value="우편번호 검색" />
                        </div>
                        <div class="form_block">
                            <input type="text" readonly />
                        </div>
                        <div class="form_block">
                            <input
                                type="text"
                                placeholder="상세주소를 입력해 주세요."
                                maxlength="100"
                            />
                        </div>
                    </div>
                </dd>
            </dl>

            <div class="checkbox_container">
                <input
                    type="checkbox"
                    class="check_idt"
                    id="#"
                    name="baesong_insert"
                    value="ok"
                />
                <label for="#" class="check_idt"></label>
                <label for="#">기본 배송지로 설정</label>
            </div>
            <div class="fix_button">
                <button class="black" @click="openConfirm()">수정하기</button>
            </div>
        </div>
    </section>
</template>
<script>
    import Vue from 'vue'
    import BaseInputClear from '@/components/BaseInputClear.vue'
    export default {
        components: { BaseInputClear },
        methods: {
            modalClose: function () {
                this.$parent.close()
            },
            openConfirm: function () {
                Vue.Alert.open('views/layer/order/ConfirmDeliveryApplyModal')
            }
        }
    }
</script>
