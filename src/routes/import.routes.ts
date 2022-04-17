import { Router } from "express";
import ImportTransactionController from "../controller/ImportTransactionController";

const ImportRoutes = Router();

ImportRoutes.post('/', ImportTransactionController.import)

export default ImportRoutes;