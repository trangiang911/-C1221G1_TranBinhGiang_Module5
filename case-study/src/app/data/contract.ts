import {Contract} from '../models/contract';

export const contracts: Contract[] = [
  {
    id: 1,
    startDate: '2020-12-08',
    endDate: '2020-12-08',
    deposit: 0,
    total: 1000000,
    customer: {
      customerId: 1,
      code: 'KH-0001',
      customerName: 'Nguyễn Thị Hào',
      customerBirthday: '1970-11-07',
      customerGender: 0,
      customerIdCard: '643431213',
      customerPhone: '0905423362',
      customerEmail: 'thihao07@gmail.com',
      customerAddress: '23 Nguyễn Hoàng, Đà Nẵng',
      customerType: {
        customerTypeId: 5,
        customerTypeName: 'Member'
      }
    },
    facility: {
      id: 3,
      code: 'DV-0003',
      name: 'Room Twin 01'
    },
    serviceInclude: 'karaoke, buffet sáng, thuê xe đạp'
  },
  {
    id: 2,
    startDate: '2020-07-14',
    endDate: '2020-07-21',
    deposit: 200000,
    total: 2000000,
    customer: {
      customerId: 3,

      code: 'KH-0003',

      customerName: 'Trương Đình Nghệ',

      customerBirthday: '1990-02-27',

      customerGender: 1,

      customerIdCard: '488645199',

      customerPhone: '0373213122',

      customerEmail: 'nghenhan2702@gmail.com',

      customerAddress: 'K323/12 Ông Ích Khiêm, Vinh',

      customerType: {
        customerTypeId: 3,
        customerTypeName: 'Gold'
      }
    },
    facility: {
      id: 1,
      code: 'DV-0001',
      name: 'Villa Beach Front'
    },
    serviceInclude: 'karaoke, buffet sáng, thuê xe máy'
  },
  {
    id: 3,
    startDate: '2021-03-15',
    endDate: '2021-03-17',
    deposit: 50000,
    total: 1500000,
    customer: {
      customerId: 4,

      code: 'KH-0004',

      customerName: 'Dương Văn Quan',

      customerBirthday: '1981-07-08',

      customerGender: 1,

      customerIdCard: '543432111',

      customerPhone: '0490039241',

      customerEmail: 'duongquan@gmail.com',

      customerAddress: 'K453/12 Lê Lợi, Đà Nẵng',

      customerType: {
        customerTypeId: 2,
        customerTypeName: 'Platinium'
      }
    },
    facility: {
      id: 2,
      code: 'DV-0002',
      name: 'House Princess 01'
    },
    serviceInclude: 'karaoke, buffet sáng, buffet tối, thuê xe đạp'
  },
  {
    id: 4,
    startDate: '2021-01-14',
    endDate: '2021-01-18',
    deposit: 100000,
    total: 1400000,
    customer: {
      customerId: 5,

      code: 'KH-0005',

      customerName: 'Hoàng Trần Nhi Nhi',

      customerBirthday: '1995-12-09',

      customerGender: 0,

      customerIdCard: '795453345',

      customerPhone: '0312345678',

      customerEmail: 'nhinhi123@gmail.com',

      customerAddress: '224 Lý Thái Tổ, Gia Lai',

      customerType: {
        customerTypeId: 1,
        customerTypeName: 'Diamond'
      }
    },
    facility: {
      id: 5,
      code: 'DV-0005',
      name: 'House Princess 02'
    }
  },
  {
    id: 5,
    startDate: '2021-07-14',
    endDate: '2021-07-15',
    deposit: 0,
    total: 100000,
    customer: {
      customerId: 2,

      code: 'KH-0002',

      customerName: 'Phạm Xuân Diệu',

      customerBirthday: '1992-08-08',

      customerGender: 1,

      customerIdCard: '865342123',

      customerPhone: '0954333333',

      customerEmail: 'xuandieu92@gmail.com',

      customerAddress: 'K77/22 Thái Phiên, Quảng Trị',

      customerType: {
        customerTypeId: 4,
        customerTypeName: 'Silver'
      }
    },
    facility: {
      id: 6,
      code: 'DV-0006',
      name: 'Room Twin 02'
    },
    serviceInclude: 'karaoke, buffet sáng, buffet tối'
  }
];
