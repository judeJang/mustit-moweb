<template>
    <section class="layer_all">
        <header>
            <button type="button" class="layer_close" @click="modalClose()"></button>
            <h1>이벤트/기획전 전체보기</h1>
        </header>
        <div class="layer_container">
            <article class="list_container">
                <a :href="list.link" v-for="(list, i) in eventData()" :key="i">
                    <img :src="list.img" alt="" />
                    <p class="period">{{ list.date }}</p>
                </a>
            </article>
        </div>
    </section>
</template>
<script>
    import EventBus from '@/assets/js/EventBus'
    export default {
        name: 'EventList',
        components: {},
        data() {
            return {
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
        methods: {
            modalClose() {
                EventBus.$emit('allModalClose')
            }
        }
    }
</script>
<style scoped></style>
