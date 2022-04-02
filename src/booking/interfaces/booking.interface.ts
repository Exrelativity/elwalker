export class BookingInput {

    totalPrice: number;


    inventorys: string[]

    status?: 'START' | 'PROCESSING' | 'DELIVERED'

    userId : number;
    
    createdAt: Date;


    updatedAt: Date;
}
