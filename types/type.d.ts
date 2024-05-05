import { z } from "zod";

export interface ILoginFields {
  email: string;
  password: string;
}

export interface IRegisterFields {
  email: string;
  password: string;
  fullName: string;
}

// export type SigninFields = z.infer<typeof SignInSchema>

export interface IForgetFields {
  email: string;
}

// export type ForgetFields = z.infer<typeof ForgetSchema>

export interface IResetFields {
  password: string;
  confirmPassword: string;
}

// export type ResetPassword = z.infer<typeof ResetPasswordSchema>

export interface IApiResponse<T> {
  message: string;
  data: T;
  paginationData?: IPaginationData;
}

export interface PaginationTypes {
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: null | number;
  perPage: number;
  prevPage: null | number;
  totalItems: number;
  totalPages: number;
}

type RegisterStore = {
  role: string;
  name: string;
  email: string;
  address: string;
  constitution?: string;
  businessType?: string;
  phone: string;
  bank: string;
  swiftCode: string;
  accountNumber?: number;
  accountHolderName?: string;
  accountCountry?: string;
  accountCity?: string;
  productInfo?: {
      product: string;
      annualSalary: number;
      annualValueExports: number;
      annualValueImports: number;
  };
  pocEmail: string;
  pocPhone: string;
  pocName?: string;
  poc?: string;
  pocDesignation?: string;
  currentBanks?: {
      name: string;
      country: string;
      city: string;
  }[];
  confirmationLcs?: boolean;
  discountingLcs?: boolean;
  guaranteesCounterGuarantees?: boolean;
  discountingAvalizedBills?: boolean;
  avalizationExportBills?: boolean;
  riskParticipation?: boolean;
};


export type UseRegisterStore = RegisterStore & {
  setValues: (values: Partial<RegisterStore>) => void;
};

export interface IPagination {
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number | null;
  perPage: number;
  prevPage: number | null;
  totalItems: number;
  totalPages: number;
}
export interface ApiResponse<T> {
  data: T[];
  pagination: Pagination;
}

export interface IUser{
  _id?: string;
  name?: string;
  email: string;
  role: string;
  country?: string;
  phone?: string;
  address?: string;
  constitution?: string;
  password?: string;
  bank?: string;
  accountNumber?: number;
  swiftCode?: string;
  accountHolderName?: string;
  accountCountry?: string;
  accountCity?: string;
  businessType?: string;
  productInfo?: {
      product: string;
      annualSalary: number;
      annualValueExports: number;
      annualValueImports: number;
  };
  pocName?: string;
  pocEmail?: string;
  pocPhone?: string;
  poc?: string;
  pocDesignation?: string;
  currentBanks?: string[];
  authorizationPocLetter?: string;
  confirmationLcs?:boolean;
  discountingLcs?:boolean
  guaranteesCounterGuarantees?:boolean
  discountingAvalizedBills?:boolean
  avalizationExportBills?:boolean
  riskParticipation:boolean
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ILcs  {
  _id:string
  participantRole?:string
  lcType?:string
  curreny:string 
  amount?:number
  paymentTerms:string
  createdBy?:string
  issuingBank:{
      bank:string
      country:string
  }
  extraInfo:{
      days:Date
      other:string
  }
  advisingBank:{
      bank:string
      country:string
  }
  confirmingBank:{
      bank:string
      country:string
  }
  shipmentPort:{
      country:string
      port:string
  }
  transhipment:boolean
  expectedConfirmationDate:Date
  expectedDiscountingDate:Date
  productDescription:string
  lcPeriod:{
      startDate:Date
      endDate:Date
  }
  importerInfo:{
      applicantName:string
      countryOfImport:string
  }
  exporterInfo:{
      beneficiaryName?:string
      countryOfExport?:string
      beneficiaryCountry?:string
  }
  confirmationCharges:{
    behalfOf?: string
  }
  discountAtSight?:string
  pricePerAnnum?:number
  refId?:number
  attachments?:string[]
  draft?:boolean,
}

export interface IBids {
  _id:string
    status: string;
    bidType: string;
    discountingPrice:number
    confirmationPrice:number
    bidBy:{
      _id?: string;
  name?: string;
  email: string;
  role: string;
  country?: string;
  phone?: string;
  address?: string;
  constitution?: string;
  password?: string;
  bank?: string;
  accountNumber?: number;
  swiftCode?: string;
  accountHolderName?: string;
  accountCountry?: string;
  accountCity?: string;
  businessType?: string;
  productInfo?: {
      product: string;
      annualSalary: number;
      annualValueExports: number;
      annualValueImports: number;
  };
  pocName?: string;
  pocEmail?: string;
  pocPhone?: string;
  poc?: string;
  pocDesignation?: string;
  currentBanks?: string[];
  authorizationPocLetter?: string;
  confirmationLcs?:boolean;
  discountingLcs?:boolean
  guaranteesCounterGuarantees?:boolean
  discountingAvalizedBills?:boolean
  avalizationExportBills?:boolean
  riskParticipation:boolean
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
    }
    isDeleted:boolean
    createdAt: Date;
    updatedAt: Date;
}
