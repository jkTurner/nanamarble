import { Paths } from "@/data/Paths";
import styles from "./header.module.css"
import Link from "next/link";

interface NavbarProps {
    color?: "var(--primary)" | "var(--secondary)";
}

const Navbar: React.FC<NavbarProps> = ({ color="var(--primary)" }) => {
    return (
        <div>
            <ul className="flex gap-md uppercase text-xs">
            {Paths.map((item, index) => (
                <li 
                    key={index} 
                    style={{
                        color: color,
                    }}
                    className={styles.navItem}>
                    <Link href={item.path}>
                        {item.name}
                    </Link>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Navbar;