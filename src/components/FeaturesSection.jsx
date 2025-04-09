import { MdOutlineCheck } from "react-icons/md";




const Feature = () => {
    return (<>

        <div className="container">
            <div className="heading w- text-[48px]">Our Exciting Features</div>
            <div className="container_feature1 flex border-2 border-gray-300 w-60 h-14 rounded-md">
                <div className="w-10 h-10  rounded-full bg-pink-200  mt-1.5 content-center pl-3  ">
                    <div className=""><MdOutlineCheck /></div>
                </div>
                <div className=" text-[#A64D79] text-[14px] mt-4 font-medium  ">2000+ Integrations</div>
            </div>
        </div>

    </>

    )
}
export default Feature;