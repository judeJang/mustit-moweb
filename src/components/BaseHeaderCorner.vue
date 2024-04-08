<template>
    <nav class="categories">
        <!-- 메뉴 고정 5개 이하-->
        <article class="fix_wrap" v-if="!applySwiper">
            <a
                v-for="(menu, index) in data"
                :key="index"
                href="javascript:void(0);"
                class="category"
                :class="{ active: menu.isActive, new: menu.isNew }"
                @click.stop="menuClick(index)"
            >
                {{ menu.name }}
            </a>
        </article>

        <!-- swiper 적용 5개 이상-->
        <article class="swiper-container" v-else>
            <div class="swiper-wrapper">
                <a
                    v-for="(menu, index) in data"
                    :key="index"
                    href="#"
                    class="swiper-slide category"
                    :class="{ active: menu.isActive, new: menu.isNew }"
                    @click="menuClick(index)"
                >
                    {{ menu.name }}
                </a>
            </div>
        </article>
    </nav>
</template>
<script>
    import Swiper from 'swiper'
    import categoryData from '@/assets/js/dummy/CornerHeaderData.js'

    export default {
        name: 'TopHeaderNavigation',
        data() {
            return {
                data: [...categoryData].slice(0, 5),
                lastData: [...categoryData].slice(5, 6),
                swiper: null,
                applySwiper: false,
                activeIndex: 0,
                homeChangeDate: false
            }
        },
        created() {
            // 5개 초과부터 스와이퍼
            this.applySwiper = this.data.length > 5 ? true : false

            // 버튼 활성화 데이터 속성 추가
            this.data.forEach((data, index) => {
                if (this.$route.path == data.link || this.$route.path == data.subLink) {
                    data.isActive = true
                    this.activeIndex = index
                } else {
                    data.isActive = false
                }
            })
        },
        mounted() {
            if (this.applySwiper) {
                if (this.activeIndex > 2) {
                    this.swiper.slideTo(this.activeIndex)
                }
            }
        },
        watch: {
            homeChangeDate(newVal) {
                if (newVal) {
                    this.applySwiper = true
                    //[] 없애고 합치기
                    this.data.push(...this.lastData)

                    this.$nextTick(function () {
                        this.swiper = new Swiper('.categories .swiper-container', {
                            speed: 500,
                            resizeObserver: true,
                            observer: true,
                            observeParents: true,
                            followFinger: true,
                            freeMode: true,
                            // touchReleaseOnEdges: true,
                            slidesPerView: 'auto'
                        })
                    })
                } else {
                    this.data = this.data.slice(0, 5)
                    this.applySwiper = false
                    if (this.swiper) this.swiper.destroy(true, false)
                }
            }
        },
        methods: {
            menuClick(index) {
                //change array
                if (index == 0) this.homeChangeDate = !this.homeChangeDate

                //replace 중복 라우팅 방지 - 현재와 동일한 경로 방지
                this.$router.push(this.data[index].link).catch(() => {
                    console.log('중복된 라우터입니다.')
                })
            }
        }
    }
</script>
