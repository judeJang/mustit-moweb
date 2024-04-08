<template>
    <section class="layer_all">
        <header>
            <button type="button" class="layer_close" @click="modalClose()"></button>
            <h2>주문자 정보</h2>
        </header>
        <div class="layer_container fix_bottom_button orderer_container">
            <div class="inner_container">
                <dl>
                    <dt>이름</dt>
                    <dd><BaseInputClear placeholder="이름을 입력해 주세요." /></dd>
                </dl>
                <dl>
                    <dt>휴대폰 번호</dt>
                    <dd>
                        <BaseInputClear
                            placeholder="휴대폰 번호를 입력해 주세요."
                            type="number"
                        />
                    </dd>
                </dl>
                <dl>
                    <dt>이메일 주소</dt>
                    <dd><BaseInputClear placeholder="이메일 주소를 입력해 주세요." /></dd>
                </dl>
            </div>

            <div class="fix_button">
                <button type="button" class="black">변경하기</button>
            </div>
        </div>
    </section>
</template>
<script>
    import BaseInputClear from '@/components/BaseInputClear.vue'
    export default {
        components: { BaseInputClear },
        methods: {
            modalClose: function () {
                this.$parent.close()
            }
        }
    }
</script>
