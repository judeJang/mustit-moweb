<template>
    <section class="wrapper">
        <button type="button" @click="welcomeOpen()">웰컴 모달 보기</button>
    </section>
</template>

<script>
    import Vue from 'vue'
    export default {
        data() {
            return {
                path: '',
                modalType: ''
            }
        },
        methods: {
            open(name) {
                console.log(this.$store.modules)
                this.path = this.executeModalChoice(name).path
                this.modalType = this.executeModalChoice(name).modalType
                Vue.FullModal.open(this.path, this.modalType)
            },
            welcomeOpen: function () {
                Vue.Alert.open('views/layer/DormantMemberWelcome')
            }
        },
        mounted() {
            this.welcomeOpen()
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        padding: 40px 20px;
    }
    button {
        display: inline-flex;
        align-items: center;
        padding: 0 16px;
        height: 30px;
        border: 1px solid $gray3;
        background: $white;
        border-radius: 5px;
    }
</style>
