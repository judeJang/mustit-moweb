<template>
    <section class="public_content member_mall_content">
        <SubHeader title="VIP 전용관" />
        <!-- <SubTopHeader :isDropState="false" :data="menuData" :count="9" /> -->
        <article class="member_mall_banner">
            <div class="top_banner">
                <img :src="`${path}/top_banner.png`" alt="" />
            </div>
        </article>
        <article class="member_mall_container">
            <div class="soldout_check_box">
                <label class="soldout_check_btn">
                    <input type="checkbox" />
                    <span class="soldout_check_txt">품절상품 제외</span>
                </label>
            </div>
            <div class="member_mall_list">
                <MemberItem v-for="index in 12" :key="index" :index="index" />
            </div>
        </article>
    </section>
</template>

<script>
    import scrollMixin from '@/mixin/scrollEvent'
    // import SubTopHeader from '@/components/SubTopHeader.vue'
    import SubHeader from '@/components/SubHeader.vue'
    import MemberItem from '@/components/MemberItem.vue'
    export default {
        components: {
            // SubTopHeader,
            MemberItem,
            SubHeader
        },
        mixins: [scrollMixin],
        data: function () {
            return {
                menuData: [{ name: 'VIP 전용관' }],
                path: this.$S3 + 'm_membermall'
            }
        }
    }
</script>

<style scoped></style>
