export interface InventoryInput {

    name: string;

    city: string;

    region: string;

    timezone: string;

    status: 'NO_PREFERENCE' | 'ACTIVE' | 'INACTIVE'

    countryCode: string;

    address: string;

    latitude: number;

    longitude: number;

    source: string;

    destination: string;

    category: string;

    image: String[];

    description: string;

    price: number;

    createdAt: Date;

    updatedAt: Date;
}
