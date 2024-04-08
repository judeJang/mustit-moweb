<template>
    <section class="product_detail_area common_css">
        <SubHeader title="상품 문의" />
        <article class="qna_seller_header">
            <div class="shop_info">
                <div class="shop_info__logo">
                    <img
                        src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/m/m_badge/badge_minishop_default.png"
                        alt="샵로고"
                    />
                </div>
                <div class="shop_info__desc">
                    <div class="shop_info__shop_name">S-PROJECT</div>
                    <div class="shop_info__txt_box">
                        <dl>
                            <dt>총 문의 응답 건수</dt>
                            <dd>5,319건</dd>
                        </dl>
                        <dl>
                            <dt>평균 응답 기간</dt>
                            <dd>1일 이내</dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div class="seller_state">
                <button type="button" class="seller_state__btn e_layer_popup">
                    <strong class="seller_state__txt01">문의 전 확인!</strong
                    ><span class="seller_state__txt02"
                        >판매자의 응답이 지연될 수 있습니다.</span
                    >
                </button>
            </div>
        </article>
        <article class="qna_seller_body">
            <div class="product_inquiry">
                <a href="#">상품문의하기</a>
            </div>
            <!-- 문의가 없는경우 [s] -->
            <div class="qna_list_none">
                <div class="qna_list_none__img">
                    <img
                        src="https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/m_icon/icon_vip_empty.svg"
                        alt=""
                    />
                </div>
                <div class="qna_list_none__txt">등록된 상품문의가 없습니다.</div>
            </div>
            <!-- 문의가 없는경우 [e] -->
            <div class="qna_accordion_list">
                <ul>
                    <li class="e_accordion">
                        <div class="qna_title">
                            <div class="qna_title_inner_box">
                                <span class="qna_title__txt">배송은 언제되나요?</span>
                                <span class="qna_title__dasc_box">
                                    <span class="qna_title__r_txt">답변대기</span>
                                    <span class="qna_title__id">chlwlfk***</span>
                                    <span class="qna_title__day">2022.02.18</span>
                                </span>
                            </div>
                        </div>
                        <div class="qna_desc">
                            <div class="qna_desc__inner_box">
                                <span class="qna_desc__txt"
                                    >오늘 주문하면 다음주 주중에 받을 수 있을까요? 선물
                                    포장 따로 신청하면 해주시나요?
                                </span>
                                <span class="qna_desc__day">2022.02.13</span>
                            </div>
                        </div>
                    </li>
                    <li class="e_accordion on_list">
                        <div class="qna_title">
                            <div class="qna_title_inner_box">
                                <span class="qna_title__txt"
                                    >오늘 주문하면 다음주 주중에 받을 수 있을까요? 선물
                                    포장 따로 신청하면 해주시나요?</span
                                >
                                <span class="qna_title__dasc_box">
                                    <span class="qna_title__r_txt reply_check"
                                        >답변완료</span
                                    >
                                    <span class="qna_title__id">chlwlfk***</span>
                                    <span class="qna_title__day">2022.02.18</span>
                                </span>
                            </div>
                        </div>
                        <div class="qna_desc">
                            <div class="qna_desc__inner_box">
                                <span class="qna_desc__txt"
                                    >오늘 주문하면 다음주 주중에 받을 수 있을까요? 선물
                                    포장 따로 신청하면 해주시나요?</span
                                >
                                <span class="qna_desc__day">2022.02.13</span>
                            </div>
                            <div class="qna_desc__inner_box reply">
                                <span class="qna_desc__txt"
                                    >사이즈 경우 사이즈표를 보고 주문해 주시면
                                    감사하겠습니다. 참고로 넉넉한 사이즈로 구매하시는 것이
                                    실패 확률이 적습니다.^^</span
                                >
                                <span class="qna_desc__day">2022.02.13</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="qna_title">
                            <div class="qna_title_inner_box">
                                <span class="qna_title__txt secret_icon_txt"
                                    >비밀글입니다.</span
                                >
                                <span class="qna_title__dasc_box">
                                    <span class="qna_title__r_txt reply_check"
                                        >답변완료</span
                                    >
                                    <span class="qna_title__id">chlwlfk***</span>
                                    <span class="qna_title__day">2022.02.18</span>
                                </span>
                            </div>
                        </div>
                    </li>
                    <li class="e_accordion on_list">
                        <div class="qna_title">
                            <div class="qna_title_inner_box">
                                <span class="qna_title__txt">배송 언제되나요?</span>
                                <span class="qna_title__dasc_box">
                                    <span class="qna_title__r_txt">답변대기</span>
                                    <span class="qna_title__id">chlwlfk***</span>
                                    <span class="qna_title__day">2022.02.18</span>
                                </span>
                            </div>
                        </div>
                        <div class="qna_desc">
                            <div class="qna_desc__inner_box">
                                <span class="qna_desc__txt"
                                    >오늘 주문하면 다음주 주중에 받을 수 있을까요? 선물
                                    포장 따로 신청하면 해주시나요?</span
                                >
                                <span class="qna_desc__day">2022.02.13</span>
                            </div>
                            <div class="qna_reply">
                                <from>
                                    <textarea
                                        class="qna_reply__txt_box"
                                        placeholder="답변을 입력하세요."
                                    ></textarea>

                                    <div class="qna_reply__btn_box">
                                        <div class="qna_reply__file_box">
                                            <label class="qna_reply__file_btn">
                                                <span class="qna_reply__flie_inner">
                                                    사진첨부
                                                    <input
                                                        type="file"
                                                        class="qna_reply__file"
                                                    />
                                                </span>
                                            </label>
                                            <input class="qna_reply__file_name" />
                                        </div>
                                        <div class="qna_reply__check_box">
                                            <label class="qna_reply__check_btn">
                                                <input type="checkbox" />
                                                <span class="qna_reply__txt">비밀글</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="qna_answer">
                                        <button>답변 등록</button>
                                    </div>
                                </from>
                            </div>
                        </div>
                    </li>
                    <li class="e_accordion">
                        <div class="qna_title">
                            <div class="qna_title_inner_box">
                                <span class="qna_title__txt"
                                    >오늘 주문하면 다음주 주중에 받을 수 있을까요? 선물
                                    포장 따로 신청하면 해주시나요?</span
                                >
                                <span class="qna_title__dasc_box">
                                    <span class="qna_title__r_txt reply_check"
                                        >답변완료</span
                                    >
                                    <span class="qna_title__id">chlwlfk***</span>
                                    <span class="qna_title__day">2022.02.18</span>
                                </span>
                            </div>
                        </div>
                        <div class="qna_desc">
                            <div class="qna_desc__inner_box">
                                <span class="qna_desc__txt"
                                    >오늘 주문하면 다음주 주중에 받을 수 있을까요? 선물
                                    포장 따로 신청하면 해주시나요?
                                    <img
                                        src="https://cdn.mustit.co.kr/review/2021/08/17/11316801_0_20210817212335_6762.jpeg/_dims_/resize/^500"
                                        alt=""
                                    />
                                </span>
                                <span class="qna_desc__day">2022.02.13</span>
                            </div>
                            <div class="qna_desc__inner_box reply">
                                <span class="qna_desc__txt"
                                    >사이즈 경우 사이즈표를 보고 주문해 주시면
                                    감사하겠습니다. 참고로 넉넉한 사이즈로 구매하시는 것이
                                    실패 확률이 적습니다.^^
                                    <img
                                        src="https://cdn.mustit.co.kr/review/2021/08/17/11316801_0_20210817212335_6762.jpeg/_dims_/resize/^500"
                                        alt=""
                                    />
                                </span>
                                <span class="qna_desc__day">2022.02.13</span>
                            </div>
                        </div>
                    </li>
                    <li class="e_accordion on_list">
                        <div class="qna_title">
                            <div class="qna_title_inner_box">
                                <span class="qna_title__txt secret_icon"
                                    >배송이 언제 되나요?</span
                                >
                                <span class="qna_title__dasc_box">
                                    <span class="qna_title__r_txt reply_check"
                                        >답변완료</span
                                    >
                                    <span class="qna_title__id">chlwlfk***</span>
                                    <span class="qna_title__day">2022.02.18</span>
                                </span>
                            </div>
                        </div>
                        <div class="qna_desc">
                            <div class="qna_desc__inner_box">
                                <span class="qna_desc__txt"
                                    >오늘 주문하면 다음주 주중에 받을 수 있을까요? 선물
                                    포장 따로 신청하면 해주시나요?</span
                                >
                                <span class="qna_desc__day">2022.02.13</span>
                            </div>
                            <div class="qna_desc__inner_box reply secret_box">
                                <span class="qna_desc__txt">비밀글입니다.</span>
                                <span class="qna_desc__day">2022.02.13</span>
                            </div>
                        </div>
                    </li>
                    <li class="e_accordion on_list">
                        <div class="qna_title">
                            <div class="qna_title_inner_box">
                                <span class="qna_title__txt">배송이 언제 되나요?</span>
                                <span class="qna_title__dasc_box">
                                    <span class="qna_title__r_txt reply_check"
                                        >답변완료</span
                                    >
                                    <span class="qna_title__id">chlwlfk***</span>
                                    <span class="qna_title__day">2022.02.18</span>
                                </span>
                            </div>
                        </div>
                        <div class="qna_desc">
                            <div class="qna_desc__inner_box">
                                <span class="qna_desc__txt"
                                    >오늘 주문하면 다음주 주중에 받을 수 있을까요? 선물
                                    포장 따로 신청하면 해주시나요?
                                    <img
                                        src="https://cdn.mustit.co.kr/review/2021/08/17/11316801_0_20210817212335_6762.jpeg/_dims_/resize/^500"
                                        alt=""
                                    />
                                </span>
                                <span class="qna_desc__day">2022.02.13</span>
                            </div>
                            <div class="qna_desc__inner_box reply">
                                <span class="qna_desc__txt"
                                    >사이즈 경우 사이즈표를 보고 주문해 주시면
                                    감사하겠습니다. 참고로 넉넉한 사이즈로 구매하시는 것이
                                    실패 확률이 적습니다.^^
                                    <img
                                        src="https://cdn.mustit.co.kr/review/2021/08/17/11316801_0_20210817212335_6762.jpeg/_dims_/resize/^500"
                                        alt=""
                                    />
                                </span>
                                <span class="qna_desc__day">2022.02.13</span>
                            </div>
                        </div>
                    </li>
                    <li class="e_accordion">
                        <div class="qna_title">
                            <div class="qna_title_inner_box">
                                <span class="qna_title__txt"
                                    >오늘 주문하면 다음주 주중에 받을 수 있을까요? 선물
                                    포장 따로 신청하면 해주시나요?</span
                                >
                                <span class="qna_title__dasc_box">
                                    <span class="qna_title__r_txt reply_check"
                                        >답변완료</span
                                    >
                                    <span class="qna_title__id">chlwlfk***</span>
                                    <span class="qna_title__day">2022.02.18</span>
                                </span>
                            </div>
                        </div>
                        <div class="qna_desc">
                            <div class="qna_desc__inner_box">
                                <span class="qna_desc__txt"
                                    >오늘 주문하면 다음주 주중에 받을 수 있을까요? 선물
                                    포장 따로 신청하면 해주시나요?
                                    <img
                                        src="https://cdn.mustit.co.kr/review/2021/08/17/11316801_0_20210817212335_6762.jpeg/_dims_/resize/^500"
                                        alt=""
                                    />
                                </span>
                                <span class="qna_desc__day">2022.02.13</span>
                            </div>
                            <div class="qna_desc__inner_box reply">
                                <span class="qna_desc__txt"
                                    >사이즈 경우 사이즈표를 보고 주문해 주시면
                                    감사하겠습니다. 참고로 넉넉한 사이즈로 구매하시는 것이
                                    실패 확률이 적습니다.^^
                                    <img
                                        src="https://cdn.mustit.co.kr/review/2021/08/17/11316801_0_20210817212335_6762.jpeg/_dims_/resize/^500"
                                        alt=""
                                    />
                                </span>
                                <span class="qna_desc__day">2022.02.13</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </article>
        <article class="product_layer_popup">
            <div class="product_layer_popup__inner_box">
                <div class="product_layer_popup__heeader">
                    <h3 class="product_layer_popup__title">문의 유의사항 안내</h3>
                    <span class="product_layer_popup__close"></span>
                </div>
                <p class="txt_box">
                    해당 판매자의 초근 상품문의 응답시간이 길어지고 있습니다. 답변이
                    지연될 수 있으니 상품문의 전 유의하시기 바랍니다.
                </p>
            </div>
            <div class="product_layer_popup__bg"></div>
        </article>
    </section>
</template>

<script>
    import SubHeader from '@/components/SubHeader.vue'
    export default {
        components: {
            SubHeader
        },
        data() {
            return {}
        },
        mounted() {},
        methods: {}
    }
    // 	$('.qna_reply__file_box').each(function(){
    // 	$(this).find('.qna_reply__file').on('change',function(){
    // 		var fileName = $(this).val();
    // 		console.log(fileName)
    // 		$(this).parents('.qna_reply__file_box').find(".qna_reply__file_name").val(fileName);
    // 	});
    // })
</script>
