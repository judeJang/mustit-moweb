<template>
    <section class="layer_all public_content">
        <header>
            <button type="button" class="layer_close" @click="modalClose()"></button>
            <h1>상품 신고하기</h1>
        </header>
        <div class="layer_container">
            <article class="product_report">
                <div class="report_notice">
                    <p>신고 내용은 관리자가 내부규정에 따라 심사합니다.</p>
                    <p>
                        머스트잇에서 제한하는 부당거래에 해당할 경우, 해당 거래 및 상품은
                        종료될 수 있습니다.
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
                            <select
                                class="comp_inp_select"
                                :class="{ 'select_none': selectValue == '' }"
                                v-model="selectValue"
                            >
                                <option value="">신고분류를 선택해 주세요.</option>
                                <option value="1">직거래 유도 행위</option>
                                <option value="2">허위 / 과장 내용등록</option>
                                <option value="3">잘못된 내용 / 카테고리 등록</option>
                            </select>
                            <div class="notice_box">
                                <p>
                                    * 위조품으로 의심되시면
                                    <router-link to="/forgery_apply" class="link"
                                        >위조품 신고 게시판</router-link
                                    >을 이용해 주세요.
                                </p>
                            </div>
                        </div>
                        <div class="comp_inp_box">
                            <p class="comp_label">이메일 주소</p>
                            <input
                                type="text"
                                class="comp_inp_text"
                                value="jinmork0513@nate.com"
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
                            <button type="reset" class="reset_btn">취소</button>
                            <button type="submit" class="submit_btn">신고하기</button>
                        </div>
                    </form>
                </div>
            </article>
        </div>
    </section>
</template>

<script>
    import EventBus from '@/assets/js/EventBus'
    export default {
        data() {
            return {
                selectValue: ''
            }
        },
        methods: {
            modalClose() {
                EventBus.$emit('statementModalClose')
            }
        }
    }
</script>

<style></style>
