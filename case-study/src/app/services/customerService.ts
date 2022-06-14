import {Customer} from '../models/customer';

export class CustomerService {
  public createCustomer(customers: Array<Customer>, customer: any) {
    customers.push(customer);
  }
  public findCustomerById(customers: Array<Customer>,id: number){
    return customers.find(item => item.id === id);
  }
  public Update(customers: Array<Customer>, customer: Customer){
    customers.map((cus,i) => {
      if(cus.id === customer.id){
        customers[i] = customer;
      }
    })
  }
}
