interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    color?: string;
}

export const HamburgerIcon = ({ size = 24, color = "var(--primary)", ...props }: IconProps) => {
    return (
        <svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke={color}
			strokeWidth="2.5"
			strokeLinecap="butt"
			strokeLinejoin="miter"
			{...props}
        >
			<line x1="3" y1="6" x2="21" y2="6" />
			<line x1="3" y1="12" x2="21" y2="12" />
			<line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      )
}

export const CheckBadgeIcon = ({ size = 24, color = "var(--primary)", ...props }: IconProps) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke={color}
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
		<path
			d="M10.5213 2.62368C11.3147 1.75255 12.6853 1.75255 13.4787 2.62368L14.4989 3.74391C14.8998 4.18418 15.4761 4.42288 16.071 4.39508L17.5845 4.32435C18.7614 4.26934 19.7307 5.23857 19.6757 6.41554L19.6049 7.92905C19.5771 8.52388 19.8158 9.10016 20.2561 9.50111L21.3763 10.5213C22.2475 11.3147 22.2475 12.6853 21.3763 13.4787L20.2561 14.4989C19.8158 14.8998 19.5771 15.4761 19.6049 16.071L19.6757 17.5845C19.7307 18.7614 18.7614 19.7307 17.5845 19.6757L16.071 19.6049C15.4761 19.5771 14.8998 19.8158 14.4989 20.2561L13.4787 21.3763C12.6853 22.2475 11.3147 22.2475 10.5213 21.3763L9.50111 20.2561C9.10016 19.8158 8.52388 19.5771 7.92905 19.6049L6.41553 19.6757C5.23857 19.7307 4.26934 18.7614 4.32435 17.5845L4.39508 16.071C4.42288 15.4761 4.18418 14.8998 3.74391 14.4989L2.62368 13.4787C1.75255 12.6853 1.75255 11.3147 2.62368 10.5213L3.74391 9.50111C4.18418 9.10016 4.42288 8.52388 4.39508 7.92905L4.32435 6.41553C4.26934 5.23857 5.23857 4.26934 6.41554 4.32435L7.92905 4.39508C8.52388 4.42288 9.10016 4.18418 9.50111 3.74391L10.5213 2.62368Z"
			stroke={color}
			strokeWidth="1.5"
		/>
		<path
			d="M9 12L11 14L15 10"
			stroke={color}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		</svg>
  );
};


export const LineIcon = ({
	size = 24,
	color = "var(--primary)",
	...props
  }: IconProps) => {
	return (
	  <svg
		width={size}
		height={size}
		viewBox="0 0 512 512"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	  >
		<rect width="512" height="512" rx="15%" fill={color} />
		<path
		  d="M443 231c-2 45-21 76-51 103-53 47-137 105-148 96-11-14 21-47-20-52-88-12-155-74-155-147 0-82 85-150 188-150s189 68 186 150z"
		  fill="#fff"
		/>
		<path
		  d="M371 232h-34m34-36h-36v72h36m-123 0v-72l54 72v-72m-89 72v-72m-66 0v72h37"
		  stroke={color}
		  strokeLinecap="round"
		  strokeLinejoin="round"
		  strokeWidth="21"
		  fill="none"
		/>
	  </svg>
	);
  };