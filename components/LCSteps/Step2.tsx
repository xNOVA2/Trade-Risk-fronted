"use client";
import React from "react";
import { RadioInput } from "./helpers";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export const Step2 = () => {
  return (
    <div className="py-3 px-2 border border-borderCol rounded-lg w-full">
      <div className="flex items-center gap-x-2 ml-3 mb-3">
        <p className="size-6 rounded-full bg-primaryCol center text-white font-semibold">
          2
        </p>
        <p className="font-semibold text-lg text-lightGray">Amount</p>
      </div>

      <div className="flex items-center gap-x-2 justify-between w-full mb-3 border border-borderCol py-2 px-3 rounded-md">
        <div className="flex items-center gap-x-2">
          <Select>
            <SelectTrigger className="w-[100px] bg-borderCol/80">
              <SelectValue placeholder="USD" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="PKR">PKR</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="text"
            className="border border-borderCol focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>

        <p className="font-semibold text-sm">
          Five Million Five Hundred and Twenty Thousand{" "}
          <span className="text-primaryCol">US Dollars</span>
        </p>
      </div>

      <div className="border border-borderCol px-2 py-3 rounded-md">
        <h5 className="font-semibold ml-3">Payment Terms</h5>
        <div className="flex items-center gap-x-3 w-full mt-2">
          <RadioInput
            id="payment-sight"
            label="Sight LC"
            name="amount-payment-terms"
          />
          <RadioInput
            id="payment-usance"
            label="Usance LC"
            name="amount-payment-terms"
          />
          <RadioInput
            id="payment-deferred"
            label="Deferred LC"
            name="amount-payment-terms"
          />
          <RadioInput
            id="payment-upas"
            label="UPAS LC (Usance payment at sight)"
            name="amount-payment-terms"
          />
        </div>
      </div>
    </div>
  );
};
