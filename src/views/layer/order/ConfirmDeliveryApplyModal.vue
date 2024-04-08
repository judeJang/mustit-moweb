<template>
    <VConfirmModal
        mainText="등록된 기본 배송지가 없습니다."
        subText="이 배송지를 기본 배송지로 등록 하시겠습니까?"
        nagativBtn="아니오"
        positiveBtn="네"
    />
</template>

<script>
    import VConfirmModal from '@/views/layer/VConfirmModal'
    export default {
        components: { VConfirmModal }
    }
</script>
