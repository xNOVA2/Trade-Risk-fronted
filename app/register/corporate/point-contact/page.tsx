"use client";
import CorporateStepLayout from "@/components/layouts/CorporateStepLayout";
import { FloatingInput } from "@/components/helpers/FloatingInput";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Paperclip } from "lucide-react";

const PointContactPage = () => {
  const router = useRouter();
  const navigate = () => {
    router.push("/register/corporate/current-banking");
  };

  return (
    <CorporateStepLayout
      step={2}
      title="Point of Contact"
      text="Give us the details of the POC our sales team should get in touch with after verification"
    >
      <form className="max-w-xl w-full shadow-md bg-white rounded-xl p-8 z-10 mt-5 flex flex-col gap-y-5">
        <FloatingInput
          name="authorized-point"
          placeholder="Authorized Point of Contact"
        />
        <div className="flex items-center gap-x-2">
          <FloatingInput
            name="company-email"
            placeholder="Company Email"
            type="email"
          />
          <FloatingInput name="phone" placeholder="Phone Number*" />
        </div>

        <div className="h-[2px] w-full bg-borderCol" />

        <div className="flex items-center gap-x-2">
          <FloatingInput name="poc" placeholder="Authorized POC" />
          <FloatingInput name="poc-designation" placeholder="POC Designation" />
        </div>

        <label
          htmlFor="pdf-file"
          className="flex items-center justify-between border border-borderCol py-3 rounded-md px-4 cursor-pointer"
        >
          <div className="flex items-center gap-x-1">
            <Paperclip className="text-gray-500 size-4" />
            <p className="text-sm">Upload authorization letter</p>
          </div>
          <p className="text-sm text-[#92929D]">Select PDF file</p>
        </label>
        <input type="file" id="pdf-file" accept=".pdf" className="hidden" />

        <div className="flex flex-col gap-y-2">
          <Button
            className="disabled:bg-borderCol disabled:text-[#B5B5BE] bg-primaryCol hover:bg-primaryCol/90 text-[16px] rounded-lg"
            size="lg"
            disabled={false}
            onClick={navigate}
          >
            Continue
          </Button>

          <Link href="/register/corporate/product-info" className="text-center">
            <Button
              type="button"
              variant="ghost"
              className="text-para text-[16px]"
            >
              Previous
            </Button>
          </Link>
        </div>
      </form>
    </CorporateStepLayout>
  );
};

export default PointContactPage;
