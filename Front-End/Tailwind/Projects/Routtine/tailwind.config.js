module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        colors: {
            'sub': '#c0bce5',
            'blue': '#0a0949',
        },
        extend: {
            keyframes: {
                wiggle: {
                    '0%': {
                        transform: 'scale(1)',
                        'transform-origin': 'center center',
                        'animation-timing-function': 'ease-out'
                    },
                    '10%': {
                        transform: 'scale(.91)',
                        'animation-timing-function': 'ease-in'
                    },
                    '17%': {
                        transform: 'scale(.98)',
                        'animation-timing-function': 'ease-out'
                    },
                    '33%': {
                        transform: 'scale(.87)',
                        'animation-timing-function': ' ease-in'
                    },
                    '45%': {
                        transform: 'scale(1)',
                        'animation-timing-function': 'ease-out'
                    }

                },
                animation: { wiggle: 'wiggle 1s ease-in-out infinite', }
            }
        }
    },
    plugins: [
        require('daisyui'),
    ],
}