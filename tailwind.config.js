module.exports = {
    purge: ['./public/index.html', './src/**/*.{vue, js}'],
    darkMode: false,
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
}