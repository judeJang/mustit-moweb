<template>
    <article class="list_filter self_module" :class="{ has_search: outletSearch }">
        <div class="btn_container">
            <div class="btn_list">
                <button
                    type="button"
                    v-for="(filter, index) in filters"
                    :key="index"
                    @click="filter.isActive = !filter.isActive"
                    :class="[
                        filter.isActive ? 'active' : '',
                        filter.freeReturn ? 'free_return' : ''
                    ]"
                >
                    {{ filter.name }}
                </button>
            </div>
            <div class="filter_btn_box">
                <button
                    type="button"
                    class="btn_filter"
                    :class="{ active: count > 0 }"
                    @click="count === 0 ? (count = 2) : (count = 0)"
                >
                    <span v-if="count > 0">{{ count }}</span>
                </button>
            </div>
        </div>
        <div class="keyword_container">
            <div class="select_keyword">
                <button type="button" v-for="word in keywords" :key="word">
                    {{ word }}
                </button>
            </div>
            <button type="button" class="reset"></button>
        </div>
    </article>
</template>
<script>
    export default {
        props: {
            outletSearch: { type: Boolean, default: false }
        },
        data() {
            return {
                filters: [
                    {
                        name: '무료교환반품',
                        isActive: false,
                        freeReturn: true
                    },
                    {
                        name: '상품유형',
                        isActive: false
                    },
                    {
                        name: '브랜드',
                        isActive: true
                    },
                    {
                        name: '색상',
                        isActive: true
                    },
                    {
                        name: '가격대',
                        isActive: false
                    },
                    {
                        name: '배송/혜택',
                        isActive: false
                    }
                ],
                keywords: [
                    '무료교환반품',
                    'WOMEN',
                    'AIR JORDAN',
                    'NIKE',
                    'MEN',
                    'CHILDEN',
                    'GUCCI'
                ],
                count: 10
            }
        }
    }
</script>
