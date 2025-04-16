import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
    return (<>
        <div className="border">
            <div className="grid border text-center grid-cols-2 justify-center sm:grid-cols-2 md:grid-cols-4 md:w-[800px] gap-5 mx-auto px-5 sm:px-0" >
                <div className="column1_container flex flex-col gap-y-4">
                    <div className=" cursor-pointer">Company</div>
                    <div className="cursor text-[#9CA3AF] cursor-pointer">About</div>
                    <div className="cursor text-[#9CA3AF] cursor-pointer">People</div>
                    <div className="cursor text-[#9CA3AF] cursor-pointer">Pricing</div>
                    <div className="cursor text-[#9CA3AF] cursor-pointer">Partner</div>
                </div>
                <div className="column2_container flex flex-col gap-y-4">
                    <div className=" cursor-pointer">Resources</div>
                    <div className="cursor text-[#9CA3AF] cursor-pointer">Integration</div>
                    <div className="cursor text-[#9CA3AF] cursor-pointer">Tax Map</div>
                    <div className="cursor text-[#9CA3AF] cursor-pointer">Knowledge Base</div>
                    <div className="cursor text-[#9CA3AF] cursor-pointer">Web3 Glossary</div>
                </div>
                <div className="column3_container flex flex-col gap-y-4">
                    <div className=" cursor-pointer">Legal</div>
                    <div className="text-[#9CA3AF] cursor-pointer">Terms</div>
                    <div className="text-[#9CA3AF] cursor-pointer">Privacy</div>
                    <div className="text-[#9CA3AF] cursor-pointer">Disclaimer</div>
                </div>
                <div className="column4_container flex flex-col gap-y-4">
                    <div className=" cursor-pointer">Other</div>
                    <div className="text-[#9CA3AF] cursor-pointer">Status</div>
                    <div className="text-[#9CA3AF] cursor-pointer">Blog</div>
                    <div className="text-[#9CA3AF] cursor-pointer">Help Center</div>
                </div>
            </div >
        </div>
        <div className="flex lg:w-[60%] m-auto justify-between border mt-11 p-6 flex-col sm:flex-row md:flex-row lg:flex-row ">
            <div className=" ">
                <span className="cursor-pointer text-[15px]">Start your free trial</span>
                <span className="cursor-pointer text-[15px] w-12 h-6 p-2 bg-red-600 ml-10 rounded-md text-white font-bold">Sign up free</span>
            </div>
            <div className="flex pl-6 gap-x-5 text-[#9CA3AF]">
                <a href=""><FaFacebookF size={18} /></a>
                <a href=""><FaDiscord size={18} /></a>
                <a href=""><FaLinkedinIn size={18} /></a>
                <a href=""><FaYoutube size={18} /></a>
                <a href=""><RiInstagramFill size={18} /></a>
                <a href=""><FaTwitter size={18} /></a>
                <a href=""><FaGithub size={18} /></a>
            </div>
        </div>
    </>

    )
}
export default Footer;