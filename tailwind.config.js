module.exports = {
  content: [
    './views/**/*.ejs',    // Includes all EJS files in the 'views' directory and its subdirectories
    './public/**/*.js',    // Includes any JavaScript files in the 'public' directory (if applicable)
    './src/**/*.js',       // Include any JavaScript files in 'src' directory if you are using React or similar
  ],
  theme: {
    extend: {
      fontFamily: {
        probert: ['Probert', 'sans-serif'],
      },
    },
  },
  
  plugins: [require('daisyui'),],
  color : {
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'dark-blue': '#000033'
        ,
          primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
       
      },
    },
  },
};
