tailwind.config = {
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        'sm': '320px', 
        'max-sm': { 'max': '768px' },
        'max-md': { 'max': '440px' }
      }
    },
  },
  plugins: [],
}