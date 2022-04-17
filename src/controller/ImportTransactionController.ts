import TransactionRepositorySQL from "../repository/TransactionRepositorySQL";
import ImportTransactionService from "../service/ImportTransactionService";

export default class ImportTransactionController {
        
    static async import(request, response): Promise<any>{
        try{
            const file = request.files.file;
            const service = new ImportTransactionService(new TransactionRepositorySQL())
            const data = await service.import(file.data)
            response.json(data);
        }catch(err: any){
            throw err
        }
    }
}