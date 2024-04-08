<template>
    <!-- TitleArea -->
    <div class="title_module self_module" v-if="title || subTitle">
        <p class="sub_title" v-if="subTitle">{{ subTitle }}</p>
        <h4 class="title" v-if="title">{{ title }}</h4>
    </div>
    <div v-else :style="dividerStyle"></div>
</template>

<script>
    export default {
        name: 'VTitleArea',
        props: {
            title: { type: String, default: '' },
            subTitle: { type: String, default: '' }
        },
        data() {
            return {
                dividerStyle: { background: '#fff', height: '32px' }
            }
        }
    }
</script>
