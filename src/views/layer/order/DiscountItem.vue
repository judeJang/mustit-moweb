<template>
    <div class="item_box">
        <a href="#">
            <div class="thum">
                <img :src="imgPath" alt="" />
            </div>
            <div class="item_info">
                <p class="name">Maison Kitsune</p>
                <p class="desc">21FW 메종키츠네 올라이트 폭스 패치 다크 그레이</p>
                <div class="option">
                    <span>헌터네이비</span>
                    <span>M(성인여성마른44추천)</span>
                    <span>M(성인여성마른44추천)</span>
                </div>
            </div>
        </a>
    </div>
</template>
<script>
    export default {
        name: 'DiscountItem',
        data() {
            return {
                imgPath:
                    'https://cdn.mustit.co.kr/lib/upload/product/s-project/2021/10/1635388017-20.jpeg/_dims_/resize/250x250/extent/250x250'
            }
        }
    }
</script>
