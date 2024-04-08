<template>
    <article class="review_slider box_border_top">
        <div class="title">
            <strong class="color_red">#Maison Kitsune</strong> 의 <br />
            <strong class="color_red">#자켓</strong> 리뷰를 모아 봤어요!
        </div>
        <!-- [D] swiper UI :: backup-->
        <div class="slider_box" style="display: none">
            <div class="inner_box">
                <div class="item_box">
                    <span href="#">
                        <span
                            class="img_box"
                            style="
                                background: url('https://cdn.mustit.co.kr/dev_server/review/2022/03/21/13522359_0_20220321145838_6225.jpeg/_dims_/resize/^500/cropcenter/500x500')
                                    center center no-repeat;
                            "
                        ></span>
                        <span class="txt_box">
                            해외 배송 5일 만에 오고 실물 예뻐요 미쳤…
                        </span>
                        <span class="id_box">93***</span>
                    </span>
                </div>
                <div class="item_box">
                    <a href="#">
                        <span
                            class="img_box"
                            style="
                                background: url('https://cdn.mustit.co.kr/dev_server/review/2022/03/21/13522359_0_20220321145838_6225.jpeg/_dims_/resize/^500/cropcenter/500x500')
                                    center center no-repeat;
                            "
                        ></span>
                        <span class="txt_box">
                            해외 배송 5일 만에 오고 실물 예뻐요 미쳤…
                        </span>
                        <span class="id_box">93***</span>
                    </a>
                </div>
                <div class="item_box">
                    <a href="#">
                        <span
                            class="img_box"
                            style="
                                background: url('https://cdn.mustit.co.kr/dev_server/review/2022/03/21/13522359_0_20220321145838_6225.jpeg/_dims_/resize/^500/cropcenter/500x500')
                                    center center no-repeat;
                                background-size: cover;
                            "
                        ></span>
                        <span class="txt_box"
                            >해외 배송 5일 만에 오고 실물 예뻐요 미쳤…</span
                        >
                        <span class="id_box">93***</span>
                    </a>
                </div>
                <div class="item_box">
                    <a href="#" class="btn_list_go">
                        <span class="txt">전체보기</span>
                    </a>
                </div>
            </div>
        </div>
        <!-- [D] List UI :: 개선-->
        <div class="list_box">
            <a href="#" v-for="j in 3" :key="j">
                <div
                    class="img_box"
                    style="
                        background: url('https://cdn.mustit.co.kr/dev_server/review/2022/03/21/13522359_0_20220321145838_6225.jpeg/_dims_/resize/^500/cropcenter/500x500')
                            center center no-repeat;
                    "
                ></div>
                <p class="txt_box">
                    <template v-if="j == 0 || j == 1"> 너무 이뻐요ㅜ 딱 생각한 </template>
                    <template v-else>
                        게다가 판매자분이 넘 너무 이뻐요ㅜ 딱 생각한 그대로!! 게다가
                        판매자분이 넘
                    </template>
                </p>
                <p class="size_box" v-if="j == 1 || j == 2">168cm / 48kg</p>
                <p class="id_box">93***</p>
            </a>
        </div>
        <a href="#" class="more_btn">스타일 리뷰 전체보기</a>
    </article>
</template>

<script>
    export default {}
</script>

<style></style>
