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