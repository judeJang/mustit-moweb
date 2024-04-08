<template>
    <!-- 2309 금번에 배포 안되기에 UI만 남겨놓음 -->
    <article class="list_category_container">
        <div class="big_category_box">
            <div class="category_select_box">
                <CustomSelect :options="category" :default="category[0]" />
            </div>
            <div class="sub_category">
                <ul class="list">
                    <li
                        class="category"
                        :class="{ active: category.isActive }"
                        v-for="(category, i) in subCategory"
                        :key="i"
                        @click="clickCategory(subCategory, category)"
                    >
                        {{ category.name }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="small_category_box">
            <ul class="list">
                <li
                    class="category"
                    :class="{ active: category.isActive }"
                    v-for="(category, i) in smallCategory"
                    :key="i"
                    @click="clickCategory(smallCategory, category)"
                >
                    {{ category.name }}
                </li>
            </ul>
        </div>
    </article>
</template>

<script>
    import CustomSelect from '@/components/CustomSelect.vue'
    export default {
        components: { CustomSelect },
        data() {
            return {
                category: [
                    '여성의류',
                    '여성슈즈',
                    '여성가방',
                    '여성ACC',
                    '남성의류',
                    '남성슈즈',
                    '남성가방',
                    '남성ACC'
                ],
                tabindex: 0,
                subCategory: [
                    {
                        name: '전체',
                        isActive: true
                    },
                    {
                        name: '탑',
                        isActive: false
                    },
                    {
                        name: '블라우스/셔츠',
                        isActive: false
                    },
                    {
                        name: '니트',
                        isActive: false
                    },
                    {
                        name: '팬츠',
                        isActive: false
                    },
                    {
                        name: '코트/자켓',
                        isActive: false
                    }
                ],
                smallCategory: [
                    {
                        name: '전체',
                        isActive: true
                    },
                    {
                        name: '스웨트셔츠',
                        isActive: false
                    },
                    {
                        name: '후드 티셔츠',
                        isActive: false
                    },
                    {
                        name: '티셔츠',
                        isActive: false
                    },
                    {
                        name: '폴로 셔츠',
                        isActive: false
                    },
                    {
                        name: '뷔스티에',
                        isActive: false
                    }
                ]
            }
        },
        methods: {
            clickCategory: function (categories, category) {
                categories.forEach((element) => {
                    element.isActive = false
                })
                category.isActive = true
            }
        }
    }
</script>
