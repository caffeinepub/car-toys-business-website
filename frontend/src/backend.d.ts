import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Toy {
    id: string;
    name: string;
    description: string;
    category: string;
    price: number;
}
export interface backendInterface {
    addToy(id: string, name: string, description: string, price: number, category: string): Promise<void>;
    getAllToys(): Promise<Array<Toy>>;
    getToy(id: string): Promise<Toy | null>;
}
