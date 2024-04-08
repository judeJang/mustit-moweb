<template>
    <section class="public_content">
        <SubTopHeader :isDropState="false" :data="menuData" :count="9" />
        <ListHeader :length="eventData.length" />
        <List :listObj="eventData" />
    </section>
</template>
<script>
    import SubTopHeader from '@/components/SubTopHeader.vue'
    import List from '@/views/etc/SellingEventList.vue'
    import ListHeader from '@/views/etc/SellingEventListHeader.vue'

    import { eventsData } from '@/assets/js/dummy/SearchTermData'

    export default {
        components: {
            SubTopHeader,
            List,
            ListHeader
        },
        data() {
            return {
                menuData: [{ name: '진행중인 기획전' }],
                eventData: []
            }
        },
        beforeMount() {
            let eventName = 'selling_event'
            if (this.$route.path === '/etc/event') {
                eventName = 'event'
                this.menuData[0].name = '진행중인 이벤트'
            }

            let tempArr = []
            tempArr = eventsData
                .filter((event) => event.name === eventName)
                .map((event) => event.operationEvent)
            this.eventData = tempArr.flat()
        }
    }
</script>
