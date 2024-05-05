"use client";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { ArrowUpNarrowWide, Eye, ListFilter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ApiResponse, IBids } from "@/types/type";
import { acceptOrRejectBid, fetchBids } from "@/services/apis/bids.api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { convertDateToYYYYMMDD } from "@/utils";

const BidCard = ({data}:{data:IBids}) => {
  const queryClient = useQueryClient();
  const handleSubmit = async (status:string,id:string) =>{
    const {success,response } = await acceptOrRejectBid(status,id)
      if(!success) return
      if(success) queryClient.invalidateQueries({ queryKey: ["single-lcs-bids"] });
  }
  return (
    <div className="border border-borderCol py-5 px-3 rounded-lg grid grid-cols-2 gap-y-1.5">
      <div>
        <p className="text-sm text-para mb-1">Bid Number</p>
        <p className="font-semibold text-lg">{data._id.slice(1,6)}</p>
      </div>

      <div>
        <p className="text-lg font-semibold mb-1">{data.bidBy.name}</p>
        <p className="text-sm text-para">{data.bidBy.country}</p>
      </div>

      <div>
        <p className="text-sm text-para mb-1">Confirmation Rate</p>
        <p className="text-lg font-semibold text-text">{data.confirmationPrice}% per annum</p>
      </div>

      <div>
        <p className="text-sm text-para mb-1">Discount Rate</p>
        <p className="text-lg font-semibold ">Not applicable</p>
      </div>

      <div>
        <p className="text-sm text-para mb-1">Discount Margin</p>
        <p className="text-lg font-semibold ">Not applicable</p>
      </div>

      <div>
        <p className="text-sm text-para mb-1">Minimum Charges</p>
        <p className="text-lg font-semibold text-text">AED 30,000.00</p>
      </div>

      <div>
        <p className="text-sm text-para mb-1">Bid Recieved</p>
        <p className="font-semibold text-lg">{convertDateToYYYYMMDD(data.createdAt)}</p>
      </div>

      <div>
        <p className="text-sm text-para mb-1">Bid Expiry</p>
        <p className="font-semibold text-lg">{convertDateToYYYYMMDD(data.createdAt)}</p>
      </div>

      <Button size="lg" className="mt-2 bg-[#29C084] hover:bg-[#29C084]/90" onClick={()=>handleSubmit("Accepted",data._id)}>
        Accept
      </Button>
      <Button size="lg" className="mt-2 text-para" variant="ghost" onClick={()=>handleSubmit("Rejected",data._id)}>
        Reject
      </Button>
    </div>
  );
};

const LCInfo = ({
  label,
  value,
  noBorder,
}: {
  label: string;
  value: string;
  noBorder?: boolean;
}) => {
  return (
    <div
      className={`flex items-start justify-between py-2 ${
        !noBorder && "border-b border-b-borderCol"
      }`}
    >
      <p className="text-para text-sm">{label}</p>
      <p className="font-semibold text-right text-sm max-w-[60%]">{value}</p>
    </div>
  );
};

export const TableDialog = ({id}:{id:string}) => {
  
  const {
    isLoading,
    error,
    data,
  }: { data: ApiResponse<IBids> | undefined , error: any; isLoading: boolean } =
    useQuery({
      queryKey: ["single-lcs-bids",id],
      queryFn: ()=>fetchBids({id}),
        // FetchUsers({ token: token!, search: searchData, page: Number(Page) }),
    });

    
    // built a proper loading page later 
    if(isLoading) return <div>Loading...</div>
    if(error) return <div>{error}</div>
    if(!data) return <div>No data found</div>


  return (
    <Dialog>
      <DialogTrigger className="center border border-borderCol rounded-md w-full px-1 py-2">
        <Eye className="size-5" />
      </DialogTrigger>
      <DialogContent className="w-full max-w-4xl p-0 !max-h-[85vh] h-full">
        <div className="flex items-center justify-between border-b border-b-borderCol px-7 !py-5 max-h-20">
          <h2 className="text-lg font-semibold">LC Confirmation Request</h2>
          <DialogClose>
            <X className="size-7" />
          </DialogClose>
        </div>

        <div className="overflow-y-hidden relative -mt-4 flex items-start justify-between h-full">
          {/* Left Section */}
          <div className="w-full py-5 border-r-2 border-r-borderCol h-full overflow-y-auto max-h-[75vh]">
            <div className="px-4">
              <h2 className="text-2xl font-semibold mb-1">
                <span className="text-para font-medium">LC Amount:</span> USD
                1,000,000.00
              </h2>
              <p className="text-sm text-para">
                Created at, Feb 28 2023 16:43, by{" "}
                <span className="text-text">Saif Arab Aramco</span>
              </p>

              <div className="h-[2px] w-full bg-neutral-800 mt-5" />
            </div>
            {/* Main Info */}
            <div className="px-4">
              <LCInfo label="LC Issuing Bank" value="Habib Bank Ltd" />
              <LCInfo label="LC Applicant" value="John Wick" />
              <LCInfo label="Advising Bank" value="HSBC UK (Local Bank)" />
              <LCInfo label="Confirming Bank" value="Habib Bank Ltd" />
              <LCInfo
                label="Payments Terms"
                value="Usance LC 90 days from acceptance date"
                noBorder
              />
            </div>
            {/* Separator */}
            <div className="h-[2px] w-full bg-borderCol mt-5" />
            {/* LC Details */}
            <div className="px-4 mt-4">
              <h2 className="text-xl font-semibold">LC Details</h2>
              <LCInfo label="LC Issuance (Expected)" value="Jan 12, 2023" />
              <LCInfo label="LC Expiry Date" value="Feb 16, 2023" />
              <LCInfo label="Transhipment" value="Not allowed" />
              <LCInfo label="Port of Shipment" value="Karachi" noBorder />

              <h2 className="text-xl font-semibold mt-3">Exporter Info</h2>
              <LCInfo label="Beneficiary" value="Adnan Syed" />
              <LCInfo label="Country" value="Saudi Arabia" />
              <LCInfo
                label="Charges on account of"
                value="Beneficiary"
                noBorder
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full h-full flex flex-col justify-start px-5">
            {/* Filter Section */}
            <div className="flex items-center justify-between w-full pt-5">
              <div className="flex items-center gap-x-2">
                <p className="bg-primaryCol text-white font-semibold text-lg rounded-xl py-1 px-3">
                  3
                </p>
                <p className="text-xl font-semibold">Bids recieved</p>
              </div>

              <div className="flex items-center gap-x-4">
                <div className="flex items-center gap-x-1">
                  <ArrowUpNarrowWide />
                  <p>Sort</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <ListFilter />
                  <p>Filter</p>
                </div>
              </div>
            </div>
            {/* Bids */}
            <div className="flex flex-col gap-y-4 max-h-[65vh] overflow-y-auto overflow-x-hidden mt-5">
              {data.data.map((data)=>{
                return(
                  <BidCard data={data} />
                )
              })}
              {/* <BidCard /> */}
              {/* <BidCard /> */}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
