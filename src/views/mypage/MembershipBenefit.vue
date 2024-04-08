<template>
    <section class="public_content member_benefit_content">
        <!-- <SubTopHeader :isDropState="false" :data="menuData" :count="9" /> -->
        <SubHeader title="멤버십 혜택 안내" />
        <article class="non_login">
            <p>로그인 후 멤버십 혜택을 만나보세요!</p>
            <a href="#" class="go_signin">나의 멤버십 등급 확인하기</a>
        </article>
        <div class="divider"></div>
        <article class="grade_info" :class="gradeClass">
            <i class="icon" @click="changeGrade"></i>
            <p class="user">
                <strong class="name">홍길동</strong>님의 6월 등급은<br />
                <strong class="grade">{{ gradeText }}</strong> 입니다.
            </p>
            <div class="reset_grade">
                <dl class="period">
                    <dt>
                        현재 등급 산정기간
                        <button type="button" @click="layerShow">
                            <i class="comp_icon_circle_info"></i>
                        </button>
                    </dt>
                    <dd>2021.11.16 ~ 2022.05.15</dd>
                </dl>
                <div class="range" :class="gradeClass">
                    <div class="range_bar">
                        <i class="end_point"></i>
                    </div>
                    <ul class="grade">
                        <li v-for="text in gradeLabel" :key="text">
                            <img :src="`${path + text}`" alt="" />
                        </li>
                    </ul>
                </div>
                <div class="next_level">
                    <p class="more_cost">
                        다음 등급까지 <strong>234,000</strong>원 남았습니다.
                    </p>
                    <p class="cost_history">
                        (최근 6개월의 구매완료 금액 기준 : 424,000원)
                    </p>
                </div>
                <dl class="expect_grade" :class="{ 'is_open': expectOpen }">
                    <dt @click="expectOpen = !expectOpen">다음달 예상 등급 안내</dt>
                    <dd>
                        <p class="grade_dec">
                            7월 예상 등급 <i class="comp_grade_black_20"></i>
                            <strong class="grade_black">MUST BLACK</strong>
                        </p>
                        <p class="info">등급 산정기간 : 2022.05.16 ~ 2022.06.23</p>
                        <p class="info">등급 산정기간내 구매완료 금액 : 534,000원</p>
                    </dd>
                </dl>
            </div>
            <div class="private_banner">
                <a href="#"
                    ><img :src="`${path}/private-mall-banner.png`" alt="private-mall"
                /></a>
            </div>
        </article>
        <div class="divider"></div>
        <article class="monthly_benefit">
            <h2>이번달 홍길동님을 위한 혜택</h2>
            <div class="benefit_container">
                <img
                    :src="`${path}/logo-laundrygo.png`"
                    alt="laundrygo"
                    width="160"
                    class="logo"
                />
                <p class="benefit_info">[머스트잇X런드리고] 프리미엄 클리닝 서비스</p>
                <p class="point">런드리고 20,000 포인트</p>
                <div class="point_box" @click="showPoint = !showPoint">
                    <dl class="point_code">
                        <dt>포인트 코드</dt>
                        <dd>qSpfrZwnx010</dd>
                    </dl>
                    <button type="button" v-if="!showPoint">포인트 코드 확인하기</button>
                </div>
                <div class="point_notice" :class="{ 'is_open': monthlyOpen }">
                    <p class="title">포인트 발급/등록 및 유효기간</p>
                    <p class="info bullet">매달 1회 포인트 발급</p>
                    <p class="info bullet">매달 말일까지 포인트 등록 가능</p>
                    <p class="info bullet">포인트 등록 후 30일 이내 사용 가능</p>
                    <p class="title">사용방법</p>
                    <p class="info bullet">
                        런드리고 APP > MY > 포인트 > 포인트 코드 등록 후 사용
                    </p>
                    <p class="info bullet">
                        <a href="#">런드리고 서비스 이용안내 바로가기</a>
                    </p>
                    <p class="title">유의사항</p>
                    <p class="info bullet">런드리고 모바일 APP에서 사용 가능</p>
                    <p class="info bullet">
                        런드리고 서비스 지역에 한해 사용 가능 (서울, 경기 일부 지역)
                    </p>
                    <p class="info bullet">
                        등록 후 유효기간 만료 시 포인트 자동 소멸, 재발급 불가
                    </p>
                    <p class="info bullet">
                        런드리고 혜택은 머스트잇과 런드리고의 사정에 따라 변경되거나
                        종료될 수 있습니다.
                    </p>
                </div>
                <button
                    class="more_btn"
                    @click="chageMonthly()"
                    :class="{ 'is_open': monthlyOpen }"
                >
                    {{ monthlyBtn }}
                </button>
            </div>
        </article>
        <div class="divider"></div>
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
                        <p class="title">횟수 제한없는 무상 A/S 서비스 (12개월)</p>
                    </div>
                </li>
                <li class="align_top">
                    <i class="comp_icon_crown_40"></i>
                    <div class="desc">
                        <p class="title">VIP 전용 할인관 입장 가능 (오픈 예정)</p>
                        <p class="info">VIP 전용 할인 혜택가로 상품 구매 가능</p>
                    </div>
                </li>
                <li class="align_top">
                    <i class="comp_icon_dry_40"></i>
                    <div class="desc">
                        <p class="title">런드리고 프리미엄 세탁 20,000 포인트 증정</p>
                        <p class="info">30년 세탁 전문가들의 전담 케어</p>
                        <p class="info">프리미엄 의류 전용 프로세스</p>
                        <p class="info">업계 최고 보상률 (최대 100%)</p>
                    </div>
                </li>
                <li>
                    <i class="comp_icon_cs_40"></i>
                    <div class="desc">
                        <p class="title">통화대기 없는 VIP 전담 서비스</p>
                    </div>
                </li>
                <li>
                    <i class="comp_icon_box_40"></i>
                    <div class="desc">
                        <p class="title">월 1회 무료 반품 서비스</p>
                    </div>
                </li>
                <li>
                    <i class="comp_icon_vip_40"></i>
                    <div class="desc">
                        <p class="title">VIP 오프라인 매장 행사 초청</p>
                    </div>
                </li>
            </ul>
        </article>
        <article class="notice">
            <h2>멤버십 등급 산정 기준 안내</h2>
            <p class="notice_info gray2">기간 : 당월 직전 6개월간</p>
            <p class="notice_info mt2 gray2">
                대상 : 주문상태가 <strong>‘구매완료’인 주문 건</strong>의 실
                결제금액(배송비, 오프라인 매장 구매 제외)으로 계산
            </p>
            <p class="notice_info mt2 gray2">갱신 : 매월 1일</p>
            <p class="notice_info2">
                <strong>※ 구매완료란 ?</strong> 배송완료된 주문을 ‘구매결정’한 상태를
                의미함<br />
                마이페이지 > 주문내역 조회에서 ‘구매완료’건 확인 가능
            </p>
            <p class="notice_tit">유의사항</p>
            <p class="notice_info">
                머스트잇 쿠폰 및 무상 A/S 서비스는 사용기한 내에서만 사용 가능(사용기한
                연장 불가, 미사용 시 자동소멸) 합니다.
            </p>
            <p class="notice_info">
                무상 A/S 서비스는 고의적인 상품 훼손, 리폼, 사이즈 수선, 세탁은 A/S 서비스
                대상에서 제외됩니다.
            </p>
            <p class="notice_info">
                A/S 서비스는 머스트잇에서 구매한 상품 중. 의류, 가방, 지갑, 벨트, 슈즈
                제품에 대해서 서비스 이용 가능합니다.
            </p>
            <div class="more_box" :class="{ 'is_open': showNoticeMore }">
                <p class="notice_info">
                    수선 부위에 따라 A/S 서비스가 불가능할 수 있으며, 수선 내용에 따라
                    유상 A/S로 진행될 수 있습니다.
                </p>
                <p class="notice_info">
                    런드리고 프리미엄 클리닝 서비스의 경우 월 1회 발급되며, 런드리고 APP을
                    통해 사용하실 수 있습니다.
                </p>
                <p class="notice_info">
                    VIP 초청권의 경우 당사 이벤트 일정에 맞춰 초청권을 보내 드립니다.
                </p>
                <p class="notice_info">
                    비회원 및 본인인증 미완료 고객 등 일부 고객은 혜택 지급 대상에서
                    제외될 수 있습니다.
                </p>
                <p class="notice_info">
                    VVIP 전용 고객센터의 경우 동시간 통화량에 따라 상담사 연결이 지연될 수
                    있습니다.
                </p>
                <p class="notice_info">
                    멤버십 혜택은 당사의 사정에 의해 변경 또는 중지될 수 있습니다.
                </p>
                <p class="notice_info">
                    부당한 방법으로 획득한 고객 등급은 사후 심사 후 조정 될 수 있습니다.
                </p>
            </div>
            <button
                type="button"
                class="more_notice"
                @click="showNotice"
                :class="{ 'is_open': showNoticeMore }"
            >
                {{ showNoticeMoreText }}
            </button>
        </article>
        <transition name="fade-ani">
            <div class="layer_node" v-if="showLayer">
                <div class="mask" @click="layerClose"></div>
                <div class="layer_insert">
                    <Alert />
                </div>
            </div>
        </transition>
    </section>
</template>
<script>
    import EventBus from '@/assets/js/EventBus'
    import scrollMixin from '@/mixin/scrollEvent'
    import SubHeader from '@/components/SubHeader.vue'
    // import SubTopHeader from '@/components/SubTopHeader.vue'
    import Alert from '@/layer/gradeUpgradePeriod.vue'
    export default {
        components: {
            // SubTopHeader,
            Alert,
            SubHeader
        },
        mixins: [scrollMixin],
        data: function () {
            return {
                menuData: [{ name: '멤버십 혜택 안내' }],
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
                showNoticeMoreText: '유의사항 더보기',
                showLayer: false
            }
        },
        methods: {
            changeGrade() {
                this.id >= 4 ? (this.id = 0) : this.id++
                this.gradeClass = this.gradeData[this.id]['class']
                this.gradeText = this.gradeData[this.id]['text']
            },
            chageMonthly() {
                this.monthlyOpen = !this.monthlyOpen
                this.monthlyBtn = !this.monthlyOpen ? '자세히 보기' : '닫기'
            },
            showNotice() {
                this.showNoticeMore = !this.showNoticeMore
                this.showNoticeMoreText = !this.showNoticeMore
                    ? '유의사항 더보기'
                    : '닫기'
            },
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
            layerClose() {
                EventBus.$emit('hideModal')
            },
            layerShow() {
                EventBus.$emit('showModal')
            }
        },
        created() {
            const HTML = document.getElementsByTagName('html')[0]
            const BODY = document.body
            EventBus.$on('showModal', () => {
                console.log('show')
                this.showLayer = true
                HTML.classList.add('html_scroll')
                BODY.classList.add('body_scroll')
            })
            EventBus.$on('hideModal', () => {
                console.log('hide')
                this.showLayer = false
                HTML.classList.remove('html_scroll')
                BODY.classList.remove('body_scroll')
            })
        },
        beforeDestroy() {
            EventBus.$off('showModal')
            EventBus.$off('hideModal')
        }
    }
</script>
<style scoped></style>
