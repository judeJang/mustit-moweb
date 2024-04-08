<template>
    <transition name="slide-up">
        <section
            class="layer_all"
            :class="typeClasses()"
            v-if="openModal"
            :style="testCode"
        >
            <header>
                <button
                    type="button"
                    class="close_btn"
                    @click="closeModal()"
                    aria-label="팝업 닫기"
                >
                    <i class="comp_all_modal_close" v-if="type === 1"></i>
                    <i class="comp_all_modal_close_wh" v-if="type === 2"></i>
                </button>
                <h3 v-if="type == 1">{{ title }}</h3>
                <!-- 테스트 코드 -->
                <h3 v-if="type == 2" style="color: white">검정 배경은 테스트 코드</h3>
            </header>
            <article class="layer_container" :class="attachClasses()">
                <slot name="container"></slot>

                <!-- 고정 버튼 존재 시 -->
                <div class="fix_button" :class="fixBtnShadowClass" v-if="fixBtnMode">
                    <slot name="fixBtn"></slot>
                </div>
            </article>
        </section>
    </transition>
</template>
<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: 'LayerAllModal',
        props: {
            title: { type: String, default: '' },
            containerClass: { type: String, default: null },
            fixButtonMode: {
                type: Object,
                default() {
                    return { apply: false, isShadow: false }
                }
            },

            type: { type: Number, default: 1 }
            /*
                type 1 default black icon
                type 2 white icon
             */
        },
        data() {
            return {
                order: 1
            }
        },
        computed: {
            ...mapState('modalModule', ['modal1Open', 'modal2Open', 'modal3Open']),
            fixBtnMode() {
                return this.fixButtonMode.apply
            },
            fixBtnShadowClass() {
                return { 'is_shadow': this.fixButtonMode.isShadow }
            },
            openModal() {
                const modalKey = `modal${this.order}Open`
                return this[modalKey]
            },
            testCode() {
                // 테스트 코드
                let style = ''
                if (this.type == 2) {
                    style = { 'background': 'black' }
                }
                return style
            }
        },
        watch: {
            modal1Open(n) {
                if (n) this.order = 1
            },
            modal2Open(n) {
                if (n) this.order = 2
            },
            modal3Open(n) {
                if (n) this.order = 3
            }
        },
        methods: {
            ...mapActions('modalModule', ['closeModal1', 'closeModal2', 'closeModal3']),
            attachClasses() {
                let classes = {
                    'fix_bottom_button': this.fixBtnMode
                }
                classes[this.containerClass] = this.containerClass !== null
                return classes
            },
            closeModal() {
                const closeModalFunction = this[`closeModal${this.order}`]
                if (typeof closeModalFunction === 'function') {
                    closeModalFunction()
                }
            },
            typeClasses() {
                return { type2: this.type === 2 }
            }
        }
    }
</script>
