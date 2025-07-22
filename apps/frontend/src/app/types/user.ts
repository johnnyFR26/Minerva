export interface User {
    id: string;
    name: string;
    email: string;
    controls?: JSON;
    role: string;
    createdAt?: Date;
    updatedAt?: Date;
}