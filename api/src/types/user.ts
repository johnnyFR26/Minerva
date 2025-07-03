export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    controls: string;
    createdAt: Date;
    updatedAt: Date;
}