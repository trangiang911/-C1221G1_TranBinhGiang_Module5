import {Customer} from '../models/customer';

export class CustomerService {
  public createCustomer(customers: Array<Customer>, customer: any){
    customers.push(customer);
}
}
