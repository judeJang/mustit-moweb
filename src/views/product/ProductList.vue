<template>
    <div>
        <ListSortHeader />
        <div class="list">
            <div class="premium_info">
                <div class="premium_info__container">
                    <span class="premium_info__text"> 프리미엄 상품 AD </span>
                    <button class="btn_premium_popup" @click="premiumPopup = true">
                        <i class="question_icon" :class="{ active: premiumPopup }"></i>
                    </button>
                </div>
                <div class="premium_info__popup" :class="{ active: premiumPopup }">
                    프리미엄 광고를 구매한 판매자의 상품으로 상품의 판매실적(판매량,
                    판매금액), 리뷰수 등을 점수화하여 전시됩니다.
                </div>
                <div
                    class="sort_container_transition"
                    :class="{ active: premiumPopup }"
                    @click="premiumPopup = false"
                ></div>
            </div>

            <!-- 리스트 -->
            <VSearchItem
                v-for="(itemData, i) in itemList"
                :key="i"
                :itemData="itemData.data"
                :className="i % 2 == 0 ? 'even' : 'odd'"
                :index="i"
                @clickOption="clickOption"
                :isOptionShow="isOptionShow[i]"
            />
            <!-- ui 확인용 -->
            <div class="div-test">
                <button type="button" @click="deleteCookie" class="btn-test">
                    쿠키 삭제(진입시 애니메이션 확인용)
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import { getCookie, setCookie, removeCookie } from '@/assets/js/Common'
    import { SearchItemData } from '@/assets/js/dummy/SearchItemData'
    import VSearchItem from '@/modules/VSearchItem.vue'
    import ListSortHeader from '@/views/product/VSearchSort.vue'
    export default {
        components: { VSearchItem, ListSortHeader },
        data() {
            return {
                itemList: [...SearchItemData],
                premiumPopup: false,
                isOptionShow: [],
                hasSwipeAni: false,
                lowerPriceShowValue: false //최저가 모아보기
                // itemStyle: {}
            }
        },
        created() {
            // 첫 진입시 animation 활성화
            if (getCookie('itemSwiperAni') == 'Y') {
                this.hasSwipeAni = false
            } else {
                this.hasSwipeAni = true
            }

            for (let i = 0; i < this.itemList.length; i++) {
                this.isOptionShow = [...this.isOptionShow, false]
            }
        },
        mounted() {
            // 첫 진입시 swiper 모션 cookie
            var thumbnailIo = new IntersectionObserver(
                function (entries) {
                    entries.forEach(function (entry) {
                        entry.isIntersecting ? entry.target.classList.add('ani') : ''
                    })
                },
                {
                    threshold: 0.3
                }
            )

            if (getCookie('itemSwiperAni') != 'Y') {
                var elFirst = document.querySelector(
                    '.search_item_container:nth-of-type(1) .thumbnail_swiper'
                )
                var elSecond = document.querySelector(
                    '.search_item_container:nth-of-type(2) .thumbnail_swiper'
                )
                if (elFirst.querySelector('.swiper-slide:nth-child(2)')) {
                    thumbnailIo.observe(elFirst)
                    elFirst.classList.add('ani1')
                }
                if (elSecond.querySelector('.swiper-slide:nth-child(2)')) {
                    thumbnailIo.observe(elSecond)
                    elFirst.querySelector('.swiper-slide:nth-child(2)')
                        ? elSecond.classList.add('ani2')
                        : elSecond.classList.add('ani1')
                }
                if (
                    elFirst.querySelector('.swiper-slide:nth-child(2)') ||
                    elSecond.querySelector('.swiper-slide:nth-child(2)')
                ) {
                    setCookie('itemSwiperAni', 'Y')
                }
            }
        },
        methods: {
            clickOption(index) {
                if (this.isOptionShow[index]) {
                    this.isOptionShow = []
                    for (let i = 0; i < this.itemList.length; i++) {
                        this.isOptionShow = [...this.isOptionShow, false]
                    }
                } else if (!this.isOptionShow[index]) {
                    this.isOptionShow = []
                    // let optionLength = this.itemList[index].data.options.length
                    // let optionHeight = optionLength <= 10 ? optionLength * 20 + 42 : 230
                    // this.itemStyle = { paddingBottom: `${optionHeight}px` } // 마지막줄일 경우 option 높이값 만큼 여백 추가
                    for (let i = 0; i < this.itemList.length; i++) {
                        index === i
                            ? (this.isOptionShow = [...this.isOptionShow, true])
                            : (this.isOptionShow = [...this.isOptionShow, false])
                    }
                }
            },
            // ui 확인용
            deleteCookie() {
                removeCookie('itemSwiperAni')
                alert('쿠키를 삭제했습니다 새로고침해서 확인해주세요')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .list {
        overflow: hidden;
    }
    .div-test {
        width: 100%;
        clear: both;
    }
    .btn-test {
        border: 1px solid #666;
        border-radius: 4px;
        padding: 7px;
    }
</style>
