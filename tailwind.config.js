/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    extend: {
      colors:{
        'body':'#E8E8FD',
        'customOrange':'#EE4D38',
        'primary':'#1A194D',
        'thead' :'#62618F'
      },
      screens:{
        'sm': '640px',  
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}
