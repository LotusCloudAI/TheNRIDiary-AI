interface HamburgerButtonProps {
  isOpen: boolean
  onClick: () => void
}

export default function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "30px",
        height: "30px",
        position: "relative",
        background: "none",
        border: "none",
        cursor: "pointer",
        zIndex: 1100
      }}
    >
      <span style={{
        position: "absolute",
        width: "100%",
        height: "2px",
        backgroundColor: "#1f2937",
        top: "50%",
        left: 0,
        transform: isOpen 
          ? "rotate(45deg)" 
          : "translateY(-8px)",
        transition: "transform 0.3s ease"
      }} />
      <span style={{
        position: "absolute",
        width: "100%",
        height: "2px",
        backgroundColor: "#1f2937",
        top: "50%",
        left: 0,
        transform: isOpen 
          ? "rotate(-45deg)" 
          : "translateY(8px)",
        transition: "transform 0.3s ease"
      }} />
    </button>
  )
}
