<script>
    export default {
        data: function () {
            return {
                shortCut: [
                    ['direct_icon1.png', '핫딜'],
                    ['direct_icon2.png', '기획전'],
                    ['direct_icon3.png', '랭킹'],
                    ['direct_icon4.png', '브랜드'],
                    ['direct_icon5.png', '부티크'],
                    ['direct_icon6.png', '설날 선물'],
                    ['direct_icon7.png', 'MD PICK!'],
                    ['direct_icon8.png', '매거진'],
                    ['direct_icon9.png', '리뷰'],
                    ['direct_icon10.png', '이벤트']
                ]
            }
        }
    }
</script>
<template>
    <article class="category_direct">
        <ul class="category_direct__lists">
            <li
                class="category_direct__list"
                :class="{ new: path[1] == '설날 선물' }"
                v-for="path in shortCut"
                :key="path[0]"
            >
                <a href="#" class="category_direct__link">
                    <img
                        :src="require(`@/assets/img/${path[0]}`)"
                        class="category_direct__img"
                        alt=""
                    />
                    <p class="category_direct__text">{{ path[1] }}</p>
                </a>
            </li>
        </ul>
    </article>
</template>
