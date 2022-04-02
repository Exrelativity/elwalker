export class OrderInput {

    totalPrice: number;

    products: string[]

    status?: 'ACTIVE' | 'PROCESSING' | 'INACTIVE'

    userId : number;

    createdAt: Date;

    updatedAt: Date;



}
