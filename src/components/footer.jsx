import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
    return (<>
        <div className="mt-[115px]">
            <div className="grid text-center grid-cols-2 justify-center sm:grid-cols-2 md:grid-cols-4 md:w-[800px] gap-5 mx-auto px-5 sm:px-0" >
                <div className="column1_container flex flex-col gap-y-2">
                    <div className=" cursor-pointer py-4">Company</div>
                    <div className="cursor text-[#9CA3AF] hover:underline cursor-pointer ">About</div>
                    <div className="cursor text-[#9CA3AF] hover:underline cursor-pointer">People</div>
                    <div className="cursor text-[#9CA3AF] hover:underline cursor-pointer">Pricing</div>
                    <div className="cursor text-[#9CA3AF] hover:underline cursor-pointer">Partner</div>
                </div>
                <div className="column2_container flex flex-col gap-y-2">
                    <div className=" cursor-pointer py-4">Resources</div>
                    <div className="cursor text-[#9CA3AF] hover:underline cursor-pointer">Integration</div>
                    <div className="cursor text-[#9CA3AF] hover:underline cursor-pointer">Tax Map</div>
                    <div className="cursor text-[#9CA3AF] hover:underline cursor-pointer">Knowledge Base</div>
                    <div className="cursor text-[#9CA3AF] hover:underline cursor-pointer">Web3 Glossary</div>
                </div>
                <div className="column3_container flex flex-col gap-y-2">
                    <div className=" cursor-pointer py-4">Legal</div>
                    <div className="text-[#9CA3AF] hover:underline cursor-pointer">Terms</div>
                    <div className="text-[#9CA3AF] hover:underline cursor-pointer">Privacy</div>
                    <div className="text-[#9CA3AF] hover:underline cursor-pointer">Disclaimer</div>
                </div>
                <div className="column4_container flex flex-col gap-y-2">
                    <div className=" cursor-pointer py-4">Other</div>
                    <div className="text-[#9CA3AF] hover:underline cursor-pointer">Status</div>
                    <div className="text-[#9CA3AF] hover:underline cursor-pointer">Blog</div>
                    <div className="text-[#9CA3AF] hover:underline cursor-pointer">Help Center</div>
                </div>
            </div >
        </div>
        <div className="flex lg:w-[60%] m-auto items-center justify-between mt-11 p-6 flex-col sm:flex-row md:flex-row lg:flex-row ">
            <div className=" ">
                <span className="cursor-pointer text-[14px]">Start your free trial</span>
                <span className="cursor-pointer text-[14px] w-12 h-6 p-2 bg-red-600 ml-10 rounded-md text-white font-bold">Sign up free</span>
            </div>
            <div className="flex  gap-x-5 mt-3 text-center text-[#9CA3AF] ">
                <a className="hover:text-[#6B7280]" href=""><FaFacebookF size={18} /></a>
                <a className="hover:text-[#6B7280]" href=""><FaDiscord size={18} /></a>
                <a className="hover:text-[#6B7280]" href=""><FaLinkedinIn size={18} /></a>
                <a className="hover:text-[#6B7280]" href=""><FaYoutube size={18} /></a>
                <a className="hover:text-[#6B7280]" href=""><RiInstagramFill size={18} /></a>
                <a className="hover:text-[#6B7280]" href=""><FaTwitter size={18} /></a>
                <a className="hover:text-[#6B7280]" href=""><FaGithub size={18} /></a>
            </div>
        </div>
    </>

    )
}
export default Footer;