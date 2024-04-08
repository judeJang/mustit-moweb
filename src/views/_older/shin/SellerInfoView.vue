<template>
    <section class="product_detail_area common_css">
        <article class="sub_page_header">
            <a class="sub_page_header__btn_back">
                <i class="sub_page_header__icon_box"
                    ><img
                        src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/icon_back_b.svg"
                        alt="뒤로가기"
                /></i>
            </a>
            <h2 class="sub_page_header__title">판매자 소개</h2>
        </article>
        <article class="seller_info_header">
            <div class="seller_logo">
                <img
                    src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_badge/badge_minishop_default.png"
                    alt="샵로고"
                />
            </div>
            <div class="shop_name">
                <img
                    src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_icon/seller/icon_trust_vip_l.png"
                    alt=""
                />
                <span class="txt">S-PROJECT</span>
            </div>
            <div class="shop_info_txt">
                <div class="inner_box">
                    <dl>
                        <dt>판매된 상품</dt>
                        <dd>24,338개</dd>
                    </dl>
                </div>
                <div class="inner_box">
                    <dl>
                        <dt>단골회원</dt>
                        <dd>56,270명</dd>
                    </dl>
                </div>
                <div class="inner_box">
                    <dl>
                        <dt>구매 만족도</dt>
                        <dd>신규판매자</dd>
                    </dl>
                </div>
            </div>
            <div class="shop_info_btn">
                <ul>
                    <li><button type="button" class="btn_memo">보상각서</button></li>
                    <li><button type="button" class="btn_shop">판매자샵</button></li>
                    <li>
                        <button
                            type="button"
                            class="btn_like like_off"
                            :class="[isActive ? 'like_on ' : 'like_off ']"
                            @click="classToggle()"
                        >
                            단골등록
                        </button>
                    </li>
                </ul>
            </div>
        </article>
        <article class="seller_info_desc">
            <div class="notice_box">
                <div class="inner_box">
                    <div class="title">
                        <a href="#">공지사항</a>
                    </div>
                    <div class="list">
                        <ul>
                            <li><a href="#">[할인혜택] 2주간 구매고객 5% 추가할인</a></li>
                            <li><a href="#">설 연휴 휴무 안내(1.31 ~ 2.2)</a></li>
                            <li>
                                <a href="#"
                                    >[신상품 입고] 22SS AMI 아미 빅 하트 로고 가디...</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="seller_media">
                <a href="https://m.youtube.com/watch?v=TeZAOqU6WXs">
                    <img
                        src="https://img.youtube.com/vi/TeZAOqU6WXs/maxresdefault.jpg"
                        alt="샵이미지"
                    />
                </a>
            </div>
            <div class="seller_write">
                <div class="code_box" ref="code_box">
                    <!--
                    test code 
                    판매자가 작성하는 html 영역
                    -->
                    <table class="list_table" style="table-layout: fixed; width: 100%">
                        <colgroup>
                            <col width="*" />
                            <col width="100" />
                        </colgroup>
                        <tbody>
                            <tr class="list_answer" style="display: table-row">
                                <td colspan="2" style="background: #fff">
                                    <div class="info_big_box">
                                        <div
                                            class="info_sub_box"
                                            style="text-align: center"
                                        >
                                            <div
                                                class="info_stitle"
                                                style="line-h: 1.2; margin-bottom: 20px"
                                            >
                                                <p
                                                    style="
                                                        font-size: 35px;
                                                        font-family: 'Nanum Myeongjo',
                                                            serif !important;
                                                    "
                                                >
                                                    FABSTYLE
                                                </p>
                                                <p
                                                    style="
                                                        font-size: 11px;
                                                        color: #999999;
                                                    "
                                                >
                                                    Premium Select Shop
                                                </p>
                                            </div>
                                            <p>
                                                <b
                                                    >No1. Premium Select Shop : clothing /
                                                    bag / shoes / accessories</b
                                                >
                                            </p>
                                            <br />
                                            <br />
                                            <p>FABSTYLE [팹스타일]</p>
                                            <p>
                                                팹스타일은 성수동에서 오프라인 매장을
                                                운영하고 있는 프리미엄 편집샵입니다.
                                            </p>
                                            <p>
                                                판매중인 모든 제품은 유럽 및 미주 브랜드
                                                본사 혹은 정식 유통업체를 통하여 구입된
                                                <font color="red"><b>100% 정품</b></font
                                                >임을 보증합니다.
                                            </p>
                                            <p>
                                                저희 제품은 한국정식매장에 입고되어 있는
                                                제품과 동일한 수입통관절차를 거쳐
                                                입고됩니다.
                                            </p>
                                            <p>
                                                매시즌 핫 트렌드 아이템과 함께 최고의
                                                만족감을 제공해드리도록 노력하겠습니다.
                                            </p>
                                            <p>&nbsp;</p>
                                            <p>&nbsp;</p>
                                        </div>
                                        <div class="info_sub_box">
                                            <p class="info_stitle">[정품보증]</p>
                                            <p>
                                                팹스타일에서 판매하는 모든 상품은
                                                시즌정식오더(Pre, Main Collection)를
                                                통하여 입고되는 정품 / 새제품으로
                                            </p>
                                            <p>
                                                아울렛 및 기타경로로 유통된 제품은 절대
                                                취급하지 않습니다.
                                            </p>
                                            <p>
                                                - 가품으로 판명될 시 2배보상 및 모든
                                                법적책임을 질 것을 약속드립니다.
                                            </p>
                                            <p>
                                                - <font color="red"><b>Siwy</b></font
                                                >의 경우, 정식수입원(키위미디어)으로부터
                                                공급받아
                                                <font color="red"
                                                    ><b>정품 홀로그램</b></font
                                                >이 부착되어 있습니다.
                                            </p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!--삭제[e]-->
                </div>
                <div class="btn_accordion">
                    <button
                        class="btn_more"
                        :class="{ on_btn: viewMore }"
                        @click="viewMoreBtn()"
                    >
                        판매자 소개 {{ btnMoreText }}
                    </button>
                </div>
            </div>
        </article>
        <article class="product_review_area">
            <div class="review_title_box">
                <span class="review_title_box__txt">판매자 리뷰</span>
                <span class="review_title_box__num">(1,532)</span>
            </div>
            <div class="review_score_header">
                <div class="review_score_header__inner_box">
                    <span class="module_star_point">
                        <i class="module_star_point__icon"></i>
                        <i class="module_star_point__icon"></i>
                        <i class="module_star_point__icon"></i>
                        <i class="module_star_point__icon"></i>
                        <i class="module_star_point__icon off"></i>
                    </span>
                    <span class="review_score_header__num_txt">4.0</span>
                </div>
            </div>
            <div class="review_score_detail">
                <div class="review_score_detail__inner_box">
                    <dl>
                        <dt>배송</dt>
                        <dd class="on_box">
                            <span class="review_score_detail__txt">적당해요</span>
                            <span class="review_score_detail__progress_box">
                                <progress
                                    class="review_score_detail__progress_bar"
                                    value="70"
                                    max="100"
                                ></progress>
                            </span>
                            <span class="review_score_detail__percent">70%</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>포장</dt>
                        <dd class="on_box">
                            <span class="review_score_detail__txt">좋아요</span>
                            <span class="review_score_detail__progress_box">
                                <progress
                                    class="review_score_detail__progress_bar"
                                    value="58"
                                    max="100"
                                ></progress>
                            </span>

                            <span class="review_score_detail__percent">58%</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>가격</dt>
                        <dd class="on_box">
                            <span class="review_score_detail__txt">적당해요</span>
                            <span class="review_score_detail__progress_box">
                                <progress
                                    class="review_score_detail__progress_bar"
                                    value="76"
                                    max="100"
                                ></progress>
                            </span>

                            <span class="review_score_detail__percent">76%</span>
                        </dd>
                    </dl>
                </div>
            </div>
            <div
                id="product_review_slider"
                class="product_slider swiper-container"
                ref="product_review_slider"
            >
                <div class="scroll_inner_box swiper-wrapper">
                    <div class="item_box swiper-slide">
                        <div class="module_star_point">
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon off"></i>
                        </div>
                        <div class="txt_box01">
                            <div class="txt_inner_box">
                                <div class="txt01">정사이즈예요</div>
                                <div class="txt02">
                                    제 신발 사이즈가 265인데 8로 가니깐 딱 맞았어요~ …
                                </div>
                            </div>
                            <div class="img_box">
                                <span
                                    class="img"
                                    style="
                                        background: url('https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500')
                                            center center no-repeat;
                                        background-size: cover;
                                    "
                                ></span>
                            </div>
                        </div>
                        <div class="txt_box02">
                            <ul>
                                <li>93***</li>
                                <li>2022.02.18</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item_box swiper-slide">
                        <div class="module_star_point">
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon off"></i>
                        </div>
                        <div class="txt_box01">
                            <div class="txt_inner_box">
                                <div class="txt01">정사이즈예요</div>
                                <div class="txt02">
                                    제 신발 사이즈가 265인데 8로 가니깐 딱 맞았어요~ …
                                </div>
                            </div>
                            <div class="img_box">
                                <span
                                    class="img"
                                    style="
                                        background: url('https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500')
                                            center center no-repeat;
                                        background-size: cover;
                                    "
                                ></span>
                            </div>
                        </div>
                        <div class="txt_box02">
                            <ul>
                                <li>93***</li>
                                <li>2022.02.18</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item_box swiper-slide">
                        <div class="module_star_point">
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon off"></i>
                        </div>
                        <div class="txt_box01">
                            <div class="txt_inner_box">
                                <div class="txt01">정사이즈예요</div>
                                <div class="txt02">
                                    제 신발 사이즈가 265인데 8로 가니깐 딱 맞았어요~ …
                                </div>
                            </div>
                            <div class="img_box">
                                <span
                                    class="img"
                                    style="
                                        background: url('https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500')
                                            center center no-repeat;
                                        background-size: cover;
                                    "
                                ></span>
                            </div>
                        </div>
                        <div class="txt_box02">
                            <ul>
                                <li>93***</li>
                                <li>2022.02.18</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item_box swiper-slide">
                        <div class="module_star_point">
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon"></i>
                            <i class="module_star_point__icon off"></i>
                        </div>
                        <div class="txt_box01">
                            <div class="txt_inner_box">
                                <div class="txt01">정사이즈예요</div>
                                <div class="txt02">
                                    제 신발 사이즈가 265인데 8로 가니깐 딱 맞았어요~ …
                                </div>
                            </div>
                            <div class="img_box">
                                <span
                                    class="img"
                                    style="
                                        background: url('https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500')
                                            center center no-repeat;
                                        background-size: cover;
                                    "
                                ></span>
                            </div>
                        </div>
                        <div class="txt_box02">
                            <ul>
                                <li>93***</li>
                                <li>2022.02.18</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn_link_box">
                <a href="/sellerReview">판매자 리뷰 전체보기</a>
            </div>
        </article>
        <article class="seller_shop_guide">
            <h3 class="title">오프라인 매장 안내</h3>
            <div class="desc">
                <div class="inner_box">
                    <span class="shop_name">펩스타일</span>
                    <span class="shop_address">서울 성동구 성수이로22길</span>
                </div>
                <p class="txt">
                    2009년부터 이태리, 미국의 라이센스 업체로부터 직수입 또는 국내의
                    정식수입원을 통하여 100% 정품만을 취급하고 있으며, 2016년 3월부터
                    롯데백화점과 계약하여 여러 브랜드를 공급하고 있어 상품의 퀄리티가
                    검증되었습니다.<br />
                    FABSTYLE은 이름 또한 ‘fabulous’의 약자로 고객들의 신뢰도를 얻고 있는
                    명품편집샵 입니다.
                </p>
            </div>
            <div class="sub_c_box">
                <h4 class="title">매장 사진</h4>
                <!-- 기능은 기존과 동일 -->
                <div class="shop_img">
                    <img
                        src="https://cdn.mustit.co.kr/lib/upload/shop/fabstyle77/2017/09/jymg/1505286377-54.jpg/_dims_/resize/250/cropcenter/250x160/composite/img_shop_watermark01_30"
                        alt=""
                    />
                </div>
            </div>
            <div class="sub_c_box">
                <h4 class="title">지도 보기</h4>
                <div id="offline_shop" class="seller_map_box"></div>
            </div>
        </article>
        <article class="bottom_popup_area">
            <div class="sub_page_header">
                <a class="sub_page_header__btn_back btn_popup_close">
                    <i class="sub_page_header__icon_box"
                        ><img
                            src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/navi-icon-close.svg"
                            alt="뒤로가기"
                    /></i>
                </a>
                <h2 class="sub_page_header__title">판매자 보상 각서</h2>
            </div>
            <div class="seller_memo">
                <div class="seller_memo__top">
                    <h3 class="seller_memo__title">
                        <img
                            src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/title_img_bestquality.png"
                            alt="정품인증"
                        />
                    </h3>
                    <p class="seller_memo__txt">
                        본인은 머스트잇에서 판매하는 모든 상품이 상표법 등에 법적 하자가
                        없는 정품임을 보장하며, 만일 위조상품(가품)임이 밝혀질 경우
                        민/형사상의 모든 책임을 지며 판매 가격의 2배를 보상할 것을
                        약속합니다.
                    </p>
                    <div class="seller_memo__sub_box">
                        <dl>
                            <dt>작성일</dt>
                            <dd>2021.08.13</dd>
                        </dl>
                        <dl>
                            <dt>작성자</dt>
                            <dd>s-project</dd>
                        </dl>
                    </div>
                    <div class="seller_memo__logo">
                        <img
                            src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_bi/bi_mustit_header.png"
                            alt="머스트잇 로고"
                        />
                    </div>
                </div>
                <div class="seller_memo__t_list">
                    <ul>
                        <li>본 각서는 판매자가 상품을 판매하는 일로부터 적용됩니다.</li>
                        <li>
                            본 판매자 보상 각서는 위조상품(가품) 판매로 인한 분쟁 발생 시
                            민사적 해결에 그 이유가 있습니다.
                        </li>
                        <li>
                            타인 명의를 도용하여 판매하는 경우에도 명의 도용에 대한 법적
                            책임까지 묻게 됩니다.
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    </section>
</template>

<script
    type="text/javascript"
    src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=xsyz6dkggu"
></script>
<script>
    import Swiper from 'swiper'
    export default {
        // components: {},
        data() {
            return {
                isActive: false,
                viewMore: false,
                btnMoreText: '더보기'
            }
        },
        mounted() {
            this.swiper = new Swiper(this.$refs.product_review_slider, {
                speed: 500,
                resizeObserver: true,
                slidesPerView: 'auto',
                freeMode: true,
                slideToClickedSlide: true,
                observer: true,
                observeParents: true
            })
        },
        methods: {
            classToggle() {
                this.isActive = !this.isActive
            },
            viewMoreBtn() {
                this.viewMore = !this.viewMore
                if (!this.viewMore) {
                    this.btnMoreText = '더보기'
                    this.$refs.code_box.classList.remove('on_box')
                } else {
                    this.btnMoreText = '접기'
                    this.$refs.code_box.classList.add('on_box')
                }
            },
            cuponBtn() {
                this.cuponDawn = !this.cuponDawn
            }
        }
    }
</script>
