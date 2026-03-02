'use client'
import { FaArchive, FaFilePdf, FaUserAlt, FaEnvelope } from "react-icons/fa"
import content from "../../public/content.json"

export default function SideNavigation() {
    
    return (
        <nav className={`h-full p-5 w-16 sm:w-25 lg:w-48 duration-300 relative text-white p-5`}>
            <ul >
                {content.menuItems.map((item, index) => (
                    <li key={`${index}-${item}`} className="hover:text-gray-800 text-sm
 flex items-enter gap-x-6 cursor-pointer p-4 mt-2 rounded-md transition-colors duration-300">
                        <a className="flex items-center
 gap-2" href={item.path}>
                            {item.icon === 'FaUserAlt' && <FaUserAlt className="text-black dark:text-white" />}
                            {item.icon === 'FaArchive' && <FaArchive className="text-black dark:text-white" />}
                            {item.icon === 'FaFilePdf' && <FaFilePdf className="text-black dark:text-white" />}
                            {item.icon === 'FaEnvelope' && <FaEnvelope className="text-black dark:text-white" />}
                            <span className={"hidden md:block text-black dark:text-white font-medium flex-1"}>{item.name}</span>
                        </a>
                    </li>               
                ))}
            </ul>
        </nav>
    )
}
