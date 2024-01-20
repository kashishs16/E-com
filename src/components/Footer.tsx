import { FaTwitter } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className="footer footer-center p-10 bg-slate-900 text-white">
                <aside>
                    <img src="logo1.png" className="object-left-top object-scale-down h-45 w-28" />
                    <p className="font-bold text-3xl">
                       KSC PALACE Ltd. <br />Providing reliable products since 2012
                    </p>
                    <p className="text-xl">Copyright © 2024 - All right reserved</p>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <FaTwitter className="text-3xl" />
                        <SiInstagram className="text-3xl" />
                        <ImFacebook className="text-3xl" />
                        <FaWhatsapp className="text-3xl" />
                    </div>
                </nav>
            </footer>
        </>
    )
}
