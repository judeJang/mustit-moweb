<template>
    <section class="layer_all public_content">
        <header>
            <button type="button" class="layer_close" @click="modalClose()"></button>
            <h1>위조품 신고하기</h1>
        </header>
        <div class="layer_container forgery_apply_layer">
            <ForgeryApplyOrderInfo />
            <div class="divider"></div>
            <article class="forgery_form">
                <form action="">
                    <div class="forgery_layer_container">
                        <div class="layer_title">
                            <h3 class="title">신고 회원정보</h3>
                            <span class="sub_text"
                                ><i class="asterisk">*</i>필수입력항목</span
                            >
                        </div>
                        <div class="comp_inp_box">
                            <p class="comp_label">신고자 이름<i class="asterisk">*</i></p>
                            <input
                                type="text"
                                class="comp_inp_text"
                                placeholder="이름을 입력해 주세요"
                                v-model="userName"
                            />
                        </div>
                        <div class="comp_inp_box">
                            <p class="comp_label">휴대폰 번호<i class="asterisk">*</i></p>
                            <input
                                type="number"
                                class="comp_inp_text"
                                placeholder="'-' 없이 숫자만 입력해 주세요."
                                v-model="userPhone"
                            />
                        </div>
                        <div class="comp_inp_box">
                            <p class="comp_label">이메일 주소<i class="asterisk">*</i></p>
                            <input
                                type="email"
                                class="comp_inp_text"
                                placeholder="이메일 주소를 입력해 주세요."
                                v-model="userMail"
                            />
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="forgery_layer_container">
                        <div class="layer_title">
                            <h3 class="title">신고 내용</h3>
                        </div>
                        <div class="comp_inp_box">
                            <p class="comp_label">내용<i class="asterisk">*</i></p>
                            <div class="comp_textarea_box has_length">
                                <textarea
                                    placeholder="신고할 내용을 입력해 주세요."
                                    class="comp_inp_textarea"
                                    maxlength="500"
                                    v-model="applyText"
                                ></textarea>
                                <span class="comp_textarea_length">
                                    <span class="text_length_num">{{
                                        applyText.length
                                    }}</span>
                                    / 500
                                </span>
                            </div>
                        </div>
                        <div class="comp_inp_box">
                            <p class="comp_label">이미지 첨부</p>
                            <div class="comp_inp_file_box">
                                <input
                                    type="file"
                                    id="forgeryFile"
                                    hidden
                                    accept="image/gif, image/jpeg, image/png"
                                    @change="fileChange"
                                />
                                <label
                                    for="forgeryFile"
                                    class="comp_file_btn"
                                    @click="clickFileBtn"
                                    ><i class="icon_plus"></i> 파일 첨부하기 ({{
                                        fileArr.length
                                    }}/3)</label
                                >
                                <div class="comp_file_list" v-if="fileArr.length > 0">
                                    <div
                                        class="file_box"
                                        v-for="(file, i) in fileArr"
                                        :key="i"
                                    >
                                        <span class="file_name">{{ file.name }}</span>
                                        <button
                                            type="button"
                                            class="btn_delete"
                                            @click="clickDelete(i)"
                                        ></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="notice_box">
                            <p>
                                업로드 가능한 확장자는
                                <span class="text_blue">jpg, jpeg, gif, png</span>
                                입니다.
                            </p>
                            <p>
                                첨부 가능한 최대 파일 용량은
                                <span class="text_blue">10MB</span> 입니다.
                            </p>
                        </div>
                        <div class="btn_box">
                            <button type="reset" class="reset_btn">취소</button>
                            <button
                                type="submit"
                                class="submit_btn"
                                :disabled="!isComplete"
                            >
                                신고하기
                            </button>
                        </div>
                    </div>
                </form>
            </article>
        </div>
    </section>
</template>

<script>
    import EventBus from '@/assets/js/EventBus'
    import ForgeryApplyOrderInfo from '@/views/mypage/ForgeryApplyOrderInfo'
    export default {
        components: {
            ForgeryApplyOrderInfo
        },
        data() {
            return {
                fileArr: [],
                userName: '홍길동',
                userPhone: '01011111111',
                userMail: 'hong@nn.com',
                applyText: ''
            }
        },
        computed: {
            isComplete() {
                return (
                    this.userName != '' &&
                    this.userPhone != '' &&
                    this.userMail != '' &&
                    this.applyText != ''
                )
            }
        },
        methods: {
            modalClose() {
                EventBus.$emit('forgeryFormModalClose')
            },
            fileChange(e) {
                if (this.fileArr.length < 3) {
                    this.fileArr.push(...e.target.files)
                } else {
                    alert('사진은 최대 3장만 등록가능합니다.')
                }
            },
            clickFileBtn(e) {
                if (this.fileArr.length >= 3) {
                    alert('사진은 최대 3장만 등록가능합니다.')
                    e.preventDefault()
                }
            },
            clickDelete(key) {
                this.fileArr.splice(key, 1)
            }
        }
    }
</script>
