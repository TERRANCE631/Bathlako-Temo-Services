module.exports = {
    content:  ["./src/**/*.{js,jsx,ts,tsx}", // Adjust paths to match your project structure
    "./public/index.html"],
    darkMode: 'class',
    theme: {
      extend: {
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideInUp: {
            '0%': {
              opacity: '0',
              transform: 'translateY(20px)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)',
            },
          },
        },
        animation: {
          fadeIn: 'fadeIn 1.5s ease-out forwards',
          slideInUp: 'slideInUp 1s ease-out forwards',
        },
      },
    },
    plugins: [],
}