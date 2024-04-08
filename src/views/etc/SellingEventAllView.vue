<template>
    <section class="public_content">
        <SubHeader title="진행 중인 기획전" />
        <SubTopHeader :isDropState="false" :data="menuData" :count="9" />
        <article class="list_container">
            <a :href="list.link" v-for="(list, i) in eventData()" :key="i">
                <img :src="list.img" alt="" />
                <p class="period">{{ list.date }}</p>
            </a>
        </article>
    </section>
</template>
<style lang="scss"></style>
<script>
    import scrollEvent from '@/mixin/scrollEvent'
    import SubHeader from '@/components/SubHeader.vue'
    // import SubTopHeader from '@/components/SubTopHeader.vue'
    export default {
        components: {
            // SubTopHeader
            SubHeader
        },
        mixins: [scrollEvent],
        data() {
            return {
                menuData: [{ name: '기획전' }],
                eventData: function () {
                    let eventData = []
                    for (var i = 0; i < 20; i++) {
                        eventData.push({
                            img: 'https://cdn.mustit.co.kr/lib/upload/admin/exhibition/3887997107eaba116ed0477762ae2f04.jpeg',
                            date: '2022.07.14 ~ 07.20',
                            link: '#'
                        })
                    }
                    return eventData
                }
            }
        },
        mounted() {}
    }
</script>
