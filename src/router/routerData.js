export const list = [
    {
        title: 'Home 기존',
        link: '/home_old',
        path: 'Home'
    },
    {
        title: 'Home phase2',
        link: '/home',
        path: 'Home'
    },
    {
        title: '카테고리홈',
        link: '/category_home',
        path: 'root',
        new: true
    },
    {
        title: '웰컴 팝업',
        link: '/layer_welcome',
        path: 'etc',
        new: true
    },
    {
        title: 'Ranking 상품',
        link: '/ranking',
        path: 'etc'
    },
    {
        title: 'Ranking 브랜드',
        link: '/ranking_brand',
        path: 'etc'
    },
    {
        title: 'VIP',
        link: '/product/productDetail',
        path: 'product'
    },
    {
        title: '상품 리뷰',
        link: '/product/productReview',
        path: 'product'
    },
    {
        title: '스타일 리뷰',
        link: '/product/productStyleReview',
        path: 'product'
    },
    {
        title: '판매자 리뷰',
        link: '/product/productSellerReview',
        path: 'product'
    },
    {
        title: '판매자 소개',
        link: '/product/productSellerInfo',
        path: 'product'
    },
    {
        title: '상품문의',
        link: '/sellerQna',
        path: 'product'
    },
    {
        title: 'VIP 상품고시',
        link: '/productNotice',
        path: 'product'
    },
    {
        title: '배송지 정보',
        link: '/deliveryInfo',
        path: 'product'
    },
    {
        title: '판매자 정보 modal',
        link: '/sellerPop',
        path: 'product'
    },
    {
        title: '구매 계정 안내 layer',
        link: '/accountInfo',
        path: 'product',
        new: true
    },
    {
        title: '미니샵',
        link: '/minishop',
        path: 'Minishop'
    },
    {
        title: 'Srp',
        link: '/listpage',
        path: 'root'
    },
    {
        title: '매거진',
        link: '/magazine',
        path: 'community'
    },
    {
        title: 'CPP',
        link: '/cpp',
        path: 'etc'
    },
    {
        title: '머스트케어프로그램',
        link: '/must_care_program',
        path: 'board'
    },
    {
        title: '사전케어',
        link: '/pre_care?contents=seller_monitoring',
        path: 'board'
    },
    {
        title: '사후케어',
        link: '/followup_care?contents=compensation_forgery',
        path: 'board'
    },
    {
        title: '멤버십 혜택',
        link: '/membership_benefit',
        path: 'member'
    },
    {
        title: '위조품 신고',
        link: '/forgery_apply',
        path: 'member'
    },
    {
        title: '신고하기 modal',
        link: '/product_statement',
        path: 'product'
    },
    {
        title: '멤버십 전용관',
        link: '/membership_mall',
        path: 'member'
    },
    {
        title: '기획전 전체보기 old1',
        link: '/etc/selling_event_old1',
        path: 'etc'
    },
    {
        title: '기획전 전체보기 개선',
        link: '/etc/selling_event',
        path: 'etc',
        new: true
    },
    {
        title: '이벤트 전체보기 개선',
        link: '/etc/event',
        path: 'etc',
        new: true
    },
    {
        title: '아울렛 전용관',
        link: '/etc/outlet',
        path: 'etc'
    },
    {
        title: '아울렛 전용관 - 검색 대기 화면',
        link: '/etc/outlet_search',
        path: 'etc'
    },
    {
        title: '아울렛 전용관 - lp',
        link: '/etc/outlet_lp',
        path: 'etc'
    },
    {
        title: '아울렛 전용관 - srp',
        link: '/etc/outlet_srp',
        path: 'etc'
    },
    {
        title: '에러페이지 404',
        link: {
            name: 'error',
            params: {
                code: '404'
            }
        },
        path: 'root'
    },
    {
        title: '에러페이지 504',
        link: {
            name: 'error',
            params: {
                code: '504'
            }
        },
        path: 'root'
    },
    {
        title: '에러페이지 code',
        link: {
            name: 'error',
            params: {
                code: 'code'
            }
        },
        path: 'root'
    },
    {
        title: '에러페이지 data',
        link: {
            name: 'error',
            params: {
                code: 'data'
            }
        },
        path: 'root'
    },
    {
        title: '핫딜',
        link: '/product/hot_deal',
        path: 'product'
    },
    {
        title: 'LP',
        link: { name: 'prd', params: { list: '_lp' } },
        path: 'product'
    },
    {
        title: 'BLP',
        link: { name: 'prd', params: { list: '_blp' } },
        path: 'product'
    },
    {
        title: '부티크',
        link: '/etc/boutique',
        path: 'etc'
    },
    {
        title: '주문서',
        link: '/order',
        path: 'order'
    },
    {
        title: '주문서 모달',
        link: '/order/modal',
        path: 'order'
    },
    {
        title: '주문서 완료',
        link: '/order/complete',
        path: 'order'
    },
    {
        title: '부티크 LP',
        link: '/product/boutique_LP',
        path: 'product'
    },
    {
        title: '부티크 전체 상품',
        link: '/product/boutique_all_products',
        path: 'product'
    },
    {
        title: '머스트잇 정책 소개',
        link: '/board/introduce_our_policies',
        path: 'board'
    },
    {
        title: '머스트잇 정책 소개 - 사전케어',
        link: '/board/pre_care?contents=entrance_examination',
        path: 'board'
    },
    {
        title: '머스트잇 정책 소개 - 사후케어',
        link: '/board/followup_care?contents=forgery_compensation',
        path: 'board'
    },
    {
        title: '검색대기창',
        link: '/product/search',
        path: 'product'
    },
    {
        title: '모달 모듈',
        link: '/modal_module',
        path: 'root'
    },
    {
        title: '나의 관심 리스트',
        link: '/mypage/wishlist',
        path: 'mypage',
        new: true
    },
    {
        title: 'lp/srp 상품정보 간소화',
        link: '/product/list',
        path: 'product',
        new: true
    }
]
