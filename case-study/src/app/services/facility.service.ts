import {Injectable} from '@angular/core';
import {Facility} from "../models/facility";
import {Customer} from "../models/customer";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private facilitys: Facility[] = [{
    id: 1,
    name: 'Luxury villa',
    image: 'https://cdn.cet.edu.vn/wp-content/uploads/2019/02/villa-khong-gian-sang-trong.jpg',
    rentType: {
      id: 1,
      rentType: 'Villa'
    },
    rentalFree: 15000,
    description: 'Quá vip'

  },
    {
      id: 2,
      name: 'View beach villa',
      image: 'https://cdn.cet.edu.vn/wp-content/uploads/2019/02/villa-khong-gian-sang-trong.jpg',
      rentType: {
        id: 1,
        rentType: 'Villa'
      },
      rentalFree: 15000,
      description: 'Quá vip'

    },
    {
      id: 3,
      name: 'Vip house',
      image: 'https://cdn.cet.edu.vn/wp-content/uploads/2019/02/villa-khong-gian-sang-trong.jpg',
      rentType: {
        id: 2,
        rentType: 'House'
      },
      rentalFree: 15000,
      description: 'Quá vip'

    },
    {
      id: 4,
      name: 'Royal house',
      image: 'https://cdn.cet.edu.vn/wp-content/uploads/2019/02/villa-khong-gian-sang-trong.jpg',
      rentType: {
        id: 2,
        rentType: 'House'
      },
      rentalFree: 15000,
      description: 'Quá vip'

    },
    {
      id: 5,
      name: 'Sahara room',
      image: 'https://cdn.cet.edu.vn/wp-content/uploads/2019/02/villa-khong-gian-sang-trong.jpg',
      rentType: {
        id: 3,
        rentType: 'Room'
      },
      rentalFree: 15000,
      description: 'Quá vip'
    },
    {
      id: 6,
      name: 'Russia room',
      image: 'https://cdn.cet.edu.vn/wp-content/uploads/2019/02/villa-khong-gian-sang-trong.jpg',
      rentType: {
        id: 3,
        rentType: 'Room'
      },
      rentalFree: 15000,
      description: 'Quá vip'
    }];

  constructor() {
  }

  public getAllFacility(): Array<Facility> {
    return this.facilitys;
  }

  removeById(idDel: number) {
    this.facilitys = this.facilitys.filter(item => {
      return item.id !== idDel;
    })
  }

  findFacilityById(number: number) {
    return this.facilitys.find(item => item.id === number);;
  }

  update(facility: any) {
    this.facilitys.map((item,i) => {
      if(item.id === facility.id){
        this.facilitys[i] = facility;
        console.log(this.facilitys[i])
      }
    })
    return this.facilitys;
  }
}
