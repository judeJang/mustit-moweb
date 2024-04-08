<template>
    <section class="public_content lp_content">
        <SubHeader
            :type="3"
            title="스타일을 더해주는스타일을 더해주는스타일을 더해주는"
        />
        <ListSortHeader :showOnlyLength="true" />
        <article class="product_list_box">
            <div class="list">
                <LpList
                    v-for="index in 15"
                    :key="index"
                    :className="index % 2 == 0 ? 'even' : 'odd'"
                    :zzimShow="true"
                />
            </div>
        </article>
    </section>
</template>
<script>
    import SubHeader from '@/components/SubHeader.vue'
    import LpList from '@/components/LpList.vue'
    import ListSortHeader from '@/views/product/VSearchSort.vue'
    export default {
        components: { SubHeader, LpList, ListSortHeader },
        data() {
            return {
                menuObj: [{ name: '스타일을 더해주는 BAG & SHOES' }],
                premiumPopup: false
            }
        }
    }
</script>
<style lang="scss" scoped>
    .test_search {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        margin-left: -16px;
        width: calc(100% + 32px);
        height: 142px;
        background-color: $gray2;
        &::before {
            content: 'search 영역';
            font-size: 14px;
            color: $white;
        }
    }
</style>
