<template>
    <div class="search_result_container">
        <!-- 브랜드, 검색어 리스트 모두 -->
        <template v-if="type === 1">
            <template v-if="isBrandShow">
                <div class="search_brand_area">
                    <a href="#">
                        <div class="brand_box">
                            <i class="badge_brand"></i>
                            <p class="brand">{{ brand }}</p>
                            <i class="icon_arr"></i>
                        </div>
                    </a>
                </div>
                <div class="search_divider"></div>
            </template>
            
            <template v-if="hasRecent">
                <ul class="search_result_list">
                    <li
                        class="recent_result"
                        v-for="(term, index) in recentHighlight.slice(0, 2)"
                        :key="index"
                    >
                        <a href="#" class="text_box">
                            <span class="text" v-html="term"></span>
                            <span class="date">01.24</span>
                        </a>
                    </li>
                </ul>
                <!-- 자동완성 키워드 있을 때만 구분선 -->
                <div class="search_divider" v-if="searchHighlight.length > 0"></div>
            </template>
            <ul class="search_result_list">
                <li
                    class="search_result has_icon"
                    v-for="(term, index) in searchHighlight.slice(0, searchLenghtLimit)"
                    :key="index"
                >
                    <a href="#" class="text">
                        <span v-html="term"></span>
                    </a>
                </li>
            </ul>
        </template>
        <!-- (아울렛) 검색어 리스트만 -->
        <ul class="search_result_list" v-if="type === 2">
            <li
                class="search_result"
                v-for="(term, index) in searchHighlight.slice(0, 10)"
                :key="index"
            >
                <a href="#" class="text" v-html="term"></a>
            </li>
        </ul>
    </div>
</template>

<script>
    // type 1 브랜드, 검색어 리스트 모두
    // type 2 (아울렛) 검색어 리스트만
    import { recommandTerm, brandData, recentTerm } from '@/assets/js/dummy/SearchTermData'
    export default {
        props: {
            searchText: { type: String, default: '' },
            type: { type: Number, default: 1 }
        },
        data() {
            return {
                searchTerms: [...recommandTerm],
                searchHighlight: [],
                recentTerms: [...recentTerm],
                recentHighlight: [],
                hasRecent: false,
                searchLenghtLimit: 10,
                isBrandShow: false,
                brand: '',
                brandList: [...brandData]
            }
        },
        methods: {
            highlight(searchTerm, searchText) {
                // 검색어 하이라이트 표시
                const mystring = searchTerm
                const find = searchText
                const regex = new RegExp(find, 'g')
                if (mystring.includes(find)) {
                    return mystring.replace(
                        regex,
                        `<span class='highlight'>${find}</span>`
                    )
                }
            }
        },
        watch: {
            searchText(val) {
                // 자동검색어
                this.searchHighlight = []
                this.searchTerms.forEach((el) => {
                    const term = this.highlight(el, this.searchText)
                    term != undefined && this.searchHighlight.push(term)
                })
                // 최근검색어
                this.recentHighlight = []
                this.recentTerms.forEach((el) => {
                    const term = this.highlight(el, this.searchText)
                    term != undefined && this.recentHighlight.push(term)
                })
                this.recentHighlight.length > 0 ? this.hasRecent = true : this.hasRecent = false
                // 최근 검색어 + 자동 검색어 최대 10개 
                this.recentHighlight.length < 2
                    ? this.searchLenghtLimit = 10 - this.recentHighlight.length
                    : this.searchLenghtLimit = 8
                // 브랜드 노출
                if (val.length > 1) {
                    let i = 0
                    while (i < this.brandList.length) {
                        if (
                            this.brandList[i].ko.includes(val) ||
                            this.brandList[i].en.includes(val)
                        ) {
                            this.brand = this.brandList[i].brand
                            this.isBrandShow = true
                            break
                        } else {
                            this.isBrandShow = false
                        }
                        i++
                    }
                } else {
                    this.isBrandShow = false
                }
            }
        }
    }
</script>
