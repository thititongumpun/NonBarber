export interface OpenHours {
  id: string;
  day: string;
  openFrom: string;
  openTo: string;
  closed: boolean;
  createdDate: string;
  lastModifiedDate: string;
}

export interface Reserve {
  discount: string;
  reserveDate: Date;
  reserveTime: string;
}

export interface Coupon {
  couponName: string;
  discount: number;
  isActive: boolean;
  validFrom: Date;
  validTo: Date;
}
