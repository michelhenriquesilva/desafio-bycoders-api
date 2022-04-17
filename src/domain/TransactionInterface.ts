
export interface Transaction {
    id?: string;
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    date: string;
    time: string;
    amount: number;
    document: number;
    card: string;
    shop_owner: string;
    shop: string;
}