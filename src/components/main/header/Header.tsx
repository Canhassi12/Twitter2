import { useState } from "react";
import ThemeMode from "../../ThemeMode";
import UserMenu from "../../User/UserMenu";
import CloseSvg from "../../../assets/close.svg";
import ProfileSvg from "../../../assets/profile.svg";
import BaloonSvg from "../../../assets/baloon.svg";
import SaveSvg from "../../../assets/save.svg";
import ListSvg from "../../../assets/list.svg";



export  default function Header() {

    const [menuIsOpened, setMenuIsOpended] = useState(false);

    function handleClickMenu() {
        setMenuIsOpended(!menuIsOpened);
    }

    return (
        <>
            <div className={`${!menuIsOpened && 'hidden'} absolute h-full w-[280px]`}>
                <div className="h-full bg-white flex flex-col">
                    <div className="flex h-[53px] items-center pl-4 pr-4">
                       <h1 className="w-48 text-lg font-bold">Informações da conta</h1>
                        <button onClick={handleClickMenu} className="pl-10">
                            <img src={CloseSvg} />
                        </button>
                    </div>
                    <div className="h-[152px] p-4 flex flex-col">
                        <div className="flex">
                            <img className="w-8 h-8" src="src\assets\react.svg" alt="" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="h-5 font-bold">Name of User</h3>
                            <h4 className="h-5 text-sm text-gray-500">@of user</h4>
                        </div>
                        <div className="flex gap-4 mt-2">
                            <p>following</p>
                            <p>followers</p>
                        </div>
                    </div>
                    <button className="flex h-[56px] p-4 gap-8">
                        <img className="h-6 w-6" src={ProfileSvg} />                        
                        <h2 className="text-xl font-bold">Perfil</h2>
                    </button>

                    <button className="flex h-[56px] p-4 gap-8">
                        <img className="h-6 w-6" src={BaloonSvg} />                        
                        <h2 className="text-xl font-bold">Tópicos</h2>
                    </button>

                    <button className="flex h-[56px] p-4 gap-8">
                        <img className="h-6 w-6" src={SaveSvg} />                        
                        <h2 className="text-xl font-bold">Itens salvos</h2>
                    </button>

                    <button className="flex h-[56px] p-4 gap-8">
                        <img className="h-6 w-6" src={ListSvg} />                        
                        <h2 className="text-xl font-bold">Listas</h2>
                    </button>
                    <button className="flex h-[56px] p-4 gap-8">
                        <img className="h-6 w-6" src={BaloonSvg} />                        
                        <h2 className="text-xl font-bold">Roda do twitter</h2>
                    </button>
                </div>
            </div>
            <div className="flex items-center h-[53px] pl-4 pr-4 ">
                <button onClick={handleClickMenu}>
                    <UserMenu />
                </button>
                <button className="text-xl font-bold w-44 h-6">Página Inicial</button>
            </div>
        </>
        
    );
} 