const plugin = require('tailwindcss/plugin')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        extend: {
            zIndex: {
                60: '60',
                70: '70',
                80: '80',
                90: '90',
                100: '100',
            },

            animation: {
                'spotify-playing': 'change-height 650ms linear infinite',
            },

            keyframes: {
                'change-height': {
                    '0%, 100%': { transform: 'scaleY(0.1)' },
                    '50%': { transform: 'scaleY(1)' },
                },
            },
        },

        screens: {
            sm: '580px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1366px',
        },

        container: {
            center: true,
            padding: '2rem',
        },

        fontFamily: {
            heading: ['var(--font-heading)', 'sans-serif'],
            body: ['var(--font-body)', 'sans-serif'],
        },

        fontSize: {
            xs: ['0.75rem', '170%'],
            sm: ['0.88rem', '170%'],
            base: ['1rem', '170%'],
            subheading: ['1.13rem', '170%'],
        },

        spacing: {
            unset: 'unset',
            0: 0,
            1: '0.063rem',
            2: '0.125rem',
            3: '0.188rem',
            4: '0.25rem',
            5: '0.313rem',
            6: '0.375rem',
            7: '0.438rem',
            8: '0.5rem',
            9: '0.563rem',
            10: '0.625rem',
            16: '1rem',
            24: '1.5rem',
            32: '2rem',
            40: '2.5rem',
            48: '3rem',
            56: '3.5rem',
            64: '4rem',
            72: '4.5rem',
            80: '5rem',
            88: '5.5rem',
            96: '6rem',
            104: '6.5rem',
            112: '7rem',
            120: '7.5rem',
            128: '8rem',
            136: '9.5rem',
            144: '10rem',
            152: '10.5rem',
            160: '11rem',
            168: '11.5rem',
            176: '12rem',
            184: '12.5rem',
            192: '13rem',
            200: '13.5rem',
            208: '14rem',
            216: '14.5rem',
            224: '15rem',
            232: '15.5rem',
            240: '16rem',
            full: '100%',
        },

        borderRadius: {
            0: 0,
            4: '4px',
            8: '8px',
            16: '16px',
            24: '24px',
            32: '32px',
            40: '40px',
            48: '48px',
            56: '56px',
            64: '64px',
            full: '999px',
        },

        colors: {
            transparent: 'transparent',
            primary: '#0FD783',
            white: '#F8F7F9',

            black: {
                10: '#fafafb',
                20: '#f5f6f6',
                30: '#ececed',
                40: '#e0e0e2',
                50: '#c3c4c8',
                60: '#b4b6ba',
                70: '#a8aaaf',
                80: '#999ca2',
                90: '#8b8e94',
                100: '#7c8087',
                200: '#6e717a',
                300: '#5f636c',
                400: '#535761',
                500: '#454954',
                600: '#393d49',
                700: '#282d39',
                800: '#191f2c',
                900: '#0d1321',
            },
        },
    },

    corePlugins: {
        aspectRatio: false,
    },

    plugins: [
        require('@tailwindcss/aspect-ratio'),

        plugin(function ({ addComponents, theme }) {
            addComponents({
                '.h1': {
                    fontSize: '3.81rem',
                    fontFamily: theme('fontFamily.heading'),
                    fontWeight: theme('fontWeight.normal'),
                    lineHeight: '120%',
                    '@media (max-width: 1024px)': {
                        fontSize: '3rem',
                    },
                },

                '.h2': {
                    fontSize: '3rem',
                    fontFamily: theme('fontFamily.heading'),
                    fontWeight: theme('fontWeight.normal'),
                    lineHeight: '120%',
                    '@media (max-width: 1024px)': {
                        fontSize: '2.5rem',
                    },
                },

                '.h3': {
                    fontSize: '2.44rem',
                    fontFamily: theme('fontFamily.heading'),
                    fontWeight: theme('fontWeight.normal'),
                    lineHeight: '120%',
                    '@media (max-width: 1024px)': {
                        fontSize: '2.1rem',
                    },
                },

                '.h4': {
                    fontSize: '1.94rem',
                    fontFamily: theme('fontFamily.heading'),
                    fontWeight: theme('fontWeight.normal'),
                    lineHeight: '120%',
                    '@media (max-width: 1024px)': {
                        fontSize: '1.75rem',
                    },
                },

                '.h5': {
                    fontSize: '1.56rem',
                    fontFamily: theme('fontFamily.heading'),
                    fontWeight: theme('fontWeight.normal'),
                    lineHeight: '120%',
                    '@media (max-width: 1024px)': {
                        fontSize: '1.44rem',
                    },
                },

                '.h6': {
                    fontSize: '1.25rem',
                    fontFamily: theme('fontFamily.heading'),
                    fontWeight: theme('fontWeight.normal'),
                    lineHeight: '120%',
                    '@media (max-width: 1024px)': {
                        fontSize: '1.19rem',
                    },
                },

                '.display': {
                    fontSize: '5.63rem',
                    fontFamily: theme('fontFamily.heading'),
                    lineHeight: '120%',
                    '@media (max-width: 1024px)': {
                        fontSize: '4.2rem',
                    },
                },
            })
        }),
    ],
}
