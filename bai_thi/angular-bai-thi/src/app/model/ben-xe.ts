import {LoaiXe} from './loai-xe';

export interface BenXe {
  idBenXe: number;
  soXe?: string;
  loaiXe?: LoaiXe;
  tenNhaXe?: string;
  diemDi?: string;
  diemDen?: string;
  sdt?: string;
  email?: string;
  gioDi?: string;
  gioDen?: string;
}
