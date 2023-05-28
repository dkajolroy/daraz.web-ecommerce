// ---------->> Interface  <<------------ \\
interface InputUser {
    name: string;
    username: string;
    password: string;
    email: string;
    city: string;
    zipCode: number;
    phone: string;
}

interface User {
    name: string;
    _id: string
}

interface InputProduct {
    brand: string;
    color: string[];
    images: string[];
    thumbnail: string;
    discountPrice: number;
    price: number;
    rating: number;
    size: string[];
    stock: number;
    title: string;
    warranty: string;
    createdAt: Date;
    updatedAt: Date;
}

interface Product extends InputProduct {
    _id: string;
    sku: string
    shop: string
}
