<template>
    <section class="layer_all member_benefit_content ">
        <header>
            <button type="button" class="layer_close" @click="modalClose()"></button>
            <h2>멤버십 혜택 안내</h2>
        </header>
        <div class="layer_container">
        <article class="each_benefit">
            <h2>등급별 혜택</h2>
            <p class="title_info">각 등급을 눌러 등급별 혜택을 확인해 보세요.</p>
            <div class="grade_graph">
                <button
                    type="button"
                    v-for="(button, index) in graphData"
                    :key="`graph_${button.key}`"
                    @click="graphClick(index)"
                    :class="{ 'on': button.isActive }"
                >
                    <span>{{ button.text }}</span>
                </button>
            </div>
            <div class="grade_choice_info" :class="selectClass">
                <p class="grade">{{ selectGrade }}</p>
                <p class="condition">{{ conditionPrice }}</p>
            </div>
            <ul class="benefit_lists">
                <li class="align_top">
                    <i class="comp_icon_cake_40"></i>
                    <div class="desc">
                        <p class="title">생일 축하 쿠폰</p>
                        <p class="info">발급 후 21일 이내 사용 가능</p>
                        <p class="info">최소 100,000원 이상 결제 시 사용 가능</p>
                        <p class="info">타 쿠폰 중복 사용 불가</p>
                    </div>
                </li>
                <li>
                    <i class="comp_icon_repair_40"></i>
                    <div class="desc">
                        <p class="title">횟수 제한없는 무상 A/S 서비스 (6개월)</p>
                    </div>
                </li>
                <li class="align_top" v-show="graphShowId < 3">
                    <i class="comp_icon_crown_40"></i>
                    <div class="desc">
                        <p class="title">VIP 전용 할인관 입장 가능 (오픈 예정)</p>
                        <p class="info">VIP 전용 할인 혜택가로 상품 구매 가능</p>
                    </div>
                </li>
                <li class="align_top" v-show="graphShowId < 2">
                    <i class="comp_icon_dry_40"></i>
                    <div class="desc">
                        <p class="title">런드리고 프리미엄 세탁 20,000 포인트 증정</p>
                        <p class="info">30년 세탁 전문가들의 전담 케어</p>
                        <p class="info">프리미엄 의류 전용 프로세스</p>
                        <p class="info">업계 최고 보상률 (최대 100%)</p>
                    </div>
                </li>
                <li v-show="graphShowId < 1">
                    <i class="comp_icon_cs_40"></i>
                    <div class="desc">
                        <p class="title">통화대기 없는 VIP 전담 서비스</p>
                    </div>
                </li>
                <li v-show="graphShowId < 1">
                    <i class="comp_icon_box_40"></i>
                    <div class="desc">
                        <p class="title">월 1회 무료 반품 서비스</p>
                    </div>
                </li>
                <li v-show="graphShowId < 1">
                    <i class="comp_icon_vip_40"></i>
                    <div class="desc">
                        <p class="title">VIP 오프라인 매장 행사 초청</p>
                    </div>
                </li>
            </ul>
        </article>
        </div>
    </section>

</template>
<script>
  import EventBus from '@/assets/js/EventBus'
    export default {
        data: function () {
            return {
                gradeData: [
                    { class: '', text: 'FREINDS' },
                    { class: 'grade_green', text: 'MUST GREEN' },
                    { class: 'grade_blue', text: 'MUST BLUE' },
                    { class: 'grade_red', text: 'MUST RED' },
                    { class: 'grade_black', text: 'MUST BLACK' }
                ],
                gradeClass: '',
                gradeText: 'FREINDS',
                path: this.$S3 + 'm_mypage',
                gradeLabel: [
                    '/grade-txt-friends-off.png',
                    '/grade-txt-green-off.png',
                    '/grade-txt-blue-off.png',
                    '/grade-txt-red-off.png',
                    '/grade-txt-black-off.png'
                ],
                id: 0,
                expectOpen: false,
                monthlyOpen: false,
                monthlyBtn: !this.monthlyOpen ? '자세히 보기' : '닫기',
                graphData: [
                    { text: 'B', isActive: true, key: 'black' },
                    { text: 'R', isActive: false, key: 'red' },
                    { text: 'B', isActive: false, key: 'blue' },
                    { text: 'G', isActive: false, key: 'green' },
                    { text: 'F', isActive: false, key: 'friends' }
                ],
                graphShowId: 0,
                selectGrade: 'MUST BLACK',
                selectClass: 'grade_black',
                conditionPrice: '최근 6개월 500만원 이상 구매회원',
                showPoint: false,
                showNoticeMore: false,
                showLayer: false
            }
        },
        methods: {
            graphClick(id) {
                this.graphShowId = id
                this.selectGrade = this.gradeData[Math.abs(4 - id)].text
                this.selectClass = this.gradeData[Math.abs(4 - id)].class
                switch (id) {
                    case 0:
                        this.conditionPrice = '최근 6개월 500만원 이상 구매회원'
                        break
                    case 1:
                        this.conditionPrice = '최근 6개월 200만원 이상 구매회원'
                        break
                    case 2:
                        this.conditionPrice = '최근 6개월 70만원 이상 구매회원'
                        break
                    case 3:
                        this.conditionPrice = '최근 6개월 1건 이상 구매회원'
                        break
                    case 4:
                        this.conditionPrice = '신규회원'
                        break
                }
                for (let [index, value] of this.graphData.entries()) {
                    if (id == index) {
                        value.isActive = true
                    } else {
                        value.isActive = false
                    }
                }
            },
            modalClose() {
                EventBus.$emit('ModalMembershipClose')
            },
        },
    }
</script>
<style scoped>
.member_benefit_content .each_benefit{
    padding: 16px 16px 40px;
}
</style>

