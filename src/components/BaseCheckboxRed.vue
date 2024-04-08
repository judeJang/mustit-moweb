<template>
    <label class="b_checkbox_red">
        <input
            type="checkbox"
            :name="name"
            :id="id"
            :checked="checked"
            @input="func($event)"
        />
        <span class="checkbox_name">{{ text }}</span>
    </label>
</template>
<script>
    export default {
        name: 'BASE_CHECKBOX_RED',
        props: {
            text: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: 'defaultName'
            },
            id: {
                type: String,
                default: ''
            },
            checked: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            func(e) {
                this.$emit('change', e.target.checked, (e.target.id = ''))
                //console.log(e.target.checked)
            }
        }
    }
</script>
