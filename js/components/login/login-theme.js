// import Color from 'color';

import {Platform} from 'react-native';
var primary = require('../../themes/variable').brandPrimary;
var secondary = require('../../themes/variable').brandSecondary;
var info = require('../../themes/variable').brandInfo;
var success = require('../../themes/variable').brandSuccess;
var danger = require('../../themes/variable').brandDanger;
var warning = require('../../themes/variable').brandWarning;
var sidebar = require('../../themes/variable').brandSidebar;
module.exports = {
    brandPrimary : primary,
    brandInfo: info,
    brandSuccess: success,
    brandDanger: danger,
    brandWarning: warning,
    brandSidebar: sidebar,

    brandSecondary: secondary,

    inverseTextColor: "#fff",
    textColor: "#fff",
    
    fontSizeBase: 15,
    titleFontSize: 17,

    get fontSizeH1 () {
        return this.fontSizeBase*1.8;
    },
    get fontSizeH2 () {
        return this.fontSizeBase* 1.6;
    },
    get fontSizeH3 () {
        return this.fontSizeBase* 1.4;
    },
    get btnTextSize () {
        return this.fontSizeBase* 1.1;
    },
    get btnTextSizeLarge () {
        return this.fontSizeBase* 1.5;
    },
    get btnTextSizeSmall () {
        return this.fontSizeBase* .8;
    },
    get iconSizeLarge () {
        return this.iconFontSize* 1.5;
    },
    get iconSizeSmall () {
        return this.iconFontSize* .6;
    },

    borderRadiusBase: 4,

    get borderRadiusLarge () {
        return this.fontSizeBase* 3.8;
    },

    footerHeight: 55,
    toolbarHeight: (Platform.OS === 'ios' ) ? 70 : 55,
    toolbarDefaultBg: "#00c497",
    toolbarInverseBg: "#222",

    tabBgColor: "#00c497",
    tabTextColor: "#fff",

    btnDisabledBg: '#b5b5b5',
    btnDisabledClr: '#f1f1f1',

    cardDefaultBg: "#fff",

    get darkenHeader() {
        return Color(this.tabBgColor).darken(0.03).hexString();
    },
    get btnPrimaryBg () {
        return this.brandPrimary;
    },
    get btnPrimaryColor () {
        return this.inverseTextColor;
    },
    get btnSuccessBg () {
        return this.brandSuccess;
    },
    get btnSuccessColor () {
        return this.inverseTextColor;
    },
    get btnDangerBg () {
        return this.brandDanger;
    },
    get btnDangerColor () {
        return this.inverseTextColor;
    },
    get btnInfoBg () {
        return this.brandInfo;
    },
    get btnInfoColor () {
        return this.inverseTextColor;
    },
    get btnWarningBg () {
        return this.brandWarning;
    },
    get btnWarningColor () {
        return this.inverseTextColor;
    },

    borderWidth: 1,

    get inputColor () {
        return this.textColor;
    },
    get inputColorPlaceholder () {
        return 'rgba(0, 0, 0, 0.7)';
    },
    inputBorderColor: "transparent",
    inputHeightBase: 50,
    inputGroupMarginBottom: 10,
    inputPaddingLeft: 5,
    get inputPaddingLeftIcon () {
        return this.inputPaddingLeft* 8;
    },

    dropdownBg: "#000",
    dropdownLinkColor: "#414142",

    jumbotronPadding: 30,
    jumbotronBg: "#C9C9CE",

    contentPadding: 10,

    listBorderColor: "#ddd",
    listDividerBg: "#F5F5F5",
    listItemPadding: 15,
    listNoteColor: "#58575C",

    iconFontSize: 32,

    badgeColor: "#fff",
    badgeBg: "#ED1727",

    lineHeight: 21,

    defaultSpinnerColor: "#45D56E",
    inverseSpinnerColor: "#1A191B",

    defaultProgressColor: "#E4202D",
    inverseProgressColor: "#1A191B"
}
