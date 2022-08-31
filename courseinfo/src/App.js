const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => {
  // Some sort of for loop might be better
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Part = (props) => <p>{props.part.name} {props.part.exercises}</p>

const Total = (props) => <p>Number of exercises {props.count}</p>

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 }
  ]
  const totalExercises = parts.reduce((total, part) => total += part.exercises, 0)

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total count={totalExercises} />
    </div>
  )
}

export default App
