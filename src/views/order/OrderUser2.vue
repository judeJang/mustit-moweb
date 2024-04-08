<template>
    <article class="order_info">
        <div class="title">
            <h2>주문자 정보</h2>
        </div>
        <div class="form_container">
            <dl>
                <dt class="required">이름</dt>
                <dd>
                    <BaseInputClear placeholder="이름을 입력해 주세요." />
                </dd>
            </dl>
            <dl>
                <dt class="required">이메일</dt>
                <dd>
                    <BaseInputClear placeholder="이메일 주소를 입력해 주세요." />
                </dd>
            </dl>
            <dl>
                <dt class="required">휴대폰</dt>
                <dd>
                    <div class="input_btn_box">
                        <BaseInputClear
                            placeholder="-없이 입력해 주세요."
                            type="number"
                        />
                        <button type="button" class="btn bg_white w88">인증 요청</button>
                    </div>
                    <div class="input_btn_box">
                        <label class="input_count">
                            <input type="number" placeholder="인증번호 입력" required />
                            <span class="timer">04:59</span>
                        </label>
                        <button type="button" class="btn bg_black w88">인증 확인</button>
                    </div>
                </dd>
            </dl>
        </div>
    </article>
    <!-- // order_info -->
</template>

<script>
    import BaseInputClear from '@/components/BaseInputClear.vue'
    export default {
        components: { BaseInputClear }
    }
</script>
