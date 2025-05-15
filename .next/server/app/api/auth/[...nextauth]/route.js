/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "(rsc)/./auth.ts":
/*!*****************!*\
  !*** ./auth.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   handlers: () => (/* binding */ handlers),\n/* harmony export */   signIn: () => (/* binding */ signIn),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _src_lib_Controller_userController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/lib/Controller/userController */ \"(rsc)/./src/lib/Controller/userController.js\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(rsc)/./node_modules/@auth/mongodb-adapter/index.js\");\n/* harmony import */ var _src_lib_databases__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/lib/databases */ \"(rsc)/./src/lib/databases.js\");\n\n\n\n\n\n//import {saltAndHashPassword} from \"@/utils/password\" hash 함수.\nconst { handlers, signIn, signOut, auth } = (0,next_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_3__.MongoDBAdapter)(_src_lib_databases__WEBPACK_IMPORTED_MODULE_4__.connectDB),\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            credentials: {\n                id: {},\n                password: {}\n            },\n            authorize: async (credentials)=>{\n                let user = null;\n                user = await (0,_src_lib_Controller_userController__WEBPACK_IMPORTED_MODULE_2__.LoginUser)({\n                    id: credentials.id,\n                    password: credentials.password\n                });\n                if (user.message) {\n                    throw new Error(user.message);\n                }\n                return user;\n            }\n        })\n    ]\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hdXRoLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFnQztBQUN5QjtBQUNNO0FBQ1g7QUFDTDtBQUMvQztBQUNPLE1BQU0sRUFBRUssUUFBUSxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsSUFBQUEsRUFBTSxHQUFHUixxREFBUSxDQUFDO0lBQzFEUyxPQUFPLEVBQUNOLHFFQUFjLENBQUNDLHlEQUFTLENBQUM7SUFDakNNLFNBQVMsRUFBRTtRQUNUVCwyRUFBVyxDQUFDO1lBQ1ZVLFdBQVcsRUFBQztnQkFDVkMsRUFBRSxFQUFDLENBQUMsQ0FBQztnQkFDTEMsUUFBUSxFQUFDLENBQUM7WUFDWixDQUFDO1lBQ0RDLFNBQVMsRUFBQyxPQUFNSCxXQUFXLElBQUc7Z0JBQzVCLElBQUlJLElBQUksR0FBRyxJQUFJO2dCQUVmQSxJQUFJLEdBQUcsTUFBTWIsNkVBQVMsQ0FBQztvQkFBQ1UsRUFBRSxFQUFDRCxXQUFXLENBQUNDLEVBQUU7b0JBQUNDLFFBQVEsRUFBQ0YsV0FBVyxDQUFDRSxRQUFBQTtnQkFBUSxDQUFDLENBQUM7Z0JBRXpFLElBQUdFLElBQUksQ0FBQ0MsT0FBTyxFQUFDO29CQUNkLE1BQU0sSUFBSUMsS0FBSyxDQUFDRixJQUFJLENBQUNDLE9BQU8sQ0FBQztnQkFDL0I7Z0JBQ0EsT0FBT0QsSUFBSTtZQUNiO1FBQ0YsQ0FBQyxDQUFDO0tBQUE7QUFFTixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXNlb25qb25nL0Rlc2t0b3Av7Luk666k64uI7LyA7J207IWY7Y6Y7J207KeAL2F1dGgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxuaW1wb3J0IENyZWRlbnRpYWxzIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCJcbmltcG9ydCB7IExvZ2luVXNlciB9IGZyb20gXCIuL3NyYy9saWIvQ29udHJvbGxlci91c2VyQ29udHJvbGxlclwiO1xuaW1wb3J0IHtNb25nb0RCQWRhcHRlcn0gZnJvbSAnQGF1dGgvbW9uZ29kYi1hZGFwdGVyJ1xuaW1wb3J0IHsgY29ubmVjdERCIH0gZnJvbSBcIi4vc3JjL2xpYi9kYXRhYmFzZXNcIjtcbi8vaW1wb3J0IHtzYWx0QW5kSGFzaFBhc3N3b3JkfSBmcm9tIFwiQC91dGlscy9wYXNzd29yZFwiIGhhc2gg7ZWo7IiYLlxuZXhwb3J0IGNvbnN0IHsgaGFuZGxlcnMsIHNpZ25Jbiwgc2lnbk91dCwgYXV0aCB9ID0gTmV4dEF1dGgoe1xuICBhZGFwdGVyOk1vbmdvREJBZGFwdGVyKGNvbm5lY3REQiksXG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzKHtcbiAgICAgIGNyZWRlbnRpYWxzOntcbiAgICAgICAgaWQ6e30sXG4gICAgICAgIHBhc3N3b3JkOnt9LFxuICAgICAgfSxcbiAgICAgIGF1dGhvcml6ZTphc3luYyhjcmVkZW50aWFscyk9PntcbiAgICAgICAgbGV0IHVzZXIgPSBudWxsO1xuXG4gICAgICAgIHVzZXIgPSBhd2FpdCBMb2dpblVzZXIoe2lkOmNyZWRlbnRpYWxzLmlkLHBhc3N3b3JkOmNyZWRlbnRpYWxzLnBhc3N3b3JkfSk7XG4gICAgICAgIFxuICAgICAgICBpZih1c2VyLm1lc3NhZ2Upe1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1c2VyLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgfVxuICAgIH0pXG4gIF0sXG59KSJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzIiwiTG9naW5Vc2VyIiwiTW9uZ29EQkFkYXB0ZXIiLCJjb25uZWN0REIiLCJoYW5kbGVycyIsInNpZ25JbiIsInNpZ25PdXQiLCJhdXRoIiwiYWRhcHRlciIsInByb3ZpZGVycyIsImNyZWRlbnRpYWxzIiwiaWQiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInVzZXIiLCJtZXNzYWdlIiwiRXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./auth.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fyuseonjong%2FDesktop%2F%EC%BB%A4%EB%AE%A4%EB%8B%88%EC%BC%80%EC%9D%B4%EC%85%98%ED%8E%98%EC%9D%B4%EC%A7%80%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyuseonjong%2FDesktop%2F%EC%BB%A4%EB%AE%A4%EB%8B%88%EC%BC%80%EC%9D%B4%EC%85%98%ED%8E%98%EC%9D%B4%EC%A7%80&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fyuseonjong%2FDesktop%2F%EC%BB%A4%EB%AE%A4%EB%8B%88%EC%BC%80%EC%9D%B4%EC%85%98%ED%8E%98%EC%9D%B4%EC%A7%80%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyuseonjong%2FDesktop%2F%EC%BB%A4%EB%AE%A4%EB%8B%88%EC%BC%80%EC%9D%B4%EC%85%98%ED%8E%98%EC%9D%B4%EC%A7%80&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_yuseonjong_Desktop_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/yuseonjong/Desktop/커뮤니케이션페이지/src/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_yuseonjong_Desktop_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnl1c2VvbmpvbmclMkZEZXNrdG9wJTJGJUVDJUJCJUE0JUVCJUFFJUE0JUVCJThCJTg4JUVDJUJDJTgwJUVDJTlEJUI0JUVDJTg1JTk4JUVEJThFJTk4JUVDJTlEJUI0JUVDJUE3JTgwJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnl1c2VvbmpvbmclMkZEZXNrdG9wJTJGJUVDJUJCJUE0JUVCJUFFJUE0JUVCJThCJTg4JUVDJUJDJTgwJUVDJTlEJUI0JUVDJTg1JTk4JUVEJThFJTk4JUVDJTlEJUI0JUVDJUE3JTgwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUMyQjtBQUN4RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3l1c2VvbmpvbmcvRGVza3RvcC/su6TrrqTri4jsvIDsnbTshZjtjpjsnbTsp4Avc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy95dXNlb25qb25nL0Rlc2t0b3Av7Luk666k64uI7LyA7J207IWY7Y6Y7J207KeAL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fyuseonjong%2FDesktop%2F%EC%BB%A4%EB%AE%A4%EB%8B%88%EC%BC%80%EC%9D%B4%EC%85%98%ED%8E%98%EC%9D%B4%EC%A7%80%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyuseonjong%2FDesktop%2F%EC%BB%A4%EB%AE%A4%EB%8B%88%EC%BC%80%EC%9D%B4%EC%85%98%ED%8E%98%EC%9D%B4%EC%A7%80&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../auth */ \"(rsc)/./auth.ts\");\n\nconst { GET, POST } = _auth__WEBPACK_IMPORTED_MODULE_0__.handlers;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBQ3ZDLE1BQU0sRUFBRUMsR0FBRyxFQUFFQyxJQUFBQSxFQUFNLEdBQUdGLDJDQUFRIiwic291cmNlcyI6WyIvVXNlcnMveXVzZW9uam9uZy9EZXNrdG9wL+y7pOuupOuLiOy8gOydtOyFmO2OmOydtOyngC9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlcnMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vYXV0aFwiXG5leHBvcnQgY29uc3QgeyBHRVQsIFBPU1QgfSA9IGhhbmRsZXJzIl0sIm5hbWVzIjpbImhhbmRsZXJzIiwiR0VUIiwiUE9TVCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/Controller/userController.js":
/*!**********************************************!*\
  !*** ./src/lib/Controller/userController.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LoginUser: () => (/* binding */ LoginUser),\n/* harmony export */   RegisterUser: () => (/* binding */ RegisterUser)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _databases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../databases */ \"(rsc)/./src/lib/databases.js\");\n\n\nasync function RegisterUser(user) {\n    try {\n        const client = await _databases__WEBPACK_IMPORTED_MODULE_1__.connectDB;\n        const db = client.db('Gallery');\n        const userData = db.collection('User');\n        if (await userData.findOne({\n            id: user.id\n        })) {\n            return {\n                message: \"이미 존재하는 아이디입니다.\",\n                status: 400\n            };\n        }\n        if (await userData.findOne({\n            email: user.email\n        })) {\n            return {\n                message: \"이미 존재하는 이메일입니다.\",\n                status: 400\n            };\n        }\n        if (await userData.findOne({\n            nickName: user.nickName\n        })) {\n            return {\n                message: \"이미 존재하는 닉네임입니다.\",\n                status: 400\n            };\n        }\n        const result = await userData.insertOne(user);\n        return result;\n    } catch (err) {\n        console.log(err);\n        throw err;\n    }\n}\nasync function LoginUser(user) {\n    try {\n        const client = await _databases__WEBPACK_IMPORTED_MODULE_1__.connectDB;\n        const db = client.db('Gallery');\n        const userData = db.collection('User');\n        const result = await userData.findOne({\n            id: user.id,\n            password: user.password\n        });\n        if (!result) {\n            return {\n                message: \"아이디 또는 비밀번호가 일치하지 않습니다.\",\n                status: 400\n            };\n        }\n        return result;\n    } catch (err) {\n        console.log(err);\n        throw err;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL0NvbnRyb2xsZXIvdXNlckNvbnRyb2xsZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQztBQUNGO0FBRWpDLGVBQWVFLFlBQVlBLENBQUNDLElBQUksRUFBQztJQUNwQyxJQUFHO1FBQ0MsTUFBTUMsTUFBTSxHQUFHLE1BQU1ILGlEQUFTO1FBQzlCLE1BQU1JLEVBQUUsR0FBR0QsTUFBTSxDQUFDQyxFQUFFLENBQUMsU0FBUyxDQUFDO1FBQy9CLE1BQU1DLFFBQVEsR0FBR0QsRUFBRSxDQUFDRSxVQUFVLENBQUMsTUFBTSxDQUFDO1FBRXRDLElBQUcsTUFBTUQsUUFBUSxDQUFDRSxPQUFPLENBQUM7WUFBQ0MsRUFBRSxFQUFDTixJQUFJLENBQUNNLEVBQUFBO1FBQUUsQ0FBQyxDQUFDLEVBQUM7WUFDcEMsT0FBTztnQkFBQ0MsT0FBTyxFQUFDLGlCQUFpQjtnQkFBQ0MsTUFBTSxFQUFDO1lBQUcsQ0FBQztRQUNqRDtRQUNBLElBQUcsTUFBTUwsUUFBUSxDQUFDRSxPQUFPLENBQUM7WUFBQ0ksS0FBSyxFQUFDVCxJQUFJLENBQUNTLEtBQUFBO1FBQUssQ0FBQyxDQUFDLEVBQUM7WUFDMUMsT0FBTztnQkFBQ0YsT0FBTyxFQUFDLGlCQUFpQjtnQkFBQ0MsTUFBTSxFQUFDO1lBQUcsQ0FBQztRQUNqRDtRQUNBLElBQUcsTUFBTUwsUUFBUSxDQUFDRSxPQUFPLENBQUM7WUFBQ0ssUUFBUSxFQUFDVixJQUFJLENBQUNVLFFBQUFBO1FBQVEsQ0FBQyxDQUFDLEVBQUM7WUFDaEQsT0FBTztnQkFBQ0gsT0FBTyxFQUFDLGlCQUFpQjtnQkFBQ0MsTUFBTSxFQUFDO1lBQUcsQ0FBQztRQUNqRDtRQUNBLE1BQU1HLE1BQU0sR0FBRyxNQUFNUixRQUFRLENBQUNTLFNBQVMsQ0FBQ1osSUFBSSxDQUFDO1FBQzdDLE9BQU9XLE1BQU07SUFDakIsQ0FBQyxRQUFNRSxHQUFHLEVBQUM7UUFDUEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQztRQUNoQixNQUFNQSxHQUFHO0lBQ2I7QUFDSjtBQUVPLGVBQWVHLFNBQVNBLENBQUNoQixJQUFJLEVBQUM7SUFDakMsSUFBRztRQUNDLE1BQU1DLE1BQU0sR0FBRyxNQUFNSCxpREFBUztRQUM5QixNQUFNSSxFQUFFLEdBQUdELE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLFNBQVMsQ0FBQztRQUMvQixNQUFNQyxRQUFRLEdBQUdELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUN0QyxNQUFNTyxNQUFNLEdBQUcsTUFBTVIsUUFBUSxDQUFDRSxPQUFPLENBQUM7WUFBQ0MsRUFBRSxFQUFDTixJQUFJLENBQUNNLEVBQUU7WUFBRVcsUUFBUSxFQUFDakIsSUFBSSxDQUFDaUIsUUFBQUE7UUFBUSxDQUFDLENBQUM7UUFFM0UsSUFBRyxDQUFDTixNQUFNLEVBQUM7WUFDUCxPQUFPO2dCQUFDSixPQUFPLEVBQUMseUJBQXlCO2dCQUFDQyxNQUFNLEVBQUM7WUFBRyxDQUFDO1FBQ3pEO1FBQ0EsT0FBT0csTUFBTTtJQUNqQixDQUFDLFFBQU1FLEdBQUcsRUFBQztRQUNQQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO1FBQ2hCLE1BQU1BLEdBQUc7SUFDYjtBQUNKIiwic291cmNlcyI6WyIvVXNlcnMveXVzZW9uam9uZy9EZXNrdG9wL+y7pOuupOuLiOy8gOydtOyFmO2OmOydtOyngC9zcmMvbGliL0NvbnRyb2xsZXIvdXNlckNvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBjb25uZWN0REIgfSBmcm9tIFwiLi4vZGF0YWJhc2VzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBSZWdpc3RlclVzZXIodXNlcil7XG4gICAgdHJ5e1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0REI7XG4gICAgICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCdHYWxsZXJ5Jyk7XG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gZGIuY29sbGVjdGlvbignVXNlcicpO1xuICAgICAgICBcbiAgICAgICAgaWYoYXdhaXQgdXNlckRhdGEuZmluZE9uZSh7aWQ6dXNlci5pZH0pKXtcbiAgICAgICAgICAgIHJldHVybiB7bWVzc2FnZTpcIuydtOuvuCDsobTsnqztlZjripQg7JWE7J2065SU7J6F64uI64ukLlwiLHN0YXR1czo0MDB9O1xuICAgICAgICB9XG4gICAgICAgIGlmKGF3YWl0IHVzZXJEYXRhLmZpbmRPbmUoe2VtYWlsOnVzZXIuZW1haWx9KSl7XG4gICAgICAgICAgICByZXR1cm4ge21lc3NhZ2U6XCLsnbTrr7gg7KG07J6s7ZWY64qUIOydtOuplOydvOyeheuLiOuLpC5cIixzdGF0dXM6NDAwfTtcbiAgICAgICAgfVxuICAgICAgICBpZihhd2FpdCB1c2VyRGF0YS5maW5kT25lKHtuaWNrTmFtZTp1c2VyLm5pY2tOYW1lfSkpe1xuICAgICAgICAgICAgcmV0dXJuIHttZXNzYWdlOlwi7J2066+4IOyhtOyerO2VmOuKlCDri4nrhKTsnoTsnoXri4jri6QuXCIsc3RhdHVzOjQwMH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXNlckRhdGEuaW5zZXJ0T25lKHVzZXIpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1jYXRjaChlcnIpe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gTG9naW5Vc2VyKHVzZXIpe1xuICAgIHRyeXtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdERCO1xuICAgICAgICBjb25zdCBkYiA9IGNsaWVudC5kYignR2FsbGVyeScpO1xuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGRiLmNvbGxlY3Rpb24oJ1VzZXInKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXNlckRhdGEuZmluZE9uZSh7aWQ6dXNlci5pZCwgcGFzc3dvcmQ6dXNlci5wYXNzd29yZH0pO1xuICAgICAgICBcbiAgICAgICAgaWYoIXJlc3VsdCl7XG4gICAgICAgICAgICByZXR1cm4ge21lc3NhZ2U6XCLslYTsnbTrlJQg65iQ64qUIOu5hOuwgOuyiO2YuOqwgCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukLlwiLHN0YXR1czo0MDB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfWNhdGNoKGVycil7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9XG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImNvbm5lY3REQiIsIlJlZ2lzdGVyVXNlciIsInVzZXIiLCJjbGllbnQiLCJkYiIsInVzZXJEYXRhIiwiY29sbGVjdGlvbiIsImZpbmRPbmUiLCJpZCIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJlbWFpbCIsIm5pY2tOYW1lIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIkxvZ2luVXNlciIsInBhc3N3b3JkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/Controller/userController.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/databases.js":
/*!******************************!*\
  !*** ./src/lib/databases.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGO;\nif (!uri) {\n    throw new Error(\"Missing environment variable: MONGO\");\n}\nconst options = {\n    serverApi: {\n        version: mongodb__WEBPACK_IMPORTED_MODULE_0__.ServerApiVersion.v1,\n        strict: true,\n        deprecationErrors: true\n    },\n    useNewUrlParser: true\n};\nlet connectDB;\nif (true) {\n    if (!global._mongo) {\n        global._mongo = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n    }\n    connectDB = global._mongo;\n} else {}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RhdGFiYXNlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0Q7QUFFcEQsTUFBTUUsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsS0FBSztBQUU3QixJQUFJLENBQUNILEdBQUcsRUFBRTtJQUNOLE1BQU0sSUFBSUksS0FBSyxDQUFDLHFDQUFxQyxDQUFDO0FBQzFEO0FBRUEsTUFBTUMsT0FBTyxHQUFHO0lBQ1pDLFNBQVMsRUFBQztRQUNOQyxPQUFPLEVBQUNSLHFEQUFnQixDQUFDUyxFQUFFO1FBQzNCQyxNQUFNLEVBQUMsSUFBSTtRQUNYQyxpQkFBaUIsRUFBQztJQUN0QixDQUFDO0lBQ0RDLGVBQWUsRUFBQztBQUNwQixDQUFDO0FBRUQsSUFBSUMsU0FBUztBQUViLFVBQTBDO0lBQ3RDLElBQUcsQ0FBQ0MsTUFBTSxDQUFDQyxNQUFNLEVBQUM7UUFDZEQsTUFBTSxDQUFDQyxNQUFNLEdBQUcsSUFBSWhCLGdEQUFXLENBQUNFLEdBQUcsRUFBQ0ssT0FBTyxDQUFDO0lBQ2hEO0lBQ0FPLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxNQUFNO0FBQzdCLENBQUMsTUFBSSxFQUVKO0FBRWdCIiwic291cmNlcyI6WyIvVXNlcnMveXVzZW9uam9uZy9EZXNrdG9wL+y7pOuupOuLiOy8gOydtOyFmO2OmOydtOyngC9zcmMvbGliL2RhdGFiYXNlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vbmdvQ2xpZW50LFNlcnZlckFwaVZlcnNpb259IGZyb20gJ21vbmdvZGInO1xuXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HTztcblxuaWYgKCF1cmkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGVudmlyb25tZW50IHZhcmlhYmxlOiBNT05HT1wiKTtcbn1cblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBzZXJ2ZXJBcGk6e1xuICAgICAgICB2ZXJzaW9uOlNlcnZlckFwaVZlcnNpb24udjEsXG4gICAgICAgIHN0cmljdDp0cnVlLFxuICAgICAgICBkZXByZWNhdGlvbkVycm9yczp0cnVlLFxuICAgIH0sXG4gICAgdXNlTmV3VXJsUGFyc2VyOnRydWUsXG59XG5cbmxldCBjb25uZWN0REI7XG5cbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcbiAgICBpZighZ2xvYmFsLl9tb25nbyl7XG4gICAgICAgIGdsb2JhbC5fbW9uZ28gPSBuZXcgTW9uZ29DbGllbnQodXJpLG9wdGlvbnMpXG4gICAgfVxuICAgIGNvbm5lY3REQiA9IGdsb2JhbC5fbW9uZ287XG59ZWxzZXtcbiAgICBjb25uZWN0REIgPSBuZXcgTW9uZ29DbGllbnQodXJpLG9wdGlvbnMpXG59XG5cbmV4cG9ydCB7Y29ubmVjdERCfTsiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJTZXJ2ZXJBcGlWZXJzaW9uIiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPIiwiRXJyb3IiLCJvcHRpb25zIiwic2VydmVyQXBpIiwidmVyc2lvbiIsInYxIiwic3RyaWN0IiwiZGVwcmVjYXRpb25FcnJvcnMiLCJ1c2VOZXdVcmxQYXJzZXIiLCJjb25uZWN0REIiLCJnbG9iYWwiLCJfbW9uZ28iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/databases.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/server/app-render/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/action-async-storage.external.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@auth","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/@panva","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/oauth4webapi"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fyuseonjong%2FDesktop%2F%EC%BB%A4%EB%AE%A4%EB%8B%88%EC%BC%80%EC%9D%B4%EC%85%98%ED%8E%98%EC%9D%B4%EC%A7%80%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyuseonjong%2FDesktop%2F%EC%BB%A4%EB%AE%A4%EB%8B%88%EC%BC%80%EC%9D%B4%EC%85%98%ED%8E%98%EC%9D%B4%EC%A7%80&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();