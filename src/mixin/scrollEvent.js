export default {
    data() {
        return {
            mixinScrollUpDownState: '',
            mixinScrollLastTop: 0,
            mixinScrollUpDownLimit: 100,
            mixinSt: 0
        }
    },
    created() {},
    mounted() {
        document.addEventListener(
            'scroll',
            () => {
                let st = window.pageYOffset || document.documentElement.scrollTop
                this.mixinSt = st
                if (st > this.mixinScrollUpDownLimit) {
                    if (st > this.mixinScrollLastTop) {
                        //console.log('down scroll')
                        this.mixinScrollUpDownState = 'down'
                    } else {
                        //console.log('up scroll')
                        this.mixinScrollUpDownState = 'up'
                    }
                } else {
                    this.mixinScrollUpDownState = 'up'
                }

                this.mixinScrollLastTop = st <= 0 ? 0 : st
            },
            false
        )
    }
}
