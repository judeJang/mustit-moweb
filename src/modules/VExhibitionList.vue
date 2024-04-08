<template>
    <article class="comp_exhibition_list">
        <a :href="item.link" class="list" v-for="(item, index) in data" :key="index">
            <div class="img_wrap">
                <img src="https://dummyimage.com/180x80/000/fff" :alt="item.name" />
            </div>
            <div class="info">
                <p class="name">{{ item.name }}</p>
                <p class="desc">{{ item.desc }}</p>
            </div>
        </a>
    </article>
</template>
<script>
    export default {
        name: 'EXHIBITION_LIST',
        props: {
            data: { type: Array, required: true }
        }
    }
</script>
