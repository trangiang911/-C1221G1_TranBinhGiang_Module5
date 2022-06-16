import {Injectable} from '@angular/core';
import {Facility} from "../models/facility";
import {Customer} from "../models/customer";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private facilitys: Facility[] = [ {
    id: 1,
    code: 'DV-0001',
    name: 'Villa Beach Front',
    image: 'https://cdn.cet.edu.vn/wp-content/uploads/2019/02/villa-khong-gian-sang-trong.jpg',
    floorSquare: 2500,
    rentalFee: 10000000,
    maximumPeople: 10,
    roomStandard: 'vip',
    description: 'Có hồ bơi',
    poolSquare: 500,
    numberFloor: 4,
    freeServiceInclude: '',
    rentType: {
      id: 3,
      rentType: 'Ngày'
    },
    facilityType: {
      id: 1,
      facilityType: 'villa'
    }
  },
    {
      id: 2,
      code: 'DV-0002',
      name: 'House Princess 01',
      image: 'https://cdn.cet.edu.vn/wp-content/uploads/2019/02/villa-khong-gian-sang-trong.jpg',
      floorSquare: 140,
      rentalFee: 5000000,
      maximumPeople: 7,
      roomStandard: 'vip',
      description: 'Có thêm bếp nướng',
      poolSquare: 0,
      numberFloor: 3,
      freeServiceInclude: '',
      rentType: {
        id: 2,
        rentType: 'Tháng'
      },
      facilityType: {
        id: 2,
        facilityType: 'house'
      }
    },
    {
      id: 3,
      code: 'DV-0003',
      name: 'Room Twin 01',
      image: 'https://cdn.cet.edu.vn/wp-content/uploads/2019/02/villa-khong-gian-sang-trong.jpg',
      floorSquare: 50,
      rentalFee: 1000000,
      maximumPeople: 2,
      roomStandard: 'normal',
      description: 'Có tivi',
      poolSquare: 0,
      numberFloor: 0,
      freeServiceInclude: '',
      rentType: {
        id: 4,
        rentType: 'Giờ'
      },
      facilityType: {
        id: 3,
        facilityType: 'room'
      }
    },
    {
      id: 4,
      code: 'DV-0004',
      name: 'Villa No Beach Front',
      image: 'https://cdn.cet.edu.vn/wp-content/uploads/2019/02/villa-khong-gian-sang-trong.jpg',
      floorSquare: 2200,
      rentalFee: 9000000,
      maximumPeople: 8,
      roomStandard: 'normal',
      description: 'Có hồ bơi',
      poolSquare: 300,
      numberFloor: 3,
      freeServiceInclude: '',
      rentType: {
        id: 3,
        rentType: 'Ngày'
      },
      facilityType: {
        id: 1,
        facilityType: 'villa'
      }
    },
    {
      id: 5,
      code: 'DV-0005',
      name: 'House Princess 02',
      image: 'https://cdn.cet.edu.vn/wp-content/uploads/2019/02/villa-khong-gian-sang-trong.jpg',
      floorSquare: 100,
      rentalFee: 4000000,
      maximumPeople: 5,
      roomStandard: 'normal',
      description: 'Có thêm bếp nướng',
      poolSquare: 0,
      numberFloor: 2,
      freeServiceInclude: '',
      rentType: {
        id: 3,
        rentType: 'Ngày'
      },
      facilityType: {
        id: 2,
        facilityType: 'house'
      }
    },
    {
      id: 6,
      code: 'DV-0006',
      name: 'Room Twin 02',
      image: 'https://cdn.cet.edu.vn/wp-content/uploads/2019/02/villa-khong-gian-sang-trong.jpg',
      floorSquare: 30,
      rentalFee: 900000,
      maximumPeople: 2,
      roomStandard: 'normal',
      description: 'Có tivi',
      poolSquare: 0,
      numberFloor: 0,
      freeServiceInclude: '',
      rentType: {
        id: 4,
        rentType: 'Giờ'
      },
      facilityType: {
        id: 3,
        facilityType: 'room'
      }
    }
];

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

  createFacility(value: any) {
    this.facilitys.push(value)
  }
}
