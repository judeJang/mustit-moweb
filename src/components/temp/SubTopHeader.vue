<script>
    export default {
        props: {
            title: String,
            scrollState: String
        },
        data: function () {
            return {}
        }
    }
</script>
<template>
    <div
        class="mi-navigation sticky-v fs-13"
        :class="{ 'scroll-down': scrollState == 'down' }"
    >
        <div class="mi-head-container">
            <div class="p-8 mi-after-clear mi-relative">
                <div class="mi-abs-full mi-box-p8">
                    <h2 class="abs-center mi-sub-header" onclick="location.reload();">
                        {{ title }}
                    </h2>
                </div>
                <div class="mi-float-left mi-up-priority mi-relative">
                    <a
                        href="javascript:window.history.back();"
                        class="mi-btn mi-float-left mi-block mi-relative mi-group-r15"
                    >
                        <i class="d-block icon-gnb icon-back"></i>
                    </a>
                    <a
                        href="/m/main"
                        class="mi-btn mi-float-left mi-relative"
                        id="sub_header_home"
                        style="display: none"
                    >
                        <i class="d-block icon-bnav icon-home-black"></i>
                    </a>
                </div>

                <div class="mi-float-right mi-up-priority mi-relative">
                    <a
                        href="http://release.mustit.xyz/m/product/header_all_search?click=search&amp;keyword="
                        class="mi-btn mi-float-left mi-block mi-relative"
                    >
                        <i class="d-block icon-gnb icon-search"></i>
                    </a>
                    <a
                        href="/m/order/basket?click=basket"
                        class="mi-relative mi-small mi-btn mi-float-left mi-block mi-relative ml-4"
                    >
                        <i class="d-block icon-gnb icon-basket"></i>
                        <span
                            id="globalCartCount"
                            data-count="0"
                            class="badge badge-red fs-10 mi-abs-top-right badge-rounded"
                            style="
                                padding: 3px 4px;
                                min-width: 16px;
                                box-sizing: border-box;
                                display: none;
                            "
                            >0</span
                        >
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .fs-10 {
        font-size: 10px;
    }
    .mi-abs-top-right {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 100;
    }
    .badge-rounded {
        border-radius: 0.6rem;
    }
    .badge-red {
        color: #fff;
        background-color: #f52644;
    }
    .badge-b-red {
        background-color: #f52644;
    }
    .badge {
        display: inline-block;
        padding: 0.2em 0.65em;
        white-space: nowrap;
        text-align: center;
        line-height: 1em;
    }
    .mi-float-right {
        float: right;
    }
    /* gnb nav */
    .icon-gnb {
        display: inline-block;
        background-image: url('https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_sprites/icon_gnb2.png');
        background-repeat: no-repeat;
        background-size: 380px 38px;
    }

    .icon-gnb.icon-back {
        width: 36px;
        height: 36px;
        background-position: -39px -1px;
    }
    .icon-gnb.icon-back-white {
        width: 36px;
        height: 36px;
        background-position: -1px -1px;
    }
    .icon-gnb.icon-threebar {
        width: 36px;
        height: 36px;
        background-position: -115px -1px;
    }
    .icon-gnb.icon-exit {
        width: 36px;
        height: 36px;
        background-position: -77px -1px;
    }
    .icon-gnb.icon-setting {
        width: 36px;
        height: 36px;
        background-position: -267px -1px;
    }
    .icon-gnb.icon-basket {
        width: 36px;
        height: 36px;
        background-position: -305px -1px;
    }
    .icon-gnb.icon-basket-white {
        width: 36px;
        height: 36px;
        background-position: -343px -1px;
    }
    .icon-gnb.icon-search {
        width: 36px;
        height: 36px;
        background-position: -229px -1px;
    }
    .icon-gnb.icon-search-white {
        width: 36px;
        height: 36px;
        background-position: -191px -1px;
    }
    .icon-gnb.icon-member {
        width: 36px;
        height: 36px;
        background-position: -153px -1px;
    }
    .icon-bnav {
        display: inline-block;
        background-image: url('https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_sprites/icon_bottom_nav.png');
        background-repeat: no-repeat;
        background-size: 456px 38px;
    }
    .icon-bnav {
        display: inline-block;
        background-image: url('https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_sprites/icon_bottom_nav.png');
        background-repeat: no-repeat;
        background-size: 456px 38px;
    }

    .icon-bnav.icon-brand-black {
        width: 36px;
        height: 36px;
        background-position: -1px -1px;
    }
    .icon-bnav.icon-brand-red {
        width: 36px;
        height: 36px;
        background-position: -39px -1px;
    }

    .icon-bnav.icon-home-black {
        width: 36px;
        height: 36px;
        background-position: -77px -1px;
    }
    .icon-bnav.icon-home-red {
        width: 36px;
        height: 36px;
        background-position: -115px -1px;
    }

    .icon-bnav.icon-heart-black {
        width: 36px;
        height: 36px;
        background-position: -153px -1px;
    }
    .icon-bnav.icon-heart-red {
        width: 36px;
        height: 36px;
        background-position: -191px -1px;
    }

    .icon-bnav.icon-eyes-black {
        width: 36px;
        height: 36px;
        background-position: -267px -1px;
    }
    .icon-bnav.icon-eyes-red {
        width: 36px;
        height: 36px;
        background-position: -229px -1px;
    }

    .icon-bnav.icon-mypage-black {
        width: 36px;
        height: 36px;
        background-position: -381px -1px;
    }
    .icon-bnav.icon-mypage-red {
        width: 36px;
        height: 36px;
        background-position: -419px -1px;
    }

    .icon-bnav.icon-menu-black {
        width: 36px;
        height: 36px;
        background-position: -305px -1px;
    }
    .icon-bnav.icon-menu-red {
        width: 36px;
        height: 36px;
        background-position: -343px -1px;
    }

    .d-block {
        display: block !important;
    }
    /*Navigation*/
    .mi-relative {
        position: relative;
    }
    .mi-navigation {
        height: 4em;
        position: relative;
        z-index: 9000;
    }
    .mi-after-clear:after {
        content: '';
        display: block;
    }
    .mi-relative {
        position: relative;
    }
    .mi-group-r15 {
        margin-right: 15px;
    }
    .mi-btn {
        background-color: transparent;
        border: 0;
        color: #141414;
        outline: none;
        box-sizing: border-box;
        padding-left: 0;
        padding-right: 0;
        border-radius: 0;
        appearance: none;
        -webkit-appearance: none;
    }
    .abs-center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
    }
    .mi-block {
        display: block;
    }
    .mi-abs-full {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }
    .mi-float-left {
        float: left;
    }
    .mi-up-priority {
        z-index: 1000;
    }
    .mi-navigation.sticky-v {
        height: 4em;
        z-index: 9000;
        transition: all 0.2s ease;
        -webkit-transition: all 0.2s ease;
        position: -webkit-sticky;
        position: -moz-sticky;
        position: -ms-sticky;
        position: -o-sticky;
        position: sticky;
        top: 0;
    }
    .mi-sub-header {
        width: 50%;
        margin: auto;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
    }
    .mi-navigation.animation-option .sticky-layer,
    .mi-header-top.animation-option {
        transition: all 0.2s ease;
        -webkit-transition: all 0.2s ease;
    }

    .mi-head-container {
        background-color: #fff;
        height: 50px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    }
    .mi-head-container {
        background-color: #fff;
        height: 50px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        overflow: visible;
        transition: all 0.2s ease;
        -webkit-transition: all 0.2s ease;
    }
    .mi-head-container > .mi-horizontal-scroll-wrapper {
        height: 51px;
    }

    .mi-navigation {
        font-size: 13px;
        .mi-head-container {
            height: 52px;
            border-bottom: 0;
        }
        &.sticky-v.scroll-down {
            top: -52px;
        }
    }
    .fs-13 {
        font-size: 13px;
    }
    .p-8 {
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 8px;
        padding-right: 8px;
    }
</style>
