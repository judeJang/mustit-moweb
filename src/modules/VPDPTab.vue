<template>
    <article class="PDP_tab">
        <button type="button" v-for="(menu, index) in buttonMenu" :key="index">
            {{ menu.name }} <span v-if="menu.count">{{ menu.count }}</span>
        </button>
    </article>
</template>

<script>
    export default {
        name: 'PDP_REVIEW',
        data() {
            return {
                buttonMenu: [
                    {
                        name: '상세정보'
                    },
                    {
                        name: '리뷰',
                        count: '2,345'
                    },
                    {
                        name: '문의',
                        count: '2,345'
                    }
                ]
            }
        }
    }
</script>
