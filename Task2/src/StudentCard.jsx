// import { useState } from "react"

// const StudentCard = ({ name, major, gpa }) => {
//   const [show, setShow] = useState(true)
//   const [liked, setLiked] = useState(false)

//   const isExcellent = gpa >= 3.5

//   const cardStyle = {
//     padding: "20px",
//     borderRadius: "15px",
//     margin: "15px",
//     color: "white",
//     background: isExcellent
//       ? "linear-gradient(135deg, #43e97b, #38f9d7)"   // أخضر/فيروزي
//       : "linear-gradient(135deg, #4facfe, #00f2fe)",  // أزرق جميل
//     boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
//     transition: "0.3s ease"
//   }

//   const buttonStyle = {
//     margin: "6px",
//     padding: "10px 14px",
//     border: "none",
//     borderRadius: "10px",
//     cursor: "pointer",
//     fontWeight: "bold"
//   }

//   return (
//     <div style={cardStyle}>

//       <h2 style={{ marginBottom: "10px" }}>{name}</h2>

//       {show && (
//         <>
//           <p>🎓 التخصص: {major}</p>
//           <p>📊 المعدل: {gpa}</p>
//           <p style={{ fontWeight: "bold" }}>
//             {isExcellent ? "🏆 متفوق" : "📘 جيد"}
//           </p>
//         </>
//       )}

//       <div>
//         <button
//           style={{ ...buttonStyle, backgroundColor: "#333", color: "white" }}
//           onClick={() => setShow(!show)}
//         >
//           {show ? "إخفاء" : "إظهار"}
//         </button>

//         <button
//           style={{
//             ...buttonStyle,
//             backgroundColor: liked ? "#ff4d6d" : "white",
//             color: liked ? "white" : "#333"
//           }}
//           onClick={() => setLiked(!liked)}
//         >
//           {liked ? "💖 Liked" : "🤍 Like"}
//         </button>
//       </div>

//     </div>
//   )
// }

// export default StudentCard
const StudentCard = ({ name, major, gpa }) => {
  const isExcellent = gpa >= 3.5

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "15px",
        margin: "15px",
        color: "white",
        background: isExcellent ? "#2ecc71" : "#3498db",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
      }}
    >

      <h2>{name}</h2>

      <p>التخصص: {major}</p>
      <p>المعدل: {gpa}</p>

      <p style={{ fontWeight: "bold" }}>
        {isExcellent ? "🏆 متفوق" : "📘 جيد"}
      </p>

    </div>
  )
}

export default StudentCard