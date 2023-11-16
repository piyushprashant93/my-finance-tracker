/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
import type { Config } from 'tailwindcss'

const config: Config = {

  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    darkMode: ['class', '[data-mode="dark"]'],
    extend: {
      colors: {
      'background-dark': '#1e1c30',
      'background-light': '#ffffff',
      'background-accent': '#292541',
      'green-light': '#c8ee44',
      'green-dark': '#193131',
      'green-accent': '#28a073',
      'accent-dark': '#1b212d',
       'accent-light':'#9ea9b7'
    }
    }
    
  },
  plugins: [],
}
export default config
