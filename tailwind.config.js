module.exports = {
    content: [
        './assets/**/*.scss',
        './components/**/*.{vue,js,ts}',
        './pages/**/*.vue',
        './views/**/*.vue',
        './layouts/**/*.vue',
        './plugins/**/*.{js,ts}',
    ],
    theme: {
        extend: {},
    },
    plugins: ['@tailwindcss/forms'],
}
