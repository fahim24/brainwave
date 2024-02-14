/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				CDark: "#161C2D",
				CBlue: "#473BF0",
				CRed: "#F64B4B",
				CHover: "#68D585",
			},
		},
	},
	plugins: [],
};
