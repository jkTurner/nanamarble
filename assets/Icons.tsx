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