import { MdOutlineCheck } from "react-icons/md";




const Feature = () => {
    return (<>

        <div className="container mt-56 ">
            <div className="heading text-[48px] ml-[480px]">Our Exciting Features</div>
            <div className="container_feature1 ml-[303px] mt-16 flex gap-x-12">
                <div className=" flex border-2 border-gray-300 w-60 h-14 rounded-md">
                    <div className="w-10 h-10  rounded-full bg-gradient-to-r from-[#DCECFF] to-[#FFE0E0] ml-5 mt-1.5 content-center pl-3  ">
                        <div className=""><MdOutlineCheck /></div>
                    </div>
                    <div className=" text-[#A64D79] text-[14px] mt-4 ml-4 font-medium  ">2000+ Integrations</div>
                </div>
                <div className="flex border-2 border-gray-300 w-60 h-14 rounded-md">
                    <div className="w-10 h-10  rounded-full bg-gradient-to-r from-[#DCECFF] to-[#FFE0E0] ml-5 mt-1.5 content-center pl-3  ">
                        <div className=""><MdOutlineCheck /></div>
                    </div>
                    <div className=" text-[#A64D79] text-[14px] mt-4 ml-4 font-medium  ">Auto Reconciliation</div>
                </div>
                <div className="flex border-2 border-gray-300 w-60 h-14 rounded-md">
                    <div className="w-10 h-10  rounded-full bg-gradient-to-r from-[#DCECFF] to-[#FFE0E0] ml-5 mt-1.5 content-center pl-3  ">
                        <div className=""><MdOutlineCheck /></div>
                    </div>
                    <div className=" text-[#A64D79] text-[14px] mt-4 ml-4 font-medium  ">Transaction Auditing</div>
                </div>
            </div>
            <div className="container_feature2 mt-6 ml-[460px] flex gap-x-20">
                <div className=" flex border-2 border-gray-300 w-52 h-14 rounded-md">
                    <div className="w-10 h-10  rounded-full bg-gradient-to-r from-[#DCECFF] to-[#FFE0E0] ml-5 mt-1.5 content-center pl-3  ">
                        <div className=""><MdOutlineCheck /></div>
                    </div>
                    <div className=" text-[#A64D79] text-[14px] mt-4 ml-4 font-medium  ">Audit Defence</div>
                </div>
                <div className="flex border-2 border-gray-300 w-52 h-14 rounded-md">
                    <div className="w-10 h-10  rounded-full bg-gradient-to-r from-[#DCECFF] to-[#FFE0E0] ml-5 mt-1.5 content-center pl-3  ">
                        <div className=""><MdOutlineCheck /></div>
                    </div>
                    <div className=" text-[#A64D79] text-[14px] mt-4 ml-4 font-medium  ">Business Report</div>
                </div>
            </div>
            <div className="container_feature3 mt-6 ml-[303px] flex gap-x-12">
                <div className=" flex border-2 border-gray-300 w-60 h-14 rounded-md">
                    <div className="w-10 h-10  rounded-full bg-gradient-to-r from-[#DCECFF] to-[#FFE0E0] ml-5 mt-1.5 content-center pl-3  ">
                        <div className=""><MdOutlineCheck /></div>
                    </div>
                    <div className=" text-[#A64D79] text-[14px] mt-4 ml-4 font-medium  ">It Notice Support</div>
                </div>
                <div className="flex border-2 border-gray-300 w-60 h-14 rounded-md">
                    <div className="w-10 h-10  rounded-full bg-gradient-to-r from-[#DCECFF] to-[#FFE0E0] ml-5 mt-1.5 content-center pl-3  ">
                        <div className=""><MdOutlineCheck /></div>
                    </div>
                    <div className=" text-[#A64D79] text-[14px] mt-4 ml-4 font-medium  ">2-Min Tax Filing Report</div>
                </div>
                <div className="flex border-2 border-gray-300 w-60 h-14 rounded-md">
                    <div className="w-10 h-10  rounded-full bg-gradient-to-r from-[#DCECFF] to-[#FFE0E0] ml-5 mt-1.5 content-center pl-3  ">
                        <div className=""><MdOutlineCheck /></div>
                    </div>
                    <div className=" text-[#A64D79] text-[14px] mt-4 ml-4 font-medium  ">Tax Filing Assistant</div>
                </div>
            </div>
        </div>

    </>

    )
}
export default Feature;