<template>
    <ul class="event_items self_module">
        <li v-for="(item, i) in listObj" :key="i">
            <a href="#">
                <span class="thumb">
                    <img :src="item.thumb" :alt="item.title" />
                </span>
                <div class="text_container">
                    <p class="title">{{ item.title }}</p>
                    <p class="desc" v-if="item.desc">{{ item.desc }}</p>
                    <p
                        class="period"
                        v-html="calcPeriod(item.startDate, item.endDate)"
                    ></p>
                </div>
            </a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'EventsList',
        props: {
            listObj: { type: Array, require: true }
        },
        methods: {
            //최종 결과 리턴 함수
            calcPeriod(startDate, endDate = '') {
                const date = new Date()
                const year = date.getFullYear()
                const month = date.getMonth() + 1 // 월은 0부터 시작하므로 +1
                const day = date.getDate()

                const formattedToDay = `${year}.${month < 10 ? '0' : ''}${month}.${
                    day < 10 ? '0' : ''
                }${day}`

                // 상시
                if (endDate === '') return '별도 공지시까지'

                //상시가 아닐 시
                const result = this.diffDate(formattedToDay, endDate)

                return `<span class="date"> ${startDate} ~ ${endDate}</span> ${result}`
            },
            // 날짜 차이 개산
            diffDate(baseDate, endDate) {
                const base = new Date(baseDate)
                const end = new Date(endDate)

                const diffTime = end - base

                const msPerDay = 24 * 60 * 60 * 1000 // 1일의 밀리초 수
                const diffDay = Math.floor(diffTime / msPerDay)

                console.log(diffDay)

                let result = ''

                if (diffDay < 0) {
                    //테스트 코드 날짜 지나면 오늘 종료
                    result = '<span class="diff_days">오늘 종료</span>'
                }
                if (diffDay < 8 && diffDay > 0) {
                    result = `<span class="diff_days">D-${diffDay}</span>`
                }
                if (diffDay == 0) {
                    result = `<span class="diff_days">오늘 종료</span>`
                }

                return result
            }
        }
    }
</script>
