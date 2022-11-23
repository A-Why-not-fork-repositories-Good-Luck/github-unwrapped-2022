import React, {SVGProps} from 'react';

export const Solidity: React.FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			enable-background="new 0 0 28 28"
			viewBox="0 0 28 28"
		>
			<path
				fill="#FFAB66"
				d="M13.583,2.5L7.827,14c0,0,3.256,6.446,6.173,6.473c2.917,0.027,7.333-7.39,7.333-7.39L13.583,2.5z"
			/>
			<path d="M14,18.384c-0.092,0-0.185-0.025-0.266-0.077l-6.625-4.168c-0.229-0.145-0.302-0.444-0.165-0.678l6.625-11.216C13.66,2.093,13.823,2,14,2l0,0c0.177,0,0.341,0.094,0.431,0.246l6.62,11.216c0.137,0.233,0.065,0.533-0.164,0.678l-6.62,4.168C14.185,18.358,14.092,18.384,14,18.384z M8.053,13.552L14,17.293l5.942-3.742L14,3.483L8.053,13.552z" />
			<path d="M14,26c-0.161,0-0.312-0.077-0.406-0.208l-6.625-9.195c-0.14-0.194-0.123-0.46,0.042-0.635c0.164-0.174,0.43-0.208,0.63-0.081L14,19.882l6.359-4.001c0.202-0.127,0.466-0.093,0.63,0.081c0.164,0.174,0.181,0.44,0.042,0.635l-6.625,9.195C14.312,25.923,14.161,26,14,26z M9.281,18.095L14,24.645l4.719-6.55l-4.453,2.802c-0.162,0.103-0.37,0.103-0.532,0L9.281,18.095z" />
		</svg>
	);
};