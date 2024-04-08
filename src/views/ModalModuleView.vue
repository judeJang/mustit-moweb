<template>
    <div>
        <div class="test_flex_container">
            <button @click="open(1)">Full Modal</button>
            <button @click="open(2)">Full Modal(No title)</button>
            <button @click="open(3)">Full Modal(White btn)</button>
            <button @click="open(4)">Full Modal (FIX btn)</button>
        </div>

        <!-- modal case1 -->
        <all-modal title="타이틀" v-if="type === 1">
            <template v-slot:container>
                <article class="product_report">
                    <div class="report_notice">
                        <p>신고 내용은 관리자가 내부규정에 따라 심사합니다.</p>
                        <p>
                            머스트잇에서 제한하는 부당거래에 해당할 경우, 해당 거래 및
                            상품은 종료될 수 있습니다.
                        </p>
                        <p>신고 후 이메일로 처리 결과를 통보해드리겠습니다.</p>
                    </div>
                    <div class="report_data_container">
                        <table class="report_data_table">
                            <colgroup>
                                <col width="89" />
                                <col width="*" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>상품번호</th>
                                    <td>48010997</td>
                                </tr>
                                <tr>
                                    <th>상품명</th>
                                    <td>
                                        21FW CELINE 셀린느 스퀘어 카바스 숄더백 (블루/탠)
                                        192172DBS 07TN
                                    </td>
                                </tr>
                                <tr>
                                    <th>판매자 ID</th>
                                    <td>dlwngmlz</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="product_apply_form">
                        <form action="">
                            <div class="comp_inp_box">
                                <p class="comp_label">신고분류</p>
                                <select class="comp_inp_select select_none">
                                    <option value="">신고분류를 선택해 주세요.</option>
                                    <option value="1">직거래 유도 행위</option>
                                    <option value="2">허위 / 과장 내용등록</option>
                                    <option value="3">잘못된 내용 / 카테고리 등록</option>
                                </select>
                                <div class="notice_box">
                                    <p>
                                        * 위조품으로 의심되시면
                                        <a href="/forgery_apply" class="link"
                                            >위조품 신고 게시판</a
                                        >을 이용해 주세요.
                                    </p>
                                </div>
                            </div>
                            <div class="comp_inp_box">
                                <p class="comp_label">이메일 주소</p>
                                <input
                                    type="text"
                                    value="jinmork0513@nate.com"
                                    class="comp_inp_text"
                                />
                            </div>
                            <div class="comp_inp_box">
                                <p class="comp_label">신고내용</p>
                                <div class="comp_textarea_box">
                                    <textarea
                                        placeholder="내용을 입력해 주세요."
                                        class="comp_inp_textarea"
                                    ></textarea>
                                </div>
                            </div>
                            <div class="btn_box">
                                <button type="reset" class="reset_btn">취소</button
                                ><button type="submit" class="submit_btn">
                                    신고하기
                                </button>
                            </div>
                        </form>
                    </div>
                </article>
            </template>
        </all-modal>

        <!-- modal case2 -->
        <all-modal v-if="type === 2">
            <template v-slot:container>
                <article class="inner_container order_terms_container">
                    <div>
                        <h3>전자금융거래 이용약관에 동의</h3>
                        <h4>제 1 조 (목적)</h4>
                        <p>
                            이 약관은 NICE페이먼츠 주식회사(이하 '회사'라 합니다)가
                            제공하는 전자지급결제대행서비스 및 결제대금예치서비스를
                            이용자가 이용함에 있어 회사와 이용자 사이의 전자금융거래에
                            관한 기본적인 사항을 정함을 목적으로 합니다.
                        </p>
                        <h4>제 2 조 (용어의 정의)</h4>
                        <p>이 약관에서 정하는 용어의 정의는 다음과 같습니다.</p>
                        <p class="mt8">
                            '전자금융거래'라 함은 회사가 전자적 장치를 통하여 전자지
                            급결제대행서비스 및 결제대금예치서비스(이하 '전자금융거 래
                            서비스'라고 합니다)를 제공하고, 이용자가 회사의 종사자 와 직접
                            대면하거나 의사소통을 하지 아니하고 자동화된 방식 으로 이를
                            이용하는 거래를 말합니다.
                        </p>
                        <p>
                            '전자지급결제대행서비스'라 함은 전자적 방법으로 재화의 구 입
                            또는 용역의 이용에 있어서 지급결제정보를 송신하거나 수 신하는
                            것 또는 그 대가의 정산을 대행하거나 매개하는 서비 스를
                            말합니다.
                        </p>
                        <p>
                            '결제대금예치서비스'라 함은 이용자가 재화의 구입 또는 용 역의
                            이용에 있어서 그 대가(이하 '결제대금'이라 한다)의 전 부 또는
                            일부를 재화 또는 용역(이하 '재화 등'이라 합니다)을 공급받기
                            전에 미리 지급하는 경우, 회사가 이용자의 물품수 령 또는 서비스
                            이용 확인 시점까지 결제대금을 예치하는 서 비스를 말합니다.
                        </p>
                        <p>
                            '이용자'라 함은 이 약관에 동의하고 회사가 제공하는 전자금
                            융거래 서비스를 이용하는 자를 말합니다.
                        </p>
                    </div>
                </article>
            </template>
        </all-modal>

        <!-- modal case3 -->
        <all-modal title="타이틀" :type="2" v-if="type === 3">
            <template v-slot:container>
                <article class="product_report">
                    <div class="report_notice">
                        <p>신고 내용은 관리자가 내부규정에 따라 심사합니다.</p>
                        <p>
                            머스트잇에서 제한하는 부당거래에 해당할 경우, 해당 거래 및
                            상품은 종료될 수 있습니다.
                        </p>
                        <p>신고 후 이메일로 처리 결과를 통보해드리겠습니다.</p>
                    </div>
                    <div class="report_data_container">
                        <table class="report_data_table">
                            <colgroup>
                                <col width="89" />
                                <col width="*" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>상품번호</th>
                                    <td>48010997</td>
                                </tr>
                                <tr>
                                    <th>상품명</th>
                                    <td>
                                        21FW CELINE 셀린느 스퀘어 카바스 숄더백 (블루/탠)
                                        192172DBS 07TN
                                    </td>
                                </tr>
                                <tr>
                                    <th>판매자 ID</th>
                                    <td>dlwngmlz</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="product_apply_form">
                        <form action="">
                            <div class="comp_inp_box">
                                <p class="comp_label">신고분류</p>
                                <select class="comp_inp_select select_none">
                                    <option value="">신고분류를 선택해 주세요.</option>
                                    <option value="1">직거래 유도 행위</option>
                                    <option value="2">허위 / 과장 내용등록</option>
                                    <option value="3">잘못된 내용 / 카테고리 등록</option>
                                </select>
                                <div class="notice_box">
                                    <p>
                                        * 위조품으로 의심되시면
                                        <a href="/forgery_apply" class="link"
                                            >위조품 신고 게시판</a
                                        >을 이용해 주세요.
                                    </p>
                                </div>
                            </div>
                            <div class="comp_inp_box">
                                <p class="comp_label">이메일 주소</p>
                                <input
                                    type="text"
                                    value="jinmork0513@nate.com"
                                    class="comp_inp_text"
                                />
                            </div>
                            <div class="comp_inp_box">
                                <p class="comp_label">신고내용</p>
                                <div class="comp_textarea_box">
                                    <textarea
                                        placeholder="내용을 입력해 주세요."
                                        class="comp_inp_textarea"
                                    ></textarea>
                                </div>
                            </div>
                            <div class="btn_box">
                                <button type="reset" class="reset_btn">취소</button
                                ><button type="submit" class="submit_btn">
                                    신고하기
                                </button>
                            </div>
                        </form>
                    </div>
                </article>
            </template>
        </all-modal>

        <!-- modal case4 -->
        <all-modal
            title="적립금"
            :fixButtonMode="{ apply: true, isShadow: true }"
            containerClass="discount_container"
            v-if="type == 4"
        >
            <template v-slot:container>
                <div class="total_point_container">
                    <dl>
                        <dt>사용 가능한 적립금</dt>
                        <dd>100,000</dd>
                    </dl>
                </div>
                <article class="save_point_container" v-for="idx in 5" :key="idx">
                    <div class="item_box">
                        <a href="#"
                            ><div class="thum">
                                <img
                                    src="https://cdn.mustit.co.kr/lib/upload/product/s-project/2021/10/1635388017-20.jpeg/_dims_/resize/250x250/extent/250x250"
                                    alt=""
                                />
                            </div>
                            <div class="item_info">
                                <p class="name">Maison Kitsune</p>
                                <p class="desc">
                                    21FW 메종키츠네 올라이트 폭스 패치 다크 그레이
                                </p>
                                <div class="option">
                                    <span>헌터네이비</span
                                    ><span>M(성인여성마른44추천)</span
                                    ><span>M(성인여성마른44추천)</span>
                                </div>
                            </div></a
                        >
                    </div>
                    <form class="input_box">
                        <div class="b_input_clear">
                            <input
                                type="number"
                                placeholder="100원 단위로 입력해 주세요."
                                autofocus="autofocus"
                                autocomplete="off"
                            /><!---->
                        </div>
                        <button type="button" class="submit_btn">전액사용</button>
                    </form>
                </article>
            </template>
            <template v-slot:fixBtn>
                <button type="button">사용하기</button>
            </template>
        </all-modal>
    </div>
</template>

<script>
    import AllModal from '@/modules/VAllModal.vue'
    import { mapActions } from 'vuex'
    export default {
        components: {
            AllModal
        },
        data() {
            return {
                type: 1
            }
        },
        methods: {
            ...mapActions('modalModule', ['openModal1']),
            open(type) {
                this.type = type
                this.openModal1()
            }
        }
    }
</script>
<style lang="scss" scoped>
    .test_flex_container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        height: 80vh;
    }
    button {
        padding: 8px 24px;
        border-radius: 4px;
        border: 1px solid $gray8;
        background: white;
        margin: 4px;
    }
</style>
