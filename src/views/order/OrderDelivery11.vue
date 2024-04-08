<template>
    <!-- 비회원일 경우 -->
    <article class="order_info">
        <div class="title">
            <h2>배송지 정보</h2>
            <div class="checkbox_container">
                <BaseCheckboxRed text="주문자 정보와 동일" @change="checkboxChange" />
            </div>
            <!--  // checkbox_container -->
        </div>
        <!-- // title -->
        <div class="form_container">
            <dl>
                <dt class="required">이름</dt>
                <dd>
                    <BaseInputClear placeholder="이름을 입력해 주세요." />
                </dd>
            </dl>
            <dl>
                <dt class="required">휴대폰</dt>
                <dd>
                    <BaseInputClear placeholder="-없이 입력해 주세요." type="number" />
                </dd>
            </dl>
            <dl>
                <dt>일반전화</dt>
                <dd>
                    <BaseInputClear placeholder="-없이 입력해 주세요." type="number" />
                </dd>
            </dl>
            <dl class="addr">
                <dt class="required">주소</dt>
                <dd>
                    <div class="input_btn_box">
                        <input type="text" readonly />
                        <button type="button" class="btn bg_white w96">
                            우편번호 검색
                        </button>
                    </div>
                    <input type="text" readonly class="full_size" />
                    <BaseInputClear
                        placeholder="상세 주소를 입력해 주세요."
                        type="text"
                    />
                </dd>
            </dl>
        </div>
        <div class="delivery_overseas no_user">
            <p>반드시 수령인의 통관고유부호와 이름(실명)을 입력하셔야 하며 정보가 다를 시 통관되지 않고 과태료가 발생할 수 있습니다.</p>
            </div>
        <!-- // form_container -->
        <div class="delivery_request">
            <div class="sub_title">
                <p>배송 요청사항</p>
            </div>
            <BaseSelect />
            <!-- // sub_title -->
        </div>
        <!-- // delivery_request -->
    </article>
</template>

<script>
    import BaseInputClear from '@/components/BaseInputClear.vue'
    import BaseSelect from '@/components/BaseSelect'
    import BaseCheckboxRed from '@/components/BaseCheckboxRed'
    export default {
        components: { BaseInputClear, BaseSelect, BaseCheckboxRed },
        methods: {
            // checkboxChange(checked, id) {
            //     //console.log('change', checked, id)
            // }
        }
    }
</script>

<style></style>
