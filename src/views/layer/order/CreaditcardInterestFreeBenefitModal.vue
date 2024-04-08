<template>
    <section class="layer_all">
        <header>
            <button type="button" class="layer_close" @click="modalClose()"></button>
            <h2>카드사 무이자 할부 혜택</h2>
        </header>
        <div class="layer_container">
            <article class="inner_container creditcard_benefit_container">
                <p class="dot">5만원 이상 결제 시 무이자 할부 정보입니다.</p>
                <p class="dot">
                    개인사업자/법인/체크/선불/기프트/하이브리드/은행계열카드 등의 경우
                    무이자할부 혜택이 적용되지 않습니다.
                </p>
                <p class="dot">카드사 및 금융감독기관에 의해 변경될 수 있습니다.</p>
                <h3>무이자 할부</h3>
                <div class="table_wrap">
                    <table>
                        <colgroup>
                            <col style="width: 50%" />
                            <col style="width: 50%" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>카드사</th>
                                <th>할부기간</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <i class="icon_creditcard_company_bundle_100 kb"></i>
                                </td>
                                <td><p>2~7개월</p></td>
                            </tr>
                            <tr>
                                <td>
                                    <i
                                        class="icon_creditcard_company_bundle_100 shinhan"
                                    ></i>
                                </td>
                                <td><p>2~3개월</p></td>
                            </tr>
                            <tr>
                                <td>
                                    <i
                                        class="icon_creditcard_company_bundle_100 samsung"
                                    ></i>
                                </td>
                                <td><p>2~3개월</p></td>
                            </tr>
                            <tr>
                                <td>
                                    <i
                                        class="icon_creditcard_company_bundle_100 hyundai"
                                    ></i>
                                </td>
                                <td><p>2~7개월</p></td>
                            </tr>
                            <tr>
                                <td>
                                    <i
                                        class="icon_creditcard_company_bundle_100 woori"
                                    ></i>
                                </td>
                                <td><p>2~7개월</p></td>
                            </tr>
                            <tr>
                                <td>
                                    <i class="icon_creditcard_company_bundle_100 nh"></i>
                                </td>
                                <td><p>2~8개월</p></td>
                            </tr>
                            <tr>
                                <td>
                                    <i class="icon_creditcard_company_bundle_100 bc"></i>
                                </td>
                                <td><p>2~7개월</p></td>
                            </tr>
                            <tr>
                                <td>
                                    <i
                                        class="icon_creditcard_company_bundle_100 lotte"
                                    ></i>
                                </td>
                                <td><p>2~4개월</p></td>
                            </tr>
                            <tr>
                                <td>
                                    <i
                                        class="icon_creditcard_company_bundle_100 hana"
                                    ></i>
                                </td>
                                <td><p>2~8개월</p></td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="table_info">
                        전북카드는 결제창 내 (무)표기가 노출 되지 않더라도 5만원 이상
                        2~6개월 무이자 적용 됩니다.
                    </p>
                </div>
                <h3>장기 부분 무이자</h3>
                <div class="table_wrap">
                    <table class="pd10">
                        <colgroup>
                            <col style="width: 34%" />
                            <col style="width: 33%" />
                            <col style="width: 33%" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>카드사</th>
                                <th>할부기간</th>
                                <th>고객부담 회차</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <i class="icon_creditcard_company_bundle_100 kb"></i>
                                </td>
                                <td>
                                    <p>10개월<br />12개월</p>
                                </td>
                                <td>
                                    <p>1~4회차<br />1~5회차</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i
                                        class="icon_creditcard_company_bundle_100 shinhan"
                                    ></i>
                                </td>
                                <td>
                                    <p>10개월<br />12개월</p>
                                </td>
                                <td>
                                    <p>1~4회차<br />1~5회차</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i
                                        class="icon_creditcard_company_bundle_100 samsung"
                                    ></i>
                                </td>
                                <td>
                                    <p>6개월<br />10개월<br />12개월</p>
                                </td>
                                <td>
                                    <p>1~3회차<br />1~4회차<br />1~5회차</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i
                                        class="icon_creditcard_company_bundle_100 woori"
                                    ></i>
                                </td>
                                <td>
                                    <p>10개월<br />12개월</p>
                                </td>
                                <td>
                                    <p>1~3회차<br />1~4회차</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i class="icon_creditcard_company_bundle_100 nh"></i>
                                </td>
                                <td>
                                    <p>10개월<br />12개월</p>
                                </td>
                                <td>
                                    <p>1~3회차<br />1~4회차</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i class="icon_creditcard_company_bundle_100 bc"></i>
                                </td>
                                <td>
                                    <p>10개월<br />12개월</p>
                                </td>
                                <td>
                                    <p>1~3회차<br />1~4회차</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i
                                        class="icon_creditcard_company_bundle_100 hana"
                                    ></i>
                                </td>
                                <td>
                                    <p>10개월<br />12개월</p>
                                </td>
                                <td>
                                    <p>1~3회차<br />1~4회차</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="table_info">
                        고객부담 회차를 제외한 잔여 회차는 카드사 부담입니다.
                    </p>
                    <p class="table_info">BC카드는 Non-BC카드 제외</p>
                </div>
                <h3>ARS 무이자</h3>
                <div class="table_wrap">
                    <table class="pd10">
                        <colgroup>
                            <col style="width: 34%" />
                            <col style="width: 33%" />
                            <col style="width: 33%" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>카드사</th>
                                <th>할부기간</th>
                                <th>고객부담 회차</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <i class="icon_creditcard_company_bundle_100 nh"></i>
                                    <a href="tel:1644-2009">1644-2009</a>
                                </td>
                                <td>
                                    <p>9~10개월<br />11~12개월</p>
                                </td>
                                <td>
                                    <p>1~2회차<br />1~3회차</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i class="icon_creditcard_company_bundle_100 bc"></i>
                                    <a href="tel:1899-5772">1899-5772</a>
                                </td>
                                <td>
                                    <p>8~10개월<br />11~12개월</p>
                                </td>
                                <td>
                                    <p>1~2회차<br />1~3회차</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="table_info">카드사 회원이 ARS 신청 후 적용 가능합니다.</p>
                    <p class="table_info">BC카드는 Non-BC카드 제외</p>
                </div>
            </article>
        </div>
    </section>
</template>
<script>
    export default {
        methods: {
            modalClose: function () {
                this.$parent.close()
            }
        }
    }
</script>
