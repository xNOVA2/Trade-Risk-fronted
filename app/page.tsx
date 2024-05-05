"use client";
import { LineCharts, ProgressCharts } from "@/components/charts";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { RequestTable } from "@/components/shared/RequestTable";
import { Sidebar } from "@/components/shared/Sidebar";
import { fetchLcs } from "@/services/apis/lcs.api";
import { ApiResponse, ILcs } from "@/types/type";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  
  const {
    isLoading,
    error,
    data,
  }: { data: ApiResponse<ILcs> | undefined , error: any; isLoading: boolean } =
    useQuery({
      queryKey: ["fetch-lcs"],
      queryFn: fetchLcs
        // FetchUsers({ token: token!, search: searchData, page: Number(Page) }),
    });

    if(isLoading) return <div>Loading...</div>
    if(error) return <div>{error}</div>
    if(!data) return <div>No data found</div>
    
  return (
    <DashboardLayout>
      <div className="flex w-full 2xl:px-10 px-2">
        <div className="2xl:w-5/6 w-4/5 p-4">
          <h2 className="text-4xl font-semibold mb-5">Welcome, John</h2>
          {/* Charts */}
          <div className="flex xl:flex-row flex-col gap-x-3 gap-y-4 mb-4 h-fit">
            <ProgressCharts title="Total Requests" />
            <LineCharts />
          </div>
          <RequestTable isBank={false} data={data} key={'Corperate'} />
        </div>
        <div className="2xl:w-1/6 w-1/5 sticky top-10 h-[80vh]">
          <Sidebar isBank={false} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HomePage;
