<template>
    <section class="layer_all_black public_content">
        <header>
            <button type="button" class="layer_close" @click="modalClose()"></button>
        </header>
        <div class="layer_container">
            <div class="layer_video_wrap">
                <video
                    class="main_video"
                    playsinline
                    controls
                    controlsList="nodownload"
                    :poster="poster"
                >
                    <source :src="videoUrl" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </section>
</template>

<script>
    import EventBus from '@/assets/js/EventBus'
    export default {
        props: {
            videoUrl: String,
            poster: String
        },
        methods: {
            modalClose() {
                EventBus.$emit('videoModalClose')
            }
        }
    }
</script>
