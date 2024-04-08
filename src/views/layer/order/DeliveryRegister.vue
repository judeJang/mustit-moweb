<template>
    <section class="layer_all">
        <header>
            <button type="button" class="layer_close" @click="modalClose()"></button>
            <h2>배송지 등록</h2>
        </header>
        <div class="layer_container fix_bottom_button delivery_content form register">
            <dl class="input_form">
                <dt class="define essential">이름</dt>
                <dd class="desc">
                    <input type="text" placeholder="이름을 입력해 주세요." />
                </dd>
            </dl>
            <dl class="input_form">
                <dt class="define essential">휴대폰번호</dt>
                <dd class="desc">
                    <div class="multi_input_box">
                        <select>
                            <option value="">선택</option>
                            <option value="010">010</option>
                            <option value="011">011</option>
                            <option value="016">016</option>
                            <option value="017">017</option>
                            <option value="018">018</option>
                            <option value="019">019</option>
                            <option value="0130">0130</option>
                        </select>
                        <input
                            type="tel"
                            maxlength="4"
                            pattern="[0-9]*"
                            inputmode="numeric"
                            min="0"
                            onfocusout="insertHphone();"
                            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                        />
                        <input
                            type="tel"
                            maxlength="4"
                            pattern="[0-9]*"
                            inputmode="numeric"
                            min="0"
                            onfocusout="insertHphone();"
                            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                        />
                    </div>
                </dd>
            </dl>
            <dl class="input_form">
                <dt class="define">전화번호</dt>
                <dd class="desc">
                    <div class="multi_input_box">
                        <select>
                            <option value="">선택</option>
                            <option value="02">02</option>
                            <option value="031">031</option>
                            <option value="032">032</option>
                            <option value="041">041</option>
                            <option value="042">042</option>
                            <option value="043">043</option>
                            <option value="044">044</option>
                            <option value="051">051</option>
                            <option value="033">033</option>
                            <option value="052">052</option>
                            <option value="053">053</option>
                            <option value="054">054</option>
                            <option value="055">055</option>
                            <option value="061">061</option>
                            <option value="062">062</option>
                            <option value="063">063</option>
                            <option value="064">064</option>
                            <option value="010">010</option>
                            <option value="016">016</option>
                            <option value="017">017</option>
                            <option value="018">018</option>
                            <option value="019">019</option>
                            <option value="0130">0130</option>
                            <option value="070">070</option>
                            <option value="080">080</option>
                            <option value="0507">0507</option>
                            <option value="0506">0506</option>
                            <option value="0505">0505</option>
                            <option value="0504">0504</option>
                            <option value="0502">0502</option>
                            <option value="0503">0503</option>
                            <option value="0303">0303</option>
                        </select>
                        <input
                            type="tel"
                            maxlength="4"
                            pattern="[0-9]*"
                            inputmode="numeric"
                            min="0"
                            onfocusout="insertHphone();"
                            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                        />
                        <input
                            type="tel"
                            maxlength="4"
                            pattern="[0-9]*"
                            inputmode="numeric"
                            min="0"
                            onfocusout="insertHphone();"
                            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                        />
                    </div>
                </dd>
            </dl>
            <dl class="input_form">
                <dt class="define essential">주소</dt>
                <dd class="desc">
                    <div class="addr_form">
                        <div class="search_addr">
                            <input type="text" readonly />
                            <input type="button" value="우편번호 검색" />
                        </div>
                        <div class="form_block">
                            <input type="text" readonly />
                        </div>
                        <div class="form_block">
                            <input type="text" placeholder="상세주소를 입력해 주세요." />
                        </div>
                    </div>
                </dd>
            </dl>

            <div class="checkbox_container">
                <input
                    type="checkbox"
                    class="check_idt"
                    id="#"
                    name="baesong_insert"
                    value="ok"
                />
                <label for="#" class="check_idt"></label>
                <label for="#">기본 배송지로 설정</label>
            </div>
            <div class="fix_button">
                <button class="black">등록하기</button>
            </div>
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

<style scoped></style>
