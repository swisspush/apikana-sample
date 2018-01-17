import {Int} from 'apikana/default-types';

export interface Company {
    companyId: Int
    companyName: string
}

export interface Ltd extends Company {
    stock: Int
    properties?: { [key: string]: string }
}