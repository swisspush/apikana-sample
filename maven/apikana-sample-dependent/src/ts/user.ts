import {Company} from 'apikana-sample-base/company';
import {Int} from 'apikana/default-types';

export interface Users {
    count: Int
    data: User[]
}

export enum Gender{
    MALE, FEMALE
}

export interface User {
    id: Int
    firstName: string //the given name
    lastName: string //the family name
    age?: Int
    gender: Gender
    parent?: User
    company: Company
}

