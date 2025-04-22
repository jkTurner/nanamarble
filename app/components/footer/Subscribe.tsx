import MainButton from "../ui/button/MainButton";


const Subscribe = () => {
    return (
        <div className="flex flex-col gap-sm max-w-[360px]">
            <span className="font-semibold">Let&apos;s Stay Connected</span>
            <div className="flex gap-0">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-sm py-[14px] text-[var(--primary)] text-xs
                    placeholder:text-[var(--textLight)] bg-[var(--secondary)] outline-none"
                />
                <MainButton name="Submit" background="var(--accent)" color="var(--secondary)" />
            </div>
        </div>
    )
}

export default Subscribe;