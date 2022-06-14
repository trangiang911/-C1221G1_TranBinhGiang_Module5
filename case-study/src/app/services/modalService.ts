import {Customer} from "../models/customer";
import {Facility} from "../models/facility";
import {Contract} from "../models/contract";
import {customers} from "../data/customer";

export class ModalService {
  public removeObj(object: Array<Customer | Facility | Contract>, idDel: number): Array<Customer> {

    object.map((obj, i) => {
      if (obj.id == idDel) {
        customers = customers.slice(i,1);
        console.log(obj)
      }
    })

    // object.filter((obj,i) => obj.id !== idDel)
  }
}
