import { MdOutlineCheck } from "react-icons/md";

const Feature2 = () => {
    return (
        <>
            <div className="text-[48px] w-[450px] font-medium m-auto mt-[180px]">Our Exciting Features</div>
            <div className="mt-[54px] gap-y-[24px]">
                <div className="flex w-full justify-center items-center gap-y-[24px] gap-x-[48px]">
                    <div className="flex pl-6 border-2 p-2 h-14 w-60 hover:shadow-md rounded-md items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#DCECFF] to-[#FFE0E0] flex justify-center items-center mr-4">
                            <MdOutlineCheck />
                        </div>
                        <div className="text-[#A64D79] text-sm font-medium">
                            2000+ Integrations
                        </div>
                    </div>
                    <div className="flex pl-6 border-2 p-2 h-14 w-60 hover:shadow-md rounded-md items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#DCECFF] to-[#FFE0E0] flex justify-center items-center mr-4">
                            <MdOutlineCheck />
                        </div>
                        <div className="text-[#A64D79] text-sm font-medium">
                            Auto Reconciliation
                        </div>
                    </div>
                    <div className="flex pl-6 border-2 p-2 h-14 w-60 hover:shadow-md rounded-md items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#DCECFF] to-[#FFE0E0] flex justify-center items-center mr-4">
                            <MdOutlineCheck />
                        </div>
                        <div className="text-[#A64D79] text-sm font-medium">
                            Transaction Auditing
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-center items-center mt-6 gap-y-[24px] gap-x-[48px]">
                    <div className="flex pl-6 border-2 p-2 h-14 w-60 hover:shadow-md rounded-md items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#DCECFF] to-[#FFE0E0] flex justify-center items-center mr-4">
                            <MdOutlineCheck />
                        </div>
                        <div className="text-[#A64D79] text-sm font-medium">
                            Audit Defence
                        </div>
                    </div>
                    <div className="flex pl-4  border-2 p-2 h-14 w-60 hover:shadow-md rounded-md items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#DCECFF] to-[#FFE0E0] flex justify-center items-center mr-4">
                            <MdOutlineCheck />
                        </div>
                        <div className="text-[#A64D79] text-sm font-medium">
                            Business Report
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-center items-center mt-6 gap-y-[24px] gap-x-[48px]">
                    <div className="flex pl-6 border-2 p-2 h-14 w-60 hover:shadow-md rounded-md items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#DCECFF] to-[#FFE0E0] flex justify-center items-center mr-4">
                            <MdOutlineCheck />
                        </div>
                        <div className="text-[#A64D79] text-sm font-medium">
                            It Notice Support
                        </div>
                    </div>
                    <div className="flex pl-4 border-2 p-2 h-14 w-60 hover:shadow-md rounded-md items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#DCECFF] to-[#FFE0E0] flex justify-center items-center mr-4">
                            <MdOutlineCheck />
                        </div>
                        <div className="text-[#A64D79] text-sm font-medium">
                            2-Min Tax Filing Report
                        </div>
                    </div>
                    <div className="flex pl-6 border-2 p-2 h-14 w-60 hover:shadow-md rounded-md items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#DCECFF] to-[#FFE0E0] flex justify-center items-center mr-4">
                            <MdOutlineCheck />
                        </div>
                        <div className="text-[#A64D79] text-sm font-medium">
                            Tax Filing Assistance
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feature2;