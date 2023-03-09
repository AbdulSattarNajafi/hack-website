/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    theme: {
        fontFamily: {
            opensans: ['Open Sans', 'sans-serif'],
            montreal: ['Neue Montreal', 'sans-serif'],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '30px',
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '992px',
            xl: '1388px',
        },
        extend: {
            colors: {
                dark: '#111111',
                background: '#050505',
                blue: '#2E5CFE',
                purple: '#642EFE',
                red: '#DD2424',
                yellow: '#F2D671',
                yellowgreen: '#DDFF0E',
                'red-200': '#FF2B0E',
                'red-300': '#FF264D',
                stroke: '#686868',
                'dark-stroke': '#1B1B1B',
                'gray-stroke': '#898989',
                'gray-400': '#CDCDCD',
                'gray-500': '#C0C0C0',
                'orange-100': '#FFF1E3',
                'orange-150': '#F8E9E4',
                'orange-200': '#F6E7D3',
                'orange-300': '#E6D8CB',
                'dark-font': '#202020',
                'dark-font-200': '#282828',
                'dark-font-300': '#2F2F2F',
                'dark-font-400': '#1E1E1E',
                'black-font': '#161616',
                'gray-font': '#595959',
                'gray-font-50': '#A4A4A4',
                'gray-font-100': '#9A9A9A',
                'gray-font-200': '#5B5B5B',
            },
            backgroundImage: {
                'menu-bg': 'url(../assets/images/menu-bg.png)',
            },
            transitionTimingFunction: {
                'out-expo': 'cubic-bezier(.47,0,.745,.715)',
                'in-expo': 'cubic-bezier(.445,.05,.55,.95)',
            },
        },
    },
    plugins: [],
};
