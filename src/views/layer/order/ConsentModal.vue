<template>
    <transition name="slide-up">
        <section class="layer_all">
            <header>
                <button type="button" class="layer_close" @click="modalClose()"></button>
                <h2></h2>
            </header>
            <div class="layer_container">
                <article class="inner_container order_consent_container">
                    <component :is="consent"></component>
                </article>
            </div>
        </section>
    </transition>
</template>
<script>
    export default {
        props: {
            twoDepth: { type: String, default: 'basic' }
        },
        data() {
            return {
                pathMap: {
                    'creditcard': 'ConsentModalCreditCardText',
                    'deposit': 'ConsentModalDepositText',
                    'nonCreditcard': 'ConsentModalNonMemberCreditCardText',
                    'nonDeposit': 'ConsentModalNonMemberDepositText',
                    'giveSeller': 'ConsentModalGiveSellerText'
                }
            }
        },
        methods: {
            modalClose: function () {
                this.$parent.close()
            },
            executeMapReturn(name) {
                return this.pathMap[name]
            }
        },
        computed: {
            consent() {
                const layer = this.executeMapReturn(this.twoDepth)
                return require(`@/views/layer/order/${layer}.vue`).default
            }
        }
    }
</script>
