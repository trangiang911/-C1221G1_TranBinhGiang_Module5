import {CustomerType} from './customer-type';

export interface Customer {
  id: number;
  name: string;
  code: string;
  birthday?: string;
  idCard?: string;
  phone?: string;
  email?: string;
  address?: string;
  gender?: number;
  customerType?: CustomerType;
}
