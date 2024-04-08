<template>
    <article class="order_info" :class="[isOpen ? 'toggle_open' : 'toggle_hide']">
        <div class="title">
            <h2>개인통관 고유부호</h2>
            <div class="summary">P123456789098</div>

            <div class="arr_container" @click="toggle"></div>
            <!-- 클릭영역 -->
        </div>
        <!-- title -->

        <div class="toggle_box" v-show="isOpen">
            <div class="unipass_info">
                <BaseInputClear
                    placeholder="P로 시작하는 받는 사람의 통관고유부호 입력"
                />
                <p class="page_link">
                    <a
                        href="https://unipass.customs.go.kr/csp/persIndex.do"
                        target="_blank"
                        ><span>통관고유부호 조회</span>/<span>발급</span></a
                    >
                </p>
                <div class="checkbox_container">
                    <label>
                        <input type="checkbox" />
                        <span class="checkbox_name"
                            >통관정보 수집, 제공에 동의 (필수)</span
                        >
                    </label>
                    <span><i class="icon_help"></i></span>
                </div>
                <div class="unipass_desc">
                    <div class="sub_title">
                        <p>통관고유부호 입력 안내</p>
                        <a href="#" class="btn_modal">자세히보기</a>
                    </div>
                    <!-- <p>
                        <strong></strong>
                        <a href="#" class="more_btn"></a>
                    </p> -->
                    <div class="list_box">
                        <ul>
                            <li>
                                받는 사람의 통관고유부호를 기입해 주세요. (불법행위 방지
                                및 개인정보 보호를 위해 입력이 필요합니다.)
                            </li>
                            <li>
                                받는 사람의 이름, 휴대폰번호(전체)가 개인통관 고유부호
                                발급 시 입력한 정보와 일치하지 않으면 통관이 불가하여
                                지연될 수 있습니다.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>
<script>
    import BaseInputClear from '@/components/BaseInputClear.vue'
    export default {
        components: { BaseInputClear },
        data: function () {
            return {
                isOpen: false,
                inputEmpty: true,
                inputText: ''
            }
        },
        methods: {
            toggle() {
                this.isOpen = !this.isOpen
            },
            changeInput(e) {
                let value = e.target.value
                this.inputText = value
                if (value == '') {
                    this.inputEmpty = true
                } else {
                    this.inputEmpty = false
                }
            },
            textClear() {
                this.inputText = ''
            }
        }
    }
</script>

<style scoped></style>
