<template>
    <article class="search_relate_keyword self_module">
        <h4 class="keyword_title">연관</h4>
        <ul class="keyword_list">
            <li class="keyword" v-for="relateTerm in relateTerms" :key="relateTerm">
                <a href="#">{{ relateTerm }}</a>
            </li>
        </ul>
    </article>
</template>

<script>
    import { recommandTerm } from '@/assets/js/dummy/SearchTermData'
    export default {
        data() {
            return {
                relateTerms: [...recommandTerm.slice(0, 10)]
            }
        }
    }
</script>
