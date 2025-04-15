const Footer = () => {
    return (<>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 md:w-[800px] gap-5 mx-auto px-5 sm:px-0" >
            <div className="column1_container flex flex-col gap-y-4">
                <div className="font-semibold cursor-pointer">Company</div>
                <div className="cursor cursor-pointer">About</div>
                <div className="cursor cursor-pointer">People</div>
                <div className="cursor cursor-pointer">Pricing</div>
                <div className="cursor cursor-pointer">Partner</div>
            </div>
            <div className="column2_container flex flex-col gap-y-4">
                <div className="font-semibold cursor-pointer">Resources</div>
                <div className="cursor cursor-pointer">Integration</div>
                <div className="cursor cursor-pointer">Tax Map</div>
                <div className="cursor cursor-pointer">Knowledge Base</div>
                <div className="cursor cursor-pointer">Web3 Glossary</div>
            </div>
            <div className="column3_container flex flex-col gap-y-4">
                <div className="font-semibold cursor-pointer">Legal</div>
                <div className="cursor-pointer">Terms</div>
                <div className="cursor-pointer">Privacy</div>
                <div className="cursor-pointer">Disclaimer</div>
            </div>
            <div className="column4_container flex flex-col gap-y-4">
                <div className="font-semibold cursor-pointer">Other</div>
                <div className="cursor-pointer">Status</div>
                <div className="cursor-pointer">Blog</div>
                <div className="cursor-pointer">Help Center</div>
            </div>
        </div >
        <div className="ml-4 sm:ml-4 md:ml-4 lg:ml-24 xl:ml-64 mx-auto mt-12">
            <span className="cursor-pointer">Start your free trial</span>
            <span className="cursor-pointer w-12 h-6 p-2 bg-red-600 ml-10 rounded-md text-white font-bold">Sign up free</span>
        </div>
    </>

    )
}
export default Footer;