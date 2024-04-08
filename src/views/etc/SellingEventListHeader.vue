<template>
    <article class="event_items_header self_module">
        <p class="length">전체 {{ length }}개</p>
        <a href="#" class="winner_announcement" v-if="isEvent()">당첨자 발표</a>
    </article>
</template>

<script>
    export default {
        name: 'EventsListHeader',
        props: {
            length: { type: Number, require: true }
        },
        data() {
            return {
                type: 'sellingEvent'
            }
        },
        beforeMount() {
            if (this.$route.path === '/etc/event') this.type = 'event'
        },
        methods: {
            isEvent() {
                return this.$route.path === '/etc/event'
            }
        }
    }
</script>
