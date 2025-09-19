"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const serverless_http_1 = __importDefault(require("serverless-http"));
exports.default = (0, serverless_http_1.default)(app_1.default);
// import app from "./app"
// const PORT = process.env.PORT || 5000;
// // for it to be worked on vercel
// // app.listen(PORT, ()=>{
// //      console.log(` Server is running at port no ${PORT}`);
// // })
