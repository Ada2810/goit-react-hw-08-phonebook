export const theme = {
  colors: {
    primary: '#A5D6A7', // Verde pastel
    secondary: '#90CAF9', // Albastru pastel
    background: '#F5F5F5', // Gri foarte deschis pentru fundal
    cardBackground: '#FFFFFF', // Alb pentru carduri
    text: '#4A4A4A', // Gri închis pentru lizibilitate
    buttonText: '#FFFFFF', // Alb pentru butoane
    error: '#E57373', // Roșu pastel pentru erori
    inputBorder: '#B0BEC5', // Gri deschis pentru bordura input-urilor
    inputFocus: '#64B5F6', // Albastru pastel pentru focus
  },
  boxShadow: {
    default: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)", 
  },
  fonts: {
    main: "'Poppins', sans-serif",
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px' // Adăugat pentru a preveni eroarea din Layout.styled.js
  }
};
