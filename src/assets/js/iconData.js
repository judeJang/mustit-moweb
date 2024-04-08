const s3Path = 'https://static-ux.mustit.co.kr'
const iconData = [
    {
        category: 'common',
        iconList: [
            s3Path + '/img/m/m_icon/icon_checkbox_check_on.svg',
            s3Path + '/img/m/m_icon/icon_checkbox_check_off.svg',
            s3Path + '/img/m/m_icon/floating-top.svg',
            s3Path + '/img/m/m_icon/select-arrow.svg',
            s3Path + '/img/m/m_common/icon-input-clear.png',
            s3Path + '/img/m/m_icon/icon-close-grayc-10.svg'
        ]
    },
    {
        category: 'header',
        iconList: [
            s3Path + '/img/m/m_icon/icon_back_b.svg',
            s3Path + '/img/m/m_icon/icon_home_b.svg',
            s3Path + '/img/m/m_icon/icon_search_b.svg',
            s3Path + '/img/m/m_icon/icon_cart_b.svg',
            s3Path + '/img/m/m_icon/icon_back_w.svg',
            s3Path + '/img/m/m_icon/icon_home_w.svg',
            s3Path + '/img/m/m_icon/icon_search_w.svg',
            s3Path + '/img/m/m_icon/icon_cart_w.svg',
            s3Path + '/img/m/m_sprites/icon_gnb2.png',
            s3Path + '/img/m/m_header/icon_drop.png',
            s3Path + '/img/m/m_header/icon_back.png',
            s3Path + '/img/m/m_header/icon_search.png',
            s3Path + '/img/m/m_header/icon_basket.png',
            s3Path + '/img/m/m_icon/icon-search-purple-16.svg',
            s3Path + '/img/m/m_icon/icon-search-gray3-16.svg'
        ]
    },
    {
        category: 'nav',
        iconList: [s3Path + '/img/m/m_sprites/icon_bottom_nav.png']
    },
    {
        category: 'lnb',
        iconList: [
            s3Path + '/img/m/m_lnb/icon_member.png',
            s3Path + '/img/m/m_lnb/icon_setting.png',
            s3Path + '/img/m/m_lnb/icon_close.png',
            s3Path + '/img/m/m_badge/iconN_v2.png',
            s3Path + '/img/m/m_lnb/icon_arrow_right.png',
            s3Path + '/img/m/m_lnb/icon_brand_empty.png'
        ]
    },
    {
        category: 'footer',
        iconList: [
            s3Path + '/img/m/m_footer/sns_facebook.png',
            s3Path + '/img/m/m_footer/sns_instagram.png',
            s3Path + '/img/m/m_footer/sns_youtube.png',
            s3Path + '/img/m/m_footer/sns_kakaotalkch.png',
            s3Path + '/img/m/m_footer/sns_naverpost.png'
        ]
    },
    {
        category: 'modal',
        iconList: [
            s3Path + '/img/m/m_icon/navi-icon-close.svg',
            s3Path + '/img/m/m_icon/navi-icon-close-w.svg',
            s3Path + '/img/m/m_icon/icon_modal_close.svg',
            s3Path + '/img/m/m_icon/icon_bullet_01.svg'
        ]
    },
    {
        category: 'home',
        iconList: [
            s3Path + '/img/m/m_badge/icon-time.png',
            s3Path + '/img/m/m_icon/arrow-right-event.svg'
        ]
    },
    {
        category: 'vip',
        iconList: [
            s3Path + '/img/m/m_icon/icon_brand_arrow.svg',
            s3Path + '/img/m/m_icon/icon_arrow_right_m1.svg',
            s3Path + '/img/m/m_icon/icon_arrow_right_m2.svg',
            s3Path + '/img/m/m_icon/icon_arrow_down_m1.svg',
            s3Path + '/img/m/m_icon/icon_arrow_s16.svg',
            s3Path + '/img/m/m_banner/m_banner_arrow.svg',
            s3Path + '/img/m/m_icon/icon_arrow_down_gray.svg',
            s3Path + '/img/m/m_icon/icon_hotdeal.svg',
            s3Path + '/img/m/m_icon/icon_time.svg',
            s3Path + '/img/m/m_icon/icon_zzim_off.svg',
            s3Path + '/img/m/m_icon/icon_zzim_on.svg',
            s3Path + '/img/m/m_icon/icon_heart_20_off.png',
            s3Path + '/img/m/m_icon/icon_heart_20_on.png',
            s3Path + '/img/m/m_icon/icon_share.svg',
            s3Path + '/img/m/m_icon/icon_help.png',
            s3Path + '/img/m/m_icon/icon_star_on.svg',
            s3Path + '/img/m/m_icon/icon_star_off.svg',
            s3Path + '/img/m/m_icon/icon_download.svg',
            s3Path + '/img/m/m_icon/icon_download_red.svg',
            s3Path + '/img/m/m_icon/icon_download_v2.svg',
            s3Path + '/img/m/m_icon/icon_tapeline.svg',
            s3Path + '/img/m/m_icon/vip-icon-as.svg',
            s3Path + '/img/m/m_icon/icon_point.svg',
            s3Path + '/img/m/m_icon/icon_creditcard.svg',
            s3Path + '/img/m/m_icon/icon_delivery_01.svg',
            s3Path + '/img/m/m_icon/icon_delivery_02.svg',
            s3Path + '/img/m/m_icon/icon_delivery_03.svg',
            s3Path + '/img/m/m_icon/icon_delivery_quick.svg',
            s3Path + '/img/m/m_icon/icon_seller.svg',
            s3Path + '/img/m/m_icon/icon-notice.svg',
            s3Path + '/img/m/m_icon/vip-icon-tapeline-w.svg',
            s3Path + '/img/m/m_icon/vip-icon-sellerinfo.svg',
            s3Path + '/img/m/m_icon/icon_vip_minishop.svg',
            s3Path + '/img/m/m_icon/vip-icon-minishop-heart-off.svg',
            s3Path + '/img/m/m_icon/vip-icon-minishop-heart-on.svg',
            s3Path + '/img/m/m_icon/icon_close_w12.svg',
            s3Path + '/img/m/m_icon/icon_check_red.svg',
            s3Path + '/img/m/m_icon/vip-icon-swipe-arrow.svg',
            s3Path + '/img/m/m_icon/icon_purchase_24.svg',
            s3Path + '/img/m/m_icon/icon-vip-return-24.svg',
            s3Path + '/img/m/m_icon/icon-arrow-right-grayc-8.svg'
        ]
    },
    {
        category: 'lp / srp',
        iconList: [
            s3Path + '/img/m/m_badge/icon-quick.png',
            s3Path + '/img/m/m_sprites/icon_m_product_sprites_v1.png',
            s3Path + '/img/m/m_icon/icon_zzim_on.png',
            s3Path + '/img/m/m_icon/icon-empty-srp-gray-48.svg',
            s3Path + '/img/m/m_icon/icon-filter-black-12.svg',
            s3Path + '/img/m/m_icon/icon-filter-red-12.svg',
            s3Path + '/img/m/m_icon/icon-tooltips-16.png',
            s3Path + '/img/m/m_icon/icon-tooltips-active-16.png'
        ]
    },
    {
        category: 'cpp',
        iconList: [s3Path + '/img/m/m_icon/icon_arrow_right12.png']
    },
    {
        category: 'review',
        iconList: [
            s3Path + '/img/m/m_icon/icon_star_off.svg',
            s3Path + '/img/m/m_icon/icon_star_on.svg',
            s3Path + '/img/m/m_icon/icon_review_thumb_up_inactive_active.svg',
            s3Path + '/img/m/m_icon/icon_review_thumb_up_inactive.svg',
            s3Path + '/img/m/m_icon/icon_arrow_s16_aaa.svg',
            s3Path + '/img/m/m_icon/icon_img_zoom.svg',
            s3Path + '/img/m/m_icon/icon-star-yellow-on.svg',
            s3Path + '/img/m/m_icon/icon-star-yellow-off.svg',
            s3Path + '/img/m/m_icon/icon-star-frame.png'
        ]
    },
    {
        category: '판매자 소개',
        iconList: [
            s3Path + '/img/m/m_icon/seller/icon_trust_vip_l.png',
            s3Path + '/img/m/m_icon/icon_vip_best_quality.svg',
            s3Path + '/img/m/m_icon/icon_vidio_play.png',
            s3Path + '/img/m/m_icon/icon-img-more.svg'
        ]
    },
    {
        category: '상품문의',
        iconList: [
            s3Path + '/img/m/m_icon/icon_vip_qna_lock_01.svg',
            s3Path + '/img/m/m_icon/icon_vip_qna_lock_02.svg',
            s3Path + '/img/m/m_icon/icons_qna_arrows_down.svg',
            s3Path + '/img/m/m_icon/icons_qna_arrows_up.svg',
            s3Path + '/img/m/m_icon/icon_vip_qna_photo.svg'
        ]
    },
    {
        category: '머스트 케어',
        iconList: [
            s3Path + '/img/m/m_contents/icon-compensation-policy-arrow.png',
            s3Path + '/img/m/m_icon/icon-refresh02.png'
        ]
    },
    {
        category: '멤버쉽',
        iconList: [
            s3Path + '/img/m/m_mypage/icon-cake-40.png',
            s3Path + '/img/m/m_mypage/icon-repair-40.png',
            s3Path + '/img/m/m_mypage/icon-crown-40.png',
            s3Path + '/img/m/m_mypage/icon-dry-40.png',
            s3Path + '/img/m/m_mypage/icon-cs-40.png',
            s3Path + '/img/m/m_mypage/icon-box-40.png',
            s3Path + '/img/m/m_mypage/icon-vip-40.png'
        ]
    }
]
export default iconData
