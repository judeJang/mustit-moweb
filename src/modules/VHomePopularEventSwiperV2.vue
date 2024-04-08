<template>
    <article class="popular_event_version2">
        <a href="#" class="event">
            <img src="@/assets/img/750x1000.jpg" alt="기획전 배너" />
            <div class="text_box">
                <p class="title">WARM ACCESSORIES</p>
                <p class="sub_title">
                    매서운 겨울, 꼭 필요한 방한 아이템 UP TO 60% + 3% 쿠폰매서운 겨울, 꼭
                    필요한 방한 아이템 UP TO 60% + 3% 쿠폰매서운 겨울, 꼭 필요한 방한
                    아이템 UP TO 60% + 3% 쿠폰
                </p>
                <p class="sub_title">
                    UP TO 60% + 3% 쿠폰UP TO 60% + 3% 쿠폰UP TO 60% + 3% 쿠폰UP TO 60% +
                    3% 쿠폰
                </p>
            </div>
        </a>
        <FreeSwiper :discountShow="true" />
    </article>
</template>
<script>
    import FreeSwiper from '@/modules/VFreeSwiper.vue'
    export default {
        name: 'PopularEventVersion2',
        components: { FreeSwiper }
    }
</script>
