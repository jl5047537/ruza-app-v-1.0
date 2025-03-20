import { IconProps } from '@/lib/utils/Icon.props'

const ThemeIcon: React.FC<IconProps> = ({
	size = 22,
	className = '',
	fill = '#888888',
}) => {
	const svgSize = `${size}px`

	return (
		<svg
			fill='none'
			height={svgSize}
			className={className}
			viewBox='0 0 24 24'
			width={svgSize}
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M11.9962 19.0105C12.3759 19.0105 12.6897 19.2927 12.7393 19.6588L12.7462 19.7605V21.2605C12.7462 21.6747 12.4104 22.0105 11.9962 22.0105C11.6165 22.0105 11.3027 21.7284 11.253 21.3623L11.2462 21.2605V19.7605C11.2462 19.3463 11.582 19.0105 11.9962 19.0105ZM18.0179 16.9377L19.0785 17.9984C19.3714 18.2913 19.3714 18.7661 19.0785 19.059C18.7857 19.3519 18.3108 19.3519 18.0179 19.059L16.9572 17.9984C16.6643 17.7055 16.6643 17.2306 16.9572 16.9377C17.2501 16.6448 17.725 16.6448 18.0179 16.9377ZM7.03465 16.9377C7.32755 17.2306 7.32755 17.7055 7.03465 17.9984L5.97399 19.059C5.6811 19.3519 5.20623 19.3519 4.91333 19.059C4.62044 18.7661 4.62044 18.2913 4.91333 17.9984L5.97399 16.9377C6.26689 16.6448 6.74176 16.6448 7.03465 16.9377ZM12 6.47501C15.0514 6.47501 17.525 8.94864 17.525 12C17.525 15.0514 15.0514 17.525 12 17.525C8.94862 17.525 6.475 15.0514 6.475 12C6.475 8.94864 8.94862 6.47501 12 6.47501ZM12 7.97501C9.77705 7.97501 7.975 9.77707 7.975 12C7.975 14.223 9.77705 16.025 12 16.025C14.2229 16.025 16.025 14.223 16.025 12C16.025 9.77707 14.2229 7.97501 12 7.97501ZM21.2498 11.2683C21.664 11.2683 21.9998 11.6041 21.9998 12.0183C21.9998 12.398 21.7176 12.7118 21.3515 12.7615L21.2498 12.7683H19.7498C19.3355 12.7683 18.9998 12.4325 18.9998 12.0183C18.9998 11.6386 19.2819 11.3248 19.648 11.2752L19.7498 11.2683H21.2498ZM4.25024 11.2395C4.66446 11.2395 5.00024 11.5753 5.00024 11.9895C5.00024 12.3692 4.71809 12.683 4.35201 12.7327L4.25024 12.7395H2.75024C2.33603 12.7395 2.00024 12.4037 2.00024 11.9895C2.00024 11.6098 2.2824 11.296 2.64847 11.2463L2.75024 11.2395H4.25024ZM5.88988 4.86838L5.97399 4.941L7.03465 6.00166C7.32755 6.29455 7.32755 6.76942 7.03465 7.06232C6.76839 7.32858 6.35172 7.35279 6.05811 7.13494L5.97399 7.06232L4.91333 6.00166C4.62044 5.70877 4.62044 5.23389 4.91333 4.941C5.1796 4.67473 5.59626 4.65053 5.88988 4.86838ZM19.0785 4.941C19.3448 5.20726 19.369 5.62393 19.1512 5.91754L19.0785 6.00166L18.0179 7.06232C17.725 7.35521 17.2501 7.35521 16.9572 7.06232C16.691 6.79605 16.6668 6.37939 16.8846 6.08578L16.9572 6.00166L18.0179 4.941C18.3108 4.6481 18.7857 4.6481 19.0785 4.941ZM12.0002 1.9895C12.3799 1.9895 12.6937 2.27166 12.7434 2.63773L12.7502 2.7395V4.2395C12.7502 4.65372 12.4145 4.9895 12.0002 4.9895C11.6205 4.9895 11.3068 4.70735 11.2571 4.34127L11.2502 4.2395V2.7395C11.2502 2.32529 11.586 1.9895 12.0002 1.9895Z'
				fill={fill}
			/>
		</svg>
	)
}

export default ThemeIcon
