<template>
    <div>
        <section class="minishop_content public_content">
            <article class="product_list_box">
                <PageTitle><h2>인기브랜드</h2></PageTitle>
                <div class="list">
                    <LpList
                        v-for="index in 12"
                        :key="index"
                        :className="index % 2 == 0 ? 'even' : 'odd'"
                    />
                </div>
            </article>
        </section>
    </div>
</template>
<script>
    import LpList from '@/components/LpList.vue'
    import PageTitle from '@/components/PageTitle.vue'
    export default {
        components: {
            LpList,
            PageTitle
        }
    }
</script>
<style scoped></style>
