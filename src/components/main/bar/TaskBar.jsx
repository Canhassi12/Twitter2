import HomeSvg from "../../../assets/home.svg";
import SearchSvg from "../../../assets/search.svg";
import BellSvg from "../../../assets/bell.svg";
import MailSvg from "../../../assets/mail.svg";
import SaveSvg from "../../../assets/save.svg";
import ListSvg from "../../../assets/list.svg";
import ProfileSvg from "../../../assets/profile.svg"
import ConfigSvg from "../../../assets/config.svg"

export default function TaskBar() {
    return (
        <div className="bg-white flex justify-around p-3 fixed bottom-0 w-full border md:flex-col md:h-full md:w-[88px] -z-10">
            <button>
                <img className="w-7 h-7 md:w-[26.25px]" src={HomeSvg} />
            </button>
            
            <button>
                <img className="w-7 h-7 md:w-[26.25px]" src={SearchSvg} />
            </button>
            
            <button>
                <img className="w-7 h-7 md:w-[26.25px]" src={BellSvg} />
            </button>

            <button >
                <img className="w-7 h-7 md:w-[26.25px]" src={MailSvg} />
            </button>

            <button className="hidden md:flex">
                <img className="w-[26.25px]" src={SaveSvg} />
            </button>

            <button className="hidden md:flex">
                <img className="w-[26.25px]" src={ListSvg} />
            </button>

            <button className="hidden md:flex">
                <img className="w-[26.25px]" src={ProfileSvg} />
            </button>

            <button className="hidden md:flex">
                <img className="w-[26.25px]" src={ConfigSvg} />
            </button>
        </div>   
    );
}