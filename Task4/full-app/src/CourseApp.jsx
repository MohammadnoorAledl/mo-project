const Header = ({ name }) => <h2>{name}</h2>

const Part = ({ part }) => (
  <p>{part.name}: {part.exercises} تمرين</p>
)

const Content = ({ parts }) => (
  <div>
    {parts.map(part => <Part key={part.id} part={part} />)}
  </div>
)

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return <p><strong>مجموع التمارين: {total}</strong></p>
}

const Course = ({ course }) => (
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
)

export default function CourseApp() {
  const courses = [
    {
      name: 'تطوير تطبيقات Half Stack',
      id: 1,
      parts: [
        { id: 1, name: "أساسيات React", exercises: 10 },
        { id: 2, name: "استخدام props لتمرير البيانات", exercises: 7 },
        { id: 3, name: "حالة المكوّن", exercises: 14 },
        { id: 4, name: "تنقيح تطبيقات React", exercises: 11 }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        { id: 1, name: "التوجيه (Routing)", exercises: 3 },
        { id: 2, name: "الوسائط (Middlewares)", exercises: 7 }
      ]
    }
  ]

  return (
    <div>
      <h1>منهاج الويب</h1>
      {courses.map(course => <Course key={course.id} course={course} />)}
    </div>
  )
}