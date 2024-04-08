<template>
    <article class="best_review_version2">
        <div class="best_review_swiper">
            <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="item in 5" :key="item">
                    <a href="#">
                        <div class="review_img">
                            <img
                                src="https://image.mustit.co.kr/review/2023/01/01/edit/5ee0488c6d8db341475aa1ed954471fa.jpeg/_dims_/resize/^500"
                                alt="review"
                                class="review_img"
                            />
                        </div>
                        <!-- 별점 class .star1 ~ 5 -->
                        <div class="comp_star_rating" :class="`star${item}`">
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                        </div>
                        <div class="review_text">
                            배송 빠르고 깔끔하게 잘 도착했어요. 반팔이지만 얇지 않아
                            여름에는 못 입어요. 여유있는 사이즈라 무진장 편합니다.
                            프린팅이 예뻐서 주문했는데 맘에 들어요. 배송 빠르고 깔끔하게
                            잘 도착했어요. 반팔이지만 얇지 않아 여름에는 못 입어요.
                            여유있는 사이즈라 무진장 편합니다. 프린팅이 예뻐서 주문했는데
                            맘에 들어요.
                        </div>
                    </a>
                    <a href="#">
                        <div class="item_container">
                            <p class="brand">Saint Laurent</p>
                            <p class="name">
                                23SS 생로랑 케이트 스몰 숄더백 4종 469390BOW0J1000
                            </p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </article>
</template>
<script>
    import Swiper from 'swiper'
    export default {
        name: 'BestReview',
        mounted() {
            new Swiper('.best_review_swiper', {
                resizeObserver: true,
                slidesPerView: 'auto',
                freeMode: true
            })
        }
    }
</script>
