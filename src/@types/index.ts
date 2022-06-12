export interface NavigationLinks {
  url: string;
  name: string;
}

export interface Apartment {
  id: number;
  fullSize: number;
  liveSize: number;
  category: string;
  branchId: number;
  personalAccount: number;
}

export interface Branch {
  id: number;
  name: string;
  country: string;
  city: string;
  address: string;
  phoneNumber: string;
  orgId: number;
}

export interface Category {
  id: number;
  name: string;
}

export interface CounterReference {
  id: number;
  number: string;
  model: string;
  label: string;
  serviceDate: string;
  interfaceId: number;
}

export interface Employee {
  id: number;
  name: string;
  phoneNumber: string;
  description: string;
  branchId: number;
  positionId: number;
}

export interface MeasureReference {
  id: number;
  fullName: string;
  shortName: string;
}

export interface Organization {
  id: number;
  name: string;
}

export interface PaymentHistory {
  id: number;
  date: string;
  cost: number;
  branchId: number;
}

export interface Position {
  id: number;
  name: string;
}

export interface Readings {
  id: number;
  reading: number;
  date: string;
  apartmentId: number;
  counterRefId: number;
}

export interface ServiceCollection {
  id: number;
  branchId: number;
  serviceId: number;
  cost: number;
}

export interface Service {
  id: number;
  name: string;
  customWork: boolean;
  description: string;
  positionId: number;
  measureRefId: number;
  categoryId: number;
}

export interface ServiceRecord {
  id: number;
  registrationDate: string;
  status: string;
  userId: number;
  serviceId: number;
  employeeId: number;
}

export interface CounterType {
  id: number;
  name: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  birthDate: string;
  address: string;
  orgId: number;
  refreshToken: string;
  accessToken: string;
}

export interface UserApartment {
  id: number;
  userId: number;
  apartmentId: number;
}
