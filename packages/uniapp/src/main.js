import { api } from './components/render/RenderMain'
import uviewPlus from 'uview-plus'
import ClipboardJS from 'clipboard'
// const camelizeRE = /-(\w)/g
// const camelize = (str) => {
//   return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))
// }

import uActionSheet from 'uview-plus/components/u-action-sheet/u-action-sheet.vue'
import uAlbum from 'uview-plus/components/u-album/u-album.vue'
import uAlert from 'uview-plus/components/u-alert/u-alert.vue'
import uAvatar from 'uview-plus/components/u-avatar/u-avatar.vue'
import uAvatarGroup from 'uview-plus/components/u-avatar-group/u-avatar-group.vue'
import uBackTop from 'uview-plus/components/u-back-top/u-back-top.vue'
import uBadge from 'uview-plus/components/u-badge/u-badge.vue'
import uButton from 'uview-plus/components/u-button/u-button.vue'
import uCalendar from 'uview-plus/components/u-calendar/u-calendar.vue'
import uCarKeyboard from 'uview-plus/components/u-car-keyboard/u-car-keyboard.vue'
import uCell from 'uview-plus/components/u-cell/u-cell.vue'
import uCellGroup from 'uview-plus/components/u-cell-group/u-cell-group.vue'
import uCheckbox from 'uview-plus/components/u-checkbox/u-checkbox.vue'
import uCheckboxGroup from 'uview-plus/components/u-checkbox-group/u-checkbox-group.vue'
import uCircleProgress from 'uview-plus/components/u-circle-progress/u-circle-progress.vue'
import uCode from 'uview-plus/components/u-code/u-code.vue'
import uCodeInput from 'uview-plus/components/u-code-input/u-code-input.vue'
import uCol from 'uview-plus/components/u-col/u-col.vue'
import uCollapse from 'uview-plus/components/u-collapse/u-collapse.vue'
import uCollapseItem from 'uview-plus/components/u-collapse-item/u-collapse-item.vue'
import uColumnNotice from 'uview-plus/components/u-column-notice/u-column-notice.vue'
import uCountDown from 'uview-plus/components/u-count-down/u-count-down.vue'
import uCountTo from 'uview-plus/components/u-count-to/u-count-to.vue'
import uDatetimePicker from 'uview-plus/components/u-datetime-picker/u-datetime-picker.vue'
import uDivider from 'uview-plus/components/u-divider/u-divider.vue'
import uDropdown from 'uview-plus/components/u-dropdown/u-dropdown.vue'
import uDropdownItem from 'uview-plus/components/u-dropdown-item/u-dropdown-item.vue'
import uEmpty from 'uview-plus/components/u-empty/u-empty.vue'
import uForm from 'uview-plus/components/u-form/u-form.vue'
import uFormItem from 'uview-plus/components/u-form-item/u-form-item.vue'
import uGap from 'uview-plus/components/u-gap/u-gap.vue'
import uGrid from 'uview-plus/components/u-grid/u-grid.vue'
import uGridItem from 'uview-plus/components/u-grid-item/u-grid-item.vue'
import uIcon from 'uview-plus/components/u-icon/u-icon.vue'
import uImage from 'uview-plus/components/u-image/u-image.vue'
import uIndexAnchor from 'uview-plus/components/u-index-anchor/u-index-anchor.vue'
import uIndexItem from 'uview-plus/components/u-index-item/u-index-item.vue'
import uIndexList from 'uview-plus/components/u-index-list/u-index-list.vue'
import uInput from 'uview-plus/components/u-input/u-input.vue'
import uKeyboard from 'uview-plus/components/u-keyboard/u-keyboard.vue'
import uLine from 'uview-plus/components/u-line/u-line.vue'
import uLineProgress from 'uview-plus/components/u-line-progress/u-line-progress.vue'
import uLink from 'uview-plus/components/u-link/u-link.vue'
import uList from 'uview-plus/components/u-list/u-list.vue'
import uListItem from 'uview-plus/components/u-list-item/u-list-item.vue'
import uLoadingIcon from 'uview-plus/components/u-loading-icon/u-loading-icon.vue'
import uLoadingPage from 'uview-plus/components/u-loading-page/u-loading-page.vue'
import uLoadmore from 'uview-plus/components/u-loadmore/u-loadmore.vue'
import uMessageInput from 'uview-plus/components/u-message-input/u-message-input.vue'
import uModal from 'uview-plus/components/u-modal/u-modal.vue'
import uNavbar from 'uview-plus/components/u-navbar/u-navbar.vue'
import uNoNetwork from 'uview-plus/components/u-no-network/u-no-network.vue'
import uNoticeBar from 'uview-plus/components/u-notice-bar/u-notice-bar.vue'
import uNotify from 'uview-plus/components/u-notify/u-notify.vue'
import uNumberBox from 'uview-plus/components/u-number-box/u-number-box.vue'
import uNumberKeyboard from 'uview-plus/components/u-number-keyboard/u-number-keyboard.vue'
import uOverlay from 'uview-plus/components/u-overlay/u-overlay.vue'
import uParse from 'uview-plus/components/u-parse/u-parse.vue'
import uPicker from 'uview-plus/components/u-picker/u-picker.vue'
import uPickerColumn from 'uview-plus/components/u-picker-column/u-picker-column.vue'
import uPopup from 'uview-plus/components/u-popup/u-popup.vue'
import uRadio from 'uview-plus/components/u-radio/u-radio.vue'
import uRadioGroup from 'uview-plus/components/u-radio-group/u-radio-group.vue'
import uRate from 'uview-plus/components/u-rate/u-rate.vue'
import uReadMore from 'uview-plus/components/u-read-more/u-read-more.vue'
import uRow from 'uview-plus/components/u-row/u-row.vue'
import uRowNotice from 'uview-plus/components/u-row-notice/u-row-notice.vue'
import uSafeBottom from 'uview-plus/components/u-safe-bottom/u-safe-bottom.vue'
import uScrollList from 'uview-plus/components/u-scroll-list/u-scroll-list.vue'
import uSearch from 'uview-plus/components/u-search/u-search.vue'
import uSkeleton from 'uview-plus/components/u-skeleton/u-skeleton.vue'
import uSlider from 'uview-plus/components/u-slider/u-slider.vue'
import uStatusBar from 'uview-plus/components/u-status-bar/u-status-bar.vue'
import uSteps from 'uview-plus/components/u-steps/u-steps.vue'
import uStepsItem from 'uview-plus/components/u-steps-item/u-steps-item.vue'
import uSticky from 'uview-plus/components/u-sticky/u-sticky.vue'
import uSubsection from 'uview-plus/components/u-subsection/u-subsection.vue'
import uSwipeAction from 'uview-plus/components/u-swipe-action/u-swipe-action.vue'
import uSwipeActionItem from 'uview-plus/components/u-swipe-action-item/u-swipe-action-item.vue'
import uSwiper from 'uview-plus/components/u-swiper/u-swiper.vue'
import uSwiperIndicator from 'uview-plus/components/u-swiper-indicator/u-swiper-indicator.vue'
import uSwitch from 'uview-plus/components/u-switch/u-switch.vue'
import uTabbar from 'uview-plus/components/u-tabbar/u-tabbar.vue'
import uTabbarItem from 'uview-plus/components/u-tabbar-item/u-tabbar-item.vue'
import uTable from 'uview-plus/components/u-table/u-table.vue'
import uTabs from 'uview-plus/components/u-tabs/u-tabs.vue'
import uTabsItem from 'uview-plus/components/u-tabs-item/u-tabs-item.vue'
import uTag from 'uview-plus/components/u-tag/u-tag.vue'
import uTd from 'uview-plus/components/u-td/u-td.vue'
import uText from 'uview-plus/components/u-text/u-text.vue'
import uTextarea from 'uview-plus/components/u-textarea/u-textarea.vue'
import uToast from 'uview-plus/components/u-toast/u-toast.vue'
import uToolbar from 'uview-plus/components/u-toolbar/u-toolbar.vue'
import uTooltip from 'uview-plus/components/u-tooltip/u-tooltip.vue'
import uTr from 'uview-plus/components/u-tr/u-tr.vue'
import uTransition from 'uview-plus/components/u-transition/u-transition.vue'
import uUpload from 'uview-plus/components/u-upload/u-upload.vue'

import uniCloud from '@dcloudio/uni-cloud'

import uniBadge from '@dcloudio/uni-ui/lib/uni-badge/uni-badge.vue'
import uniDataSelect from '@dcloudio/uni-ui/lib/uni-data-select/uni-data-select.vue'
import uniGroup from '@dcloudio/uni-ui/lib/uni-group/uni-group.vue'
import uniPopup from '@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue'
import uniSwiperDot from '@dcloudio/uni-ui/lib/uni-swiper-dot/uni-swiper-dot.vue'
import uniBreadcrumb from '@dcloudio/uni-ui/lib/uni-breadcrumb/uni-breadcrumb.vue'
import uniDateformat from '@dcloudio/uni-ui/lib/uni-dateformat/uni-dateformat.vue'
import uniIcons from '@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue'
import uniPopupDialog from '@dcloudio/uni-ui/lib/uni-popup-dialog/uni-popup-dialog.vue'
import uniTable from '@dcloudio/uni-ui/lib/uni-table/uni-table.vue'
import uniBreadcrumbItem from '@dcloudio/uni-ui/lib/uni-breadcrumb-item/uni-breadcrumb-item.vue'
import uniDatetimePicker from '@dcloudio/uni-ui/lib/uni-datetime-picker/uni-datetime-picker.vue'
import uniIndexedList from '@dcloudio/uni-ui/lib/uni-indexed-list/uni-indexed-list.vue'
import uniPopupMessage from '@dcloudio/uni-ui/lib/uni-popup-message/uni-popup-message.vue'
import uniTag from '@dcloudio/uni-ui/lib/uni-tag/uni-tag.vue'
import uniCalendar from '@dcloudio/uni-ui/lib/uni-calendar/uni-calendar.vue'
import uniDrawer from '@dcloudio/uni-ui/lib/uni-drawer/uni-drawer.vue'
import uniLink from '@dcloudio/uni-ui/lib/uni-link/uni-link.vue'
import uniPopupShare from '@dcloudio/uni-ui/lib/uni-popup-share/uni-popup-share.vue'
import uniTbody from '@dcloudio/uni-ui/lib/uni-tbody/uni-tbody.vue'
import uniCard from '@dcloudio/uni-ui/lib/uni-card/uni-card.vue'
import uniEasyinput from '@dcloudio/uni-ui/lib/uni-easyinput/uni-easyinput.vue'
import uniList from '@dcloudio/uni-ui/lib/uni-list/uni-list.vue'
import uniRate from '@dcloudio/uni-ui/lib/uni-rate/uni-rate.vue'
import uniTd from '@dcloudio/uni-ui/lib/uni-td/uni-td.vue'
import uniCol from '@dcloudio/uni-ui/lib/uni-col/uni-col.vue'
import uniFab from '@dcloudio/uni-ui/lib/uni-fab/uni-fab.vue'
import uniListAd from '@dcloudio/uni-ui/lib/uni-list-ad/uni-list-ad.vue'
import uniRow from '@dcloudio/uni-ui/lib/uni-row/uni-row.vue'
import uniTh from '@dcloudio/uni-ui/lib/uni-th/uni-th.vue'
import uniCollapse from '@dcloudio/uni-ui/lib/uni-collapse/uni-collapse.vue'
import uniFav from '@dcloudio/uni-ui/lib/uni-fav/uni-fav.vue'
import uniListChat from '@dcloudio/uni-ui/lib/uni-list-chat/uni-list-chat.vue'
// import uniScss from '@dcloudio/uni-ui/lib/uni-scss/uni-scss.vue'
import uniThead from '@dcloudio/uni-ui/lib/uni-thead/uni-thead.vue'
import uniCollapseItem from '@dcloudio/uni-ui/lib/uni-collapse-item/uni-collapse-item.vue'
import uniFilePicker from '@dcloudio/uni-ui/lib/uni-file-picker/uni-file-picker.vue'
import uniListItem from '@dcloudio/uni-ui/lib/uni-list-item/uni-list-item.vue'
import uniSearchBar from '@dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar.vue'
import uniTitle from '@dcloudio/uni-ui/lib/uni-title/uni-title.vue'
import uniCombox from '@dcloudio/uni-ui/lib/uni-combox/uni-combox.vue'
import uniForms from '@dcloudio/uni-ui/lib/uni-forms/uni-forms.vue'
import uniLoadMore from '@dcloudio/uni-ui/lib/uni-load-more/uni-load-more.vue'
import uniSection from '@dcloudio/uni-ui/lib/uni-section/uni-section.vue'
import uniTooltip from '@dcloudio/uni-ui/lib/uni-tooltip/uni-tooltip.vue'
import uniCountdown from '@dcloudio/uni-ui/lib/uni-countdown/uni-countdown.vue'
import uniFormsItem from '@dcloudio/uni-ui/lib/uni-forms-item/uni-forms-item.vue'
import uniNavBar from '@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.vue'
import uniSegmentedControl from '@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control.vue'
import uniTr from '@dcloudio/uni-ui/lib/uni-tr/uni-tr.vue'
import uniDataCheckbox from '@dcloudio/uni-ui/lib/uni-data-checkbox/uni-data-checkbox.vue'
import uniGoodsNav from '@dcloudio/uni-ui/lib/uni-goods-nav/uni-goods-nav.vue'
import uniNoticeBar from '@dcloudio/uni-ui/lib/uni-notice-bar/uni-notice-bar.vue'
import uniSteps from '@dcloudio/uni-ui/lib/uni-steps/uni-steps.vue'
import uniTransition from '@dcloudio/uni-ui/lib/uni-transition/uni-transition.vue'
import uniDataPicker from '@dcloudio/uni-ui/lib/uni-data-picker/uni-data-picker.vue'
import uniGrid from '@dcloudio/uni-ui/lib/uni-grid/uni-grid.vue'
import uniNumberBox from '@dcloudio/uni-ui/lib/uni-number-box/uni-number-box.vue'
import uniSwipeAction from '@dcloudio/uni-ui/lib/uni-swipe-action/uni-swipe-action.vue'
import uniDataPickerview from '@dcloudio/uni-ui/lib/uni-data-pickerview/uni-data-pickerview.vue'
import uniGridItem from '@dcloudio/uni-ui/lib/uni-grid-item/uni-grid-item.vue'
import uniPagination from '@dcloudio/uni-ui/lib/uni-pagination/uni-pagination.vue'
import uniSwipeActionItem from '@dcloudio/uni-ui/lib/uni-swipe-action-item/uni-swipe-action-item.vue'

window.TinyLowcodeComponent = {
  uActionSheet,
  uAlbum,
  uAlert,
  uAvatar,
  uAvatarGroup,
  uBackTop,
  uBadge,
  uButton,
  uCalendar,
  uCarKeyboard,
  uCell,
  uCellGroup,
  uCheckbox,
  uCheckboxGroup,
  uCircleProgress,
  uCode,
  uCodeInput,
  uCol,
  uCollapse,
  uCollapseItem,
  uColumnNotice,
  uCountDown,
  uCountTo,
  uDatetimePicker,
  uDivider,
  uDropdown,
  uDropdownItem,
  uEmpty,
  uForm,
  uFormItem,
  uGap,
  uGrid,
  uGridItem,
  uIcon,
  uImage,
  uIndexAnchor,
  uIndexItem,
  uIndexList,
  uInput,
  uKeyboard,
  uLine,
  uLineProgress,
  uLink,
  uList,
  uListItem,
  uLoadingIcon,
  uLoadingPage,
  uLoadmore,
  uMessageInput,
  uModal,
  uNavbar,
  uNoNetwork,
  uNoticeBar,
  uNotify,
  uNumberBox,
  uNumberKeyboard,
  uOverlay,
  uParse,
  uPicker,
  uPickerColumn,
  uPopup,
  uRadio,
  uRadioGroup,
  uRate,
  uReadMore,
  uRow,
  uRowNotice,
  uSafeBottom,
  uScrollList,
  uSearch,
  uSkeleton,
  uSlider,
  uStatusBar,
  uSteps,
  uStepsItem,
  uSticky,
  uSubsection,
  uSwipeAction,
  uSwipeActionItem,
  uSwiper,
  uSwiperIndicator,
  uSwitch,
  uTabbar,
  uTabbarItem,
  uTable,
  uTabs,
  uTabsItem,
  uTag,
  uTd,
  uText,
  uTextarea,
  uToast,
  uToolbar,
  uTooltip,
  uTr,
  uTransition,
  uUpload,
  uniBadge,
  uniDataSelect,
  uniGroup,
  uniPopup,
  uniSwiperDot,
  uniBreadcrumb,
  uniDateformat,
  uniIcons,
  uniPopupDialog,
  uniTable,
  uniBreadcrumbItem,
  uniDatetimePicker,
  uniIndexedList,
  uniPopupMessage,
  uniTag,
  uniCalendar,
  uniDrawer,
  uniLink,
  uniPopupShare,
  uniTbody,
  uniCard,
  uniEasyinput,
  uniList,
  uniRate,
  uniTd,
  uniCol,
  uniFab,
  uniListAd,
  uniRow,
  uniTh,
  uniCollapse,
  uniFav,
  uniListChat,
//   uniScss,
  uniThead,
  uniCollapseItem,
  uniFilePicker,
  uniListItem,
  uniSearchBar,
  uniTitle,
  uniCombox,
  uniForms,
  uniLoadMore,
  uniSection,
  uniTooltip,
  uniCountdown,
  uniFormsItem,
  uniNavBar,
  uniSegmentedControl,
  uniTr,
  uniDataCheckbox,
  uniGoodsNav,
  uniNoticeBar,
  uniSteps,
  uniTransition,
  uniDataPicker,
  uniGrid,
  uniNumberBox,
  uniSwipeAction,
  uniDataPickerview,
  uniGridItem,
  uniPagination,
  uniSwipeActionItem
}

const dispatch = (name, data) => {
  window.parent.document.dispatchEvent(new CustomEvent(name, data))
}

new ResizeObserver(() => {
  dispatch('canvasResize')
}).observe(document.body)

import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(uviewPlus)
  dispatch('canvasReady', {
    detail: {
      ...api,
      getApp() {
        return App
      }
    }
  })
  return {
    app
  }
}
