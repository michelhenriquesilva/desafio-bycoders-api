"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TransactionController_1 = __importDefault(require("../controller/TransactionController"));
const TransactionRoutes = (0, express_1.Router)();
TransactionRoutes.get('/', TransactionController_1.default.index);
exports.default = TransactionRoutes;
//# sourceMappingURL=transaction.routes.js.map