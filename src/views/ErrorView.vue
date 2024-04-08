<template>
    <div class="error_content">
        <div class="center_container">
            <i class="icon" :class="params != 'code' ? 'type_' + params : 'type_504'"></i>
            <p class="state" v-html="text"></p>
            <p class="desc" v-html="subText"></p>
            <div class="btn_box">
                <a href="#" class="btn" v-if="params != 'data'">이전 페이지로</a>
                <a href="#" class="btn type_bk">{{ btnText }}</a>
            </div>
        </div>
        <div class="bottom_container">
            <i class="icon"></i>
            <p>머스트잇 고객센터 <a href="tel:1566-3516">1566-3516</a></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ErrorView',

        data() {
            return {
                path: 'https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/error/',
                params: this.$route.params.code,
                text: '',
                subText: '',
                btnText: ''
            }
        },
        created() {
            switch (this.params) {
                case '404':
                    this.text =
                        '요청하신 페이지를 <br class="only_mo"/> 찾을 수 없습니다.'
                    this.subText =
                        '페이지의 주소가 잘못 입력되었거나,<br class="only_mo"/> 변경 혹은 삭제로 인해 사용하실 수 없습니다. <br/>주소를 다시 확인해주세요.'
                    this.btnText = '홈으로'
                    break
                case '504':
                    this.text = '잠시 후 다시 시도해 주세요!'
                    this.subText =
                        '일시적으로 해당 페이지의 접속이 지연되었습니다.<br/>보다 원활한 서비스 이용을 위해 문제를<br class="only_mo"/> 해결중이오니 잠시 후 다시 시도해 주세요.'
                    this.btnText = '재시도'
                    break
                case 'code':
                    this.text = '잠시 후 다시 확인해 주세요!'
                    this.subText =
                        '고객님, 이용에 불편을 드려 죄송합니다.<br/>보다 원활한 서비스 이용을 위해 <br class="only_mo"/> 문제를 해결중이오니 잠시 후 다시 이용해 주세요.'
                    this.btnText = '홈으로'
                    break
                case 'data':
                    this.text = '인터넷에 연결할 수 없습니다.'
                    this.subText =
                        '인터넷에 연결되었는지 확인 후 <br class="only_mo"/> 다시 시도해 주세요.'
                    this.btnText = '재시도'
                    break
            }
        }
    }
</script>
<style>
    @import 'https://static-ux.mustit.co.kr/ux/service/common/pretendard.css';
    @import 'https://mustit-ux.s3.ap-northeast-2.amazonaws.com/ux/service/common/error.css';
</style>
<style lang="scss">
    //     $white:#fff;
    //     $black:#000;
    //     $fw-semibold:600;
    //     $gray2:#222;
    //     $gray3:#333;
    //     $gray8:#888;
    //     $grayd:#ddd;
    //     $graya:#aaa;
    //     $fw-regular:400;

    //     // scss to css
    //     // https://jsonformatter.org/scss-to-css

    // $path: 'https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/error/';
    // $tabletWid: 768px; //테블릿 최소 사이즈
    // @mixin trans-fast {
    //     transition: all 0.3s ease;
    // }
    // @mixin trans-slow {
    //     transition: all 0.6s 0.5s ease;
    // }

    // .error_content div,
    // .error_content span,
    // .error_content applet,
    // .error_content object,
    // .error_content iframe,
    // .error_content h1,
    // .error_content h2,
    // .error_content h3,
    // .error_content h4,
    // .error_content h5,
    // .error_content h6,
    // .error_content p,
    // .error_content blockquote,
    // .error_content pre,
    // .error_content a,
    // .error_content abbr,
    // .error_content acronym,
    // .error_content address,
    // .error_content big,
    // .error_content cite,
    // .error_content code,
    // .error_content del,
    // .error_content dfn,
    // .error_content em,
    // .error_content img,
    // .error_content ins,
    // .error_content kbd,
    // .error_content q,
    // .error_content s,
    // .error_content samp,
    // .error_content small,
    // .error_content strike,
    // .error_content strong,
    // .error_content sub,
    // .error_content sup,
    // .error_content tt,
    // .error_content var,
    // .error_content b,
    // .error_content u,
    // .error_content i,
    // .error_content center,
    // .error_content dl,
    // .error_content dt,
    // .error_content dd,
    // .error_content ol,
    // .error_content ul,
    // .error_content li,
    // .error_content fieldset,
    // .error_content form,
    // .error_content label,
    // .error_content legend,
    // .error_content table,
    // .error_content caption,
    // .error_content tbody,
    // .error_content tfoot,
    // .error_content thead,
    // .error_content tr,
    // .error_content th,
    // .error_content td,
    // .error_content article,
    // .error_content aside,
    // .error_content canvas,
    // .error_content details,
    // .error_content embed,
    // .error_content figure,
    // .error_content figcaption,
    // .error_content footer,
    // .error_content header,
    // .error_content hgroup,
    // .error_content menu,
    // .error_content nav,
    // .error_content output,
    // .error_content ruby,
    // .error_content section,
    // .error_content summary,
    // .error_content time,
    // .error_content mark,
    // .error_content audio,
    // .error_content video,
    // .error_content input,
    // .error_content textarea,
    // .error_content button {
    //     font-family: 'Pretendard';
    //     box-sizing: border-box;
    //     margin:0;
    //     padding:0;
    //     border:0;
    // }
    // .error_content {
    //     position: absolute;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     left: 0;
    //     right: 0;
    //     top: 0;
    //     bottom: 0;
    //     min-height: 640px;
    //     background: $white;
    //     a {
    //         -webkit-tap-highlight-color: rgba($black, 0.03);
    //         text-decoration: none;
    //     }
    //     .only_mo {
    //         display: none;
    //     }
    //     .center_container {
    //         display: flex;
    //         align-items: center;
    //         flex-direction: column;
    //         transform: translateY(-7vh);
    //         @include trans-slow();
    //         .icon {
    //             width: 96px;
    //             height: 96px;
    //             @include trans-fast();
    //             &.type_404 {
    //                 background: url($path + 'icon_404.svg') no-repeat center top / cover;
    //             }
    //             &.type_504 {
    //                 background: url($path + 'icon_504.svg') no-repeat center top / cover;
    //             }
    //             &.type_data {
    //                 background: url($path + 'icon_data.svg') no-repeat center top / cover;
    //             }
    //         }
    //         p {
    //             text-align: center;
    //             @include trans-fast();
    //             &.state {
    //                 margin-top: 32px;
    //                 font-size: 28px;
    //                 font-weight: $fw-semibold;
    //                 line-height: 1.36;
    //             }
    //             &.desc {
    //                 margin-top: 20px;
    //                 font-size: 16px;
    //                 line-height: 1.5;
    //                 color: $gray8;
    //             }
    //         }
    //         .btn_box {
    //             display: flex;
    //             justify-content: center;
    //             align-items: center;
    //             margin-top: 48px;
    //             .btn {
    //                 display: flex;
    //                 justify-content: center;
    //                 align-items: center;
    //                 width: 200px;
    //                 height: 52px;
    //                 border-radius: 4px;
    //                 border: solid 1px $gray3;
    //                 background-color: $white;
    //                 font-size: 16px;
    //                 font-weight: $fw-semibold;
    //                 color: $gray2;
    //                 box-sizing: border-box;
    //                 text-decoration: none;
    //                 transition: all 0.3s ease, height 0.6s 0.5s ease;
    //                 & + .btn {
    //                     margin-left: 8px;
    //                 }
    //                 &.type_bk {
    //                     background: $gray3;
    //                     color: $white;
    //                 }
    //             }
    //         }
    //     }
    //     .bottom_container {
    //         position: absolute;
    //         display: flex;
    //         align-items: center;
    //         flex-direction: column;
    //         width: 100%;
    //         left: 0;
    //         bottom: 80px;
    //         @include trans-slow();
    //         .icon {
    //             width: 80px;
    //             height: 22px;
    //             background: url($path + 'footer_logo.svg') no-repeat center / cover;
    //         }
    //         p,
    //         a {
    //             font-size: 13px;
    //             line-height: 1.54;
    //             color: $graya;
    //             @include trans-fast();
    //         }
    //         p {
    //             margin-top: 4px;
    //         }
    //     }
    // }
    // @media screen and (max-width: $tabletWid) {
    //     .error_content {
    //         min-height: 550px;
    //         .only_mo {
    //             display: block;
    //         }
    //         .center_container {
    //             transform: translateY(-6vh);
    //             .icon {
    //                 width: 80px;
    //                 height: 80px;
    //             }
    //             p {
    //                 text-align: center;
    //                 .only_mo {
    //                     display: block;
    //                 }
    //                 &.state {
    //                     margin-top: 24px;
    //                     font-size: 24px;
    //                     line-height: 1.33;
    //                 }
    //                 &.desc {
    //                     margin-top: 12px;
    //                     font-size: 14px;
    //                 }
    //             }
    //             .btn_box {
    //                 flex-direction: column-reverse;
    //                 margin-top: 40px;
    //                 .btn {
    //                     height: 44px;
    //                     border-radius: 4px;
    //                     font-size: 14px;
    //                     font-weight: $fw-regular;
    //                     border-color: $grayd;
    //                     &.type_bk {
    //                         border-color: $gray3;
    //                     }
    //                     + .btn {
    //                         margin-left: 0px;
    //                         margin-bottom: 12px;
    //                     }
    //                 }
    //             }
    //         }
    //         .bottom_container {
    //             bottom: 40px;
    //             p,
    //             a {
    //                 font-size: 12px;
    //                 line-height: 1.5;
    //             }
    //         }
    //     }
    // }
</style>
