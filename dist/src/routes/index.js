"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const import_routes_1 = __importDefault(require("./import.routes"));
const transaction_routes_1 = __importDefault(require("./transaction.routes"));
const routes = (0, express_1.Router)();
routes.use('/import', import_routes_1.default);
routes.use('/transaction', transaction_routes_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map