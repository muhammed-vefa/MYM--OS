webpackJsonp([0],{

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaleListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_request_service_request__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LocaleListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocaleListPage = /** @class */ (function () {
    function LocaleListPage(navCtrl, navParams, viewCtrl, serviceRequestProvider, utils) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.serviceRequestProvider = serviceRequestProvider;
        this.utils = utils;
        this.localeList = [];
        this.copy = [];
        this.shouldEnableScrolling = false;
        this.limitToFirst = 0;
        this.top = 20;
    }
    LocaleListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocaleListPage');
    };
    LocaleListPage.prototype.ionViewWillEnter = function () {
        this.utils.scrollContentFabControlDisplay(this.myElement, 'none');
        this.getLocaleList(null);
    };
    LocaleListPage.prototype.ngAfterViewInit = function () {
        this.utils.scrollContentFabControl(this.content, this.myElement);
    };
    LocaleListPage.prototype.scrollTop = function () {
        this.content.scrollToTop(250);
    };
    LocaleListPage.prototype.dismiss = function (selectedLocale) {
        this.viewCtrl.dismiss(selectedLocale);
    };
    LocaleListPage.prototype.filterItems = function (event) {
        this.localeList = this.copy;
        this.localeList = this.utils.filterItems(event, this.localeList);
    };
    LocaleListPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            _this.getLocaleList(infiniteScroll);
            console.log('Async operation has ended');
        }, 100);
    };
    LocaleListPage.prototype.getLocaleList = function (infiniteScroll, search) {
        var _this = this;
        if (!infiniteScroll || infiniteScroll.state === 'refreshing') {
            this.localeList = [];
            this.shouldEnableScrolling = true;
            this.limitToFirst = 0;
            this.top = 20;
        }
        if (this.searchLocale != '') {
            search = this.searchLocale;
        }
        if (search) {
            this.localeList = [];
            this.limitToFirst = 0;
            this.top = 100;
        }
        var filter = '?$skip=' + this.limitToFirst + '&$top=' + this.top + '&$orderby=MahalAdi';
        var message = 'Mahal Listesi Sorgulanıyor...';
        if (search && search.length > 2) {
            filter = '?$skip=' + this.limitToFirst + '&$top=' + this.top + "&$filter=indexof(MahalKodu,'" + search + "') gt -1  or indexof(MahalAdi,'" + search + "') gt -1&$orderby=MahalAdi";
            message = '<b>Aranan : ' + search + '</b>' + '<br>' + 'Mahal Listesi Sorgulanıyor...';
        }
        var seoUrl = 'HelpDeskFMS_Module_Mahal' + filter;
        this.utils.loadingPresent(message);
        this.serviceRequestProvider.getServiceRequest(seoUrl, null).subscribe(function (p) {
            var _a;
            // p['odata.count']
            if (p['value'].length > 0) {
                _this.limitToFirst += 20;
                (_a = _this.localeList).push.apply(_a, p['value']);
                _this.copy = _this.localeList;
                //this.searchLocale = ''
            }
            _this.utils.loadingDismiss();
            if (infiniteScroll) {
                infiniteScroll.complete();
            }
        }, function (error) {
            _this.utils.loadingDismiss();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scrollContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], LocaleListPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scrollFabButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], LocaleListPage.prototype, "myElement", void 0);
    LocaleListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-locale-list',template:/*ion-inline-start:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/locale-list/locale-list.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only class="closeButton" style="color: white;font-size: 17px;" (click)="dismiss()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Mahal Listesi</ion-title>\n\n  </ion-navbar>\n\n  <ion-row style="background: white;">\n\n    <ion-col style="flex: 0 0 85%;padding: 0px;">\n\n      <ion-searchbar placeholder="Mahal Kodu veya Adı ile Ara" [(ngModel)]="searchLocale"\n\n        (ionInput)="filterItems($event)"></ion-searchbar>\n\n    </ion-col>\n\n    <ion-col style="flex: 0 0 15%;padding: 0px;">\n\n      <button ion-button class="searchButton" (click)="getLocaleList(searchLocale)">\n\n        <div> <img src="assets/my_icon/locale-search.png" style="width: 35px;" /></div>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content #scrollContent padding>\n\n  <ion-fab right bottom #fab>\n\n    <button #scrollFabButton ion-fab mini (click)="scrollTop()" class="ion-fab ion-fab-button scrollTopFAB">\n\n      <ion-icon class="scrollTopFABIcon" name="md-arrow-round-up" style="color: rgba(9, 28, 72, 0.5);"></ion-icon>\n\n    </button>\n\n    <!--(click)="openSocial(\'facebook\', fab1)"-->\n\n  </ion-fab>\n\n  <div class="card round div1" *ngFor="let lList of localeList" (click)="dismiss(lList)">\n\n    <ion-item class="item1">\n\n      <img src="assets/my_icon/map-location.png" />\n\n      <h2 ion-text class="localeH2">{{ lList.MahalAdi }}</h2>\n\n      <p ion-text><b>Mahal Kodu : </b>{{ lList.MahalKodu }}</p>\n\n    </ion-item>\n\n  </div>\n\n  <ion-infinite-scroll (ionInfinite)="getLocaleList($event)" distance="5%">\n\n		<ion-infinite-scroll-content loadingSpinner="crescent" loadingText="{{(limitToFirst+1) +\' - \'+ (limitToFirst+10) +\' Yükleniyor...\'}}" *ngIf="shouldEnableScrolling"> </ion-infinite-scroll-content>\n\n	</ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/locale-list/locale-list.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_service_request_service_request__["a" /* ServiceRequestProvider */], __WEBPACK_IMPORTED_MODULE_3__utils_utils__["a" /* Utils */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_request_service_request__["a" /* ServiceRequestProvider */], __WEBPACK_IMPORTED_MODULE_3__utils_utils__["a" /* Utils */]])
    ], LocaleListPage);
    return LocaleListPage;
}());

//# sourceMappingURL=locale-list.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sample_portage_sample_portage__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_request_service_request__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sla_request_sla_request__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_utils__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_chat_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_storageData__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__globalVariables_global_variables__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TabsPage = /** @class */ (function () {
    function TabsPage(chatService, utils, platform, storage, events) {
        var _this = this;
        this.chatService = chatService;
        this.utils = utils;
        this.platform = platform;
        this.storage = storage;
        this.events = events;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__service_request_service_request__["a" /* ServiceRequestPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_0__sample_portage_sample_portage__["a" /* SamplePortagePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__sla_request_sla_request__["a" /* SlaRequestPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */];
        this.userInfo = "";
        this.platform.registerBackButtonAction(function () {
        });
        this.events.subscribe('serviceCount', function (data) {
            _this.serviceBadgeCount = data;
        });
        this.events.subscribe('portageCount', function (data) {
            _this.portageBadgeCount = data;
        });
        /*this.broadcaster.addEventListener('serviceCount').subscribe((event) =>
          this.badgeCount=event.serviceCount
        );*/
        /*platform.registerBackButtonAction(() =>
        {
          this.utils.doConfirm("Uygulamadan Çık","Çıkmak istediğinizden emin misiniz ?",function () {
            platform.exitApp();
          });
        });*/
    }
    TabsPage.prototype.clickTab = function () {
        console.log(this.myTabs);
        /*this.events.publish('scrollToTop');*/
    };
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SecondPage');
    };
    TabsPage.prototype.ionViewWillEnter = function () {
        this.userInfo = __WEBPACK_IMPORTED_MODULE_9__globalVariables_global_variables__["b" /* USER */].userInfo;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* Tabs */])
    ], TabsPage.prototype, "myTabs", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Servis İstekleri" tabIcon="construct" tabBadge="{{serviceBadgeCount | badgeFilter}}"></ion-tab>\n  <ion-tab *ngIf="userInfo[\'adminYetki\']===1 || userInfo[\'porterYetki\']===1"   [root]="tab2Root" tabTitle="Numune Taşıma" tabIcon="flask" tabBadge="{{portageBadgeCount | badgeFilter}}"></ion-tab>\n  <ion-tab *ngIf="userInfo[\'defaultYetki\']===1 && userInfo[\'UserName\'] !== \'application.testing\'" [root]="tab3Root" tabTitle="SLA Talebi" tabIcon="help-buoy"></ion-tab>\n  <!--<ion-tab [root]="tab3Root" tabTitle="Chat" tabIcon="chatboxes" tabBadge="{{badgeCount>0 ? badgeCount : \'\'}}{{badgeCount>=99 ? \'+\' : \'\'}}"></ion-tab>-->\n  <!--<ion-tab [root]="tab4Root" tabTitle="Ayarlar" tabIcon="settings"></ion-tab>-->\n</ion-tabs>\n'/*ion-inline-end:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/tabs/tabs.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_7__providers_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_6__utils_utils__["a" /* Utils */], __WEBPACK_IMPORTED_MODULE_8__utils_storageData__["a" /* StorageData */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_6__utils_utils__["a" /* Utils */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__utils_storageData__["a" /* StorageData */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */]])
    ], TabsPage);
    return TabsPage;
}());

//git test deneme
//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ChatMessage */
/* unused harmony export UserInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatMessage = /** @class */ (function () {
    function ChatMessage() {
    }
    return ChatMessage;
}());

var UserInfo = /** @class */ (function () {
    function UserInfo() {
    }
    return UserInfo;
}());

var ChatService = /** @class */ (function () {
    function ChatService(http, events) {
        this.http = http;
        this.events = events;
    }
    ChatService.prototype.mockNewMsg = function (msg) {
        var _this = this;
        var mockMsg = {
            messageId: Date.now().toString(),
            userId: '210000198410281948',
            userName: 'Hancock',
            userAvatar: './assets/to-user.jpg',
            toUserId: '140000198202211138',
            time: Date.now(),
            message: msg.message,
            status: 'success'
        };
        setTimeout(function () {
            _this.events.publish('chat:received', mockMsg, Date.now());
        }, Math.random() * 1800);
    };
    ChatService.prototype.getMsgList = function () {
        var msgListUrl = './assets/mock/msg-list.json';
        return this.http.get(msgListUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["map"])(function (response) { return response.array; }));
    };
    ChatService.prototype.sendMsg = function (msg) {
        var _this = this;
        return new Promise(function (resolve) { return setTimeout(function () { return resolve(msg); }, Math.random() * 1000); })
            .then(function () { return _this.mockNewMsg(msg); });
    };
    ChatService.prototype.getUserInfo = function () {
        var userInfo = {
            id: '140000198202211138',
            name: 'Luff',
            avatar: './assets/user.jpg'
        };
        return new Promise(function (resolve) { return resolve(userInfo); });
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], ChatService);
    return ChatService;
}());

//# sourceMappingURL=chat-service.js.map

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 176;

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lists_service_list__ = __webpack_require__(844);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*@Component({
  providers: []
})*/
var Utils = /** @class */ (function () {
    function Utils(alertCtrl, loadingCtrl, toastCtrl, camera, barcodeScanner, socialSharing, events) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.barcodeScanner = barcodeScanner;
        this.socialSharing = socialSharing;
        this.events = events;
        this.isActive = true;
        this.mymServiceList = __WEBPACK_IMPORTED_MODULE_5__lists_service_list__["a" /* ServiceList */];
    }
    Utils.prototype.setUserRole = function (user) {
        user["defaultYetki"] = 0;
        user["birimYetki"] = 0;
        user["kurumYetki"] = 0;
        user["adminYetki"] = 0;
        user["servisYetki"] = 0;
        user["atamaYetki"] = 0;
        user["atamaYetki"] = 0;
        user["FMCOYetki"] = 0;
        user["porterYetki"] = 0;
        for (var i = 0; i < user.Roles.length; i++) {
            if (user.Roles[i].Oid == "6ef109fe-45c4-48ba-af63-b35e056ed68b") {
                user["defaultYetki"] = 1;
            }
            if (user.Roles[i].Oid == "e8df2aac-8d11-431d-ac1d-c793d1aa69bc") {
                user["defaultYetki"] = 1;
                user["birimYetki"] = 1;
                user["atamaYetki"] = 1;
            }
            if (user.Roles[i].Oid == "534ed3ab-ace6-479a-a8f8-2a01006117ac") {
                user["defaultYetki"] = 1;
                user["birimYetki"] = 1;
                user["servisYetki"] = 1;
                user["atamaYetki"] = 1;
            }
            if (user.Roles[i].Oid == "21a3c1ba-8d73-4ca0-9a62-bb7f90a18fae") {
                user["defaultYetki"] = 1;
                user["birimYetki"] = 1;
                user["servisYetki"] = 1;
                user["kurumYetki"] = 1;
                user["atamaYetki"] = 1;
            }
            if (user.Roles[i].Oid == "173ad91a-360b-4aa3-b548-9de9e5d7b06f" || user.Roles[i].Oid == "293997ba-b75a-47c9-a1ca-0362218776a9" || user.Roles[i].Oid == "38e4b449-b71b-48fc-824b-ab25fb1446b9") {
                user["defaultYetki"] = 1;
                user["birimYetki"] = 1;
                user["servisYetki"] = 1;
                user["kurumYetki"] = 1;
                user["adminYetki"] = 1;
                user["atamaYetki"] = 1;
                user["FMCOYetki"] = 1;
            }
            if (user.Roles[i].Oid == "0b8c8272-615b-42ba-95b2-a795d50a866c") {
                user["defaultYetki"] = 1;
                user["porterYetki"] = 1;
            }
        }
        return user;
    };
    Utils.prototype.orderByComparator = function (a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    };
    Utils.prototype.sortList = function (input, config) {
        var me = this;
        if (!Array.isArray(input))
            return input;
        if (!Array.isArray(config) || (Array.isArray(config) && config.length == 1)) {
            var propertyToCheck = !Array.isArray(config) ? config : config[0];
            var desc = propertyToCheck.substr(0, 1) == '-';
            //Basic array
            if (!propertyToCheck || propertyToCheck == '-' || propertyToCheck == '+') {
                return !desc ? input.sort() : input.sort().reverse();
            }
            else {
                var property = propertyToCheck.substr(0, 1) == '+' || propertyToCheck.substr(0, 1) == '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;
                return input.sort(function (a, b) {
                    return !desc
                        ? me.orderByComparator(a[property], b[property])
                        : -me.orderByComparator(a[property], b[property]);
                });
            }
        }
        else {
            //Loop over property of the array in order and sort
            return input.sort(function (a, b) {
                for (var i = 0; i < config.length; i++) {
                    var desc = config[i].substr(0, 1) == '-';
                    var property = config[i].substr(0, 1) == '+' || config[i].substr(0, 1) == '-'
                        ? config[i].substr(1)
                        : config[i];
                    var comparison = !desc
                        ? me.orderByComparator(a[property], b[property])
                        : -me.orderByComparator(a[property], b[property]);
                    //Don't return 0 yet in case of needing to sort by next property
                    if (comparison != 0)
                        return comparison;
                }
                return 0; //equal each other
            });
        }
    };
    Utils.prototype.setSocialPlatform = function (sr, stateEnums, fcn) {
        var _this = this;
        this.loadingPresent("Lütfen Bekleyiniz...");
        var sendData = '\n[Konu] :\n' + sr["ServisKategorisi"]["KategoriAdi"];
        sendData += '\n[Servis İsteği No] :\n' + sr["SCode"];
        sendData += '\n[Durum] :\n' + stateEnums["state" + sr.Durum];
        if (sr["Durum"] == 30) {
            sendData += '\n[Sorumlu] :\n' + sr["gorevlikisi"]["adi"] + " " + sr["gorevlikisi"]["soyadi"];
        }
        sendData += '\n[Bildiren] :\n' + sr["ilgilikisi"]["adi"] + " " + sr["ilgilikisi"]["soyadi"];
        sendData += '\n[Olay] :\n' + sr["konu"]["OlayRender"];
        if (sr["ilgiliMahal"] != null) {
            sendData += '\n[Mahal Kodu] :\n' + sr["ilgiliMahal"]["MahalKodu"];
            sendData += '\n[Mahal Adresi] :\n' + sr["ilgiliMahal"]["Aciklama"];
        }
        else {
            sendData += '\n[Mahal Kodu] :\n' + "null";
            sendData += '\n[Mahal Adresi] :\n' + "null";
        }
        sendData += '\n[Açıklama] :\n' + sr["aciklama"];
        this.socialSharing.share(sendData, "Servis İsteği", null, null).then(function (result) {
            _this.loadingDismiss();
            return fcn;
        }).catch(function (error) {
            _this.loadingDismiss();
        });
    };
    Utils.prototype.processOK = function () {
        this.events.publish('processOK', "OK");
    };
    Utils.prototype.afterProcessOK = function () {
        this.events.publish('afterProcessOK', "OK");
    };
    Utils.prototype.filterItems = function (event, filterList) {
        var val = event.target.value;
        if (filterList && val && val.trim() !== '') {
            filterList = filterList.filter(function (item) {
                return (JSON.stringify(item).replace('{', '').replace('}', '').replace(/"/g, '').toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        console.log(filterList);
        return filterList;
    };
    Utils.prototype.removeImage = function (base64Image, imageIndex) {
        return base64Image.splice(imageIndex, 1);
    };
    Utils.prototype.RenkGetir = function (val) {
        val = (val > 1) ? 1 : val;
        val = (val < 0) ? 0 : val;
        var veri = this.GetColor(val);
        return "rgba(" + veri.R.toString() + "," + veri.G.toString() + "," + veri.B.toString() + ",1)";
    };
    Utils.prototype.GetColor = function (num) {
        var High = { A: 1, R: 248, G: 105, B: 107 };
        var Mid = { A: 1, R: 255, G: 235, B: 132 };
        var Low = { A: 1, R: 99, G: 190, B: 123 };
        var minimumValue = 0;
        var maximumValue = 1;
        var lowColor = Low;
        var middleColor = Mid;
        var highColor = High;
        var num2 = (minimumValue + maximumValue) / 2;
        if (num < num2) {
            highColor = middleColor;
            maximumValue = num2;
        }
        else {
            lowColor = middleColor;
            minimumValue = num2;
        }
        return this.GetColorByRange(num, minimumValue, lowColor, maximumValue, highColor);
    };
    Utils.prototype.GetColorByRange = function (value, minValue, lowColor, maxValue, highColor) {
        var scale = (minValue != maxValue) ? ((value - minValue) / (maxValue - minValue)) : 1;
        var newA = this.GetScaledColorChanelValue(scale, lowColor.A, highColor.A);
        var newR = this.GetScaledColorChanelValue(scale, lowColor.R, highColor.R);
        var newG = this.GetScaledColorChanelValue(scale, lowColor.G, highColor.G);
        var newB = this.GetScaledColorChanelValue(scale, lowColor.B, highColor.B);
        var Obj = { A: newA, R: newR, G: newG, B: newB };
        return Obj;
    };
    Utils.prototype.GetScaledColorChanelValue = function (scale, lowChanel, highChanel) {
        return parseInt(lowChanel + (parseInt(highChanel) - parseInt(lowChanel)) * scale);
    };
    Utils.prototype.getDiff = function (t1, t2, gelen) {
        var donecek = __WEBPACK_IMPORTED_MODULE_4_moment__["duration"](__WEBPACK_IMPORTED_MODULE_4_moment__(t1).diff(__WEBPACK_IMPORTED_MODULE_4_moment__(t2)));
        return ((gelen == "Y") ? ("<b>Y: </b>") : ("<b>D: </b>")) + donecek;
    };
    Utils.prototype.getDiffGoal1 = function (now, serviceRequest) {
        var devammi = serviceRequest.yanittarihi ? false : true; // Devam Ediyor : True
        var T0 = __WEBPACK_IMPORTED_MODULE_4_moment__(serviceRequest.acilistarihi); // açılış tarihi
        var T = (devammi) ? __WEBPACK_IMPORTED_MODULE_4_moment__(now) : __WEBPACK_IMPORTED_MODULE_4_moment__(serviceRequest.yanittarihi); // true is şimdiyi al
        var TG = __WEBPACK_IMPORTED_MODULE_4_moment__(serviceRequest.Goal1); // herzaman goal1 al
        var oncemi = __WEBPACK_IMPORTED_MODULE_4_moment__["duration"](T.diff(TG)).as('seconds') < 0;
        var renk = this.RenkGetir(T0.diff(T) / T0.diff(TG));
        serviceRequest["Emoji1"] = (devammi) ? ((oncemi) ? ('👍') : ('👎')) : ((oncemi) ? ('😊') : ('😔'));
        serviceRequest["Duration1"] = __WEBPACK_IMPORTED_MODULE_4_moment__["duration"](T0.diff(T)).locale('tr').humanize(false) + ((oncemi) ? ((devammi) ? (' süre geçti') : (' içinde cevap')) : ((devammi) ? (' Geçti') : (' Geçe Cevap')));
        ;
        serviceRequest["Duration1_"] = __WEBPACK_IMPORTED_MODULE_4_moment__["duration"](T0.diff(TG)).locale('tr').humanize(false);
        serviceRequest["Renk1"] = { 'backgroundColor': renk };
        serviceRequest["Yanit"] = this.getDiff(T0, T, "Y");
        return serviceRequest;
    };
    Utils.prototype.getDiffGoal2 = function (now, serviceRequest) {
        var devammi = serviceRequest.cozulmeTarihi ? false : true;
        var T0 = __WEBPACK_IMPORTED_MODULE_4_moment__(serviceRequest.Goal1);
        var T = (devammi) ? __WEBPACK_IMPORTED_MODULE_4_moment__(now) : __WEBPACK_IMPORTED_MODULE_4_moment__(serviceRequest.cozulmeTarihi);
        var TG = __WEBPACK_IMPORTED_MODULE_4_moment__(serviceRequest.Goal2);
        var oncemi = __WEBPACK_IMPORTED_MODULE_4_moment__["duration"](T.diff(TG)).as('seconds') < 0;
        var renk = this.RenkGetir(T0.diff(T) / T0.diff(TG));
        serviceRequest["warningColor"] = { 'color': renk };
        serviceRequest["HdsStateStyle3"] = {
            'borderColor': renk
        };
        serviceRequest["HdsStateStyle2"] = {
            'borderColor': "rgba(255,255,255, 0)" + renk + "rgba(255,255,255, 0) rgba(255,255,255, 0)",
            'width': 100 - serviceRequest["HdsState2"] + '%'
        };
        serviceRequest["HdsStateStyle"] = {
            'borderColor': renk,
            'backgroundColor': renk,
            'width': 100 - serviceRequest["HdsState2"] + '%'
        };
        serviceRequest["Emoji2"] = (devammi) ? ((oncemi) ? ('👍') : ('👎')) : ((oncemi) ? ('😊') : ('😔'));
        serviceRequest["Duration2"] = __WEBPACK_IMPORTED_MODULE_4_moment__["duration"](T.diff(TG)).locale('tr').humanize(false) + ((oncemi) ? ((devammi) ? (' Kaldı') : (' Kala Cevap')) : ((devammi) ? (' Geçti') : (' Geçe Cevap')));
        serviceRequest["Duration2_"] = __WEBPACK_IMPORTED_MODULE_4_moment__["duration"](T0.diff(TG)).locale('tr').humanize(false);
        serviceRequest["Renk2"] = { 'backgroundColor': renk };
        serviceRequest["Yanit"] = this.getDiff(T0, T, "Y");
        return serviceRequest;
    };
    Utils.prototype.getDynamicValues = function (serviceRequest) {
        var ola = "🔷";
        var sla = "🔶";
        var _loop_1 = function (i) {
            var j = 0;
            while (j < serviceRequest[i].Islemler.length) {
                if (serviceRequest[i].Islemler[j].EntityType !== 'HelpDeskFMS.Module.SE_Kisiyeata') {
                    serviceRequest[i].Islemler.splice(j, 1);
                    j--;
                }
                j++;
            }
            var maxTarih = Math.max.apply(Math, serviceRequest[i].Islemler.map(function (islem) { return new Date(islem.IslemTarihi).getTime(); }));
            var maxTarihIndex = serviceRequest[i].Islemler.findIndex(function (islem) { return new Date(islem.IslemTarihi).getTime() === maxTarih; });
            if (maxTarihIndex > -1)
                serviceRequest[i].kisiyeAtamaAciklama = serviceRequest[i].Islemler[maxTarihIndex].Aciklama;
            serviceRequest[i].slaOla = sla;
            // if(serviceRequest[i].SLASTT===0){
            //   serviceRequest[i].slaOla=ola;
            // }
            // else if(serviceRequest[i].SLASTT===1){
            //   serviceRequest[i].slaOla=sla;
            // }
            serviceRequest[i]["Goruldu"] = serviceRequest[i]["Okundu"] == true ? 1 : 0;
            var progressRed = 0;
            var progressGreen = 180;
            serviceRequest[i]["HdsState2"] = (-serviceRequest[i]["HdsState"] * 100);
            if (serviceRequest[i]["HdsState2"] <= 0) {
                progressRed = 240;
                progressGreen = 0;
                serviceRequest[i]["HdsState2"] = 0;
            }
            if (serviceRequest[i]["HdsState2"] >= 100) {
                progressRed = 0;
                progressGreen = 180;
            }
            if (progressRed < 240 && serviceRequest[i]["HdsState2"] > 0 && serviceRequest[i]["HdsState2"] < 100) {
                progressGreen = 180;
                progressRed = (100 - serviceRequest[i]["HdsState2"]) * 3.6;
            }
            if (progressRed > 240 && progressGreen > 0 && serviceRequest[i]["HdsState2"] > 0 && serviceRequest[i]["HdsState2"] < 100) {
                progressRed = 240;
                progressGreen = (serviceRequest[i]["HdsState2"]) * 5.4;
            }
            var now = new Date(new Date().getTime() + 1000 * 60 * 60 * 3).toISOString().replace('Z', '');
            serviceRequest[i] = this_1.getDiffGoal1(now, serviceRequest[i]);
            serviceRequest[i] = this_1.getDiffGoal2(now, serviceRequest[i]);
            serviceRequest[i].KapatmaTuru = "Barkod";
            for (var j_1 = 0; j_1 < this_1.mymServiceList.length; j_1++) {
                if (serviceRequest[i].IlgiliServis) {
                    if (serviceRequest[i].IlgiliServis.oid === this_1.mymServiceList[j_1].oid)
                        serviceRequest[i].KapatmaTuru = this_1.mymServiceList[j_1].KapatmaTuru;
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < serviceRequest.length; i++) {
            _loop_1(i);
        }
    };
    Utils.prototype.numuneKontrol = function (samplePortage) {
        var farkliNumuneList = [];
        var teslimEdilmeyenList = [];
        var ayniNumuneList = [];
        var varMi = false;
        var list1 = samplePortage.LaboratuvarKabul;
        var list2 = samplePortage.PorterKabul;
        for (var i = 0; i < list1.length; i++) {
            for (var j = 0; j < list2.length; j++) {
                if (list1[i].BarkodNo === list2[j].BarkodNo) {
                    samplePortage.PorterKabul[j].durum = true;
                    varMi = true;
                }
            }
            if (varMi) {
                ayniNumuneList.push(list1[i]);
            }
            else {
                farkliNumuneList.push(list1[i]);
            }
            varMi = false;
        }
        var fark = samplePortage.PorterKabul.length - ayniNumuneList.length;
        samplePortage["emoji1"] = samplePortage.PorterKabul.length === ayniNumuneList.length ? '😊' : '😔';
        samplePortage["mesaj1"] = samplePortage.PorterKabul.length === ayniNumuneList.length ? 'Teslim Edildi.' : Math.abs(fark) + ' Numune Eksik';
        samplePortage["renk1"] = samplePortage.PorterKabul.length === ayniNumuneList.length ? '#66be7b' : '#ffc0c0';
        samplePortage["emoji2"] = farkliNumuneList.length > 0 ? '👎' : '👍';
        samplePortage["mesaj2"] = farkliNumuneList.length === 0 ? 'Fazla Numune Yok.' : farkliNumuneList.length + ' Numune Fazla';
        samplePortage["renk2"] = farkliNumuneList.length > 0 ? '#ffe0c0' : '#66be7b';
        samplePortage["farkliNumuneList"] = farkliNumuneList;
        samplePortage["ayniNumuneList"] = ayniNumuneList;
        return samplePortage;
    };
    Utils.prototype.toastMessage = function (message, duration) {
        var toast = this.toastCtrl.create({
            message: message,
            cssClass: 'toastOpacity',
            duration: duration ? duration : 2000,
            position: 'middle'
        });
        toast.onDidDismiss(function () {
        });
        toast.present();
    };
    Utils.prototype.doAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Uyarı',
            subTitle: message,
            buttons: ['Tamam'],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    Utils.prototype.doAlertConfirm = function (message, fcn) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Uyarı',
            subTitle: message,
            enableBackdropDismiss: false,
            buttons: [{
                    text: 'Tamam',
                    handler: function () {
                        if (fcn) {
                            fcn(true);
                            _this.isActive = true;
                        }
                    }
                }]
        });
        alert.present();
    };
    Utils.prototype.doConfirm = function (title, message, fcn, cancelFcn) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: title,
            message: message,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Hayır',
                    handler: function () {
                        if (cancelFcn)
                            cancelFcn(true);
                        _this.isActive = true;
                    }
                },
                {
                    text: 'Evet',
                    cssClass: 'alertButtonBold',
                    handler: function () {
                        if (fcn) {
                            fcn(true);
                            _this.isActive = true;
                        }
                    }
                }
            ]
        });
        if (this.isActive == true) {
            confirm.present();
            this.isActive = false;
        }
    };
    Utils.prototype.loadingPresent = function (message) {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: message /*'<div class="popupDiv"><img #closeImage src="assets/imgs/cancel.png" class="popupCancelImg" (click)="closePopup()"></div>'+ */
        });
        this.loadingDismiss();
        this.loading.present();
    };
    Utils.prototype.loadingDismiss = function () {
        if (this.loading) {
            this.loading.dismiss();
        }
    };
    Utils.prototype.scrollContentFabControl = function (content, myElement) {
        var _this = this;
        content.ionScrollEnd.subscribe(function (data) {
            _this.scrollContentFabControlDisplay(myElement, 'block');
            if (data == null) {
                _this.scrollContentFabControlDisplay(myElement, 'none');
            }
            else {
                if (data.scrollTop == 0) {
                    _this.scrollContentFabControlDisplay(myElement, 'none');
                }
            }
        });
        content.ionScrollStart.subscribe(function (data) {
            _this.scrollContentFabControlDisplay(myElement, 'block');
        });
    };
    Utils.prototype.scrollContentFabControlDisplay = function (myElement, display) {
        myElement["_elementRef"].nativeElement.style.display = display;
    };
    Utils.prototype.openCamera = function (fcn) {
        var options = {
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            quality: 90,
            correctOrientation: true,
            targetWidth: window.screen.width * 2,
            targetHeight: window.screen.height * 2
        };
        this.camera.getPicture(options).then(function (imageData) {
            if (fcn)
                return fcn(imageData);
        }, function (err) {
            // Handle error
        });
    };
    Utils.prototype.qrCodeGenerate = function (srCode) {
        this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, srCode.toString());
    };
    Utils = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], Utils);
    return Utils;
}());

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceRequestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







/*
 Generated class for the ServiceRequestProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
var ServiceRequestProvider = /** @class */ (function () {
    function ServiceRequestProvider(http, apiUrl, apiUrlGoogleTest) {
        this.http = http;
        this.apiUrl = apiUrl;
        this.apiUrlGoogleTest = apiUrlGoogleTest;
    }
    ServiceRequestProvider.prototype.setHeader = function (header) {
        this.headers = "";
        this.options = "";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.set('Content-Type', 'application/json');
        this.headers.set('Accept', 'application/json');
        if (header) {
            this.headers.set("Authorization", "Basic " + btoa(header["user"] + ":" + header["pass"]));
        }
        else {
            this.headers.set("Authorization", "Basic " + btoa("mymadmin" + ":" + "nanoturk"));
        }
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers, withCredentials: false });
    };
    ServiceRequestProvider.prototype.login = function (seoUrl) {
        var response = this.http.get(this.apiUrl + seoUrl);
        return response;
    };
    ServiceRequestProvider.prototype.getServiceRequest = function (seoUrl, header) {
        var response = this.http.get(this.apiUrl + seoUrl);
        return response;
    };
    ServiceRequestProvider.prototype.postServiceRequest = function (seoUrl, body) {
        var response = this.http.post(this.apiUrl + seoUrl, body);
        return response;
        //.map(response =>response.json());
    };
    ServiceRequestProvider.prototype.putServiceRequest = function (seoUrl, body) {
        var response = this.http.patch(this.apiUrl + seoUrl, body);
        return response;
        //.map(response =>response.json());
    };
    ServiceRequestProvider.prototype.sendPhotos = function (body, file) {
        if (file === void 0) { file = false; }
        var seoUrl = file ? "HelpDeskFMS_Module_SLADosyaEk" : "HelpDeskFMS_Module_SLAEk";
        var response = this.http.post(this.apiUrl + seoUrl, body);
        return response;
        //.map(response =>response.json());
    };
    ServiceRequestProvider.prototype.postServiceGoogleTest = function (body) {
        var response = this.http.post(this.apiUrlGoogleTest, body);
        return response;
        //.map(response =>response.json());
    };
    ServiceRequestProvider.prototype.getMockList = function (param) {
        var msgListUrl = "../assets/mock/" + param + ".json";
        return this.http.get(msgListUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (response) { return response; }));
    };
    ServiceRequestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])('apiUrl')), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])('apiUrlGoogleTest')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], Object, Object])
    ], ServiceRequestProvider);
    return ServiceRequestProvider;
}());

//# sourceMappingURL=service-request.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*@Component({
  providers: []
})*/
var StorageData = /** @class */ (function () {
    function StorageData() {
    }
    StorageData.prototype.get = function (key, fcn) {
        var item = JSON.parse(localStorage.getItem(key));
        if (fcn)
            return fcn(item);
        else
            return item;
    };
    StorageData.prototype.set = function (key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    };
    StorageData.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    StorageData.prototype.clear = function () {
        localStorage.clear();
    };
    StorageData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StorageData);
    return StorageData;
}());

//# sourceMappingURL=storageData.js.map

/***/ }),

/***/ 322:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 322;

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateSamplePortagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sla_list_sla_list__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lists_dates__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__locale_list_locale_list__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_request_service_request__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_utils__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







/**
 * Generated class for the CreateSamplePortagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateSamplePortagePage = /** @class */ (function () {
    function CreateSamplePortagePage(navCtrl, modalCtrl, utils, navParams, serviceRequestProvider, apiUrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.utils = utils;
        this.navParams = navParams;
        this.serviceRequestProvider = serviceRequestProvider;
        this.apiUrl = apiUrl;
        this.monthNames = __WEBPACK_IMPORTED_MODULE_1__lists_dates__["b" /* MonthNames */];
        this.monthShortNames = __WEBPACK_IMPORTED_MODULE_1__lists_dates__["c" /* MonthShortNames */];
        this.dayNames = __WEBPACK_IMPORTED_MODULE_1__lists_dates__["a" /* DayNames */];
        this.tarih = new Date().toISOString();
        this.saat = new Date(new Date().getTime() + 1000 * 60 * 60 * 3).toISOString();
        this.selectedSla = null;
        this.selectedLocale1 = null;
        this.selectedLocale2 = null;
    }
    CreateSamplePortagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateSamplePortagePage');
    };
    CreateSamplePortagePage.prototype.selectLocale = function (selectedLocal) {
        var _this = this;
        this.localeModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__locale_list_locale_list__["a" /* LocaleListPage */], {});
        this.localeModal.onDidDismiss(function (data) {
            if (data)
                _this[selectedLocal] = data;
        });
        this.localeModal.present();
    };
    CreateSamplePortagePage.prototype.selectSla = function () {
        var _this = this;
        this.slaModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__sla_list_sla_list__["a" /* SlaListPage */], {});
        this.slaModal.onDidDismiss(function (data) {
            if (data)
                _this.selectedSla = data;
        });
        this.slaModal.present();
    };
    CreateSamplePortagePage.prototype.createSamplePortage = function () {
        var me = this;
        var seoUrl = "HelpDeskFMS_Module_NumuneTasima";
        var body = {
            "Tarih": this.tarih.substring(0, 11) + this.saat.substring(11)
        };
        //"HelpDeskFMS_Module_NumuneTasima(guid'" + portage["Oid"] + "')"
        if (this.selectedSla)
            body["IlgiliSLA@odata.bind"] = this.apiUrl + "HelpDeskFMS_Module_ServisIstegi(guid'" + this.selectedSla["Oid"] + "')";
        if (this.selectedLocale1)
            body["TeslimAlinanMahal@odata.bind"] = this.apiUrl + "HelpDeskFMS_Module_Mahal(guid'" + this.selectedLocale1["Oid"] + "')";
        if (this.selectedLocale2)
            body["TeslimEdilenMahal@odata.bind"] = this.apiUrl + "HelpDeskFMS_Module_Mahal(guid'" + this.selectedLocale2["Oid"] + "')";
        this.utils.doConfirm("Numune Taşıma", "Numune Taşıma oluşturulsun mu ?", function () {
            me.utils.loadingPresent("Lütfen Bekleyiniz...");
            me.serviceRequestProvider.postServiceRequest(seoUrl, body).subscribe(function (p) {
                me.utils.loadingDismiss();
                me.navCtrl.pop();
                me.utils.processOK();
            }, function (error) {
                me.utils.loadingDismiss();
                //me.utils.doAlert("Bağlantınızı kontrol ediniz...");
            });
        });
    };
    CreateSamplePortagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-create-sample-portage',template:/*ion-inline-start:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/create-sample-portage/create-sample-portage.html"*/'<!--\n  Generated template for the SlaRequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Numune Taşıma</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="sla-request-card">\n    <ion-item class="numune-card">\n      <h2><b>İlgili Sla:</b></h2>\n      <div item-start>\n        <img class="addPhotoImg" src="../assets/flat_icon/sla-talebi.svg">\n      </div>\n      <p *ngIf="!selectedSla" class="addPhotoP" style="color: #666 !important;" (click)="selectSla(selectedSla)">\n        İlgili Servis İsteğini seçmek için tıklayınız!\n      </p>\n      <p *ngIf="selectedSla" class="addPhotoP" style="color: #666 !important;" (click)="selectSla(selectedSla)">\n        <span>\n          <b style="text-decoration: underline;">{{ selectedSla!=null ? selectedSla.SCode : \'\' }}</b>\n        </span><br>\n        <span>\n          {{ selectedSla!=null ? selectedSla.ServisKategorisi.KategoriAdi : \'\' }}\n        </span>\n      </p>\n      <ion-icon *ngIf="selectedSla" class="locale-delete-button" name="close" (click)="selectedSla=null">\n      </ion-icon>\n    </ion-item>\n  </div>\n  <div class="sla-request-card">\n    <ion-item class="numune-card">\n      <h2><b>Teslim Alınan Mahal:</b></h2>\n      <div item-start>\n        <img class="addPhotoImg" src="../assets/flat_icon/mahal.svg">\n      </div>\n      <p *ngIf="!selectedLocale1" class="addPhotoP" style="color: #666 !important;"\n        (click)="selectLocale(\'selectedLocale1\')">\n        Teslim Alınan Mahali seçmek için tıklayınız!\n      </p>\n      <p *ngIf="selectedLocale1" class="addPhotoP" style="color: #666 !important;"\n        (click)="selectLocale(\'selectedLocale1\')">\n        <span>\n          <b style="text-decoration: underline;">{{ selectedLocale1!=null ? selectedLocale1.MahalKodu : \'\' }}</b>\n        </span><br>\n        <span>\n          {{ selectedLocale1!=null ? selectedLocale1.MahalAdi : \'\' }}\n        </span>\n      </p>\n      <ion-icon *ngIf="selectedLocale1" class="locale-delete-button" name="close" (click)="selectedLocale1=null">\n      </ion-icon>\n    </ion-item>\n  </div>\n  <div class="sla-request-card">\n    <ion-item class="numune-card">\n      <h2><b>Teslim Edilen Mahal:</b></h2>\n      <div item-start>\n        <img class="addPhotoImg" src="../assets/flat_icon/mahal.svg">\n      </div>\n      <p *ngIf="!selectedLocale2" class="addPhotoP" style="color: #666 !important;"\n        (click)="selectLocale(\'selectedLocale2\')">\n        Teslim Edilen Mahali seçmek için tıklayınız!\n      </p>\n      <p *ngIf="selectedLocale2" class="addPhotoP" style="color: #666 !important;"\n        (click)="selectLocale(\'selectedLocale2\')">\n        <span>\n          <b style="text-decoration: underline;">{{ selectedLocale2!=null ? selectedLocale2.MahalKodu : \'\' }}</b>\n        </span><br>\n        <span>\n          {{ selectedLocale2!=null ? selectedLocale2.MahalAdi : \'\' }}\n        </span>\n      </p>\n      <ion-icon *ngIf="selectedLocale2" class="locale-delete-button" name="close" (click)="selectedLocale2=null">\n      </ion-icon>\n    </ion-item>\n  </div>\n  <div class="sla-request-card">\n    <ion-row>\n      <ion-col style="max-width: calc(70% - 20px);">\n        <ion-item class="date">\n          <ion-label class="date-label">\n            <img class="date-img" src="../../assets/imgs/calendar.png" />\n          </ion-label>\n          <ion-datetime class="date" displayFormat="D MMM DDDD, YYYY" [(ngModel)]="tarih" min="2002" max="2032"\n            dayNames="{{dayNames}}" monthShortNames="{{monthShortNames}}" monthNames="{{monthNames}}" doneText="Tamam"\n            cancelText="İptal">\n          </ion-datetime>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item class="date">\n          <ion-label class="date-label">\n            <img class="date-img" src="../../assets/imgs/time.png" />\n          </ion-label>\n          <ion-datetime class="date" displayFormat="HH:mm" [(ngModel)]="saat" doneText="Tamam" cancelText="İptal">\n          </ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <button ion-button icon-start full class="onayButton" (click)="createSamplePortage()">\n      <ion-icon name="move"></ion-icon>\n      Taşıma Ekle\n    </button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/create-sample-portage/create-sample-portage.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_6__utils_utils__["a" /* Utils */], __WEBPACK_IMPORTED_MODULE_5__providers_service_request_service_request__["a" /* ServiceRequestProvider */]]
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["z" /* Inject */])('apiUrl')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6__utils_utils__["a" /* Utils */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_service_request_service_request__["a" /* ServiceRequestProvider */], Object])
    ], CreateSamplePortagePage);
    return CreateSamplePortagePage;
}());

//# sourceMappingURL=create-sample-portage.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlaListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_state_enums__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_request_service_request__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SlaListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SlaListPage = /** @class */ (function () {
    function SlaListPage(navCtrl, navParams, viewCtrl, serviceRequestProvider, utils) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.serviceRequestProvider = serviceRequestProvider;
        this.utils = utils;
        this.slaList = [];
        this.copy = [];
        this.shouldEnableScrolling = false;
        this.limitToFirst = 0;
        this.top = 20;
        this.stateEnums = __WEBPACK_IMPORTED_MODULE_0__enums_state_enums__["a" /* StateEnums */];
    }
    SlaListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocaleListPage');
    };
    SlaListPage.prototype.ionViewWillEnter = function () {
        this.utils.scrollContentFabControlDisplay(this.myElement, 'none');
        this.getSlaList(null);
    };
    SlaListPage.prototype.ngAfterViewInit = function () {
        this.utils.scrollContentFabControl(this.content, this.myElement);
    };
    SlaListPage.prototype.scrollTop = function () {
        this.content.scrollToTop(250);
    };
    SlaListPage.prototype.dismiss = function (selectedLocale) {
        this.viewCtrl.dismiss(selectedLocale);
    };
    SlaListPage.prototype.filterItems = function (event) {
        this.slaList = this.copy;
        this.slaList = this.utils.filterItems(event, this.slaList);
    };
    SlaListPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            _this.getSlaList(infiniteScroll);
            console.log('Async operation has ended');
        }, 100);
    };
    SlaListPage.prototype.getSlaList = function (infiniteScroll, searchInput) {
        var _this = this;
        if (!infiniteScroll || infiniteScroll.state === 'refreshing') {
            this.slaList = [];
            this.shouldEnableScrolling = true;
            this.limitToFirst = 0;
            this.top = 20;
        }
        if (this.searchSla != '') {
            searchInput = this.searchSla;
        }
        if (searchInput) {
            this.slaList = [];
            this.limitToFirst = 0;
            this.top = 100;
        }
        var expand = '?$expand=ServisKategorisi,ilgiliMahal';
        var filter = '&$filter=IlgiliServis ne null ';
        var paging = '&$skip=' + this.limitToFirst + '&$top=' + this.top + '&$orderby=SCode desc';
        var message = 'Sla Aranıyor...';
        //this.changeShorting('Durum','hepsi-up.png',null,null);
        if (searchInput) {
            message = '<b>Aranan : ' + searchInput + '</b>' + '<br>' + 'Sla Aranıyor...';
            if (parseInt(searchInput))
                filter += 'and SCode eq ' + searchInput + ' ';
            else
                filter += "and (indexof(ilgiliMahal/MahalKodu,'" + searchInput + "') gt -1" + " or indexof(ilgiliMahal/MahalAdi,'" + searchInput + "') gt -1" + " or indexof(ServisKategorisi/KategoriAdi, '" + searchInput + "') gt -1) ";
        }
        var seoUrl = 'HelpDeskFMS_Module_ServisIstegi' + expand + filter + paging;
        this.utils.loadingPresent(message);
        this.serviceRequestProvider.getServiceRequest(seoUrl, null).subscribe(function (p) {
            var _a;
            if (p['value'].length > 0) {
                (_a = _this.slaList).push.apply(_a, p['value']);
                _this.copy = _this.slaList;
                //this.searchSla = ''
            }
            console.log(_this.slaList);
            _this.utils.loadingDismiss();
            if (infiniteScroll) {
                infiniteScroll.complete();
            }
        }, function (error) {
            _this.utils.loadingDismiss();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('scrollContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Content */])
    ], SlaListPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('scrollFabButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */])
    ], SlaListPage.prototype, "myElement", void 0);
    SlaListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-sla-list',template:/*ion-inline-start:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/sla-list/sla-list.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button icon-only class="closeButton" style="color: white;font-size: 17px;" (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Servis İstekleri</ion-title>\n  </ion-navbar>\n  <ion-row style="background: white;">\n    <ion-col style="flex: 0 0 85%;padding: 0px;">\n      <ion-searchbar type="text" placeholder="Servis İsteği Ara" [(ngModel)]="searchSla"\n        enterkeyhint="go" (ionInput)="filterItems($event)"></ion-searchbar>\n    </ion-col>\n    <ion-col style="flex: 0 0 15%;padding: 0px;">\n      <button ion-button class="searchButton" (click)="getSlaList(searchSla)">\n        <div> <img src="assets/my_icon/search.png" style="width: 35px;" /></div>\n      </button>\n    </ion-col>\n  </ion-row>\n\n</ion-header>\n\n\n<ion-content #scrollContent padding>\n  <ion-fab right bottom #fab>\n    <button #scrollFabButton ion-fab mini (click)="scrollTop()" class="ion-fab ion-fab-button scrollTopFAB">\n      <ion-icon class="scrollTopFABIcon" name="md-arrow-round-up" style="color: rgba(9, 28, 72, 0.5);"></ion-icon>\n    </button>\n    <!--(click)="openSocial(\'facebook\', fab1)"-->\n  </ion-fab>\n  <div class="card round div1" *ngFor="let sr of slaList" (click)="dismiss(sr)">\n    <ion-item class="item1">\n      <h2 ion-text class="localeH2">{{ sr.ServisKategorisi.KategoriAdi }}</h2>\n      <p ion-text><b>Sla No : </b>{{ sr.SCode }}</p>\n      <p ion-text><b>Durum : </b>{{ sr.gorevlikisi && sr.gorevlikisi.cinsiyet===0 && (sr.Durum===30 || sr.Durum===31 || sr.Durum===32) ? stateEnums["state"+sr.Durum] : stateEnums["state"+sr.Durum].replace(\'👨🏻‍🔧\',\'👩🏻‍🔧\')}}</p>\n      <p ion-text class="colorBlue"><b>Mahal Kodu : </b>{{ sr.ilgiliMahal!=null ? sr.ilgiliMahal.MahalKodu : \'\' }}</p>\n    </ion-item>\n  </div>\n  <ion-infinite-scroll (ionInfinite)="getSlaList($event)" distance="5%">\n		<ion-infinite-scroll-content loadingSpinner="crescent" loadingText="{{(limitToFirst+1) +\' - \'+ (limitToFirst+10) +\' Yükleniyor...\'}}" *ngIf="shouldEnableScrolling"> </ion-infinite-scroll-content>\n	</ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/sla-list/sla-list.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_service_request_service_request__["a" /* ServiceRequestProvider */], __WEBPACK_IMPORTED_MODULE_4__utils_utils__["a" /* Utils */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_request_service_request__["a" /* ServiceRequestProvider */], __WEBPACK_IMPORTED_MODULE_4__utils_utils__["a" /* Utils */]])
    ], SlaListPage);
    return SlaListPage;
}());

//# sourceMappingURL=sla-list.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateEnums; });
var StateEnums;
(function (StateEnums) {
    StateEnums["state0"] = "A\u00E7\u0131l\u0131yor";
    StateEnums["state10"] = "Yeni";
    StateEnums["state11"] = "A\u00E7\u0131lma Onay\u0131 Bekliyor";
    StateEnums["state12"] = "Yeni SLA Reddi";
    StateEnums["state20"] = "\uD83C\uDFDB Birime Y\u00F6nlendirildi";
    StateEnums["state21"] = "\uD83C\uDFDB Birime Y\u00F6nlendirme Onay\u0131nda";
    StateEnums["state22"] = "\uD83C\uDFDB Birime Y\u00F6nlendirme Reddedildi";
    StateEnums["state30"] = "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDD27 Ki\u015Fiye Atand\u0131";
    StateEnums["state31"] = "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDD27 Ki\u015Fiye Atanma Onay\u0131nda";
    StateEnums["state32"] = "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDD27 Ki\u015Fiye Atanma Reddedildi";
    StateEnums["state40"] = "\u23F3 SLA Uzatma";
    StateEnums["state41"] = "\u23F3 SLA Uzatma Onay\u0131nda";
    StateEnums["state42"] = "\u23F3 SLA Uzatma Reddedildi";
    StateEnums["state50"] = "\u2705 Kapand\u0131";
    StateEnums["state51"] = "\u2705 Kapan\u0131\u015F Onay\u0131nda";
    StateEnums["state52"] = "\u2705 Kapan\u0131\u015F Reddedildi";
    StateEnums["state60"] = "\u26D4 \u0130ptal Edildi";
    StateEnums["state61"] = "\u26D4 \u0130ptal Edilme Onayinda";
    StateEnums["state62"] = "\u26D4 \u0130ptal Reddedildi";
    StateEnums["state70"] = "\u231A\uFE0F \u0130\u015F Ad\u0131m\u0131";
    StateEnums["state71"] = "\u231A\uFE0F \u0130\u015F Ad\u0131m\u0131 Onay\u0131nda";
    StateEnums["state72"] = "\u231A\uFE0F \u0130\u015F Ad\u0131m\u0131 Reddedildi";
    StateEnums["state80"] = "\uD83D\uDCB0 Ek-22";
    StateEnums["state81"] = "\uD83D\uDCB0 Ek-22 Onay\u0131nda";
    StateEnums["state82"] = "\uD83D\uDCB0 Ek-22 Reddedildi";
})(StateEnums || (StateEnums = {}));
//# sourceMappingURL=state-enums.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MonthNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MonthShortNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DayNames; });
var MonthNames = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
var MonthShortNames = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];
var DayNames = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
//# sourceMappingURL=dates.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InfoPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoPopoverPage = /** @class */ (function () {
    function InfoPopoverPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InfoPopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoPopoverPage');
    };
    InfoPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info-popover',template:/*ion-inline-start:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/info-popover/info-popover.html"*/'\n\n<ion-content padding>\n\n  <p class="p-text" style="text-decoration: underline;"><b style="color: #ad172b !important;">Talimatlar</b></p>\n\n  <div class="p-text2">\n\n    <p><b class="b-text">1.</b>  Giriş için hastanenin internet ağına bağlı olduğunuzdan emin olunuz.</p>\n\n    <p><b class="b-text">2.</b>  Kullanıcı adı ve şifrenizle giriş yapamıyorsanız birim amirinize durumu iletiniz.</p>\n\n    <p><b class="b-text">3.</b>  Kullanıcı adı ve şifrenizi temin etmek için sistem yetkilisine başvurunuz.</p>\n\n    <p><b class="b-text">4.</b>  Şifre değişiklikliğini kullanıcı panelinden yapabilirsiniz.</p>\n\n    <p><b class="b-text">5.</b>  Şifre değişikliği yaptıktan sonra mobil uygulamadan çıkıp tekrar giriş yapınız.</p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/info-popover/info-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], InfoPopoverPage);
    return InfoPopoverPage;
}());

//# sourceMappingURL=info-popover.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SamplePortagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sample_portage_popover_sample_portage_popover__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_sample_portage_create_sample_portage__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_request_service_request__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_utils__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__globalVariables_global_variables__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_storageData__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var SamplePortagePage = /** @class */ (function () {
    function SamplePortagePage(navCtrl, navParams, loadingCtrl, cdr, toastCtrl, menu, modalCtrl, serviceRequestProvider, utils, storage, platform, popoverCtrl, globalVariables, app, barcodeScanner, events, apiUrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.cdr = cdr;
        this.toastCtrl = toastCtrl;
        this.menu = menu;
        this.modalCtrl = modalCtrl;
        this.serviceRequestProvider = serviceRequestProvider;
        this.utils = utils;
        this.storage = storage;
        this.platform = platform;
        this.popoverCtrl = popoverCtrl;
        this.globalVariables = globalVariables;
        this.app = app;
        this.barcodeScanner = barcodeScanner;
        this.events = events;
        this.apiUrl = apiUrl;
        this.process = "OK";
        this.samplePortageList = [];
        this.copy = [];
        this.shouldEnableScrolling = false;
        this.limitToFirst = 0;
        this.top = 10;
        this.changePipe = "Tarih";
        this.tempPipe = "-Tarih";
        this.ascDesc = "desc";
        this.pipeMesaj = "Açılış Tarihine Göre ⬇️";
        this.shortIcon = "takvim-down.png";
        this.arrowSide = "md-arrow-round-down";
        this.arrowSideColor = "#36495e";
        this.events.subscribe('afterProcessOK', function (data) {
            if (data === _this.process) {
                _this.process = "FINISH";
                return _this.getSamplePortageList();
            }
        });
    }
    SamplePortagePage.prototype.ngAfterViewInit = function () {
        this.utils.scrollContentFabControl(this.content, this.myElement);
    };
    SamplePortagePage.prototype.scrollTop = function (val) {
        this.content.scrollToTop(val);
    };
    SamplePortagePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.menu.enable(true, 'portageMenu');
        }, 100);
        this.storage.get('userInfo', function (val) {
            console.log(val);
            if (val) {
                _this.userInfo = val[0];
                _this.utils.scrollContentFabControlDisplay(_this.myElement, 'none');
                _this.getSamplePortageList();
            }
        });
    };
    SamplePortagePage.prototype.ionViewDidLoad = function () {
        this.globalVariables.notificationIsActive = true;
    };
    SamplePortagePage.prototype.ionViewWillLeave = function () {
        this.menu.close('portageMenu');
        this.globalVariables.notificationIsActive = false;
    };
    SamplePortagePage.prototype.closePopup = function () {
        this.utils.loadingDismiss();
    };
    SamplePortagePage.prototype.openDetails = function (ev, spList) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_0__sample_portage_popover_sample_portage_popover__["a" /* SamplePortagePopoverPage */], {
            spList: spList
        });
        popover.present({
            ev: ev
        });
    };
    SamplePortagePage.prototype.goCreateSamplePortage = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_1__create_sample_portage_create_sample_portage__["a" /* CreateSamplePortagePage */]);
    };
    //http://www.noiseaddicts.com/samples_1w72b820/3828.mp3
    SamplePortagePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            _this.getSamplePortageList(infiniteScroll);
            console.log('Async operation has ended');
        }, 100);
    };
    SamplePortagePage.prototype.openSideMenu = function (name) {
        this.menu.open(name);
    };
    SamplePortagePage.prototype.closeSideMenu = function (name) {
        this.menu.close(name);
    };
    SamplePortagePage.prototype.changeShorting = function (pipe, icon, side, color, pipeMesaj) {
        if (this.tempPipe !== pipe) {
            this.changePipe = pipe.replace("-", "");
            this.ascDesc = pipe[0] === "-" ? "desc" : "asc";
            this.shortIcon = icon;
            this.arrowSide = side;
            this.arrowSideColor = color;
            this.pipeMesaj = pipeMesaj;
            this.tempPipe = pipe;
            this.getSamplePortageList();
        }
    };
    SamplePortagePage.prototype.getSamplePortageList = function (infiniteScroll, searchInput) {
        var _this = this;
        this.searchInput = "";
        if (!infiniteScroll || infiniteScroll.state === "refreshing") {
            this.shouldEnableScrolling = true;
            this.limitToFirst = 0;
            this.top = 10;
            this.samplePortageList = [];
            this.utils.loadingPresent("Yükleniyor...");
        } //,SeciliDepartman
        if (searchInput) {
            this.shouldEnableScrolling = false;
            this.top = 100;
        }
        var expand = "?$expand=PorterKabul,PorterKabul/TeslimAlan,LaboratuvarKabul,IlgiliSLA,IlgiliSLA/ServisKategorisi,TeslimAlinanMahal,TeslimEdilenMahal";
        var filter = "";
        var seoUrl = "";
        var paging = "&$skip=" + this.limitToFirst + "&$top=" + this.top;
        var orderBy = "&$orderby=" + this.changePipe + " " + this.ascDesc;
        //this.changeShorting('Durum','hepsi-up.png',null,null);
        if (searchInput) {
            if (parseInt(searchInput))
                filter += "&$filter=IlgiliSLA/SCode eq " + searchInput;
            else
                filter += "&$filter=indexof(TeslimAlinanMahal/MahalKodu,'" + searchInput + "') gt -1" +
                    " or indexof(TeslimAlinanMahal/MahalAdi,'" + searchInput + "') gt -1" +
                    " or indexof(TeslimEdilenMahal/MahalKodu, '" + searchInput + "') gt - 1" +
                    " or indexof(TeslimEdilenMahal/MahalAdi,'" + searchInput + "') gt -1" +
                    " or indexof(IlgiliSLA/ServisKategorisi/KategoriAdi, '" + searchInput + "') gt - 1";
        }
        var select = "";
        seoUrl = "HelpDeskFMS_Module_NumuneTasima" + expand + filter + select + paging + orderBy + "&$inlinecount=allpages";
        this.serviceRequestProvider.getServiceRequest(seoUrl, null).subscribe(function (p) {
            _this.utils.loadingDismiss();
            _this.events.publish('portageCount', p["odata.count"]);
            if (p["value"].length > 0) {
                for (var i = 0; i < p["value"].length; i++) {
                    _this.utils.numuneKontrol(p["value"][i]);
                    _this.samplePortageList.push(p["value"][i]);
                }
                _this.copy = _this.samplePortageList;
                //this.serviceRequest = this.utils.sortList(this.serviceRequest,this.changePipe);
                _this.limitToFirst += 10;
                if (p["value"].length < 10) {
                    _this.utils.toastMessage('Tüm Taşıma Talepleri Yüklendi...');
                    _this.shouldEnableScrolling = false;
                }
            }
            else {
                if (_this.samplePortageList.length > 0) {
                    _this.utils.toastMessage('Tüm Taşıma Talepleri Yüklendi...');
                    _this.shouldEnableScrolling = false;
                }
                else {
                    _this.utils.toastMessage('Taşıma Talebi Yok...');
                }
            }
            if (_this.limitToFirst >= 100) {
                _this.utils.toastMessage('Tüm Taşıma Talepleri Yüklendi...');
                _this.shouldEnableScrolling = false;
            }
            console.log(_this.samplePortageList);
            if (infiniteScroll) {
                infiniteScroll.complete();
            }
            _this.globalVariables.notificationIsActive = true;
        }, function (error) {
            _this.utils.loadingDismiss();
            var me = _this;
            // this.storage.get("serviceRequest").then(p => {
            //   this.serviceRequest = p;
            //   this.copy = p;
            //   this.utils.getDynamicValues(me.serviceRequest);
            // });
            _this.globalVariables.notificationIsActive = true;
        });
    };
    SamplePortagePage.prototype.scanBarcode = function (portage) {
        var _this = this;
        this.selectedPortage = portage;
        this.barcodeScanner.scan().then(function (barcodeData) {
            console.log('Barcode data', barcodeData);
            if (barcodeData.cancelled == true) {
                _this.utils.loadingDismiss();
                return false;
            }
            else {
                var me_1 = _this;
                var barkod = barcodeData.text.replace('MECARD:N:,', '').replace(';ADR:;;', '');
                var varMi = portage.PorterKabul.find(function (element) { return element.BarkodNo === barkod; });
                if (varMi) {
                    _this.utils.doConfirm("Numune Ekleme", "Bu Barkod daha önce eklenmiş. Numune Eklemeye devam edilsin mi ?", function () {
                        me_1.scanBarcode(me_1.selectedPortage);
                    }, function () {
                        me_1.getSamplePortageList();
                    });
                }
                else
                    _this.addSamplePortage(portage, barkod);
            }
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    SamplePortagePage.prototype.addSamplePortage = function (portage, barkod) {
        var _this = this;
        var me = this;
        var seoUrl = "HelpDeskFMS_Module_NumuneTeslimAlma";
        var body = {
            "BarkodNo": barkod.toString(),
            "IlgiliTasima@odata.bind": this.apiUrl + "HelpDeskFMS_Module_NumuneTasima(guid'" + portage["Oid"] + "')",
            "TeslimAlan@odata.bind": this.apiUrl + "HelpDeskFMS_Module_Kullanici(guid'" + this.userInfo["Oid"] + "')"
        };
        this.utils.loadingPresent("Lütfen Bekleyiniz...");
        this.serviceRequestProvider.postServiceRequest(seoUrl, body).subscribe(function (res) {
            _this.selectedPortage.PorterKabul.push(res);
            _this.utils.loadingDismiss();
            _this.utils.doConfirm("Numune Ekleme", "Numune Eklemeye devam edilsin mi ?", function () {
                me.scanBarcode(me.selectedPortage);
            }, function () {
                me.getSamplePortageList();
            });
        }, function (error) {
            _this.utils.loadingDismiss();
            //me.utils.doAlert("Bağlantınızı kontrol ediniz...");
        });
    };
    SamplePortagePage.prototype.filterItems = function (event, searchInput) {
        this.shouldEnableScrolling = event.target.value && searchInput !== '' ? false : true;
        this.samplePortageList = this.copy;
        this.samplePortageList = this.utils.filterItems(event, this.samplePortageList);
    };
    SamplePortagePage.prototype.searchRequest = function (event, searchInput) {
        if (event.charCode === 13)
            this.getSamplePortageList(undefined, searchInput);
    };
    SamplePortagePage.prototype.qrCodeGenerate = function (srCode) {
        this.utils.qrCodeGenerate(srCode);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_8" /* ViewChild */])('scrollContentNumune'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Content */])
    ], SamplePortagePage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_8" /* ViewChild */])('headerElementNumune'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["t" /* ElementRef */])
    ], SamplePortagePage.prototype, "headerElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_8" /* ViewChild */])('scrollFabButtonNumune'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["t" /* ElementRef */])
    ], SamplePortagePage.prototype, "myElement", void 0);
    SamplePortagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-sample-portage',template:/*ion-inline-start:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/sample-portage/sample-portage.html"*/'<!--\n  Generated template for the SamplePortagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-menu [content]="content" side="right" id="portageMenu" type="reveal">\n  <ion-content>\n    <button ion-button class="bar-button rightSideMenuButton"\n      (click)="changeShorting(\'Tarih\',\'takvim-up.png\',\'md-arrow-round-up\',\'#36495e\',\'Açılış Tarihine Göre ⬆️\');menu.close(\'portageMenu\')">\n      <div>\n        <img src="assets/my_icon/takvim-up.png" style="width: 10vw;" />\n        <div>\n          <label class="rightSideLabel">Açılış Tarihi</label>\n        </div>\n      </div>\n    </button>\n    <button ion-button class="bar-button rightSideMenuButton second"\n      (click)="changeShorting(\'-Tarih\',\'takvim-down.png\',\'md-arrow-round-down\',\'#36495e\',\'Açılış Tarihine Göre ⬇️\');menu.close(\'portageMenu\')">\n      <div>\n        <img class="secondImg" src="assets/my_icon/takvim-down.png" style="width: 10vw;" />\n        <div>\n          <label class="rightSideLabel">Açılış Tarihi</label>\n        </div>\n      </div>\n      <!--<div style="margin-left: 2px;"> <ion-icon name=\'md-arrow-round-down\' style="font-size: 3em;"></ion-icon> <br> <label></label> </div>-->\n    </button>\n\n    <button ion-button class="bar-button rightSideMenuButton"\n      (click)="changeShorting(\'IlgiliSLA/SCode\',\'123.png\',\'md-arrow-round-up\',\'#6db4a6\',\'SLA Numarasına Göre ⬆️\');menu.close(\'portageMenu\')">\n      <!--<div style="margin-left: 2px;"> <ion-icon name=\'md-arrow-round-up\' style="font-size: 3em;"></ion-icon> <br> <label></label> </div>-->\n      <div>\n        <img src="assets/my_icon/123.png" style="width: 10vw;" />\n        <div>\n          <label class="rightSideLabel">İlgili Sla No</label>\n        </div>\n      </div>\n    </button>\n    <button ion-button class="bar-button rightSideMenuButton second"\n      (click)="changeShorting(\'-IlgiliSLA/SCode\',\'321.png\',\'md-arrow-round-down\',\'#6db4a6\',\'SLA Numarasına Göre ⬇️\');menu.close(\'portageMenu\')">\n      <div>\n        <img class="secondImg" src="assets/my_icon/321.png" style="width: 10vw;" />\n        <div>\n          <label class="rightSideLabel">İlgili Sla No</label>\n        </div>\n      </div>\n      <!--<div style="margin-left: 2px;"> <ion-icon name=\'md-arrow-round-down\' style="font-size: 3em;"></ion-icon> <br> <label></label> </div>-->\n    </button>\n  </ion-content>\n</ion-menu>\n<ion-header>\n  <ion-navbar>\n    <ion-title>Numune Taşıma</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only class="menuButton" style="color: white;font-size: 17px;" (click)="getSamplePortageList()">\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-row class="row-filter">\n    <ion-col style="flex: 0 0 75%;padding: 0px;">\n      <ion-searchbar style="height:45px;" type="text" placeholder="Numune Ara" [(ngModel)]="searchInput"\n        enterkeyhint="go" (keypress)="searchRequest($event,searchInput)" (ionInput)="filterItems($event,searchInput)">\n      </ion-searchbar>\n    </ion-col>\n    <ion-col style="flex: 0 0 10%;padding: 0px;">\n      <button ion-button class="shortingButton" (click)="goCreateSamplePortage()">\n        <div style="margin-top: 2px;"> <img src="assets/my_icon/add.png" style="width: 30px;padding-top: 2px;" /></div>\n      </button>\n    </ion-col>\n    <ion-col style="flex: 0 0 15%;padding: 0px;">\n      <button ion-button class="shortingButton" [ngStyle]="{\'color\':arrowSideColor}"\n        (click)="menu[\'_menus\'][2].isOpen ? closeSideMenu(\'portageMenu\') : openSideMenu(\'portageMenu\')"\n        [disabled]="detailsActive===0">\n        <!--<div style="margin-left: 2px;"> <ion-icon name={{arrowSide}} style="font-size: 35px;"></ion-icon> <br> <label></label> </div>-->\n        <div style="margin-left: 2px;"> <img src="assets/my_icon/{{shortIcon}}" style="width: 40px;" /></div>\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-header>\n<ion-content #scrollContentNumune padding>\n  <ion-refresher (ionRefresh)="getSamplePortageList($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" refreshingSpinner="circles">\n      <!--refreshingText="Yenileniyor..." pullingText="Aşağı Kaydır"-->\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-fab right bottom #fab2>\n    <!-- [ngClass]="(scrollValue>50) ? \'scrollTopFABShow\' : \'scrollTopFABHide\'"-->\n    <button #scrollFabButtonNumune ion-fab mini (click)="scrollTop(250)" class="ion-fab ion-fab-button scrollTopFAB">\n      <ion-icon class="scrollTopFABIcon" name="md-arrow-round-up" style="color: rgba(9, 28, 72, 0.5);"></ion-icon>\n    </button>\n  </ion-fab>\n\n\n  <div #listDiv class="accordionList" *ngFor="let spList of samplePortageList; let i=index">\n    <ion-item style="padding-top: 10px;">\n      <ion-fab top right edge #fab1>\n        <button id="fab-numune" ion-fab mini class="ion-fab ion-fab-button" (click)="scanBarcode(spList)">\n          <img src="assets/flat_icon/numune.svg" />\n        </button>\n      </ion-fab>\n      <ion-icon item-start class="countIcon">{{i+1}}. </ion-icon>\n      <div class="listHeader"><b>{{ spList.IlgiliSLA ? spList.IlgiliSLA.ServisKategorisi.KategoriAdi : \'SLA Seçilmedi\' }}</b></div>\n      <p class="flowText list-nowrap"><span><b>İlgili Sla No :</b> </span>\n        {{spList.IlgiliSLA ? spList.IlgiliSLA.SCode : \'Boş\'}}\n        <img *ngIf="spList.IlgiliSLA && spList.IlgiliSLA.SCode" class="qr-code-generator" src="../../assets/imgs/qr-code.svg"\n         (click)="qrCodeGenerate(spList.IlgiliSLA.SCode)">\n      </p>\n      <p class="flowText list-nowrap"><span><b>Tarih :</b> </span>{{spList.Tarih | date}}</p>\n      <p class="flowText colorBlue list-nowrap"><span><b>Teslim Alınan Mahal :</b>\n        </span>{{spList.TeslimAlinanMahal ? spList.TeslimAlinanMahal.MahalKodu : \'Boş\'}}</p>\n      <p class="flowText colorBlue list-nowrap"><span><b>Teslim Edilen Mahal :</b>\n        </span>{{spList.TeslimEdilenMahal ? spList.TeslimEdilenMahal.MahalKodu : \'Boş\'}}</p>\n      <p class="flowText list-nowrap"><span><b>Porter Kabul :</b> </span>\n        <img src="assets/flat_icon/numune.svg" />\n        {{\' \' + spList.PorterKabul.length + \' Numune\'}}\n      </p>\n      <p class="flowText list-nowrap"><span><b>Laboratuvar Kabul :</b> </span>\n        <img src="assets/flat_icon/numune.svg" />\n        {{\' \' + spList.LaboratuvarKabul.length + \' Numune\'}}\n      </p>\n    </ion-item>\n    <div style="margin-top: 10px;">\n      <ion-row (click)="openDetails($event,spList)">\n        <ion-col class="sla-times-card numune" [ngStyle]="{\'background\':spList.renk1}">\n          <div class="card-emoji numune">{{spList.emoji1}}</div>\n          <p>\n            <span>{{spList.mesaj1}}</span>\n          </p>\n\n        </ion-col>\n        <ion-col class="sla-times-card numune" [ngStyle]="{\'background\':spList.renk2}">\n          <div class="card-emoji numune">{{spList.emoji2}}</div>\n          <p>\n            <span>{{spList.mesaj2}}</span>\n          </p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <ion-infinite-scroll (ionInfinite)="getSamplePortageList($event)" distance="5%">\n    <ion-infinite-scroll-content loadingSpinner="crescent"\n      loadingText="{{(limitToFirst+1) +\' - \'+ (limitToFirst+10) +\' Yükleniyor...\'}}" *ngIf="shouldEnableScrolling">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/sample-portage/sample-portage.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_service_request_service_request__["a" /* ServiceRequestProvider */], __WEBPACK_IMPORTED_MODULE_6__utils_utils__["a" /* Utils */], __WEBPACK_IMPORTED_MODULE_7__globalVariables_global_variables__["a" /* GlobalVariables */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_8__utils_storageData__["a" /* StorageData */]]
        }),
        __param(16, Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["z" /* Inject */])('apiUrl')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_service_request_service_request__["a" /* ServiceRequestProvider */],
            __WEBPACK_IMPORTED_MODULE_6__utils_utils__["a" /* Utils */], __WEBPACK_IMPORTED_MODULE_8__utils_storageData__["a" /* StorageData */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_7__globalVariables_global_variables__["a" /* GlobalVariables */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* Events */], Object])
    ], SamplePortagePage);
    return SamplePortagePage;
}());

//# sourceMappingURL=sample-portage.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SamplePortagePopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SamplePortagePopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SamplePortagePopoverPage = /** @class */ (function () {
    function SamplePortagePopoverPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var spList = navParams.data.spList;
        this.renk1 = spList.renk1;
        this.renk2 = spList.renk2;
        this.numuneList = spList;
    }
    SamplePortagePopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SamplePortagePopoverPage');
    };
    SamplePortagePopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sample-portage-popover',template:/*ion-inline-start:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/sample-portage-popover/sample-portage-popover.html"*/'\n<ion-content class="numune-popover">\n<h5 style="text-decoration: underline;text-align: center;"><b>Durumlar</b></h5>\n<table style="width:100%">\n  <tr style="text-align: left;">\n    <th>Barkod</th>\n    <th>Durum</th>\n  </tr>\n  <tr *ngFor="let nList of numuneList.PorterKabul" [ngStyle]="{\'background\': renk1}">\n      <td *ngIf="!nList.durum">{{nList.BarkodNo}}</td>\n      <td *ngIf="!nList.durum">{{\'😔Teslim Edilmedi\'}}</td>\n  </tr>\n  <tr *ngFor="let nList of numuneList.farkliNumuneList" [ngStyle]="{\'background\': renk2}">\n    <td>{{nList.BarkodNo}}</td>\n    <td>{{\'👎Fazla\'}}</td>\n  </tr>\n</table>\n</ion-content>\n'/*ion-inline-end:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/sample-portage-popover/sample-portage-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SamplePortagePopoverPage);
    return SamplePortagePopoverPage;
}());

//# sourceMappingURL=sample-portage-popover.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globalVariables_global_variables__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_request_service_request__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_storageData__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_utils__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_request_details_service_request_details__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__enums_hydp_enums__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__enums_state_enums__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__enums_type_enums__ = __webpack_require__(508);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








//import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media/ngx'





/**
 * Generated class for the ServiceRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiceRequestPage = /** @class */ (function () {
    function ServiceRequestPage(navCtrl, navParams, loadingCtrl, cdr, toastCtrl, menu, modalCtrl, serviceRequestProvider, utils, storage, platform, firebase, globalVariables, app, sanitizer, /*public streamingMedia: StreamingMedia,*/ events, apiUrl, appVersion_) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.cdr = cdr;
        this.toastCtrl = toastCtrl;
        this.menu = menu;
        this.modalCtrl = modalCtrl;
        this.serviceRequestProvider = serviceRequestProvider;
        this.utils = utils;
        this.storage = storage;
        this.platform = platform;
        this.firebase = firebase;
        this.globalVariables = globalVariables;
        this.app = app;
        this.sanitizer = sanitizer;
        this.events = events;
        this.apiUrl = apiUrl;
        this.appVersion_ = appVersion_;
        this.userInfo = {};
        this.serviceRequest = [];
        this.gorevAdi = 'Servis İsteklerim';
        this.istekTalepTuru = 'kendimin';
        this.showDetay = false;
        this.oldIstekTalepTuru = 'kendimin';
        this.oldGorevAdi = 'Servis İsteklerim';
        this.changePipe = 'acilistarihi';
        this.tempPipe = 'acilistarihi';
        this.ascDesc = 'asc';
        this.pipeMesaj = 'Açılış Tarihine Göre ⬆️';
        this.shortIcon = 'takvim-up.png';
        this.arrowSide = 'md-arrow-round-up';
        this.arrowSideColor = '#36495e';
        this.selectedButton = 0;
        this.shouldEnableScrolling = false;
        this.limitToFirst = 0;
        this.top = 10;
        this.fabActive = '';
        this.process = 'OK';
        this.fabList = '';
        this.progressRed = 0;
        this.progressGreen = 180;
        this.detailsActive = 1;
        this.isPhoto = false;
        this.photodeneme = this.apiUrl + "HelpDeskFMS_Module_Kullanici(guid'32cb30a3-ef50-4e61-a8da-eeef99817304')/Foto";
        this.onResumeSubscription = this.platform.resume.subscribe(function () { });
        this.appVersion = localStorage.getItem('app_v');
        this.stateEnums = __WEBPACK_IMPORTED_MODULE_11__enums_state_enums__["a" /* StateEnums */];
        this.typeEnums = __WEBPACK_IMPORTED_MODULE_12__enums_type_enums__["a" /* TypeEnums */];
        this.hydpEnums = __WEBPACK_IMPORTED_MODULE_10__enums_hydp_enums__["a" /* HydpEnums */];
        this.platform.ready().then(function () {
            _this.firebase.onNotification().subscribe(function (data) {
                console.log(data);
                var title = data.title ? data.title : 'KeyDesk Yardım Masası';
                var body = data.body ? data.body : 'Yeni Servis İsteği Geldi...';
                if (data.title || data.body) {
                    var toast = _this.toastCtrl.create({
                        message: title + '\n\n' + body,
                        duration: 2000,
                        position: 'bottom',
                        cssClass: 'toastBg'
                    });
                    toast.onDidDismiss(function () {
                        if (_this.globalVariables.notificationIsActive == true) {
                            if (_this.userInfo && _this.userInfo['unvan'] && _this.userInfo['unvan']['ilgiliServis'] && _this.userInfo['unvan']['ilgiliServis']['ServisAdi'] == 'İDARE') {
                                _this.loadData('Oluşturduğum SLA', 'olusturdugum', 0, true);
                            }
                            else {
                                _this.loadData('Servis İsteklerim', 'kendimin', 0, true);
                            }
                        }
                    });
                    toast.present();
                }
                else {
                    if (_this.globalVariables.notificationIsActive == true) {
                        if (_this.userInfo && _this.userInfo['unvan'] && _this.userInfo['unvan']['ilgiliServis'] && _this.userInfo['unvan']['ilgiliServis']['ServisAdi'] == 'İDARE') {
                            _this.loadData('Oluşturduğum SLA', 'olusturdugum', 0, true);
                        }
                        else {
                            _this.loadData('Servis İsteklerim', 'kendimin', 0, true);
                        }
                    }
                }
            }, function (err) { return console.log(err); });
        });
        this.events.subscribe('afterProcessOK', function (data) {
            if (data === _this.process) {
                _this.process = 'FINISH';
                return _this.getServiceRequest();
            }
        });
    }
    ServiceRequestPage.prototype.ngOnDestroy = function () {
        this.onResumeSubscription.unsubscribe();
    };
    ServiceRequestPage.prototype.setSocialPlatform = function (sr) {
        this.utils.setSocialPlatform(sr, this.stateEnums, function () {
            this.globalVariables.notificationIsActive = false;
        });
    };
    ServiceRequestPage.prototype.changeShorting = function (pipe, icon, side, color, pipeMesaj) {
        if (this.tempPipe !== pipe) {
            this.changePipe = pipe.replace('-', '');
            this.ascDesc = pipe[0] === '-' ? 'desc' : 'asc';
            this.shortIcon = icon;
            this.arrowSide = side;
            this.arrowSideColor = color;
            this.pipeMesaj = pipeMesaj;
            this.tempPipe = pipe;
            this.getServiceRequest();
        }
    };
    ServiceRequestPage.prototype.ngAfterViewInit = function () {
        this.utils.scrollContentFabControl(this.content, this.myElement);
    };
    ServiceRequestPage.prototype.scrollTop = function (val) {
        this.content.scrollToTop(val);
        this.showDetay = false;
        this.fabActive = '';
    };
    ServiceRequestPage.prototype.selectTabs = function (tabIndex) {
        this.globalVariables.notificationIsActive = false;
        var len_ = this.app.getRootNav().getActiveChildNav()._tabs.length;
        tabIndex = len_ === 3 ? tabIndex : tabIndex - 1;
        this.app.getRootNav().getActiveChildNav().select(tabIndex);
    };
    ServiceRequestPage.prototype.selectedRequest = function (index, sr) {
        var _this = this;
        this.selectedSrColor = sr.HdsStateStyle.borderColor;
        this.detailsActive = 0;
        var tempServiceRequest = [];
        var startIndex = parseInt((index / 10).toString()) === 0 ? 0 : parseInt((parseInt((index / 10).toString()) * 10).toString());
        this.selectedIndex = startIndex;
        for (var i = 0; i < 10; i++) {
            if (this.serviceRequest[startIndex + i])
                tempServiceRequest.push(this.serviceRequest[startIndex + i]);
            else
                break;
        }
        this.detailsModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__service_request_details_service_request_details__["a" /* ServiceRequestDetailsPage */], {
            serviceRequestDetails: tempServiceRequest,
            userInfo: this.userInfo,
            istekTalepTuru: this.istekTalepTuru,
            index: index,
            startIndex: startIndex,
            gorevAdi: this.gorevAdi,
            selectedSR: sr.oid
        }, { showBackdrop: true, enableBackdropDismiss: true });
        this.detailsModal.onDidDismiss(function () {
            _this.globalVariables.notificationIsActive = true;
            _this.detailsActive = 1;
        });
        this.detailsModal.present();
        this.process = 'OK';
    };
    ServiceRequestPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.menu.enable(true, 'leftMenu');
            _this.menu.enable(true, 'rightMenu');
        }, 100);
        this.storage.get('userInfo', function (val) {
            console.log(val);
            if (val) {
                _this.userInfo = val[0];
                // this.isPhoto=this.userInfo["Foto@odata.mediaETag"] ? true : false;
                _this.userInfo['photoUrl'] = _this.apiUrl + "HelpDeskFMS_Module_Kullanici(guid'" + _this.userInfo['Oid'] + "')/Foto";
                console.log(_this.userInfo);
                _this.utils.scrollContentFabControlDisplay(_this.myElement, 'none');
                _this.showDetay = false;
                _this.fabActive = '';
                if (_this.userInfo && _this.userInfo['unvan'] && _this.userInfo['unvan']['ilgiliServis'] && _this.userInfo['unvan']['ilgiliServis']['ServisAdi'] == 'İDARE') {
                    _this.gorevAdi = 'Oluşturduğum SLA';
                    _this.istekTalepTuru = 'olusturdugum';
                }
                /*this.gorevAdi = "Servis İsteklerim";
         this.istekTalepTuru = "kendimin";*/
                //console.log(this.userInfo['unvan']['ilgiliServis']['ServisAdi'])
                _this.getServiceRequest();
            }
        });
    };
    ServiceRequestPage.prototype.ionViewDidLoad = function () {
        this.globalVariables.notificationIsActive = true;
        console.log('ionViewDidLoad ServiceRequestPage');
    };
    ServiceRequestPage.prototype.ionViewWillLeave = function () {
        this.globalVariables.notificationIsActive = false;
        this.menu.close('leftMenu');
        this.menu.close('rightMenu');
        //this.restartScreenPosition("0px","119px","46px","10px","0px");
        this.showDetay = false;
        this.fabActive = '';
    };
    ServiceRequestPage.prototype.loadData = function (gorevAdi, istekTalepTuru, selectedButton, notif) {
        var _this = this;
        this.selectedButton = selectedButton;
        this.content.scrollToTop(0).then(function () {
            if (_this.oldIstekTalepTuru != istekTalepTuru || _this.oldGorevAdi != gorevAdi || notif == true) {
                _this.showDetay = false;
                _this.istekTalepTuru = istekTalepTuru;
                _this.oldIstekTalepTuru = istekTalepTuru;
                _this.gorevAdi = gorevAdi;
                _this.oldGorevAdi = gorevAdi;
                _this.shouldEnableScrolling = true;
                _this.getServiceRequest();
            }
        });
        //this.restartScreenPosition("0px","119px","46px","10px","0px");
    };
    ServiceRequestPage.prototype.closePopup = function () {
        this.utils.loadingDismiss();
    };
    //http://www.noiseaddicts.com/samples_1w72b820/3828.mp3
    ServiceRequestPage.prototype.audioPlayStop = function (fab) {
        /*let options: StreamingAudioOptions = {
            successCallback: () => {
                console.log('Finished Audio')
            },
            errorCallback: e => {
                console.log('Error: ', e)
            },
            initFullscreen: false // iOS only!
        }*/
        //http://soundbible.com/2196-Baby-Music-Box.html
        //this.streamingMedia.playAudio('http://soundbible.com/grab.php?id=2196&type=mp3', options)
    };
    ServiceRequestPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            _this.getServiceRequest(infiniteScroll);
            console.log('Async operation has ended');
        }, 100);
    };
    ServiceRequestPage.prototype.getServiceRequest = function (infiniteScroll, searchInput) {
        var _this = this;
        this.searchInput = '';
        if (!infiniteScroll || infiniteScroll.state === 'refreshing') {
            this.shouldEnableScrolling = true;
            this.limitToFirst = 0;
            this.top = 10;
            this.serviceRequest = [];
            this.utils.loadingPresent(this.gorevAdi + ' Yükleniyor...<br>' + '( ' + this.pipeMesaj + ' )');
        } //,SeciliDepartman
        if (searchInput) {
            //this.serviceRequest = []
            this.shouldEnableScrolling = false;
            //this.limitToFirst = 0
            this.top = 100;
        }
        var expand = '?$expand=konu,gorevlikisi,IlgiliServis/YukleniciFirma,SeciliDepartman,ilgilikisi,olusturan,ServisKategorisi,ilgiliMahal,Dosyalar,Islemler';
        var filter = '&$filter=IlgiliServis ne null '; // and day(acilistarihi) eq 11 and month(acilistarihi) eq 12 and year(acilistarihi) eq 2019
        var seoUrl = '';
        var status = '(Durum eq 20  or Durum eq 22 or Durum eq 30 or Durum eq 31 or Durum eq 32 or Durum eq 40 or Durum eq 41 or Durum eq 42 or Durum eq 51 or Durum eq 52)';
        var paging = '&$skip=' + this.limitToFirst + '&$top=' + this.top;
        var orderBy = '&$orderby=' + this.changePipe + ' ' + this.ascDesc;
        //this.changeShorting('Durum','hepsi-up.png',null,null);
        if (searchInput) {
            if (parseInt(searchInput))
                filter += 'and SCode eq ' + searchInput + ' ';
            else
                filter += "and (indexof(ilgiliMahal/MahalKodu,'" + searchInput + "') gt -1" + " or indexof(ilgiliMahal/MahalAdi,'" + searchInput + "') gt -1" + " or indexof(gorevlikisi/NesneAdi, '" + searchInput + "') gt -1" + " or indexof(ilgilikisi/NesneAdi,'" + searchInput + "') gt -1" + " or indexof(ServisKategorisi/KategoriAdi, '" + searchInput + "') gt -1" + " or indexof(konu/OlayRender, '" + searchInput + "') gt -1) ";
        }
        if (this.istekTalepTuru == 'hepsi') {
            filter += ' and ' + status;
            //orderBy="&$orderby="+this.changePipe+" desc";
            //this.changeShorting('-acilistarihi','takvim-down.png',null,null);
        }
        else if (this.istekTalepTuru == 'olusturdugum') {
            status = '(Durum eq 20  or Durum eq 22 or Durum eq 30 or Durum eq 31 or Durum eq 32 or Durum eq 51 or Durum eq 52)';
            filter += "and ilgilikisi/Oid eq guid'" + this.userInfo['Oid'] + "' and " + status;
        }
        else if (this.istekTalepTuru == 'kendimin') {
            status = '(Durum eq 20  or Durum eq 22 or Durum eq 30 or Durum eq 31 or Durum eq 32 or Durum eq 51 or Durum eq 52)';
            if (localStorage.getItem('selectedKule')) {
                filter += "and gorevlikisi/Oid eq guid'" + this.userInfo['Oid'] + "' and startswith(ilgiliMahal/MahalKodu,'" + localStorage.getItem('selectedKule') + "') and " + status;
            }
            else {
                filter += "and gorevlikisi/Oid eq guid'" + this.userInfo['Oid'] + "' and " + status;
            }
            //orderBy="&$orderby="+this.changePipe+" desc";
            //this.changeShorting('-acilistarihi','takvim-down.png',null,null);
        }
        else if (this.istekTalepTuru == 'birimin') {
            status = '(Durum eq 20  or Durum eq 22 or Durum eq 30 or Durum eq 31 or Durum eq 32 or Durum eq 51 or Durum eq 52)';
            filter += "and SeciliDepartman/Oid eq guid'" + this.userInfo['unvan']['Oid'] + "' and " + status;
        }
        else if (this.istekTalepTuru == 'servisin') {
            status = '(Durum eq 20  or Durum eq 22 or Durum eq 30 or Durum eq 31 or Durum eq 32 or Durum eq 51 or Durum eq 52)';
            filter += "and IlgiliServis/Oid eq guid'" + this.userInfo['unvan']['ilgiliServis']['Oid'] + "' and " + status;
        }
        else if (this.istekTalepTuru == 'tumServisin') {
            status = '(Durum eq 50 or Durum eq 60)';
            filter += "and IlgiliServis/Oid eq guid'" + this.userInfo['unvan']['ilgiliServis']['Oid'] + "' and " + status;
            //this.changeShorting('-acilistarihi','takvim-down.png',null,null);
        }
        else if (this.istekTalepTuru == 'uzatmada') {
            status = '(Durum eq 21 or Durum eq 22 or Durum eq 40 or Durum eq 41 or Durum eq 42 or Durum eq 61 or Durum eq 62 or Durum eq 81 or Durum eq 82)';
            if (this.userInfo['kurumYetki'] == 1) {
                filter += "and (IlgiliServis/YukleniciFirma/Oid eq guid'" + this.userInfo['Sirket']['Oid'] + "') and " + status;
            }
            else if (this.userInfo['kurumYetki'] == 0 && this.userInfo['servisYetki'] == 1) {
                filter += "and (IlgiliServis/Oid eq guid'" + this.userInfo['unvan']['ilgiliServis']['Oid'] + "') and " + status;
            }
            else {
                if (localStorage.getItem('selectedKule')) {
                    filter += "and (gorevlikisi/Oid eq guid'" + this.userInfo['Oid'] + "' or ilgilikisi/Oid eq guid'" + this.userInfo['Oid'] + "' and startswith(ilgiliMahal/MahalKodu,'" + localStorage.getItem('selectedKule') + "') and " + status;
                }
                else {
                    filter += "and (gorevlikisi/Oid eq guid'" + this.userInfo['Oid'] + "' or ilgilikisi/Oid eq guid'" + this.userInfo['Oid'] + "') and " + status;
                }
            }
            //this.changeShorting('-acilistarihi','takvim-down.png',null,null);
        }
        else {
            status = '(Durum eq 20 or Durum eq 22 or Durum eq 30 or Durum eq 31 or Durum eq 32 or Durum eq 51 or Durum eq 52)';
            filter += "and IlgiliServis/YukleniciFirma/Oid eq guid'" + this.userInfo['Sirket']['Oid'] + "' and " + status;
        }
        var select = '';
        // switch (this.istekTalepTuru) {
        //   case "kendimin":
        //     filter += "and gorevlikisi/Oid eq guid'" + this.userInfo["Oid"] + "' and " + status;
        //     break;
        //   case "birimin":
        //     filter += "and SeciliDepartman/Oid eq guid'" + this.userInfo["unvan"]["Oid"] + "' and " + status;
        //     break;
        //   case "servisin":
        //     filter += "and IlgiliServis/Oid eq guid'" + this.userInfo["unvan"]["ilgiliServis"]["Oid"] + "' and " + status;
        //     break;
        //   case "tumServisin":
        //     status = "(Durum eq 50 or Durum eq 60)";
        //     filter += "and IlgiliServis/Oid eq guid'" + this.userInfo["unvan"]["ilgiliServis"]["Oid"] + "' and " + status;
        //     break;
        //   default:
        //     filter += "and IlgiliServis/YukleniciFirma/Oid eq guid'" + this.userInfo["Sirket"]["Oid"] + "' and " + status;
        //     break;
        // }
        /*"&$select=Oid,SCode,Durum,ServisKategorisi/Oid,KategoriAdi,acilistarihi,Goal2,Goal2Kalan," +
     "ilgilikisi/Oid,adi,soyadi,gorevlikisi/Oid,adi,soyadi,konu/Oid,tip,OlayRender,ilgiliMahal,aciklama,Okundu";*/
        seoUrl = 'HelpDeskFMS_Module_ServisIstegi' + expand + filter + select + paging + orderBy + '&$inlinecount=allpages';
        var setService = this.serviceRequestProvider.getServiceRequest(seoUrl, null);
        if (this.userInfo.UserName === 'application.testing') {
            var list = this.istekTalepTuru === 'kendimin' ? 'my-request-list' : 'request-list';
            setService = this.serviceRequestProvider.getMockList(list);
        }
        setService.subscribe(function (p) {
            _this.utils.loadingDismiss();
            _this.events.publish('serviceCount', p['odata.count']);
            if (p['value'].length > 0) {
                for (var i = 0; i < p['value'].length; i++) {
                    _this.serviceRequest.push(p['value'][i]);
                }
                //this.serviceRequest = this.utils.sortList(this.serviceRequest,this.changePipe);
                _this.limitToFirst += 10;
                _this.storage.set('serviceRequest', p['value']);
                _this.copy = _this.serviceRequest;
                _this.utils.getDynamicValues(_this.serviceRequest);
                if (p['value'].length < 10) {
                    _this.utils.toastMessage('Tüm Servis İstekleri Yüklendi...\n' + '( ' + _this.pipeMesaj + ' )');
                    _this.shouldEnableScrolling = false;
                }
            }
            else {
                if (_this.serviceRequest.length > 0) {
                    _this.utils.toastMessage('Tüm Servis İstekleri Yüklendi...\n' + '( ' + _this.pipeMesaj + ' )');
                    _this.shouldEnableScrolling = false;
                }
                else {
                    _this.utils.toastMessage('Servis İsteği Yok...');
                }
            }
            if ((_this.istekTalepTuru == 'hepsi' || _this.istekTalepTuru == 'tumServisin') && _this.limitToFirst >= 100) {
                _this.utils.toastMessage('Tüm Servis İstekleri Yüklendi...\n' + '( ' + _this.pipeMesaj + ' )');
                _this.shouldEnableScrolling = false;
            }
            console.log(_this.serviceRequest);
            if (infiniteScroll) {
                infiniteScroll.complete();
            }
            _this.globalVariables.notificationIsActive = true;
        }, function (error) {
            _this.utils.loadingDismiss();
            var me = _this;
            // this.storage.get("serviceRequest").then(p => {
            //   this.serviceRequest = p;
            //   this.copy = p;
            //   this.utils.getDynamicValues(me.serviceRequest);
            // });
            _this.globalVariables.notificationIsActive = true;
        });
    };
    ServiceRequestPage.prototype.filterItems = function (event, searchInput) {
        this.shouldEnableScrolling = event.target.value && searchInput !== '' ? false : true;
        this.serviceRequest = this.copy;
        this.serviceRequest = this.utils.filterItems(event, this.serviceRequest);
    };
    ServiceRequestPage.prototype.searchRequest = function (event, searchInput) {
        if (event.charCode === 13)
            this.getServiceRequest(undefined, searchInput);
    };
    ServiceRequestPage.prototype.openSideMenu = function (name) {
        this.menu.open(name);
    };
    ServiceRequestPage.prototype.closeSideMenu = function (name) {
        this.menu.close(name);
    };
    /* assigningPerson(sr) {
   console.log(sr);// and unvan/Oid ne guid'919fccaf-abe4-40ef-9892-b1aa2de58bdc'
   let guid = "guid'" + sr["IlgiliServis"]["Oid"] + "'";
   let select = "&$select=Oid,adi,soyadi,isunvani,EPosta,MobilUUID,unvan/RolAdi,AtanmisToplamIs";
   let orderBy = "&$orderby=adi asc";
   let seoUrl = "HelpDeskFMS_Module_Kullanici?$expand=unvan/ilgiliServis&$filter=IsActive eq true and unvan/ilgiliServis/Oid eq " + guid + select + orderBy;
   if (this.istekTalepTuru == "kurumun"){
   guid = "guid'" + this.userInfo["Sirket"]["Oid"] + "'";
   seoUrl = "HelpDeskFMS_Module_Kullanici?$expand=Sirket,unvan/ilgiliServis&$filter=IsActive eq true and Sirket/Oid eq " + guid + select + orderBy;
   }
   this.utils.loadingPresent("Personel Listesi Yükleniyor");
   this.serviceRequestProvider.getServiceRequest(seoUrl, null).subscribe(p => {
   let personalList = p;
   let expand = "?$expand=konu,gorevlikisi,IlgiliServis,ilgilikisi,olusturan,SeciliDepartman,ServisKategorisi,ilgiliMahal";
   let filter = "&$filter=IlgiliServis/Oid eq guid'" + sr["IlgiliServis"]["Oid"] + "' and Durum ne 10 and Durum ne 50 and Durum ne 60";
   let seoUrl = "HelpDeskFMS_Module_ServisIstegi" + expand + filter;
   for (let i = 0; i < personalList["value"].length; i++) {
   personalList["value"][i]["adiSoyadi"] = personalList["value"][i].adi + " " + personalList["value"][i].soyadi;
   personalList["value"][i]["isOnline"] = 0;
   if (personalList["value"][i].MobilUUID != null && personalList["value"][i].MobilUUID.length > 0) {
   personalList["value"][i]["isOnline"] = 1;
   }
   else {
   personalList["value"][i]["isOnline"] = 0;
   }
   if (!personalList["value"][i]["AtanmisToplamIs"]) {
   personalList["value"][i]["AtanmisToplamIs"] = 0;
   }
   }
   this.utils.loadingDismiss();
   this.globalVariables.notificationIsActive = false;
   this.myModal = this.modalCtrl.create(AssigningPersonPage, {
   personalList: personalList,
   sr: sr
   });
   this.myModal.onDidDismiss(() => {
   this.globalVariables.notificationIsActive = true;
   // Call the method to do whatever in your home.ts
   this.showDetay = false;
   this.getServiceRequest();
   });
   this.myModal.present();
   }, error => {
   this.utils.loadingDismiss();
   });
   }*/
    ServiceRequestPage.prototype.goPage = function () {
        var _this = this;
        this.utils.loadingPresent('Çıkış Yapılıyor...');
        this.storage.get('userInfo', function (userInfo) {
            var seourl = 'HelpDeskFMS_Module_Kullanici' + "(guid'" + userInfo[0]['Oid'] + "')";
            var body = {
                'odata.type': 'XafDataService.HelpDeskFMS_Module_Kullanici',
                MobilUUID: null,
                OturumAcilanCihaz: null
            };
            if (_this.userInfo.UserName === 'application.testing') {
                _this.storage.remove('userInfo');
                _this.storage.remove('serviceRequest');
                _this.storage.remove('my_token');
                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
                _this.utils.loadingDismiss();
            }
            else {
                _this.serviceRequestProvider.putServiceRequest(seourl, body).subscribe(function (p) {
                    _this.utils.loadingDismiss();
                    _this.storage.remove('userInfo');
                    _this.storage.remove('serviceRequest');
                    _this.storage.remove('my_token');
                    _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
                }, function (error) {
                    _this.utils.loadingDismiss();
                    /*this.utils.doAlert("Bağlantınızı kontrol ediniz...");*/
                    /*this.file.listDir(this.file.cacheDirectory,'').then((result)=>{
       for(let file of result){
       this.file.removeFile(this.file.cacheDirectory, file.name) ;
       this.file.removeRecursively(this.file.cacheDirectory, file.name).catch(err => {});
       }
       }) ;*/
                    _this.storage.remove('userInfo');
                    _this.storage.remove('serviceRequest');
                    _this.storage.remove('my_token');
                    _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scrollContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Content */])
    ], ServiceRequestPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('headerElement'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ServiceRequestPage.prototype, "headerElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scrollFabButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ServiceRequestPage.prototype, "myElement", void 0);
    ServiceRequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-service-request',template:/*ion-inline-start:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/service-request/service-request.html"*/'<!--\n  Generated template for the ServisIstekleriPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-menu [content]="content" side="left" id="leftMenu" type="push">\n	<ion-header>\n		<ion-toolbar>\n			<ion-title style="text-align: center">\n				<!--<ion-icon name=\'clipboard\' style="font-size: 1.8em;"></ion-icon>-->\n				<div style="bottom: 0px">\n					<img src="{{userInfo && isPhoto ? userInfo.photoUrl  : (userInfo && userInfo.cinsiyet===0 ? \'../../assets/imgs/boss.png\' : \'../../assets/imgs/woman.png\')}}" style="width: 70px; border-radius: 25px; height: 70px" />\n					<!-- <img *ngIf="userInfo && userInfo.cinsiyet==0" src="assets/imgs/boss.png"\n            style="width: 70px;border-radius: 25px;height: 70px;" />\n          <img *ngIf="userInfo && userInfo.cinsiyet==1" src="assets/imgs/woman.png"\n            style="width: 70px;border-radius: 25px;height: 70px;" /> -->\n				</div>\n				<div class="leftMenuDiv" style="padding-top: 10px">\n					<label style="font-size: small; text-shadow: -1px -1px 5px #000000">{{ userInfo ? userInfo.adi : \'\' }} {{userInfo ? userInfo.soyadi : \'\' }}</label>\n				</div>\n				<div class="leftMenuDiv">\n					<label style="font-size: small; text-shadow: -1px -1px 5px #000000">{{ userInfo ? userInfo.isunvani : \'\' }}</label>\n				</div>\n				<div class="leftMenuDiv">\n					<label style="font-size: small; text-shadow: -1px -1px 5px #000000">{{ userInfo ? userInfo.SicilNo : \'\' }} / {{ userInfo ? userInfo.UserName : \'\' }}</label>\n				</div>\n			</ion-title>\n		</ion-toolbar>\n	</ion-header>\n	<ion-content style="margin-bottom: 0px; margin-top: 0px">\n		<ion-scroll scrollY="true" style="height: calc(100% - 85px)">\n			<div *ngIf="userInfo && userInfo[\'FMCOYetki\']==1">\n				<button ion-button class="bar-button" class="sideMenuButton" (click)="loadData(\'Tüm İstekler\',\'hepsi\',5);menu.close(\'leftMenu\')" [ngStyle]="{\'background\': istekTalepTuru==\'hepsi\' ? \'#efeeee\' : \'\'}">\n					<img src="assets/flat_icon/sla-talebi.svg" class="sideMenuImg" />\n					<label [ngStyle]="{\'font-weight\': istekTalepTuru==\'hepsi\' ? \'bold\' : \'\'}">Tüm İstekler</label>\n				</button>\n			</div>\n			<div *ngIf="userInfo && userInfo[\'unvan\'] && userInfo[\'unvan\'][\'ilgiliServis\'] && userInfo[\'unvan\'][\'ilgiliServis\'][\'ServisAdi\']==\'İDARE\'">\n				<button ion-button class="sideMenuButton" (click)="loadData(\'Oluşturduğum SLA\',\'olusturdugum\',0);menu.close(\'leftMenu\')" [ngStyle]="{\'background\': istekTalepTuru==\'olusturdugum\' ? \'#efeeee\' : \'\'}">\n					<img src="assets/flat_icon/bana-atanan.svg" class="sideMenuImg" />\n					<label [ngStyle]="{\'font-weight\': istekTalepTuru==\'olusturdugum\' ? \'bold\' : \'\'}">Oluşturduğum SLA</label>\n				</button>\n			</div>\n			<div *ngIf="userInfo && userInfo[\'unvan\'] && userInfo[\'unvan\'][\'ilgiliServis\'] && userInfo[\'unvan\'][\'ilgiliServis\'][\'ServisAdi\']!=\'İDARE\'">\n				<button ion-button class="sideMenuButton" (click)="loadData(\'Servis İsteklerim\',\'kendimin\',0);menu.close(\'leftMenu\')" [ngStyle]="{\'background\': istekTalepTuru==\'kendimin\' ? \'#efeeee\' : \'\'}">\n					<img src="assets/flat_icon/bana-atanan.svg" class="sideMenuImg" />\n					<label [ngStyle]="{\'font-weight\': istekTalepTuru==\'kendimin\' ? \'bold\' : \'\'}">Bana Atanan</label>\n				</button>\n			</div>\n			<div *ngIf="userInfo && userInfo[\'birimYetki\']==1000">\n				<button ion-button class="bar-button" class="sideMenuButton" (click)="loadData(\'Birimin İstekleri\',\'birimin\',1);menu.close(\'leftMenu\')" [ngStyle]="{\'background\': istekTalepTuru==\'birimin\' ? \'#efeeee\' : \'\'}">\n					<img src="assets/flat_icon/birimdeki-servis-istekleri.svg" class="sideMenuImg" />\n					<label [ngStyle]="{\'font-weight\': istekTalepTuru==\'birimin\' ? \'bold\' : \'\'}">Birimin İstekleri</label>\n				</button>\n			</div>\n			<div *ngIf="userInfo && userInfo[\'servisYetki\']==1">\n				<button ion-button class="bar-button" class="sideMenuButton" (click)="loadData(\'Servisin İstekleri\',\'servisin\',2);menu.close(\'leftMenu\')" [ngStyle]="{\'background\': istekTalepTuru==\'servisin\' ? \'#efeeee\' : \'\'}">\n					<img src="assets/flat_icon/sla-talebi.svg" class="sideMenuImg" />\n					<label [ngStyle]="{\'font-weight\': istekTalepTuru==\'servisin\' ? \'bold\' : \'\'}">Servisin İstekleri</label>\n				</button>\n			</div>\n			<div *ngIf="(userInfo && userInfo[\'birimYetki\']==1) || userInfo[\'UserName\']===\'application.testing\'">\n				<button ion-button class="bar-button" class="sideMenuButton" (click)="loadData(\'Servisin Kapanan İstekleri\',\'tumServisin\',4);menu.close(\'leftMenu\')" [ngStyle]="{\'background\': istekTalepTuru==\'tumServisin\' ? \'#efeeee\' : \'\'}">\n					<img src="assets/flat_icon/sla-talebi.svg" class="sideMenuImg" />\n					<label [ngStyle]="{\'font-weight\': istekTalepTuru==\'tumServisin\' ? \'bold\' : \'\'}">Servisin Kapanan İstekleri</label>\n				</button>\n			</div>\n			<div *ngIf="userInfo && userInfo[\'kurumYetki\']==1">\n				<button ion-button class="bar-button" class="sideMenuButton" (click)="loadData(\'Kurumun İstekleri\',\'kurumun\',3);menu.close(\'leftMenu\')" [ngStyle]="{\'background\': istekTalepTuru==\'kurumun\' ? \'#efeeee\' : \'\'}">\n					<img src="assets/flat_icon/sla-talebi.svg" class="sideMenuImg" />\n					<label [ngStyle]="{\'font-weight\': istekTalepTuru==\'kurumun\' ? \'bold\' : \'\'}">Kurumun İstekleri</label>\n				</button>\n			</div>\n			<div *ngIf="userInfo && userInfo[\'unvan\'] && userInfo[\'unvan\'][\'ilgiliServis\'] && userInfo[\'unvan\'][\'ilgiliServis\'][\'ServisAdi\']!=\'İDARE\'">\n				<button ion-button class="sideMenuButton" (click)="loadData(\'Onaya Gönderilen İstekler\',\'uzatmada\',0);menu.close(\'leftMenu\')" [ngStyle]="{\'background\': istekTalepTuru==\'uzatmada\' ? \'#efeeee\' : \'\'}">\n					<img src="assets/flat_icon/sla-talebi.svg" class="sideMenuImg" />\n					<label [ngStyle]="{\'font-weight\': istekTalepTuru==\'uzatmada\' ? \'bold\' : \'\'}">Onaya Gönderilen İstekler</label>\n				</button>\n			</div>\n			<div *ngIf="userInfo[\'adminYetki\']===1 || userInfo[\'porterYetki\']===1">\n				<!--[ngStyle]="{\'background\': selectedButton==4 ? \'#efeeee\' : \'\'}"!-->\n				<button ion-button class="bar-button" class="sideMenuButton" (click)="selectTabs(1);menu.close(\'leftMenu\')">\n					<img src="assets/flat_icon/numune.svg" class="sideMenuImg" />\n					<label>Numune Taşıma</label>\n				</button>\n			</div>\n			<div>\n				<!--[ngStyle]="{\'background\': selectedButton==4 ? \'#efeeee\' : \'\'}"!-->\n				<button ion-button class="bar-button" class="sideMenuButton" (click)="selectTabs(2);menu.close(\'leftMenu\')" [hidden]="userInfo.UserName===\'application.testing\'">\n					<img src="assets/flat_icon/sla-talep.svg" class="sideMenuImg" />\n					<label>SLA Talebi</label>\n				</button>\n			</div>\n			<div *ngIf="false">\n				<!--[ngStyle]="{\'background\': selectedButton==4 ? \'#efeeee\' : \'\'}"!-->\n				<button ion-button class="bar-button" class="sideMenuButton" (click)="menu.close(\'leftMenu\')">\n					<img src="assets/imgs/sayac.png" class="sideMenuImg" />\n					<label>Sayaç Okuma</label>\n				</button>\n			</div>\n			<div>\n				<button ion-button class="bar-button" class="sideMenuButton" (click)="goPage();menu.close(\'leftMenu\')">\n					<img src="assets/flat_icon/logout.svg" class="sideMenuImg" />\n					<label style="font-weight: 600">Çıkış</label>\n				</button>\n			</div>\n			<div style="text-align: center; padding-top: 10px; margin-bottom: 6px">\n				<img src="assets/imgs/version.png" class="sideMenuImg" style="margin-right: 0" />\n				<label style="font-style: italic">{{\'version: v\' + appVersion + \' © 2019\'}}</label>\n				<br />\n				<label style="font-style: italic"><a href="https://keydata.com.tr/aydinlatma-metni/" target="_blank">Gizlilik Politikası</a></label>\n			</div>\n		</ion-scroll>\n	</ion-content>\n</ion-menu>\n<ion-menu [content]="content" side="right" id="rightMenu" type="reveal">\n	<ion-content>\n		<button ion-button class="bar-button rightSideMenuButton" (click)="changeShorting(\'acilistarihi\',\'takvim-up.png\',\'md-arrow-round-up\',\'#36495e\',\'Açılış Tarihine Göre ⬆️\');menu.close(\'rightMenu\')">\n			<div>\n				<img src="assets/my_icon/takvim-up.png" style="width: 10vw" />\n				<div>\n					<label class="rightSideLabel">Açılış Tarihi</label>\n				</div>\n			</div>\n		</button>\n		<button ion-button class="bar-button rightSideMenuButton second" (click)="changeShorting(\'-acilistarihi\',\'takvim-down.png\',\'md-arrow-round-down\',\'#36495e\',\'Açılış Tarihine Göre ⬇️\');menu.close(\'rightMenu\')">\n			<div>\n				<img class="secondImg" src="assets/my_icon/takvim-down.png" style="width: 10vw" />\n				<div>\n					<label class="rightSideLabel">Açılış Tarihi</label>\n				</div>\n			</div>\n			<!--<div style="margin-left: 2px;"> <ion-icon name=\'md-arrow-round-down\' style="font-size: 3em;"></ion-icon> <br> <label></label> </div>-->\n		</button>\n\n		<button *ngIf="selectedButton===4" ion-button class="bar-button rightSideMenuButton" (click)="changeShorting(\'cozulmeTarihi\',\'takvim-up.png\',\'md-arrow-round-up\',\'#36495e\',\'Çözülme Tarihine Göre ⬆️\');menu.close(\'rightMenu\')">\n			<!--<div style="margin-left: 2px;"> <ion-icon name=\'md-arrow-round-up\' style="font-size: 3em;"></ion-icon> <br> <label></label> </div>-->\n			<div>\n				<img src="assets/my_icon/takvim-up.png" style="width: 10vw" />\n				<div>\n					<label class="rightSideLabel">Çözülme Tarihi</label>\n				</div>\n			</div>\n		</button>\n		<button *ngIf="selectedButton===4" ion-button class="bar-button rightSideMenuButton second" (click)="changeShorting(\'-cozulmeTarihi\',\'takvim-down.png\',\'md-arrow-round-down\',\'#36495e\',\'Çözülme Tarihine Göre ⬇️\');menu.close(\'rightMenu\')">\n			<div>\n				<img class="secondImg" src="assets/my_icon/takvim-down.png" style="width: 10vw" />\n				<div>\n					<label class="rightSideLabel">Çözülme Tarihi</label>\n				</div>\n			</div>\n			<!--<div style="margin-left: 2px;"> <ion-icon name=\'md-arrow-round-down\' style="font-size: 3em;"></ion-icon> <br> <label></label> </div>-->\n		</button>\n\n		<button ion-button class="bar-button rightSideMenuButton" (click)="changeShorting(\'HdsState\',\'danger-up.png\',\'md-arrow-round-up\',\'#6db4a6\',\'Geçen Zamana Göre ⬆️\');menu.close(\'rightMenu\')">\n			<!--<div style="margin-left: 2px;"> <ion-icon name=\'md-arrow-round-up\' style="font-size: 3em;"></ion-icon> <br> <label></label> </div>-->\n			<div>\n				<img src="assets/my_icon/danger-up.png" style="width: 10vw" />\n				<div>\n					<label class="rightSideLabel">Geçen Zaman</label>\n				</div>\n			</div>\n		</button>\n		<button ion-button class="bar-button rightSideMenuButton second" (click)="changeShorting(\'-HdsState\',\'danger-down.png\',\'md-arrow-round-down\',\'#6db4a6\',\'Geçen Zamana Göre ⬇️\');menu.close(\'rightMenu\')">\n			<div>\n				<img class="secondImg" src="assets/my_icon/danger-down.png" style="width: 10vw" />\n				<div>\n					<label class="rightSideLabel">Geçen Zaman</label>\n				</div>\n			</div>\n			<!--<div style="margin-left: 2px;"> <ion-icon name=\'md-arrow-round-down\' style="font-size: 3em;"></ion-icon> <br> <label></label> </div>-->\n		</button>\n\n		<button ion-button class="bar-button rightSideMenuButton" (click)="changeShorting(\'Durum\',\'hepsi-up.png\',\'md-arrow-round-up\',\'#6db4a6\',\'Duruma Göre ⬆️\');menu.close(\'rightMenu\')">\n			<!--<div style="margin-left: 2px;"> <ion-icon name=\'md-arrow-round-up\' style="font-size: 3em;"></ion-icon> <br> <label></label> </div>-->\n			<div>\n				<img src="assets/my_icon/hepsi-up.png" style="width: 10vw" />\n				<div>\n					<label class="rightSideLabel">Durum</label>\n				</div>\n			</div>\n		</button>\n		<button ion-button class="bar-button rightSideMenuButton second" (click)="changeShorting(\'-Durum\',\'hepsi-down.png\',\'md-arrow-round-down\',\'#6db4a6\',\'Duruma Göre ⬇️\');menu.close(\'rightMenu\')">\n			<div>\n				<img class="secondImg" src="assets/my_icon/hepsi-down.png" style="width: 10vw" />\n				<div>\n					<label class="rightSideLabel">Durum</label>\n				</div>\n			</div>\n			<!--<div style="margin-left: 2px;"> <ion-icon name=\'md-arrow-round-down\' style="font-size: 3em;"></ion-icon> <br> <label></label> </div>-->\n		</button>\n\n		<button ion-button class="bar-button rightSideMenuButton" (click)="changeShorting(\'Okundu\',\'eye-up.png\',\'md-arrow-round-up\',\'#49b2da\',\'Okundu Bilgisine Göre ⬆️\');menu.close(\'rightMenu\')">\n			<!--<div style="margin-left: 2px;"> <ion-icon name=\'md-arrow-round-up\' style="font-size: 3em;"></ion-icon> <br> <label></label> </div>-->\n			<div>\n				<img src="assets/my_icon/eye-up.png" style="width: 10vw" />\n				<div>\n					<label class="rightSideLabel">Okundu</label>\n				</div>\n			</div>\n		</button>\n		<button ion-button class="bar-button rightSideMenuButton second" (click)="changeShorting(\'-Okundu\',\'eye-down.png\',\'md-arrow-round-down\',\'#49b2da\',\'Okundu Bilgisine Göre ⬇️\');menu.close(\'rightMenu\')">\n			<div>\n				<img class="secondImg" src="assets/my_icon/eye-down.png" style="width: 10vw" />\n				<div>\n					<label class="rightSideLabel">Okundu</label>\n				</div>\n			</div>\n			<!--<div style="margin-left: 2px;"> <ion-icon name=\'md-arrow-round-down\' style="font-size: 3em;"></ion-icon> <br> <label></label> </div>-->\n		</button>\n	</ion-content>\n</ion-menu>\n\n<!-- <ion-nav #content [root]="rootPage"></ion-nav> -->\n<ion-header #headerElement (click)="showDetay=false;fabActive=\'\';closeSideMenu(\'rightMenu\');">\n	<!--[scrollHide]="headerScrollConfig" [scrollContent]="scrollContent"-->\n	<ion-navbar>\n		<ion-buttons left>\n			<button ion-button icon-only class="menuButton" style="color: white" (click)="openSideMenu(\'leftMenu\')">\n				<!-- <ion-icon name="{{detailsActive===1 ? \'menu\' : \'arrow-back\'}}"></ion-icon> -->\n				<ion-icon name="menu"></ion-icon>\n			</button>\n		</ion-buttons>\n		<ion-title style="text-align: center">\n			<!-- {{ detailsActive===1 ? gorevAdi : gorevAdi + \' (\' + (selectedIndex+1) + \' ~ \' + (selectedIndex+10) +\')\' }} -->\n			{{ gorevAdi }}\n		</ion-title>\n\n		<ion-buttons end>\n			<button ion-button icon-only class="menuButton" style="color: white; font-size: 17px" (click)="getServiceRequest()" *ngIf="detailsActive===1">\n				<ion-icon name="refresh"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n	<ion-row class="row-filter" *ngIf="detailsActive===1">\n		<ion-col style="flex: 0 0 85%; padding: 0px">\n			<ion-searchbar style="height: 45px" type="text" placeholder="Servis İsteği Ara" [(ngModel)]="searchInput" enterkeyhint="go" (keypress)="searchRequest($event,searchInput)" (ionInput)="filterItems($event,searchInput)"></ion-searchbar>\n		</ion-col>\n		<ion-col style="flex: 0 0 15%; padding: 0px">\n			<button ion-button class="shortingButton" [ngStyle]="{\'color\':arrowSideColor}" (click)="menu[\'_menus\'][1].isOpen ? closeSideMenu(\'rightMenu\') : openSideMenu(\'rightMenu\')" [disabled]="detailsActive===0">\n				<!--<div style="margin-left: 2px;"> <ion-icon name={{arrowSide}} style="font-size: 35px;"></ion-icon> <br> <label></label> </div>-->\n				<div style="margin-left: 2px"><img src="assets/my_icon/{{shortIcon}}" style="width: 40px" /></div>\n			</button>\n		</ion-col>\n	</ion-row>\n	<!--<ion-scroll scrollX="true" style="height: 30px;" *ngIf="false">\n    <div no-border-top style="padding: 0px 3px 3px 3px;background: #efeeee;">\n      <ion-segment [(ngModel)]="istekTalepTuru" style="background: #efeeee !important;border-radius: 2px;">\n        <ion-segment-button value="kendimin" (click)="loadData(gorevAdi,\'kendimin\')">\n          <ion-icon name="construct" *ngIf="istekTalepTuru==\'kendimin\' && gorevAdi==\'Servis İstekleri\'"></ion-icon>\n          Bana Ait\n        </ion-segment-button>\n        <ion-segment-button value="birimin" (click)="loadData(gorevAdi,\'birimin\')">\n          <ion-icon name="construct" *ngIf="istekTalepTuru==\'birimin\' && gorevAdi==\'Servis İstekleri\'"></ion-icon>\n          Birime Ait\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n  </ion-scroll>-->\n</ion-header>\n<ion-content #scrollContent style="margin-top: 0px">\n	<!--[ngStyle]="{\'background\':detailsActive===0 ? \'blur(3px)\' : \'\'}"-->\n	<ion-refresher (ionRefresh)="getServiceRequest($event)">\n		<ion-refresher-content pullingIcon="arrow-dropdown" refreshingSpinner="circles">\n			<!--refreshingText="Yenileniyor..." pullingText="Aşağı Kaydır"-->\n		</ion-refresher-content>\n	</ion-refresher>\n	<ion-fab right bottom #fab2>\n		<!-- [ngClass]="(scrollValue>50) ? \'scrollTopFABShow\' : \'scrollTopFABHide\'"-->\n		<button #scrollFabButton ion-fab mini [hidden]="detailsActive===0" (click)="scrollTop(250)" class="ion-fab ion-fab-button scrollTopFAB">\n			<ion-icon class="scrollTopFABIcon" name="md-arrow-round-up" style="color: rgba(9, 28, 72, 0.5)"></ion-icon>\n		</button>\n		<!--(click)="openSocial(\'facebook\', fab1)"-->\n	</ion-fab>\n	<!--[ngStyle]="{ \'-webkit-animation\': istek.myStyle[\'-webkit-animation\'],\n             \'-webkit-animation-iteration-count\': istek.myStyle[\'-webkit-animation-iteration-count\'],\n              \'animation-duration\': istek.myStyle[\'animation-duration\']}"-->\n	<!--[ngStyle]="{\'border-color\':istek.myStyle.color}"-->\n\n	<!--<div class="flip-card">\n      <div class="flip-card-inner">\n        <div class="flip-card-front">-->\n\n	<div #listDiv [ngStyle]="{\'border-color\':sr.HdsStateStyle.borderColor,\'opacity\': detailsActive===0 ? \'0\' : \'1\'}" class="accordionList" *ngFor="let sr of serviceRequest; let i=index" (click)="selectedRequest(i,sr)" (press)="setSocialPlatform(sr)">\n		<!-- <div class="accordion-progress"\n      [ngStyle]="{\'background\':sr.Renk2.backgroundColor,\'width\':([sr.HdsState2,sr.DSPSK] | percent : \'progress\')}"></div> -->\n		<ion-item style="padding-left: 0 !important">\n			<!-- <div class="custom-card-label" [ngStyle]="{\'border-color\':sr.HdsStateStyle2.borderColor}">\n        <div class="custom-card-label-text" *ngIf="sr.HdsState2<100">\n          {{ [sr.HdsState2,sr.DSPSK] | percent }}\n        </div>\n        <div class="custom-card-label-text" *ngIf="sr.HdsState2>=100">\n          Yeni\n        </div>\n      </div> -->\n			<!-- <ion-item class="info-card" [ngStyle]="{\'background\':sr.Renk2.backgroundColor}">\n        <p class="info-card-p">{{sr.Goal2Kalan.split(",")[0].split(" ")[0]}}</p>\n        <p class="info-card-p">{{sr.Goal2Kalan.split(",")[0].split(" ")[1]}}</p>\n      </ion-item> -->\n			<div class="timer">\n				<div class="percent" [ngStyle]="{\'color\': sr.HdsState2 < 100 ? \'\': \'#109810\'}" *ngIf="sr.Durum!==50 && sr.Durum!==60">{{sr.HdsState2 < 100 ? ([sr.HdsState2,sr.DSPSK] | percent) : \'Yeni\'}}</div>\n				<div class="percent" *ngIf="sr.Durum===50 || sr.Durum===60">\n					<ion-icon class="timer-icon" [name]="sr.Durum===50 ? \'checkmark\' : \'remove\'" [ngStyle]="{\'color\':sr.Renk2.backgroundColor}"></ion-icon>\n				</div>\n				<div id="slice" [ngClass]="{\'gt50\': (100 - sr.HdsState2) > 50}" class="gt50">\n					<div\n						class="pie"\n						[ngStyle]="{\'transform\': \'rotate(\'+((100 - sr.HdsState2 > 0 ? 100 - sr.HdsState2 : 0)*3.6)+\'deg)\',\n          \'border-color\':sr.Renk2.backgroundColor}"\n					></div>\n					<div\n						*ngIf="(100 - sr.HdsState2) > 50"\n						class="pie fill"\n						[ngStyle]="{\'transform\': \'rotate(\'+((100 - sr.HdsState2 > 0 ? 100 - sr.HdsState2 : 0)*3.6)+\'deg)\',\n            \'border-color\':sr.Renk2.backgroundColor}"\n					></div>\n				</div>\n			</div>\n			<!-- <ion-item class="info-card" [ngStyle]="{\'background\':sr.Renk2.backgroundColor}"\n        *ngIf="sr.Durum!==50 && sr.Durum!==60">\n        <p class="info-card-p">{{sr.HdsState2 < 100 ? ([sr.HdsState2,sr.DSPSK] | percent) : \'Yeni\'}}</p>\n      </ion-item> -->\n			<!-- <ion-item class="info-card" [ngStyle]="{\'background\':sr.Renk2.backgroundColor}"\n        *ngIf="sr.Durum===50 || sr.Durum===60">\n        <p class="info-card-p">\n          <ion-icon style="font-size: 30px;" [name]="sr.Durum===50 ? \'checkmark\' : \'remove\'"></ion-icon>\n        </p>\n      </ion-item> -->\n			<div style="height: 170px">\n				<ion-item style="background: rgba(255, 255, 255, 0) !important; padding-top: 10px">\n					<ion-icon item-start class="slaOlaIcon" *ngIf="showDetay==false || sr.SCode!=scode">{{sr.slaOla}} </ion-icon>\n					<ion-icon item-start class="countIcon" *ngIf="showDetay==false || sr.SCode!=scode">{{i+1}}. </ion-icon>\n					<!-- <img item-end *ngIf="sr.Goruldu==1 && (showDetay==false || sr.SCode!=scode)" src="assets/my_icon/eye.png"\n            style="width: 25px;" /> -->\n					<span item-end style="font-size: 21px">{{ sr.Okundu ==true ? \'👁️\' : \'\' }}</span>\n					<!--<ion-icon item-start class="warningIcon" [ngStyle]="{\'color\':sr.warningColor.color}" name="md-warning"></ion-icon>-->\n					<div class="listHeader"><b>{{ sr.ServisKategorisi.KategoriAdi }}</b></div>\n					<p class="flowText list-nowrap">\n						<span><b>Servis İsteği No :</b> </span>\n						{{sr.SCode}}\n					</p>\n					<p class="flowText list-nowrap">\n						<span><b>Durum :</b> </span>\n						<span> {{ sr.gorevlikisi && sr.gorevlikisi.cinsiyet===0 && (sr.Durum===30 || sr.Durum===31 || sr.Durum===32) ? stateEnums["state"+sr.Durum] : stateEnums["state"+sr.Durum].replace(\'👨🏻‍🔧\',\'👩🏻‍🔧\')}} </span>\n						<span class="span-person" [class.person-man]="sr.gorevlikisi && sr.gorevlikisi.cinsiyet===0" [class.person-woman]="sr.gorevlikisi && sr.gorevlikisi.cinsiyet===1" *ngIf="sr.Durum===30 || sr.Durum===40 || sr.Durum===50"> ({{sr.gorevlikisi!=null ? sr.gorevlikisi.adi : \'\'}} {{sr.gorevlikisi!=null ? sr.gorevlikisi.soyadi : \'\'}})</span>\n					</p>\n					<p class="flowText list-nowrap">\n						<span><b>Açılış Tarihi :</b> </span>{{sr.acilistarihi | date}}\n					</p>\n					<p class="flowText list-nowrap">\n						<span><b>Bitiş Tarihi :</b> </span>{{sr.Goal2 | date}}\n					</p>\n					<!-- <p class="flowText list-nowrap"><span><b>Kalan Zaman :</b> </span>{{sr.Goal2Kalan}}</p> -->\n					<!--sr.DSPSK.toLowerCase().replace(\'0x +\',\'\').replace(\'0X +\',\'\')-->\n					<p class="flowText colorBlue list-nowrap">\n						<span><b>Mahal Kodu :</b> </span>{{sr.ilgiliMahal!=null ? sr.ilgiliMahal.MahalKodu : \'\'}}\n					</p>\n					<p *ngIf="selectedButton!==4" class="flowText list-nowrap">\n						<span><b>HYS - HDS :</b> </span>{{hydpEnums["hydp"+sr.konu.HYS]}} {{\' - \'}} {{hydpEnums["hydp"+sr.konu.HDS]}}\n					</p>\n					<p *ngIf="selectedButton===4" class="flowText list-nowrap">\n						<span><b>Çözülme Tarihi :</b> </span>{{sr.cozulmeTarihi | date}}\n					</p>\n				</ion-item>\n			</div>\n			<div style="margin-top: 10px">\n				<ion-row>\n					<ion-col class="sla-times-card" [ngStyle]="{\'background\':sr.Renk1.backgroundColor}">\n						<div class="card-emoji">{{sr.Emoji1}}</div>\n						<p>\n							<span><b>Y: </b>{{sr.Duration1_}}</span>\n						</p>\n						<p>\n							<span>{{sr.Duration1}}</span>\n						</p>\n					</ion-col>\n					<ion-col class="sla-times-card" [ngStyle]="{\'background\':sr.Renk2.backgroundColor}">\n						<div class="card-emoji">{{sr.Emoji2}}</div>\n						<p>\n							<span><b>D: </b>{{sr.Duration2_}}</span>\n						</p>\n						<p>\n							<span>{{sr.Duration2}}</span>\n						</p>\n					</ion-col>\n				</ion-row>\n			</div>\n		</ion-item>\n	</div>\n	<ion-infinite-scroll (ionInfinite)="getServiceRequest($event)" distance="5%">\n		<ion-infinite-scroll-content loadingSpinner="crescent" loadingText="{{(limitToFirst+1) +\' - \'+ (limitToFirst+10) +\' Yükleniyor...\'}}" *ngIf="shouldEnableScrolling"> </ion-infinite-scroll-content>\n	</ion-infinite-scroll>\n\n	<!--</div>\n\n      </div>\n    </div>-->\n</ion-content>\n'/*ion-inline-end:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/service-request/service-request.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_service_request_service_request__["a" /* ServiceRequestProvider */], __WEBPACK_IMPORTED_MODULE_7__utils_utils__["a" /* Utils */], __WEBPACK_IMPORTED_MODULE_4__globalVariables_global_variables__["a" /* GlobalVariables */], __WEBPACK_IMPORTED_MODULE_6__utils_storageData__["a" /* StorageData */]]
        }),
        __param(16, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])('apiUrl')), __param(17, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])('appVersion')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__providers_service_request_service_request__["a" /* ServiceRequestProvider */], __WEBPACK_IMPORTED_MODULE_7__utils_utils__["a" /* Utils */], __WEBPACK_IMPORTED_MODULE_6__utils_storageData__["a" /* StorageData */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_3_cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_4__globalVariables_global_variables__["a" /* GlobalVariables */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */], Object, Object])
    ], ServiceRequestPage);
    return ServiceRequestPage;
}());

//# sourceMappingURL=service-request.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceRequestDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globalVariables_global_variables__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_request_service_request__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enums_state_enums__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__enums_type_enums__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__enums_hydp_enums__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__addition22_addition22__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assigning_person_assigning_person__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__extending_sla_extending_sla__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__solving_request_solving_request__ = __webpack_require__(514);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












/**
 * Generated class for the ServiceRequestDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiceRequestDetailsPage = /** @class */ (function () {
    function ServiceRequestDetailsPage(navCtrl, app, viewCtrl, modalCtrl, navParams, globalVariables, serviceRequestProvider, utils, events, apiUrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.app = app;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.globalVariables = globalVariables;
        this.serviceRequestProvider = serviceRequestProvider;
        this.utils = utils;
        this.events = events;
        this.apiUrl = apiUrl;
        this.isSliding = true;
        this.base64Image = [];
        this.imageList = [];
        this.base64PostImage = [];
        this.base64Format = 'data:image/jpeg;base64,';
        this.serviceRequestDetails = navParams.data.serviceRequestDetails;
        this.userInfo = navParams.data.userInfo;
        this.istekTalepTuru = navParams.data.istekTalepTuru;
        this.stateEnums = __WEBPACK_IMPORTED_MODULE_5__enums_state_enums__["a" /* StateEnums */];
        this.typeEnums = __WEBPACK_IMPORTED_MODULE_6__enums_type_enums__["a" /* TypeEnums */];
        this.hydpEnums = __WEBPACK_IMPORTED_MODULE_7__enums_hydp_enums__["a" /* HydpEnums */];
        this.index = navParams.data.index;
        this.startIndex = navParams.data.startIndex;
        this.gorevAdi = navParams.data.gorevAdi;
        this.selectedSR = navParams.data.selectedSR;
        //this.countIndex = parseInt((this.index/10).toString())===0 ? 0 : parseInt(((this.index%10)*10).toString());
        this.events.subscribe('processOK', function (data) {
            if (data === 'OK') {
                //this.dismissDetails();
                _this.utils.afterProcessOK();
            }
        });
    }
    ServiceRequestDetailsPage.prototype.cancelSLA = function (sr) {
        console.log(sr);
        var me = this;
        this.utils.doConfirm("SLA İptal", "SLA iptal etmek istediğinizden emin misiniz ?", function () {
            var seoUrl = 'HelpDeskFMS_Module_Islem';
            me.utils.loadingPresent('Servis isteğinin son durumu kontrol ediliyor..');
            var body = {
                'odata.type': 'XafDataService.HelpDeskFMS_Module_SE_Iptal',
                'IlgiliServisIstegi@odata.bind': me.apiUrl + "HelpDeskFMS_Module_ServisIstegi(guid'" + sr['Oid'] + "')",
                Durum: 60
            };
            me.serviceRequestProvider.postServiceRequest(seoUrl, body).subscribe(function (p) {
                me.utils.doAlertConfirm('İşlem başarılı...', function () {
                    me.utils.loadingDismiss();
                    me.navCtrl.pop();
                    me.utils.processOK();
                });
            });
        });
    };
    ServiceRequestDetailsPage.prototype.refresh = function () {
        console.log('refresh');
        //this.utils.afterProcessOK();
    };
    ServiceRequestDetailsPage.prototype.openCamera = function (sr) {
        var me = this;
        me.base64Image = [];
        me.base64PostImage = [];
        this.utils.openCamera(function (imageData) {
            me.base64Image.push(me.base64Format + imageData);
            me.base64PostImage.push(me.base64Format + imageData);
            if (me.base64PostImage.length > 0) {
                var body = {
                    'IlgiliServisIstegi@odata.bind': me.apiUrl + "HelpDeskFMS_Module_ServisIstegi(guid'" + sr['Oid'] + "')",
                    B64: me.base64PostImage[0].replace(me.base64Format, '')
                };
                me.serviceRequestProvider.sendPhotos(body).subscribe(function (res) {
                    me.utils.toastMessage('Fotoğraf başarılı bir şekilde aktarıldı.');
                });
            }
        });
    };
    ServiceRequestDetailsPage.prototype.goToSlide = function (event, index) {
        if (this.isSliding) {
            this.slides.slideTo(index, 0, false);
            this.isSliding = false;
        }
    };
    ServiceRequestDetailsPage.prototype.changeImageList = function (sr) {
        /*var me = this
        me.serviceRequestProvider.getServiceRequest("HelpDeskFMS_Module_WEBSLADosyaEk?$expand=File&$filter=IlgiliSLA/oid eq guid'" + sr['Oid'] + "'", null).subscribe(p => {
            if (p['value'] && p['value'].length > 0) {
                p['value'].forEach((r: any) => {
                    me.imageList.push(me.apiUrl + 'DevExpress_Persistent_BaseImpl_FileData(guid' + r['File']['oid'] + ')/Content')
                })
            }
        })
        console.log(me.imageList)*/
    };
    ServiceRequestDetailsPage.prototype.ionSlideDidChange = function (event) {
        var context = this;
        var sr = this.serviceRequestDetails[context.slides.getActiveIndex()];
        this.changeImageList(sr);
        if (sr.gorevlikisi && sr.gorevlikisi['Oid'] == this.userInfo['Oid'] && sr['Okundu'] == false) {
            var seoUrl = "HelpDeskFMS_Module_ServisIstegi(guid'" + sr['Oid'] + "')";
            var body = {
                Okundu: true
            };
            this.serviceRequestProvider.putServiceRequest(seoUrl, body).subscribe(function (p) {
                sr['Okundu'] = true;
                sr['Goruldu'] = 1;
            }, function (error) { });
        }
    };
    ServiceRequestDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ServiceRequestDetailsPage');
        //this.slides.slideTo(this.index+1, 0,false);
        var sr = this.serviceRequestDetails.filter(function (item) { return item.oid === _this.selectedSR; });
        if (sr.length > 0) {
            sr = sr[0];
            this.changeImageList(sr);
            if (sr.gorevlikisi && sr.gorevlikisi['Oid'] == this.userInfo['Oid'] && sr['Okundu'] == false) {
                var seoUrl = "HelpDeskFMS_Module_ServisIstegi(guid'" + sr['Oid'] + "')";
                var body = {
                    Okundu: true
                };
                this.serviceRequestProvider.putServiceRequest(seoUrl, body).subscribe(function (p) {
                    sr['Okundu'] = true;
                    sr['Goruldu'] = 1;
                }, function (error) { });
            }
        }
        var interval = setInterval(function () {
            if (_this.slides && _this.slides.length() !== undefined) {
                _this.slides.slideTo(_this.index % 10, 0, false);
                clearInterval(interval);
            }
        }, 100);
    };
    ServiceRequestDetailsPage.prototype.dismissDetails = function () {
        this.viewCtrl.dismiss();
    };
    ServiceRequestDetailsPage.prototype.clickMainFAB = function (sr, fab) {
        var seoUrl = "HelpDeskFMS_Module_ServisIstegi(guid'" + sr['Oid'] + "')";
        var body = {
            Okundu: true
        };
        if (sr.gorevlikisi && sr.gorevlikisi['Oid'] == this.userInfo['Oid'] && fab['_listsActive'] == false) {
            this.serviceRequestProvider.putServiceRequest(seoUrl, body).subscribe(function (p) {
                sr['Okundu'] = true;
                sr['Goruldu'] = 1;
            }, function (error) { });
        }
    };
    ServiceRequestDetailsPage.prototype.assigningPerson = function (sr) {
        return __awaiter(this, void 0, void 0, function () {
            var guid, select, orderBy, seoUrl;
            var _this = this;
            return __generator(this, function (_a) {
                console.log(sr); // and unvan/Oid ne guid'919fccaf-abe4-40ef-9892-b1aa2de58bdc'
                guid = "guid'" + sr['IlgiliServis']['Oid'] + "'";
                select = '&$select=Oid,adi,soyadi,isunvani,EPosta,MobilUUID,unvan/RolAdi,AtanmisToplamIs,cinsiyet';
                orderBy = '&$orderby=adi asc';
                seoUrl = 'HelpDeskFMS_Module_Kullanici?$expand=unvan/ilgiliServis&$filter=IsActive eq true and unvan/ilgiliServis/Oid eq ' + guid + select + orderBy;
                if (this.istekTalepTuru == 'kurumun') {
                    guid = "guid'" + this.userInfo['Sirket']['Oid'] + "'";
                    seoUrl = 'HelpDeskFMS_Module_Kullanici?$expand=Sirket,unvan/ilgiliServis&$filter=IsActive eq true and Sirket/Oid eq ' + guid + select + orderBy;
                }
                this.utils.loadingPresent('Personel Listesi Yükleniyor...');
                this.serviceRequestProvider.getServiceRequest(seoUrl, null).subscribe(function (p) { return __awaiter(_this, void 0, void 0, function () {
                    var personalList, expand, filter, seoUrl, i;
                    var _this = this;
                    return __generator(this, function (_a) {
                        personalList = p;
                        expand = '?$expand=konu,gorevlikisi,IlgiliServis,ilgilikisi,olusturan,SeciliDepartman,ServisKategorisi,ilgiliMahal';
                        filter = "&$filter=IlgiliServis/Oid eq guid'" + sr['IlgiliServis']['Oid'] + "' and Durum ne 10 and Durum ne 50 and Durum ne 60";
                        seoUrl = 'HelpDeskFMS_Module_ServisIstegi' + expand + filter;
                        for (i = 0; i < personalList['value'].length; i++) {
                            personalList['value'][i]['adiSoyadi'] = personalList['value'][i].adi + ' ' + personalList['value'][i].soyadi;
                            personalList['value'][i]['isOnline'] = 0;
                            //personalList["value"][i]["isPhoto"] = personalList["value"][i]["Foto@odata.mediaETag"] ? true : false;
                            personalList['value'][i]['photoUrl'] = this.apiUrl + "HelpDeskFMS_Module_Kullanici(guid'" + personalList['value'][i].Oid + "')/Foto";
                            if (personalList['value'][i].MobilUUID != null && personalList['value'][i].MobilUUID.length > 0) {
                                personalList['value'][i]['isOnline'] = 1;
                            }
                            else {
                                personalList['value'][i]['isOnline'] = 0;
                            }
                            if (!personalList['value'][i]['AtanmisToplamIs'] || personalList['value'][i]['AtanmisToplamIs'] == 0) {
                                //const countSLAReq = this.serviceRequestProvider.getServiceRequest("HelpDeskFMS_Module_Kullanici(guid'" + personalList['value'][i].Oid + "')/AtanmisIstekler?$format=json&$select=Durum&$filter=Durum eq 30", null)
                                //const countSLA = await countSLAReq.first().toPromise()
                                //personalList['value'][i]['AtanmisToplamIs'] = countSLA['value'].length
                            }
                        }
                        this.utils.loadingDismiss();
                        this.globalVariables.notificationIsActive = false;
                        this.myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__assigning_person_assigning_person__["a" /* AssigningPersonPage */], {
                            personalList: personalList,
                            sr: sr
                        });
                        this.myModal.onDidDismiss(function () {
                            _this.globalVariables.notificationIsActive = true;
                            // Call the method to do whatever in your home.ts
                        });
                        this.myModal.present();
                        this.dismissDetails();
                        return [2 /*return*/];
                    });
                }); }, function (error) {
                    _this.utils.loadingDismiss();
                });
                return [2 /*return*/];
            });
        });
    };
    ServiceRequestDetailsPage.prototype.goSelectedPage = function (event, sr, fab) {
        var page = event.currentTarget.id === 'fabSlaButton' ? __WEBPACK_IMPORTED_MODULE_10__extending_sla_extending_sla__["a" /* ExtendingSlaPage */] : event.currentTarget.id === 'fabEk22Button' ? __WEBPACK_IMPORTED_MODULE_8__addition22_addition22__["a" /* Addition22Page */] : __WEBPACK_IMPORTED_MODULE_11__solving_request_solving_request__["a" /* SolvingRequestPage */];
        this.globalVariables.notificationIsActive = false;
        this.navCtrl.push(page, { sr: sr });
        //this.app.getRootNav().push(SolvingRequestPage, { 'sr': sr });
        this.dismissDetails();
    };
    // goSolvingRequestPage(event, sr, fab: FabContainer) {
    //   this.globalVariables.notificationIsActive = false;
    //   this.navCtrl.push(SolvingRequestPage, { 'sr': sr });
    //   //this.app.getRootNav().push(SolvingRequestPage, { 'sr': sr });
    //   this.dismissDetails();
    // }
    // goEk22(event, sr, fab: FabContainer) {
    //   this.globalVariables.notificationIsActive = false;
    //   this.navCtrl.push(Ek22Page, { 'sr': sr });
    //   //this.app.getRootNav().push(Ek22Page, { 'sr': sr });
    //   this.dismissDetails();
    // }
    // goExtendingSlaPage(event, sr, fab: FabContainer) {
    //   this.globalVariables.notificationIsActive = false;
    //   this.navCtrl.push(ExtendingSlaPage, { 'sr': sr });
    //   //this.app.getRootNav().push(ExtendingSlaPage, { 'sr': sr });
    //   this.dismissDetails();
    // }
    ServiceRequestDetailsPage.prototype.setSocialPlatform = function (sr) {
        this.utils.setSocialPlatform(sr, this.stateEnums, function () {
            this.globalVariables.notificationIsActive = false;
        });
    };
    ServiceRequestDetailsPage.prototype.qrCodeGenerate = function (srCode) {
        this.utils.qrCodeGenerate(srCode);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mySlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
    ], ServiceRequestDetailsPage.prototype, "slides", void 0);
    ServiceRequestDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-service-request-details',template:/*ion-inline-start:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/service-request-details/service-request-details.html"*/'<!-- <div style="height: 90px;">\n  <button ion-button icon-only class="hiddenButton" style="background: transparent;font-size: 40px;height: 40px;"\n    (click)="dismissDetails()"></button>\n</div> -->\n<ion-header>\n	<ion-navbar>\n		<ion-buttons left>\n			<button ion-button icon-only style="color: white; margin: 0 6px" (click)="dismissDetails()">\n				<ion-icon name="arrow-back"></ion-icon>\n			</button>\n		</ion-buttons>\n		<ion-title center style="text-align: center"> {{ gorevAdi + \' (\' + (startIndex+1) + \' ~ \' + (startIndex+10) +\')\' }} </ion-title>\n		<ion-buttons right>\n			<button ion-button icon-only class="menuButton" style="color: white; font-size: 17px; display: none" (click)="refresh()">\n				<ion-icon name="refresh"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n<ion-content padding>\n	<ion-slides #mySlider (ionSlideDidChange)="ionSlideDidChange($event)">\n		<ion-slide style="width: 100%; top: 10px; padding: 5px !important" *ngFor="let sr of serviceRequestDetails; let i=index">\n			<ion-fab top right edge #fab1 [hidden]="istekTalepTuru === \'tumServisin\' || userInfo[\'UserName\'] === \'application.testing\' || (userInfo[\'unvan\'] && userInfo[\'unvan\'][\'ilgiliServis\'] && userInfo[\'unvan\'][\'ilgiliServis\'][\'ServisAdi\']==\'İDARE\')">\n				<button ion-fab mini (click)="clickMainFAB(sr,fab1)" class="ion-fab ion-fab-button">\n					<ion-icon name="eye"></ion-icon>\n				</button>\n				<ion-fab-list side="left" class="ion-fab-left-side">\n					<button ion-fab class="fabButton" (click)="assigningPerson(sr)" [disabled]="userInfo && userInfo[\'atamaYetki\']==0 || sr.Durum==41 || sr.Durum==51">\n						<ion-icon class="fabIcon" name="person-add"></ion-icon>\n						<ion-label class="fabLabel">Kişiye Ata</ion-label>\n					</button>\n					<button ion-fab id="fabSlaButton" class="fabButton fabSla" (click)="goSelectedPage($event,sr,fab1)" [disabled]="userInfo && sr.IlgiliServis.SLAUzatma===false || userInfo[\'atamaYetki\']==0 || sr.Durum==20 || sr.Durum==21 || sr.Durum==41 || sr.Durum==51">\n						<ion-icon class="fabIcon" name="time"></ion-icon>\n						<ion-label class="fabLabel">Geçici Onarım</ion-label>\n					</button>\n					<button ion-fab id="fabEk22Button" class="fabButton fabEk22" (click)="goSelectedPage($event,sr,fab1)" [disabled]="userInfo && userInfo[\'atamaYetki\']==0">\n						<ion-icon class="fabIcon" name="medal"></ion-icon>\n						<ion-label class="fabLabel">Ek-22</ion-label>\n					</button>\n					<!-- <button ion-fab><ion-icon name="hand"></ion-icon></button>-->\n					<button ion-fab id="fabResolveButton" class="fabButton fabResolve" (click)="goSelectedPage($event,sr,fab1)">\n						<ion-icon class="fabIcon" name="checkmark"></ion-icon>\n						<ion-label class="fabLabel">Çözümlendi</ion-label>\n					</button>\n					<button ion-fab class="fabButton fabPhoto" (click)="openCamera(sr)">\n						<ion-icon class="fabIcon" name="camera"></ion-icon>\n						<ion-label class="fabLabel">Çek Gönder</ion-label>\n					</button>\n					<button ion-fab class="fabButton fabShare" (click)="setSocialPlatform(sr)">\n						<ion-icon class="fabIcon" name="share"></ion-icon>\n						<ion-label class="fabLabel">Paylaş</ion-label>\n					</button>\n          <button ion-fab id="fabIptal" class="fabButton fabIptal" (click)="cancelSLA(sr)" [disabled]="(userInfo && userInfo[\'atamaYetki\']==0) || (sr.Durum!=10 && sr.Durum!=20 && sr.Durum!=30)">\n						<ion-icon class="fabIcon" name="close"></ion-icon>\n						<ion-label class="fabLabel">İptal</ion-label>\n					</button>\n					<!--<button ion-fab class="fabAudio" (click)="audioPlayStop(fab1)">\n                      <ion-icon style="margin-left: 3px;" name="play"></ion-icon>\n                      <ion-label style="background-color: rgba(175, 42, 45, 0.9);">Sesli Mesaj</ion-label>\n                    </button>-->\n				</ion-fab-list>\n				<!--(click)="openSocial(\'facebook\', fab1)"-->\n			</ion-fab>\n			<ion-item class="requestDetails">\n				<!-- <div class="custom-card-label" [ngStyle]="{\'border-color\':sr.HdsStateStyle2.borderColor}"\n          style="position: fixed;right: -1px;top: -1px;z-index: 2;">\n          <div class="custom-card-label-text" *ngIf="sr.HdsState2<100">\n            {{ [sr.HdsState2,sr.DSPSK] | percent }}</div>\n          <div class="custom-card-label-text" *ngIf="sr.HdsState2>=100">\n            Yeni\n          </div>\n        </div> -->\n				<div class="timer">\n					<div class="percent" [ngStyle]="{\'color\': sr.HdsState2 < 100 ? \'\': \'#109810\'}" *ngIf="sr.Durum!==50 && sr.Durum!==60">{{sr.HdsState2 < 100 ? ([sr.HdsState2,sr.DSPSK] | percent) : \'Yeni\'}}</div>\n					<div class="percent" *ngIf="sr.Durum===50 || sr.Durum===60">\n						<ion-icon class="timer-icon" [name]="sr.Durum===50 ? \'checkmark\' : \'remove\'" [ngStyle]="{\'color\':sr.Renk2.backgroundColor}"></ion-icon>\n					</div>\n					<div id="slice" [ngClass]="{\'gt50\': (100 - sr.HdsState2) > 50}" class="gt50">\n						<div\n							class="pie"\n							[ngStyle]="{\'transform\': \'rotate(\'+((100 - sr.HdsState2 > 0 ? 100 - sr.HdsState2 : 0)*3.6)+\'deg)\',\n                  \'border-color\':sr.Renk2.backgroundColor}"\n						></div>\n						<div\n							*ngIf="(100 - sr.HdsState2) > 50"\n							class="pie fill"\n							[ngStyle]="{\'transform\': \'rotate(\'+((100 - sr.HdsState2 > 0 ? 100 - sr.HdsState2 : 0)*3.6)+\'deg)\',\n                    \'border-color\':sr.Renk2.backgroundColor}"\n						></div>\n					</div>\n				</div>\n				<!-- <ion-item class="info-card" [ngStyle]="{\'background\':sr.Renk2.backgroundColor}" *ngIf="sr.Durum!==50 && sr.Durum!==60">\n          <p class="info-card-p">{{sr.HdsState2 < 100 ? ([sr.HdsState2,sr.DSPSK] | percent) : \'Yeni\'}}</p>\n        </ion-item>\n        <ion-item class="info-card" [ngStyle]="{\'background\':sr.Renk2.backgroundColor}" *ngIf="sr.Durum===50 || sr.Durum===60">\n          <p class="info-card-p">\n            <ion-icon style="font-size: 30px;" [name]="sr.Durum===50 ? \'checkmark\' : \'remove\'"></ion-icon>\n          </p>\n        </ion-item> -->\n				<div style="z-index: 1">\n					<ion-scroll scrollY="true" style="height: calc(100vh - 200px)">\n						<ion-item style="background-color: transparent" [ngStyle]="{\'margin-top\':sr.HdsState2<100 ? \'10px\' : \'10px\'}">\n							<!-- <img item-end *ngIf="sr.Goruldu==1" src="assets/my_icon/eye.png"\n                style="width: 25px;position: absolute;right: 0;top: 50px;" /> -->\n							<!--<ion-icon item-start class="warningIcon" [ngStyle]="{\'color\':sr.warningColor.color}" name="md-warning"></ion-icon>-->\n							<div class="listHeader">\n								<b>{{startIndex+i+1}}. {{ sr.ServisKategorisi.KategoriAdi }}</b>\n							</div>\n							<br />\n							<p class="flowText">\n								<span><b>Servis İsteği No :</b> </span>\n								{{sr.SCode}}\n								<img class="qr-code-generator" src="../../assets/imgs/qr-code.svg" (click)="qrCodeGenerate(sr.SCode)" />\n							</p>\n							<p class="flowText">\n								<span><b>Durum :</b> </span>\n								{{ sr.gorevlikisi && sr.gorevlikisi.cinsiyet===0 && (sr.Durum===30 || sr.Durum===31 || sr.Durum===32) ? stateEnums["state"+sr.Durum] : stateEnums["state"+sr.Durum].replace(\'👨🏻‍🔧\',\'👩🏻‍🔧\')}}\n							</p>\n							<p class="flowText">\n								<span><b>Açılış Tarihi :</b> </span>{{sr.acilistarihi | date}}\n							</p>\n							<!--sr.acilistarihi.toString().replace(\'T\',\' \').substring(0, 19)-->\n							<p *ngIf="sr.cozulmeTarihi" class="flowText">\n								<span><b>Çözülme Tarihi :</b> </span>{{sr.cozulmeTarihi | date}}\n							</p>\n							<p class="flowText">\n								<span><b>Bitiş Tarihi :</b> </span>{{sr.Goal2 | date}}\n							</p>\n							<p class="flowText">\n								<span><b>Kalan Zaman :</b> </span>{{sr.Goal2Kalan.replace(\'Sonra\',\'\')}}\n							</p>\n							<p class="flowText">\n								<span><b>SLA/OLA :</b> </span>{{ sr.slaOla }} {{ \'SLA\' }}\n							</p>\n							<!-- {{ sr.SLASTT==0 ? \'OLA\' : \'SLA\' }} -->\n							<p class="flowText">\n								<span><b>HYS - HDS :</b> </span>{{hydpEnums["hydp"+sr.konu.HYS]}} {{\' - \'}} {{hydpEnums["hydp"+sr.konu.HDS]}}\n							</p>\n							<p class="flowText">\n								<span><b>Okundu Bilgisi :</b> </span>{{ sr.Okundu ==true ? \'👍 Okundu\' : \'👎 Okunmadı\' }}\n							</p>\n							<p class="flowText" [class.person-man]="sr.ilgilikisi && sr.ilgilikisi.cinsiyet===0" [class.person-woman]="sr.ilgilikisi && sr.ilgilikisi.cinsiyet===1">\n								<span><b>Bildiren :</b> </span>{{sr.ilgilikisi!=null ? sr.ilgilikisi.adi : \'\'}} {{sr.ilgilikisi!=null ? sr.ilgilikisi.soyadi : \'\'}}\n							</p>\n							<p class="flowText" [class.person-man]="sr.gorevlikisi && sr.gorevlikisi.cinsiyet===0" [class.person-woman]="sr.gorevlikisi && sr.gorevlikisi.cinsiyet===1">\n								<span><b>Görevli Kişi :</b> </span>{{sr.gorevlikisi!=null ? sr.gorevlikisi.adi : \'\'}} {{sr.gorevlikisi!=null ? sr.gorevlikisi.soyadi : \'\'}}\n							</p>\n							<p class="flowText">\n								<span><b>Tip :</b> </span>{{ typeEnums["type"+sr.konu.tip] }}\n							</p>\n							<p class="flowText colorBlue">\n								<span><b>Olay :</b> </span>{{ sr.konu.OlayRender }}\n							</p>\n							<div style="border: 1px solid; color: #15214c; margin-right: 5px">\n								<p class="flowText colorBlue">\n									<span><b>Mahal Kodu :</b> </span>{{sr.ilgiliMahal!=null ? sr.ilgiliMahal.MahalKodu : \'\'}}\n								</p>\n								<p class="flowText">\n									<span><b>Mahal Adresi :</b> </span>{{sr.ilgiliMahal!=null ? sr.ilgiliMahal.Aciklama : \'\'}}\n								</p>\n							</div>\n							<p class="flowText">\n								<span><b>Açıklama :</b> </span>{{sr.aciklama}}\n							</p>\n							<p *ngIf="sr.kisiyeAtamaAciklama" class="flowText">\n								<span><b>Atama Açıklama :</b> </span>{{sr.kisiyeAtamaAciklama}}\n							</p>\n						</ion-item>\n					</ion-scroll>\n				</div>\n				<div>\n					<ion-row>\n						<ion-col class="sla-times-card" [ngStyle]="{\'background\':sr.Renk1.backgroundColor}">\n							<div class="card-emoji">{{sr.Emoji1}}</div>\n							<p>\n								<span><b>Y: </b>{{sr.Duration1_}}</span>\n							</p>\n							<p>\n								<span>{{sr.Duration1}}</span>\n							</p>\n						</ion-col>\n						<ion-col class="sla-times-card" [ngStyle]="{\'background\':sr.Renk2.backgroundColor}">\n							<div class="card-emoji">{{sr.Emoji2}}</div>\n							<p>\n								<span><b>D: </b>{{sr.Duration2_}}</span>\n							</p>\n							<p>\n								<span>{{sr.Duration2}}</span>\n							</p>\n						</ion-col>\n					</ion-row>\n				</div>\n			</ion-item>\n		</ion-slide>\n	</ion-slides>\n	<!-- <ion-row style="position: absolute;left: -1.5%;top:27vh;width: 103%;">\n      <ion-col style="text-align: left;padding: 7px;opacity: 0.25;">\n        <img src="assets/imgs/leftArrow.png" style="height: 12vh;width: 10px;"/>\n      </ion-col>\n\n      <ion-col style="text-align: right;padding: 7px;opacity: 0.25;">\n        <img src="assets/imgs/rightArrow.png" style="height: 12vh;width: 10px;"/>\n      </ion-col>\n    </ion-row> -->\n	<img src="assets/imgs/swipe.png" style="height: 20vh; opacity: 0.1; position: absolute; bottom: 0; left: calc(50% - 10vh - 16px)" />\n</ion-content>\n'/*ion-inline-end:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/service-request-details/service-request-details.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_service_request_service_request__["a" /* ServiceRequestProvider */], __WEBPACK_IMPORTED_MODULE_4__utils_utils__["a" /* Utils */], __WEBPACK_IMPORTED_MODULE_2__globalVariables_global_variables__["a" /* GlobalVariables */]]
        }),
        __param(9, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])('apiUrl')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__globalVariables_global_variables__["a" /* GlobalVariables */], __WEBPACK_IMPORTED_MODULE_3__providers_service_request_service_request__["a" /* ServiceRequestProvider */], __WEBPACK_IMPORTED_MODULE_4__utils_utils__["a" /* Utils */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], Object])
    ], ServiceRequestDetailsPage);
    return ServiceRequestDetailsPage;
}());

//# sourceMappingURL=service-request-details.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeEnums; });
var TypeEnums;
(function (TypeEnums) {
    TypeEnums["type1"] = "\uD83D\uDD27 Ar\u0131za / \u015Eikayet";
    TypeEnums["type2"] = "\uD83D\uDC8C Talep";
    TypeEnums["type3"] = "\uD83D\uDEF4 Porter";
})(TypeEnums || (TypeEnums = {}));
//# sourceMappingURL=type-enums.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HydpEnums; });
var HydpEnums;
(function (HydpEnums) {
    HydpEnums["hydp0"] = "\uD83D\uDEA9 Acil";
    HydpEnums["hydp1"] = "\uD83C\uDFC1 Derhal";
    HydpEnums["hydp2"] = "\uD83C\uDFF4 D\u00FCzenli";
    HydpEnums["hydp3"] = "\uD83C\uDFF3\uFE0F Planlanm\u0131\u015F";
})(HydpEnums || (HydpEnums = {}));
//# sourceMappingURL=hydp-enums.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Addition22Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_state_enums__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_storageData__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_request_service_request__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






/**
 * Generated class for the Addition22Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Addition22Page = /** @class */ (function () {
    function Addition22Page(navCtrl, navParams, utils, serviceRequestProvider, storage, apiUrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utils = utils;
        this.serviceRequestProvider = serviceRequestProvider;
        this.storage = storage;
        this.apiUrl = apiUrl;
        this.aciklama = "";
        this.deviceInfo = "";
        this.sr = navParams.data.sr;
        this.stateEnums = __WEBPACK_IMPORTED_MODULE_0__enums_state_enums__["a" /* StateEnums */];
        this.storage.get("deviceInfo", function (deviceInfo) {
            _this.deviceInfo = "\n ( Cihaz Bilgi : " + deviceInfo.mobilDeviceInfo + " )";
        });
    }
    Addition22Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Ek22Page');
    };
    Addition22Page.prototype.ek22Save = function () {
        var me = this;
        this.utils.doConfirm("EK 22", "Kayıt etmek istediğinizden emin misiniz ?", function () {
            var select = "?$select=Durum";
            var seoUrl = "HelpDeskFMS_Module_ServisIstegi(guid'" + me.sr["Oid"] + "')" + select;
            me.utils.loadingPresent("Servis isteğinin son durumu kontrol ediliyor..");
            me.serviceRequestProvider.getServiceRequest(seoUrl, null).subscribe(function (res) {
                me.utils.loadingDismiss();
                var durum = res["Durum"];
                if (durum === 30 || durum === 40 || durum === 41 || durum === 42 || durum === 62 || durum === 70 || durum === 72) {
                    seoUrl = "HelpDeskFMS_Module_Islem";
                    var body_1 = {
                        "odata.type": "XafDataService.HelpDeskFMS_Module_SE_EK22",
                        "IlgiliServisIstegi@odata.bind": me.apiUrl + "HelpDeskFMS_Module_ServisIstegi(guid'" + me.sr["Oid"] + "')",
                        "Durum": 80,
                        "Aciklama": me.aciklama
                    };
                    var message = "Ek-22 gönderilsin mi ?";
                    me.utils.doConfirm("Ek-22", message, function () {
                        me.utils.loadingPresent("Lütfen Bekleyiniz...");
                        me.serviceRequestProvider.postServiceRequest(seoUrl, body_1).subscribe(function (p) {
                            me.utils.loadingDismiss();
                            me.utils.doAlertConfirm("İşlem başarılı...", function () {
                                me.utils.loadingDismiss();
                                me.navCtrl.pop();
                                me.utils.processOK();
                            });
                        }, function (error) {
                            me.utils.loadingDismiss();
                            //me.utils.doAlert("Bağlantınızı kontrol ediniz...");
                        });
                    });
                }
                else {
                    var message = "Son Durumu <b>'" + me.stateEnums["state" + durum] + "'</b> olan servis isteği üzerinde '<b>Ek-22</b>' işlemi yapamazsınız!'";
                    me.utils.doAlert(message);
                }
            }, function (error) {
                me.utils.loadingDismiss();
            });
        });
    };
    Addition22Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-addition22',template:/*ion-inline-start:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/addition22/addition22.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ek-22</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item #myInput>\n    <ion-label stacked>Açıklama</ion-label>\n    <ion-textarea  placeholder="En az 20 karakterlik bir mesaj yazınız."  [(ngModel)]="aciklama"></ion-textarea>\n  </ion-item>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <button ion-button icon-start full class="onayButton" (click)="ek22Save()" [disabled]="aciklama.length<20">\n      <ion-icon name="checkmark"></ion-icon>\n      Kaydet\n    </button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/addition22/addition22.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__utils_utils__["a" /* Utils */], __WEBPACK_IMPORTED_MODULE_5__providers_service_request_service_request__["a" /* ServiceRequestProvider */], __WEBPACK_IMPORTED_MODULE_3__utils_storageData__["a" /* StorageData */]]
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])('apiUrl')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__utils_utils__["a" /* Utils */],
            __WEBPACK_IMPORTED_MODULE_5__providers_service_request_service_request__["a" /* ServiceRequestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__utils_storageData__["a" /* StorageData */], Object])
    ], Addition22Page);
    return Addition22Page;
}());

//# sourceMappingURL=addition22.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssigningPersonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_state_enums__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_storageData__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_request_service_request__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






/**
 * Generated class for the AssigningPersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AssigningPersonPage = /** @class */ (function () {
    function AssigningPersonPage(navCtrl, viewCtrl, menu, navParams, app, utils, serviceRequestProvider, storage, apiUrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.menu = menu;
        this.navParams = navParams;
        this.app = app;
        this.utils = utils;
        this.serviceRequestProvider = serviceRequestProvider;
        this.storage = storage;
        this.apiUrl = apiUrl;
        this.aciklama = "";
        this.slideIndex = 0;
        this.changePipe = "adi";
        this.selectedPerson = null;
        this.title = "Birim Personelleri";
        this.deviceInfo = "";
        this.personalList = navParams.data.personalList.value;
        this.copy = this.personalList;
        this.sr = navParams.data.sr;
        this.stateEnums = __WEBPACK_IMPORTED_MODULE_0__enums_state_enums__["a" /* StateEnums */];
        console.log(this.personalList);
        this.storage.get("deviceInfo", function (deviceInfo) {
            _this.deviceInfo = "\n ( Cihaz Bilgi : " + deviceInfo.mobilDeviceInfo + " )";
            console.log("");
        });
    }
    AssigningPersonPage.prototype.setSegmentScroll = function (selectedPipe) {
        if (selectedPipe == "adi" || selectedPipe == "-adi" || selectedPipe == "isOnline") {
            this.segmentScroll["_scrollContent"].nativeElement.scrollLeft = 0;
        }
        else {
            this.segmentScroll["_scrollContent"].nativeElement.scrollLeft = 75;
        }
    };
    AssigningPersonPage.prototype.ngAfterViewInit = function () {
        this.utils.scrollContentFabControl(this.content, this.myElement);
        this.slides.lockSwipes(true);
    };
    AssigningPersonPage.prototype.ionViewWillEnter = function () {
        this.utils.scrollContentFabControlDisplay(this.myElement, 'none');
    };
    AssigningPersonPage.prototype.scrollTop = function (duration) {
        this.content.scrollToTop(duration);
    };
    AssigningPersonPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AssigningPersonPage');
    };
    AssigningPersonPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AssigningPersonPage.prototype.slideChange = function (slideIndex) {
        this.title = "Birim Personelleri";
        this.slideIndex = slideIndex;
        if (slideIndex == 0) {
            this.slides["_elementRef"].nativeElement.firstElementChild.style.height = 'auto';
        }
        if (slideIndex == 1) {
            this.utils.scrollContentFabControlDisplay(this.myElement, 'none');
        }
        this.slides.lockSwipes(false);
        this.slides.slideTo(this.slideIndex, 500);
        this.slides.lockSwipes(true);
    };
    AssigningPersonPage.prototype.selectedPersonal = function (selectedPerson, slideIndex) {
        this.slides["_elementRef"].nativeElement.firstElementChild.style.height = '165px';
        this.scrollTop(0);
        this.title = "Kişiye Atama";
        this.slideIndex = slideIndex;
        this.selectedPerson = selectedPerson;
        this.slides.lockSwipes(false);
        this.slides.slideTo(this.slideIndex, 500);
        this.slides.lockSwipes(true);
    };
    AssigningPersonPage.prototype.filterItems = function (event) {
        this.personalList = this.copy;
        this.personalList = this.utils.filterItems(event, this.personalList);
    };
    AssigningPersonPage.prototype.assigningPerson = function () {
        var _this = this;
        var me = this;
        var select = "?$select=Durum";
        var seoUrl = "HelpDeskFMS_Module_ServisIstegi(guid'" + this.sr["Oid"] + "')" + select;
        this.utils.loadingPresent("Servis isteğinin son durumu kontrol ediliyor..");
        me.serviceRequestProvider.getServiceRequest(seoUrl, null).subscribe(function (res) {
            _this.utils.loadingDismiss();
            var durum = res["Durum"];
            if (durum === 20 || durum === 30 || durum === 40 || durum === 62 || durum === 82) {
                seoUrl = "HelpDeskFMS_Module_Islem";
                var body_1 = {
                    "odata.type": "XafDataService.HelpDeskFMS_Module_SE_Kisiyeata",
                    "IlgiliServisIstegi@odata.bind": _this.apiUrl + "HelpDeskFMS_Module_ServisIstegi(guid'" + _this.sr["Oid"] + "')",
                    "AtananKullanici@odata.bind": _this.apiUrl + "HelpDeskFMS_Module_Kullanici(guid'" + _this.selectedPerson["Oid"] + "')",
                    "Aciklama": _this.aciklama
                };
                var message = "Servis isteği " + '<b>' + _this.selectedPerson["adi"] + "  " + _this.selectedPerson["soyadi"] + '</b>' + " isimli personele atansın mı ?";
                _this.utils.doConfirm("Kişiye Ata", message, function () {
                    me.utils.loadingPresent("Lütfen Bekleyiniz...");
                    me.serviceRequestProvider.postServiceRequest(seoUrl, body_1).subscribe(function (p) {
                        me.utils.loadingDismiss();
                        me.utils.doAlertConfirm("İşlem başarılı...", function () {
                            me.viewCtrl.dismiss();
                            me.utils.processOK();
                            var seoUrl = "PushGonder?Oid=guid'" + me.selectedPerson["Oid"] + "'&Baslik='👨🏻‍🔧 Servis İsteği'&Mesaj='" + me.sr.konu.Olay + "'";
                            me.serviceRequestProvider.getServiceRequest(seoUrl, null).subscribe(function (res) {
                                console.log(res);
                            });
                        });
                    }, function (error) {
                        me.utils.loadingDismiss();
                    });
                });
            }
            else {
                var message = "Son Durumu <b>'" + _this.stateEnums["state" + durum] + "'</b> olan servis isteği üzerinde '<b>Kişiye Atama</b>' işlemi yapamazsınız!'";
                _this.utils.doAlert(message);
            }
        }, function (error) {
            me.utils.loadingDismiss();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Slides */])
    ], AssigningPersonPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('segmentScroll'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Scroll */])
    ], AssigningPersonPage.prototype, "segmentScroll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('scrollContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Content */])
    ], AssigningPersonPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('scrollFabButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */])
    ], AssigningPersonPage.prototype, "myElement", void 0);
    AssigningPersonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-assigning-person',template:/*ion-inline-start:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/assigning-person/assigning-person.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left *ngIf="slideIndex==1">\n      <button ion-button icon-only style="color: white;font-size: 17px;" (click)="slideChange(0)">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only class="closeButton" style="color: white;font-size: 17px;" (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ title }}</ion-title>\n  </ion-navbar>\n  <ion-searchbar placeholder="Kullanıcı Ara" [(ngModel)]="searchUser" (ionInput)="filterItems($event)"></ion-searchbar>\n\n  <ion-scroll #segmentScroll scrollX="true" class="segmentScroll">\n    <div no-border-top class="segmentDiv">\n      <ion-segment [(ngModel)]="changePipe" (ionChange)="setSegmentScroll(changePipe)">\n        <ion-segment-button value="adi">\n          <ion-row>\n            <!--<ion-col>\n              <ion-icon name=\'md-arrow-round-up\'></ion-icon> <br> <label></label>\n            </ion-col>-->\n            <ion-col>\n              <img src="assets/my_icon/a-z.png" />\n            </ion-col>\n          </ion-row>\n        </ion-segment-button>\n        <ion-segment-button value="-adi">\n          <ion-row>\n            <ion-col>\n              <img src="assets/my_icon/z-a.png" />\n            </ion-col>\n            <!--<ion-col>\n              <ion-icon name=\'md-arrow-round-down\' style="left: 3px;"></ion-icon> <br> <label></label>\n            </ion-col>-->\n          </ion-row>\n        </ion-segment-button>\n        <ion-segment-button value="-isOnline">\n          <ion-row>\n            <!--<ion-col>\n              <ion-icon name=\'md-arrow-round-up\'></ion-icon> <br> <label></label>\n            </ion-col>-->\n            <ion-col>\n              <img src="assets/my_icon/online.png" />\n            </ion-col>\n          </ion-row>\n        </ion-segment-button>\n        <ion-segment-button value="isOnline">\n          <ion-row>\n            <ion-col>\n              <img src="assets/my_icon/offline.png" />\n            </ion-col>\n            <!-- <ion-col>\n              <ion-icon name=\'md-arrow-round-down\' style="left: 3px;"></ion-icon> <br> <label></label>\n            </ion-col>-->\n          </ion-row>\n        </ion-segment-button>\n        <ion-segment-button value="AtanmisToplamIs">\n          <ion-row>\n            <!--<ion-col>\n              <ion-icon name=\'md-arrow-round-up\'></ion-icon> <br> <label></label>\n            </ion-col>-->\n            <ion-col>\n              <img src="assets/my_icon/123.png" />\n            </ion-col>\n          </ion-row>\n        </ion-segment-button>\n        <ion-segment-button value="-AtanmisToplamIs">\n          <ion-row>\n            <ion-col>\n              <img src="assets/my_icon/321.png" />\n            </ion-col>\n            <!--<ion-col>\n              <ion-icon name=\'md-arrow-round-down\' style="left: 3px;"></ion-icon> <br> <label></label>\n            </ion-col>-->\n          </ion-row>\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n  </ion-scroll>\n</ion-header>\n\n\n<ion-content #scrollContent padding>\n  <ion-fab right bottom #fab>\n    <button #scrollFabButton ion-fab mini (click)="scrollTop(250)" class="ion-fab ion-fab-button scrollTopFAB">\n      <ion-icon class="scrollTopFABIcon" name="md-arrow-round-up" style="color: rgba(9, 28, 72, 0.5);"></ion-icon>\n    </button>\n    <!--(click)="openSocial(\'facebook\', fab1)"-->\n  </ion-fab>\n  <ion-slides>\n    <ion-slide>\n      <div class="card round" margin-top style="height: 75px;"\n        [ngStyle]="{\'border-color\':pList.isOnline==0 ? \'#8a0f23\' : \'darkgreen\'}"\n        *ngFor="let pList of personalList | orderBy:[changePipe] | slice:0:50">\n        <ion-list no-margin>\n          <ion-item class="ionItemPerson2" (click)="selectedPersonal(pList,1)">\n            <ion-avatar item-start>\n              <img\n                src="{{pList.isPhoto ? pList.photoUrl : (pList.cinsiyet===0 ? \'../../assets/imgs/boss.png\' : \'../../assets/imgs/woman.png\')}}">\n            </ion-avatar>\n            <!--<ion-icon  *ngIf="pList.isOnline==0" item-end name="remove-circle" style="color: #8a0f23 !important;"></ion-icon>\n            <ion-icon *ngIf="pList.isOnline==1" item-end name="checkmark-circle" style="color: darkgreen !important;"></ion-icon>-->\n            <h2 style="overflow: hidden !important;text-overflow: ellipsis !important;" ion-text\n              [ngStyle]="{\'color\':pList.isOnline==0 ? \'#8a0f23\' : \'darkgreen\'}">{{ pList.adiSoyadi }}</h2>\n            <p ion-text [ngStyle]="{\'color\':pList.isOnline==0 ? \'#8a0f23\' : \'darkgreen\'}">{{ pList.isunvani }}</p>\n            <!--<p ion-text *ngIf="pList.EPosta"><b>E-Posta :</b>\n              <a class="companyInfo" href="mailto:{{ pList.EPosta }}">\n                {{ pList.EPosta }}\n              </a>\n            </p>-->\n            <p ion-text *ngIf="false"><b>Üzerindeki İş Sayısı :</b><label style="color: black;"> {{ pList.AtanmisToplamIs }} </label>\n            </p>\n          </ion-item>\n        </ion-list>\n        <ion-list no-margin>\n        </ion-list>\n      </div>\n      <!--<ion-list>\n        <ion-item *ngFor="let pList of personalList | orderBy:[changePipe]">\n          <ion-avatar item-start>\n            <img *ngIf="pList.isOnline==0" src="assets/imgs/offlineUser.png">\n            <img *ngIf="pList.isOnline==1" src="assets/imgs/onlineUser.png">\n          </ion-avatar>\n          <h2>{{ pList.adi }} {{ pList.soyadi }}</h2>\n          <h3>{{ pList.isunvani }}</h3>\n          <p>{{ pList.workCount }}</p>\n        </ion-item>\n      </ion-list>-->\n      <!--<div class="card round" margin-top *ngFor="let pList of personalList | orderBy:[changePipe]" [ngStyle]="{\'border-color\':pList.isOnline==0 ? \'#8a0f23\' : \'darkgreen\'}">\n        <ion-list no-margin>\n          <ion-item [ngStyle]="{\'backgroundColor\':pList.isOnline==0 ? \'#8a0f23\' : \'darkgreen\'}" (click)="selectedPersonal(pList,1)">\n            <ion-icon *ngIf="pList.isOnline==0" item-end name="remove-circle"></ion-icon>\n            <ion-icon *ngIf="pList.isOnline==1" item-end name="checkmark-circle"></ion-icon>\n            <h2 ion-text>{{ pList.adi }} {{ pList.soyadi }}</h2>\n            <p ion-text>{{ pList.isunvani }}</p>\n          </ion-item>\n        </ion-list>\n        <ion-list no-margin>\n          <ion-item class="ionItemPerson">\n            <ion-icon  item-end></ion-icon>\n            <p ion-text stacked *ngIf="pList.EPosta"><b [ngStyle]="{\'color\':pList.isOnline==0 ? \'#8a0f23\' : \'darkgreen\'}">E-Posta :</b>\n              <a class="companyInfo" href="mailto:{{ pList.EPosta }}">\n                {{ pList.EPosta }}\n              </a>\n            </p>\n            <p ion-text stacked>\n              <b [ngStyle]="{\'color\':pList.isOnline==0 ? \'#8a0f23\' : \'darkgreen\'}">Üzerindeki İş Sayısı :</b>\n              <label style="color: black;"> {{ pList.AtanmisToplamIs }} </label>\n            </p>\n          </ion-item>\n        </ion-list>\n      </div>-->\n    </ion-slide>\n    <ion-slide>\n      <div class="card round" margin-top style="height: 75px;" *ngIf="selectedPerson!=null"\n        [ngStyle]="{\'border-color\':selectedPerson.isOnline==0 ? \'#8a0f23\' : \'darkgreen\'}">\n        <ion-list no-margin>\n          <ion-item class="ionItemPerson2">\n            <ion-avatar item-start>\n              <img\n                src="{{selectedPerson.isPhoto ? selectedPerson.photoUrl : (selectedPerson.cinsiyet===0 ? \'../../assets/imgs/boss.png\' : \'../../assets/imgs/woman.png\')}}">\n              <!-- <img src="{{selectedPerson.cinsiyet===0 ? \'../../assets/imgs/boss.png\' : \'../../assets/imgs/woman.png\'}}"> -->\n            </ion-avatar>\n            <!--<ion-icon  *ngIf="selectedPerson.isOnline==0" item-end name="remove-circle" style="color: #8a0f23 !important;"></ion-icon>\n            <ion-icon *ngIf="selectedPerson.isOnline==1" item-end name="checkmark-circle" style="color: darkgreen !important;"></ion-icon>-->\n            <h2 ion-text [ngStyle]="{\'color\':selectedPerson.isOnline==0 ? \'#8a0f23\' : \'darkgreen\'}">\n              {{ selectedPerson.adi }} {{ selectedPerson.soyadi }}</h2>\n            <p ion-text [ngStyle]="{\'color\':selectedPerson.isOnline==0 ? \'#8a0f23\' : \'darkgreen\'}">\n              {{ selectedPerson.isunvani }}</p>\n            <!--<p ion-text *ngIf="selectedPerson.EPosta"><b>E-Posta :</b>\n              <a class="companyInfo" href="mailto:{{ selectedPerson.EPosta }}">\n                {{ selectedPerson.EPosta }}\n              </a>\n            </p>-->\n            <p ion-text *ngIf="false"><b>Üzerindeki İş Sayısı :</b><label style="color: black;"> {{ selectedPerson.AtanmisToplamIs }}\n              </label> </p>\n          </ion-item>\n        </ion-list>\n        <ion-list no-margin>\n        </ion-list>\n      </div>\n      <ion-item class="textAreaItem">\n        <ion-label stacked class="textAreaLabel" style="color: #999 !important;">Açıklama</ion-label>\n        <ion-textarea [(ngModel)]="aciklama"></ion-textarea>\n      </ion-item>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n<ion-footer *ngIf="slideIndex==1">\n  <ion-toolbar>\n    <button ion-button icon-start full class="onayButton" (click)="assigningPerson()">\n      <ion-icon name="person-add"></ion-icon>\n      Kişiye Ata\n    </button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/assigning-person/assigning-person.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__utils_utils__["a" /* Utils */], __WEBPACK_IMPORTED_MODULE_5__providers_service_request_service_request__["a" /* ServiceRequestProvider */], __WEBPACK_IMPORTED_MODULE_4__utils_storageData__["a" /* StorageData */]]
        }),
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])('apiUrl')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3__utils_utils__["a" /* Utils */],
            __WEBPACK_IMPORTED_MODULE_5__providers_service_request_service_request__["a" /* ServiceRequestProvider */], __WEBPACK_IMPORTED_MODULE_4__utils_storageData__["a" /* StorageData */], Object])
    ], AssigningPersonPage);
    return AssigningPersonPage;
}());

//# sourceMappingURL=assigning-person.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtendingSlaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_state_enums__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_storageData__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_utils__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_service_request_service_request__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__image_slider_image_slider__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lists_approval_rule_list__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lists_dates__ = __webpack_require__(499);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











/**
 * Generated class for the ExtendingSlaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExtendingSlaPage = /** @class */ (function () {
    function ExtendingSlaPage(navCtrl, modalCtrl, navParams, utils, base64, platform, serviceRequestProvider, sanitizer, storage, apiUrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.utils = utils;
        this.base64 = base64;
        this.platform = platform;
        this.serviceRequestProvider = serviceRequestProvider;
        this.sanitizer = sanitizer;
        this.storage = storage;
        this.apiUrl = apiUrl;
        this.monthNames = __WEBPACK_IMPORTED_MODULE_10__lists_dates__["b" /* MonthNames */];
        this.monthShortNames = __WEBPACK_IMPORTED_MODULE_10__lists_dates__["c" /* MonthShortNames */];
        this.dayNames = __WEBPACK_IMPORTED_MODULE_10__lists_dates__["a" /* DayNames */];
        this.selectedApprovalRule = 0;
        this.teslimTarihi = new Date().toISOString();
        this.teslimSaati = new Date(new Date().getTime() + 1000 * 60 * 60 * 3).toISOString();
        this.aciklama = "";
        this.base64Image = [];
        //base64PostImage:any[]=["assets/imgs/service.png","assets/imgs/service2.png","assets/imgs/service.png","assets/imgs/service.png","assets/imgs/service2.png"];
        this.base64PostImage = [];
        this.deviceInfo = "";
        this.userInfo = "";
        this.base64Format = "data:image/jpeg;base64,";
        this.approvalRuleList = __WEBPACK_IMPORTED_MODULE_9__lists_approval_rule_list__["a" /* ApprovalRuleList */];
        this.sr = navParams.data.sr;
        this.stateEnums = __WEBPACK_IMPORTED_MODULE_0__enums_state_enums__["a" /* StateEnums */];
        this.storage.get("deviceInfo", function (deviceInfo) {
            _this.deviceInfo = "\n ( Cihaz Bilgi : " + deviceInfo.mobilDeviceInfo + " )";
        });
    }
    ExtendingSlaPage.prototype.openCamera = function () {
        var me = this;
        this.utils.openCamera(function (imageData) {
            me.base64Image.push(me.base64Format + imageData);
            me.base64PostImage.push(me.base64Format + imageData);
        });
    };
    ExtendingSlaPage.prototype.imageSlider = function (imageIndex) {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__image_slider_image_slider__["a" /* ImageSliderPage */], {
            base64Image: this.base64PostImage,
            imageIndex: imageIndex
        });
        myModal.present();
    };
    ExtendingSlaPage.prototype.removeImage = function (imageIndex) {
        var me = this;
        this.utils.doConfirm("Fotoğraf Sil", "Fotoğrafı silmek istediğinizden emin misiniz ?", function () {
            me.utils.removeImage(me.base64Image, imageIndex);
            me.utils.removeImage(me.base64PostImage, imageIndex);
        });
    };
    ExtendingSlaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExtendingSlaPage');
    };
    ExtendingSlaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('userInfo', function (val) {
            _this.userInfo = val[0];
        });
    };
    ExtendingSlaPage.prototype.extendingSLA = function () {
        var _this = this;
        var me = this;
        var select = "?$select=Durum";
        var seoUrl = "HelpDeskFMS_Module_ServisIstegi(guid'" + this.sr["Oid"] + "')" + select;
        this.utils.loadingPresent("Servis isteğinin son durumu kontrol ediliyor..");
        me.serviceRequestProvider.getServiceRequest(seoUrl, null).subscribe(function (res) {
            _this.utils.loadingDismiss();
            var durum = res["Durum"];
            if (durum === 30 || durum === 40 || durum === 42 || durum === 62 || durum === 70 || durum === 72) {
                seoUrl = "HelpDeskFMS_Module_Islem";
                var body_1 = {
                    "odata.type": "XafDataService.HelpDeskFMS_Module_SE_SLAUzat",
                    "IlgiliServisIstegi@odata.bind": _this.apiUrl + "HelpDeskFMS_Module_ServisIstegi(guid'" + _this.sr["Oid"] + "')",
                    "Aciklama": _this.aciklama,
                    "TahminiTamamlanmaTarihi": _this.teslimTarihi.substring(0, 11) + _this.teslimSaati.substring(11).replace('Z', '')
                };
                var goalTime = new Date(_this.sr["Goal2"]);
                var slaTime = new Date(new Date(_this.teslimTarihi.substring(0, 11) + _this.teslimSaati.substring(11)).getTime() - 1000 * 60 * 60 * 2);
                if (slaTime > goalTime) {
                    var message = "SLA Uzatma isteği gönderilsin mi ?";
                    _this.utils.doConfirm("SLA Uzatma", message, function () {
                        me.utils.loadingPresent("Lütfen Bekleyiniz...");
                        me.serviceRequestProvider.postServiceRequest(seoUrl, body_1).subscribe(function (p) {
                            me.utils.loadingDismiss();
                            me.utils.doAlertConfirm("İşlem başarılı...", function () {
                                if (me.base64PostImage.length > 0) {
                                    me.utils.loadingPresent("Fotoğraflar Aktarılıyor...");
                                    var i_1 = 0;
                                    while (i_1 < me.base64PostImage.length) {
                                        var body_2 = {
                                            "IlgiliServisIstegi@odata.bind": me.apiUrl + "HelpDeskFMS_Module_ServisIstegi(guid'" + me.sr["Oid"] + "')",
                                            "B64": me.base64PostImage[i_1].replace(me.base64Format, '')
                                        };
                                        me.serviceRequestProvider.sendPhotos(body_2).subscribe(function (p) {
                                            if (i_1 == (me.base64PostImage.length - 1)) {
                                                me.utils.loadingDismiss();
                                                me.navCtrl.pop();
                                                me.utils.processOK();
                                            }
                                        }, function (error) {
                                            me.utils.loadingDismiss();
                                            console.log(error);
                                        });
                                        i_1++;
                                    }
                                }
                                else {
                                    me.navCtrl.pop();
                                    me.utils.processOK();
                                }
                            });
                        }, function (error) {
                            me.utils.loadingDismiss();
                        });
                    });
                }
                else {
                    me.utils.doAlert("Sla Uzatma Tarihi <br><b>" +
                        _this.sr["Goal2"].replace('T', ' ').substring(0, _this.sr["Goal2"].indexOf('.')) +
                        "</b> Tarihinden Büyük Olmalıdır...");
                }
            }
            else {
                var message = "Son Durumu <b>'" + _this.stateEnums["state" + durum] + "'</b> olan servis isteği üzerinde '<b>Sla Uzatma</b>' işlemi yapamazsınız!'";
                _this.utils.doAlert(message);
            }
        }, function (error) {
            me.utils.loadingDismiss();
        });
    };
    ExtendingSlaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-extending-sla',template:/*ion-inline-start:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/extending-sla/extending-sla.html"*/'<!--\n\n  Generated template for the ExtendingSlaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>SLA Uzatma</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label>Teslim Tarihi</ion-label>\n\n    <ion-datetime  displayFormat="D MMM DDDD, YYYY" [(ngModel)]="teslimTarihi" min="2002" max="2032"\n\n                   dayNames="{{dayNames}}" monthShortNames="{{monthShortNames}}" monthNames="{{monthNames}}" doneText="Tamam" cancelText="İptal"></ion-datetime>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Teslim Saati</ion-label>\n\n    <ion-datetime displayFormat="HH:mm" [(ngModel)]="teslimSaati" doneText="Tamam" cancelText="İptal"></ion-datetime>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Açıklama</ion-label>\n\n    <ion-textarea [(ngModel)]="aciklama"></ion-textarea>\n\n  </ion-item>\n\n  <!--<ion-item>\n\n    <ion-label>Onay Kuralı</ion-label>\n\n    <ion-select  [(ngModel)]="selectedApprovalRule" okText="Tamam" cancelText="İptal">\n\n      <ion-option *ngFor="let arList of approvalRuleList" value="{{arList.value}}">{{arList.name}}</ion-option>\n\n    </ion-select>\n\n  </ion-item>-->\n\n  <!--<button ion-button icon-start full class="barcodeButton" (click)="openCamera()">\n\n    <ion-icon name="camera"></ion-icon>\n\n    Fotoğraf Ekle\n\n  </button>-->\n\n  <ion-item class="addPhoto">\n\n    <div item-start>\n\n      <img class="addPhotoImg" src="../../assets/imgs/addPhoto2.png" (click)="openCamera()">\n\n    </div>\n\n    <div>\n\n      <p *ngIf="base64PostImage.length===0" class="addPhotoP" style="color: #565655 !important;">Fotoğraf eklemek için<br>simgeye dokun...</p>\n\n      <p *ngIf="base64PostImage.length>0" class="addPhotoP" style="color: #565655 !important;">Fotoğrafı silmek için<br>üzerine basılı tutun...</p>\n\n    </div>\n\n  </ion-item>\n\n  <div *ngIf="base64PostImage.length>0">\n\n    <!--<ion-scroll class="imageListScroll" scrollX="true" scrollY="true">\n\n      <img *ngFor="let image of base64Image; let i=index" [src]="sanitizer.bypassSecurityTrustUrl(image)"  (click)="imageSlider(i)" (long-press)="removeImage(i)"/>\n\n      <ion-icon name="qr-scanner"></ion-icon>\n\n    </ion-scroll>-->\n\n    <ion-slides class="image-slider" slidesPerView="3">\n\n      <ion-slide *ngFor="let image of base64PostImage; let i=index">\n\n        <img [src]="sanitizer.bypassSecurityTrustUrl(image)" imageViewer (click)="imageSlider(i)" (press)="removeImage(i)"/>\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button icon-start full class="onayButton" (click)="extendingSLA()">\n\n      <ion-icon name="time"></ion-icon>\n\n      SLA Uzat\n\n    </button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/extending-sla/extending-sla.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_base64__["a" /* Base64 */], __WEBPACK_IMPORTED_MODULE_6__utils_utils__["a" /* Utils */], __WEBPACK_IMPORTED_MODULE_7__providers_service_request_service_request__["a" /* ServiceRequestProvider */], __WEBPACK_IMPORTED_MODULE_5__utils_storageData__["a" /* StorageData */]]
        }),
        __param(9, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])('apiUrl')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__utils_utils__["a" /* Utils */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64__["a" /* Base64 */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__providers_service_request_service_request__["a" /* ServiceRequestProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_5__utils_storageData__["a" /* StorageData */], Object])
    ], ExtendingSlaPage);
    return ExtendingSlaPage;
}());

//# sourceMappingURL=extending-sla.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolvingRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_nfc__ = __webpack_require__(848);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lists_root_case_list__ = __webpack_require__(849);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_service_request_service_request__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_storageData__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_utils__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__image_slider_image_slider__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__enums_state_enums__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












/**
 * Generated class for the SolvingRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SolvingRequestPage = /** @class */ (function () {
    //base64PostImage:any[]=["assets/imgs/boss.png","assets/imgs/woman.png"];
    function SolvingRequestPage(navCtrl, navParams, modalCtrl, platform, barcodeScanner, base64, utils, serviceRequestProvider, nfc, ndef, sanitizer, storage, apiUrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.barcodeScanner = barcodeScanner;
        this.base64 = base64;
        this.utils = utils;
        this.serviceRequestProvider = serviceRequestProvider;
        this.nfc = nfc;
        this.ndef = ndef;
        this.sanitizer = sanitizer;
        this.storage = storage;
        this.apiUrl = apiUrl;
        this.aciklama = '';
        this.base64Image = [];
        this.base64PostImage = [];
        this.uzaktanCozuldu = false;
        this.barkodOnay = false;
        this.ekAciklama = '';
        this.deviceInfo = '';
        this.nfcActive = false;
        this.base64Format = 'data:image/jpeg;base64,';
        this.subscriptions = new Array();
        this.rootCaseList = __WEBPACK_IMPORTED_MODULE_6__lists_root_case_list__["a" /* RootCaseList */];
        this.sr = navParams.data.sr;
        this.stateEnums = __WEBPACK_IMPORTED_MODULE_11__enums_state_enums__["a" /* StateEnums */];
        this.storage.get('deviceInfo', function (deviceInfo) {
            _this.deviceInfo = '\n ( Cihaz Bilgi : ' + deviceInfo.mobilDeviceInfo + ' )';
        });
        //****************   NFC   *************************
        // this.platform.ready().then(() => {
        //   this.nfc.enabled().then(() => {
        //     this.nfc.addNdefListener(() => {
        //       console.log("nfc success");
        //     }, (err) => {
        //       console.log(err);
        //     }).subscribe((event) => {
        //       if (this.nfcActive) {
        //         this.nfcActive = false;
        //         if (this.uzaktanCozuldu == true || this.sr['ilgiliMahal'] == null) {
        //           this.utils.toastMessage('Uzaktan Çözülen ya da Mahal Kodu mevcut olmayan servis isteklerinde Karekod okutulması gerekmez.', 5000);
        //         }
        //         else {
        //           if (this.sr["ilgiliMahal"] != null) {
        //             if (this.nfc.bytesToString(event.tag.ndefMessage[0].payload.slice(3)).trim().toString() === this.sr["ilgiliMahal"]["MahalKodu"].trim().toString()) {
        //               this.barkodOnay = true;
        //               this.uzaktanCozuldu = false;
        //               this.ekAciklama = 'NOT : Mahal Kodu Onaylandı...';
        //               this.utils.toastMessage('Mahal Kodu Onaylandı...');
        //             }
        //             else {
        //               this.barkodOnay = false;
        //               this.ekAciklama = 'NOT : Mahal Kodu Eşleşmedi...';
        //               this.utils.toastMessage('Mahal Kodu Eşleşmedi...');
        //             }
        //           }
        //           else {
        //             this.barkodOnay = false;
        //             this.ekAciklama = 'NOT : Mahal Kodu Bulunamadı...';
        //           }
        //         }
        //       }
        //     });
        //   }).catch(err => {
        //     let me = this;
        //     this.utils.doAlertConfirm("Lütfen Cihazınızın NFC özelliğini açınız!", function () {
        //       me.nfc.showSettings();
        //     });
        //   });
        // });
        //************************************************
    }
    SolvingRequestPage.prototype.ionViewWillLeave = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    SolvingRequestPage.prototype.uzaktanCoz = function (uzaktanCozuldu) {
        this.ekAciklama = '';
        if (uzaktanCozuldu == true) {
            this.uzaktanCozuldu = uzaktanCozuldu;
            this.barkodOnay = false;
            this.nfcActive = false;
            this.ekAciklama = 'NOT : Mahal Kodu Okutulamadı...';
        }
    };
    SolvingRequestPage.prototype.isNumeric = function (str) {
        //if (typeof str != "string") return false;
        return !isNaN(str) && !isNaN(parseFloat(str));
    };
    SolvingRequestPage.prototype.scanBarcode = function () {
        var _this = this;
        if (this.uzaktanCozuldu == true || this.sr['ilgiliMahal'] == null) {
            this.utils.toastMessage('Uzaktan Çözülen ya da Mahal Kodu mevcut olmayan servis isteklerinde Karekod okutulması gerekmez.', 5000);
        }
        else {
            this.barcodeScanner
                .scan({ resultDisplayDuration: 0 })
                .then(function (barcodeData) {
                console.log('Barcode data', barcodeData);
                if (_this.isNumeric(barcodeData.text.replace(/[^\d.-]+/g, ''))) {
                    var seoUrl = "HelpDeskFMS_Module_Mahal?$filter=KareKod eq '" + barcodeData.text.replace(/[^\d.-]+/g, '') + "'&$format=json";
                    _this.serviceRequestProvider.getServiceRequest(seoUrl, null).subscribe(function (res) {
                        if (res['value'].length > 0) {
                            if (barcodeData.cancelled === true) {
                                _this.platform.registerBackButtonAction(function () { });
                            }
                            else {
                                if (_this.sr['ilgiliMahal'] != null) {
                                    if (res['value'][0]['MahalKodu'] == _this.sr['ilgiliMahal']['MahalKodu']) {
                                        _this.barkodOnay = true;
                                        _this.uzaktanCozuldu = false;
                                        _this.ekAciklama = 'NOT : Mahal Kodu Onaylandı...';
                                        _this.utils.toastMessage('Mahal Kodu Onaylandı...');
                                    }
                                    else {
                                        _this.barkodOnay = false;
                                        _this.ekAciklama = 'NOT : Mahal Kodu Eşleşmedi...';
                                        _this.utils.toastMessage('Mahal Kodu Eşleşmedi...');
                                    }
                                }
                                else {
                                    _this.barkodOnay = false;
                                    _this.ekAciklama = 'NOT : Mahal Kodu Bulunamadı...';
                                }
                            }
                        }
                        else {
                            _this.utils.toastMessage(barcodeData.text.replace(/[^\d.-]+/g, '') + ' barkodlu mahal Bulunamadı...');
                        }
                    });
                }
                else {
                    if (barcodeData.cancelled === true) {
                        _this.platform.registerBackButtonAction(function () { });
                    }
                    else {
                        if (_this.sr['ilgiliMahal'] != null) {
                            barcodeData.text = barcodeData.text.replace('MECARD:N:,', '').replace(';ADR:;;', '');
                            var mahalKodu = barcodeData.text.indexOf(' ') > -1 ? barcodeData.text.split(' ')[0] : barcodeData.text;
                            if (mahalKodu == _this.sr['ilgiliMahal']['MahalKodu']) {
                                _this.barkodOnay = true;
                                _this.uzaktanCozuldu = false;
                                _this.ekAciklama = 'NOT : Mahal Kodu Onaylandı...';
                                _this.utils.toastMessage('Mahal Kodu Onaylandı...');
                            }
                            else {
                                _this.barkodOnay = false;
                                _this.ekAciklama = 'NOT : Mahal Kodu Eşleşmedi...';
                                _this.utils.toastMessage('Mahal Kodu Eşleşmedi...');
                            }
                        }
                        else {
                            _this.barkodOnay = false;
                            _this.ekAciklama = 'NOT : Mahal Kodu Bulunamadı...';
                        }
                    }
                }
            })
                .then(function () {
                console.log('Barcode data');
            })
                .catch(function (err) {
                console.log('Error', err);
            });
        }
    };
    SolvingRequestPage.prototype.openCamera = function () {
        var me = this;
        this.utils.openCamera(function (imageData) {
            me.base64Image.push(me.base64Format + imageData);
            me.base64PostImage.push(me.base64Format + imageData);
        });
    };
    SolvingRequestPage.prototype.imageSlider = function (imageIndex) {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__image_slider_image_slider__["a" /* ImageSliderPage */], {
            base64Image: this.base64PostImage,
            imageIndex: imageIndex
        });
        myModal.present();
    };
    SolvingRequestPage.prototype.removeImage = function (imageIndex) {
        var me = this;
        this.utils.doConfirm('Fotoğraf Sil', 'Fotoğrafı silmek istediğinizden emin misiniz ?', function () {
            me.utils.removeImage(me.base64Image, imageIndex);
            me.utils.removeImage(me.base64PostImage, imageIndex);
        });
    };
    SolvingRequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SolvingRequestPage');
    };
    SolvingRequestPage.prototype.solvingRequest = function () {
        var me = this;
        if (this.selectedRootCase) {
            if (this.uzaktanCozuldu == false && this.barkodOnay == false) {
                this.utils.toastMessage('Mahal seçiniz!!!', 5000);
            }
            else {
                var select = '?$select=Durum';
                var seoUrl_1 = "HelpDeskFMS_Module_ServisIstegi(guid'" + this.sr['Oid'] + "')" + select;
                this.utils.loadingPresent('Servis isteğinin son durumu kontrol ediliyor..');
                me.serviceRequestProvider.getServiceRequest(seoUrl_1, null).subscribe(function (res) {
                    me.utils.loadingDismiss();
                    var durum = res['Durum'];
                    if (durum !== 50 && durum !== 60) {
                        seoUrl_1 = 'HelpDeskFMS_Module_Islem';
                        var body_1 = {
                            'odata.type': 'XafDataService.HelpDeskFMS_Module_SE_Kapat',
                            'IlgiliServisIstegi@odata.bind': me.apiUrl + "HelpDeskFMS_Module_ServisIstegi(guid'" + me.sr['Oid'] + "')",
                            KokNeden: me.selectedRootCase,
                            Aciklama: me.aciklama + '\n' + me.ekAciklama
                        };
                        var durum_1 = 50;
                        var message = 'Servis isteği kapatılsın mı ?';
                        if (me.selectedRootCase > 2) {
                            durum_1 = 51;
                            message = 'İdare onayına gidecek bir kök neden seçtiniz. Onaylıyor musunuz ?';
                        }
                        me.utils.doConfirm('Çözüldü', message, function () {
                            me.utils.loadingPresent('Lütfen Bekleyiniz...');
                            me.serviceRequestProvider.postServiceRequest(seoUrl_1, body_1).subscribe(function (p) {
                                me.utils.loadingDismiss();
                                me.serviceRequestProvider.putServiceRequest("HelpDeskFMS_Module_ServisIstegi(guid'" + me.sr['Oid'] + "')", { KapanisAciklamasi: me.aciklama + '\n' + me.ekAciklama }).subscribe(function (p) {
                                    me.utils.doAlertConfirm('İşlem başarılı...', function () {
                                        if (me.base64PostImage.length > 0) {
                                            me.utils.loadingPresent('Fotoğraflar Aktarılıyor...');
                                            var i = 0;
                                            while (i < me.base64PostImage.length) {
                                                var body_2 = {
                                                    'IlgiliServisIstegi@odata.bind': me.apiUrl + "HelpDeskFMS_Module_ServisIstegi(guid'" + me.sr['Oid'] + "')",
                                                    B64: me.base64PostImage[i].replace(me.base64Format, '')
                                                };
                                                me.serviceRequestProvider.sendPhotos(body_2).subscribe(function (p) { }, function (error) {
                                                    me.utils.loadingDismiss();
                                                    console.log(error);
                                                });
                                                if (i == me.base64PostImage.length - 1) {
                                                    me.utils.loadingDismiss();
                                                    me.navCtrl.pop();
                                                    me.utils.processOK();
                                                }
                                                i++;
                                            }
                                        }
                                        else {
                                            me.navCtrl.pop();
                                            me.utils.processOK();
                                        }
                                    });
                                }, function (error) {
                                    me.utils.loadingDismiss();
                                });
                            }, function (error) {
                                me.utils.loadingDismiss();
                                //me.utils.doAlert("Bağlantınızı kontrol ediniz...");
                            });
                        });
                    }
                    else {
                        var message = "Son Durumu <b>'" + me.stateEnums['state' + durum] + "'</b> olan servis isteği üzerinde '<b>Çözümlendi</b>' işlemi yapamazsınız!'";
                        me.utils.doAlert(message);
                    }
                }, function (error) {
                    me.utils.loadingDismiss();
                });
            }
        }
        else {
            var message = 'Kök Neden seçiniz!!!';
            me.utils.doAlert(message);
        }
    };
    SolvingRequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-solving-request',template:/*ion-inline-start:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/solving-request/solving-request.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>İsteği Çöz</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-item>\n		<ion-label>Kök Neden</ion-label>\n		<ion-select [(ngModel)]="selectedRootCase" okText="Tamam" cancelText="İptal">\n			<ion-option *ngFor="let rcList of rootCaseList" value="{{rcList.value}}">{{rcList.name}}</ion-option>\n		</ion-select>\n	</ion-item>\n	<ion-item>\n		<ion-label stacked>Açıklama</ion-label>\n		<ion-textarea placeholder="Açıklama Giriniz..." [(ngModel)]="aciklama"></ion-textarea>\n	</ion-item>\n	<ion-item>\n		<ion-label>Mahal Kodu Okutulamadı</ion-label>\n		<ion-toggle [(ngModel)]="uzaktanCozuldu" (ionChange)="uzaktanCoz(uzaktanCozuldu)"></ion-toggle>\n	</ion-item>\n\n	<!-- ************************ -->\n	<!--<button ion-button icon-start full class="barcodeButton" (click)="scanBarcode()" [disabled]="uzaktanCozuldu==true || sr[\'ilgiliMahal\']==null">\n    <ion-icon name="qr-scanner"></ion-icon>\n    Mahal Barkodu\n  </button>-->\n	<!--<ion-label color="dark">{{ ekAciklama }}</ion-label>-->\n	<!--<span><b style="text-decoration: underline;">{{ ekAciklama }}</b></span>-->\n	<!--<button ion-button icon-start full class="barcodeButton" (click)="openCamera()">\n    <ion-icon name="camera"></ion-icon>\n    Fotoğraf Ekle\n  </button>-->\n	<!-- ****************************** -->\n	<ion-item class="addPhoto" *ngIf="sr.KapatmaTuru===\'Barkod\'">\n		<div item-start>\n			<img class="addPhotoImg" src="../../assets/imgs/qrcode2.png" (click)="scanBarcode()" />\n		</div>\n		<div>\n			<p class="addPhotoP" style="color: #565655 !important" *ngIf="uzaktanCozuldu==false && barkodOnay==false  && ekAciklama===\'\'">Mahal Kodunu taramak için<br />simgeye dokun...</p>\n			<p [ngStyle]="{\'color\': uzaktanCozuldu==true || sr[\'ilgiliMahal\']==null ? \'darkblue\' : uzaktanCozuldu==false && barkodOnay==true ? \'darkgreen\' : \'darkred\'}" class="addPhotoP" *ngIf="uzaktanCozuldu==true || sr[\'ilgiliMahal\']==null || (uzaktanCozuldu==false && barkodOnay==true) || ekAciklama===\'NOT : Mahal Kodu Eşleşmedi...\'">{{ ekAciklama }}</p>\n		</div>\n	</ion-item>\n	<!-- <ion-item class="addPhoto" *ngIf="sr.KapatmaTuru===\'NFC\'">\n        <div item-start>\n            <img class="addPhotoImg" src="../../assets/imgs/nfc.png" (click)="nfcActive=true">\n        </div>\n        <div>\n            <p class="addPhotoP" style="color: #565655 !important;" *ngIf="nfcActive!==true && uzaktanCozuldu==false && barkodOnay==false  && ekAciklama===\'\'">Mahal Kodunu okutmak için<br>simgeye dokun...\n            </p>\n            <p class="addPhotoP nfc-text" style="color: #565655 !important;" *ngIf="nfcActive===true">NFC kartı okutunuz...\n            </p>\n            <p [ngStyle]="{\'color\': uzaktanCozuldu==true || sr[\'ilgiliMahal\']==null ? \'darkblue\' : uzaktanCozuldu==false && barkodOnay==true ? \'darkgreen\' : \'darkred\'}" class="addPhotoP" *ngIf="nfcActive!==true && (uzaktanCozuldu==true || sr[\'ilgiliMahal\']==null || (uzaktanCozuldu==false && barkodOnay==true) || ekAciklama===\'NOT : Mahal Kodu Eşleşmedi...\')">\n                {{ ekAciklama }}</p>\n        </div>\n    </ion-item> -->\n	<ion-item class="addPhoto">\n		<div item-start>\n			<img class="addPhotoImg" src="../../assets/imgs/addPhoto2.png" (click)="openCamera()" />\n		</div>\n		<div>\n			<p *ngIf="base64PostImage.length===0" class="addPhotoP" style="color: #565655 !important">Fotoğraf eklemek için <br />simgeye dokun...</p>\n			<p *ngIf="base64PostImage.length>0" class="addPhotoP" style="color: #565655 !important">Fotoğrafı silmek için <br />üzerine basılı tutun...</p>\n		</div>\n	</ion-item>\n	<div *ngIf="base64PostImage.length>0">\n		<!--<ion-scroll class="imageListScroll" scrollX="true" scrollY="true">\n      <img *ngFor="let image of base64PostImage; let i=index" [src]="sanitizer.bypassSecurityTrustUrl(image)"  (click)="imageSlider(i)" (press)="removeImage(i)"/>\n    </ion-scroll>-->\n		<ion-slides class="image-slider" slidesPerView="3">\n			<ion-slide *ngFor="let image of base64PostImage; let i=index">\n				<img [src]="sanitizer.bypassSecurityTrustUrl(image)" (click)="imageSlider(i)" (press)="removeImage(i)" />\n			</ion-slide>\n		</ion-slides>\n	</div>\n</ion-content>\n<ion-footer>\n	<ion-toolbar>\n		<button ion-button icon-start full class="onayButton" (click)="solvingRequest()">\n			<!--  [disabled]="uzaktanCozuldu==false && barkodOnay==false" -->\n			<ion-icon name="checkmark"></ion-icon>\n			Çözüldü\n		</button>\n	</ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/solving-request/solving-request.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64__["a" /* Base64 */], __WEBPACK_IMPORTED_MODULE_9__utils_utils__["a" /* Utils */], __WEBPACK_IMPORTED_MODULE_7__providers_service_request_service_request__["a" /* ServiceRequestProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_nfc__["a" /* NFC */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_nfc__["b" /* Ndef */], __WEBPACK_IMPORTED_MODULE_8__utils_storageData__["a" /* StorageData */]]
        }),
        __param(12, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])('apiUrl')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_9__utils_utils__["a" /* Utils */],
            __WEBPACK_IMPORTED_MODULE_7__providers_service_request_service_request__["a" /* ServiceRequestProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_nfc__["a" /* NFC */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_nfc__["b" /* Ndef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_8__utils_storageData__["a" /* StorageData */], Object])
    ], SolvingRequestPage);
    return SolvingRequestPage;
}());

//# sourceMappingURL=solving-request.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlaRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_storageData__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_request_service_request__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__locale_list_locale_list__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__image_slider_image_slider__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









/**
 * Generated class for the SlaRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SlaRequestPage = /** @class */ (function () {
    function SlaRequestPage(navCtrl, navParams, storage, utils, serviceRequestProvider, modalCtrl, barcodeScanner, sanitizer, apiUrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.utils = utils;
        this.serviceRequestProvider = serviceRequestProvider;
        this.modalCtrl = modalCtrl;
        this.barcodeScanner = barcodeScanner;
        this.sanitizer = sanitizer;
        this.apiUrl = apiUrl;
        this.monthNames = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
        this.monthShortNames = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];
        this.dayNames = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
        this.tarih = new Date().toISOString();
        this.saat = new Date(new Date().getTime() + 1000 * 60 * 60 * 3).toISOString();
        this.aciklama = '';
        this.userInfo = '';
        this.deviceInfo = '';
        this.base64Image = [];
        this.base64PostImage = [];
        this.base64Format = 'data:image/jpeg;base64,';
        this.interval = '';
        this.storage.get('deviceInfo', function (deviceInfo) {
            _this.deviceInfo = '\n ( Cihaz Bilgi : ' + deviceInfo.mobilDeviceInfo + ' )';
        });
    }
    SlaRequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SlaRequestPage');
        //git push test
        // test ios
    };
    SlaRequestPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.tarih = new Date().toISOString();
            _this.saat = new Date(new Date().getTime() + 1000 * 60 * 60 * 3).toISOString();
            //console.log(this.tarih + ' ' + this.saat)
        }, 1000);
        this.storage.get('userInfo', function (val) {
            _this.userInfo = val[0];
        });
    };
    SlaRequestPage.prototype.ionViewWillLeave = function () {
        clearInterval(this.interval);
    };
    SlaRequestPage.prototype.isNumeric = function (str) {
        //if (typeof str != "string") return false;
        return !isNaN(str) && !isNaN(parseFloat(str));
    };
    SlaRequestPage.prototype.scanBarcode = function () {
        var _this = this;
        this.barcodeScanner
            .scan({ resultDisplayDuration: 0 })
            .then(function (barcodeData) {
            console.log('Barcode data', barcodeData);
            if (_this.isNumeric(barcodeData.text.replace(/[^\d.-]+/g, ''))) {
                var seoUrl = "HelpDeskFMS_Module_Mahal?$filter=KareKod eq '" + barcodeData.text.replace(/[^\d.-]+/g, '') + "'&$format=json";
                _this.serviceRequestProvider.getServiceRequest(seoUrl, null).subscribe(function (p) {
                    if (barcodeData.cancelled == true) {
                        _this.utils.loadingDismiss();
                        return false;
                    }
                    _this.utils.loadingDismiss();
                    if (p['value'].length > 0) {
                        _this.selectedLocale = p['value'][0];
                    }
                    else {
                        _this.utils.toastMessage(barcodeData.text.replace(/[^\d.-]+/g, '') + ' barkodlu mahal Bulunamadı...');
                        _this.selectedLocale = null;
                    }
                }, function (error) {
                    _this.utils.loadingDismiss();
                });
            }
            else {
                barcodeData.text = barcodeData.text.replace('MECARD:N:,', '').replace(';ADR:;;', '');
                var mahalKodu = barcodeData.text.indexOf(' ') > -1 ? barcodeData.text.split(' ')[0] : barcodeData.text;
                var seoUrl = "HelpDeskFMS_Module_Mahal?$filter=MahalKodu eq '" + mahalKodu + "'&$format=json";
                var message = '<b>Aranan : ' + mahalKodu + '</b>' + '<br>' + 'Mahal Listesi Sorgulanıyor...';
                _this.utils.loadingPresent(message);
                _this.serviceRequestProvider.getServiceRequest(seoUrl, null).subscribe(function (p) {
                    if (barcodeData.cancelled == true) {
                        _this.utils.loadingDismiss();
                        return false;
                    }
                    _this.utils.loadingDismiss();
                    if (p['value'].length > 0) {
                        _this.selectedLocale = p['value'][0];
                    }
                    else {
                        _this.utils.toastMessage('Mahal Bulunamadı...');
                        _this.selectedLocale = null;
                    }
                }, function (error) {
                    _this.utils.loadingDismiss();
                });
            }
        })
            .catch(function (err) {
            console.log('Error', err);
        });
    };
    SlaRequestPage.prototype.clearLocale = function () {
        var me = this;
        this.utils.doConfirm('Mahal Seçimi', 'Seçimi kaldırmak istediğinizden emin misiniz ?', function () {
            me.selectedLocale = null;
        });
    };
    SlaRequestPage.prototype.selectLocale = function () {
        var _this = this;
        this.myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__locale_list_locale_list__["a" /* LocaleListPage */], {});
        this.myModal.onDidDismiss(function (data) {
            if (data)
                _this.selectedLocale = data;
        });
        this.myModal.present();
    };
    SlaRequestPage.prototype.slaTalebi = function () {
        var me = this;
        var seoUrl = 'HelpDeskFMS_Module_BackOfficeMaster';
        var body = {
            'odata.type': 'XafDataService.HelpDeskFMS_Module_WebSLA',
            'TalepEden@odata.bind': this.apiUrl + "HelpDeskFMS_Module_Kullanici(guid'" + this.userInfo['Oid'] + "')",
            Aciklama: this.aciklama,
            SlaOlustumu: false,
            Tarih: this.tarih.substring(0, 11) + this.saat.substring(11)
        };
        if (this.selectedLocale) {
            body['IlgiliMahal@odata.bind'] = this.apiUrl + "HelpDeskFMS_Module_Mahal(guid'" + this.selectedLocale['Oid'] + "')";
        }
        if (this.aciklama && this.aciklama.length > 0 && this.selectedLocale) {
            var message = 'SLA Talebi oluşturulsun mu ?';
            this.utils.doConfirm('SLA Talebi', message, function () {
                me.utils.loadingPresent('Lütfen Bekleyiniz...');
                me.serviceRequestProvider.postServiceRequest(seoUrl, body).subscribe(function (p) {
                    var oid = p['oid'];
                    me.utils.loadingDismiss();
                    me.utils.doAlertConfirm('İşlem başarılı...', function () {
                        me.selectedLocale = null;
                        me.aciklama = '';
                        if (me.base64PostImage.length > 0) {
                            me.utils.loadingPresent('Fotoğraflar Aktarılıyor...');
                            var i = 0;
                            while (i < me.base64PostImage.length) {
                                var body_1 = {
                                    'IlgiliServisIstegi@odata.bind': me.apiUrl + "HelpDeskFMS_Module_ServisIstegi(guid'" + oid + "')",
                                    B64: me.base64PostImage[i].replace(me.base64Format, '')
                                };
                                me.serviceRequestProvider.sendPhotos(body_1, true).subscribe(function (p) {
                                }, function (error) {
                                    me.utils.loadingDismiss();
                                    console.log(error);
                                });
                                if (i == (me.base64PostImage.length - 1)) {
                                    me.utils.loadingDismiss();
                                    me.navCtrl.pop();
                                    me.utils.processOK();
                                }
                                i++;
                            }
                        }
                        else {
                            me.navCtrl.pop();
                            me.utils.processOK();
                        }
                    });
                }, function (error) {
                    me.utils.loadingDismiss();
                    //me.utils.doAlert("Bağlantınızı kontrol ediniz...");
                });
            });
        }
        else {
            this.utils.doAlert('SLA oluşturmak için bir mahal seçmeli ve açıklama alanını doldurmalısınız!');
        }
    };
    SlaRequestPage.prototype.openCamera = function () {
        var me = this;
        this.utils.openCamera(function (imageData) {
            me.base64Image.push(me.base64Format + imageData);
            me.base64PostImage.push(me.base64Format + imageData);
        });
    };
    SlaRequestPage.prototype.imageSlider = function (imageIndex) {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__image_slider_image_slider__["a" /* ImageSliderPage */], {
            base64Image: this.base64PostImage,
            imageIndex: imageIndex
        });
        myModal.present();
    };
    SlaRequestPage.prototype.removeImage = function (imageIndex) {
        var me = this;
        this.utils.doConfirm('Fotoğraf Sil', 'Fotoğrafı silmek istediğinizden emin misiniz ?', function () {
            me.utils.removeImage(me.base64Image, imageIndex);
            me.utils.removeImage(me.base64PostImage, imageIndex);
        });
    };
    SlaRequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sla-request',template:/*ion-inline-start:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/sla-request/sla-request.html"*/'<!--\n  Generated template for the SlaRequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n		<ion-title>SLA Talebi</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="sla-request-card center">\n		<a class="companyInfo" href="mailto:{{ userInfo.EPosta }}">\n			<img class="banner" src="{{userInfo && userInfo.cinsiyet===0 ? \'../../assets/imgs/boss.png\' : \'../../assets/imgs/woman.png\'}}" />\n		</a>\n		<a class="companyInfo" href="mailto:{{ userInfo.EPosta }}">\n			<img class="email" src="../../assets/imgs/at.png" />\n		</a>\n\n		<p><b>{{ userInfo!=null ? userInfo.adi : \'\' }} {{ userInfo.soyadi!=null ? userInfo.soyadi : \'\' }}</b></p>\n		<p><b style="color: #666 !important">{{ userInfo.unvan!=null ? userInfo.unvan.RolAdi : \'\' }}</b></p>\n	</div>\n	<div class="sla-request-card">\n		<ion-row>\n			<ion-col style="max-width: calc(70% - 20px)">\n				<ion-item class="date">\n					<ion-label class="date-label">\n						<img class="date-img" src="../../assets/imgs/calendar.png" />\n					</ion-label>\n					<ion-datetime class="date" displayFormat="D MMM DDDD, YYYY" [(ngModel)]="tarih" min="2002" max="2032" [disabled]="true" dayNames="{{dayNames}}" monthShortNames="{{monthShortNames}}" monthNames="{{monthNames}}" doneText="Tamam" cancelText="İptal"> </ion-datetime>\n				</ion-item>\n			</ion-col>\n			<ion-col>\n				<ion-item class="date">\n					<ion-label class="date-label">\n						<img class="date-img" src="../../assets/imgs/time.png" />\n					</ion-label>\n					<ion-datetime class="date" displayFormat="HH:mm" [(ngModel)]="saat" doneText="Tamam" cancelText="İptal" [disabled]="true"> </ion-datetime>\n				</ion-item>\n			</ion-col>\n		</ion-row>\n	</div>\n	<div class="sla-request-card">\n		<ion-item class="sla-talep-card">\n			<div item-start>\n				<img class="addPhotoImg" src="../../assets/imgs/qrcode2.png" (click)="scanBarcode()" />\n			</div>\n			<p *ngIf="!selectedLocale" class="addPhotoP" style="color: #666 !important" (click)="selectLocale()">Mahal seçmek için tıklayınız yada simgeye dokunarak mahal kodu okutunuz!</p>\n			<p *ngIf="selectedLocale" class="addPhotoP" style="color: #666 !important" (click)="selectLocale()">\n				<span>\n					<b style="text-decoration: underline">{{ selectedLocale!=null ? selectedLocale.MahalKodu : \'\' }}</b> </span\n				><br />\n				<span> {{ selectedLocale!=null ? selectedLocale.MahalAdi : \'\' }} </span>\n			</p>\n			<ion-icon *ngIf="selectedLocale" class="locale-delete-button" name="close" (click)="clearLocale()"></ion-icon>\n		</ion-item>\n	</div>\n	<div class="sla-request-card" *ngIf="false">\n		<ion-item class="addPhoto">\n			<div item-start>\n				<img class="addPhotoImg" src="../../assets/imgs/addPhoto2.png" (click)="openCamera()" />\n			</div>\n			<div>\n				<p *ngIf="base64PostImage.length===0" class="addPhotoP" style="color: #565655 !important">Fotoğraf eklemek için <br />simgeye dokun...</p>\n				<p *ngIf="base64PostImage.length>0" class="addPhotoP" style="color: #565655 !important">Fotoğrafı silmek için <br />üzerine basılı tutun...</p>\n			</div>\n		</ion-item>\n		<ion-slides class="image-slider" slidesPerView="3">\n			<ion-slide *ngFor="let image of base64PostImage; let i=index">\n				<img [src]="sanitizer.bypassSecurityTrustUrl(image)" (click)="imageSlider(i)" (press)="removeImage(i)" />\n			</ion-slide>\n		</ion-slides>\n	</div>\n	<div class="sla-request-card">\n		<ion-label class="aciklama">Açıklama</ion-label>\n		<ion-textarea placeholder="Açıklama Giriniz..." [(ngModel)]="aciklama"></ion-textarea>\n	</div>\n\n	<!-- <div class="card round">\n    <ion-list no-margin class="ionListCard">\n      <ion-item>\n        <p ion-text><b style="color: #8a0f23;">Talep Eden : </b> {{ userInfo!=null ? userInfo.adi : \'\' }}\n          {{ userInfo.soyadi!=null ? userInfo.soyadi : \'\' }}</p>\n        <p ion-text><b style="color: #8a0f23;">Birim : </b> {{ userInfo.unvan!=null ? userInfo.unvan.RolAdi : \'\' }}</p>\n        <p ion-text stacked><b style="color: #8a0f23;">E-Posta :</b>\n          <a class="companyInfo" href="mailto:{{ userInfo.EPosta }}">\n            {{ userInfo.EPosta }}\n          </a>\n        </p>\n      </ion-item>\n    </ion-list>\n  </div> -->\n	<!-- <ion-item>\n    <ion-label>Tarih</ion-label>\n    <ion-datetime displayFormat="D MMM DDDD, YYYY" [(ngModel)]="tarih" min="2002" max="2032" [disabled]="true"\n      dayNames="{{dayNames}}" monthShortNames="{{monthShortNames}}" monthNames="{{monthNames}}" doneText="Tamam"\n      cancelText="İptal"></ion-datetime>\n  </ion-item> -->\n	<!-- <ion-item>\n    <ion-label>Saat</ion-label>\n    <ion-datetime displayFormat="HH:mm" [(ngModel)]="saat" doneText="Tamam" cancelText="İptal" [disabled]="true">\n    </ion-datetime>\n  </ion-item> -->\n	<!-- <div class="item item-input" style="background-color: white; padding: 0px;">\n    <div style="padding : 0px 0 0 15px; height: 36px;margin-top: 9px;">\n      <span class="input-label" style="font-size:1.6rem;color:#999;">İlgili Mahal</span>\n      <span class="input-label" style="font-size:1.6rem;margin-left: 15px;color:dimgray;" (click)="selectLocale()">Mahal\n        Seçiniz...</span>\n      <img class="slaRequestBarcode addPhotoImg" src="../../assets/imgs/qrcode2.png" (click)="scanBarcode()">\n    </div>\n    <div class="item item-input item-icon-right listDesign" (click)="clearLocale()" *ngIf="selectedLocale!=null">\n      <span class="input-label" style="height: 35px;margin-top: 6px;margin-left: -25px;font-size: 14px;color:dimgray;">\n        <b style="text-decoration: underline;">{{ selectedLocale!=null ? selectedLocale.MahalKodu : \'\' }}</b>\n      </span><br>\n      <span class="input-label" style="height: 35px;margin-top: 6px;margin-left: -25px;font-size: 14px;color:dimgray;">\n        {{ selectedLocale!=null ? selectedLocale.MahalAdi : \'\' }}\n      </span>\n    </div>\n  </div> -->\n	<!-- <ion-item>\n    <ion-label stacked>Açıklama</ion-label>\n    <ion-textarea [(ngModel)]="aciklama"></ion-textarea>\n  </ion-item> -->\n</ion-content>\n<ion-footer>\n	<ion-toolbar>\n		<button ion-button icon-start full class="onayButton" (click)="slaTalebi()">\n			<ion-icon name="ios-help-buoy"></ion-icon>\n			SLA Talebi\n		</button>\n	</ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/sla-request/sla-request.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__utils_utils__["a" /* Utils */], __WEBPACK_IMPORTED_MODULE_5__providers_service_request_service_request__["a" /* ServiceRequestProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_2__utils_storageData__["a" /* StorageData */]]
        }),
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])('apiUrl')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__utils_storageData__["a" /* StorageData */], __WEBPACK_IMPORTED_MODULE_4__utils_utils__["a" /* Utils */], __WEBPACK_IMPORTED_MODULE_5__providers_service_request_service_request__["a" /* ServiceRequestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["c" /* DomSanitizer */], Object])
    ], SlaRequestPage);
    return SlaRequestPage;
}());

//# sourceMappingURL=sla-request.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_storageData__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_request_service_request__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, app, storage, serviceRequestProvider, utils) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.storage = storage;
        this.serviceRequestProvider = serviceRequestProvider;
        this.utils = utils;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.goPage = function () {
        var _this = this;
        this.utils.loadingPresent("Çıkış Yapılıyor...");
        this.storage.get("userInfo", function (userInfo) {
            var seourl = "HelpDeskFMS_Module_Kullanici" + "(guid'" + userInfo[0]["Oid"] + "')";
            var body = {
                "MobilUUID": null,
                "OturumAcilanCihaz": null
            };
            _this.serviceRequestProvider.putServiceRequest(seourl, body).subscribe(function (p) {
                _this.utils.loadingDismiss();
                _this.storage.remove("userInfo");
                _this.storage.remove('my_token');
                _this.storage.clear();
                window.localStorage.clear();
                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
            }, function (error) {
                _this.utils.loadingDismiss();
                /*this.utils.doAlert("Bağlantınızı kontrol ediniz...");*/
                /*this.file.listDir(this.file.cacheDirectory,'').then((result)=>{
                  for(let file of result){
                    this.file.removeFile(this.file.cacheDirectory, file.name) ;
                    this.file.removeRecursively(this.file.cacheDirectory, file.name).catch(err => {});
                  }
                }) ;*/
                _this.storage.remove("userInfo");
                _this.storage.remove('my_token');
                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
            });
        });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/settings/settings.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Ayarlar</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <button ion-button full class="exitButton" (click)="goPage()">Çıkış</button>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/settings/settings.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_service_request_service_request__["a" /* ServiceRequestProvider */], __WEBPACK_IMPORTED_MODULE_4__utils_utils__["a" /* Utils */], __WEBPACK_IMPORTED_MODULE_2__utils_storageData__["a" /* StorageData */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__utils_storageData__["a" /* StorageData */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_request_service_request__["a" /* ServiceRequestProvider */],
            __WEBPACK_IMPORTED_MODULE_4__utils_utils__["a" /* Utils */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(522);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return USER; });
var GlobalVariables = /** @class */ (function () {
    function GlobalVariables() {
        this.notificationIsActive = false;
    }
    return GlobalVariables;
}());

var USER = { userInfo: "" };
//# sourceMappingURL=global-variables.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_create_sample_portage_create_sample_portage__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sla_list_sla_list__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(845);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_app_version__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_pipes_module__ = __webpack_require__(850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_assigning_person_assigning_person__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_extending_sla_extending_sla__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_image_slider_image_slider__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_locale_list_locale_list__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_service_request_details_service_request_details__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_service_request_service_request__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_settings_settings__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_sla_request_sla_request__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_solving_request_solving_request__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_sample_portage_sample_portage__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_chat_chat__ = __webpack_require__(855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_info_popover_info_popover__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_sample_portage_popover_sample_portage_popover__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_status_bar__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_components_module__ = __webpack_require__(856);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_addition22_addition22__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_interceptor_interceptor__ = __webpack_require__(858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_service_request_service_request__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// import { StreamingMedia } from '@ionic-native/streaming-media/ngx';


//import { IonicImageViewerModule } from 'ionic-img-viewer';





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_22__pages_settings_settings__["a" /* SettingsPage */], __WEBPACK_IMPORTED_MODULE_28__pages_info_popover_info_popover__["a" /* InfoPopoverPage */], __WEBPACK_IMPORTED_MODULE_21__pages_service_request_service_request__["a" /* ServiceRequestPage */], __WEBPACK_IMPORTED_MODULE_20__pages_service_request_details_service_request_details__["a" /* ServiceRequestDetailsPage */], __WEBPACK_IMPORTED_MODULE_24__pages_solving_request_solving_request__["a" /* SolvingRequestPage */], __WEBPACK_IMPORTED_MODULE_15__pages_assigning_person_assigning_person__["a" /* AssigningPersonPage */], __WEBPACK_IMPORTED_MODULE_16__pages_extending_sla_extending_sla__["a" /* ExtendingSlaPage */], __WEBPACK_IMPORTED_MODULE_17__pages_image_slider_image_slider__["a" /* ImageSliderPage */], __WEBPACK_IMPORTED_MODULE_23__pages_sla_request_sla_request__["a" /* SlaRequestPage */], __WEBPACK_IMPORTED_MODULE_18__pages_locale_list_locale_list__["a" /* LocaleListPage */], __WEBPACK_IMPORTED_MODULE_33__pages_addition22_addition22__["a" /* Addition22Page */], __WEBPACK_IMPORTED_MODULE_26__pages_sample_portage_sample_portage__["a" /* SamplePortagePage */], __WEBPACK_IMPORTED_MODULE_29__pages_sample_portage_popover_sample_portage_popover__["a" /* SamplePortagePopoverPage */], __WEBPACK_IMPORTED_MODULE_11__pages_sla_list_sla_list__["a" /* SlaListPage */], __WEBPACK_IMPORTED_MODULE_10__pages_create_sample_portage_create_sample_portage__["a" /* CreateSamplePortagePage */], __WEBPACK_IMPORTED_MODULE_27__pages_chat_chat__["a" /* Chat */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                //IonicImageViewerModule,
                __WEBPACK_IMPORTED_MODULE_32__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {
                    mode: 'md',
                    platforms: {
                        ios: {
                            statusbarPadding: true,
                            tabsHideOnSubPages: true
                        }
                    },
                    scrollAssist: false
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14__pipes_pipes_module__["a" /* PipesModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_22__pages_settings_settings__["a" /* SettingsPage */], __WEBPACK_IMPORTED_MODULE_28__pages_info_popover_info_popover__["a" /* InfoPopoverPage */], __WEBPACK_IMPORTED_MODULE_21__pages_service_request_service_request__["a" /* ServiceRequestPage */], __WEBPACK_IMPORTED_MODULE_20__pages_service_request_details_service_request_details__["a" /* ServiceRequestDetailsPage */], __WEBPACK_IMPORTED_MODULE_24__pages_solving_request_solving_request__["a" /* SolvingRequestPage */], __WEBPACK_IMPORTED_MODULE_15__pages_assigning_person_assigning_person__["a" /* AssigningPersonPage */], __WEBPACK_IMPORTED_MODULE_16__pages_extending_sla_extending_sla__["a" /* ExtendingSlaPage */], __WEBPACK_IMPORTED_MODULE_17__pages_image_slider_image_slider__["a" /* ImageSliderPage */], __WEBPACK_IMPORTED_MODULE_23__pages_sla_request_sla_request__["a" /* SlaRequestPage */], __WEBPACK_IMPORTED_MODULE_18__pages_locale_list_locale_list__["a" /* LocaleListPage */], __WEBPACK_IMPORTED_MODULE_33__pages_addition22_addition22__["a" /* Addition22Page */], __WEBPACK_IMPORTED_MODULE_26__pages_sample_portage_sample_portage__["a" /* SamplePortagePage */], __WEBPACK_IMPORTED_MODULE_29__pages_sample_portage_popover_sample_portage_popover__["a" /* SamplePortagePopoverPage */], __WEBPACK_IMPORTED_MODULE_11__pages_sla_list_sla_list__["a" /* SlaListPage */], __WEBPACK_IMPORTED_MODULE_10__pages_create_sample_portage_create_sample_portage__["a" /* CreateSamplePortagePage */], __WEBPACK_IMPORTED_MODULE_27__pages_chat_chat__["a" /* Chat */]],
            providers: [
                // Konya
                // { provide: "apiUrl", useValue: "https://odata.konyash.com/Dataservice.svc/" },
                // { provide: "apiUrlGoogleTest", useValue: "https://portal.konyash.com/MYM.ashx" },
                // { provide: "appVersion", useValue: "1.6.5" },
                // { provide: "appLink", useValue: "https://portal.konyash.com/android.apk" },
                // Manisa
                // { provide: "apiUrl", useValue: "https://odata.manisash.com/Dataservice.svc/" },
                // { provide: "apiUrlGoogleTest", useValue: "https://portal.manisash.com/MYM.ashx" },
                // { provide: "appVersion", useValue: "1.6.5" },
                // { provide: "appLink", useValue: "https://portal.manisash.com/android.apk" },
                // Kayseri
                // { provide: "apiUrl", useValue: "https://odata.kayserish.com/Dataservice.svc/" },
                // { provide: "apiUrlGoogleTest", useValue: "https://portal.kayserish.com/MYM.ashx" },
                // { provide: "appVersion", useValue: "1.6.5" },
                // { provide: "appLink", useValue: "https://portal.kayserish.com/android.apk" },
                // Kocaeli
                { provide: "apiUrl", useValue: "https://odata.kocaelish.com/Dataservice.svc/" },
                { provide: "apiUrlGoogleTest", useValue: "https://portal.kocaelish.com/MYM.ashx" },
                { provide: "appVersion", useValue: "1.6.5" },
                { provide: "appLink", useValue: "https://portal.kocaelish.com/android.apk" },
                // Etlik
                // { provide: 'apiUrl', useValue: 'https://odata.etliksh.com/Dataservice.svc/' },
                // { provide: 'apiUrlGoogleTest', useValue: 'https://portal.etliksh.com/MYM.ashx' },
                // { provide: 'appVersion', useValue: '1.6.5' },
                // { provide: 'appLink', useValue: 'https://portal.etliksh.com/android.apk' },
                // İzmir
                // { provide: "apiUrl", useValue: "https://odata.izmirsh.com/Dataservice.svc/" },
                // { provide: "apiUrlGoogleTest", useValue: "https://portal.izmirsh.com/MYM.ashx" },
                // { provide: "appVersion", useValue: "1.6.5" },
                // { provide: "appLink", useValue: "https://portal.izmirsh.com/android.apk" },
                // Kütahya
                // { provide: 'apiUrl', useValue: 'https://odata.kutahyash.com/Dataservice.svc/' },
                // { provide: 'apiUrlGoogleTest', useValue: 'https://portal.kutahyash.com/MYM.ashx' },
                // { provide: 'appVersion', useValue: '1.6.5' },
                // { provide: 'appLink', useValue: 'https://portal.kutahyash.com/android.apk' },
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8_cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
                /*StreamingMedia,*/
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["f" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_34__providers_interceptor_interceptor__["a" /* InterceptorProvider */], multi: true },
                __WEBPACK_IMPORTED_MODULE_35__providers_service_request_service_request__["a" /* ServiceRequestProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_34__providers_interceptor_interceptor__["a" /* InterceptorProvider */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_app_version__["a" /* AppVersion */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 843:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 364,
	"./af.js": 364,
	"./ar": 365,
	"./ar-dz": 366,
	"./ar-dz.js": 366,
	"./ar-kw": 367,
	"./ar-kw.js": 367,
	"./ar-ly": 368,
	"./ar-ly.js": 368,
	"./ar-ma": 369,
	"./ar-ma.js": 369,
	"./ar-sa": 370,
	"./ar-sa.js": 370,
	"./ar-tn": 371,
	"./ar-tn.js": 371,
	"./ar.js": 365,
	"./az": 372,
	"./az.js": 372,
	"./be": 373,
	"./be.js": 373,
	"./bg": 374,
	"./bg.js": 374,
	"./bm": 375,
	"./bm.js": 375,
	"./bn": 376,
	"./bn-bd": 377,
	"./bn-bd.js": 377,
	"./bn.js": 376,
	"./bo": 378,
	"./bo.js": 378,
	"./br": 379,
	"./br.js": 379,
	"./bs": 380,
	"./bs.js": 380,
	"./ca": 381,
	"./ca.js": 381,
	"./cs": 382,
	"./cs.js": 382,
	"./cv": 383,
	"./cv.js": 383,
	"./cy": 384,
	"./cy.js": 384,
	"./da": 385,
	"./da.js": 385,
	"./de": 386,
	"./de-at": 387,
	"./de-at.js": 387,
	"./de-ch": 388,
	"./de-ch.js": 388,
	"./de.js": 386,
	"./dv": 389,
	"./dv.js": 389,
	"./el": 390,
	"./el.js": 390,
	"./en-au": 391,
	"./en-au.js": 391,
	"./en-ca": 392,
	"./en-ca.js": 392,
	"./en-gb": 393,
	"./en-gb.js": 393,
	"./en-ie": 394,
	"./en-ie.js": 394,
	"./en-il": 395,
	"./en-il.js": 395,
	"./en-in": 396,
	"./en-in.js": 396,
	"./en-nz": 397,
	"./en-nz.js": 397,
	"./en-sg": 398,
	"./en-sg.js": 398,
	"./eo": 399,
	"./eo.js": 399,
	"./es": 400,
	"./es-do": 401,
	"./es-do.js": 401,
	"./es-mx": 402,
	"./es-mx.js": 402,
	"./es-us": 403,
	"./es-us.js": 403,
	"./es.js": 400,
	"./et": 404,
	"./et.js": 404,
	"./eu": 405,
	"./eu.js": 405,
	"./fa": 406,
	"./fa.js": 406,
	"./fi": 407,
	"./fi.js": 407,
	"./fil": 408,
	"./fil.js": 408,
	"./fo": 409,
	"./fo.js": 409,
	"./fr": 410,
	"./fr-ca": 411,
	"./fr-ca.js": 411,
	"./fr-ch": 412,
	"./fr-ch.js": 412,
	"./fr.js": 410,
	"./fy": 413,
	"./fy.js": 413,
	"./ga": 414,
	"./ga.js": 414,
	"./gd": 415,
	"./gd.js": 415,
	"./gl": 416,
	"./gl.js": 416,
	"./gom-deva": 417,
	"./gom-deva.js": 417,
	"./gom-latn": 418,
	"./gom-latn.js": 418,
	"./gu": 419,
	"./gu.js": 419,
	"./he": 420,
	"./he.js": 420,
	"./hi": 421,
	"./hi.js": 421,
	"./hr": 422,
	"./hr.js": 422,
	"./hu": 423,
	"./hu.js": 423,
	"./hy-am": 424,
	"./hy-am.js": 424,
	"./id": 425,
	"./id.js": 425,
	"./is": 426,
	"./is.js": 426,
	"./it": 427,
	"./it-ch": 428,
	"./it-ch.js": 428,
	"./it.js": 427,
	"./ja": 429,
	"./ja.js": 429,
	"./jv": 430,
	"./jv.js": 430,
	"./ka": 431,
	"./ka.js": 431,
	"./kk": 432,
	"./kk.js": 432,
	"./km": 433,
	"./km.js": 433,
	"./kn": 434,
	"./kn.js": 434,
	"./ko": 435,
	"./ko.js": 435,
	"./ku": 436,
	"./ku.js": 436,
	"./ky": 437,
	"./ky.js": 437,
	"./lb": 438,
	"./lb.js": 438,
	"./lo": 439,
	"./lo.js": 439,
	"./lt": 440,
	"./lt.js": 440,
	"./lv": 441,
	"./lv.js": 441,
	"./me": 442,
	"./me.js": 442,
	"./mi": 443,
	"./mi.js": 443,
	"./mk": 444,
	"./mk.js": 444,
	"./ml": 445,
	"./ml.js": 445,
	"./mn": 446,
	"./mn.js": 446,
	"./mr": 447,
	"./mr.js": 447,
	"./ms": 448,
	"./ms-my": 449,
	"./ms-my.js": 449,
	"./ms.js": 448,
	"./mt": 450,
	"./mt.js": 450,
	"./my": 451,
	"./my.js": 451,
	"./nb": 452,
	"./nb.js": 452,
	"./ne": 453,
	"./ne.js": 453,
	"./nl": 454,
	"./nl-be": 455,
	"./nl-be.js": 455,
	"./nl.js": 454,
	"./nn": 456,
	"./nn.js": 456,
	"./oc-lnc": 457,
	"./oc-lnc.js": 457,
	"./pa-in": 458,
	"./pa-in.js": 458,
	"./pl": 459,
	"./pl.js": 459,
	"./pt": 460,
	"./pt-br": 461,
	"./pt-br.js": 461,
	"./pt.js": 460,
	"./ro": 462,
	"./ro.js": 462,
	"./ru": 463,
	"./ru.js": 463,
	"./sd": 464,
	"./sd.js": 464,
	"./se": 465,
	"./se.js": 465,
	"./si": 466,
	"./si.js": 466,
	"./sk": 467,
	"./sk.js": 467,
	"./sl": 468,
	"./sl.js": 468,
	"./sq": 469,
	"./sq.js": 469,
	"./sr": 470,
	"./sr-cyrl": 471,
	"./sr-cyrl.js": 471,
	"./sr.js": 470,
	"./ss": 472,
	"./ss.js": 472,
	"./sv": 473,
	"./sv.js": 473,
	"./sw": 474,
	"./sw.js": 474,
	"./ta": 475,
	"./ta.js": 475,
	"./te": 476,
	"./te.js": 476,
	"./tet": 477,
	"./tet.js": 477,
	"./tg": 478,
	"./tg.js": 478,
	"./th": 479,
	"./th.js": 479,
	"./tk": 480,
	"./tk.js": 480,
	"./tl-ph": 481,
	"./tl-ph.js": 481,
	"./tlh": 482,
	"./tlh.js": 482,
	"./tr": 483,
	"./tr.js": 483,
	"./tzl": 484,
	"./tzl.js": 484,
	"./tzm": 485,
	"./tzm-latn": 486,
	"./tzm-latn.js": 486,
	"./tzm.js": 485,
	"./ug-cn": 487,
	"./ug-cn.js": 487,
	"./uk": 488,
	"./uk.js": 488,
	"./ur": 489,
	"./ur.js": 489,
	"./uz": 490,
	"./uz-latn": 491,
	"./uz-latn.js": 491,
	"./uz.js": 490,
	"./vi": 492,
	"./vi.js": 492,
	"./x-pseudo": 493,
	"./x-pseudo.js": 493,
	"./yo": 494,
	"./yo.js": 494,
	"./zh-cn": 495,
	"./zh-cn.js": 495,
	"./zh-hk": 496,
	"./zh-hk.js": 496,
	"./zh-mo": 497,
	"./zh-mo.js": 497,
	"./zh-tw": 498,
	"./zh-tw.js": 498
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 843;

/***/ }),

/***/ 844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceList; });
var ServiceList = [
    {
        "odata.type": "XafDataService.HelpDeskFMS_Module_MBO",
        "oid": "cba6ea21-e7ad-4dbb-96c9-09381a0a76b1",
        "ServisAdi": "Yer ve Bahçe Bakım Hizmetleri",
        "KapatmaTuru": "Barkod"
    },
    {
        "odata.type": "XafDataService.HelpDeskFMS_Module_RHizmetA",
        "oid": "616f8864-aeae-419f-bc87-0c03d56c0868",
        "ServisAdi": "Yemek Hizmetleri",
        "KapatmaTuru": "Barkod"
    },
    {
        "odata.type": "XafDataService.HelpDeskFMS_Module_MBO",
        "oid": "2860870f-8e50-4add-ad15-25a26fd5584b",
        "ServisAdi": "Ortak Hizmetler Yönetimi Hizmeti",
        "KapatmaTuru": "Barkod"
    },
    {
        "odata.type": "XafDataService.HelpDeskFMS_Module_MBO",
        "oid": "9c84775f-969c-4936-81d3-321aa53eacd4",
        "ServisAdi": "FMCO Genel",
        "KapatmaTuru": "Barkod"
    },
    {
        "odata.type": "XafDataService.HelpDeskFMS_Module_MBO",
        "oid": "72389f16-c817-41a4-a9ed-40ca08aef86e",
        "ServisAdi": "Olağanüstü Bakım ve Onarım Hizmeti",
        "KapatmaTuru": "Barkod"
    },
    {
        "odata.type": "XafDataService.HelpDeskFMS_Module_MBO",
        "oid": "641cf986-6e29-4dc1-a1a1-55bc628d9236",
        "ServisAdi": "Diğer Tıbbi Ekipman Destek Hizmeti",
        "KapatmaTuru": "Barkod"
    },
    {
        "odata.type": "XafDataService.HelpDeskFMS_Module_MBO",
        "oid": "6479b99c-f159-4ee9-8cbd-57e5a7d33775",
        "ServisAdi": "Mefruşat Hizmeti",
        "KapatmaTuru": "Barkod"
    },
    {
        "odata.type": "XafDataService.HelpDeskFMS_Module_Laboratuar",
        "oid": "83e58352-3162-4a3a-808c-6b7f58978cf7",
        "ServisAdi": "Laboratuar Hizmetleri",
        "KapatmaTuru": "Barkod"
    },
    {
        "odata.type": "XafDataService.HelpDeskFMS_Module_RHizmetA",
        "oid": "ff9f521c-5f58-4e0a-9ec7-6db3966ebaef",
        "ServisAdi": "Çamaşır ve Çamaşırhane Hizmetleri",
        "KapatmaTuru": "Barkod"
    },
    {
        "odata.type": "XafDataService.HelpDeskFMS_Module_MBO",
        "oid": "4641449f-b670-43f2-a50f-79209ac98273",
        "ServisAdi": "Yardım Masası Hizmetleri",
        "KapatmaTuru": "Barkod"
    },
    {
        "odata.type": "XafDataService.HelpDeskFMS_Module_Rehabilitasyon",
        "oid": "fcabfbf8-23e8-4b0f-89ec-7c782b3b201d",
        "ServisAdi": "Rehabilitasyon Hizmetleri",
        "KapatmaTuru": "Barkod"
    },
    {
        "odata.type": "XafDataService.HelpDeskFMS_Module_MBO",
        "oid": "a9ab5a55-9991-4c5c-822d-89ae31c60cd8",
        "ServisAdi": "HBYS Hizmeti",
        "KapatmaTuru": "Barkod"
    },
    {
        "odata.type": "XafDataService.HelpDeskFMS_Module_MBO",
        "oid": "a0a0661e-d15d-449c-9f72-8b0d72bec229",
        "ServisAdi": "İDARE",
        "KapatmaTuru": "Barkod"
    },
    {
        "odata.type": "XafDataService.HelpDeskFMS_Module_MBO",
        "oid": "d6a7caff-2269-4366-a395-9abc3edf4f82",
        "ServisAdi": "HYRRT Hizmetleri",
        "KapatmaTuru": "Barkod"
    },
    {
        "odata.type": "XafDataService.HelpDeskFMS_Module_RHizmetA",
        "oid": "09481b9c-f6bb-47d0-aa7c-9e56f68899cd",
        "ServisAdi": "ISS FMS Yönetim",
        "KapatmaTuru": "Barkod"
    },
    {
        "odata.type": "XafDataService.HelpDeskFMS_Module_MBO",
        "oid": "117e1e4d-2ea9-4640-a3a9-a7fb190094b3",
        "ServisAdi": "Güvenlik Hizmetleri",
        "KapatmaTuru": "Barkod"
    },
    {
        "odata.type": "XafDataService.HelpDeskFMS_Module_MBO",
        "oid": "8031bc22-b778-4bcf-a251-b06b2b7c723b",
        "ServisAdi": "İlaçlama Hizmetleri",
        "KapatmaTuru": "Barkod"
    },
    {
        "odata.type": "XafDataService.HelpDeskFMS_Module_Goruntuleme",
        "oid": "f9787bb9-f7b5-4572-a195-b71cbae0b4c2",
        "ServisAdi": "Görüntüleme",
        "KapatmaTuru": "Barkod"
    },
    {
        "odata.type": "XafDataService.HelpDeskFMS_Module_MBO",
        "oid": "e43ce2e4-5bec-46e1-8ad2-bc8ed8eafe6a",
        "ServisAdi": "Servis Masası",
        "KapatmaTuru": "Barkod"
    },
    {
        "odata.type": "XafDataService.HelpDeskFMS_Module_MBO",
        "oid": "b4a340bf-9e9b-4537-8967-c4290a41e57e",
        "ServisAdi": "Hizmet Kapsamı Dışında Kalan Servisler",
        "KapatmaTuru": "Barkod"
    },
    {
        "odata.type": "XafDataService.HelpDeskFMS_Module_Sterilizasyon",
        "oid": "b4de54e2-b713-4e1d-94fb-d28b2cd14714",
        "ServisAdi": "Sterilizasyon ve Dezenfeksiyon Hizmetleri",
        "KapatmaTuru": "Barkod"
    },
    {
        "odata.type": "XafDataService.HelpDeskFMS_Module_MBO",
        "oid": "212c427e-53af-46d5-8b49-daa1975ba071",
        "ServisAdi": "Otopark Hizmetleri",
        "KapatmaTuru": "Barkod"
    },
    {
        "odata.type": "XafDataService.HelpDeskFMS_Module_RHizmetA",
        "oid": "e16e9c27-bba5-471a-8bab-e5a78c3f5aa9",
        "ServisAdi": "Atık Yönetim Hizmetleri",
        "KapatmaTuru": "Barkod"
    },
    {
        "odata.type": "XafDataService.HelpDeskFMS_Module_MBO",
        "oid": "e5dea5e6-5044-43de-bb12-f541067d497e",
        "ServisAdi": "Malzeme Yönetimi Hizmeti",
        "KapatmaTuru": "Barkod"
    },
    {
        "odata.type": "XafDataService.HelpDeskFMS_Module_MBO",
        "oid": "8b705392-0faf-40ea-bae1-f5a1a55defd5",
        "ServisAdi": "Bina ve Arazi Hizmetleri",
        "KapatmaTuru": "Barkod"
    },
    {
        "odata.type": "XafDataService.HelpDeskFMS_Module_MBO",
        "oid": "d5e13d47-3aa8-468a-8ae4-fca6d641d9a5",
        "ServisAdi": "Temizlik Hizmetleri",
        "KapatmaTuru": "Barkod"
    }
];
//# sourceMappingURL=service-list.js.map

/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_version__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_chat_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_utils__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_storageData__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__globalVariables_global_variables__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, appVersion, app, utils, firebase, toastCtrl, storage, chatService) {
        var _this = this;
        platform.ready().then(function () {
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
            if (storage.get('userInfo')) {
                __WEBPACK_IMPORTED_MODULE_11__globalVariables_global_variables__["b" /* USER */].userInfo = storage.get('userInfo')[0];
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */];
            }
            appVersion.getVersionNumber().then(function (res) {
                console.log(res);
                //localStorage.setItem("app_v", res);
            }, function (err) {
                console.log(err);
            });
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            //statusBar.overlaysWebView(true);
            statusBar.backgroundColorByHexString('#009688'); //008275
            splashScreen.hide();
            /*platform.registerBackButtonAction(() =>
            {
              utils.doConfirm("Uygulamadan Çık","Çıkmak istediğinizden emin misiniz ?",function () {
                platform.exitApp();
              })
            });*/
            /*firebase.getToken().then(token =>
              storage.set("token",token))
              .catch(err=> console.log(err));*/
            firebase.onNotification().subscribe(function (data) {
                if (data.wasTapped) {
                    console.log("Received in background");
                }
                else {
                    console.log("Received in foreground");
                }
                ;
            });
            if (platform.is('android')) {
                firebase.getToken().then(function (token) {
                    storage.set("token", token);
                    console.log(token);
                })
                    .catch(function (err) { return console.log(err); });
            }
            if (platform.is('ios')) {
                firebase.requestPushPermission().then(function (r) { return console.log('permission : ' + r); }).catch(function (e) { return console.log('permission : ' + e); });
                firebase.getToken().then(function (token) {
                    storage.set("token", token);
                    console.log(token);
                })
                    .catch(function (err) { return console.log(err); });
            }
        });
        // chatService.getMsgList().subscribe(res => {
        //  /* broadcaster.fireNativeEvent('chatMsg',{
        //     msgListCount:res.length
        //   }).then(() => console.log('success'));*/
        //     });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/app/app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_8__utils_utils__["a" /* Utils */], __WEBPACK_IMPORTED_MODULE_7__providers_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_9__utils_storageData__["a" /* StorageData */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_8__utils_utils__["a" /* Utils */], __WEBPACK_IMPORTED_MODULE_4_cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */], __WEBPACK_IMPORTED_MODULE_9__utils_storageData__["a" /* StorageData */], __WEBPACK_IMPORTED_MODULE_7__providers_chat_service__["a" /* ChatService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApprovalRuleList; });
var ApprovalRuleList = [
    { "value": 0, "name": "Herhangi Birisinin Onayı İle" },
    { "value": 1, "name": "Tümünün Onayı ile" }
];
//# sourceMappingURL=approval-rule-list.js.map

/***/ }),

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootCaseList; });
var RootCaseList = [
    { "value": 0, "name": "Talep Karşılandı" },
    { "value": 1, "name": "Ek Hizmet Gerekir" },
    { "value": 2, "name": "Hata Bulunamadı" },
    { "value": 3, "name": "Bakım Onarım Çalışması Olması*" },
    { "value": 4, "name": "İdarenin sözleşmeye uymaması*" },
    { "value": 5, "name": "Mücbir Sebep*" },
    { "value": 6, "name": "İdare Kaynaklı Hata*" },
    { "value": 7, "name": "3.taraf kaynaklı hata*" },
    { "value": 8, "name": "Diğer*" }
    /*{"value":8,"name":"EK-22 Kapsamında Değerlendirilmeli*"}*/
];
//# sourceMappingURL=root-case-list.js.map

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_by_order_by__ = __webpack_require__(851);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__badge_filter_badge_filter__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date_date__ = __webpack_require__(853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__percent_percent__ = __webpack_require__(854);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule_1 = PipesModule;
    PipesModule.forRoot = function () {
        return {
            ngModule: PipesModule_1,
            providers: [],
        };
    };
    var PipesModule_1;
    PipesModule = PipesModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__order_by_order_by__["a" /* OrderByPipe */],
                __WEBPACK_IMPORTED_MODULE_2__badge_filter_badge_filter__["a" /* BadgeFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_3__date_date__["a" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_4__percent_percent__["a" /* PercentPipe */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__order_by_order_by__["a" /* OrderByPipe */],
                __WEBPACK_IMPORTED_MODULE_2__badge_filter_badge_filter__["a" /* BadgeFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_3__date_date__["a" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_4__percent_percent__["a" /* PercentPipe */]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe_1 = OrderByPipe;
    OrderByPipe._orderByComparator = function (a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    };
    OrderByPipe.prototype.transform = function (input, _a) {
        var _b = _a[0], config = _b === void 0 ? '+' : _b;
        if (!Array.isArray(input))
            return input;
        if (!Array.isArray(config) || (Array.isArray(config) && config.length == 1)) {
            var propertyToCheck = !Array.isArray(config) ? config : config[0];
            var desc = propertyToCheck.substr(0, 1) == '-';
            //Basic array
            if (!propertyToCheck || propertyToCheck == '-' || propertyToCheck == '+') {
                return !desc ? input.sort() : input.sort().reverse();
            }
            else {
                var property = propertyToCheck.substr(0, 1) == '+' || propertyToCheck.substr(0, 1) == '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;
                return input.sort(function (a, b) {
                    return !desc
                        ? OrderByPipe_1._orderByComparator(a[property], b[property])
                        : -OrderByPipe_1._orderByComparator(a[property], b[property]);
                });
            }
        }
        else {
            //Loop over property of the array in order and sort
            return input.sort(function (a, b) {
                for (var i = 0; i < config.length; i++) {
                    var desc = config[i].substr(0, 1) == '-';
                    var property = config[i].substr(0, 1) == '+' || config[i].substr(0, 1) == '-'
                        ? config[i].substr(1)
                        : config[i];
                    var comparison = !desc
                        ? OrderByPipe_1._orderByComparator(a[property], b[property])
                        : -OrderByPipe_1._orderByComparator(a[property], b[property]);
                    //Don't return 0 yet in case of needing to sort by next property
                    if (comparison != 0)
                        return comparison;
                }
                return 0; //equal each other
            });
        }
    };
    var OrderByPipe_1;
    OrderByPipe = OrderByPipe_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'orderBy',
        })
    ], OrderByPipe);
    return OrderByPipe;
}());

//# sourceMappingURL=order-by.js.map

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgeFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the BadgeFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var BadgeFilterPipe = /** @class */ (function () {
    function BadgeFilterPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    BadgeFilterPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (value && value > 0) {
            var val = value.toString();
            if (value > 999) {
                val = (value / 1000).toFixed(1) + "k";
            }
            return val.toString();
        }
        return '';
    };
    BadgeFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'badgeFilter',
        })
    ], BadgeFilterPipe);
    return BadgeFilterPipe;
}());

//# sourceMappingURL=badge-filter.js.map

/***/ }),

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the DatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var DatePipe = /** @class */ (function () {
    function DatePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    DatePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (value) {
            var date = value.split('T')[0];
            var time = value.split('T')[1];
            if (date && time) {
                return date.split('-')[2] + "." + date.split('-')[1] + "." + date.split('-')[0] + " " + time.split(':')[0] + ":" + time.split(':')[1] + ":" + time.split(':')[2].substring(0, time.split(':')[2].indexOf('.'));
            }
            return new Date(value);
        }
    };
    DatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'date',
        })
    ], DatePipe);
    return DatePipe;
}());

//# sourceMappingURL=date.js.map

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PercentPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the PercentPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var PercentPipe = /** @class */ (function () {
    function PercentPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    PercentPipe.prototype.transform = function (value, args) {
        if (args === "progress")
            return (value["0"] > 0 && value["0"] < 100 ? (Math.trunc(100 - value["0"])) : value["0"] <= 0 ? 0 : 100);
        return value["0"] > 0 && value["0"] < 100 ? ('%' + Math.trunc(100 - value["0"])) : value["1"].substring(0, value["1"].indexOf('X')).length < 3 ? value["1"].substring(0, value["1"].indexOf('X') + 1) : '99X+';
    };
    PercentPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'percent',
        })
    ], PercentPipe);
    return PercentPipe;
}());

//# sourceMappingURL=percent.js.map

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_service__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Chat = /** @class */ (function () {
    function Chat(navParams, chatService, events) {
        var _this = this;
        this.chatService = chatService;
        this.events = events;
        this.msgList = [];
        this.editorMsg = '';
        this.showEmojiPicker = false;
        this.toggled = false;
        // Get the navParams toUserId parameter
        this.toUser = {
            id: navParams.get('toUserId'),
            name: navParams.get('toUserName')
        };
        // Get mock user information
        this.chatService.getUserInfo()
            .then(function (res) {
            _this.user = res;
        });
    }
    Chat.prototype.ionViewWillLeave = function () {
        // unsubscribe
        this.events.unsubscribe('chat:received');
    };
    Chat.prototype.ionViewDidEnter = function () {
        var _this = this;
        //get message list
        this.getMsg();
        // Subscribe to received  new message events
        this.events.subscribe('chat:received', function (msg) {
            _this.pushNewMsg(msg);
        });
    };
    Chat.prototype.handleSelection = function (event) {
        this.editorMsg = this.editorMsg + " " + event.char;
    };
    Chat.prototype.onFocus = function () {
        this.showEmojiPicker = false;
        this.content.resize();
        this.scrollToBottom();
    };
    Chat.prototype.switchEmojiPicker = function () {
        this.showEmojiPicker = !this.showEmojiPicker;
        if (!this.showEmojiPicker) {
            this.focus();
        }
        else {
            this.setTextareaScroll();
        }
        this.content.resize();
        this.scrollToBottom();
    };
    /**
     * @name getMsg
     * @returns {Promise<ChatMessage[]>}
     */
    Chat.prototype.getMsg = function () {
        var _this = this;
        // Get mock message list
        return this.chatService
            .getMsgList()
            .subscribe(function (res) {
            _this.msgList = res;
            _this.scrollToBottom();
        });
    };
    /**
     * @name sendMsg
     */
    Chat.prototype.sendMsg = function () {
        var _this = this;
        if (!this.editorMsg.trim())
            return;
        // Mock message
        var id = Date.now().toString();
        var newMsg = {
            messageId: Date.now().toString(),
            userId: this.user.id,
            userName: this.user.name,
            userAvatar: this.user.avatar,
            toUserId: this.toUser.id,
            time: Date.now(),
            message: this.editorMsg,
            status: 'pending'
        };
        this.pushNewMsg(newMsg);
        this.editorMsg = '';
        if (!this.showEmojiPicker) {
            this.focus();
        }
        this.chatService.sendMsg(newMsg)
            .then(function () {
            var index = _this.getMsgIndexById(id);
            if (index !== -1) {
                _this.msgList[index].status = 'success';
            }
        });
        /* this.broadcaster.fireNativeEvent('chatMsg',{
           msgListCount:this.msgList.length
         }).then(() => console.log('success'));*/
    };
    /**
     * @name pushNewMsg
     * @param msg
     */
    Chat.prototype.pushNewMsg = function (msg) {
        var userId = this.user.id, toUserId = this.toUser.id;
        // Verify user relationships
        if (msg.userId === userId && msg.toUserId === toUserId) {
            this.msgList.push(msg);
        }
        else if (msg.toUserId === userId && msg.userId === toUserId) {
            this.msgList.push(msg);
        }
        this.scrollToBottom();
    };
    Chat.prototype.getMsgIndexById = function (id) {
        return this.msgList.findIndex(function (e) { return e.messageId === id; });
    };
    Chat.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 400);
    };
    Chat.prototype.focus = function () {
        if (this.messageInput && this.messageInput.nativeElement) {
            this.messageInput.nativeElement.focus();
        }
    };
    Chat.prototype.setTextareaScroll = function () {
        var textarea = this.messageInput.nativeElement;
        textarea.scrollTop = textarea.scrollHeight;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], Chat.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('chat_input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], Chat.prototype, "messageInput", void 0);
    Chat = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/chat/chat.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>HBYS Chat</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div class="message-wrap">\n\n\n\n    <div *ngFor="let msg of msgList"\n\n         class="message"\n\n         [class.left]=" msg.userId != user.id "\n\n         [class.right]=" msg.userId == user.id ">\n\n      <img class="user-img" [src]="msg.userAvatar" alt="" src="">\n\n      <ion-spinner name="dots" *ngIf="msg.status === \'pending\'"></ion-spinner>\n\n      <div class="msg-detail">\n\n        <div class="msg-info">\n\n          <p>\n\n            {{msg.userName}}&nbsp;&nbsp;&nbsp;{{msg.time}}</p>\n\n        </div>\n\n        <div class="msg-content">\n\n          <span class="triangle"></span>\n\n          <p class="line-breaker ">{{msg.message}}</p>\n\n        </div>\n\n      </div>\n\n    </div>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n\n\n<ion-footer no-border style="height: 55px;">\n\n  <div class="input-wrap">\n\n    <!--<button ion-button clear icon-only (click)="toggled = !toggled" [(emojiPickerIf)]="toggled" [emojiPickerDirection]="\'top\'"\n\n            (emojiPickerSelect)="handleSelection($event)">\n\n      <span style="font-size: 20px;">😃</span>\n\n    </button>-->\n\n    <textarea #chat_input\n\n              placeholder="Mesaj Yaz"\n\n              [(ngModel)]="editorMsg"\n\n              (keyup.enter)="sendMsg()"\n\n              (focusin)="onFocus()">\n\n    </textarea>\n\n    <button ion-button clear icon-only item-right (click)="sendMsg()">\n\n      <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n\n    </button>\n\n  </div>\n\n</ion-footer>\n\n'/*ion-inline-end:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/chat/chat.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_chat_service__["a" /* ChatService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], Chat);
    return Chat;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_decoder_image_decoder__ = __webpack_require__(857);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__image_decoder_image_decoder__["a" /* ImageDecoderComponent */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__image_decoder_image_decoder__["a" /* ImageDecoderComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageDecoderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ImageDecoderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ImageDecoderComponent = /** @class */ (function () {
    // we need HttpClient to load the image
    function ImageDecoderComponent(httpClient, domSanitizer) {
        var _this = this;
        this.httpClient = httpClient;
        this.domSanitizer = domSanitizer;
        this.src$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](this.src);
        // this stream will contain the actual url that our img tag will load
        // everytime the src changes, the previous call would be canceled and the
        // new resource would be loaded
        this.dataUrl$ = this.src$.switchMap(function (url) { return _this.loadImage(url); });
    }
    ImageDecoderComponent.prototype.ngOnChanges = function () {
        this.src$.next(this.src);
    };
    ImageDecoderComponent.prototype.loadImage = function (url) {
        var _this = this;
        return this.httpClient
            // load the image as a blob
            .get(url, { responseType: 'blob' })
            // create an object url of that blob that we can use in the src attribute
            .map(function (e) { return _this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(e)); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ImageDecoderComponent.prototype, "src", void 0);
    ImageDecoderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'image-decoder',template:/*ion-inline-start:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/components/image-decoder/image-decoder.html"*/'<!-- Generated template for the ImageDecoderComponent component -->\n\n<div>\n\n    <img [src]="dataUrl"/>\n\n</div>\n\n'/*ion-inline-end:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/components/image-decoder/image-decoder.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ImageDecoderComponent);
    return ImageDecoderComponent;
}());

//# sourceMappingURL=image-decoder.js.map

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_throw__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var InterceptorProvider = /** @class */ (function () {
    function InterceptorProvider(alertCtrl, apiUrl) {
        this.alertCtrl = alertCtrl;
        this.apiUrl = apiUrl;
    }
    // Intercepts all HTTP requests!
    InterceptorProvider.prototype.intercept = function (request, next) {
        var _this = this;
        var token = JSON.parse(localStorage.getItem('my_token'));
        if (token) {
            request = request.clone({
                setHeaders: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Basic " + token
                }
            });
        }
        return next.handle(request).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpResponse */]) {
                console.log('event--->>>', event);
            }
            return event;
        }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(function (error) {
            var msg = "";
            msg = error.status === 400 ? 'Hatalı Servis İsteği...' :
                (error.status === 401 && error.statusText === "Unauthorized" && error.url.indexOf("GetAuthToken") === -1 ? '<div>Bu işlem için yetkiniz bulunmamaktadır...</div>' :
                    ((error.status === 401 && error.statusText === "Unauthorized" && error.url.indexOf("GetAuthToken") > -1) || error.status == 0 ? '<div>Kullanıcı Adı veya Şifre Hatalı ya da doğru internet ağında değilsiniz...</div>' : ''));
            var title = "";
            title = error.status === 400 ? 'Servis İsteği Hatası' :
                (error.status === 401 && error.statusText === "Unauthorized" && error.url.indexOf("GetAuthToken") === -1 ? 'Yetki Hatası' :
                    ((error.status === 401 && error.statusText === "Unauthorized" && error.url.indexOf("GetAuthToken") > -1) || error.status == 0 ? 'Bağlantı Hatası' : 'Hata'));
            //if(error.error["odata.error"]){
            error.url = error.url ? error.url : "";
            var alert = _this.alertCtrl.create({
                title: error.url.replace(_this.apiUrl, '').replace('HelpDeskFMS_Module_', '').split('(')[0] + " " + title,
                subTitle: error.url.indexOf("GetAuthToken") > -1 ? msg : error.error["odata.error"] ? error.error["odata.error"].message.value : msg,
                buttons: ['Tamam'],
                enableBackdropDismiss: false
            });
            alert.present();
            console.log(error.error["odata.error"]);
            //}
            // Pass the error to the caller of the function
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_throw__["_throw"])(error.error["odata.error"].message.value);
        }));
    };
    // Adds the token to your headers if it exists
    InterceptorProvider.prototype.addToken = function (request, token) {
        var clone;
        if (token) {
            clone = request.clone({
                setHeaders: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Basic " + token
                }
            });
            return clone;
        }
        return request;
    };
    InterceptorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["z" /* Inject */])('apiUrl')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */], Object])
    ], InterceptorProvider);
    return InterceptorProvider;
}());

//# sourceMappingURL=interceptor.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__info_popover_info_popover__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__globalVariables_global_variables__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_storageData__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_utils__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_service_request_service_request__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, viewCtrl, popoverCtrl, serviceRequestProvider, device, storage, utils, http, platform, appVersion_, appLink) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.popoverCtrl = popoverCtrl;
        this.serviceRequestProvider = serviceRequestProvider;
        this.device = device;
        this.storage = storage;
        this.utils = utils;
        this.http = http;
        this.platform = platform;
        this.appVersion_ = appVersion_;
        this.appLink = appLink;
        this.passHiddenORShow = 'password';
        this.passIcon = 'eye';
        localStorage.setItem('app_v', '1.6.5');
        this.appVersion = localStorage.getItem('app_v');
        this.userName = '';
        this.password = '';
        this.storage.get('userInfo', function (val) {
            if (val != null && val.length > 0) {
                _this.userName = val[0]['UserName'];
                _this.password = val[0]['entryPassword'];
                _this.getToken(val[0]['UserName'], val[0]['entryPassword']);
            }
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () { };
    LoginPage.prototype.test = function () {
        console.log('asdas');
    };
    LoginPage.prototype.presentRadioPopover = function (ev) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__info_popover_info_popover__["a" /* InfoPopoverPage */], {});
        popover.present({
            ev: ev
        });
    };
    LoginPage.prototype.getToken = function (userName, password) {
        this.utils.loadingPresent('Giriş Yapılıyor...');
        var headerInfo = {
            user: userName,
            pass: password
        };
        var seoUrl = 'GetAuthToken';
        var appPlatform = '';
        var uzanti = '';
        if (this.platform.is('android')) {
            appPlatform = 'Android';
            uzanti = '.apk';
        }
        if (this.platform.is('ios')) {
            appPlatform = 'IOS';
            uzanti = '.ipa';
        }
        var versionUrl = "VersionGetir?Platform='" + appPlatform + "'";
        // this.storage.set('my_token', btoa(headerInfo["user"] + ":" + headerInfo["pass"])).then(() => {
        //   this.serviceRequestProvider.getServiceRequest(seoUrl, null).subscribe(p => {
        //     this.goPage(headerInfo["user"], headerInfo["pass"]);
        //   }, error => {
        //     this.utils.loadingDismiss();
        //     //this.utils.doAlert("Kullanıcı Adı veya Şifre Hatalı...");
        //   })
        // });
        // this.serviceRequestProvider.getServiceRequest(versionUrl, null).subscribe(version => {
        //   if (this.appVersion === version["value"]) {
        //     this.storage.set('my_token', btoa(headerInfo["user"] + ":" + headerInfo["pass"])).then(() => {
        //       this.serviceRequestProvider.getServiceRequest(seoUrl, null).subscribe(p => {
        //         this.goPage(headerInfo["user"], headerInfo["pass"]);
        //       }, error => {
        //         this.utils.loadingDismiss();
        //         //this.utils.doAlert("Kullanıcı Adı veya Şifre Hatalı...");
        //       })
        //     });
        //   }
        //   else {
        //     this.utils.loadingDismiss();
        //     let appLink = this.appLink + version["value"] + uzanti;
        //     this.utils.doAlertConfirm("Uygulamanın yeni sürümü mevcut. İndirmek için tıklayınız!", function () {
        //       window.open(appLink, '_self');
        //     });
        //   }
        // }, error => {
        //   this.utils.loadingDismiss();
        //   //this.utils.doAlert("Kullanıcı Adı veya Şifre Hatalı...");
        // });
        this.storage.set('my_token', btoa(headerInfo['user'] + ':' + headerInfo['pass']));
        this.goPage(headerInfo['user'], headerInfo['pass']);
    };
    LoginPage.prototype.goPage = function (userName, password) {
        var _this = this;
        var expand = '?$expand=Sirket,Roles,unvan/ilgiliServis'; //,unvan/ilgiliServis
        var filter = "&$filter=UserName eq '" + userName + "'";
        var seoUrl = 'HelpDeskFMS_Module_Kullanici' + expand + filter;
        var headerInfo = {
            user: userName,
            pass: password
        };
        if (userName === 'application.testing') {
            var body = {
                method: 'get',
                url: "https://odata.manisash.com/Dataservice.svc/HelpDeskFMS_Module_Kullanici?$expand=Sirket,Roles,unvan/ilgiliServis&$filter=UserName eq '" + userName + "'",
                authorization: btoa(userName + ':' + password)
            };
            if (userName === 'application.testing' && password === '4242') {
                this.serviceRequestProvider.getMockList('login').subscribe(function (p) {
                    if (p['value'].length > 0) {
                        if (p['value'][0]['MobilKullanim'] == true) {
                            _this.storage.get('token', function (token) {
                                var seourl = 'HelpDeskFMS_Module_Kullanici' + "(guid'" + p['value'][0]['Oid'] + "')";
                                _this.deviceUUID = token;
                                _this.mobilDeviceInfo = _this.device.platform + ' - ' + _this.device.manufacturer + ' ' + _this.device.model + ' - Serial : ' + _this.device.serial + ' - uuid : ' + _this.device.uuid;
                                var deviceInfo = {
                                    deviceUUID: _this.deviceUUID,
                                    mobilDeviceInfo: _this.mobilDeviceInfo
                                };
                                _this.storage.set('deviceInfo', deviceInfo);
                                p['value'][0] = _this.utils.setUserRole(p['value'][0]);
                                p['value'][0]['entryPassword'] = password;
                                __WEBPACK_IMPORTED_MODULE_6__globalVariables_global_variables__["b" /* USER */].userInfo = p['value'][0];
                                _this.storage.set('userInfo', p['value']);
                                _this.utils.loadingDismiss();
                                _this.storage.set('my_token', btoa(userName + ':' + password));
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]).then(function () {
                                    var index = _this.viewCtrl.index;
                                    _this.navCtrl.remove(index);
                                });
                            });
                        }
                        else {
                            _this.utils.loadingDismiss();
                            _this.utils.doAlert('Mobil Uygulamaya Giriş Yetkiniz Yok...');
                        }
                    }
                    else {
                        _this.utils.loadingDismiss();
                    }
                }, function (error) {
                    if (error.status == 0 || error.status == 404) {
                        _this.utils.loadingDismiss();
                    }
                    else {
                        _this.utils.loadingDismiss();
                    }
                });
            }
            else {
                this.utils.loadingDismiss();
                this.utils.doAlert('Username or Password is wrong!!!');
            }
        }
        else {
            this.serviceRequestProvider.login(seoUrl).subscribe(function (p) {
                if (p['value'].length > 0) {
                    if (p['value'][0]['MobilKullanim'] == true) {
                        _this.storage.get('token', function (token) {
                            var seourl = 'HelpDeskFMS_Module_Kullanici' + "(guid'" + p['value'][0]['Oid'] + "')";
                            _this.deviceUUID = token;
                            _this.mobilDeviceInfo = _this.device.platform + ' - ' + _this.device.manufacturer + ' ' + _this.device.model + ' - Serial : ' + _this.device.serial + ' - uuid : ' + _this.device.uuid;
                            var deviceInfo = {
                                deviceUUID: _this.deviceUUID,
                                mobilDeviceInfo: _this.mobilDeviceInfo
                            };
                            _this.storage.set('deviceInfo', deviceInfo);
                            var body = {
                                'odata.type': 'XafDataService.HelpDeskFMS_Module_Kullanici',
                                MobilUUID: _this.deviceUUID,
                                OturumAcilanCihaz: _this.mobilDeviceInfo,
                                SonOturumTarihi: new Date(new Date().getTime() + 1000 * 60 * 60 * 3).toISOString()
                            };
                            _this.serviceRequestProvider.putServiceRequest(seourl, body).subscribe(function () {
                                p['value'][0] = _this.utils.setUserRole(p['value'][0]);
                                p['value'][0]['entryPassword'] = password;
                                __WEBPACK_IMPORTED_MODULE_6__globalVariables_global_variables__["b" /* USER */].userInfo = p['value'][0];
                                _this.storage.set('userInfo', p['value']);
                                _this.utils.loadingDismiss();
                                _this.storage.set('my_token', btoa(userName + ':' + password));
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]).then(function () {
                                    var index = _this.viewCtrl.index;
                                    _this.navCtrl.remove(index);
                                });
                            }, function (error) {
                                _this.utils.loadingDismiss();
                            });
                        });
                    }
                    else {
                        _this.utils.loadingDismiss();
                        _this.utils.doAlert('Mobil Uygulamaya Giriş Yetkiniz Yok...');
                    }
                }
                else {
                    _this.utils.loadingDismiss();
                }
            }, function (error) {
                if (error.status == 0 || error.status == 404) {
                    _this.utils.loadingDismiss();
                }
                else {
                    _this.utils.loadingDismiss();
                }
            });
        }
    };
    LoginPage.prototype.changeType = function () {
        if (this.passHiddenORShow == 'password') {
            this.passHiddenORShow = 'text';
            this.passIcon = 'eye-off';
        }
        else {
            this.passHiddenORShow = 'password';
            this.passIcon = 'eye';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('userNameInput'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "userNameInput", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/login/login.html"*/'<ion-content padding>\n\n  <ion-item class="infoPopover">\n\n    <div class="bar-button" item-end style="bottom: 0px;margin: 9px 9px 9px 9px;" (click)="presentRadioPopover($event)">\n\n      <img  src="assets/imgs/diger.png" style="width: 32px;"/>\n\n    </div>\n\n  </ion-item>\n\n  <ion-list>\n\n    <div style="padding: 4vw;">\n\n      <div style="text-align: center;">\n\n      <img  src="assets/imgs/KeyDesk.png" class="logo"/>\n\n      </div>\n\n    </div>\n\n    <div class="card-login">\n\n      <ion-item [ngClass]="userName ? \'input-no-err\' : \'input-err\'">\n\n        <ion-label style="margin-top: 5px;margin-left: 5px;">\n\n          <ion-icon ios="ios-person" md="md-person"></ion-icon>\n\n        </ion-label>\n\n        <ion-input type="text" [(ngModel)]="userName" placeholder="Kullanıcı Adı" (click)="test()"></ion-input>\n\n      </ion-item>\n\n      <ion-item [ngClass]="password ? \'input-no-err\' : \'input-err\'">\n\n        <ion-label style="margin-top: 5px;margin-left: 5px;">\n\n          <ion-icon ios="ios-unlock" md="md-unlock"></ion-icon>\n\n        </ion-label>\n\n        <ion-input type="{{passHiddenORShow}}" [(ngModel)]="password" placeholder="Şifre"></ion-input>\n\n        <button ion-button clear type="button" class="passIcon" item-right (click)="changeType()">\n\n          <ion-icon name="{{passIcon}}"> </ion-icon>\n\n        </button>\n\n      </ion-item>\n\n      <button ion-button full class="loginButton" (click)="getToken(userName,password)" [disabled]="userName.length==0 || password.length==0">Giriş</button>\n\n      <label class="card-login-version">{{\'v\'+appVersion+\' © 2019\'}}</label>\n\n      <label class="card-login-version"><a href="https://keydata.com.tr/aydinlatma-metni/" target="_blank"><small>Gizlilik Politikası</small></a></label>\n\n    </div>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/login/login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_8__utils_utils__["a" /* Utils */], __WEBPACK_IMPORTED_MODULE_7__utils_storageData__["a" /* StorageData */]]
        }),
        __param(10, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])('appVersion')), __param(11, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])('appLink')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_9__providers_service_request_service_request__["a" /* ServiceRequestProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_7__utils_storageData__["a" /* StorageData */], __WEBPACK_IMPORTED_MODULE_8__utils_utils__["a" /* Utils */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* Platform */], Object, Object])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageSliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ImageSliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ImageSliderPage = /** @class */ (function () {
    function ImageSliderPage(navCtrl, navParams, viewCtrl, sanitizer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.sanitizer = sanitizer;
        this.isSliding = true;
        this.base64Image = this.navParams.data.base64Image;
        this.imageIndex = this.navParams.data.imageIndex;
        var interval = setInterval(function () {
            if (_this.slides && _this.slides.length() !== undefined) {
                _this.slides.slideTo(_this.imageIndex, 0, false);
                clearInterval(interval);
            }
        }, 100);
    }
    ImageSliderPage.prototype.goToSlide = function (imageIndex) {
        if (this.isSliding) {
            this.slides.slideTo(imageIndex + 1, 0, false);
            this.isSliding = false;
        }
    };
    ImageSliderPage.prototype.ionViewDidLoad = function () {
    };
    ImageSliderPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mySlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
    ], ImageSliderPage.prototype, "slides", void 0);
    ImageSliderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-image-slider',template:/*ion-inline-start:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/image-slider/image-slider.html"*/'<!--\n\n  Generated template for the ImageSliderPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding id="imageSlider" (click)="closeModal()">\n\n  <ion-slides #mySlider>\n\n    <ion-slide *ngFor="let image of base64Image">\n\n      <img [src]="sanitizer.bypassSecurityTrustUrl(image)" >\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/umitberkansefa/Desktop/mix/mixed/project/mobil-mym/mobil-kocaeli/src/pages/image-slider/image-slider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ImageSliderPage);
    return ImageSliderPage;
}());

//# sourceMappingURL=image-slider.js.map

/***/ })

},[517]);
//# sourceMappingURL=main.js.map