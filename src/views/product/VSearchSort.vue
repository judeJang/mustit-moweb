<template>
    <div class="product_sort_container self_module">
        <div class="product_list_header" :class="{ 'show_only_length': showOnlyLength }">
            <!-- ////////////////////////////////// 삭제 후 checkbox 추가 -->
            <template v-if="false">
                <p class="list_length"><strong>12,572</strong>개 상품</p>
            </template>
            <!-- E 삭제 후 checkbox 추가 -->
            <BaseCheckboxRed text="최저가 모아보기" @change="inputValue" />

            <button
                type="button"
                class="sort_btn"
                @click="openLayer"
                v-if="!showOnlyLength"
            >
                {{ sortName }}
            </button>
        </div>
        <transition name="slide-up">
            <div class="product_sort_layer" v-if="isLayerOpen">
                <div class="layer_head">
                    <p class="title" @click="changeSort">정렬</p>
                    <button
                        type="button"
                        class="layer_close"
                        @click="closeLayer"
                    ></button>
                </div>
                <div class="layer_body">
                    <ul class="sort_list">
                        <li v-for="(sort, i) in sortList" :key="i" class="sort_box">
                            <input
                                type="radio"
                                name="sort"
                                :id="`sort${i}`"
                                :checked="sort.isChecked"
                            />
                            <label
                                :for="`sort${i}`"
                                class="sort_label"
                                @click="clickSort(sort.name, i)"
                            >
                                <div class="text_box">
                                    <span class="text">{{ sort.name }}</span>
                                    <template v-if="sort.premium">
                                        <span class="ad_text">광고포함</span>
                                        <button
                                            class="btn_question"
                                            @click.stop="clickPremiumPopup(i)"
                                        >
                                            <i
                                                class="icon_question"
                                                ref="iconQuestion"
                                            ></i>
                                            <div
                                                class="premium_info_popup"
                                                v-if="sort.premium"
                                                ref="sortPopup"
                                            >
                                                {{ sort.premium }}
                                            </div>
                                        </button>
                                    </template>
                                </div>
                                <span class="radio"></span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </transition>
        <transition name="fade-ani">
            <div class="black_deem" v-if="isLayerOpen" @click="closeLayer"></div>
        </transition>
    </div>
</template>

<script>
    import BaseCheckboxRed from '@/components/BaseCheckboxRed.vue'
    export default {
        components: { BaseCheckboxRed },
        props: {
            showOnlyLength: { type: Boolean, default: false }
        },
        data() {
            return {
                sortName: '머스트잇 랭킹순',
                sortLp: [
                    {
                        name: '머스트잇 랭킹순',
                        isChecked: true,
                        premium:
                            '상품의 판매실적(판매량, 판매금액), 리뷰수 등을 점수화하여 정렬하고 정렬된 상품 중 광고 상품의 경우 상단에서 정렬됩니다.'
                    },
                    { name: '최신등록순', isChecked: false },
                    { name: '낮은가격순', isChecked: false },
                    { name: '높은가격순', isChecked: false }
                ],
                sortSrp: [
                    {
                        name: '머스트잇 랭킹순',
                        isChecked: true,
                        premium:
                            '상품의 판매실적(판매량, 판매금액), 리뷰수 등을 점수화하여 정렬하고 정렬된 상품 중 광고 상품의 경우 상단에서 정렬됩니다.'
                    },
                    { name: '정확도순', isChecked: false },
                    { name: '최신등록순', isChecked: false },
                    { name: '낮은가격순', isChecked: false },
                    { name: '높은가격순', isChecked: false }
                ],
                sortList: [],
                isLayerOpen: false,
                premiumPopup: false
            }
        },
        mounted() {
            this.sortList = [...this.sortSrp]
        },
        methods: {
            openLayer() {
                const HTML = document.getElementsByTagName('html')[0]
                const BODY = document.body
                HTML.classList.add('html_scroll')
                BODY.classList.add('body_scroll')
                this.isLayerOpen = true
            },
            closeLayer() {
                const HTML = document.getElementsByTagName('html')[0]
                const BODY = document.body
                HTML.classList.remove('html_scroll')
                BODY.classList.remove('body_scroll')
                this.isLayerOpen = false
                this.premiumPopup = false
            },
            clickSort(name, id) {
                this.sortName = name
                for (let [index, value] of this.sortList.entries()) {
                    if (id == index) {
                        value.isChecked = true
                    } else {
                        value.isChecked = false
                    }
                }
                this.closeLayer()
            },
            changeSort() {
                JSON.stringify(this.sortList) === JSON.stringify(this.sortSrp)
                    ? (this.sortList = [...this.sortLp])
                    : (this.sortList = [...this.sortSrp])
            },
            clickPremiumPopup(id) {
                if (this.premiumPopup) {
                    this.$refs.sortPopup.forEach((el) => {
                        el.classList.remove('active')
                    })
                    this.$refs.iconQuestion.forEach((el) => {
                        el.classList.remove('active')
                    })
                } else {
                    this.$refs.sortPopup[id].classList.add('active')
                    this.$refs.iconQuestion[id].classList.add('active')
                }
                this.premiumPopup = !this.premiumPopup
            },
            inputValue(val) {
                this.$parent.lowerPriceShowValue = val
            }
        }
    }
</script>

<style></style>
