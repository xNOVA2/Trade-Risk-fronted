"use client";
import { FloatingInput } from "@/components/helpers/FloatingInput";
import AuthLayout from "@/components/layouts/AuthLayout";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"
import { SubmitHandler, useForm } from "react-hook-form";
import {
  SelectItem,
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { companyInfoSchema } from "@/validation";
import { z } from "zod";

const CompanyInfoPage = () => {
  const router = useRouter();

  // const [name, setname] = useState<string>('')
  // const [email, setemail] = useState<string>('')
  const [constitution,setConstitution] = useState<string>('');
  const [businessType,setBusinessType] = useState<string>('')
  // const [address, setaddress] = useState<string>('')
  // const [phone, setphone] = useState<string>('')
  // const [bankName, setbankName] = useState<string>('')
  // const [accountNumber, setaccountNumber] = useState<string>('')
  // const [swiftCode, setswiftCode] = useState<string>('')
  // const [accountHolderName, setaccountHolderName] = useState<string>('')
  const [accountCountry, setaccountCountry] = useState<string>('')
  const [accountCity, setaccountCity] = useState<string>('')


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof companyInfoSchema>>({
    resolver: zodResolver(companyInfoSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof companyInfoSchema>>  = async (data:any) => {

    
      // router.push("/register/corporate/product-info");
    };
    
    
  return (
    <AuthLayout>
      <section className="max-w-2xl mx-auto w-full max-xs:px-1 z-10 ">
        <h2 className="font-semibold text-3xl text-center">Company Info</h2>
        <p className="text-para text-center mt-5">
          Please add information about your company. This cannot be changed
          later.
        </p>
        <form className="max-w-2xl mx-auto w-full shadow-md bg-white rounded-xl xs:p-8 max-xs:py-8 max-xs:px-4 z-10 mt-5 flex flex-col sm:gap-y-5 gap-y-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center gap-x-2 max-sm:flex-col max-sm:gap-y-3">
            <FloatingInput  name="name" placeholder="Company Name" register={register} />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            {/* Company Constitution */}
            <Select>
              <SelectTrigger className="w-full py-5 px-4 text-gray-500">
                <SelectValue placeholder="Company Constitution" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Individual/Proprietorship Co.">
                  Individual/Proprietorship Co.
                </SelectItem>
                <SelectItem value="Limited Liability Co">
                  Limited Liability Co
                </SelectItem>
                <SelectItem value="Public Limited Co.">
                  Public Limited Co.
                </SelectItem>
              </SelectContent>
            </Select>
          </div>


          <FloatingInput name="address" placeholder="Company Address" register={register} />
          {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
          <div className="flex items-center gap-x-2 max-sm:flex-col max-xs:gap-y-3">
            <FloatingInput
              name="email"
              placeholder="Company Email"
              type="email"
              register={register}
            />

            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            <FloatingInput name="phone" placeholder="Telephone" register={register} />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

          </div>

          <div className="flex items-center gap-x-2 max-sm:flex-col max-sm:gap-y-3">
            <div className="w-full">
              <FloatingInput
                type="text"
                name="business-nature"
                placeholder="Nature of Business"
                register={register}
              />
              {errors.businessNature && <p className="text-red-500 text-sm">{errors.businessNature.message}</p>}
            </div>
            {/* Company Constitution */}
            <Select>
              <SelectTrigger className="w-full py-5 px-4 text-gray-500">
                <SelectValue placeholder="Business Sector" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Automotive">Automotive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="h-[2px] w-full bg-borderCol" />

          <div className="flex items-center gap-x-2 max-sm:flex-col max-sm:gap-y-3">

            <FloatingInput name="bank" placeholder="Bank Name" register={register}/>

            <FloatingInput name="accountNumber" placeholder="Account Number" register={register} />
          </div>

          <div className="flex items-center gap-x-2 max-sm:flex-col max-sm:gap-y-3">
            <FloatingInput name="swiftCode" placeholder="SWIFT Code" register={register} />
            <FloatingInput
              name="accountHolderName"

              placeholder="Account holder name"
              register={register}
            />
          </div>

          <div className="flex items-center gap-x-2 max-sm:flex-col max-sm:gap-y-3">
            {/* Country */}
            <Select>
              <SelectTrigger className="w-full py-5 px-4 text-gray-500">
                <SelectValue placeholder="Account Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Pakistan">Pakistan</SelectItem>
                <SelectItem value="Saudi Arabia">Saudi Arabia</SelectItem>
                <SelectItem value="United Arab Emirates">
                  United Arab Emirates
                </SelectItem>
              </SelectContent>
            </Select>
            {/* City */}
            <Select>
              <SelectTrigger className="w-full py-5 px-4 text-gray-500">
                <SelectValue placeholder="Account City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="karachi">Karachi</SelectItem>
                <SelectItem value="peshawar">Peshawar</SelectItem>
                <SelectItem value="lahore">Lahore</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2 my-2">
            <input type="checkbox" id="agree" required />
            <label
              htmlFor="agree"
              className="text-sm text-[#44444F] leading-none"
            >
              I agree to TradeRisk's{" "}
              <Link href="#" className="text-text">
                Privacy Policy
              </Link>
            </label>
          </div>
          {/* Action Buttons */}
          <div className="flex items-center gap-x-2 max-xs:flex-col-reverse max-xs:gap-y-3">
            <Link href="/login" className="text-center sm:w-1/3">
              <Button
                type="button"
                variant="ghost"
                className="text-para text-[16px]"
              >
                Go back to login
              </Button>
            </Link>
            <Button
              type="submit"
              className="w-full disabled:bg-borderCol disabled:text-[#B5B5BE] bg-primaryCol hover:bg-primaryCol/90 text-[16px] rounded-lg"
              size="lg"
              // disabled={false}
            >
              Get Started
            </Button>
          </div>
        </form>
      </section>
    </AuthLayout>
  );
};

export default CompanyInfoPage;
