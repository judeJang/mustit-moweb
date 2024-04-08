<template>
    <div
        class="care_floating_bnr"
        :class="{
            'scroll_down': mixinScrollUpDownState == 'down',
            'is_top': mixinSt > 200
        }"
    >
        <router-link to="/board/introduce_our_policies">
            <img
                :src="`${$S3}m_board/introduce_our_policies/floating-policy.png`"
                alt="정책영상 보러가기"
            />
        </router-link>
    </div>
</template>

<script>
    import scrollEvent from '@/mixin/scrollEvent'
    export default {
        mixins: [scrollEvent]
    }
</script>
