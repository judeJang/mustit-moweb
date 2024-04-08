<template>
    <section class="megazing_content public_content">
        <!-- 기본 헤더 영역 -->
        <!-- 기존 header
            <SubTopHeader :data="menuArray" :count="basketCount" /> 
        -->
        <SubHeader :title="title" />
        <article class="magazing_header">
            <div class="inner_box" ref="magazingSlider">
                <ul class="swiper-wrapper">
                    <li
                        class="swiper-slide"
                        v-for="tobBanner in tobBanner"
                        :key="tobBanner.id"
                    >
                        <div class="img_box">
                            <img :src="tobBanner.img" />
                            <span
                                class="hash_tag"
                                :class="{ red: tobBanner.tag == '#스토리' }"
                            >
                                {{ tobBanner.tag }}
                            </span>
                        </div>
                        <div class="desc_box">
                            <span class="sub_title">
                                {{ tobBanner.subTitle }}
                            </span>
                            <span class="title">
                                {{ tobBanner.title }}
                            </span>
                            <span class="desc">
                                {{ tobBanner.desc }}
                            </span>
                        </div>
                    </li>
                </ul>
                <div class="mgz_pagination"></div>
            </div>
        </article>
        <article class="magazing_container">
            <div ref="mgzContainer"></div>
            <div class="menu_box" ref="menuBox">
                <div class="magazing_menu" ref="magazingMenu">
                    <ul class="swiper-wrapper">
                        <li
                            class="swiper-slide"
                            v-for="(catagoryMenu, index) in catagoryMenu"
                            :key="catagoryMenu.id"
                        >
                            <div
                                class="slider_btn"
                                :class="[
                                    {
                                        active: index == isActive
                                    },
                                    catagoryMenu.num == 1,
                                    'color_0' + catagoryMenu.num
                                ]"
                                @click="menuClick(index), menuMove()"
                            >
                                <span class="hash">#</span>{{ catagoryMenu.title }}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="magazing_list">
                <ul>
                    <li v-for="magazingList in magazingList" :key="magazingList.id">
                        <span class="img_box"><img :src="magazingList.img" /></span>
                        <span class="title">{{ magazingList.title }}</span>
                        <span class="desc">{{ magazingList.desc }}</span>
                    </li>
                </ul>
            </div>
        </article>
    </section>
</template>
<script>
    import Swiper from 'swiper'
    // import SubTopHeader from '@/components/SubTopHeader.vue'
    import SubHeader from '@/components/SubHeader.vue'
    export default {
        components: {
            // SubTopHeader,
            SubHeader
        },

        data() {
            return {
                basketCount: 5,
                swiper: null,
                isActive: 0,
                // menuArray: [{ name: '매거진', isActive: false }],
                title: '매거진',
                tobBanner: [
                    {
                        img: 'https://cdn.mustit.co.kr/lib/upload/admin/blog/mobile_1652929288-76.jpg',
                        tag: '#트랜드',
                        subTitle: '이렇게 입으면 기분이 좋을 테니까',
                        title: '도파민 드레싱이 필요한 우리에게',
                        desc: '웃을 일이 없는 요즘, 옷 한 벌로 빠르게 기분이 좋아진다면 그것이 바로 가성비 아닐까? 이전보다 과감해진 패션의 옷 한 벌로 빠르게 기분이 좋아진다면 그것이 바로 가성비 아닐까? 이전보다 과감해진 패션의'
                    },
                    {
                        img: 'https://cdn.mustit.co.kr/lib/upload/admin/blog/mobile_1652693125-94.jpg',
                        tag: '#스토리',
                        subTitle: '이렇게 입으면 기분이 좋을 테니까',
                        title: '공간 정리를 끝장내 줄 각종 라이프 툴',
                        desc: '정리는 인생의 새 출발이라는 말이 있다. 정리를 결심한 그때가 과거를 매듭짓고 미래로 첫걸음을 내딛는 최고의 타이밍이기 때문이다. 당신을 위한 머스트잇의 리빙 아이템을 소개한다.'
                    },
                    {
                        img: 'https://cdn.mustit.co.kr/lib/upload/admin/itstyle/mobile_1651047249-62.jpg',
                        tag: '#스토리',
                        subTitle: '이렇게 입으면 기분이 좋을 테니까',
                        title: '발렌시아가 2022 F/W 컬렉션 이모저모',
                        desc: '시의성과 시사성을 동시에 사로잡아 소비자들의 찬사를 받은 발렌시아가. 그 이유를 알아보자'
                    },
                    {
                        img: 'https://cdn.mustit.co.kr/lib/upload/admin/blog/mobile_1652929288-76.jpg',
                        tag: '#스토리',
                        subTitle: '이렇게 입으면 기분이 좋을 테니까',
                        title: '도파민 드레싱이 필요한 우리에게',
                        desc: '웃을 일이 없는 요즘, 옷 한 벌로 빠르게 기분이 좋아진다면 그것이 바로 가성비 아닐까? 이전보다 과감해진 패션의 이...'
                    },
                    {
                        img: 'https://cdn.mustit.co.kr/lib/upload/admin/blog/mobile_1652929288-76.jpg',
                        tag: '#스토리',
                        subTitle: '이렇게 입으면 기분이 좋을 테니까',
                        title: '도파민 드레싱이 필요한 우리에게',
                        desc: '웃을 일이 없는 요즘, 옷 한 벌로 빠르게 기분이 좋아진다면 그것이 바로 가성비 아닐까? 이전보다 과감해진 패션의 이...'
                    }
                ],
                catagoryMenu: [
                    { title: '전체', num: 1 },
                    { title: '브랜드', num: 2 },
                    { title: '트렌드', num: 3 },
                    { title: '스타일', num: 4 },
                    { title: '아이템', num: 5 },
                    { title: '셀럽', num: 6 },
                    { title: '이벤트', num: 7 },
                    { title: '기타', num: 8 }
                ],
                magazingList: [
                    {
                        img: 'https://cdn.mustit.co.kr/lib/upload/admin/blog/mobile_1652929288-76.jpg',
                        title: '도파민 드레싱이 필요한 우리에게',
                        desc: '웃을 일이 없는 요즘, 옷 한 벌로 빠르게 기분이 좋아진다면 그것이 바로 가성비 아닐까? 이전보다 과감해진 패션의 이...'
                    },
                    {
                        img: 'https://cdn.mustit.co.kr/lib/upload/admin/blog/mobile_1652693125-94.jpg',
                        title: '공간 정리를 끝장내 줄 각종 라이프 툴',
                        desc: '정리는 인생의 새 출발이라는 말이 있다. 정리를 결심한 그때가 과거를 매듭짓고 미래로 첫걸음을 내딛는 최고의 타이밍이기 때문이다. 당신을 위한 머스트잇의 리빙 아이템을 소개한다.'
                    },
                    {
                        img: 'https://cdn.mustit.co.kr/lib/upload/admin/itstyle/mobile_1651047249-62.jpg',
                        title: '발렌시아가 2022 F/W 컬렉션 이모저모',
                        desc: '시의성과 시사성을 동시에 사로잡아 소비자들의 찬사를 받은 발렌시아가. 그 이유를 알아보자'
                    },
                    {
                        img: 'https://cdn.mustit.co.kr/lib/upload/admin/blog/mobile_1652929288-76.jpg',
                        title: '도파민 드레싱이 필요한 우리에게',
                        desc: '웃을 일이 없는 요즘, 옷 한 벌로 빠르게 기분이 좋아진다면 그것이 바로 가성비 아닐까? 이전보다 과감해진 패션의 이...'
                    },
                    {
                        img: 'https://cdn.mustit.co.kr/lib/upload/admin/blog/mobile_1652929288-76.jpg',
                        title: '도파민 드레싱이 필요한 우리에게',
                        desc: '웃을 일이 없는 요즘, 옷 한 벌로 빠르게 기분이 좋아진다면 그것이 바로 가성비 아닐까? 이전보다 과감해진 패션의 이...'
                    },
                    {
                        img: 'https://cdn.mustit.co.kr/lib/upload/admin/blog/mobile_1652693125-94.jpg',
                        title: '공간 정리를 끝장내 줄 각종 라이프 툴',
                        desc: '정리는 인생의 새 출발이라는 말이 있다. 정리를 결심한 그때가 과거를 매듭짓고 미래로 첫걸음을 내딛는 최고의 타이밍이기 때문이다. 당신을 위한 머스트잇의 리빙 아이템을 소개한다.'
                    },
                    {
                        img: 'https://cdn.mustit.co.kr/lib/upload/admin/itstyle/mobile_1651047249-62.jpg',
                        title: '발렌시아가 2022 F/W 컬렉션 이모저모',
                        desc: '시의성과 시사성을 동시에 사로잡아 소비자들의 찬사를 받은 발렌시아가. 그 이유를 알아보자'
                    },
                    {
                        img: 'https://cdn.mustit.co.kr/lib/upload/admin/blog/mobile_1652929288-76.jpg',
                        title: '도파민 드레싱이 필요한 우리에게',
                        desc: '웃을 일이 없는 요즘, 옷 한 벌로 빠르게 기분이 좋아진다면 그것이 바로 가성비 아닐까? 이전보다 과감해진 패션의 이...'
                    },
                    {
                        img: 'https://cdn.mustit.co.kr/lib/upload/admin/blog/mobile_1652929288-76.jpg',
                        title: '도파민 드레싱이 필요한 우리에게',
                        desc: '웃을 일이 없는 요즘, 옷 한 벌로 빠르게 기분이 좋아진다면 그것이 바로 가성비 아닐까? 이전보다 과감해진 패션의 이...'
                    },
                    {
                        img: 'https://cdn.mustit.co.kr/lib/upload/admin/blog/mobile_1652693125-94.jpg',
                        title: '공간 정리를 끝장내 줄 각종 라이프 툴',
                        desc: '정리는 인생의 새 출발이라는 말이 있다. 정리를 결심한 그때가 과거를 매듭짓고 미래로 첫걸음을 내딛는 최고의 타이밍이기 때문이다. 당신을 위한 머스트잇의 리빙 아이템을 소개한다.'
                    },
                    {
                        img: 'https://cdn.mustit.co.kr/lib/upload/admin/itstyle/mobile_1651047249-62.jpg',
                        title: '발렌시아가 2022 F/W 컬렉션 이모저모',
                        desc: '시의성과 시사성을 동시에 사로잡아 소비자들의 찬사를 받은 발렌시아가. 그 이유를 알아보자'
                    },
                    {
                        img: 'https://cdn.mustit.co.kr/lib/upload/admin/blog/mobile_1652929288-76.jpg',
                        title: '도파민 드레싱이 필요한 우리에게',
                        desc: '웃을 일이 없는 요즘, 옷 한 벌로 빠르게 기분이 좋아진다면 그것이 바로 가성비 아닐까? 이전보다 과감해진 패션의 이...'
                    },
                    {
                        img: 'https://cdn.mustit.co.kr/lib/upload/admin/blog/mobile_1652929288-76.jpg',
                        title: '도파민 드레싱이 필요한 우리에게',
                        desc: '웃을 일이 없는 요즘, 옷 한 벌로 빠르게 기분이 좋아진다면 그것이 바로 가성비 아닐까? 이전보다 과감해진 패션의 이...'
                    },
                    {
                        img: 'https://cdn.mustit.co.kr/lib/upload/admin/blog/mobile_1652693125-94.jpg',
                        title: '공간 정리를 끝장내 줄 각종 라이프 툴',
                        desc: '정리는 인생의 새 출발이라는 말이 있다. 정리를 결심한 그때가 과거를 매듭짓고 미래로 첫걸음을 내딛는 최고의 타이밍이기 때문이다. 당신을 위한 머스트잇의 리빙 아이템을 소개한다.'
                    },
                    {
                        img: 'https://cdn.mustit.co.kr/lib/upload/admin/itstyle/mobile_1651047249-62.jpg',
                        title: '발렌시아가 2022 F/W 컬렉션 이모저모',
                        desc: '시의성과 시사성을 동시에 사로잡아 소비자들의 찬사를 받은 발렌시아가. 그 이유를 알아보자'
                    },
                    {
                        img: 'https://cdn.mustit.co.kr/lib/upload/admin/blog/mobile_1652929288-76.jpg',
                        title: '도파민 드레싱이 필요한 우리에게',
                        desc: '웃을 일이 없는 요즘, 옷 한 벌로 빠르게 기분이 좋아진다면 그것이 바로 가성비 아닐까? 이전보다 과감해진 패션의 이...'
                    }
                ]
            }
        },
        mounted() {
            //최상단 배너
            this.swiperBox = new Swiper(this.$refs.magazingSlider, {
                speed: 500,
                resizeObserver: true,
                slideToClickedSlide: true,
                observer: true,
                spaceBetween: 16,
                observeParents: true,
                pagination: {
                    el: '.mgz_pagination'
                }
            })

            //매거진 슬라이드 메뉴
            this.swiper = new Swiper(this.$refs.magazingMenu, {
                speed: 500,
                resizeObserver: true,
                slidesPerView: 'auto',
                freeMode: true,
                observer: true,
                observeParents: true
            })
        },
        methods: {
            menuClick(index) {
                this.isActive = index
                if (index > 2) this.swiper.slideTo(index)
                if (index < 3) this.swiper.slideTo(0)
            },
            menuMove() {
                let gnbHeight = document.querySelector('.mi-navigation').offsetHeight
                let menuTop = this.$refs.mgzContainer.offsetTop
                let skticyPosition = menuTop - gnbHeight
                let scrollTop = document.documentElement.scrollTop
                if (scrollTop >= skticyPosition) window.scrollTo(0, skticyPosition)
            }
        }
    }
</script>
