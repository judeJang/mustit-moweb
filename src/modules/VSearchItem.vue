<template>
    <article class="search_item_container self_module" :class="className">
        <ZzimButton />

        <a href="#">
            <!-- 썸네일 -->
            <div class="thumbnail_container">
                <div class="thumbnail_swiper" ref="thumbnailSwiper">
                    <div class="swiper-wrapper">
                        <div
                            class="swiper-slide img_wrap"
                            v-for="(image, i) in itemData.imageUrl"
                            :key="`image${i}`"
                        >
                            <img :src="image" alt="상품이미지" />
                        </div>
                    </div>
                    <div
                        class="swiper-pagination thumbnail_pagination"
                        ref="thumbnailBullets"
                        v-if="itemData.imageUrl.length > 1"
                    >
                        <div
                            class="swiper_bullet_wrap"
                            ref="bulletsWrap"
                            :style="itemData.imageUrl.length > 6 ? bulletStyle : {}"
                        ></div>
                    </div>
                </div>
                <div class="float_badge">
                    <span
                        class="badge"
                        :class="{
                            'badge_outlet': badge === '아울렛',
                            'badge_compare': badge === '가격비교'
                        }"
                        v-for="(badge, i) in itemData.badgeList"
                        :key="`badge${i}`"
                    >
                        {{ badge }}
                    </span>
                </div>
            </div>
            <!-- 상품 정보 -->
            <div class="info_container">
                <p class="brand">{{ itemData.brandName }}</p>
                <p class="name">{{ itemData.name }}</p>
                <p class="lowest_price">
                    <img :src="`${$S3}m_badge/lowest_price.png`" alt="최저가" />
                </p>
                <div class="price">
                    <p class="discount" v-if="itemData.discountRate > 0">
                        {{ itemData.discountRate }}%
                    </p>
                    <p class="discount_price">{{ itemData.price }}</p>
                    <del class="del_price" v-if="itemData.originalPrice != 0">{{
                        itemData.originalPrice
                    }}</del>
                </div>
                <div class="product_badge" v-if="itemData.tagList.length > 0">
                    <span
                        class="badge"
                        v-for="(tag, i) in itemData.tagList"
                        :key="`tag${i}`"
                    >
                        {{ tag }}
                    </span>
                </div>
                <div
                    class="review_info_box"
                    v-if="itemData.likeCount > 0 || itemData.reviewScore != 0"
                >
                    <div class="review_info" v-if="itemData.likeCount > 0">
                        <i class="icon_zzim"></i>
                        <span class="number">{{ itemData.likeCount }}</span>
                    </div>
                    <div class="review_info" v-if="itemData.reviewScore != 0">
                        <i class="icon_star"></i>
                        <span class="number">{{ itemData.reviewScore }}</span>
                    </div>
                </div>
            </div>
        </a>
        <div class="option_box">
            <button
                type="button"
                class="option_btn"
                :class="{ isopen: isOptionShow }"
                @click.prevent="clickOption(index)"
            >
                OPTION
            </button>
            <div class="option_list_box" v-if="isOptionShow">
                <template v-if="itemData.options.length > 0">
                    <div class="option_head">구매 가능한 옵션</div>
                    <ul
                        class="option_list"
                        :class="{ scroll_option: itemData.options.length > 10 }"
                    >
                        <li
                            class="option"
                            v-for="(option, i) in itemData.options"
                            :key="`option${i}`"
                        >
                            {{ option }}
                        </li>
                    </ul>
                </template>
                <div class="single_option" v-else>단일 옵션 상품입니다.</div>
            </div>
        </div>
    </article>
</template>

<script>
    import Swiper from 'swiper'
    import ZzimButton from '@/components/ZzimButton.vue'

    export default {
        components: { ZzimButton },
        props: {
            itemData: { type: Object },
            className: { type: String },
            // swipeAni: { type: Boolean, default: false },
            index: { type: Number },
            isOptionShow: { type: Boolean, default: false }
        },
        data() {
            return {
                thumbnailSwiper: null,
                bulletStyle: { 'transform': 'translateX(5px)' },
                limitIndex: 6,
                isAniActive: false
            }
        },
        methods: {
            clickOption: function (index) {
                this.$emit('clickOption', index)
            },
            // swiper
            //움직임 관련
            move: function (current, total) {
                console.log(total)
                if (current > 4) {
                    let num = current - 5
                    let pos = num * 10
                    if (current == total - 1) {
                        pos = num * 10 - 5
                    }
                    this.bulletStyle = { transform: `translateX(${-1 * pos}px)` }
                } else {
                    this.bulletStyle = { transform: `translateX(5px)` }
                }
            },
            make: function (index, className, total, current) {
                // index === current -1 일 경우 활성화임
                let classes = className
                const smallClass = ' small'
                const hideClass = ' hide_bullet'
                if (total > 5) {
                    if (current === 1) {
                        classes =
                            index === 5
                                ? className + smallClass
                                : index > 5
                                ? className + hideClass
                                : className
                    } else if (current === total) {
                        classes =
                            index === current - 6
                                ? className + smallClass
                                : index < current - 6
                                ? className + hideClass
                                : className
                    } else if (current >= this.limitIndex) {
                        // 오른쪽 5번째보다 큰경우
                        if (index == current) {
                            classes = className + smallClass
                        } else if (index > current) {
                            classes = className + hideClass
                        }
                        // 왼쪽
                        if (index == current - 6 && current >= 6) {
                            classes = className + smallClass
                        } else if (index < current - 6) {
                            classes = className + hideClass
                        }
                    } else {
                        // init setting
                        if (index == 5) {
                            classes = className + smallClass
                        } else if (index > 5) {
                            classes = className + hideClass
                        }
                    }
                }

                const div = `<span class="${classes}"></span>`
                if (total > 1) {
                    return div
                } else {
                    return ''
                }
            }
        },
        mounted() {
            this.thumbnailSwiper = new Swiper(this.$refs.thumbnailSwiper, {
                followFinger: false,
                watchOverflow: true,
                loop: this.itemData.imageUrl.length > 1 ? true : false,
                resizeObserver: true,
                observer: true,
                observeParents: true,
                pagination: {
                    el: this.$refs.bulletsWrap,
                    type: 'custom',
                    renderCustom: (swiper, current, total) => {
                        let paging = ''
                        for (let index = 0; index < total; index++) {
                            let classes =
                                index === current - 1
                                    ? 'swiper-pagination-bullet swiper-pagination-bullet-active'
                                    : 'swiper-pagination-bullet'
                            paging =
                                paging + ' ' + this.make(index, classes, total, current)
                        }
                        return paging
                    }
                },
                on: {
                    init: () => {
                        this.isAniActive = this.swipeAni
                    }
                }
            })
            this.thumbnailSwiper.on('slideChange', () => {
                if (this.itemData.imageUrl.length > 6) {
                    this.move(
                        this.thumbnailSwiper.realIndex,
                        this.itemData.imageUrl.length
                    )
                }
            })
            this.thumbnailSwiper.on('setTransition', function (speed) {
                const _ = this
                if (_.pagination.el) {
                    _.pagination.el.style.transition = speed + 'ms'
                    Array.from(_.pagination.el.children).forEach(function (el) {
                        el.style.transition = speed + 'ms'
                    })
                }
            })
        }
    }
</script>
