<template>
    <div class="b_input_clear">
        <input
            :type="type"
            :placeholder="placeholder"
            autofocus
            autocomplete="off"
            :value="inputText"
            :readonly="readonly"
            @focus="inputFocus = true"
            @blur="focusOut()"
            @input="changeInput($event)"
            v-bind="$attrs"
        />
        <button
            type="button"
            class="clear_btn"
            v-if="!inputEmpty && !readonly && inputFocus"
            @click="textClear()"
        ></button>
    </div>
</template>
<script>
    export default {
        name: 'base-input-clear',
        inheritAttrs: false,
        props: {
            type: { type: String, default: 'text' },
            placeholder: { type: String, default: '' },
            readonly: { type: Boolean, default: false }
        },
        data() {
            return {
                inputText: '',
                inputEmpty: true,
                inputFocus: false
            }
        },
        methods: {
            changeInput: function (e) {
                const value = e.target.value
                this.inputFocus = true
                this.inputText = value
            },
            textClear() {
                this.inputText = ''
            },
            focusOut() {
                setTimeout(() => (this.inputFocus = false), 10)
            }
        },
        watch: {
            inputText(val) {
                if (val == '') {
                    this.inputEmpty = true
                } else {
                    this.inputEmpty = false
                }
            }
        }
    }
</script>
