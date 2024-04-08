<template>
    <article class="hotdeal_upnext self_module">
        <div class="upnext_title_box">
            <p class="title_primary">COMING SOON</p>
            <p class="title">두구두구~ 오픈런 준비!</p>
        </div>
        <div class="upnext_swiper" :ref="id">
            <div class="swiper-wrapper">
                <div
                    class="swiper-slide upnext_slide"
                    v-for="(items, index) in productList"
                    :key="index"
                >
                    <div
                        class="item_box"
                        v-for="(item, i) in items"
                        :key="`${index}_${i}`"
                    >
                        <div class="img_wrap">
                            <img
                                :src="item.imgPath"
                                alt="상품 이미지"
                                class="cover_img"
                            />
                            <div class="upnext_date">
                                <p class="date">04.10(월)</p>
                                <p class="time">11:00</p>
                            </div>
                        </div>
                        <div class="info_container">
                            <div class="product_info">
                                <p class="brand">{{ item.brand }}</p>
                                <p class="name">{{ item.productName }}</p>
                                <p class="price">
                                    {{ item.discountPrice }}
                                    <span class="discount" v-if="item.discount > 0">
                                        {{ item.discount }}%
                                    </span>
                                </p>
                                <del v-if="item.discount > 0">
                                    {{ item.delPrice }}
                                </del>
                            </div>
                            <div class="upnext_info">
                                <p class="wait">2,346명이 기다려요</p>
                                <button type="button" class="btn_alarm">알림받기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 상품이 2개 이하인 경우 pagination 노출 x  -->
            <div
                class="upnext_pagination"
                :ref="`${id}Pagination`"
                v-if="productList.length > 1"
            ></div>
        </div>
    </article>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        data() {
            return {
                swiper: null,
                productList: []
            }
        },
        props: {
            list: { type: Array },
            id: { type: String }
        },
        beforeMount() {
            // 상품 리스트 data 가공
            const size = 2
            for (let i = 0; i < this.list.length; i += size) {
                this.productList = [...this.productList, this.list.slice(i, i + size)]
                // [[{}, {}], [{}, {}]]
            }
            // onepage testcode
            // this.productList = [[this.list[0], this.list[1]]]
        },
        mounted() {
            this.swiper = new Swiper(this.$refs[this.id], {
                speed: 500,
                pagination: {
                    el: this.$refs[`${this.id}Pagination`]
                },
                observer: true,
                followFinger: false
            })
        }
    }
</script>
