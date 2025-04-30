interface MainButtonProps {
    name: string;
    color?: "text-[var(--primary)]" | "text-[var(--secondary)]" | "text-[var(--accent)]";
    background?: "bg-[var(--primary)]" | "bg-[var(--secondary)]" | "bg-[var(--accent)]";
    hover?: "";
}

const MainButton: React.FC<MainButtonProps> = ({ name, color = "text-[var(--secondary)]" , background = "bg-[var(--primary)]", hover = "bg-[var(--accent)]" }) => {
    return (
        <button 
            className={`${background} ${color} font-thai px-4 pb-2 pt-3 cursor-pointer text-xs font-light hover:${hover}`}
        >
            {name}
        </button>
    )
}

export default MainButton;




// Version without tailwind utilities

// interface MainButtonProps {
//     name: string;
//     color?: "var(--primary)" | "var(--secondary)" | "var(--accent)";
//     background?: "var(--primary)" | "var(--secondary)" | "var(--accent)";
// }

// const MainButton: React.FC<MainButtonProps> = ({ name, color = "var(--secondary)" , background = "var(--primary)" }) => {
//     return (
//         <button 
//             style={{
//                 backgroundColor: background,
//                 color: color,
//             }}
//             className="font-thai px-4 pb-2 pt-3 cursor-pointer text-xs font-light hover:bg-[var(--accent)]"
//         >
//             {name}
//         </button>
//     )
// }

// export default MainButton;




