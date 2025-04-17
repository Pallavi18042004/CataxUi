import { MdOutlineCheck } from "react-icons/md";
import Feature2 from "./FeaturesSection2";




const Feature = () => {
    return (<>

        <div className="container mt-24 mx-auto  max-w-5xl px-4 lg:hidden">
            <div className="heading text-[24px] md:text-[48px] text-center font-medium mb-12">
                Our Exciting Features
            </div>

            <div className="flex justify-center items-center flex-wrap gap-2 ">
                {[
                    "2000+ Integrations",
                    "Auto Reconciliation",
                    "Transaction Auditing",
                    "Audit Defence",
                    "Business Report",
                    "IT Notice Support",
                    "2-Min Tax Filing Report",
                    "Tax Filing Assistant"
                ].map((feature, index) => (
                    <div key={index} className="flex border-2 hover:shadow-md p-2 h-14 w-60 rounded-md items-center ">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#DCECFF] to-[#FFE0E0] flex justify-center items-center mr-4">
                            <MdOutlineCheck />
                        </div>
                        <div className="text-[#A64D79] text-sm font-medium">{feature}</div>
                    </div>
                ))}
                {/* sknxknx */}
            </div>
        </div>
        <div className="hidden lg:block">
            <Feature2 />
        </div>

    </>

    )
}
export default Feature;