import CreateLCLayout from "@/components/layouts/CreateLCLayout";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RadioInput = ({ id, label }: { id: string; label: string }) => {
  return (
    <label
      htmlFor={id}
      className="px-3 py-4 w-full rounded-md flex items-center gap-x-2 mb-2 border border-borderCol"
    >
      <input
        type="radio"
        name="role"
        id={id}
        className="accent-primaryCol size-4"
      />
      {label}
    </label>
  );
};

const DDCountryInput = ({ id, label }: { id: string; label: string }) => {
  return (
    <label
      id={id}
      className="border border-borderCol p-1 px-3 rounded-md w-full flex items-center justify-between"
    >
      <p>{label}</p>
      <Select>
        <SelectTrigger id={id} className="w-[180px] border-none bg-transparent">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Saudi Arabia">Saudi Arabia</SelectItem>
          <SelectItem value="Pakistan">Pakistan</SelectItem>
        </SelectContent>
      </Select>
    </label>
  );
};

const CreateRequestPage = () => {
  return (
    <CreateLCLayout>
      <div className="border border-borderCol py-4 px-3 w-full flex flex-col gap-y-5">
        {/* Step 1 */}
        <div className="py-3 px-2 border border-borderCol rounded-lg w-full">
          <div className="flex items-center gap-x-2 ml-3 mb-3">
            <p className="size-6 rounded-full bg-primaryCol center text-white font-semibold">
              1
            </p>
            <p className="font-semibold text-lg text-para">
              In this transaction you are?
            </p>
          </div>

          <label
            htmlFor="role-exporter"
            className="px-3 py-4 w-full bg-[#EEE9FE] rounded-md flex items-center gap-x-2 mb-2"
          >
            <input
              type="radio"
              name="role"
              id="role-exporter"
              className="accent-primaryCol size-4"
            />
            Exporter/Supplier (Beneficiary)
          </label>

          <label
            htmlFor="role-importer"
            className="px-3 py-4 w-full border border-borderCol rounded-md flex items-center gap-x-2"
          >
            <input
              type="radio"
              name="role"
              id="role-importer"
              className="accent-primaryCol size-4"
            />
            Importer (Applicant)
          </label>
        </div>

        {/* Step 2 */}
        <div className="py-3 px-2 border border-borderCol rounded-lg w-full">
          <div className="flex items-center w-full justify-between gap-x-2 mb-3">
            <div className="flex items-center gap-x-2 ml-3">
              <p className="size-6 rounded-full bg-primaryCol center text-white font-semibold">
                2
              </p>
              <p className="font-semibold text-lg text-para">Amount</p>
            </div>

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
              <Input type="text" className="border border-borderCol" />
            </div>
          </div>

          <div className="border border-borderCol px-2 py-3 rounded-md">
            <h5 className="font-semibold ml-3">Payment Terms</h5>
            <div className="flex items-center gap-x-3 w-full mt-2">
              <RadioInput id="payment-sight" label="Sight LC" />
              <RadioInput id="payment-usance" label="Usance LC" />
              <RadioInput id="payment-deferred" label="Deferred LC" />
              <RadioInput
                id="payment-upas"
                label="UPAS LC (Usance payment at sight)"
              />
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="py-3 px-2 border border-borderCol rounded-lg w-full">
          <div className="flex items-center gap-x-2 ml-3 mb-3">
            <p className="size-6 rounded-full bg-primaryCol center text-white font-semibold">
              4
            </p>
            <p className="font-semibold text-lg text-para">Importer Info</p>
          </div>

          <label
            id="name"
            className="border border-borderCol p-1 px-3 rounded-md w-full flex items-center justify-between mb-2"
          >
            <p className="w-full">Name of Applicant</p>
            <Input
              type="text"
              id="name"
              placeholder="Enter name"
              className="block bg-none border-none outline-none focus-visible:ring-0 w-[180px]"
            />
          </label>

          <label
            id="select-country"
            className="border border-borderCol p-1 px-3 rounded-md w-full flex items-center justify-between"
          >
            <p>Country of Import</p>
            <Select>
              <SelectTrigger
                id="select-country"
                className="w-[180px] border-none bg-transparent"
              >
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Saudi Arabia">Saudi Arabia</SelectItem>
                <SelectItem value="Pakistan">Pakistan</SelectItem>
              </SelectContent>
            </Select>
          </label>
        </div>

        {/* Step 5 */}
        <div className="py-3 px-2 border border-borderCol rounded-lg w-full">
          <div className="flex items-center gap-x-2 ml-3 mb-3">
            <p className="size-6 rounded-full bg-primaryCol center text-white font-semibold">
              5
            </p>
            <p className="font-semibold text-lg text-para">Exporter Info</p>
          </div>
          <div className="flex items-center gap-x-3">
            <label
              id="name"
              className="border border-borderCol p-1 px-3 rounded-md w-full flex items-center justify-between mb-2"
            >
              <p className="w-full">Name of Beneficiary</p>
              <Input
                type="text"
                id="name"
                placeholder="Enter name"
                className="block bg-none border-none outline-none focus-visible:ring-0 w-[180px]"
              />
            </label>

            <DDCountryInput id="export-country" label="Country of Export" />
            <DDCountryInput
              id="beneficiary-country"
              label="Beneficiary Country"
            />
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          {/* Step 6 */}
          <div className="py-3 px-2 border border-borderCol rounded-lg w-full">
            <div className="flex items-center gap-x-2 ml-3 mb-3">
              <p className="size-6 rounded-full bg-primaryCol center text-white font-semibold">
                1
              </p>
              <p className="font-semibold text-lg text-para">
                In this transaction you are?
              </p>
            </div>

            <label
              htmlFor="role-exporter"
              className="px-3 py-4 w-full bg-[#EEE9FE] rounded-md flex items-center gap-x-2 mb-2"
            >
              <input
                type="radio"
                name="role"
                id="role-exporter"
                className="accent-primaryCol size-4"
              />
              Exporter/Supplier (Beneficiary)
            </label>

            <label
              htmlFor="role-importer"
              className="px-3 py-4 w-full border border-borderCol rounded-md flex items-center gap-x-2"
            >
              <input
                type="radio"
                name="role"
                id="role-importer"
                className="accent-primaryCol size-4"
              />
              Importer (Applicant)
            </label>
          </div>
          {/* Step 7 */}
          {/* Step 8 */}
        </div>
      </div>
    </CreateLCLayout>
  );
};

export default CreateRequestPage;
