"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ImportTransactionController_1 = __importDefault(require("../controller/ImportTransactionController"));
const ImportRoutes = (0, express_1.Router)();
ImportRoutes.post('/', ImportTransactionController_1.default.import);
exports.default = ImportRoutes;
//# sourceMappingURL=import.routes.js.map