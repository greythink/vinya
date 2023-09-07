/** @type {import('tailwindcss').Config} */



const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');
const typography = require('@tailwindcss/typography');



module.exports = {
    content: [
        './app/**/*.tsx',
        './pages/**/*.tsx',
        './components/**/*.tsx',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            brand: {
                white: '#FFFFFF',
                'light-grey': '#9A9A9A',
                grey: '#605959',
                pink: '#E39E9E',
                brown: '#907979',
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1.5rem',
            },
        },
        fontFamily: {
            title: ['var(--font-title)', ...fontFamily.sans],
            body:  ['var(--font-body)', ...fontFamily.sans],
        },
        screens: {
            'xs': '480px',
            'sm': '768px',
            'md': '1024px',
            'lg': '1366px',
            'xl': '1536px',
        },
        extend: {},
    },
    plugins: [
        typography,
    ],
}
