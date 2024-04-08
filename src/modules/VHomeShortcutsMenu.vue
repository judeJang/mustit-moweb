<template>
    <article class="shortcuts_menus self_module">
        <a
            v-for="(menu, index) in data"
            :key="index"
            :href="menu.link"
            class="menu"
            :class="{ 'is_new': menu.new }"
        >
            <img :src="menu.img" alt="" />
            <p>{{ menu.name }}</p>
        </a>
    </article>
</template>
<script>
    import { shortcuts } from '@/assets/js/dummy/CateMenusData'
    export default {
        name: 'ShortcutsMenu',
        data() {
            return {
                data: [...shortcuts]
            }
        }
    }
</script>
