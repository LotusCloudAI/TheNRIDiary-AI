export const animations = {
  fadeIn: {
    animation: "fadeIn 0.3s ease"
  },
  slideUp: {
    animation: "slideUp 0.3s ease"
  },
  slideDown: {
    animation: "slideDown 0.3s ease"
  },
  scale: {
    transition: "transform 0.2s ease",
    ":hover": {
      transform: "scale(1.02)"
    }
  }
}

export const keyframes = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes slideDown {
    from { transform: translateY(-20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`