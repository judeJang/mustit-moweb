<template>
    <!-- 2309 금번에 배포 안되기에 UI만 남겨놓음 -->
    <article class="category_recommand self_module">
        <h4 class="keyword_title">추천</h4>
        <ul class="keyword_list">
            <li
                class="keyword"
                :class="{ active: category.isActive }"
                v-for="category in categories"
                :key="category.name"
            >
                {{ category.name }}
            </li>
        </ul>
    </article>
</template>

<script>
    export default {
        data() {
            return {
                categories: [
                    { name: '싱글', isActive: false },
                    { name: '더블', isActive: true },
                    { name: '밀리터리자켓', isActive: false },
                    { name: '후드자켓', isActive: false },
                    { name: '후드집업', isActive: false },
                    { name: '코치자켓', isActive: false }
                ]
            }
        }
    }
</script>
