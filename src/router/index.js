import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/', // URL 주소
            component: () => import('@/views/MainView'), // 해당 URL이 사용할 컴포넌트 (page)
            meta: {
                layout: 'AppLayoutEmpty'
            }
        },
        {
            path: '/home_old',
            name: 'home_old',
            component: () => import('@/views/HomeView'),
            meta: { layout: 'AppLayoutHome' }
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/HomePhase2View'),
            meta: { layout: 'AppLayoutHome' },
            new: true
        },
        {
            path: '/category_home',
            component: () => import('@/views/CategoryHomeView'),
            meta: { layout: 'AppLayoutEmpty' }
        },
        {
            path: '/ranking',
            component: () => import('@/views/RankingView'),
            meta: { layout: 'AppLayoutHome' }
        },
        {
            path: '/ranking_brand',
            component: () => import('@/views/RankingBrandView'),
            meta: { layout: 'AppLayoutHome' }
        },
        {
            path: '/sub',
            component: () => import('@/views/SubView')
        },
        /*
         ***    product  ***
         */
        {
            //상품상세 개선 2024
            path: '/product/pdp',
            component: () => import('@/views/product/PDPView'),
            meta: { layout: 'AppLayoutEmpty' }
        },
        {
            //상품상세 개선 2023
            path: '/product/productDetail',
            component: () => import('@/views/product/ProductDetail'),
            meta: { layout: 'AppLayoutEmpty' }
        },
        {
            //상품 리뷰 개선
            path: '/product/productReview',
            component: () => import('@/views/product/ProductReview')
        },
        {
            //판매자 리뷰 개선
            path: '/product/productSellerReview',
            component: () => import('@/views/product/ProductSellerReview')
        },
        {
            //스타일 리뷰 개선
            path: '/product/productStyleReview',
            component: () => import('@/views/product/ProductStyleReview')
        },
        {
            //판매자 소개 개선
            path: '/product/productSellerInfo',
            component: () => import('@/views/product/ProductSellerInfo')
        },
        {
            // 핫딜
            path: '/product/hot_deal',
            component: () => import('@/views/product/Hotdeal'),
            meta: { layout: 'AppLayoutHome' }
        },
        {
            //가격비교
            path: '/product/compare',
            component: () => import('@/views/product/ComparePriceView'),
            meta: { layout: 'AppLayoutEmpty' }
        },
        {
            // 필터 레이어
            path: '/product/filter',
            component: () => import('@/views/product/FilterLayerView'),
            meta: { layout: 'AppLayoutEmpty' }
        },
        //old page
        // {
        //     //상품상세
        //     path: '/productDetail',
        //     component: () => import('@/views/ProductDetail'),

        // },
        // {
        //     //리뷰
        //     path: '/review',
        //     component: () => import('@/views/ReviewView'),

        // },
        // {
        //     //스타일 리뷰
        //     path: '/styleReview',
        //     component: () => import('@/views/StyleReivewView'),

        // },
        // {
        //     //판매자 리뷰
        //     path: '/sellerReview',
        //     component: () => import('@/views/SellerReviewView'),

        // },
        {
            //상품문의
            path: '/sellerQna',
            component: () => import('@/views/SellerQnaView')
        },
        // {
        //     //판매자 소개
        //     path: '/sellerInfo',
        //     component: () => import('@/views/SellerInfoView'),

        // },
        {
            //상품고지
            path: '/productNotice',
            component: () => import('@/views/ProductNoticeView')
        },
        {
            //배송,반품,교환 안내
            path: '/deliveryInfo',
            component: () => import('@/views/DeliveryInfoView')
        },
        {
            //판매정 정보 팝업
            path: '/sellerPop',
            component: () => import('@/views/SellerPop')
        },
        {
            //구매 계정 안내 layer
            path: '/accountInfo',
            component: () => import('@/views/product/AccountInfoView')
        },
        {
            //배송,반품,교환 안내
            path: '/minishop',
            component: () => import('@/views/MiniShop')
        },
        {
            //판매정 정보 팝업
            path: '/magazine',
            component: () => import('@/views/MagazineView')
        },
        {
            //판매정 정보 팝업
            path: '/magazine',
            component: () => import('@/views/MagazineView')
        },
        {
            //cpp
            path: '/cpp',
            component: () => import('@/views/CppView')
        },
        {
            //LP/SRP
            path: '/listpage',
            component: () => import('@/views/LpView'),
            meta: { layout: 'AppLayoutEmpty' },
            new: true
        },
        {
            //LP/SRP 상품정보간소화
            path: '/product/list',
            component: () => import('@/views/product/ProductList'),
            // meta: { layout: 'AppLayoutEmpty' },
            new: true
        },
        {
            // 머스트케어 프로그램
            path: '/must_care_program',
            component: () => import('@/views/MustCareProgram')
        },
        {
            // 머스트케어프로그램 - 사전케어
            path: '/pre_care',
            component: () => import('@/views/PurchasingSafetyPreCareView')
        },
        {
            // 머스트케어프로그램 - 사후케어
            path: '/followup_care',
            component: () => import('@/views/PurchasingSafetyFollowUpCareView')
        },
        {
            //멤버십전용관
            path: '/membership_mall',
            component: () => import('@/views/mypage/MembershipMall')
        },
        {
            // 전체보기_기획전_old1
            path: '/etc/selling_event_old1',
            component: () => import('@/views/etc/SellingEventAllView'),
            meta: { layout: 'AppLayoutFree' }
        },
        {
            // 전체보기_기획전 2310 개선
            path: '/etc/selling_event',
            component: () => import('@/views/etc/SellingEventView')
            // meta: { layout: 'AppLayoutFree' }
        },
        {
            // 전체보기_이벤트 2310 개선
            path: '/etc/event',
            component: () => import('@/views/etc/SellingEventView')
            // meta: { layout: 'AppLayoutFree' }
        },
        {
            // icons 리스트 페이지 구축
            path: '/iconlist',
            component: () => import('@/views/IconListView')
        },
        {
            //멤버십혜택
            path: '/membership_benefit',
            component: () => import('@/views/mypage/MembershipBenefit')
        },
        {
            //위조품 신고
            path: '/forgery_apply',
            component: () => import('@/views/mypage/ForgeryApply')
        },
        {
            //상품 신고하기 - vip ((임시))
            path: '/product_statement',
            component: () => import('@/views/product/ProductDetailStatement')
        },
        {
            // 전체보기_기획전
            path: '/etc/selling_event',
            component: () => import('@/views/etc/SellingEventAllView')
        },
        {
            // 주문서 UI 개편 주문 컴포넌트
            path: '/order',
            component: () => import('@/views/order/Order')
        },
        {
            // 주문서 UI 개편 주문 모달
            path: '/order/modal',
            component: () => import('@/views/order/OrderModalList'),
            meta: { layout: 'AppLayoutEmpty' }
        },
        {
            // 주문서 UI 개편 주문완료
            path: '/order/complete',
            component: () => import('@/views/order/OrderComplete')
        },
        {
            path: '/order/modal_list',
            component: () => import('@/views/order/OrderModalList')
        },
        {
            // 부티크
            path: '/etc/boutique',
            component: () => import('@/views/etc/BoutiqueView'),
            meta: { layout: 'AppLayoutHome' }
        },
        {
            // 부티크 LP
            path: '/product/boutique_LP',
            component: () => import('@/views/product/BoutiqueLPView')
        },
        {
            // 부티크 전체 상품 보기
            path: '/product/boutique_all_products',
            component: () => import('@/views/product/BoutiqueAllView')
        },
        {
            name: 'error',
            path: '/error/:code',
            component: () => import('@/views/ErrorView'),
            meta: { layout: 'AppLayoutEmpty' }
        },
        {
            path: '/board/introduce_our_policies',
            component: () => import('@/views/board/IntroduceOurPolicies.vue')
        },
        {
            path: '/board/pre_care',
            component: () => import('@/views/board/PreCare.vue')
        },
        {
            path: '/board/followup_care',
            component: () => import('@/views/board/FollowupCare.vue')
        },
        {
            path: '/product/search',
            component: () => import('@/views/product/SearchView.vue'),
            meta: { layout: 'AppLayoutEmpty' }
        },
        {
            path: '/etc/outlet',
            component: () => import('@/views/etc/OutletView.vue'),
            meta: { layout: 'AppLayoutSub' }
        },
        {
            path: '/etc/outlet_search',
            component: () => import('@/views/etc/OutletSearchView.vue'),
            meta: { layout: 'AppLayoutEmpty' }
        },
        {
            path: '/etc/outlet_lp',
            component: () => import('@/views/etc/OutletListView.vue'),
            meta: { layout: 'AppLayoutEmpty' }
        },
        {
            path: '/etc/outlet_srp',
            component: () => import('@/views/etc/OutletSearchListView.vue'),
            meta: { layout: 'AppLayoutEmpty' }
        },
        {
            name: 'prd',
            path: '/product/product_search:list',
            component: () => import('@/views/product/ProductSearchView')
        },
        {
            name: 'modalModule',
            path: '/modal_module',
            component: () => import('@/views/ModalModuleView'),
            meta: { layout: 'AppLayoutEmpty' }
        },
        {
            path: '/layer_welcome',
            component: () => import('@/views/etc/LayerWelcomeView'),
            meta: { layout: 'AppLayoutEmpty' }
        },
        // 나의 관심 리스트
        {
            name: 'wishlist',
            path: '/mypage/wishlist',
            component: () => import('@/views/mypage/WishListView'),
            meta: { layout: 'AppLayoutSub' }
        },
        {
            // 404 Not Found Page
            path: '*',
            component: () => import('@/views/404'),
            meta: { layout: 'AppLayoutEmpty' }
        }
    ],
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})

export default router
