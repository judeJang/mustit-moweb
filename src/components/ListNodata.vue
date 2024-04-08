<template>
    <article class="list_nodata_container self_module" :style="style">
        <div class="icon_box" :class="icon"></div>
        <template>
            <template v-if="type === 1 || type === 2">
                <h4 class="nodata_title">{{ title }}</h4>
                <p class="nodata_text" v-html="message"></p>
            </template>

            <!-- 
                custom
                btn 안의 클래스는 .btn으로
             -->
            <template v-else>
                <h4 class="nodata_title">
                    <slot name="title"></slot>
                </h4>
                <p class="nodata_text">
                    <slot name="text"></slot>
                </p>
                <slot name="btn"></slot>
            </template>
        </template>
    </article>
</template>

<script>
    export default {
        props: {
            type: { type: Number, default: 1 },
            /*
                 type
                1: 검색결과가 없을 경우
                2: 필터조건에 맞는 상품이 없을 경우
                3. custom slot으로 입력
            */
            icon: { type: String, default: '' },
            styles: { type: String }
            /*
                icon
                default : 물음표
                exclamation  : 느낌표
            */
        },
        computed: {
            title() {
                return this.type === 1
                    ? '검색된 상품이 없습니다.'
                    : '해당 상품이 없습니다.'
            },
            message() {
                return this.type === 1
                    ? '다른 검색어를 입력해보세요.<br/>검색어가 정확한지 확인해주세요.'
                    : '선택하신 조건에 맞는 상품이 없습니다.<br/>옵션을 다시 선택해주세요.'
            }
        }
    }
</script>
