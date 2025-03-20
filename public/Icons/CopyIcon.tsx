import { IconProps } from '@/lib/utils/Icon.props'

const CopyIcon: React.FC<IconProps> = ({
	size = 18,
	className = '',
	fill = '#ffffff',
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
				d='M5.5028 4.62704L5.5 6.75V17.2542C5.5 19.0491 6.95507 20.5042 8.75 20.5042L17.3663 20.5045C17.0573 21.3782 16.224 22.0042 15.2444 22.0042H8.75C6.12665 22.0042 4 19.8776 4 17.2542V6.75C4 5.76929 4.62745 4.93512 5.5028 4.62704ZM17.75 2C18.9926 2 20 3.00736 20 4.25V17.25C20 18.4926 18.9926 19.5 17.75 19.5H8.75C7.50736 19.5 6.5 18.4926 6.5 17.25V4.25C6.5 3.00736 7.50736 2 8.75 2H17.75ZM17.75 3.5H8.75C8.33579 3.5 8 3.83579 8 4.25V17.25C8 17.6642 8.33579 18 8.75 18H17.75C18.1642 18 18.5 17.6642 18.5 17.25V4.25C18.5 3.83579 18.1642 3.5 17.75 3.5Z'
				fill={fill}
			/>
		</svg>
	)
}

export default CopyIcon
