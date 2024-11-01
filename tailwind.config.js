/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js,ts}","!./node_modules/**/*"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#283d3bff",
					hover: "#3b5553", 
				  },
				  secondary: {
					DEFAULT: "#edddd4ff",
					hover: "#f5e8e0",
				  },
				  accent: {
					DEFAULT: "#197278ff",
					hover: "#2b8d8b", 
				  },
				  tetiary: {
					DEFAULT: "#c44536ff",
					hover: "#d35646", 
				  },
			}
		},
	},
	plugins: [],
}

