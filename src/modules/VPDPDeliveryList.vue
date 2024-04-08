<template>
    <li
        class="delivery_list"
        :class="[
            type,
            {
                'toggle': dataItem.addInfo,
                'is_open': dataItem.addInfo && dataItem.addInfo.isOpen,
                'single_line': !(dataItem.expectedDate || dataItem.avgArriveDate)
            }
        ]"
    >
        <!--  -->
        <div class="name">
            <p class="type" @click="toggleBtn($event, dataItem)">
                <!-- 국내배송 -->
                <template v-if="type === 'domestic'">
                    {{ data[0].name }} / {{ domesticFee(dataItem.payment) }}
                    <template v-if="dataItem.cargo"> / 화물직배송 </template>
                </template>
                <!-- 해외배송 -->
                <template v-if="type === 'international'">
                    <template v-if="dataItem.name"
                        >{{ dataItem.name | text }} /
                    </template>
                    {{ data[0].name }} /
                    <template v-if="dataItem.payment === 'free'"> 무료배송 </template>
                    <template v-else> 배송비 1개당 {{ dataItem.payment }} </template>
                    <template v-if="dataItem.cargo"> / 화물직배송 </template>
                    <template v-if="dataItem.includeTax"> / 관부가세 포함</template>
                    <template v-else> / <strong>관부가세 미포함</strong></template>
                </template>
                <!-- 예약배송 -->
                <template v-if="type === 'reservation'">
                    <strong>{{ data[0].name }}</strong>
                    ({{ dataItem.sendDate }} &nbsp; 발송예정)
                </template>
                <!-- 깜짝배송 -->
                <template v-if="type === 'quick'">
                    <strong>{{ data[0].name }}</strong>
                    ({{ dataItem.time }})
                </template>
            </p>
            <p class="arrive_date" v-if="dataItem.expectedDate || dataItem.avgArriveDate">
                <template v-if="dataItem.expectedDate">
                    <strong>{{ dataItem.expectedDate }}</strong>
                    &nbsp;도착예상
                </template>
                <template v-else-if="dataItem.avgArriveDate">
                    평균 배송&nbsp;
                    <strong>{{ dataItem.avgArriveDate }}</strong>
                </template>
                <button type="button" class="tooltip" title="더보기"></button>
            </p>
        </div>

        <!-- 숨김 영역 -->
        <div class="add_info" v-if="dataItem.addInfo && dataItem.addInfo.isOpen">
            <!-- 타이틀 -->
            <p class="title" v-if="dataItem.addInfo.textTitle">
                {{ dataItem.addInfo.textTitle }}
            </p>
            <!-- 텍스트 -->
            <template v-if="dataItem.addInfo.desc">
                <p
                    class="text"
                    v-for="(text, index) in dataItem.addInfo.desc"
                    :key="index + keyNum"
                >
                    {{ text }}
                </p>
            </template>
            <!-- 리스트 -->
            <p class="title" v-if="dataItem.addInfo.listTitle">
                {{ dataItem.addInfo.listTitle }}
            </p>
            <template v-if="dataItem.addInfo.list">
                <p
                    class="list"
                    v-for="(text, index) in dataItem.addInfo.list"
                    :key="index + keyNum + 10"
                >
                    {{ text }}
                </p>
            </template>
            <!-- 묶음배송 보기 -->
            <a href="#" class="more_quick" v-if="type === 'quick'">자세히 보기</a>
        </div>
        <template v-if="dataItem.addInfo">
            <a href="#" class="group_delivery_btn" v-if="dataItem.addInfo.groupDelivery"
                >묶음배송 가능상품 보기</a
            >
        </template>
    </li>
</template>

<script>
    export default {
        name: 'PDP_BENEFIT_LIST',
        props: {
            type: { type: String, require: true },
            data: { type: Array, require: true },
            dataItem: { type: [Array, Object, String], require: true },
            keyNum: { type: Number, require: true }
        },
        created() {
            console.log(this.type, this.dataItem)
        },
        filters: {
            text(str) {
                console.log('filters=>', str)
                if (str === 'domestic') {
                    return '국내배송'
                }
            }
        },
        methods: {
            domesticFee(str) {
                if (str === 'free') {
                    return '무료배송'
                } else {
                    return `배송비 ${str}`
                }
            },
            addFee(arg) {
                return `추가 배송비 : 제주도 ${arg.jeju}, 도서산간 ${arg.remote}`
            },
            toggleBtn(e, data) {
                if (data.addInfo) {
                    if (data.addInfo.isOpen) {
                        this.$set(data.addInfo, 'isOpen', false)
                    } else {
                        this.$set(data.addInfo, 'isOpen', true)
                    }
                }
            }
        }
    }
</script>
