const Total = ({ exercises1, exercises2, exercises3 }) => {
  return (
    <p style={{ fontWeight: "bold", color: "#28a745" }}>
      مجموع التمارين: {exercises1 + exercises2 + exercises3}
    </p>
  )
}

export default Total