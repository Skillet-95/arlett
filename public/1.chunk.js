webpackJsonp([1],{

/***/ "../../../../../src/app/pages/category/category.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-image {\n    height: 400px;\n    background: url(" + escape(__webpack_require__("../../../../../src/assets/imgs/plates-header.jpg")) + ") no-repeat;\n    background-size:cover;\n    background-position: center center;\n}\n.header-block {\n    height: 100%;\n    background-color: #3A3A35;\n    color:white;\n    width: 50%;\n    margin:auto;\n    border-color:white;\n    border-style:solid;\n    border-width: 0 15px;\n    display:table;\n}\n.header-text {\n    text-align: center;\n    vertical-align: middle;\n    display: table-cell;\n}\n.header-text-title {\n    display: inline-block;\n    font-size: 30px;\n    font-weight: 500;\n    padding-bottom:10px;\n    border-bottom: 1px solid white;\n}\n.header-text p {\n    padding:10px 40px\n}\n.layout-container {\n    max-width: 1140px;\n    padding-right: 30px;\n    padding-left: 30px;\n    margin-right: auto;\n    margin-left: auto;\n}\n.product-grid {\n    padding-top: 5%;\n    padding-bottom: 5%;\n}\n.product-image {\n    width: 100%;\n    height: 0;\n    padding-bottom: 66.66667%;\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n.image-container {\n    position: relative;\n}\n.image-container:hover .product-image{\n    opacity: 0.3;\n    background-size:120%;\n}\n.image-container:hover .overlay{\n    opacity: 1;\n}\n.overlay {\n    transition: .5s ease;\n    opacity: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    text-align: center;\n    transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%)\n}\n.overlay .button {\n    width: 160px;\n    line-height: 38px;\n}\n.overlay .button:first-child {\n    margin-bottom: 2em;\n}\n.product-details {\n    padding-top: 15px;\n    text-align: center;\n    margin-bottom: 40px;\n}\n.product-brand {\n    display: block;\n    margin: .5em 0;\n    color: #7d7d7d;\n}\n.product-title {\n    text-transform: uppercase;\n    letter-spacing: .05em;\n    margin-top: 0;\n    margin-bottom: .5em;\n    font-size: 1em;\n    line-height: 1.2;\n    font-weight: 400;\n    font-family: Roboto;\n}\n.product-price {\n    font-size: 1.14286em;\n    color: #9f9f9f;\n    font-family: Playfair Display;\n}\n@media screen and (max-width: 767px) {\n    .header-block {\n        width: 100%;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-image\">\n    <div class=\"header-block\">\n        <div class=\"header-text\">\n            <div class=\"header-text-title\">Plates</div>\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec mollis sem. Etiam id luctus libero.\n                Vivamus vulputate urna eget velit iaculis, et interdum elit pellentesque. Duis porta nunc neque, nec volutpat erat lacinia a.\n            </p>\n        </div>\n    </div>\n</div>\n<div class=\"layout-container\">\n    <div class=\"product-grid\">\n        <div class=\"col-md-4 col-sm-6\" *ngFor=\"let product of products;let i = index\">\n            <div class=\"image-container\">\n                <div class=\"product-image\" [ngStyle]=\"{'background-image': 'url(./assets/imgs/' + product.image + ')'}\"></div>\n                <div class=\"overlay\">\n                    <div class=\"button button-primary\" [routerLink]=\"['../product',i+1]\">View Details</div>\n                    <div class=\"button button-primary\" (click)=\"addToCart(product)\">Add To Cart</div>\n                </div>\n            </div>\n            <div class=\"product-details\">\n                <div class=\"product-brand\">{{product.brand}}</div>\n                <div class=\"product-title\">{{product.title}}</div>\n                <div class=\"product-price\">{{product.price | currency :'USD':true }}</div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryComponent = (function () {
    function CategoryComponent(productService, cartService, router) {
        var _this = this;
        this.productService = productService;
        this.cartService = cartService;
        this.router = router;
        this.load = function () {
            _this.sub = _this.productService.getProducts('./assets/mock-data/products.json')
                .subscribe(function (res) {
                _this.products = res;
            });
        };
        this.addToCart = function (product) {
            _this.cartService.addToCart({ product: product, quantity: 1 });
        };
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.load();
    };
    CategoryComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-category',
        template: __webpack_require__("../../../../../src/app/pages/category/category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/category/category.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], CategoryComponent);

var _a, _b, _c;
//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/category/category.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_routes__ = __webpack_require__("../../../../../src/app/pages/category/category.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__category_component__ = __webpack_require__("../../../../../src/app/pages/category/category.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by andrew.yang on 7/27/2017.
 */





var CategoryModule = (function () {
    function CategoryModule() {
    }
    return CategoryModule;
}());
CategoryModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__category_routes__["a" /* categoryRoutes */])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__category_component__["a" /* CategoryComponent */]
        ]
    })
], CategoryModule);

//# sourceMappingURL=category.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/category/category.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__category_component__ = __webpack_require__("../../../../../src/app/pages/category/category.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return categoryRoutes; });
/**
 * Created by andrew.yang on 7/27/2017.
 */

var categoryRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__category_component__["a" /* CategoryComponent */]
    },
];
//# sourceMappingURL=category.routes.js.map

/***/ }),

/***/ "../../../../../src/assets/imgs/plates-header.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "plates-header.e83ce5cdbc04ebc89686.jpg";

/***/ }),

/***/ "../../../../css-loader/lib/url/escape.js":
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ })

});
//# sourceMappingURL=1.chunk.js.map