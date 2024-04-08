<script>
    import EventBus from '@/assets/js/EventBus'
    import { mapState, mapActions } from 'vuex'

    import DirectIcon from '@/components/DirectIcon.vue'
    import PageTitle from '@/components/PageTitle.vue'
    import Swiper from 'swiper'
    const tempPath = 'https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/temp/cpp/'
    const commonPath =
        'https://mustit-upload.s3.ap-northeast-2.amazonaws.com/mobile/improve/'
    export default {
        name: 'DrawerNavi',
        data() {
            return {
                isLoggined: true,
                swiper: null,
                interestBrand: true,
                nothingBrand: false,
                pagingShow: false,
                // drawerOpen: false,
                categoryData: [
                    { name: '여성의류', file: `${tempPath}category1.png` },
                    { name: '여성슈즈', file: `${tempPath}category2.png` },
                    { name: '여성가방', file: `${tempPath}category3.png` },
                    { name: '여성ACC', file: `${tempPath}category4.png` },
                    { name: '남성의류', file: `${tempPath}category1.png` },
                    { name: '남성슈즈', file: `${tempPath}category2.png` },
                    { name: '남성가방', file: `${tempPath}category3.png` },
                    { name: '남성ACC', file: `${tempPath}category4.png` },
                    { name: '골프', file: `${tempPath}category1.png` },
                    { name: '뷰티', file: `${tempPath}category2.png` },
                    { name: '키즈', file: `${tempPath}category3.png` },
                    { name: '라이프', file: `${tempPath}category4.png` }
                ],
                shortCut: [
                    { file: `${commonPath}shotcut-hotdeal.png`, name: '핫딜' },
                    { file: `${commonPath}shotcut-ranking.png`, name: '랭킹' },
                    { file: `${commonPath}shotcut-boutique.png`, name: '부티크' },
                    {
                        file: `${commonPath}shotcut-sellingevent.png`,
                        name: '기획전'
                    },
                    { file: `${commonPath}shotcut-review.png`, name: '리뷰' },
                    { file: `${commonPath}shotcut-event.png`, name: '이벤트' },
                    { file: `${commonPath}shotcut-200.png`, name: '오프라인샵' },
                    { file: `${commonPath}shotcut-as.png`, name: 'A/S 서비스' }
                ]
            }
        },
        components: {
            DirectIcon,
            PageTitle
        },
        computed: {
            ...mapState('drawerModule', ['drawerOpen'])
        },
        mounted() {
            this.swiper = new Swiper(this.$refs.brandList, {
                speed: 500,
                resizeObserver: true,
                followFinger: false,
                touchReleaseOnEdges: true,
                slidesPerView: 1,
                observer: true,
                observeParents: true,
                pagination: {
                    el: this.$refs.brandList_paging,
                    clickable: true
                }
            })
            const pagingLen =
                this.$refs.brandList.querySelectorAll('.swiper-slide').length

            pagingLen > 1 ? (this.pagingShow = true) : (this.pagingShow = false)
            // console.log('drawerOpen', this.drawerOpen)
        },
        methods: {
            ...mapActions('drawerModule', ['toggleDrawer'])
        }
    }
</script>

<template>
    <section class="drawer_navigation public_content" :class="{ active: drawerOpen }">
        <article class="drawer_header">
            <a href="#" class="name" @click="isLoggined = true" v-if="!isLoggined"
                >로그인 해주세요 <i class="comp_icon_lnb_arrow_r"></i
            ></a>
            <p class="name" @click="isLoggined = false" v-if="isLoggined">
                장하영님, 안녕하세요!
            </p>
            <div class="icons">
                <a href="#"><i class="comp_icon_lnb_member"></i></a>
                <a href="#"><i class="comp_icon_lnb_setting"></i></a>
                <button type="button" @click="toggleDrawer()">
                    <i class="comp_icon_lnb_close"></i>
                </button>
            </div>
        </article>
        <article class="direct_menu">
            <DirectIcon
                v-for="list in categoryData"
                :key="list.name"
                :src="list.file"
                :name="list.name"
            />
        </article>
        <div class="divider"></div>
        <PageTitle><h2>머스트잇 서비스</h2></PageTitle>
        <article class="shortcut_menu">
            <DirectIcon
                v-for="(list, index) in shortCut"
                :key="list.name"
                :src="list.file"
                :name="list.name"
                :newClass="index == 1 ? true : false"
                :deemClass="true"
            />
        </article>
        <div class="divider"></div>
        <PageTitle><h2>BRAND</h2></PageTitle>
        <article class="brand_container">
            <div class="tab">
                <button
                    type="button"
                    class="tab_btn"
                    :class="{ active: interestBrand }"
                    @click="interestBrand = true"
                >
                    추천 브랜드
                </button>
                <button
                    type="button"
                    class="tab_btn"
                    :class="{ active: !interestBrand }"
                    @click="interestBrand = false"
                >
                    관심 브랜드
                </button>
            </div>
            <div class="recommend_brand brand_stick__wrap" v-show="interestBrand">
                <a href="#" class="brand_stick" v-for="index in 10" :key="index"
                    ><p class="brand_stick__name">브랜드 이름</p></a
                >
            </div>
            <div class="interest_brand" v-show="!interestBrand">
                <div class="add_brand" v-if="nothingBrand">
                    <p class="info">관심 브랜드를 지금 추가해 보세요!</p>
                    <button class="brand_btn" @click="nothingBrand = false">
                        브랜드 추가하기
                    </button>
                </div>
                <div class="swiper-container" ref="brandList" v-show="!nothingBrand">
                    <ul class="swiper-wrapper">
                        <li
                            class="swiper-slide brand_stick__wrap"
                            v-for="list in 2"
                            :key="list"
                        >
                            <a
                                href="#"
                                class="brand_stick"
                                v-for="index in 10"
                                :key="index"
                                ><p class="brand_stick__name">
                                    브랜드 이름이 길땐 어떻게 될까 브랜드 이름이 길땐
                                    어떻게 될까
                                </p></a
                            >
                        </li>
                    </ul>
                </div>
                <div
                    class="swiper-pagination brand_paging"
                    ref="brandList_paging"
                    v-show="pagingShow && !nothingBrand"
                ></div>
            </div>
            <div class="brand_allview" v-show="!nothingBrand || interestBrand">
                <button class="brand_btn" @click="nothingBrand = true">
                    브랜드 전체보기
                </button>
            </div>
        </article>
    </section>
</template>
