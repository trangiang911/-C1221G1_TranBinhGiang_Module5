import {RentType} from './rentType';
import {FacilityType} from './facilityType';

export interface Facility {
  id?: number;
  name?: string;
  code?: string;
  image?: string;
  rentType?: RentType;
  rentalFee?: number;
  floorSquare?: number;
  maximumPeople?: number;
  roomStandard?: string;
  description?: string;
  poolSquare?: number;
  numberFloor?: number;
  facilityType?: FacilityType;
  freeServiceInclude?: string;
}
