<template>
    <section class="layer_all">
        <header>
            <button type="button" class="layer_close" @click="modalClose()"></button>
            <h2>{{ twoDepth }}</h2>
        </header>
        <div class="layer_container fix_bottom_button discount_container">
            <div class="total_point_container">
                <dl>
                    <dt>사용 가능한 {{ twoDepth }}</dt>
                    <dd>100,000</dd>
                </dl>
            </div>
            <product v-for="i in total" :key="i"></product>
            <div class="fix_button is_shadow">
                <button type="button">사용하기</button>
            </div>
        </div>
    </section>
</template>
<script>
    import Product from '@/views/layer/order/SavePointModalProduct.vue'

    export default {
        props: {
            twoDepth: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                total: 3
            }
        },
        components: { Product },

        methods: {
            modalClose: function () {
                this.$parent.close()
            }
        }
    }
</script>
