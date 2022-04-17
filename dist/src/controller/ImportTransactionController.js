"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TransactionRepositorySQL_1 = __importDefault(require("../repository/TransactionRepositorySQL"));
const ImportTransactionService_1 = __importDefault(require("../service/ImportTransactionService"));
class ImportTransactionController {
    static import(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const file = request.files.file;
                const service = new ImportTransactionService_1.default(new TransactionRepositorySQL_1.default());
                const data = yield service.import(file.data);
                response.json(data);
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = ImportTransactionController;
//# sourceMappingURL=ImportTransactionController.js.map