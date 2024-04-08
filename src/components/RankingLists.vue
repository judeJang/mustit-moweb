<script>
    export default {
        props: {
            listIndex: { type: Number, default: 1 },
            amount: { type: Number, default: 5 }
        }
    }
</script>
<template>
    <ol class="comp_ranking__lists">
        <li class="comp_ranking__list" v-for="index in amount" :key="index">
            <a href="#" class="ranking_link__link">
                <div class="brand_container">
                    <div class="rank">{{ index + (listIndex - 1) * 5 }}</div>
                    <div class="rank_img">
                        <img
                            src="https://cdn.mustit.co.kr/lib/upload/home/special_display_plan/2022/01/77f9f13145db57a278c382b5efa691d4.jpeg"
                            alt="product"
                            class="cover_img"
                        />
                    </div>
                    <div class="rank_name">
                        <p class="eng">
                            Commed des GarconsCommed des GarconsCommed des Garcons
                        </p>
                        <p class="kor">꼼데가르송</p>
                    </div>
                </div>
                <div
                    class="change_container"
                    :class="[
                        { down: index == 2 },
                        { new: index == 3 },
                        { same: index == 4 },
                        { same: index == 5 },
                        { up: index > 5 || index == 1 }
                    ]"
                    :data-change="index"
                ></div>
            </a>
        </li>
    </ol>
</template>
<style lang="sass"></style>
