<template>
    <section class="product_detail_area">
        <SubTopVipHeader title="상품상세" />
        <div class="floating_top_btn" ref="floatingTop">
            <a href="#">
                <img
                    src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/floating-top.svg"
                    alt="맨위로가기"
                />
            </a>
        </div>
        <article class="product_img_box" ref="productImgBox">
            <div class="goods_img_slider" ref="productImg">
                <div
                    id="product_img_slider"
                    class="product_slider_swiper swiper-container"
                    ref="productSlider"
                >
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide" v-for="i in 5" :key="i">
                            <div
                                class="product_img"
                                style="
                                    background: url(https://cdn.mustit.co.kr/lib/upload/product/LOUTIQUE-/2020/06/1593418202-28.jpg/_dims_/resize/500x500/extent/500x500)
                                        center center no-repeat;
                                    background-size: contain;
                                "
                            ></div>
                        </li>
                    </ul>
                    <div class="product_slider_swiper__page_num">
                        <span class="current">1</span> /
                        <span class="total">4</span>
                    </div>
                </div>
            </div>
            <div class="product_label">
                <div class="product_label__hot_deal">핫딜상품</div>
            </div>
            <!-- <div class="product_label">
                <div class="product_label__sale">5% 할인</div>
            </div>
            <div class="product_label">
                <div class="product_label__sale">30,000원 할인</div>
            </div> -->
        </article>
        <article class="product_time_sale">
            <div class="product_time_sale__time">
                <span class="inner_box">
                    타임 세일<span class="count_hour">23</span>:<span class="count_min"
                        >21</span
                    >:<span class="count_sec">53</span> 남음
                </span>
            </div>
            <div class="product_time_sale_day">
                <span class="inner_box">
                    할인 기간이
                    <strong class="color_red">
                        <span class="count_day">12</span>일
                        <span class="count_hour">12</span>시간
                        <span class="count_min">40</span>분
                        <span class="count_sec">53</span>초
                    </strong>
                    남았어요!
                </span>
            </div>
        </article>
        <article class="product_info">
            <div class="info_header">
                <h2 class="info_header__name">
                    <span class="inner_box">
                        <span class="brand_name brand_google">Maison Margiela</span>
                    </span>
                </h2>

                <!-- 공유하기,찜 -->
                <div class="info_header__btn_box">
                    <button
                        class="btn_wish e_btn_wish"
                        :class="[isActive ? 'wish_list_on ' : 'wish_list_off ']"
                        @click="classToggle()"
                    ></button>

                    <button class="btn_share"></button>
                </div>
            </div>
            <p class="goods_desc">
                [럭스앤홀릭] 몽클레어 그레노블 BEVERLEY 비벌리 패딩자켓 (아이보리)
            </p>
            <div class="goods_score">
                <div class="goods_score__star_num">
                    <span class="star score_10">
                        <i class="comp_icon_star_12"></i>
                    </span>
                    <span class="star score_10">
                        <i class="comp_icon_star_12"></i>
                    </span>
                    <span class="star score_10">
                        <i class="comp_icon_star_12"></i>
                    </span>
                    <span class="star score_10">
                        <i class="comp_icon_star_12"></i>
                    </span>
                    <span class="star score_5">
                        <i class="comp_icon_star_12"></i>
                    </span>

                    <!-- <i class="icon_review_star_on"></i>
                    <i class="icon_review_star_on"></i>
                    <i class="icon_review_star_on"></i>
                    <i class="icon_review_star_on"></i>
                    <i class="icon_review_star_off"></i> -->
                </div>
                <span class="goods_score__review_num">리뷰 523개</span>
            </div>

            <!-- 할인가 -->
            <!-- <div class="goods_price_area">
                <div class="goods_price">
                    <div class="goods_price__txt">
                        <span class="txt_box fc_gray2">할인가</span>
                    </div>
                    <div class="goods_price__price">
                        <span class="align_item">
                            <span class="font-bold">2,590,000</span>
                            <span class="won">원</span>
                            <span class="discount">24%</span>
                        </span>
                        <del class="goods_cost gap_m2">2,830,000원</del>
                    </div>
                </div>
            </div> -->

            <!-- 즉시할인가 -->
            <!-- <div class="goods_price_area">
                <div class="goods_price">
                    <div class="goods_price__txt">
                        <span class="txt_box fc_gray2">즉시할인가</span>
                    </div>
                    <div class="goods_price__price">
                        <span class="align_item">
                            <span class="font-bold">2,590,000</span>
                            <span class="won">원</span>
                            <span class="discount">24%</span>
                        </span>
                        <del class="goods_cost gap_m2">2,830,000원</del>
                    </div>
                </div>
            </div> -->

            <!-- 할인가,최대혜택가 -->
            <div class="goods_price_area">
                <div class="goods_price">
                    <div class="goods_price__txt">
                        <span class="txt_box fc_gray5">할인가</span>
                    </div>
                    <div class="goods_price__price">
                        <span class="align_item">
                            <span class="font_normal"> 2,590,000 </span>
                            <span class="won">원</span>
                            <s class="goods_cost">2,830,000원</s>
                        </span>
                    </div>
                </div>
                <div class="goods_price">
                    <div class="goods_price__txt">
                        <span class="txt_box fc_red">
                            최대혜택가
                            <i class="icon_help e_layer_popup"> </i>
                        </span>
                    </div>
                    <div class="goods_price__price">
                        <span class="align_item">
                            <span class="font-bold"> 2,590,000 </span>
                            <span class="won">원</span>
                            <span class="discount">24%</span>
                        </span>
                        <div class="max_sale_price goods_price__cupon">
                            <div
                                class="max_sale_price__cupon"
                                @click="cuponBtn"
                                v-if="cuponDawn"
                            >
                                <button class="max_sale_price__btn_box">할인받기</button>
                            </div>
                            <div class="max_sale_price__cupon_check" v-else>
                                <span class="max_sale_price__btn_box"> 할인적용 </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 할인가,최대혜택가 -->
            <!-- <div class="goods_price_area">
                <div class="goods_price">
                    <div class="goods_price__txt">
                        <span class="txt_box fc_gray5">즉시할인가</span>
                    </div>
                    <div class="goods_price__price">
                        <span class="align_item">
                            <span class="font_normal"> 2,590,000 </span>
                            <span class="won">원</span>
                            <s class="goods_cost">2,830,000원</s>
                        </span>
                    </div>
                </div>
                <div class="goods_price">
                    <div class="goods_price__txt">
                        <span class="txt_box fc_red">
                            최대 혜택가
                            <i class="icon_help e_layer_popup"></i>
                        </span>
                    </div>
                    <div class="goods_price__price">
                        <span class="align_item">
                            <span class="font-bold">2,590,000</span
                            ><span class="won">원</span><span class="discount">24%</span>
                        </span>
                        <div class="max_sale_price goods_price__cupon">
                            <div class="max_sale_price__cupon">
                                <button class="max_sale_price__btn_box">할인받기</button>
                            </div>
                            <div class="max_sale_price__cupon_check">
                                <span class="max_sale_price__btn_box"> 할인적용 </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->

            <!-- 판매가 -->
            <!-- <div class="goods_price_area">
                <div class="goods_price">
                    <div class="goods_price__txt">
                        <span class="txt_box fc_gray2">판매가</span>
                    </div>
                    <div class="goods_price__price">
                        <span class="align_item">
                            <span class="font-bold"> 2,590,000 </span>
                            <span class="won">원</span>
                        </span>
                    </div>
                </div>
            </div> -->

            <!-- 즉시할인가 -->
            <!-- <div class="goods_price_area">
                <div class="goods_price">
                    <div class="goods_price__txt">
                        <span class="txt_box fc_gray2">즉시할인가</span>
                    </div>
                    <div class="goods_price__price">
                        <span class="align_item">
                            <span class="font-bold">2,590,000</span>
                            <span class="won">원</span>
                        </span>
                    </div>
                </div>
            </div> -->

            <div class="pulg_goods_order">
                <div class="pulg_goods_order__select_area">
                    <div class="pulg_goods_order__select_content" ref="orderMenu">
                        <div class="goods_select">
                            <div class="goods_select__size_tip">
                                <button class="goods_select__size_btn">
                                    사이즈 참고표
                                </button>
                            </div>
                            <div class="goods_select__option_box">
                                <div
                                    class="detail_option_select"
                                    ref="optionMenu"
                                    @click="optionMenu()"
                                >
                                    <div class="title_select_box">옵션을 선택하세요</div>
                                    <div class="select_option_box">
                                        <ul class="inner_box">
                                            <li class="option_list">
                                                <span class="select_option_box__option">
                                                    블랙 - 레드와펜 / S(남성)
                                                </span>
                                            </li>
                                            <li class="option_list">
                                                <span class="select_option_box__option">
                                                    블랙 - 레드와펜 / M(남성)
                                                </span>
                                            </li>
                                            <li class="option_list">
                                                <span class="select_option_box__option">
                                                    블랙 - 레드와펜 / L(남성)
                                                </span>
                                            </li>
                                            <li class="option_list goods_almost">
                                                <span class="select_option_box__option">
                                                    블랙 - 레드와펜 / L(남성)
                                                </span>
                                                <span class="select_option_box_state">
                                                    품절임박
                                                </span>
                                            </li>
                                            <li class="option_list goods_almost">
                                                <span class="select_option_box__option">
                                                    네이비 - 레드와펜 / S(남성)
                                                </span>
                                                <span class="select_option_box_state">
                                                    품절임박
                                                </span>
                                            </li>
                                            <li class="option_list goods_soldout">
                                                <span class="select_option_box__option">
                                                    네이비 - 레드와펜 / M(남성)
                                                </span>
                                                <span class="select_option_box_state">
                                                    품절
                                                </span>
                                            </li>
                                            <li class="option_list goods_soldout">
                                                <span class="select_option_box__option">
                                                    네이비 - 레드와펜 / L(남성)
                                                </span>
                                                <span class="select_option_box_state">
                                                    품절
                                                </span>
                                            </li>
                                            <li class="option_list goods_soldout">
                                                <span class="select_option_box__option">
                                                    네이비 - 레드와펜 / XL(남성)
                                                </span>
                                                <span class="select_option_box_state">
                                                    품절
                                                </span>
                                            </li>
                                            <li class="option_list goods_soldout">
                                                <span class="select_option_box__option">
                                                    네이비 - 레드와펜 / XXL(남성)
                                                </span>
                                                <span class="select_option_box_state">
                                                    품절
                                                </span>
                                            </li>
                                            <li class="option_list goods_soldout">
                                                <span class="select_option_box__option">
                                                    네이비 - 레드와펜 / XXXL(남성)
                                                </span>
                                                <span class="select_option_box_state">
                                                    품절
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="detail_price_info">
                                    <div class="item_box">
                                        <div class="item_header">
                                            <span class="item_header__name">
                                                아이보리 / IT34
                                            </span>
                                            <span class="item_header__delete">
                                                <span class="item_header__btn_delete">
                                                </span>
                                            </span>
                                        </div>
                                        <div class="item_price_info">
                                            <span class="item_price_info__length">
                                                <div class="item_price_info__length_btn">
                                                    <button
                                                        class="item_price_info__btn_minus"
                                                    ></button>
                                                    <input
                                                        type="number"
                                                        class="item_price_info__num"
                                                        value="1"
                                                    />
                                                    <button
                                                        class="item_price_info__btn_plus"
                                                    ></button>
                                                </div>
                                            </span>
                                            <span class="item_price_info__price_box">
                                                <span class="item_price_info__price">
                                                    1,230,000
                                                </span>
                                                <span class="item_price_info__won">
                                                    원
                                                </span>
                                            </span>
                                        </div>
                                        <div class="gift_option_select">
                                            <select class="select_box" name="" id="">
                                                <option value="">
                                                    사은품을 선택해 주세요
                                                </option>
                                                <option value="">
                                                    보테가 베네타 위빙 키링
                                                </option>
                                                <option value="">보테가 옵션1</option>
                                                <option value="">보테가 옵션2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="item_box">
                                        <div class="item_header">
                                            <span class="item_header__name">
                                                아이보리 / IT34
                                            </span>
                                            <span class="item_header__delete">
                                                <span
                                                    class="item_header__btn_delete"
                                                ></span>
                                            </span>
                                        </div>
                                        <div class="item_price_info">
                                            <span class="item_price_info__length">
                                                <div class="item_price_info__length_btn">
                                                    <button
                                                        class="item_price_info__btn_minus"
                                                    ></button>
                                                    <input
                                                        type="number"
                                                        class="item_price_info__num"
                                                        value="1"
                                                    />
                                                    <button
                                                        class="item_price_info__btn_plus"
                                                    ></button>
                                                </div>
                                            </span>
                                            <span class="item_price_info__price_box">
                                                <span class="item_price_info__price">
                                                    1,230,000
                                                </span>
                                                <span class="item_price_info__won">
                                                    원
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="item_box">
                                        <div class="item_header">
                                            <span class="item_header__name">
                                                아이보리 / IT34
                                            </span>
                                            <span class="item_header__delete">
                                                <span
                                                    class="item_header__btn_delete"
                                                ></span>
                                            </span>
                                        </div>
                                        <div class="item_price_info">
                                            <span class="item_price_info__length">
                                                <div class="item_price_info__length_btn">
                                                    <button
                                                        class="item_price_info__btn_minus"
                                                    ></button>
                                                    <input
                                                        type="number"
                                                        class="item_price_info__num"
                                                        value="1"
                                                    />
                                                    <button
                                                        class="item_price_info__btn_plus"
                                                    ></button>
                                                </div>
                                            </span>
                                            <span class="item_price_info__price_box">
                                                <span class="item_price_info__price">
                                                    1,230,000
                                                </span>
                                                <span class="item_price_info__won">
                                                    원
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="detail_total_box">
                                    <div class="max_sale_price detail_total_box__cupon">
                                        <div
                                            class="max_sale_price__cupon"
                                            @click="cuponBtn"
                                            v-if="cuponDawn"
                                        >
                                            <button class="max_sale_price__btn_box">
                                                할인받기
                                            </button>
                                        </div>
                                        <div class="max_sale_price__cupon_check" v-else>
                                            <span class="max_sale_price__btn_box">
                                                할인적용
                                            </span>
                                        </div>
                                    </div>
                                    <div class="detail_total_box__total_price">
                                        <span class="txt">총 금액</span>
                                        <span class="price">1,230,000</span>
                                        <span class="won">원</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pulg_goods_order__select_bg" ref="orderMenuBg"></div>
                </div>

                <!-- 장바구니 담았을때 -->
                <div class="layer_cart_box cartPop" ref="cartPop">
                    <div class="layer_cart_box__inner_box">
                        <p class="layer_cart_box__txt">장바구니에 상품이 담겼습니다.</p>
                        <a href="#" class="layer_cart_box__link">장바구니 가기</a>
                    </div>
                </div>

                <div class="goods_order_btn">
                    <span class="goods_order_btn__box btn_cart">
                        <button
                            class="goods_order_btn__button"
                            @click="
                                {
                                    orderBtn(), cartBtn()
                                }
                            "
                        >
                            장바구니
                        </button>
                    </span>
                    <span class="goods_order_btn__box btn_buy">
                        <button class="goods_order_btn__button" @click="orderBtn()">
                            바로구매
                        </button>
                    </span>
                </div>

                <!-- <div class="goods_order_btn">
                    <span class="goods_order_btn__box btn_soldout">
                        <button class="goods_order_btn__button">품절상품</button>
                    </span>
                </div> -->
            </div>
            <div class="app_download">
                <button class="app_download__btn">
                    <dl>
                        <dt>앱할인가</dt>
                        <dd>
                            <span class="price">2,630,000</span>
                            <span class="won">원</span>
                        </dd>
                    </dl>
                    <span class="txt">APP 다운받기</span>
                </button>
            </div>
            <div class="size_search">
                <button class="size_search__btn">고객님 사이즈를 찾아보세요!</button>
            </div>

            <div class="folding_area">
                <div class="folding_box frist_box">
                    <div class="folding_box__header">
                        <div class="inner_box icon_as">
                            <div class="txt_box color_mint">
                                이 상품은 머스트잇이 무상 A/S를 제공합니다.
                            </div>
                        </div>
                        <div class="folding_box__btn e_folding_action">
                            <button class="btn_img">
                                <img
                                    src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_icon/icon_arrow_s16.svg"
                                    alt="더보기"
                                />
                            </button>
                        </div>
                    </div>
                    <div class="folding_box__desc">
                        <div class="list_box">
                            <ul>
                                <li>구매 후 6개월 이내 무상 A/S</li>
                                <li>신뢰할 수 있는 백화점 수준의 A/S 서비스</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="folding_box">
                    <div class="folding_box__header">
                        <div class="inner_box icon_benefit_point">
                            <div class="txt_box">
                                <i class="icon_img"></i>
                                최대 13,000원 정립
                            </div>
                        </div>
                        <div class="folding_box__btn e_folding_action">
                            <button class="btn_img">
                                <img
                                    src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/icon_arrow_s16.svg"
                                    alt="더보기"
                                />
                            </button>
                        </div>
                    </div>
                    <div class="folding_box__desc">
                        <span class="txt">
                            상품 수령 후 7일 이내 구매결정 및 포토리뷰 작성 시 지급
                        </span>
                    </div>
                </div>
                <div class="folding_box">
                    <div class="folding_box__header">
                        <div class="inner_box icon_creditcard">
                            <div class="txt_box">
                                <i class="icon_img"></i>
                                최대 8개월 (1,568,500원 X 8개월) 무이자 할부
                                <button class="btn_card_info">
                                    카드사별 무이자 할부 혜택 보기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 국내배송 -->
                <!-- <div class="folding_box">
                    <div class="folding_box__header">
                        <div class="inner_box icon_delivery">
                            <div class="txt_box color_red">
                                <i class="icon_img"></i>
                                01/04(화) ~ 01/05(수) 도착예상
                                <i class="icon_help e_layer_popup"></i>
                            </div>
                            <div class="txt_box">무료배송 / 국내배송</div>
                        </div>
                    </div>
                </div>
                <div class="folding_box">
                    <div class="folding_box__header">
                        <div class="inner_box icon_delivery">
                            <div class="txt_box color_red">
                                <i class="icon_img"></i>
                                01/04(화) ~ 01/05(수) 도착예상
                                <i class="icon_help e_layer_popup"></i>
                            </div>
                            <div class="txt_box">4,000원 / 국내배송</div>
                        </div>
                        <div class="folding_box__btn e_folding_action">
                            <button class="btn_img">
                                <img
                                    src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/icon_arrow_s16.svg"
                                    alt="더보기"
                                />
                            </button>
                        </div>
                    </div>
                    <div class="folding_box__desc">
                        <p class="txt">추가 배송비 : 제주도 3,000원, 도서산간 5,000원</p>
                    </div>
                </div>
                <div class="folding_box">
                    <div class="folding_box__header">
                        <div class="inner_box icon_delivery">
                            <div class="txt_box color_red">
                                <i class="icon_img"></i>
                                01/04(화) ~ 01/05(수) 도착예상<i
                                    class="icon_help e_layer_popup"
                                ></i>
                            </div>
                            <div class="txt_box">4,000원 / 국내배송 / 화물직배송</div>
                        </div>
                        <div class="folding_box__btn e_folding_action">
                            <button class="btn_img">
                                <img
                                    src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/icon_arrow_s16.svg"
                                    alt="더보기"
                                />
                            </button>
                        </div>
                    </div>
                    <div class="folding_box__desc">
                        <div class="list_box">
                            <h3 class="title">화물직배송이란?</h3>
                            <ul>
                                <li>
                                    택배로 배송이 불가한 상품으로 화물직배송만 가능한
                                    상품입니다.
                                </li>
                                <li>해당 상품은 묶음배송이 불가합니다.</li>
                                <li class="important">
                                    배송불가 지역 : 제주도, 도서간지역
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> -->
                <div class="folding_box">
                    <div class="folding_box__header">
                        <div class="inner_box icon_delivery">
                            <div class="txt_box color_red">
                                <i class="icon_img"></i>
                                01/04(화) ~ 01/05(수) 도착예상
                                <i class="icon_help e_layer_popup"></i>
                            </div>
                            <div class="txt_box">무료배송 / 국내배송</div>
                        </div>
                        <div class="folding_box__btn e_folding_action">
                            <button class="btn_img">
                                <img
                                    src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/icon_arrow_s16.svg"
                                    alt="더보기"
                                />
                            </button>
                        </div>
                    </div>
                    <div class="folding_box__desc">
                        <p class="txt">추가 배송비 : 제주도 3,000원, 도서산간 5,000원</p>
                    </div>
                    <div class="bundle_delivery">
                        <button class="btn">묶음배송 가능상품 보기</button>
                    </div>
                </div>
                <!-- 해외배송 -->
                <!-- <div class="folding_box">
                    <div class="folding_box__header">
                        <div class="inner_box icon_delivery_03">
                            <div class="txt_box color_red">
                                <i class="icon_img"></i>
                                평균 배송 6일 소요<i class="icon_help e_layer_popup"></i>
                            </div>
                            <div class="txt_box">무료배송 / 해외배송 / 관부가세 포함</div>
                        </div>
                        <div class="folding_box__btn e_folding_action">
                            <button class="btn_img">
                                <img
                                    src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/icon_arrow_s16.svg"
                                    alt="더보기"
                                />
                            </button>
                        </div>
                    </div>
                    <div class="folding_box__desc">
                        <p class="txt">
                            관부가세 미포함인 경우 구매금액이 약 $150이 넘을 시 관부가세가
                            발생할 수 있습니다.<br />구매한 여러 개의 상품이 동일한 날짜에
                            통관될 경우 합산과세가 발생할 수 있습니다.
                        </p>
                    </div>
                </div>
                <div class="folding_box">
                    <div class="folding_box__header">
                        <div class="inner_box icon_delivery_03">
                            <div class="txt_box color_red">
                                <i class="icon_img"></i>
                                평균 배송 6일 소요<i class="icon_help e_layer_popup"></i>
                            </div>
                            <div class="txt_box">
                                1개당 27,000원 / 해외배송 / 관부가세 미포함
                            </div>
                        </div>
                        <div class="folding_box__btn e_folding_action">
                            <button class="btn_img">
                                <img
                                    src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/icon_arrow_s16.svg"
                                    alt="더보기"
                                />
                            </button>
                        </div>
                    </div>
                    <div class="folding_box__desc">
                        <p class="txt">
                            관부가세 미포함인 경우 구매금액이 약 $150이 넘을 시 관부가세가
                            발생할 수 있습니다.<br />구매한 여러 개의 상품이 동일한 날짜에
                            통관될 경우 합산과세가 발생할 수 있습니다.
                        </p>
                    </div>
                </div>
                <div class="folding_box">
                    <div class="folding_box__header">
                        <div class="inner_box icon_delivery_03">
                            <div class="txt_box color_red">
                                <i class="icon_img"></i>
                                평균 배송 6일 소요<i class="icon_help e_layer_popup"></i>
                            </div>
                            <div class="txt_box">
                                1개당 3,000원 / 국내배송 / 해외배송 / 화물직배송 /
                                관부가세 미포함
                            </div>
                        </div>
                        <div class="folding_box__btn e_folding_action">
                            <button class="btn_img">
                                <img
                                    src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/icon_arrow_s16.svg"
                                    alt="더보기"
                                />
                            </button>
                        </div>
                    </div>
                    <div class="folding_box__desc">
                        <p class="txt">
                            관부가세 미포함인 경우 구매금액이 약 $150이 넘을 시 관부가세가
                            발생할 수 있습니다.<br />구매한 여러 개의 상품이 동일한 날짜에
                            통관될 경우 합산과세가 발생할 수 있습니다.
                        </p>
                        <div class="list_box">
                            <h3 class="title">화물직배송이란?</h3>
                            <ul>
                                <li>
                                    택배로 배송이 불가한 상품으로 화물직배송만 가능한
                                    상품입니다.
                                </li>
                                <li>해당 상품은 묶음배송이 불가합니다.</li>
                                <li class="important">
                                    배송불가 지역 : 제주도, 도서간지역
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> -->
                <!-- 예약배송 -->
                <div class="folding_box">
                    <div class="folding_box__header">
                        <div class="inner_box icon_delivery_02">
                            <div class="txt_box">
                                <i class="icon_img"></i>
                                <span class="color_red">예약배송 상품입니다.</span>
                                <span>(2022-01-20 발송예정)</span>
                            </div>
                        </div>
                        <div class="folding_box__btn e_folding_action">
                            <button class="btn_img">
                                <img
                                    src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/icon_arrow_s16.svg"
                                    alt="더보기"
                                />
                            </button>
                        </div>
                    </div>
                    <div class="folding_box__desc">
                        <p class="reservation">예약주문기간 : 2022-01-04 ~ 2022-01-10</p>
                        <p class="txt">
                            본 상품은 예약배송 상품으로 배송일이 지정되어 있으니 구매 시
                            참고해 주시기 바랍니다.
                        </p>
                    </div>
                </div>
                <!-- 깜짝배송 -->
                <div class="folding_box">
                    <div class="folding_box__header">
                        <div class="inner_box icon_delivery_quick">
                            <div class="txt_box">
                                <i class="icon_img"></i>
                                <span class="color_mint">깜짝배송 가능 상품입니다.</span>
                            </div>
                            <div class="txt_box txt">
                                (수도권 지역 13:00 ~ 17:30 출고가능, 주말/공유일 제외)
                            </div>
                        </div>
                        <div class="folding_box__btn e_folding_action">
                            <button class="btn_img">
                                <img
                                    src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/icon_arrow_s16.svg"
                                    alt="더보기"
                                />
                            </button>
                        </div>
                    </div>
                    <div class="folding_box__desc">
                        <div class="list_box">
                            <h3 class="title">깜짝배송이란?</h3>
                            <ul>
                                <li>
                                    머스트잇 전용 퀵배송으로 수도권(서울,경기,인천)만 이용
                                    가능
                                </li>
                                <li>당일 평균 3시간이내 수령 가능한 특급배송 서비스</li>
                                <li>
                                    기본 퀵비용 7,000원부터 (거리에 따라 배송비 상이함)
                                </li>
                                <li>
                                    최종 퀵비용 주문결제 페이지 > 깜짝배송 클릭 시 확인
                                    가능
                                </li>
                            </ul>
                            <button class="more_btn">자세히 보기</button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        <article class="seller_info_area section_gap">
            <div class="seller_info_area__shop_box">
                <div class="inner_box">
                    <i class="icon_seller"></i>
                    <span class="seller_info_area__shop_name"> naviglio39 </span>
                </div>
                <div class="inner_box">
                    <a href="#" class="seller_info_area__shop_link">판매자 자세히보기</a>
                </div>
            </div>
            <div class="seller_info_area__review">
                <dl class="seller_info_area__inner_box">
                    <dt class="seller_info_area__tit">판매된 상품</dt>
                    <dd class="seller_info_area__num">315,368개</dd>
                </dl>
                <dl class="seller_info_area__inner_box">
                    <dt class="seller_info_area__tit">구매자 만족도</dt>
                    <dd class="seller_info_area__num">95점</dd>
                </dl>
                <dl class="seller_info_area__inner_box">
                    <dt class="seller_info_area__tit">전체 구매후기</dt>
                    <dd class="seller_info_area__num">15,368개</dd>
                </dl>
            </div>
        </article>
        <article class="selling_event">
            <h3 class="selling_event__title">연관 기획전</h3>
            <div class="selling_event__list">
                <div class="selling_event__inner_box">
                    <a href="#" class="selling_event__link">
                        <span class="selling_event__event_title">
                            ESSENTIAL PREMIUM OUTER
                        </span>
                        <span class="selling_event__event_desc">
                            올 겨울 꼭 필요한 프리미엄 아우터를 만날 기회
                        </span>
                    </a>
                </div>
                <div class="selling_event__inner_box">
                    <a href="#" class="selling_event__link">
                        <span class="selling_event__event_title">
                            ESSENTIAL PREMIUM OUTER ESSENTIAL PREMIUM OUTER
                        </span>
                        <span class="selling_event__event_desc">
                            올 겨울 꼭 필요한 프리미엄 아우터를 만날 기회 올 겨울 꼭
                            필요한 프리미엄 아우터를 만날 기회
                        </span>
                    </a>
                </div>
            </div>
        </article>
        <article class="marketing_banner">
            <div class="comp_img_swiper swiper-container" ref="compImg">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide" v-for="i in 5" :key="i">
                        <a href="#" class="swiper_link"
                            ><img
                                src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_banner/marketing_banner_img04.png"
                                alt="product"
                                class="cover_img"
                        /></a>
                    </li>
                </ul>
                <div class="comp-pagination"></div>
            </div>
        </article>
        <div class="recopick_wrap">
            <div class="observe-visibility abs-full w-full">
                <div class="main_title white_bg">
                    <p class="main_title__name fs-18">고객님께 추천하는 상품</p>
                </div>
                <div class="relative">
                    <article class="small_product">
                        <div class="swiper-container comp_free_swiper">
                            <ul class="swiper-wrapper">
                                <li class="swiper-slide" v-for="i in 10" :key="i">
                                    <a
                                        href="https://lc.recopick.com/1/banner/3330/pick?uid=90791855.16395402&amp;source=13522341&amp;pick=11794864&amp;method=4&amp;channel=detail_top&amp;reco_type=item-item&amp;product_type=R&amp;reco_list=%5B%2211794864%22%2C%2213015739%22%2C%2212509090%22%2C%2213521038%22%2C%2213598724%22%2C%2213571484%22%2C%2213590459%22%2C%2213270291%22%2C%2213509790%22%2C%2213571488%22%2C%2213582898%22%2C%2213509787%22%5D&amp;tag=V"
                                        class="d-block swiper_link undefined"
                                    >
                                        <div class="img_wrap relative">
                                            <img
                                                data-src="https://cdn.mustit.co.kr/lib/upload/product/DenimShop/2020/06/1593250651-58.jpg/_dims_/resize/250x250/extent/250x250"
                                                class="abs-center cover-image observe-visibility"
                                                src="https://cdn.mustit.co.kr/lib/upload/product/DenimShop/2020/06/1593250651-58.jpg/_dims_/resize/250x250/extent/250x250"
                                            />
                                        </div>
                                        <div class="info_container">
                                            <p class="brand">Dsquared2</p>
                                            <p class="name">
                                                20SS 레드레더패치 연청 워싱진 스케이터
                                                74LB0664
                                            </p>
                                            <div class="price">
                                                <p class="discount_price">418,000</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </article>
                </div>
            </div>
        </div>
        <article class="vip_desc_top" ref="descContainer">
            <div class="item_info_desc box_border_top">
                <div class="inner_box">
                    <h3 class="title">상세정보</h3>
                    <div class="desc_box">
                        <dl>
                            <dt>상품번호</dt>
                            <dd>25831874</dd>
                        </dl>
                        <dl>
                            <dt>상품상태</dt>
                            <dd>새상품</dd>
                        </dl>
                        <dl>
                            <dt>원산지</dt>
                            <dd>ITALIA. ROMANIA</dd>
                        </dl>
                        <dl>
                            <dt>출고지</dt>
                            <dd>서울 광진구</dd>
                        </dl>
                        <dl>
                            <dt>판매형태</dt>
                            <dd>뱡행수입</dd>
                        </dl>
                    </div>
                </div>

                <div class="seller_state">
                    <button type="button" class="seller_state__btn">
                        <strong class="seller_state__txt01">구매 전 확인!</strong>
                        <span class="seller_state__txt02">
                            주문 전 재고 확인을 권장합니다.
                        </span>
                        <!-- <span class="seller_state__txt02">주문 전 꼭 상품문의를 해주세요.</span>
					    <span class="seller_state__txt02">예상보다 배송이 늦어질 수 있습니다.</span> -->
                    </button>
                </div>

                <div class="inner_box">
                    <div class="alarm_box">
                        <h4 class="alarm_box__title">
                            택배사 파업으로 인한 배송 및 회수 지연 안내
                        </h4>
                        <div class="alarm_box__txt_box">
                            <span class="alarm_box__txt">
                                파업지역 발송하는 상품의 경우 한진/경동/우체국으로
                                변경되실 수 있고, 평균배송일보다 3~4일 지체될 수 있는 점
                                양해바랍니다.
                            </span>
                        </div>
                    </div>
                </div>

                <div class="seller_write">
                    <div class="code_box" ref="code_box">
                        <table
                            class="list_table"
                            style="width: 100%; table-layout: fixed"
                        >
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
                                                    style="
                                                        line-h: 1.2;
                                                        margin-bottom: 20px;
                                                    "
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
                                                    <b>
                                                        No1. Premium Select Shop :
                                                        clothing / bag / shoes /
                                                        accessories
                                                    </b>
                                                </p>
                                                <br />
                                                <br />
                                                <p>FABSTYLE [팹스타일]</p>
                                                <p>
                                                    팹스타일은 성수동에서 오프라인 매장을
                                                    운영하고 있는 프리미엄 편집샵입니다.
                                                </p>
                                                <p>
                                                    판매중인 모든 제품은 유럽 및 미주
                                                    브랜드 본사 혹은 정식 유통업체를
                                                    통하여 구입된
                                                    <font color="red"
                                                        ><b>100% 정품</b></font
                                                    >임을 보증합니다.
                                                </p>
                                                <p>
                                                    저희 제품은 한국정식매장에 입고되어
                                                    있는 제품과 동일한 수입통관절차를 거쳐
                                                    입고됩니다.
                                                </p>
                                                <p>
                                                    매시즌 핫 트렌드 아이템과 함께 최고의
                                                    만족감을 제공해드리도록
                                                    노력하겠습니다.
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
                                                    아울렛 및 기타경로로 유통된 제품은
                                                    절대 취급하지 않습니다.
                                                </p>
                                                <p>
                                                    - 가품으로 판명될 시 2배보상 및 모든
                                                    법적책임을 질 것을 약속드립니다.
                                                </p>
                                                <p>
                                                    -
                                                    <font color="red"><b>Siwy</b></font
                                                    >의 경우,
                                                    정식수입원(키위미디어)으로부터
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
                    <div class="declare-wrapper ptb-40" v-if="viewMore" ref="declare">
                        <span class="c-g136 fs-12 d-inline-block ptb-5"
                            >해당 상품정보에 문제가 있으면 알려주세요.</span
                        >
                        <button type="button" class="btn declare-button">신고하기</button>
                    </div>
                    <div class="btn_accordion">
                        <button
                            class="btn_more"
                            :class="{ on_btn: viewMore }"
                            @click="viewMoreBtn()"
                        >
                            상품정보 {{ btnMoreText }}
                        </button>
                    </div>
                </div>
            </div>
        </article>

        <article class="vip_revie vip_review_top" ref="reviewContainer">
            <div class="product_review_area box_border_top">
                <div class="review_title_box">
                    <span class="review_title_box__txt">리뷰</span>
                    <span class="review_title_box__num">(1,532)</span>
                </div>
                <div class="review_score_box">
                    <div class="review_score_header">
                        <div class="review_score_header__inner_box">
                            <div class="module_star_point">
                                <span class="star score_10">
                                    <i class="comp_icon_star_20"></i>
                                </span>
                                <span class="star score_10">
                                    <i class="comp_icon_star_20"></i>
                                </span>
                                <span class="star score_10">
                                    <i class="comp_icon_star_20"></i>
                                </span>
                                <span class="star score_10">
                                    <i class="comp_icon_star_20"></i>
                                </span>
                                <span class="star score_7">
                                    <i class="comp_icon_star_20"></i>
                                </span>
                            </div>
                            <span class="review_score_header__num_txt">4.0</span>
                        </div>
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
                                    <div class="txt02">
                                        제 신발 사이즈가 265인데 8로 가니깐 딱 맞았어요~ …
                                        제 신발 사이즈가 265인데 8로 가니깐 딱 맞았어요~ …
                                        제 신발 사이즈가 265인데 8로 가니깐 딱 맞았어요~ …
                                        제 신발 사이즈가 265인데 8로 가니깐 딱 맞았어요~ …
                                    </div>
                                </div>
                                <div class="img_box">
                                    <span
                                        class="img"
                                        style="
                                            background: url('https://cdn.mustit.co.kr/review/2020/10/18/dlfrl900_0_1602988741_6.jpeg/_dims_/resize/^500')
                                                center center no-repeat;
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
                        <div class="item_box swiper-slide" v-for="i in 5" :key="i">
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
                                        제 신발 사이즈가 265제 신발 사이즈가 265제 신발
                                        사이즈가 265 제 신발 사이즈가 265제 신발 사이즈가
                                        265
                                    </div>
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
                    <a href="#">리뷰 전체보기</a>
                </div>
            </div>
        </article>
        <article class="review_slider box_border_top">
            <div class="title">
                <strong class="color_red">#Maison Kitsune</strong> 의 <br />
                <strong class="color_red">#자켓</strong> 리뷰를 모아 봤어요!
            </div>
            <div class="slider_box" style="display: none">
                <div class="inner_box">
                    <div class="item_box">
                        <span href="#">
                            <span
                                class="img_box"
                                style="
                                    background: url('https://cdn.mustit.co.kr/dev_server/review/2022/03/21/13522359_0_20220321145838_6225.jpeg/_dims_/resize/^500/cropcenter/500x500')
                                        center center no-repeat;
                                "
                            ></span>
                            <span class="txt_box">
                                해외 배송 5일 만에 오고 실물 예뻐요 미쳤…
                            </span>
                            <span class="id_box">93***</span>
                        </span>
                    </div>
                    <div class="item_box">
                        <a href="#">
                            <span
                                class="img_box"
                                style="
                                    background: url('https://cdn.mustit.co.kr/dev_server/review/2022/03/21/13522359_0_20220321145838_6225.jpeg/_dims_/resize/^500/cropcenter/500x500')
                                        center center no-repeat;
                                "
                            ></span>
                            <span class="txt_box">
                                해외 배송 5일 만에 오고 실물 예뻐요 미쳤…
                            </span>
                            <span class="id_box">93***</span>
                        </a>
                    </div>
                    <div class="item_box">
                        <a href="#">
                            <span
                                class="img_box"
                                style="
                                    background: url('https://cdn.mustit.co.kr/dev_server/review/2022/03/21/13522359_0_20220321145838_6225.jpeg/_dims_/resize/^500/cropcenter/500x500')
                                        center center no-repeat;
                                    background-size: cover;
                                "
                            ></span>
                            <span class="txt_box"
                                >해외 배송 5일 만에 오고 실물 예뻐요 미쳤…</span
                            >
                            <span class="id_box">93***</span>
                        </a>
                    </div>
                    <div class="item_box">
                        <a href="#" class="btn_list_go">
                            <span class="txt">전체보기</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="list_box">
                <a href="#" v-for="j in 3" :key="j">
                    <div
                        class="img_box"
                        style="
                            background: url('https://cdn.mustit.co.kr/dev_server/review/2022/03/21/13522359_0_20220321145838_6225.jpeg/_dims_/resize/^500/cropcenter/500x500')
                                center center no-repeat;
                        "
                    ></div>
                    <p class="txt_box">
                        <template v-if="j == 0 || j == 1">
                            너무 이뻐요ㅜ 딱 생각한
                        </template>
                        <template v-else>
                            게다가 판매자분이 넘 너무 이뻐요ㅜ 딱 생각한 그대로!! 게다가
                            판매자분이 넘
                        </template>
                    </p>
                    <p class="id_box">93***</p>
                </a>
            </div>
            <a href="#" class="more_btn">스타일 리뷰 전체보기</a>
        </article>
        <article class="my_size_check box_border_top">
            <div class="my_size_check__inner">
                <button type="button" class="btn_size_check">
                    <span class="txt"
                        >나에게 맞는 <strong>Maison Kitsune</strong>의
                        <strong>자켓</strong> 사이즈가 궁금하시다면?</span
                    >
                </button>
            </div>
        </article>
        <article class="vip_sub_menu_area box_border_top">
            <div class="menu_list">
                <ul>
                    <li>
                        <a href="#">
                            상품문의
                            <span class="num">(24)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">배송/반품/교환 안내</a>
                    </li>
                    <li>
                        <a href="#">상품 고시 정보</a>
                    </li>
                </ul>
            </div>
        </article>
        <article class="seller_shop_info box_border_top">
            <div class="seller_shop_info__inner">
                <div class="seller_shop_info__logo">
                    <img
                        src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_badge/badge_minishop_default.png"
                        alt="샵로고"
                    />
                </div>
                <div class="seller_shop_info__desc">
                    <div class="seller_shop_info__shop_name">
                        <span class="txt">S-PROJECT</span>
                    </div>
                    <div class="seller_shop_info__shop_tag">
                        <ul>
                            <li>배송관리우수</li>
                            <li>문의답변우수</li>
                            <li>재고관리우수</li>
                        </ul>
                    </div>
                    <div class="seller_shop_info__txt_box">
                        <dl>
                            <dt>구매 만족도</dt>
                            <dd>만족해요(87점)<i class="icon_help"></i></dd>
                        </dl>
                        <dl>
                            <dt>판매된 상품</dt>
                            <dd>24,338개</dd>
                        </dl>
                        <dl>
                            <dt>단골회원</dt>
                            <dd>24,338개</dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div class="seller_shop_info__btn_list">
                <div class="seller_shop_info__btn_inner">
                    <ul>
                        <li>
                            <button type="button" class="btn_seller">판매자소개</button>
                        </li>
                        <li>
                            <button type="button" class="btn_shop">판매자샵</button>
                        </li>
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
            </div>
        </article>

        <article class="product_slider_container box_border_top">
            <div class="product_slider_container__title">
                <span class="txt"> <strong>스웨이드셔츠</strong>를 찾고 계신가요? </span>
                <a class="more_btn">전체보기</a>
            </div>
            <div
                id="product_slider_box01"
                class="product_slider_container__item_slider swiper-container"
                ref="product_slider_box01"
            >
                <div class="item_inner swiper-wrapper">
                    <a class="swiper-slide item_box" href="#">
                        <div class="img_box">
                            <img
                                src="https://cdn.mustit.co.kr/lib/upload/product/hjbae/2022/02/4f3aeb428354895bed4b62ecefdec9a6.png/_dims_/resize/250x250/extent/250x250"
                                alt="상품이미지"
                                class="cover_img"
                            />
                        </div>
                        <div class="txt_box">
                            <div class="brand">A.P.C.</div>
                            <div class="desc">
                                [TEST-009]
                                웹91.6/앱88.3/네89.7_정상가유_판매자별할인_네이버할인_잇쿠폰_단골할인_상품쿠폰(일반)_앱할인
                            </div>
                            <div class="price_box">
                                <span class="goods_price">17,721,000</span>
                                <span class="discount">36%</span>
                            </div>
                            <del class="goods_price_del">17,721,000</del>
                        </div>
                    </a>
                    <a class="swiper-slide item_box" href="#">
                        <div class="img_box">
                            <img
                                src="https://cdn.mustit.co.kr/lib/upload/product/hjbae/2022/02/4f3aeb428354895bed4b62ecefdec9a6.png/_dims_/resize/250x250/extent/250x250"
                                alt="상품이미지"
                                class="cover_img"
                            />
                        </div>
                        <div class="txt_box">
                            <div class="brand">A.P.C.</div>
                            <div class="desc">
                                [TEST-009]
                                웹91.6/앱88.3/네89.7_정상가유_판매자별할인_네이버할인_잇쿠폰_단골할인_상품쿠폰(일반)_앱할인
                            </div>
                            <div class="price_box">
                                <span class="goods_price">17,721,000</span>
                                <span class="discount">36%</span>
                            </div>
                            <del class="goods_price_del">17,721,000</del>
                        </div>
                    </a>
                    <a class="swiper-slide item_box" href="#">
                        <div class="img_box">
                            <img
                                src="https://cdn.mustit.co.kr/lib/upload/product/hjbae/2022/02/4f3aeb428354895bed4b62ecefdec9a6.png/_dims_/resize/250x250/extent/250x250"
                                alt="상품이미지"
                                class="cover_img"
                            />
                        </div>
                        <div class="txt_box">
                            <div class="brand">A.P.C.</div>
                            <div class="desc">
                                [TEST-009]
                                웹91.6/앱88.3/네89.7_정상가유_판매자별할인_네이버할인_잇쿠폰_단골할인_상품쿠폰(일반)_앱할인
                            </div>
                            <div class="price_box">
                                <span class="goods_price">17,721,000</span>
                                <span class="discount">36%</span>
                            </div>
                            <del class="goods_price_del">17,721,000</del>
                        </div>
                    </a>
                    <a class="swiper-slide item_box" href="#">
                        <div class="img_box">
                            <img
                                src="https://cdn.mustit.co.kr/lib/upload/product/hjbae/2022/02/4f3aeb428354895bed4b62ecefdec9a6.png/_dims_/resize/250x250/extent/250x250"
                                alt="상품이미지"
                                class="cover_img"
                            />
                        </div>
                        <div class="txt_box">
                            <div class="brand">A.P.C.</div>
                            <div class="desc">
                                [TEST-009]
                                웹91.6/앱88.3/네89.7_정상가유_판매자별할인_네이버할인_잇쿠폰_단골할인_상품쿠폰(일반)_앱할인
                            </div>
                            <div class="price_box">
                                <span class="goods_price">17,721,000</span>
                                <span class="discount">36%</span>
                            </div>
                            <del class="goods_price_del">17,721,000</del>
                        </div>
                    </a>
                    <a class="swiper-slide item_box" href="#">
                        <div class="img_box">
                            <img
                                src="https://cdn.mustit.co.kr/lib/upload/product/hjbae/2022/02/4f3aeb428354895bed4b62ecefdec9a6.png/_dims_/resize/250x250/extent/250x250"
                                alt="상품이미지"
                                class="cover_img"
                            />
                        </div>
                        <div class="txt_box">
                            <div class="brand">A.P.C.</div>
                            <div class="desc">
                                [TEST-009]
                                웹91.6/앱88.3/네89.7_정상가유_판매자별할인_네이버할인_잇쿠폰_단골할인_상품쿠폰(일반)_앱할인
                            </div>
                            <div class="price_box">
                                <span class="goods_price">17,721,000</span>
                                <span class="discount">36%</span>
                            </div>
                            <del class="goods_price_del">17,721,000</del>
                        </div>
                    </a>
                    <a class="swiper-slide item_box" href="#">
                        <div class="img_box">
                            <img
                                src="https://cdn.mustit.co.kr/lib/upload/product/hjbae/2022/02/4f3aeb428354895bed4b62ecefdec9a6.png/_dims_/resize/250x250/extent/250x250"
                                alt="상품이미지"
                                class="cover_img"
                            />
                        </div>
                        <div class="txt_box">
                            <div class="brand">A.P.C.</div>
                            <div class="desc">
                                [TEST-009]
                                웹91.6/앱88.3/네89.7_정상가유_판매자별할인_네이버할인_잇쿠폰_단골할인_상품쿠폰(일반)_앱할인
                            </div>
                            <div class="price_box">
                                <span class="goods_price">17,721,000</span>
                                <span class="discount">36%</span>
                            </div>
                            <del class="goods_price_del">17,721,000</del>
                        </div>
                    </a>
                </div>
            </div>
        </article>

        <article class="product_slider_container box_border_top">
            <div class="product_slider_container__title">
                <span class="txt"> <strong>Maison Kitsune</strong> 주문 많은 상품 </span>
                <a class="more_btn">전체보기</a>
            </div>
            <div
                id="product_slider_box02"
                class="product_slider_container__item_slider swiper-container"
                ref="product_slider_box02"
            >
                <div class="item_inner swiper-wrapper">
                    <a class="swiper-slide item_box" href="#">
                        <div class="img_box">
                            <img
                                src="https://cdn.mustit.co.kr/lib/upload/product/hjbae/2022/02/4f3aeb428354895bed4b62ecefdec9a6.png/_dims_/resize/250x250/extent/250x250"
                                alt="상품이미지"
                                class="cover_img"
                            />
                        </div>
                        <div class="txt_box">
                            <div class="brand">A.P.C.</div>
                            <div class="desc">
                                [TEST-009]
                                웹91.6/앱88.3/네89.7_정상가유_판매자별할인_네이버할인_잇쿠폰_단골할인_상품쿠폰(일반)_앱할인
                            </div>
                            <div class="price_box">
                                <span class="goods_price">17,721,000</span>
                                <span class="discount">36%</span>
                            </div>
                            <del class="goods_price_del">17,721,000</del>
                        </div>
                    </a>
                    <a class="swiper-slide item_box" href="#">
                        <div class="img_box">
                            <img
                                src="https://cdn.mustit.co.kr/lib/upload/product/hjbae/2022/02/4f3aeb428354895bed4b62ecefdec9a6.png/_dims_/resize/250x250/extent/250x250"
                                alt="상품이미지"
                                class="cover_img"
                            />
                        </div>
                        <div class="txt_box">
                            <div class="brand">A.P.C.</div>
                            <div class="desc">
                                [TEST-009]
                                웹91.6/앱88.3/네89.7_정상가유_판매자별할인_네이버할인_잇쿠폰_단골할인_상품쿠폰(일반)_앱할인
                            </div>
                            <div class="price_box">
                                <span class="goods_price">17,721,000</span>
                                <span class="discount">36%</span>
                            </div>
                            <del class="goods_price_del">17,721,000</del>
                        </div>
                    </a>
                    <a class="swiper-slide item_box" href="#">
                        <div class="img_box">
                            <img
                                src="https://cdn.mustit.co.kr/lib/upload/product/hjbae/2022/02/4f3aeb428354895bed4b62ecefdec9a6.png/_dims_/resize/250x250/extent/250x250"
                                alt="상품이미지"
                                class="cover_img"
                            />
                        </div>
                        <div class="txt_box">
                            <div class="brand">A.P.C.</div>
                            <div class="desc">
                                [TEST-009]
                                웹91.6/앱88.3/네89.7_정상가유_판매자별할인_네이버할인_잇쿠폰_단골할인_상품쿠폰(일반)_앱할인
                            </div>
                            <div class="price_box">
                                <span class="goods_price">17,721,000</span>
                                <span class="discount">36%</span>
                            </div>
                            <del class="goods_price_del">17,721,000</del>
                        </div>
                    </a>
                    <a class="swiper-slide item_box" href="#">
                        <div class="img_box">
                            <img
                                src="https://cdn.mustit.co.kr/lib/upload/product/hjbae/2022/02/4f3aeb428354895bed4b62ecefdec9a6.png/_dims_/resize/250x250/extent/250x250"
                                alt="상품이미지"
                                class="cover_img"
                            />
                        </div>
                        <div class="txt_box">
                            <div class="brand">A.P.C.</div>
                            <div class="desc">
                                [TEST-009]
                                웹91.6/앱88.3/네89.7_정상가유_판매자별할인_네이버할인_잇쿠폰_단골할인_상품쿠폰(일반)_앱할인
                            </div>
                            <div class="price_box">
                                <span class="goods_price">17,721,000</span>
                                <span class="discount">36%</span>
                            </div>
                            <del class="goods_price_del">17,721,000</del>
                        </div>
                    </a>
                    <a class="swiper-slide item_box" href="#">
                        <div class="img_box">
                            <img
                                src="https://cdn.mustit.co.kr/lib/upload/product/hjbae/2022/02/4f3aeb428354895bed4b62ecefdec9a6.png/_dims_/resize/250x250/extent/250x250"
                                alt="상품이미지"
                                class="cover_img"
                            />
                        </div>
                        <div class="txt_box">
                            <div class="brand">A.P.C.</div>
                            <div class="desc">
                                [TEST-009]
                                웹91.6/앱88.3/네89.7_정상가유_판매자별할인_네이버할인_잇쿠폰_단골할인_상품쿠폰(일반)_앱할인
                            </div>
                            <div class="price_box">
                                <span class="goods_price">17,721,000</span>
                                <span class="discount">36%</span>
                            </div>
                            <del class="goods_price_del">17,721,000</del>
                        </div>
                    </a>
                    <a class="swiper-slide item_box" href="#">
                        <div class="img_box">
                            <img
                                src="https://cdn.mustit.co.kr/lib/upload/product/hjbae/2022/02/4f3aeb428354895bed4b62ecefdec9a6.png/_dims_/resize/250x250/extent/250x250"
                                alt="상품이미지"
                                class="cover_img"
                            />
                        </div>
                        <div class="txt_box">
                            <div class="brand">A.P.C.</div>
                            <div class="desc">
                                [TEST-009]
                                웹91.6/앱88.3/네89.7_정상가유_판매자별할인_네이버할인_잇쿠폰_단골할인_상품쿠폰(일반)_앱할인
                            </div>
                            <div class="price_box">
                                <span class="goods_price">17,721,000</span>
                                <span class="discount">36%</span>
                            </div>
                            <del class="goods_price_del">17,721,000</del>
                        </div>
                    </a>
                </div>
            </div>
        </article>

        <article class="vip_content_area section_gap">
            <h3 class="vip_content_area__title">WHY MUST’IT</h3>
            <div class="vip_content_area__inner">
                <div class="vip_content_area__left_banner">
                    <a href="#">
                        <img
                            src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_banner/m_vip_banner.jpg"
                            alt="국내 온라인 명품 플랫폼 거래액 1위"
                        />
                    </a>
                </div>
                <div class="vip_content_area__right_banner">
                    <div class="inner_box sub_img01">
                        <a href="#">
                            <span class="sub_title">무상 A/S 서비스</span>
                            <span class="sub_txt">사후관리도 저희가 해드릴게요~</span>
                        </a>
                    </div>
                    <div class="inner_box sub_img02">
                        <a href="#">
                            <span class="sub_title">200% 책임 보상제</span>
                            <span class="sub_txt">정품이 아니라면 무조건 책임 보상!</span>
                        </a>
                    </div>
                    <div class="inner_box sub_img03">
                        <a href="#">
                            <span class="sub_title">200% 책임 보상제</span>
                            <span class="sub_txt">정품이 아니라면 무조건 책임 보상!</span>
                        </a>
                    </div>
                </div>
            </div>
        </article>

        <article class="bottom_popup_area">
            <div class="sub_page_header">
                <a class="sub_page_header__btn_back btn_popup_close">
                    <i class="sub_page_header__icon_box">
                        <img
                            src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/navi-icon-close.svg"
                            alt="닫기"
                        />
                    </i>
                </a>
                <h3 class="sub_page_header__title">판매자 정보</h3>
            </div>
            <div class="info_content">
                <div class="info_content__inner_box">
                    <div class="info_content__table">
                        <table>
                            <colgroup>
                                <col width="104px" />
                                <col width="*" />
                            </colgroup>
                            <tbody class="th_left td_left">
                                <tr>
                                    <th>상호명</th>
                                    <td>ANEMONE UK OFFICE LTD</td>
                                </tr>
                                <tr>
                                    <th>대표자</th>
                                    <td>송용욱</td>
                                </tr>
                                <tr>
                                    <th>전화번호</th>
                                    <td>44-759963****</td>
                                </tr>
                                <tr>
                                    <th>사업자번호</th>
                                    <td>11635418</td>
                                </tr>
                                <tr>
                                    <th>영업소재지</th>
                                    <td>
                                        off 17,Units 1-3 Wyvern Estate, beverley way, New
                                        Malden, United Kingdom
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="info_content__p_txt">
                        머스트잇은 안전한 거래환경 제공 및 직거래 사고방지를 위해 구매전
                        연락처 노출을 방지하고 있습니다. 구매전 상품 및 배송관련 문의는
                        상품문의를 통해 문의해 주시기 바랍니다.
                    </p>
                </div>
            </div>
        </article>
    </section>
</template>
<style lang="scss">
    .max_sale_price__cupon_check {
        display: block !important;
    }
    .product_detail_area {
        padding-bottom: 84px;
    }
    .product_detail_area {
        .goods_select__size_tip {
            + .goods_select__option_box {
                .detail_price_info {
                    margin-top: 16px;
                    height: 167px;
                }
            }
        }
        .detail_price_info {
            height: 199px;
        }
    }
    .layer_cart_box {
        transform: opacity 1;
        &.cart_pop_on {
            opacity: 1;
            display: block !important;
        }
        &.cart_pop_off {
            opacity: 0;
        }
    }
    select {
        -webkit-appearance: none;
        -webkit-border-radius: 0;
        margin: 0;
    }
</style>
<script>
    import Swiper from 'swiper'
    import SubTopVipHeader from '@/components/temp/SubTopVipHeader.vue'
    export default {
        components: {
            SubTopVipHeader
        },
        data() {
            return {
                isActive: false,
                viewMore: false,
                orderMenu: false,
                btnMoreText: '더보기',
                optionSelect: false,
                cuponDawn: true,
                scrollPostion: 0
            }
        },
        mounted() {
            this.$refs.cartPop.classList.add('cart_pop_on')
            const _length = this.$refs.productSlider.length
            this.swiper = new Swiper(this.$refs.productSlider, {
                speed: 500,
                resizeObserver: true,
                spaceBetween: 0,
                loop: _length <= 1 ? false : true, //배너가 1개 이하라면
                followFinger: _length <= 1 ? false : true, //배너가 1개 이하라면
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                pagination: {
                    el: '.product_slider_swiper__page_num',
                    type: 'fraction'
                }
            })
            this.compImg = new Swiper(this.$refs.compImg, {
                resizeObserver: true,
                loop: true,
                pagination: {
                    el: document.querySelector('.comp-pagination'),
                    clickable: true
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                }
            })
            this.swiper = new Swiper(this.$refs.product_review_slider, {
                speed: 500,
                resizeObserver: true,
                slidesPerView: 'auto',
                freeMode: true,
                slideToClickedSlide: true,
                observer: true,
                observeParents: true
            })
            this.swiper = new Swiper(this.$refs.product_slider_box01, {
                speed: 500,
                resizeObserver: true,
                slidesPerView: 'auto',
                freeMode: true,
                slideToClickedSlide: true,
                observer: true,
                observeParents: true
            })
            this.swiper = new Swiper(this.$refs.product_slider_box02, {
                speed: 500,
                resizeObserver: true,
                slidesPerView: 'auto',
                freeMode: true,
                slideToClickedSlide: true,
                observer: true,
                observeParents: true
            })

            const btnDesc = document.querySelector('.gun_sub_menu__btn_desc')
            const btnReview = document.querySelector('.gun_sub_menu__btn_review')
            const productImgBox = this.$refs.productImgBox
            const productImg = this.$refs.productImg
            const gnbBox = document.querySelector('.product_header')
            const descContainer = this.$refs.descContainer
            const reviewContainer = this.$refs.reviewContainer
            const gnbHeight = gnbBox.offsetHeight
            const descTop = descContainer.offsetTop - gnbHeight
            const descHeight = descTop + descContainer.offsetHeight
            const reviewTop = reviewContainer.offsetTop - gnbHeight
            const reviewHeight = reviewTop + reviewContainer.offsetHeight

            document.addEventListener('scroll', () => {
                let scrollTop = document.documentElement.scrollTop
                let imgOffsetTop = productImgBox.offsetTop
                let imgHeight = productImgBox.offsetHeight - 100
                let imgScrollTop = scrollTop - imgOffsetTop
                let calc = (scrollTop / imgHeight) * 1
                let calc2 = (imgScrollTop / imgHeight) * 100
                let gnbOpacity = document.querySelectorAll(
                    '.product_header__title , .img_opacity'
                )

                if (scrollTop >= imgOffsetTop) {
                    gnbBox.classList.add('scroll_on')
                } else if (scrollTop < imgOffsetTop) {
                    gnbBox.classList.remove('scroll_on')
                }

                if (scrollTop >= imgOffsetTop && imgHeight > scrollTop) {
                    for (let i = 0, n = gnbOpacity.length; i < n; i++) {
                        gnbOpacity[i].style.opacity = calc
                    }
                    productImg.style.transform = 'translate(0,' + calc2 + 'px)'
                    gnbBox.classList.remove('gnb_shadow')
                    this.$refs.floatingTop.style.display = 'none'
                } else if (scrollTop > imgHeight) {
                    for (let i = 0, n = gnbOpacity.length; i < n; i++) {
                        gnbOpacity[i].style.opacity = '1'
                    }
                    gnbBox.classList.add('gnb_shadow')
                    this.$refs.floatingTop.style.display = 'block'
                } else if (scrollTop < imgOffsetTop) {
                    for (let i = 0, n = gnbOpacity.length; i < n; i++) {
                        gnbOpacity[i].style.opacity = '0'
                    }
                    productImg.style.transform = 'translate(0,0px)'
                }

                if (scrollTop <= descTop) {
                    gnbBox.classList.remove('sub_menu_on')
                } else {
                    gnbBox.classList.add('sub_menu_on')

                    if (scrollTop >= descTop && scrollTop <= descHeight) {
                        btnReview.classList.remove('on_btn')
                        btnDesc.classList.add('on_btn')
                    } else if (scrollTop >= reviewTop && scrollTop <= reviewHeight) {
                        btnDesc.classList.remove('on_btn')
                        btnReview.classList.add('on_btn')
                    } else {
                        btnReview.classList.remove('on_btn')
                    }
                }

                let accordionBtn = document.querySelectorAll('.e_folding_action')
                accordionBtn.forEach((el, index) => {
                    el.onclick = () => {
                        accordionBtn[index].classList.toggle('folding_on')
                        let accordionDesc = accordionBtn[index]
                            .closest('.folding_box')
                            .querySelector('.folding_box__desc')
                        accordionDesc.style.display =
                            accordionDesc.style.display === 'block' ? 'none' : 'block'
                    }
                })
                // menuOpen(){
                //     $('.pulg_goods_order__select_content').addClass('menu_on');
                //     $('.pulg_goods_order__select_bg').fadeIn();
                //     $('body').addClass('body_scroll, scroll_control');
                //     $('#buyRealToolBtn').show();
                //     $('#buyToolBtn').hide();

                // }
            })

            btnDesc.addEventListener('click', function () {
                window.scrollTo({ top: descTop + 10, left: 0, behavior: 'smooth' })
            })
            btnReview.addEventListener('click', function () {
                window.scrollTo({ top: reviewTop + 10, left: 0, behavior: 'smooth' })
            })
            // this.$refs.orderBtn.addEventListener('click', function () {

            //     // $('.pulg_goods_order__select_bg').fadeIn();
            //     // $('body').addClass('body_scroll, scroll_control');
            //     // $('#buyRealToolBtn').show();
            //     // $('#buyToolBtn').hide();
            // })
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
                    this.$refs.code_box.declare.style.display = 'none'
                } else {
                    this.btnMoreText = '접기'
                    this.$refs.code_box.classList.add('on_box')
                    this.$refs.code_box.declare.style.display = 'block'
                }
            },
            cuponBtn() {
                this.cuponDawn = !this.cuponDawn
            },
            orderBtn() {
                this.orderMenu = !this.orderMenu
                if (!this.orderMenu) {
                    this.$refs.orderMenu.classList.remove('menu_on')
                    this.$refs.orderMenuBg.style.display = 'none'
                } else {
                    this.$refs.orderMenu.classList.add('menu_on')
                    this.$refs.orderMenuBg.style.display = 'block'
                }
            },
            cartBtn() {
                if (!this.orderMenu) {
                    this.$refs.cartPop.classList.add('cart_pop_on')
                }
                setTimeout(() => {
                    this.$refs.cartPop.classList.remove('cart_pop_on')
                }, 2000)
            },
            optionMenu() {
                this.optionSelect = !this.optionSelect
                if (!this.optionSelect) {
                    this.$refs.optionMenu.classList.remove('option_active')
                } else {
                    this.$refs.optionMenu.classList.add('option_active')
                }
            }
        }
    }
</script>
