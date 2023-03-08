/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    theme: {
        fontFamily: {
            poppins: ['Inter', 'sans-serif'],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '20px',
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1220px',
        },
        extend: {
            colors: {
                background: '#ECF2F5',
                darkFont: '#1E3144',
                lightFont: '#375B6A',
                menuText: '#5A7886',
                brandTurquoise: '#1DC8BE',
                'turquoise-light': '#68DAD4',
                'green-light': '#D6EEF0',
                'green-50': '#B5E8E8',
                'green-500': '#24B3B0',
                'blue-700': '#008FC1',
                stroke: '#C7D3D9',
                disabled: '#A1B3BD',
                redFont: '#F4333D',
                overlay: 'rgba(0, 0, 0, 0.5)',
            },
            backgroundImage: {
                yellowGradient: 'linear-gradient(96.43deg, #FFDA70 0%, #FFC729 100%)',
            },
            boxShadow: {
                'dropdown-shadow': '0px 5px 10px rgba(30, 49, 68, 0.1)',
                'header-btn-shadow': ' 0px 5px 10px rgba(30, 49, 68, 0.12)',
                'install-card-shadow': '0px 5px 30px rgba(30, 49, 68, 0.12)',
                'label-shadow': '0px 2px 10px rgba(30, 49, 68, 0.2)',
            },
        },
    },
    plugins: [],
};
