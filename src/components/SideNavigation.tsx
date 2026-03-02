'use client'
import { FaArchive, FaFilePdf, FaUserAlt, FaEnvelope } from "react-icons/fa"
import { menuItems } from "./MenuItems.json"

export default function SideNavigation() {
    return (
        <nav className={`h-full p-5 w-16 sm:w-25 lg:w-48 duration-300 relative text-white p-5`}>
            <ul >
                {menuItems.map((item, index) => (
                    <li key={`${index}-${item}`} className="hover:text-gray-800 text-sm flex items-enter gap-x-6 cursor-pointer p-4 mt-2 rounded-md transition-colors duration-300">
                        <a className="flex items-center gap-2" href={item.path}>
                            {item.icon === 'FaUserAlt' && <FaUserAlt />}
                            {item.icon === 'FaArchive' && <FaArchive />}
                            {item.icon === 'FaFilePdf' && <FaFilePdf />}
                            {item.icon === 'FaEnvelope' && <FaEnvelope />}
                            <span className={"hidden md:block text-base font-medium flex-1"}>{item.name}</span>
                        </a>
                    </li>                  
    
                ))}
            </ul>
        </nav>
    )
}
