webpackJsonp([2],{

/***/ "../../../../../src/app/pages/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-page {\n    width: 100%;\n}\n.product-page-container {\n    max-width: 1140px;\n    text-align: center;\n    padding: 0 30px;\n    margin: auto;\n}\n.product-breadcrumbs {\n    padding: 30px 0;\n}\n.product-breadcrumbs li{\n    display: inline-block;\n    letter-spacing: .1em;\n    font-weight: 700;\n    text-transform: uppercase;\n    font-size: .85em;\n}\n.product-breadcrumbs li a {\n    color: #4a4a4a;\n}\n.product-breadcrumbs li:last-child{\n    opacity: 0.5;\n}\n\n.product-details-image {\n    width: 95%;\n    padding-top: 63.3%;\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n@media screen and (max-width: 992px) {\n    .product-details-image {\n        width: 100%;\n        padding-top: 66.6%;\n    }\n}\n.product-brand {\n    color: #7d7d7d;\n}\n.product-title {\n    margin:15px 0;\n    font-size:2.5em;\n    font-weight: 400;\n    font-family: \"Playfair Display\";\n}\n.product-price {\n    color:#9f9f9f;\n    font-family: \"Playfair Display\";\n    font-size:20px;\n}\n.product-description {\n    color: #7d7d7d;\n    margin:10px 0 30px 0;\n}\n.product-details-button {\n    padding:25px 0;\n    border-top: 1px solid #e4e4e4;\n    text-align: center;\n}\n.product-cart-button {\n    vertical-align: top;\n    margin-left:5px\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"product\" class=\"product-page\">\n    <div class=\"product-page-container\">\n        <ol class=\"product-breadcrumbs\">\n            <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n            <li class=\"breadcrumb-item\"> / <a routerLink=\"/\">Plates</a></li>\n            <li class=\"breadcrumb-item\"> / {{product.title}}</li>\n        </ol>\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"product-details-image\" [ngStyle]=\"{'background-image': 'url(./assets/imgs/' + product.image + ')'}\"></div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"product-details-row\">\n                    <div class=\"product-brand\">{{product.brand}}</div>\n                    <h1 class=\"product-title\">{{product.title}}</h1>\n                    <div class=\"product-price\">{{product.price | currency :'USD':true }}</div>\n                    <div class=\"product-description\">{{product.description}}</div>\n                </div>\n                <div class=\"product-details-button\">\n                    <quantity-control [quantity]=\"quantity\" (onChange)=\"changeQuantity($event)\"></quantity-control>\n                    <div class=\"product-cart-button button button-primary button-large\" (click)=\"addToCart(product)\">Add to cart</div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductComponent = (function () {
    function ProductComponent(route, productService, cartService) {
        var _this = this;
        this.route = route;
        this.productService = productService;
        this.cartService = cartService;
        this.quantity = 1;
        this.getProduct = function (id) {
            _this.sub = _this.productService.getProducts('./assets/mock-data/products.json')
                .subscribe(function (res) {
                _this.product = res[id - 1];
            });
        };
        this.changeQuantity = function (newQuantity) {
            _this.quantity = newQuantity;
        };
        this.addToCart = function (product) {
            if (_this.quantity)
                _this.cartService.addToCart({ product: product, quantity: _this.quantity });
        };
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (res) {
            _this.getProduct(res.id);
        });
    };
    ProductComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-product',
        template: __webpack_require__("../../../../../src/app/pages/product/product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/product/product.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */]) === "function" && _c || Object])
], ProductComponent);

var _a, _b, _c;
//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/product/product.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_routes__ = __webpack_require__("../../../../../src/app/pages/product/product.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_component__ = __webpack_require__("../../../../../src/app/pages/product/product.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by andrew.yang on 7/27/2017.
 */





var ProductModule = (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
ProductModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_routes__["a" /* productRoutes */])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__product_component__["a" /* ProductComponent */]
        ]
    })
], ProductModule);

//# sourceMappingURL=product.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/product/product.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_component__ = __webpack_require__("../../../../../src/app/pages/product/product.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return productRoutes; });
/**
 * Created by andrew.yang on 7/27/2017.
 */

var productRoutes = [
    {
        path: ':id',
        component: __WEBPACK_IMPORTED_MODULE_0__product_component__["a" /* ProductComponent */]
    },
];
//# sourceMappingURL=product.routes.js.map

/***/ })

});
//# sourceMappingURL=2.chunk.js.map