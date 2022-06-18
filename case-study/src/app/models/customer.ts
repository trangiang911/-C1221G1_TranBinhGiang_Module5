import {CustomerType} from './customer-type';

export interface Customer {
  customerId: number;
  customerName: string;
  code?: string;
  customerBirthday?: string;
  customerIdCard?: string;
  customerPhone?: string;
  customerEmail?: string;
  customerAddress?: string;
  customerGender?: number;
  customerType?: CustomerType;
}
