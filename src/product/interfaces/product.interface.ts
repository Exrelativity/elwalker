export class ProductInput {
    name: string;

    image: string[];

    category: string;

    address: string;

    description: string;

    status?: 'NO_PREFERENCE' | 'ACTIVE' | 'INACTIVE'

    price: number;

    createdAt: Date;

    updatedAt: Date;
}
