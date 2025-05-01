import { Paths } from "@/data/Paths";
import Link from "next/link";
import styles from "./header.module.css"

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose}) => {
    return (
        <>
            {Paths.map((item, index) => (
                <Link
                    key={item.name}
                    href={item.path}
                    onClick={onClose}
                    className={`
                        md:hidden uppercase
                        ${styles.mobileMenuContainer}
                        ${styles[`menuItem${index + 1}`]}
                        ${!isOpen ? styles.mobileMenuHidden : ''}
                    `}
                >
                    {item.name}
                </Link>
            ))}
        </>
    )
}

export default MobileMenu;