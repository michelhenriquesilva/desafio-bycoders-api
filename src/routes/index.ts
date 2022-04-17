import { Router } from "express";
import ImportRoutes from "./import.routes";
import TransactionRoutes from "./transaction.routes";

const routes = Router()
routes.use('/import', ImportRoutes)
routes.use('/transaction', TransactionRoutes)

export default routes;