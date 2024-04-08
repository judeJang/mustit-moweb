<template>
    <section class="public_content forgery_apply">
        <SubHeader title="위조품 신고" />
        <!-- 위조품 신고 및 보상 절차 -->
        <article class="forgery_apply_process">
            <h3 class="title">위조품 신고 및 보상 절차</h3>
            <ul class="process_list" @click="hasGoods = !hasGoods">
                <li class="process_box">
                    <span class="step_num">1</span>
                    <p class="step_title">고객</p>
                    <div class="step_text">
                        <p>위조품 의심 신고 접수</p>
                    </div>
                </li>
                <li class="process_box">
                    <span class="step_num">2</span>
                    <p class="step_title">머스트잇</p>
                    <div class="step_text">
                        <p>접수 확인 후 전화로 절차 안내</p>
                    </div>
                </li>
                <li class="process_box">
                    <span class="step_num">3</span>
                    <p class="step_title">고객</p>
                    <div class="step_text">
                        <p>머스트잇으로 상품 선불로 발송</p>
                    </div>
                </li>
                <li class="process_box">
                    <span class="step_num">4</span>
                    <p class="step_title">머스트잇</p>
                    <div class="step_text">
                        <p>
                            감정원에 감정 의뢰 <br />
                            (최대 10일 소요)
                        </p>
                    </div>
                </li>
                <li class="process_box">
                    <span class="step_num">5</span>
                    <p class="step_title">머스트잇 > 고객</p>
                    <div class="step_text">
                        <p>감정 결과에 따라 조치</p>
                        <p class="dot">진품 : 머스트잇 부담 재배송</p>
                        <p class="dot">위조품 : 200% 보상</p>
                    </div>
                </li>
            </ul>
            <!-- 유의사항 -->
            <dl class="forgery_notice" :class="{ 'is_open': noticeOpen }">
                <dt @click="this.toggleNotice">유의사항을 확인해 주세요.</dt>
                <dd v-show="noticeOpen">
                    <ul>
                        <li v-for="text in noticeText" :key="text">{{ text }}</li>
                    </ul>
                </dd>
            </dl>
        </article>
        <!-- // 위조품 신고 및 보상 절차 -->
        <div class="divider"></div>
        <!-- 상품 목록 -->
        <nav class="goods_tabs">
            <button
                type="button"
                class="tab_btn"
                :class="{ 'active': goodsTab === 0 }"
                @click="goodsTab = 0"
            >
                신고한 상품
            </button>
            <button
                type="button"
                class="tab_btn"
                :class="{ 'active': goodsTab === 1 }"
                @click="goodsTab = 1"
            >
                신고할 상품
            </button>
        </nav>
        <article class="goods_area" v-if="goodsTab === 0">
            <!-- 신고한 상품 -->
            <template v-if="hasGoods">
                <ForgeryApplyGoodsCard applyComplete v-for="index in 10" :key="index" />
            </template>
            <ForgeryApplyGoodsEmpty v-else subText="신고한 상품이 없습니다." />
        </article>
        <article class="goods_area" v-if="goodsTab === 1">
            <!-- 신고할 상품 -->
            <template v-if="hasGoods">
                <ForgeryApplyGoodsCard v-for="index in 10" :key="index" />
            </template>
            <ForgeryApplyGoodsEmpty v-else subText="신고할 상품이 없습니다." />
        </article>
        <!-- // 상품 목록 -->
        <!-- 위조품 신고하기 팝업 -->
        <transition name="slide-up">
            <div class="layer_node" v-if="isFormModalOpen">
                <div class="all_layer_insert" v-if="isFormModalOpen">
                    <ForgeryApplyForm />
                </div>
            </div>
        </transition>
        <!-- // 위조품 신고하기 팝업 -->
        <!-- 위조품 신고내역 팝업 -->
        <transition name="slide-up">
            <div class="layer_node" v-if="isHistoryModalOpen">
                <div class="all_layer_insert" v-if="isHistoryModalOpen">
                    <ForgeryApplyHistory />
                </div>
            </div>
        </transition>
        <!-- // 위조품 신고내역 팝업 -->
        <!-- 신고내역 이미지보기 -->
        <transition name="fade-ani">
            <div class="layer_node" v-if="isImageModalOpen">
                <ImageModal />
            </div>
        </transition>

        <!-- // 신고내역 이미지보기 -->
    </section>
</template>

<script>
    import EventBus from '@/assets/js/EventBus'
    // import SubTopHeader from '@/components/SubTopHeader.vue'
    import SubHeader from '@/components/SubHeader.vue'
    import ImageModal from '@/views/layer/ImageModal'
    import ForgeryApplyForm from '@/views/mypage/ForgeryApplyLayerForm'
    import ForgeryApplyHistory from '@/views/mypage/ForgeryApplyLayerHistory'
    import ForgeryApplyGoodsCard from '@/views/mypage/ForgeryApplyGoodsCard'
    import ForgeryApplyGoodsEmpty from '@/views/mypage/ForgeryApplyGoodsEmpty'
    export default {
        components: {
            // SubTopHeader,
            SubHeader,
            ImageModal,
            ForgeryApplyForm,
            ForgeryApplyHistory,
            ForgeryApplyGoodsCard,
            ForgeryApplyGoodsEmpty
        },
        data() {
            return {
                menuData: [{ name: '위조품 신고' }],
                noticeOpen: false,
                noticeText: [
                    '머스트잇은 정품판매보증약관을 근거로 머스트잇과 계약한 감정원 또는 공공기관의 감정결과만 인정합니다.',
                    '제3의 감정업체에서 위조품으로 판정 받아 문의를 접수한 경우 해당 상품은 회수하여 머스트잇과 계약한 감정원에서 감정을 진 행합니다.',
                    '머스트잇과 계약한 감정원에서 감정이 불가한 경우 공공기관에 감정을 의뢰하여 그 감정결과로 조치합니다.',
                    '제3의 감정업체의 감정결과는 머스트잇과 계약한 감정원과 공공기관에서 감정이 불가한 경우에만 인정됩니다.',
                    '머스트잇과 계약한 감정원, 공공기관, 제3의 감정업체에서 감정 이 불가한 경우 정품으로 간주합니다.',
                    '브랜드나 카테고리에 따라 감정이 어려울 수 있습니다.'
                ],
                goodsTab: 0,
                hasGoods: true,
                isFormModalOpen: false,
                isHistoryModalOpen: false,
                isImageModalOpen: false
            }
        },
        methods: {
            toggleNotice() {
                this.noticeOpen = !this.noticeOpen
            }
        },
        created() {
            const HTML = document.getElementsByTagName('html')[0]
            const BODY = document.body
            EventBus.$on('forgeryFormModalOpen', () => {
                this.isFormModalOpen = true
                HTML.classList.add('html_scroll')
                BODY.classList.add('body_scroll')
            })
            EventBus.$on('forgeryFormModalClose', () => {
                this.isFormModalOpen = false
                HTML.classList.remove('html_scroll')
                BODY.classList.remove('body_scroll')
            })
            EventBus.$on('forgeryHistoryModalOpen', () => {
                this.isHistoryModalOpen = true
                HTML.classList.add('html_scroll')
                BODY.classList.add('body_scroll')
            })
            EventBus.$on('forgeryHistoryModalClose', () => {
                this.isHistoryModalOpen = false
                HTML.classList.remove('html_scroll')
                BODY.classList.remove('body_scroll')
            })
            EventBus.$on('imageModalOpen', () => {
                this.isImageModalOpen = true
                HTML.classList.add('html_scroll')
                BODY.classList.add('body_scroll')
            })
            EventBus.$on('imageModalClose', () => {
                this.isImageModalOpen = false
                HTML.classList.remove('html_scroll')
                BODY.classList.remove('body_scroll')
            })
        },
        beforeDestroy() {
            EventBus.$off('forgeryFormModalOpen')
            EventBus.$off('forgeryFormModalClose')
            EventBus.$off('forgeryHistoryModalOpen')
            EventBus.$off('forgeryHistoryModalClose')
            EventBus.$off('imageModalOpen')
            EventBus.$off('imageModalClose')
        }
    }
</script>
