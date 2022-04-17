import {Transaction} from "../domain/TransactionInterface";
import TransactionRepositoryInterface from "../domain/TransactionReposityInterface";

export default class TransactionService {

    private repository: TransactionRepositoryInterface;

    constructor(repository: TransactionRepositoryInterface){
        this.repository = repository
    }

    async index(request?, response?): Promise<Transaction[]>{
        try{
            const data = await this.repository.index(request?.query);
            return data;
        }catch(err: any){
            throw err
        }
    }
}