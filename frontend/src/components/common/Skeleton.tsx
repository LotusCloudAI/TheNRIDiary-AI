interface SkeletonProps {
  width?: string
  height?: string
  borderRadius?: string
  count?: number
}

export default function Skeleton({
  width = "100%",
  height = "20px",
  borderRadius = "4px",
  count = 1
}: SkeletonProps) {
  const skeletons = Array(count).fill(0)

  return (
    <>
      {skeletons.map((_, index) => (
        <div
          key={index}
          style={{
            width,
            height,
            borderRadius,
            backgroundColor: "#e0e0e0",
            animation: "pulse 1.5s ease-in-out infinite",
            marginBottom: count > 1 ? "8px" : 0
          }}
        />
      ))}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </>
  )
}
