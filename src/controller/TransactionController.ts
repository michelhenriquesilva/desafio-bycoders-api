import TransactionRepositorySQL from "../repository/TransactionRepositorySQL";
import TransactionService from "../service/TransactionService";

export default class TransactionController {

    static async index(request, response): Promise<void>{
        try{
            const service = new TransactionService(new TransactionRepositorySQL())
            const data = await service.index(request, response);
            response.json(data);
        }catch(err: any){
            response.status(500).json({error: err.message})
        }
    }
}