<script>
    // 레거시 코드 subHeaer로 통합
    import EventBus from '@/assets/js/EventBus'
    import { scrollRatio } from '@/assets/js/Common'

    export default {
        name: 'SubTopHeader',
        props: {
            dropDown: Boolean,
            data: {
                type: Array,
                default: () => [{ type: 'text' }]
            },
            count: Number,
            isDropState: { type: Boolean, default: true }, //drop 다운 사용여부,
            scrollEvent: String,
            rightShow: { type: Boolean, default: true },
            fadeMode: String //target
        },
        data() {
            return {
                pageName: this.data[0].name,
                menuData: this.data
            }
        },
        mounted() {
            // only fade mode
            if (this.fadeMode) {
                document.addEventListener('scroll', this.onScroll, { passive: true })
                this.onScroll()
            }
        },
        methods: {
            menuName(name, id) {
                this.pageName = name
                for (let [index, value] of this.menuData.entries()) {
                    if (id == index) {
                        value.isActive = true
                    } else {
                        value.isActive = false
                    }
                }
            },
            menuOpen() {
                EventBus.$emit('openDrawer')
            },
            onScroll() {
                const target = this.$parent.$refs[this.fadeMode]
                let ratio = scrollRatio(target, 52)
                document.querySelector('.duplicate_frame').style.opacity = 1 - ratio
                document.querySelector('.original_frame').style.opacity = ratio
                document.querySelector('.duplicate_frame').style.pointerEvents =
                    ratio > 0.2 ? 'none' : 'auto'
            },
            onParents() {
                try {
                    this.$parent.menuDrop
                } catch (e) {
                    console.log(e)
                }
            }
        }
    }
</script>

<template>
    <header class="comp_sub_header self_module" :class="{ 'fade_mode': fadeMode }">
        <div
            class="sub_header_title"
            :class="{ 'scroll_down': scrollEvent == 'down', 'original_frame': fadeMode }"
        >
            <!--name text of image switch    -->
            <!-- 이미지 -->
            <template v-if="isDropState == false && menuData[0].type == 'image'">
                <h1 class="name" v-html="pageName"></h1>
            </template>
            <!-- 텍스트 -->
            <template v-else>
                <h1 class="name" :class="{ extends: rightShow == false }">
                    {{ pageName }}
                </h1>
            </template>

            <!-- drop down 버튼 at cpp -->
            <button
                type="button"
                class="button_drop"
                :class="{ 'isOpen': dropDown }"
                @click="onParent()"
                v-if="isDropState"
            >
                <i class="comp_icon_drop"></i>
            </button>

            <div class="sub_header_left">
                <button class="button_back" type="button" @click="menuOpen">
                    <i class="comp_icon_back"></i>
                </button>
            </div>
            <div class="sub_header_right" v-if="rightShow">
                <a href="#" class="button_search"><i class="comp_icon_search"></i></a>
                <a href="#" class="button_basket"
                    ><i class="comp_icon_basket"></i>
                    <span class="badge">{{ count }}</span>
                </a>
            </div>
        </div>
        <!-- 
            fadeMode 때 복제 되는 el at BLP
         -->
        <div class="sub_header_title duplicate_frame" v-if="fadeMode">
            <div class="sub_header_left">
                <button class="button_back" type="button" @click="menuOpen">
                    <i class="comp_icon_back"></i>
                </button>
            </div>
            <div class="sub_header_right" v-if="rightShow">
                <a href="#" class="button_search"><i class="comp_icon_search"></i></a>
                <a href="#" class="button_basket"
                    ><i class="comp_icon_basket"></i>
                    <span class="badge">{{ count }}</span>
                </a>
            </div>
        </div>

        <!-- 드롭다운 버튼 클릭 시 펼쳐지는 메뉴 at cpp -->
        <transition name="slide-down">
            <div class="menu_drop__box" v-if="dropDown">
                <ul class="menu_drop">
                    <li
                        class="menu_drop_list"
                        v-for="(menu, index) in menuData"
                        :key="menu.name"
                    >
                        <button
                            type="button"
                            class="menu_drop_link"
                            :class="{ 'active': menu.isActive }"
                            @click="menuName(menu.name, index)"
                        >
                            {{ menu.name }}
                        </button>
                    </li>
                </ul>
            </div>
        </transition>
    </header>
</template>
