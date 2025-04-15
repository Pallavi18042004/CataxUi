import { MdOutlineCheck } from "react-icons/md";




const Feature = () => {
    return (<>

        <div className="container mt-36 mx-auto  max-w-5xl px-4">
            <div className="heading text-[32px] md:text-[48px] text-center font-bold mb-12">
                Our Exciting Features
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <div key={index} className="flex border-2 p-2 h-14 w-60 rounded-md items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#DCECFF] to-[#FFE0E0] flex justify-center items-center mr-4">
                            <MdOutlineCheck />
                        </div>
                        <div className="text-[#A64D79] text-sm font-medium">{feature}</div>
                    </div>
                ))}
                {/* sknxknx */}
            </div>
        </div>

    </>

    )
}
export default Feature;