import {Company} from 'apikana-sample-base/company'

interface Users {
    count: number
    data: User[]
}

enum Gender{
    MALE, FEMALE
}

interface User {
    id: number
    firstName: string //the given name
    lastName: string //the family name
    age?: number
    gender: Gender
    parent?: User
    company: Company
}

