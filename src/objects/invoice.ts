import {Employee} from "./employee.ts";
import {Customer} from "./customer.ts";

export class Invoice {
    constructor(id: number, date: number, payementDate: number, customer: Customer, description: string,
    amountBeforeTax: number, amountAfterTax: number, employees: Employee[] , offer: string) {
        //
    }
}