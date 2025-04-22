

interface MainButtonProps {
    name: string;
    color?: "var(--primary)" | "var(--secondary)" | "var(--accent)";
    background?: "var(--primary)" | "var(--secondary)" | "var(--accent)";
}

const MainButton: React.FC<MainButtonProps> = ({ name, color = "var(--secondary)" , background = "var(--primary)" }) => {
    return (
        <button 
            style={{
                backgroundColor: background,
                color: color,
            }}
            className="px-4 py-2 cursor-pointer text-xs font-light"
        >
            {name}
        </button>
    )
}

export default MainButton;