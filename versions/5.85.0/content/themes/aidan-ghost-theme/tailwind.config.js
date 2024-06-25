module.exports = {
    purge: ['./src/**/*.html', './src/**/*.js', './*.hbs'], // Specify the input files here
    darkMode: media, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#FF6347',
                secondary: '#4682B4',
                accent: '#FFD700',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
