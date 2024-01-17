"use strict";
(() => {
var exports = {};
exports.id = 120;
exports.ids = [120];
exports.modules = {

/***/ 5565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BlogFeedItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment_strftime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6839);
/* harmony import */ var moment_strftime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_strftime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4083);





class BlogFeedItem extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    render() {
        const post = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(this.props, "post");
        const title = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(post, "title");
        const thumbImage = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(post, "thumb_image");
        const thumbImageAlt = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(post, "thumb_image_alt", "");
        const excerpt = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(post, "excerpt");
        const date = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(post, "date");
        const dateTimeAttr = moment_strftime__WEBPACK_IMPORTED_MODULE_3___default()(date).strftime("%Y-%m-%d %H:%M");
        const formattedDate = moment_strftime__WEBPACK_IMPORTED_MODULE_3___default()(date).strftime("%B %d, %Y");
        const postUrl = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getPageUrl */ .XW)(post, {
            withPrefix: true
        });
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
            className: "cell post-card",
            children: [
                thumbImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU, {
                    className: "post-card__image",
                    href: postUrl,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .withPrefix */ .dq)(thumbImage),
                        alt: thumbImageAlt
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                    className: "post-card__header",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "post-card__title",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU, {
                                href: postUrl,
                                children: title
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "post-card__meta",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                className: "published",
                                dateTime: dateTimeAttr,
                                children: formattedDate
                            })
                        })
                    ]
                }),
                excerpt && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "post-card__body",
                    children: excerpt
                })
            ]
        });
    }
}


/***/ }),

/***/ 1667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function FreelancerWebComponent() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                type: "module",
                src: "https://unpkg.com/freelancer-web-app@0.0.11/dist/freelancerwebapp/freelancerwebapp.esm.js"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("freelancer-score", {
                        username: "mikejcarton",
                        type: "minimal"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("freelancer-score", {
                        username: "mikejcarton",
                        type: "card"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FreelancerWebComponent);


/***/ }),

/***/ 2278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PortfolioItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4083);




class PortfolioItem extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    render() {
        const project = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(this.props, "project");
        const title = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(project, "title");
        const subtitle = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(project, "subtitle");
        const thumbImage = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(project, "thumb_image");
        const thumbImageAlt = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(project, "thumb_image_alt", "");
        const projectUrl = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .getPageUrl */ .XW)(project, {
            withPrefix: true
        });
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
            className: "cell project-card",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utils__WEBPACK_IMPORTED_MODULE_3__/* .Link */ .rU, {
                href: projectUrl,
                className: "project-card__link",
                children: [
                    thumbImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "project-card__image",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .withPrefix */ .dq)(thumbImage),
                            alt: thumbImageAlt
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                        className: "project-card__header",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "project-card__title",
                                children: title
                            }),
                            subtitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "project-card__subtitle",
                                children: subtitle
                            })
                        ]
                    })
                ]
            })
        });
    }
}


/***/ }),

/***/ 8144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ar": () => (/* reexport */ Body),
  "ZP": () => (/* binding */ components)
});

// UNUSED EXPORTS: Action, ActionLink, BlogFeedItem, ContentSection, CtaButtons, CtaSection, Footer, FormField, FormSection, GridSection, Header, HeroSection, Icon, ImageSection, PortfolioItem, PortfolioSection, PostsSection, TestimonialsSection, TextSection

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);
// EXTERNAL MODULE: ./src/utils/index.js + 13 modules
var utils = __webpack_require__(4083);
;// CONCATENATED MODULE: ./src/components/Icon.js



class Icon extends (external_react_default()).Component {
    render() {
        const icon = external_lodash_default().get(this.props, "icon");
        switch(icon){
            case "dribbble":
                return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: "icon",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"
                    })
                });
            case "facebook":
                return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: "icon",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"
                    })
                });
            case "github":
                return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: "icon",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                    })
                });
            case "instagram":
                return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: "icon",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z"
                    })
                });
            case "linkedin":
                return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: "icon",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    })
                });
            case "pinterest":
                return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: "icon",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"
                    })
                });
            case "twitter":
                return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: "icon",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"
                    })
                });
            case "youtube":
                return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: "icon",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"
                    })
                });
            case "vimeo":
                return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: "icon",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197a315.065 315.065 0 003.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"
                    })
                });
            default:
                return null;
        }
    }
}

;// CONCATENATED MODULE: ./src/components/Action.js





class Action extends (external_react_default()).Component {
    render() {
        const action = external_lodash_default().get(this.props, "action");
        const url = external_lodash_default().get(action, "url");
        const label = external_lodash_default().get(action, "label");
        const style = external_lodash_default().get(action, "style", "link");
        const icon = external_lodash_default().get(action, "icon", "dribbble");
        const classes = (0,utils/* classNames */.AK)({
            "button": style !== "link",
            "button--primary": style === "button",
            "button--icon": style === "icon"
        });
        const newWindow = external_lodash_default().get(action, "new_window");
        const noFollow = external_lodash_default().get(action, "no_follow");
        const attrs = {};
        if (newWindow) {
            attrs.target = "_blank";
        }
        if (newWindow || noFollow) {
            attrs.rel = [
                newWindow ? "noopener" : "",
                noFollow ? "nofollow" : ""
            ].filter(Boolean).join(" ");
        }
        return /*#__PURE__*/ jsx_runtime_.jsx(utils/* Link */.rU, {
            href: (0,utils/* withPrefix */.dq)(url),
            ...attrs,
            className: classes,
            children: style === "icon" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                        icon: icon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "screen-reader-text",
                        children: label
                    })
                ]
            }) : label
        });
    }
}

;// CONCATENATED MODULE: ./src/components/ActionLink.js




class ActionLink extends (external_react_default()).Component {
    render() {
        const action = external_lodash_default().get(this.props, "action");
        const url = external_lodash_default().get(action, "url");
        const label = external_lodash_default().get(action, "label");
        const newWindow = external_lodash_default().get(action, "new_window");
        const noFollow = external_lodash_default().get(action, "no_follow");
        const attrs = {};
        if (newWindow) {
            attrs.target = "_blank";
        }
        if (newWindow || noFollow) {
            attrs.rel = [
                newWindow ? "noopener" : "",
                noFollow ? "nofollow" : ""
            ].filter(Boolean).join(" ");
        }
        return /*#__PURE__*/ jsx_runtime_.jsx(utils/* Link */.rU, {
            href: (0,utils/* withPrefix */.dq)(url),
            ...attrs,
            children: label
        });
    }
}

// EXTERNAL MODULE: ./src/components/BlogFeedItem.js
var BlogFeedItem = __webpack_require__(5565);
;// CONCATENATED MODULE: ./src/components/ContentSection.js




class ContentSection extends (external_react_default()).Component {
    render() {
        const section = external_lodash_default().get(this.props, "section");
        const sectionId = external_lodash_default().get(section, "section_id");
        const title = external_lodash_default().get(section, "title");
        const subtitle = external_lodash_default().get(section, "subtitle");
        const image = external_lodash_default().get(section, "image");
        const imageAlt = external_lodash_default().get(section, "image_alt", "");
        const content = external_lodash_default().get(section, "content");
        return /*#__PURE__*/ jsx_runtime_.jsx("section", {
            id: sectionId,
            className: "section section--text",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container container--lg",
                children: [
                    title && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "section__title line-top",
                        children: title
                    }),
                    subtitle && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "section__subtitle",
                        children: subtitle
                    }),
                    content && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "section__body text-block",
                        children: (0,utils/* markdownify */.gI)(content)
                    }),
                    image && /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                        className: "section__image",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: (0,utils/* withPrefix */.dq)(image),
                            alt: imageAlt
                        })
                    })
                ]
            })
        });
    }
}

;// CONCATENATED MODULE: ./src/components/CtaButtons.js




class CtaButtons extends (external_react_default()).Component {
    render() {
        const actions = external_lodash_default().get(this.props, "actions");
        return external_lodash_default().map(actions, (action, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Action, {
                action: action
            }, index));
    }
}

;// CONCATENATED MODULE: ./src/components/CtaSection.js





class CtaSection extends (external_react_default()).Component {
    render() {
        const section = external_lodash_default().get(this.props, "section");
        const sectionId = external_lodash_default().get(section, "section_id");
        const backgroundColor = external_lodash_default().get(section, "bg_color", "none");
        const title = external_lodash_default().get(section, "title");
        const content = external_lodash_default().get(section, "content");
        const actions = external_lodash_default().get(section, "actions");
        const image = external_lodash_default().get(section, "image");
        const imageAlt = external_lodash_default().get(section, "image_alt", "");
        return /*#__PURE__*/ jsx_runtime_.jsx("section", {
            id: sectionId,
            className: "section section--cta",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container container--lg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (0,utils/* classNames */.AK)({
                        section__bg: backgroundColor !== "none"
                    }),
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (0,utils/* classNames */.AK)({
                            grid: image
                        }),
                        children: [
                            image && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "section__image cell",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: (0,utils/* withPrefix */.dq)(image),
                                    alt: imageAlt
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (0,utils/* classNames */.AK)("section__content", {
                                    cell: image
                                }),
                                children: [
                                    title && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "section__title",
                                        children: title
                                    }),
                                    content && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "section__body text-block",
                                        children: (0,utils/* markdownify */.gI)(content)
                                    }),
                                    !external_lodash_default().isEmpty(actions) && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "section__actions button-group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CtaButtons, {
                                            actions: actions
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        });
    }
}

;// CONCATENATED MODULE: ./src/components/Footer.js






class Footer extends (external_react_default()).Component {
    render() {
        const config = external_lodash_default().get(this.props, "config");
        const footer = external_lodash_default().get(config, "footer");
        const copyright = external_lodash_default().get(footer, "content");
        const links = external_lodash_default().get(footer, "links");
        const hasSocial = external_lodash_default().get(footer, "has_social");
        const socialLinks = external_lodash_default().get(footer, "social_links");
        return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            id: "colophon",
            className: "site-footer",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container container--lg",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "site-footer__inside",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "site-footer__info",
                            children: [
                                copyright && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "site-footer__copyright",
                                    children: (0,utils/* htmlToReact */.vn)(copyright)
                                }),
                                external_lodash_default().map(links, (action, index)=>/*#__PURE__*/ jsx_runtime_.jsx(ActionLink, {
                                        action: action
                                    }, index))
                            ]
                        }),
                        hasSocial && !external_lodash_default().isEmpty(socialLinks) && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "site-footer__social",
                            children: external_lodash_default().map(socialLinks, (action, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Action, {
                                    action: action
                                }, index))
                        })
                    ]
                })
            })
        });
    }
}

;// CONCATENATED MODULE: ./src/components/FormField.js




class FormField extends (external_react_default()).Component {
    render() {
        const section = external_lodash_default().get(this.props, "section");
        const hideLabels = external_lodash_default().get(section, "hide_labels");
        const field = external_lodash_default().get(this.props, "field");
        const inputType = external_lodash_default().get(field, "input_type");
        const name = external_lodash_default().get(field, "name");
        const defaultValue = external_lodash_default().get(field, "default_value");
        const options = external_lodash_default().get(field, "options");
        const required = external_lodash_default().get(field, "is_required");
        const label = external_lodash_default().get(field, "label");
        const labelId = `${name}-label`;
        const attr = {};
        if (label) {
            attr["aria-labelledby"] = labelId;
        }
        if (required) {
            attr.required = true;
        }
        if (defaultValue && inputType !== "checkbox" && inputType !== "select") {
            attr.placeholder = defaultValue;
        }
        switch(inputType){
            case "checkbox":
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "form-group form-checkbox",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "checkbox",
                            id: name,
                            name: name,
                            ...attr
                        }),
                        label && /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            htmlFor: name,
                            children: label
                        })
                    ]
                });
            case "select":
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [
                        label && /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            htmlFor: name,
                            className: (0,utils/* classNames */.AK)({
                                "screen-reader-text": hideLabels
                            }),
                            children: label
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "form-select-wrap",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                id: name,
                                name: name,
                                ...attr,
                                children: [
                                    defaultValue && /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "",
                                        children: defaultValue
                                    }),
                                    external_lodash_default().map(options, (option, index)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: option,
                                            children: option
                                        }, index))
                                ]
                            })
                        })
                    ]
                });
            case "textarea":
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [
                        label && /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            htmlFor: name,
                            className: (0,utils/* classNames */.AK)({
                                "screen-reader-text": hideLabels
                            }),
                            children: label
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                            name: name,
                            id: name,
                            rows: "5",
                            ...attr
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "animate-border",
                            "aria-hidden": "true"
                        })
                    ]
                });
            default:
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [
                        label && /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            htmlFor: name,
                            className: (0,utils/* classNames */.AK)({
                                "screen-reader-text": hideLabels
                            }),
                            children: label
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: inputType,
                            name: name,
                            id: name,
                            ...attr
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "animate-border",
                            "aria-hidden": "true"
                        })
                    ]
                });
        }
    }
}

;// CONCATENATED MODULE: ./src/components/FormSection.js





class FormSection extends (external_react_default()).Component {
    render() {
        const section = external_lodash_default().get(this.props, "section");
        const sectionId = external_lodash_default().get(section, "section_id");
        const title = external_lodash_default().get(section, "title");
        const subtitle = external_lodash_default().get(section, "subtitle");
        const content = external_lodash_default().get(section, "content");
        const hasText = title || subtitle || content;
        const formId = external_lodash_default().get(section, "form_id");
        const formAction = external_lodash_default().get(section, "form_action");
        const formFields = external_lodash_default().get(section, "form_fields");
        const submitLabel = external_lodash_default().get(section, "submit_label");
        const formHoneypotInputId = formId + "-honeypot";
        const formHoneypotLabelId = formId + "-honeypot-label";
        const formHoneypotName = formId + "-bot-field";
        return /*#__PURE__*/ jsx_runtime_.jsx("section", {
            id: sectionId,
            className: "section section--form",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container container--lg",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (0,utils/* classNames */.AK)({
                        "grid": hasText
                    }),
                    children: [
                        hasText && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "section__content cell",
                            children: [
                                title && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "section__title line-top",
                                    children: title
                                }),
                                subtitle && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "section__subtitle",
                                    children: subtitle
                                }),
                                content && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "section__body text-block",
                                    children: (0,utils/* markdownify */.gI)(content)
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (0,utils/* classNames */.AK)("section__form-container", {
                                "cell": hasText
                            }),
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                name: formId,
                                id: formId,
                                ...formAction ? {
                                    action: formAction
                                } : null,
                                method: "POST",
                                "data-netlify": "true",
                                "data-netlify-honeypot": formHoneypotName,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "screen-reader-text",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                            id: formHoneypotLabelId,
                                            htmlFor: formHoneypotInputId,
                                            children: [
                                                "Don't fill this out if you're human:",
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    "aria-labelledby": formHoneypotLabelId,
                                                    id: formHoneypotInputId,
                                                    name: formHoneypotName
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "hidden",
                                        name: "form-name",
                                        value: formId
                                    }),
                                    external_lodash_default().map(formFields, (field, index)=>/*#__PURE__*/ jsx_runtime_.jsx(FormField, {
                                            field: field,
                                            section: section
                                        }, index)),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form-submit",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "submit",
                                            className: "button button--primary",
                                            children: submitLabel
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        });
    }
}

;// CONCATENATED MODULE: ./src/components/GridSection.js





class GridSection extends (external_react_default()).Component {
    renderGridItem(gridItem, index) {
        const title = external_lodash_default().get(gridItem, "title");
        const subtitle = external_lodash_default().get(gridItem, "subtitle");
        const content = external_lodash_default().get(gridItem, "content");
        const image = external_lodash_default().get(gridItem, "image");
        const imageAlt = external_lodash_default().get(gridItem, "image_alt", "");
        const actions = external_lodash_default().get(gridItem, "actions");
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "cell card",
            children: [
                image && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "card__image",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: (0,utils/* withPrefix */.dq)(image),
                        alt: imageAlt
                    })
                }),
                title && /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: "card__title",
                    children: title
                }),
                subtitle && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "card__subtitle",
                    children: subtitle
                }),
                content && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "card__body",
                    children: (0,utils/* markdownify */.gI)(content)
                }),
                !external_lodash_default().isEmpty(actions) && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "card__actions button-group",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(CtaButtons, {
                        actions: actions
                    })
                })
            ]
        }, index);
    }
    render() {
        const section = external_lodash_default().get(this.props, "section");
        const sectionId = external_lodash_default().get(section, "section_id");
        const title = external_lodash_default().get(section, "title");
        const subtitle = external_lodash_default().get(section, "subtitle");
        const gridItems = external_lodash_default().get(section, "grid_items");
        const colNumber = external_lodash_default().get(section, "col_number", "three");
        return /*#__PURE__*/ jsx_runtime_.jsx("section", {
            id: sectionId,
            className: "section section--grid",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container container--lg",
                children: [
                    title && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "section__title line-top",
                        children: title
                    }),
                    subtitle && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "section__subtitle",
                        children: subtitle
                    }),
                    !external_lodash_default().isEmpty(gridItems) && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `grid grid--col-${colNumber}`,
                        children: external_lodash_default().map(gridItems, (gridItem, index)=>this.renderGridItem(gridItem, index))
                    })
                ]
            })
        });
    }
}

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Header.js






class Header extends (external_react_default()).Component {
    constructor(props){
        super(props);
        this.handleWindowResize = this.handleWindowResize.bind(this);
        this.handleRouteChange = this.handleRouteChange.bind(this);
        this.menuOpenRef = /*#__PURE__*/ external_react_default().createRef();
    }
    componentDidMount() {
        window.addEventListener("resize", this.handleWindowResize, true);
        router_default().events.on("routeChangeStart", this.handleRouteChange);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowResize, true);
        router_default().events.off("routeChangeStart", this.handleRouteChange);
    }
    handleWindowResize() {
        const menuOpenElm = external_lodash_default().get(this.menuOpenRef, "current.offsetParent");
        if (menuOpenElm === null) {
            document.body.classList.remove("js-nav-open");
        }
    }
    handleRouteChange() {
        document.body.classList.remove("js-nav-open");
    }
    handleMenuToggle(event) {
        event.preventDefault();
        document.body.classList.toggle("js-nav-open");
    }
    render() {
        const page = external_lodash_default().get(this.props, "page");
        const pageUrl = external_lodash_default().trim((0,utils/* getPageUrl */.XW)(page), "/");
        const config = external_lodash_default().get(this.props, "config");
        const header = external_lodash_default().get(config, "header");
        const logo = external_lodash_default().get(header, "logo_img");
        const logoAlt = external_lodash_default().get(header, "logo_img_alt", "");
        const title = external_lodash_default().get(header, "title");
        const hasNav = external_lodash_default().get(header, "has_nav");
        const navLinks = external_lodash_default().get(header, "nav_links");
        return /*#__PURE__*/ jsx_runtime_.jsx("header", {
            id: "masthead",
            className: "site-header container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "navbar",
                "aria-label": "Main Navigation",
                children: [
                    logo ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "navbar__logo",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(utils/* Link */.rU, {
                            href: (0,utils/* withPrefix */.dq)("/"),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: (0,utils/* withPrefix */.dq)(logo),
                                alt: logoAlt
                            })
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "navbar__title",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(utils/* Link */.rU, {
                            href: (0,utils/* withPrefix */.dq)("/"),
                            children: title
                        })
                    }),
                    hasNav && !external_lodash_default().isEmpty(navLinks) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                id: "navbar__open",
                                className: "navbar__toggle",
                                ref: this.menuOpenRef,
                                onClick: this.handleMenuToggle.bind(this),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "screen-reader-text",
                                        children: "Open Menu"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "icon-menu",
                                        "aria-hidden": "true"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "navbar__menu-container",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "navbar__scroller",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            id: "navbar__close",
                                            className: "navbar__toggle",
                                            onClick: this.handleMenuToggle.bind(this),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "screen-reader-text",
                                                    children: "Close Menu"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "icon-close",
                                                    "aria-hidden": "true"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "navbar__menu menu",
                                            children: external_lodash_default().map(navLinks, (action, index)=>{
                                                const actionUrl = external_lodash_default().trim(external_lodash_default().get(action, "url"), "/");
                                                const actionStyle = external_lodash_default().get(action, "style", "link");
                                                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: (0,utils/* classNames */.AK)("menu__item", {
                                                        "menu__item--current": pageUrl === actionUrl,
                                                        "menu__item--button": actionStyle !== "link"
                                                    }),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Action, {
                                                        action: action
                                                    })
                                                }, index);
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        });
    }
}

;// CONCATENATED MODULE: ./src/components/HeroSection.js





class HeroSection extends (external_react_default()).Component {
    render() {
        const section = external_lodash_default().get(this.props, "section");
        const sectionId = external_lodash_default().get(section, "section_id");
        const title = external_lodash_default().get(section, "title");
        const subtitle = external_lodash_default().get(section, "subtitle");
        const content = external_lodash_default().get(section, "content");
        const actions = external_lodash_default().get(section, "actions");
        return /*#__PURE__*/ jsx_runtime_.jsx("section", {
            id: sectionId,
            className: "hero",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container container--lg",
                children: [
                    title && /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "hero__title",
                        children: title
                    }),
                    content && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hero__body text-block",
                        children: (0,utils/* markdownify */.gI)(content)
                    }),
                    !external_lodash_default().isEmpty(actions) && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hero__actions button-group",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CtaButtons, {
                            actions: actions
                        })
                    })
                ]
            })
        });
    }
}

// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(2791);
;// CONCATENATED MODULE: ./src/components/Layout.js







class Body extends (external_react_default()).Component {
    constructor(props){
        super(props);
        this.handleVideoEmbeds = this.handleVideoEmbeds.bind(this);
    }
    componentDidMount() {
        this.handleVideoEmbeds();
    }
    componentDidUpdate() {
        this.handleVideoEmbeds();
    }
    handleVideoEmbeds() {
        const videoEmbeds = [
            'iframe[src*="youtube.com"]',
            'iframe[src*="vimeo.com"]', 
        ];
        noframe(videoEmbeds.join(","), ".container-md");
    }
    render() {
        const page = external_lodash_default().get(this.props, "page");
        const pageTitle = external_lodash_default().get(page, "title");
        const config = external_lodash_default().get(this.props, "config");
        const configTitle = external_lodash_default().get(config, "title");
        const font = external_lodash_default().get(config, "base_font", "fraunces");
        const colorScheme = external_lodash_default().get(config, "color_scheme", "light");
        const accentColor = external_lodash_default().get(config, "accent_color", "pink");
        const favicon = external_lodash_default().get(config, "favicon");
        const domain = external_lodash_default().trim(external_lodash_default().get(config, "domain", ""), "/");
        const seo = external_lodash_default().get(page, "seo");
        const seoTitle = external_lodash_default().get(seo, "title");
        const title = seoTitle ? seoTitle : [
            pageTitle,
            configTitle
        ].join(" | ");
        const seoDescription = external_lodash_default().get(seo, "description", "");
        const seoRobots = external_lodash_default().get(seo, "robots", []).join(",");
        const seoExtra = external_lodash_default().get(seo, "extra", []).map((meta, index)=>{
            const keyName = external_lodash_default().get(meta, "keyName", "name");
            const name = external_lodash_default().get(meta, "name");
            if (!name) {
                return null;
            }
            const nameAttr = {
                [keyName]: name
            };
            const relativeUrl = external_lodash_default().get(meta, "relativeUrl");
            let value = external_lodash_default().get(meta, "value");
            if (!value) {
                return null;
            }
            if (relativeUrl) {
                if (!domain) {
                    return null;
                }
                value = domain + (0,utils/* withPrefix */.dq)(value);
            }
            return /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                ...nameAttr,
                content: value
            }, index);
        });
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_helmet_.Helmet, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            charSet: "utf-8"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "google",
                            content: "notranslate"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "description",
                            content: seoDescription
                        }),
                        seoRobots && /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "robots",
                            content: seoRobots
                        }),
                        seoExtra,
                        font !== "system-sans" && /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "preconnect",
                            href: "https://fonts.gstatic.com"
                        }),
                        font === "fraunces" && /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,500;1,400;1,500&display=swap",
                            rel: "stylesheet"
                        }),
                        font === "karla" && /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            href: "https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400;1,700&display=swap",
                            rel: "stylesheet"
                        }),
                        favicon && /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "icon",
                            href: (0,utils/* withPrefix */.dq)(favicon)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("body", {
                            className: (0,utils/* classNames */.AK)(`font-${font}`, `palette-${colorScheme}`, `accent-${accentColor}`)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "site-wrap",
                    className: "site",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                            page: page,
                            config: config
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("main", {
                            id: "content",
                            className: "site-content",
                            children: this.props.children
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                            config: config
                        })
                    ]
                })
            ]
        });
    }
}

;// CONCATENATED MODULE: ./src/components/ImageSection.js




class ImageSection extends (external_react_default()).Component {
    render() {
        const section = external_lodash_default().get(this.props, "section");
        const width = external_lodash_default().get(section, "width", "regular");
        const image = external_lodash_default().get(section, "image");
        const imageAlt = external_lodash_default().get(section, "image_alt", "");
        const caption = external_lodash_default().get(section, "caption");
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
            className: (0,utils/* classNames */.AK)("image-block", "container", {
                "container--md": width === "regular",
                "container--lg": width === "wide"
            }),
            children: [
                image && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: (0,utils/* withPrefix */.dq)(image),
                    alt: imageAlt
                }),
                caption && /*#__PURE__*/ jsx_runtime_.jsx("figcaption", {
                    className: "image-block__caption",
                    children: caption
                })
            ]
        });
    }
}

// EXTERNAL MODULE: ./src/components/PortfolioItem.js
var PortfolioItem = __webpack_require__(2278);
;// CONCATENATED MODULE: ./src/components/PortfolioSection.js





class PortfolioSection extends (external_react_default()).Component {
    renderProject(project, index, projectCount, viewAllLabel, viewAllUrl) {
        return /*#__PURE__*/ jsx_runtime_.jsx(PortfolioItem/* default */.Z, {
            project: project
        }, index);
    }
    render() {
        const section = external_lodash_default().get(this.props, "section");
        const sectionId = external_lodash_default().get(section, "section_id");
        const title = external_lodash_default().get(section, "title");
        const subtitle = external_lodash_default().get(section, "subtitle");
        const layoutStyle = external_lodash_default().get(section, "layout_style", "mosaic");
        const viewAllLabel = external_lodash_default().get(section, "view_all_label");
        const viewAllUrl = external_lodash_default().get(section, "view_all_url");
        const projects = external_lodash_default().orderBy(external_lodash_default().get(this.props, "projects", []), "date", "desc");
        const projectCount = external_lodash_default().size(projects);
        return /*#__PURE__*/ jsx_runtime_.jsx("section", {
            id: sectionId,
            className: "section section--portfolio",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container container--lg",
                children: [
                    title && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "section__title line-top",
                        children: title
                    }),
                    subtitle && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "section__subtitle",
                        children: subtitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `grid portfolio-feed portfolio-feed--${layoutStyle}`,
                        children: external_lodash_default().map(projects, (project, index)=>this.renderProject(project, index, projectCount, viewAllLabel, viewAllUrl))
                    })
                ]
            })
        });
    }
}

;// CONCATENATED MODULE: ./src/components/PostsSection.js





class PostsSection extends (external_react_default()).Component {
    render() {
        const section = external_lodash_default().get(this.props, "section");
        const sectionId = external_lodash_default().get(section, "section_id");
        const title = external_lodash_default().get(section, "title");
        const subtitle = external_lodash_default().get(section, "subtitle");
        const actions = external_lodash_default().get(section, "actions");
        const colNumber = external_lodash_default().get(page, "col_number", "three");
        const posts = external_lodash_default().orderBy(external_lodash_default().get(this.props, "posts", []), "date", "desc");
        return /*#__PURE__*/ jsx_runtime_.jsx("section", {
            id: sectionId,
            className: "section section--posts",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container container--lg",
                children: [
                    title && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "section__title line-top",
                        children: title
                    }),
                    subtitle && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "section__subtitle",
                        children: subtitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `grid post-feed post-feed--col-${colNumber}`,
                        children: external_lodash_default().map(posts, (post, index)=>/*#__PURE__*/ jsx_runtime_.jsx(BlogFeedItem/* default */.Z, {
                                post: post
                            }, index))
                    }),
                    !external_lodash_default().isEmpty(actions) && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "section__actions button-group",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CtaButtons, {
                            actions: actions
                        })
                    })
                ]
            })
        });
    }
}

;// CONCATENATED MODULE: ./src/components/TestimonialsSection.js




class TestimonialsSection extends (external_react_default()).Component {
    renderTestimonial(testimonial) {
        const content = external_lodash_default().get(testimonial, "content");
        const avatar = external_lodash_default().get(testimonial, "avatar");
        const avatarAlt = external_lodash_default().get(testimonial, "avatar_alt", "");
        const author = external_lodash_default().get(testimonial, "author");
        const position = external_lodash_default().get(testimonial, "position");
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("blockquote", {
            className: "testimonial",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "testimonial__content",
                    children: content
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                    className: "testimonial__footer",
                    children: [
                        avatar && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "testimonial__avatar",
                            src: (0,utils/* withPrefix */.dq)(avatar),
                            alt: avatarAlt
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "testimonial__details",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "testimonial__author",
                                    children: author
                                }),
                                position && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "testimonial__position",
                                    children: position
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
    render() {
        const section = external_lodash_default().get(this.props, "section");
        const sectionId = external_lodash_default().get(section, "section_id");
        const title = external_lodash_default().get(section, "title");
        const subtitle = external_lodash_default().get(section, "subtitle");
        const testimonials = external_lodash_default().get(section, "testimonials");
        return /*#__PURE__*/ jsx_runtime_.jsx("section", {
            id: sectionId,
            className: "section section--testimonials",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container container--lg",
                children: [
                    title && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "section__title line-top",
                        children: title
                    }),
                    subtitle && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "section__subtitle",
                        children: subtitle
                    }),
                    !external_lodash_default().isEmpty(testimonials) && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "grid",
                        children: external_lodash_default().map(testimonials, (testimonial, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "cell",
                                children: this.renderTestimonial(testimonial)
                            }, index))
                    })
                ]
            })
        });
    }
}

;// CONCATENATED MODULE: ./src/components/TextSection.js




class TextSection extends (external_react_default()).Component {
    render() {
        const section = external_lodash_default().get(this.props, "section");
        const content = external_lodash_default().get(section, "content");
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "text-block container container--md",
            children: (0,utils/* markdownify */.gI)(content)
        });
    }
}

;// CONCATENATED MODULE: ./src/components/index.js





















/* harmony default export */ const components = ({
    Action: Action,
    ActionLink: ActionLink,
    BlogFeedItem: BlogFeedItem/* default */.Z,
    ContentSection: ContentSection,
    CtaButtons: CtaButtons,
    CtaSection: CtaSection,
    Footer: Footer,
    FormField: FormField,
    FormSection: FormSection,
    GridSection: GridSection,
    Header: Header,
    HeroSection: HeroSection,
    Layout: Body,
    Icon: Icon,
    ImageSection: ImageSection,
    PortfolioItem: PortfolioItem/* default */.Z,
    PortfolioSection: PortfolioSection,
    PostsSection: PostsSection,
    TestimonialsSection: TestimonialsSection,
    TextSection: TextSection
});


/***/ }),

/***/ 6563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Advanced)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8144);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4083);





class Advanced extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    render() {
        const data = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(this.props, "data");
        const config = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(data, "config");
        const posts = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(this.props, "posts");
        const projects = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(this.props, "projects");
        const page = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(this.props, "page");
        const hideTitle = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(page, "hide_title");
        const title = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(page, "title");
        const subtitle = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(page, "subtitle");
        const sections = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(page, "sections");
        const pageUrl = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getPageUrl */ .XW)(page);
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_index__WEBPACK_IMPORTED_MODULE_3__/* .Layout */ .Ar, {
            page: page,
            config: config,
            children: [
                !hideTitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                    className: "section section--header",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "container container--lg",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "section__title line-top",
                                children: title
                            }),
                            subtitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "section__subtitle",
                                children: subtitle
                            })
                        ]
                    })
                }),
                lodash__WEBPACK_IMPORTED_MODULE_2___default().map(sections, (section, index)=>{
                    const sectionType = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(section, "type");
                    const component = lodash__WEBPACK_IMPORTED_MODULE_2___default().upperFirst(lodash__WEBPACK_IMPORTED_MODULE_2___default().camelCase(sectionType));
                    if (!component) {
                        throw new Error(`page section does not have the 'type' property, page: ${pageUrl}`);
                    }
                    const Component = _components_index__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP[component];
                    if (!Component) {
                        throw new Error(`no component matching the page section's type: ${sectionType}`);
                    }
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        section: section,
                        data: data,
                        posts: posts,
                        projects: projects
                    }, index);
                })
            ]
        });
    }
}


/***/ }),

/***/ 1041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Blog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8144);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4083);
/* harmony import */ var _components_BlogFeedItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5565);






class Blog extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    render() {
        const data = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(this.props, "data");
        const config = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(data, "config");
        const page = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(this.props, "page");
        const title = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(page, "title");
        const subtitle = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(page, "subtitle");
        const hideTitle = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(page, "hide_title");
        const colNumber = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(page, "col_number", "three");
        const posts = lodash__WEBPACK_IMPORTED_MODULE_2___default().orderBy(lodash__WEBPACK_IMPORTED_MODULE_2___default().get(this.props, "posts", []), "date", "desc");
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_index__WEBPACK_IMPORTED_MODULE_3__/* .Layout */ .Ar, {
            page: page,
            config: config,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                    className: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .classNames */ .AK)("section", "section--header", {
                        "screen-reader-text": hideTitle
                    }),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "container container--lg",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "section__title line-top",
                                children: title
                            }),
                            subtitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "section__subtitle",
                                children: subtitle
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "section section--portfolio",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container container--lg",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `grid post-feed post-feed--col-${colNumber}`,
                            children: lodash__WEBPACK_IMPORTED_MODULE_2___default().map(posts, (post, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BlogFeedItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    post: post
                                }, index))
                        })
                    })
                })
            ]
        });
    }
}


/***/ }),

/***/ 4623:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _advanced__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6563);
/* harmony import */ var _blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1041);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(650);
/* harmony import */ var _portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5898);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8201);
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2754);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_post__WEBPACK_IMPORTED_MODULE_4__]);
_post__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    advanced: _advanced__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
    blog: _blog__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    page: _page__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    portfolio: _portfolio__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
    post: _post__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
    project: _project__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8144);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4083);





class Page extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    render() {
        const data = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(this.props, "data");
        const config = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(data, "config");
        const page = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(this.props, "page");
        const title = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(page, "title");
        const subtitle = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(page, "subtitle");
        const image = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(page, "image");
        const imageAlt = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(page, "image_alt", "");
        const markdownContent = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(page, "markdown_content");
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index__WEBPACK_IMPORTED_MODULE_3__/* .Layout */ .Ar, {
            page: page,
            config: config,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                className: "post",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                        className: "post__header",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "container container--md",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "post__title line-top",
                                    children: title
                                }),
                                subtitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "post__subtitle",
                                    children: subtitle
                                })
                            ]
                        })
                    }),
                    image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "post__image",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container container--lg",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .withPrefix */ .dq)(image),
                                alt: imageAlt
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "post__body text-block",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container container--md",
                            children: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .markdownify */ .gI)(markdownContent)
                        })
                    })
                ]
            })
        });
    }
}


/***/ }),

/***/ 5898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Portfolio)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8144);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4083);
/* harmony import */ var _components_PortfolioItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2278);






class Portfolio extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    renderProject(project, index) {
        const title = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(project, "title");
        const subtitle = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(project, "subtitle");
        const thumbImage = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(project, "thumb_image");
        const thumbImageAlt = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(project, "thumb_image_alt", "");
        const projectUrl = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getPageUrl */ .XW)(project, {
            withPrefix: true
        });
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
            className: "cell project-card",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utils__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU, {
                href: projectUrl,
                className: "project-card__link",
                children: [
                    thumbImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "project-card__image",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .withPrefix */ .dq)(thumbImage),
                            alt: thumbImageAlt
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                        className: "project-card__header",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "project-card__title",
                                children: title
                            }),
                            subtitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "project-card__subtitle",
                                children: subtitle
                            })
                        ]
                    })
                ]
            })
        }, index);
    }
    render() {
        const data = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(this.props, "data");
        const config = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(data, "config");
        const page = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(this.props, "page");
        const title = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(page, "title");
        const subtitle = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(page, "subtitle");
        const hideTitle = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(page, "hide_title");
        const layoutStyle = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(page, "layout_style", "mosaic");
        const projects = lodash__WEBPACK_IMPORTED_MODULE_2___default().orderBy(lodash__WEBPACK_IMPORTED_MODULE_2___default().get(this.props, "projects", []), "date", "desc");
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_index__WEBPACK_IMPORTED_MODULE_3__/* .Layout */ .Ar, {
            page: page,
            config: config,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                    className: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .classNames */ .AK)("section", "section--header", {
                        "screen-reader-text": hideTitle
                    }),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "container container--lg",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "section__title line-top",
                                children: title
                            }),
                            subtitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "section__subtitle",
                                children: subtitle
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "section section--portfolio",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container container--lg",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `grid portfolio-feed portfolio-feed--${layoutStyle}`,
                            children: lodash__WEBPACK_IMPORTED_MODULE_2___default().map(projects, (project, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PortfolioItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    project: project
                                }, index))
                        })
                    })
                })
            ]
        });
    }
}


/***/ }),

/***/ 8201:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Post)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment_strftime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6839);
/* harmony import */ var moment_strftime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_strftime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9832);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8144);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4083);
/* harmony import */ var _components_BlogFeedItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5565);
/* harmony import */ var _components_FreelancerWebComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1667);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([markdown_to_jsx__WEBPACK_IMPORTED_MODULE_4__]);
markdown_to_jsx__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









class Post extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    renderPostNavLinks(post, index, posts, postCount, currentPostUrl) {
        const postUrl = (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .getPageUrl */ .XW)(post);
        if (postUrl !== currentPostUrl) {
            return null;
        }
        const prevIndex = index - 1;
        const prevPost = index !== 0 ? posts[prevIndex] : null;
        const nextIndex = index + 1;
        const nextPost = index < postCount - 1 ? posts[nextIndex] : null;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid post-feed post-feed--col-two",
            children: [
                prevPost && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BlogFeedItem__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    post: prevPost
                }),
                nextPost && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BlogFeedItem__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    post: nextPost
                })
            ]
        });
    }
    render() {
        const data = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(this.props, "data");
        const config = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(data, "config");
        const page = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(this.props, "page");
        const title = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(page, "title");
        const subtitle = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(page, "subtitle");
        const image = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(page, "image");
        const imageAlt = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(page, "image_alt", "");
        const date = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(page, "date");
        const dateTimeAttr = moment_strftime__WEBPACK_IMPORTED_MODULE_3___default()(date).strftime("%Y-%m-%d %H:%M");
        const formattedDate = moment_strftime__WEBPACK_IMPORTED_MODULE_3___default()(date).strftime("%A, %B %e, %Y");
        const markdownContent = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(page, "markdown_content");
        const postUrl = (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .getPageUrl */ .XW)(page);
        const posts = lodash__WEBPACK_IMPORTED_MODULE_2___default().orderBy(lodash__WEBPACK_IMPORTED_MODULE_2___default().get(this.props, "posts", []), "date", "desc");
        const postCount = lodash__WEBPACK_IMPORTED_MODULE_2___default().size(posts);
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_index__WEBPACK_IMPORTED_MODULE_5__/* .Layout */ .Ar, {
            page: page,
            config: config,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                    className: "post",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                            className: "post__header",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "container container--md",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "post__title line-top",
                                        children: title
                                    }),
                                    subtitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "post__subtitle",
                                        children: subtitle
                                    })
                                ]
                            })
                        }),
                        image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "post__image",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "container container--lg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .withPrefix */ .dq)(image),
                                    alt: imageAlt
                                })
                            })
                        }),
                        markdownContent && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "post__body text-block",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "container container--md",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "post-content inner-sm",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(markdown_to_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                        options: {
                                            overrides: {
                                                FreelancerWebComponent: {
                                                    component: _components_FreelancerWebComponent__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z
                                                }
                                            }
                                        },
                                        children: markdownContent
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                            className: "post__meta",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "container container--md",
                                children: [
                                    "Posted on",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                        className: "published",
                                        dateTime: dateTimeAttr,
                                        children: formattedDate
                                    })
                                ]
                            })
                        })
                    ]
                }),
                postCount > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                    className: "section section--posts",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "container container--lg",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "section__title line-top",
                                children: "Read Next"
                            }),
                            lodash__WEBPACK_IMPORTED_MODULE_2___default().map(posts, (post, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                                    children: this.renderPostNavLinks(post, index, posts, postCount, postUrl)
                                }, index))
                        ]
                    })
                })
            ]
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8144);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4083);
/* harmony import */ var _components_PortfolioItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2278);






class Project extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    renderProjectNavLinks(project, index, projects, projectCount, currentProjectUrl) {
        const projectUrl = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getPageUrl */ .XW)(project);
        if (projectUrl !== currentProjectUrl) {
            return null;
        }
        const prevIndex = index - 1;
        const prevProject = index !== 0 ? projects[prevIndex] : null;
        const nextIndex = index + 1;
        const nextProject = index < projectCount - 1 ? projects[nextIndex] : null;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid portfolio-feed portfolio-feed--tiles",
            children: [
                prevProject && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PortfolioItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    project: prevProject
                }),
                nextProject && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PortfolioItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    project: nextProject
                })
            ]
        });
    }
    render() {
        const data = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(this.props, "data");
        const config = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(data, "config");
        const page = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(this.props, "page");
        const title = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(page, "title");
        const subtitle = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(page, "subtitle");
        const sections = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(page, "sections");
        const projectUrl = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getPageUrl */ .XW)(page);
        const projects = lodash__WEBPACK_IMPORTED_MODULE_2___default().orderBy(lodash__WEBPACK_IMPORTED_MODULE_2___default().get(this.props, "projects", []), "date", "desc");
        const projectCount = lodash__WEBPACK_IMPORTED_MODULE_2___default().size(projects);
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_index__WEBPACK_IMPORTED_MODULE_3__/* .Layout */ .Ar, {
            page: page,
            config: config,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                    className: "project",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                            className: "project__header",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "container container--md",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "project__title line-top",
                                        children: title
                                    }),
                                    subtitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "project__subtitle",
                                        children: subtitle
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "project__body",
                            children: lodash__WEBPACK_IMPORTED_MODULE_2___default().map(sections, (section, index)=>{
                                const sectionType = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(section, "type");
                                const component = lodash__WEBPACK_IMPORTED_MODULE_2___default().upperFirst(lodash__WEBPACK_IMPORTED_MODULE_2___default().camelCase(sectionType));
                                if (!component) {
                                    throw new Error(`page section does not have the 'type' property, page: ${projectUrl}`);
                                }
                                const Component = _components_index__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP[component];
                                if (!Component) {
                                    throw new Error(`no component matching the page section's type: ${sectionType}`);
                                }
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                    section: section,
                                    data: data
                                }, index);
                            })
                        })
                    ]
                }),
                projectCount > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                    className: "section section--portfolio",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "container container--lg",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "section__title line-top",
                                children: "More Projects"
                            }),
                            lodash__WEBPACK_IMPORTED_MODULE_2___default().map(projects, (project, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                                    children: this.renderProjectNavLinks(project, index, projects, projectCount, projectUrl)
                                }, index))
                        ]
                    })
                })
            ]
        });
    }
}


/***/ }),

/***/ 397:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sourcebit_target_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8287);
/* harmony import */ var sourcebit_target_next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sourcebit_target_next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4623);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts__WEBPACK_IMPORTED_MODULE_4__]);
_layouts__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





class Page extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    render() {
        const modelName = lodash__WEBPACK_IMPORTED_MODULE_2___default().get(this.props, "page.__metadata.modelName");
        const PageLayout = _layouts__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP[modelName];
        if (!PageLayout) {
            throw new Error(`no page layout matching the page model: ${modelName}`);
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PageLayout, {
            ...this.props
        });
    }
}
async function getStaticPaths() {
    console.log("Page [...slug].js getStaticPaths");
    const paths = await sourcebit_target_next__WEBPACK_IMPORTED_MODULE_3__.sourcebitDataClient.getStaticPaths();
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    console.log("Page [...slug].js getStaticProps, params: ", params);
    const pagePath = "/" + (params.slug ? params.slug.join("/") : "");
    const props = await sourcebit_target_next__WEBPACK_IMPORTED_MODULE_3__.sourcebitDataClient.getStaticPropsForPageAtPath(pagePath);
    return {
        props
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "rU": () => (/* reexport */ Link),
  "AK": () => (/* reexport */ classNames),
  "XW": () => (/* reexport */ getPageUrl),
  "vn": () => (/* reexport */ htmlToReact),
  "gI": () => (/* reexport */ markdownify),
  "dq": () => (/* reexport */ withPrefix)
});

// UNUSED EXPORTS: attribute, getData, getPage, pathJoin

;// CONCATENATED MODULE: external "classnames"
const external_classnames_namespaceObject = require("classnames");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
;// CONCATENATED MODULE: ./src/utils/classNames.js

// A simple wrapper around classNames to return null, if no classes were generated
// Otherwise, original classNames returns empty string which causes class="" to be generated
function classNames(...args) {
    return external_classnames_default().call(this, ...args) || null;
}

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);
;// CONCATENATED MODULE: ./src/utils/getPage.js

/**
 * Get the page at the provided `urlPath`.
 *
 * @param {Array} pages Array of page objects. All pages must have '__metadata.urlPath' field.
 * @param {string} urlPath The url path to find the page by
 * @return {Object}
 */ function getPage(pages, urlPath) {
    urlPath = _.trim(urlPath, "/");
    return _.find(pages, (page)=>{
        const pageUrlPath = _.trim(_.get(page, "__metadata.urlPath"), "/");
        return urlPath === pageUrlPath;
    });
}

;// CONCATENATED MODULE: ./src/utils/getData.js

function getData(props, dataPath) {
    dataPath = _.trim(dataPath, "/");
    if (_.startsWith(dataPath, "content/data/")) {
        dataPath = dataPath.replace("content/data/", "");
    }
    // remove extension
    dataPath = dataPath.replace(/\.\w+$/, "");
    const path = dataPath.split("/");
    return _.get(props, path);
}

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-html-parser"
const external_react_html_parser_namespaceObject = require("react-html-parser");
var external_react_html_parser_default = /*#__PURE__*/__webpack_require__.n(external_react_html_parser_namespaceObject);
;// CONCATENATED MODULE: external "react-script-tag"
const external_react_script_tag_namespaceObject = require("react-script-tag");
var external_react_script_tag_default = /*#__PURE__*/__webpack_require__.n(external_react_script_tag_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/utils/link.js



function Link({ children , href , ...other }) {
    // Pass Any internal link to Next.js Link, for anything else, use <a> tag
    const internal = /^\/(?!\/)/.test(href);
    if (internal) {
        // For root page, use index.js, for rest use [...slug].js
        const page = href === "/" ? "/" : "/[...slug]";
        return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: page,
            as: href,
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                ...other,
                children: children
            })
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: href,
        ...other,
        children: children
    });
}

;// CONCATENATED MODULE: ./src/utils/htmlToReact.js






const convertChildren = (children, index)=>external_lodash_default().map(children, (childNode)=>(0,external_react_html_parser_namespaceObject.convertNodeToElement)(childNode, index, external_lodash_default().noop()));
function htmlToReact(html) {
    if (!html) {
        return null;
    }
    return external_react_html_parser_default()(html, {
        transform: (node, index)=>{
            if (node.type === "script") {
                if (!external_lodash_default().isEmpty(node.children)) {
                    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_script_tag_default()), {
                        ...node.attribs,
                        children: convertChildren(node.children, index)
                    }, index);
                } else {
                    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_script_tag_default()), {
                        ...node.attribs
                    }, index);
                }
            } else if (node.type === "tag" && node.name === "a") {
                const href = node.attribs.href;
                const props = external_lodash_default().omit(node.attribs, "href");
                // use Link only if there are no custom attributes like style, class, and what's not that might break react
                if (external_lodash_default().isEmpty(props)) {
                    return /*#__PURE__*/ jsx_runtime_.jsx(Link, {
                        href: href,
                        ...props,
                        children: convertChildren(node.children, index)
                    }, index);
                }
            }
        }
    });
}
;

;// CONCATENATED MODULE: ./src/utils/withPrefix.js
const withPrefix_ = __webpack_require__(6517);
const pathPrefix = (__webpack_require__(5177)/* .path_prefix */ .Hr);
function withPrefix(url) {
    if (!url) {
        return url;
    }
    if (withPrefix_.startsWith(url, "#") || withPrefix_.startsWith(url, "http://") || withPrefix_.startsWith(url, "https://")) {
        return url;
    }
    const basePath = withPrefix_.trim(pathPrefix, "/");
    return "/" + withPrefix_.compact([
        basePath,
        withPrefix_.trimStart(url, "/")
    ]).join("/");
}

;// CONCATENATED MODULE: ./src/utils/getPageUrl.js


function getPageUrl(post, { withPrefix: addPrefix = false  } = {}) {
    const urlPath = external_lodash_default().get(post, "__metadata.urlPath");
    return addPrefix ? withPrefix(urlPath) : urlPath;
}

;// CONCATENATED MODULE: ./src/utils/pathJoin.js

function pathJoin(...pathParts) {
    const result = _.compact(pathParts).join("/").replace(/\/{2,}/g, "/");
    return result || ".";
}

;// CONCATENATED MODULE: external "marked"
const external_marked_namespaceObject = require("marked");
var external_marked_default = /*#__PURE__*/__webpack_require__.n(external_marked_namespaceObject);
;// CONCATENATED MODULE: ./src/utils/markdownify.js


function markdownify(markdown) {
    if (!markdown) {
        return null;
    }
    return htmlToReact(external_marked_default()(markdown));
}
;

;// CONCATENATED MODULE: ./src/utils/index.js












/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 6839:
/***/ ((module) => {

module.exports = require("moment-strftime");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2791:
/***/ ((module) => {

module.exports = require("react-helmet");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8287:
/***/ ((module) => {

module.exports = require("sourcebit-target-next");

/***/ }),

/***/ 9832:
/***/ ((module) => {

module.exports = import("markdown-to-jsx");;

/***/ }),

/***/ 5177:
/***/ ((module) => {

module.exports = {"Hr":"/"};

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664], () => (__webpack_exec__(397)));
module.exports = __webpack_exports__;

})();