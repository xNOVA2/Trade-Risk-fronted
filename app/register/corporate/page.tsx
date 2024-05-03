"use client";
import { FloatingInput } from "@/components/helpers/FloatingInput";
import AuthLayout from "@/components/layouts/AuthLayout";
import { Button } from "@/components/ui/button";
import {
  SelectItem,
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CompanyInfoPage = () => {
  const router = useRouter();
  const navigate = () => {
    router.push("/register/corporate/product-info");
  };

  return (
    <AuthLayout>
      <section className="max-w-2xl mx-auto w-full max-xs:px-1 z-10 ">
        <h2 className="font-semibold text-3xl text-center">Company Info</h2>
        <p className="text-para text-center mt-5">
          Please add information about your company. This cannot be changed
          later.
        </p>
        <form className="max-w-2xl mx-auto w-full shadow-md bg-white rounded-xl xs:p-8 max-xs:py-8 max-xs:px-4 z-10 mt-5 flex flex-col sm:gap-y-5 gap-y-3">
          <div className="flex items-center gap-x-2 max-sm:flex-col max-sm:gap-y-3">
            <FloatingInput name="company-name" placeholder="Company Name" />
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

          <FloatingInput
            type="text"
            name="company-address"
            placeholder="Company Address"
          />

          <div className="flex items-center gap-x-2 max-sm:flex-col max-xs:gap-y-3">
            <FloatingInput
              name="company-email"
              placeholder="Company Email"
              type="email"
            />
            <FloatingInput type="text" name="phone" placeholder="Telephone" />
          </div>

          <div className="flex items-center gap-x-2 max-sm:flex-col max-sm:gap-y-3">
            <div className="w-full">
              <FloatingInput
                type="text"
                name="business-nature"
                placeholder="Nature of Business"
              />
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
            <FloatingInput
              type="text"
              name="bank-name"
              placeholder="Bank Name"
            />
            <FloatingInput
              type="text"
              name="account-number"
              placeholder="Account Number"
            />
          </div>

          <div className="flex items-center gap-x-2 max-sm:flex-col max-sm:gap-y-3">
            <FloatingInput
              type="text"
              name="swift-code"
              placeholder="SWIFT Code"
            />
            <FloatingInput
              type="text"
              name="account-holder-name"
              placeholder="Account holder name"
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
              className="w-full disabled:bg-borderCol disabled:text-[#B5B5BE] bg-primaryCol hover:bg-primaryCol/90 text-[16px] rounded-lg"
              size="lg"
              disabled={false}
              onClick={navigate}
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
