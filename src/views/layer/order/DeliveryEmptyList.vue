<template>
    <section class="layer_all">
        <header>
            <button type="button" class="layer_close" @click="modalClose()"></button>
            <h2>배송지 목록</h2>
        </header>
        <div class="layer_container fix_bottom_button delivery_content list">
             <!-- 리스트 없는경우  -->
            <article class="empty_list" id="emptyList">
                    등록된 배송지가 없습니다.<br />
                    새로운 배송지를 등록해 주세요.
            </article>

            <div class="fix_button">
                <button type="button" class="black"><i></i>새로운 배송지 등록</button>
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

<style scoped></style>
