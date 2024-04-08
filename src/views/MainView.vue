<template>
    <section class="flex_content">
        <div class="logo">
            <img src="@/assets/MUST'IT_BI_2020_std.png" alt="머스트잇" />
            <p>PROTOTYPING</p>
        </div>
        <template v-for="(data, index) in list">
            <router-link
                :key="data.title"
                :to="data.link"
                class="block"
                :class="data.new ? 'new' : ''"
            >
                <p class="path">{{ data.path | toUppercase }}</p>
                <p class="name">{{ data.title }}</p>
            </router-link>
            <div :key="index" class="divider" v-if="showDivider(index)"></div>
        </template>
        <p class="total">합계 : {{ list.length }}</p>
    </section>
</template>

<script>
    import { list as listData } from '@/router/routerData'
    export default {
        data() {
            return {
                list: [...listData]
            }
        },
        created() {
            this.sortListfunc()
        },
        methods: {
            sortListfunc() {
                this.list.sort((a, b) => {
                    let x = a.path.toLowerCase()
                    let y = b.path.toLowerCase()
                    if (x < y) {
                        return -1
                    }
                    if (x > y) {
                        return 1
                    }
                    return 0
                })
                //console.log(JSON.stringify(this.list, null, 2))
            },
            showDivider(num) {
                if (num + 1 < this.list.length) {
                    if (this.list[num].path != this.list[num + 1].path) {
                        return true
                    } else {
                        return false
                    }
                }
                return true
            }
        },
        filters: {
            'toUppercase'(value) {
                return value.toUpperCase()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .flex_content {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        min-height: 100vh;
        padding: 60px 12px;
        background: #fafcfd;
        .logo {
            width: 100%;
            padding: 0 16px;
            margin-bottom: 60px;
            text-align: center;
            img {
                width: 100%;
                margin-bottom: 16px;
                max-width: calc(370px / 2);
            }
        }
        .divider {
            position: relative;
            width: 100%;
            height: 1px;
            margin: 16px 0;
            background: $grayd;
            &::after {
                content: '';
                position: absolute;
                bottom: -1px;
                left: 0;
                width: 100%;
                height: 1px;
                background: $white;
            }
        }
    }
    .block {
        position: relative;
        display: inline-flex;
        justify-content: center;
        flex-direction: column;
        min-width: 100px;
        margin: 5px;
        border-radius: 6px;
        padding: 20px;
        box-shadow: -1px 7px 17px 3px rgba($black, 0.1);
        background: $white;
        transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
        @media screen and (max-width: 600px) {
            flex: 1;
        }
        &:hover {
            transform-origin: center;
            transform: scale3d(1.05, 1.05, 1);
            box-shadow: -1px 7px 17px 3px rgba($black, 0.15);
            z-index: 100;
        }
        &.new {
            &::before {
                content: 'N';
                position: absolute;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                left: -5px;
                top: -5px;
                border-radius: 100%;
                width: 20px;
                height: 20px;
                font-size: 10px;
                color: $white;
                font-weight: $fw-bold;
                background: $primary;
            }
            border: 1px solid $primary;
            background: lighten($primary, 40);
            .name {
                color: $color-ffa;
            }
            border-color: $primary;
        }
        .path {
            font-size: 16px;
            font-weight: $fw-bold;
            color: $color-48a;
        }
        .name {
            margin-top: 16px;
            font-size: 12px;
            color: $color-1f1;
            font-weight: $fw-semibold;
        }
    }
</style>
