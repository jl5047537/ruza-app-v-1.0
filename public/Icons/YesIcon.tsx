import { IconProps } from '@/lib/utils/Icon.props'

const YesIcon: React.FC<IconProps> = ({
	size = 18,
	className = '',
	fill = '#00ffa3',
}) => {
	const svgSize = `${size}px`

	return (
		<svg
			fill='none'
            className={className}
			height={svgSize}
			viewBox='0 0 24 24'
			width={svgSize}
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM7.46967 9.96967C7.76256 9.67678 8.23744 9.67678 8.53033 9.96967L12 13.4393L15.4697 9.96967C15.7626 9.67678 16.2374 9.67678 16.5303 9.96967C16.8232 10.2626 16.8232 10.7374 16.5303 11.0303L12.5303 15.0303C12.2374 15.3232 11.7626 15.3232 11.4697 15.0303L7.46967 11.0303C7.17678 10.7374 7.17678 10.2626 7.46967 9.96967Z'
				fill={fill}
			/>
		</svg>
	)
}

export default YesIcon
