
export interface Auto {
    id: string;
    anio: number;
    modelo: string;
    marca: Marca;
    precio: number;
    inventario: Inventario;
    mensualidad: number;
    alt_img?: string;
}

export interface Disponibilidad {
    disponibilidad: string;
    code: string;
}

export interface MarcaDropdown {
    marca: string;
    code: string;
}

export enum Inventario {
    Instock = "INSTOCK",
    Outofstock = "OUTOFSTOCK",
}

export enum Marca {
    Nissan = "nissan",
    Volkswagen = "Volkswagen",
}

