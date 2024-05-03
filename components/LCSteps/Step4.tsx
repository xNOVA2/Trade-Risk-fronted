import React from "react";
import { Input } from "@/components/ui/input";
import { DDInput } from "./helpers";

export const Step4 = () => {
  return (
    <div className="py-3 px-2 border border-borderCol rounded-lg w-full">
      <div className="flex items-center gap-x-2 ml-3 mb-3">
        <p className="size-6 rounded-full bg-primaryCol center text-white font-semibold">
          4
        </p>
        <p className="font-semibold text-lg text-lightGray">Importer Info</p>
      </div>

      <label
        id="name"
        className="border border-borderCol p-1 px-3 rounded-md w-full flex items-center justify-between mb-2"
      >
        <p className="w-full text-lightGray">Name of Applicant</p>
        <Input
          type="text"
          id="name"
          placeholder="Enter name"
          className="block bg-none border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 w-[180px]"
        />
      </label>
      <DDInput
        placeholder="Select a country"
        label="Country of Import"
        id="select-country-import"
      />
    </div>
  );
};
