<template>
    <section class="layer_all">
        <header>
            <button type="button" class="layer_close" @click="modalClose()"></button>
            <h2>할인쿠폰</h2>
        </header>
        <div class="layer_container fix_bottom_button discount_container">
            <article class="emtpy_container">
                <i class="comp_icon_empty"></i>
                <p>사용 가능한 쿠폰이 없습니다.</p>
            </article>

            <div class="fix_button">
                <button type="button" class="black">확인</button>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        methods: {
            modalClose: function () {
                this.$parent.close()
            }
        }
    }
</script>
