<template>
    <section class="layer_all">
        <header>
            <button type="button" class="layer_close" @click="modalClose()"></button>
            <h2></h2>
        </header>
        <div class="layer_container">
            <article class="inner_container order_terms_container">
                <component :is="terms"></component>
            </article>
        </div>
    </section>
</template>
<script>
    export default {
        props: {
            twoDepth: { type: String, default: 'basic' }
        },
        data() {
            return {
                pathMap: {
                    'basic': 'TermsModalBasicText',
                    'toss': 'TermsModalTossText',
                    'naverpay': 'TermsModalNaverPayText'
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
            terms() {
                const layer = this.executeMapReturn(this.twoDepth)
                console.warn('마지막', layer, this.twoDepth === 'toss')
                return require(`@/views/layer/order/${layer}.vue`).default
            }
        }
    }
</script>
