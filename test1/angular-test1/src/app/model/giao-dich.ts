import {KhachHang} from "./khach-hang";
import {FacilityType} from "./facility-type";

export interface GiaoDich {
  id?: number,
  code?: string,
  codeCustomer?: KhachHang,
  startDate?: string,
  facilityType?: FacilityType,
  price?: string,
  area?: string
}
