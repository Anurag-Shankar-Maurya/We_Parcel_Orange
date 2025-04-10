/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#ff914a',  // Logo orange
                    dark: '#e07b39',     // Darker shade of orange
                },
                secondary: {
                    DEFAULT: '#00b4d8',  // Bright cyan for contrast
                },
                accent: {
                    DEFAULT: '#ff5722',  // Deep orange for warmth
                },
                dark: {
                    DEFAULT: '#000000',  // Logo black
                },
                light: {
                    DEFAULT: '#ffffff',  // White for contrast
                },
                success: {
                    DEFAULT: '#4caf50',  // Green for positive feedback
                },
                warning: {
                    DEFAULT: '#ffca28',  // Yellow for attention
                },
                danger: {
                    DEFAULT: '#d32f2f',  // Red for errors
                },
                gray: {
                    DEFAULT: '#757575',  // Neutral gray for balance
                },
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
                futuristic: ['Orbitron', 'sans-serif'],
            },
            boxShadow: {
                'glow': '0 0 15px rgba(255, 145, 74, 0.5)',  // Orange glow based on primary color
                'sm': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'md': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                'lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            },
            backgroundImage: {
                'gradient-1': 'linear-gradient(135deg, #ff914a, #00b4d8)',  // Orange to cyan
                'gradient-2': 'linear-gradient(135deg, #ff5722, #ff914a)',  // Deep orange to orange
                'gradient-3': 'linear-gradient(135deg, #00b4d8, #4caf50)',  // Cyan to green
            },
        },
    },
}