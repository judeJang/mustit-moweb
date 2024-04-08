<template>
    <div class="c_select" :tabindex="tabindex" @blur="open = false">
        <p class="selected" :class="{ open: open }" @click="open = !open">
            {{ selected }}
        </p>
        <ul class="list" v-if="open">
            <li
                v-for="(option, i) of options"
                :key="i"
                @click="clickOption(option)"
                class="item"
                :class="{ active: option == selected }"
            >
                {{ option }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            options: { type: Array, required: true },
            default: { type: String, required: false, default: null },
            tabindex: { type: Number, required: false, default: 0 }
        },
        data() {
            return {
                selected: this.default
                    ? this.default
                    : this.options.length > 0
                    ? this.options[0]
                    : null,
                open: false
            }
        },
        methods: {
            clickOption: function (option) {
                this.selected = option
                this.open = false
            }
        },
        mounted() {
            window.addEventListener('scroll', () => {
                this.open && (this.open = false)
            })
        }
    }
</script>
