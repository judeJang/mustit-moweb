<template>
    <section class="public_content icons_content">
        <div class="inner_container">
            <h1 class="icons_title">아이콘 리스트</h1>
            <!-- nav -->
            <div class="icons_nav" :class="{ open: navOpen }" ref="iconsNav">
                <div class="icons_nav_container">
                    <button
                        type="button"
                        v-for="(icons, i) in list"
                        :key="i"
                        @click="scrollCategory(`container${i}`)"
                    >
                        {{ icons.category }}
                    </button>
                </div>
                <button
                    type="button"
                    @click="navOpen = !navOpen"
                    class="open_btn"
                    :class="{ opened: navOpen }"
                >
                    <img
                        src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_header/icon_drop.png"
                        alt="열기"
                    />
                </button>
            </div>
            <!-- icons -->
            <div
                class="icons_container"
                v-for="(icons, i) in list"
                :key="i"
                :id="`container${i}`"
            >
                <h2 class="icons_category">{{ icons.category }}</h2>
                <ul class="icons_list">
                    <li class="icon_box" v-for="(icon, n) in icons.icons" :key="n">
                        <input type="text" :value="icon.iconUrl" :id="`icon${i}-${n}`" />
                        <button type="button" @click="copyUrl(`icon${i}-${n}`)">
                            <img
                                :src="icon.iconUrl"
                                :alt="icon.iconName"
                                :id="`img${i}-${n}`"
                            />
                            <span class="icon_name">
                                {{ icon.iconName }}
                            </span>
                            <span class="icon_size">
                                natural size:
                                {{ icon.iconSize }}
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <transition name="fade-ani">
            <div class="toast" v-if="toastShow">url을 복사했습니다</div>
        </transition>
    </section>
</template>
<script>
    import iconData from '@/assets/js/iconData'
    export default {
        data() {
            return {
                navOpen: false,
                iconData: [...iconData],
                toastShow: false,
                list: []
            }
        },
        methods: {
            copyUrl(icon) {
                let copyText = document.getElementById(icon)
                copyText.select()
                document.execCommand('copy')
                this.toastShow = true
                setTimeout(() => {
                    this.toastShow = false
                }, 1500)
            },
            iconName(text) {
                return text.replace(/^.*\//, '')
            },
            scrollCategory(id) {
                const container = document.getElementById(id)
                const navHeight = this.$refs.iconsNav.offsetHeight
                const containerTop = container.offsetTop - navHeight - 10
                window.scrollTo({
                    top: containerTop,
                    left: 0,
                    behavior: 'smooth'
                })
                this.navOpen = false
            },
            imgSize(url) {
                return new Promise(function (resolve, reject) {
                    const icon = new Image()
                    icon.onload = () => {
                        resolve(icon)
                    }
                    icon.onerror = () => {
                        reject(new Error('imgFail'))
                    }
                    icon.src = url
                })
            },
            iconList() {
                this.list = []
                for (const icondata of this.iconData) {
                    const category = icondata.category
                    const icons = []
                    for (const icon of icondata.iconList) {
                        const iconUrl = icon
                        const iconName = this.iconName(icon)
                        this.imgSize(iconUrl).then((img) => {
                            const iconSize = `${img.width} X ${img.height}`
                            icons.push({
                                iconUrl: iconUrl,
                                iconName: iconName,
                                iconSize: iconSize
                            })
                        })
                    }
                    this.list.push({
                        category: category,
                        icons: icons
                    })
                }
            }
        },
        mounted() {
            console.log(this.iconList())
        },
        watch: {
            iconData() {
                this.iconList()
            }
        }
    }
</script>
<style lang="scss" scoped>
    .icons_content {
        .inner_container {
            padding-bottom: 60px;
            margin: 0 auto;
            max-width: 960px;
            box-sizing: border-box;
            background-color: #fff;
        }
        .icons_nav {
            display: flex;
            align-items: flex-end;
            position: sticky;
            top: 0;
            z-index: 500;
            background-color: #fff;
            border-bottom: 1px solid #eee;
            .open_btn {
                width: 50px;
                height: 60px;
                flex-shrink: 0;
                background-color: #fff;
            }
            .open_btn {
                img {
                    width: 18px;
                    transition: transform 0.15s ease-in;
                }
                &.opened img {
                    transform: rotate(-180deg);
                }
            }
            .icons_nav_container {
                display: flex;
                flex: 1;
                align-items: center;
                height: 60px;
                padding: 0 16px;
                gap: 8px;
                overflow-x: scroll;
                &::-webkit-scrollbar {
                    height: 6px;
                    background-color: transparent;
                }
                &::-webkit-scrollbar-thumb {
                    background-color: #ddd;
                    border-radius: 5px;
                }
                &::-webkit-scrollbar-track {
                    background-color: transparent;
                }
                button {
                    flex-shrink: 0;
                    padding: 10px;
                    font-size: 14px;
                    color: #333;
                }
            }
            &.open {
                .icons_nav_container {
                    flex-wrap: wrap;
                    height: auto;
                    min-height: 60px;
                    button {
                        margin-top: 8px;
                        margin-bottom: 8px;
                    }
                }
            }
        }
        .icons_title {
            padding: 24px 0 16px;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            color: #333;
            background-color: #fff;
        }
        .icons_container {
            margin-top: 36px;
        }
        .icons_container {
            .icons_category {
                padding: 0 16px;
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }
            .icons_list {
                display: flex;
                flex-wrap: wrap;
                padding: 0 16px;
                margin-top: 16px;
                gap: 16px;
            }
            .icon_box {
                position: relative;
                width: calc(25% - 12px);
                border: 1px solid #eee;
                border-radius: 5px;
                overflow: hidden;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                input[type='text'] {
                    position: absolute;
                    top: -999px;
                    left: -999px;
                    overflow: hidden;
                }
                button {
                    width: 100%;
                    height: 100%;
                    padding: 20px 8px 16px;
                    box-sizing: border-box;
                    background-color: #f9f9f9;
                }
                &:hover button {
                    background-color: #cae3e9;
                }
                img {
                    display: block;
                    width: 48px;
                    min-height: 48px;
                    margin: 0 auto 16px;
                    object-fit: contain;
                }
                .icon_name {
                    display: block;
                    text-align: center;
                    font-size: 13px;
                    color: #666;
                    word-break: break-all;
                }
                .icon_size {
                    display: block;
                    margin-top: 8px;
                    text-align: center;
                    font-size: 12px;
                    color: #888;
                }
            }
        }
    }
    .toast {
        position: fixed;
        bottom: 82px;
        left: 16px;
        right: 16px;
        z-index: 500;
        padding: 16px;
        box-sizing: border-box;
        margin: 0 auto;
        max-width: 928px;
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.7);
        text-align: center;
        font-size: 13px;
        line-height: 1.4;
        color: #fff;
    }
    @media screen and (max-width: 720px) {
        .icons_content .icons_container .icon_box {
            width: calc(50% - 8px);
        }
    }
</style>
