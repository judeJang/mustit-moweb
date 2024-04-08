import Cookies from 'js-cookie'

export function getCookie(name) {
    return Cookies.get(name)
}

export function setCookie(name, value, expires = 1) {
    return Cookies.set(name, value, expires)
}

export function removeCookie(name) {
    return Cookies.remove(name)
}

export function hasCookie(name) {
    return !!getCookie(name)
}

export const imgAPI = {
    imgSize(url) {
        return new Promise(function (resolve, reject) {
            const icon = new Image()
            icon.onload = () => {
                resolve(icon)
            }
            icon.onerror = () => {
                reject(new Error('imgFail'))
            }
            icon.src = url
        })
    }
}

/*
    target 의 top ~ top + height 까지 0~1 반환
    params - target el
           - value  height 값에 추가 될 값
           - unit  value 뺄지 나눌지 단위 결정
*/
export const scrollRatio = (target, value = 0, unit = 'minus') => {
    const top = target.getBoundingClientRect().top
        ? target.getBoundingClientRect().top
        : 0
    const height = target.getBoundingClientRect().height

    let ratio = 0
    if (unit == 'minus') {
        ratio = -1 * (top / (height - value))
    } else if (unit == 'division') {
        ratio = -1 * (top / (height / value))
    }

    if (ratio > 1) ratio = 1
    if (ratio < 0) ratio = 0

    return ratio
}

export const isEmptyObjData = (data) =>
    Object.keys(data).length === 0 && data.constructor === Object

export const gotoStop = (el) => {
    const elTop = document.querySelector(el).getBoundingClientRect().top
    window.scrollTo({ top: elTop - 52, left: 0, behavior: 'smooth' })
}

export class TabInteractive {
    #tabs
    #sections = []
    #options = {
        tabs: '',
        sections: '',
        smooth: false
    }
    #length
    #sectionData = []
    #activeClass
    #tabHei
    #this

    constructor(_option) {
        this.#options = _option
        this.#tabs = document.querySelectorAll(_option.tabs)
        this.#sections = _option.sections
        this.#length = this.#tabs.length
        this.#activeClass = _option.tabActiveClass
        this.#sectionData.length = this.#length
        this.#tabHei = _option.tabHei || 0
        this.#this = this
        this.init()
        //console.log(this)
    }

    init() {
        if (this.#length === 0) {
            console.warn('tab을 입력해주세요')
            return false
        }
        this.clickListener()
        this.sectionFactory()
    }

    clickListener() {
        const clickFun = (event, index) => {
            try {
                if (this.#sectionData[index].start) {
                    window.scrollTo({
                        top: this.#sectionData[index].start - 52,
                        left: 0,
                        behavior: this.#options.smooth ? 'smooth' : 'auto'
                    })
                }
            } catch (error) {
                console.warn('error')
            }
        }

        Array.from(this.#tabs).forEach((el, index) => {
            el.addEventListener('click', (event) => clickFun(event, index))
        })
    }

    sectionFactory() {
        //save position
        this.#sections.forEach((section, index) => {
            let _s, _e, _

            if (typeof section === 'object' && section !== null) {
                _s = document.querySelector(section.start)
                _e = document.querySelector(section.end)
            } else {
                _ = document.querySelector(section)
            }

            if (_s && _e) {
                this.#sectionData[index] = {
                    start: _s.offsetTop - this.#tabHei,
                    hei: _s.offsetHeight + _e.offsetHeight,
                    end: _s.offsetTop + _e.offsetHeight - this.#tabHei
                }
            } else if (_) {
                this.#sectionData[index] = {
                    start: _.offsetTop - this.#tabHei,
                    hei: _.offsetHeight,
                    end: _.offsetTop + _.offsetHeight - this.#tabHei
                }
            } else {
                console.warn(`Cannot find element for section at index ${index}`)
                this.#sectionData[index] = {} // 또는 에러 처리를 적절히 수행
            }
        })

        //console.table(this.#sectionData)
    }

    scrollListener() {
        //console.log(this)
        this.sectionFactory()
        let st = window.scrollY + (this.#tabHei + 5)

        if (
            st < this.#sectionData[0].start ||
            st > this.#sectionData[this.#length - 1].end
        ) {
            this.tabFactory('reset')
        } else {
            this.#sectionData.forEach((data, index) => {
                if (st > data.start && st < data.end) {
                    this.tabFactory(index)
                }
            })
        }
    }

    tabFactory(state) {
        Array.from(this.#tabs).forEach((el) => {
            el.classList.remove(this.#activeClass)
        })
        if (state !== 'reset') {
            // //console.log(this.#tabs[state])
            //console.log('state=>', state)
            this.#tabs[state].classList.add(this.#activeClass)
        }
    }
}
