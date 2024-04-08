<template>
    <article class="layer_sort">
        <div class="layer_head">
            <p class="title">정렬</p>
            <button type="button" class="layer_close" @click="closeLayer"></button>
        </div>
        <div class="layer_body">
            <ul class="sort_list">
                <li v-for="(sort, i) in sortList" :key="i" class="sort_box">
                    <input
                        type="radio"
                        name="sort"
                        :id="`sort${i}`"
                        :checked="sort.isChecked"
                    />
                    <label
                        :for="`sort${i}`"
                        class="sort_label"
                        @click="clickSort(sort.name, i)"
                    >
                        <span class="text">{{ sort.name }}</span>
                        <span class="radio"></span>
                    </label>
                </li>
            </ul>
        </div>
    </article>
</template>

<script>
    import EventBus from '@/assets/js/EventBus'
    export default {
        props: {
            sortList: { type: Array }
        },
        methods: {
            closeLayer() {
                EventBus.$emit('sortClose')
            },
            clickSort(name, id) {
                EventBus.$emit('sortName', name, id)
                EventBus.$emit('sortClose')
            }
        }
    }
</script>
