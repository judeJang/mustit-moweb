<template>
    <article class="comp_slide_layer filter_layer">
        <header class="layer_head">
            <h3 class="title">필터</h3>
            <button
                type="button"
                class="layer_close"
                aria-label="레이어 닫기"
                @click="close()"
            ></button>
        </header>

        <div class="layer_body">
            <nav>
                <div class="inner_wrap">
                    <button
                        type="button"
                        v-for="(keyName, index) in Object.keys(labelFactory)"
                        :key="index"
                        :class="{
                            active: getIsActive(keyName),
                            selected: getIsSelected(keyName)
                        }"
                        @click="filterSelected($event, keyName)"
                        ref="navBtn"
                    >
                        {{ keyName }}
                    </button>
                </div>
            </nav>
            <!-- 
                셀렉된 필터 넣는곳 
                column-layout table-fixed table border border-bottom border-cardbg
            -->

            <div class="filter_container" style="background: rgba(0, 0, 0, 0.2)">
                <!-- 기존 리소스 넣는 곳 -->
            </div>
            <div class="bottom_sheet">
                <button type="button" class="reset_btn">초기화</button>
                <button type="button" class="show_btn">상품보기</button>
            </div>
        </div>
    </article>
</template>
<script>
    import { mapActions } from 'vuex'
    import { getLabelTexts } from '@/assets/js/dummy/filterLayerData.js'

    export default {
        name: 'FILTER_LAYER',
        data() {
            return {
                labelFactory: {}
            }
        },
        created() {
            getLabelTexts.forEach((el, index) => {
                const keyName = el
                this.labelFactory[keyName] = {
                    isActive: index == 0 ? true : false,
                    isSelected: index == 1 ? true : false
                }
            })
        },
        methods: {
            ...mapActions('modalModule', ['slideUpModalAction', 'setSlideComponentName']),
            close() {
                this.slideUpModalAction(false)
            },
            getIsActive(keyName) {
                return this.labelFactory[keyName].isActive
            },
            getIsSelected(keyName) {
                return this.labelFactory[keyName].isSelected
            },
            filterSelected(e, keyName) {
                for (const key in this.labelFactory) {
                    this.labelFactory[key].isActive = false
                }
                this.labelFactory[keyName].isActive = true
                this.labelFactory = Object.assign({}, this.labelFactory)
                console.table(this.labelFactory)
                const buttons = this.$refs.navBtn
                const currentIndex = Array.from(buttons).indexOf(e.currentTarget)

                if (currentIndex <= 1) {
                    e.currentTarget.parentNode.scroll({
                        left: 0,
                        behavior: 'smooth'
                    })
                } else {
                    // smooth 스크롤
                    if (
                        e.currentTarget.offsetLeft + e.currentTarget.clientWidth + 16 >
                        e.currentTarget.parentNode.clientWidth
                    ) {
                        e.currentTarget.parentNode.scroll({
                            left: e.currentTarget.parentNode.clientWidth,
                            behavior: 'smooth'
                        })
                    }
                }
            }
        }
    }
</script>
