<template>
    <section class="public_content order_content">
        <SubHeader title="주문완료" :type="3" />
        <!-- <SubTopHeader :data="headerName" :isDropState="false" :rightShow="false" /> -->
        <article class="order_info">
            <div class="complete_container">
                <i class="icon complete"></i>
                <p class="txt">주문이 완료되었습니다.</p>
                <p class="num">주문번호 : <span>6570708517-814</span></p>
                <!-- 무통장입금 시 노출 -->
                <div class="deposit_box">
                    <p class="deposit_info">
                        <span class="c_primary">2023년 6월 4일까지</span>
                        <span>입금을 완료해주세요.</span><br />기한 내 미입금 시 주문은
                        자동 취소됩니다.
                    </p>
                    <div class="account_info">
                        <p>우리은행 28402238718778</p>
                        <button type="button" class="btn">복사</button>
                    </div>
                </div>
                <p class="desc">
                    주문내역 확인은 마이페이지의<br />‘주문내역 조회’에서 확인하실 수
                    있습니다.
                </p>
            </div>
        </article>
        <div class="divider"></div>
        <article class="order_info">
            <div class="title">
                <h2>주문정보</h2>
            </div>
            <!-- // title -->
            <div class="order_complete">
                <div class="order_item">
                    <div class="product_container">
                        <div class="img_wrap">
                            <img
                                src="https://image.mustit.co.kr/lib/upload/admin/ranking/product/3990f6eeccbd7adbba5ce1c954845a0e.jpg/_dims_/resize/280x280/extent/280x280/quality/80"
                                alt="product"
                                class="cover_img"
                            />
                        </div>
                        <div class="info_container">
                            <div class="brand">
                                <p class="brand_name">Maison Kitsune</p>
                                <p class="badge">
                                    <span class="delivery_icon overseas"></span>
                                </p>
                            </div>
                            <p class="name">
                                21FW 메종키츠네 올라이트 폭스 패치 다크 21FW 메종키츠네
                                올라이트 폭스 패치 다크
                            </p>
                            <p class="option">
                                <span class="color">헌터네이비</span>
                                <span class="size">M(성인여성마른44추천)</span>
                                <span class="quantity">1개</span>
                            </p>
                            <p class="desc">꼼꼼하게 포장하여 보내드리겠습니다!</p>
                        </div>
                    </div>
                    <!-- // product_container-->
                    <div class="price_container">
                        <p class="delivery"><span>선결제 10,000원 / 해외배송</span></p>
                    </div>
                </div>
                <!-- // order_item -->
            </div>
            <div class="detail_container">
                <dl>
                    <dt>주문번호</dt>
                    <dd>6570708517-814</dd>
                </dl>
                <dl>
                    <dt>받는사람</dt>
                    <dd>홍길동</dd>
                </dl>
                <dl>
                    <dt>연락처</dt>
                    <dd>010-1234-5678 / 02-1234-3456</dd>
                </dl>
                <dl>
                    <dt>받는주소</dt>
                    <dd>06030 서울 강남구 압구정로 148 머스트잇빌딩 4층</dd>
                </dl>
                <dl>
                    <dt>요청사항</dt>
                    <dd>집 앞에 놓아주세요.</dd>
                </dl>
            </div>
        </article>
        <div class="divider"></div>
        <article class="order_info">
            <div class="header">
                <div class="inner_box">
                    <h2 class="title">결제정보</h2>
                </div>
            </div>
            <div class="detail_container no_border">
                <dl>
                    <dt>결제금액</dt>
                    <dd class="price">100,000원</dd>
                </dl>
                <dl>
                    <dt>결제방식</dt>
                    <dd>카드결제</dd>
                </dl>
            </div>
            <div class="links">
                <a href="#" class="link border">주문내역보기</a>
                <a href="#" class="link bg">쇼핑계속하기</a>
            </div>
        </article>
        <div class="divider"></div>
        <article class="customer_lab_banner">
            <a href="https://mustit.co.kr/m/board/customer">
                <img
                    src="https://static-ux.mustit.co.kr/img/m/m_banner/banner_customer_lab.png"
                    alt="머스트잇 고객연구소"
                />
            </a>
        </article>
        <div class="divider"></div>
        <article class="order_info swiper">
            <div class="title">
                <h2>이 상품을 본 고객님이 많이 본 상품</h2>
            </div>
            <!-- // title -->
            <SmallProduct />
        </article>
    </section>
</template>

<script>
    // import SubTopHeader from '@/components/SubTopHeader.vue'
    import SubHeader from '@/components/SubHeader.vue'
    import SmallProduct from '@/modules/VFreeSwiper.vue'
    export default {
        components: {
            // SubTopHeader,
            SubHeader,
            SmallProduct
        },

        data: function () {
            return {
                headerName: [{ name: '주문완료' }]
            }
        }
    }
</script>

<style></style>
