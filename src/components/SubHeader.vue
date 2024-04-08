<template>
    <header class="sub_header self_module" :class="noHeightClasses()">
        <h1 class="blind">머스트잇 스토어</h1>
        <section class="fixed_container" :style="curBgOpacity">
            <!-- left -->
            <article class="left_area">
                <IconBack :opacity="this.alpha" :type="isFadeMode" />
                <router-link
                    to="/home"
                    class="logo"
                    aria-label="머스트잇"
                    v-if="showAssociate()"
                ></router-link>
            </article>

            <!-- right -->
            <article class="right_area">
                <IconHome v-if="showHome()" :opacity="this.alpha" :type="isFadeMode" />
                <IconSearch
                    v-if="showSearch()"
                    :opacity="this.alpha"
                    :type="isFadeMode"
                />
                <IconBasket
                    :itemsCount="5"
                    v-if="showBasket()"
                    :opacity="this.alpha"
                    :type="isFadeMode"
                />
            </article>

            <!-- center -->
            <article class="center_area" :class="attachClasses()" @click="moreBtnClick()">
                <h2 :style="curOpacity" v-if="type !== 6">{{ name }}</h2>

                <button
                    type="button"
                    class="more_cate"
                    v-if="showCate()"
                    :class="moreBtnClass()"
                    aria-label="카테고리 더보기"
                ></button>
            </article>

            <!-- category -->
            <article class="cate_lists_area" v-if="showCate()">
                <transition name="slide-down">
                    <div class="cate_lists" v-if="showCateLists()">
                        <button
                            v-for="(category, index) in title"
                            :key="index"
                            type="button"
                            class="list"
                            :class="cateClass(index)"
                            @click="cateClick(index)"
                        >
                            {{ category.name }}
                        </button>
                    </div>
                </transition>
            </article>
        </section>
    </header>
</template>
<script>
    import { mapState, mapActions } from 'vuex'
    import { scrollRatio } from '@/assets/js/Common'

    import IconBack from '@/components/BaseHeaderIconBack.vue'
    import IconBasket from '@/components/BaseHeaderIconBasket.vue'
    import IconSearch from '@/components/BaseHeaderIconSearch.vue'
    import IconHome from '@/components/BaseHeaderIconHome.vue'

    export default {
        name: 'SubHeader',
        props: {
            title: { type: [String, Array] },
            type: { type: Number, default: 1 },
            /*
                type
                    1 default : 서브 페이지
                    2 : 장바구니
                    3 : 주문서
                    4 : cpp & LP
                    5 : BLP
                    6 : VIP 
            */
            fadeTarget: { type: [String, Number] }, //fadeMode 일때
            associate: { type: Boolean } //제휴사
        },
        components: { IconBack, IconBasket, IconSearch, IconHome },
        data() {
            return {
                name: Array.isArray(this.title) ? this.title[0].name : this.title,
                moreBtnActive: false,
                alpha: this.type === 5 ? 0 : 1
            }
        },
        created() {
            //console.log(this.associate, this.showAssociate())
            if (this.type == 4 && !Array.isArray(this.title)) {
                alert('title props의 타입은 Array list 입니다')
            }
        },
        mounted() {
            if (this.type == 4) {
                this.setAddClass('low_level') //deem z-index:101
            } else if (this.type == 5) {
                document.addEventListener('scroll', this.onScroll, { passive: true })
            }
        },
        computed: {
            ...mapState('deemModule', ['deemShow']),
            curOpacity() {
                return this.type == 5 ? `opacity:${this.alpha}` : ''
            },
            curBgOpacity() {
                return this.type == 5
                    ? `background-color:rgba(255,255,255,${this.alpha})`
                    : ''
            },
            isFadeMode() {
                return this.type === 5 ? 'fade' : ''
            }
        },
        watch: {
            deemShow(n) {
                if (!n && this.moreBtnActive) {
                    this.moreBtnActive = false
                }
            }
        },
        methods: {
            ...mapActions('deemModule', ['toggleDeem', 'setAddClass']),
            showBasket() {
                /* 장바구니와 주문서에서 hide */
                return this.type !== 2 && this.type !== 3
            },
            showHome() {
                // 장바구니, vip 에서만 show
                return this.type === 2 || this.type === 6
            },
            showSearch() {
                //주문서에서만 안보임
                return this.type !== 3
            },
            attachClasses() {
                let classes = {
                    //주문서
                    'extends': this.type == 3,
                    //cpp & lp
                    'add_btn': this.type == 4
                }
                return classes
            },
            cateClick(id) {
                this.name = this.title[id].name
                this.moreBtnClick()
                for (let [index, value] of this.title.entries()) {
                    if (id === index) {
                        value.isActive = true
                    } else {
                        value.isActive = false
                    }
                }
            },
            cateClass(index) {
                return this.title[index].isActive ? 'active' : ''
            },
            showCate() {
                // LP&CPP 일 때만
                return this.type === 4
            },
            showCateLists() {
                return this.showCate() && this.moreBtnActive
            },
            moreBtnClick() {
                if (this.type !== 4) return false
                this.moreBtnActive = !this.moreBtnActive
                this.toggleDeem()
            },
            moreBtnClass() {
                return this.moreBtnActive ? 'active' : ''
            },
            onScroll() {
                const target = this.$parent.$refs[this.fadeTarget]
                let ratio = scrollRatio(target, 52)

                this.alpha = ratio
            },
            noHeightClasses() {
                let classes = {
                    'no_height': this.type === 5
                }
                return classes
            },
            showAssociate() {
                //console.log('aa=>', this.type === 6 && this.associate)
                return this.type === 6 && this.associate
            }
        }
    }
</script>
