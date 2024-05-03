"use client";
import { FloatingInput } from "@/components/helpers/FloatingInput";
import CorporateStepLayout from "@/components/layouts/CorporateStepLayout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProductInfoPage = () => {
  const router = useRouter();
  const navigate = () => {
    router.push("/register/corporate/point-contact");
  };
  return (
    <CorporateStepLayout
      step={1}
      title="Product Info"
      text="Please add information about your products and trade volume below"
    >
      <form className="max-w-xl w-full shadow-md bg-white rounded-xl p-8 z-10 mt-5 flex flex-col gap-y-5">
        <FloatingInput
          type="text"
          name="product"
          placeholder="Your Product(s)"
        />

        <div className="flex items-center gap-x-2 w-full">
          <div className="border-[2px] border-primaryCol text-primaryCol rounded-lg w-16 h-12 center font-medium">
            USD
          </div>
          <div className="w-full">
            <FloatingInput
              type="text"
              name="annual-sales"
              placeholder="Annual Sales of your Company"
            />
          </div>
        </div>

        <div className="flex items-center gap-x-2 w-full">
          <div className="border-[2px] border-primaryCol text-primaryCol rounded-lg w-16 h-12 center font-medium">
            USD
          </div>
          <div className="w-full">
            <FloatingInput
              type="text"
              name="annual-value-exports"
              placeholder="Annual Value of Exports"
            />
          </div>
        </div>

        <div className="flex items-center gap-x-2 w-full">
          <div className="border-[2px] border-primaryCol text-primaryCol rounded-lg w-16 h-12 center font-medium">
            USD
          </div>
          <div className="w-full">
            <FloatingInput
              type="text"
              name="annual-value-imports"
              placeholder="Annual Value of Imports"
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <Button
            className="disabled:bg-[#E2E2EA] disabled:text-[#B5B5BE] bg-primaryCol hover:bg-primaryCol/90 text-[16px] rounded-lg"
            size="lg"
            disabled={false}
            onClick={navigate}
          >
            Continue
          </Button>

          <Link href="/register/corporate" className="text-center">
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

export default ProductInfoPage;
