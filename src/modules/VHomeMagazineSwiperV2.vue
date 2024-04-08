<template>
    <article class="magazine_product_version2">
        <div class="magazin_swiper">
            <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="item in 10" :key="item">
                    <a href="#">
                        <div class="img_wrap">
                            <img
                                src="https://image.mustit.co.kr/lib/upload/home/story/85b9f188ea3e0ebebf2c4a496ccb621e.jpg/_dims_/quality/80/format/webp/autorotate/on"
                                alt=""
                            />
                        </div>
                        <div class="info_container">
                            <p class="hash">#스토리</p>
                            <p class="title">
                                연말이 지나도 입을 수 있는 홀리데이 패션 아이템 5
                            </p>
                            <p class="desc">
                                슬링백 슈즈는 ‘연말’ 그 자체의 아이템이다. 어딘지 좀
                                섹시하고, 확실하게 근사하며, 보는 것만으로도 기분을 들뜨게
                                만드는 슈즈. 심플한 기본 슬링백도 충분히 아름답고, 한해의
                                마지막이니만큼 크리스털 장식 같은 홀리데이 느낌을 가미한
                                디자인을 골라도 좋다.
                            </p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="swiper-pagination" ref="magazinePaging"></div>
    </article>
</template>
<script>
    import Swiper from 'swiper'
    export default {
        name: 'Magazine',
        mounted() {
            new Swiper('.magazin_swiper', {
                resizeObserver: true,
                slidesPerView: 'auto',
                followFinger: false,
                observer: true,
                observeParents: true,
                pagination: {
                    el: this.$refs.magazinePaging,
                    clickable: true
                }
            })
        }
    }
</script>
