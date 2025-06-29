import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	fontFamily: {
  		gisha: [
  			'Gisha',
  			'sans-serif'
  		]
  	},
  	extend: {
  		colors: {
  			clrPrimary2: '#1f2e26',
  			clrPrimary1: '#0a0f0d',
  			clrPrimary3: '#334d40',
  			clrPrimary4: '#476b59',
  			clrPrimary5: '#5c8a73',
  			clrPrimary6: '#75a38c',
  			clrPrimary7: '#94b8a6',
  			clrPrimary8: '#b3ccbf',
  			clrPrimary9: '#d1e0d9',
  			clrPrimary10: ' #f0f5f2',
  			clrgrey1: 'hsl(209, 61%, 16%)',
  			clrgrey2: 'hsl(211, 39%, 23%)',
  			clrgrey3: 'hsl(209, 34%, 30%)',
  			clrgrey4: 'hsl(209, 28%, 39%)',
  			clrgrey5: 'hsl(210, 22%, 49%)',
  			clrgrey6: 'hsl(209, 23%, 60%)',
  			clrgrey7: 'hsl(211, 27%, 70%)',
  			clrgrey8: 'hsl(210, 31%, 80%)',
  			clrgrey9: 'hsl(212, 33%, 89%)',
  			clrgrey10: ' hsl(210, 36%, 96%)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
