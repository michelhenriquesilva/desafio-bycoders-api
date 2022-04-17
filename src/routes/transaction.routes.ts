import { Router } from "express";
import TransactionController from "../controller/TransactionController";

const TransactionRoutes = Router();

TransactionRoutes.get('/', TransactionController.index);

export default TransactionRoutes;