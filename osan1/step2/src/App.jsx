const App = () => {
  const course = 'Half Stack application development'
  const content = [
    { part: 'Fundamentals of React', exercises: 10},
    { part: 'Using props to pass data', exercises: 7},
    { part: 'State of a component', exercises: 14},
  ]

  const Header = (props) => {
    console.log(props.course)
    return (
      <h1>{props.course}</h1>
    )
  }

  const Content = (props) => {
    console.log(props.content)
    return (
      <div>
        <Part part={content[0].part} exercises={content[0].exercises} />
        <Part part={content[1].part} exercises={content[1].exercises} />
        <Part part={content[2].part} exercises={content[2].exercises} />
      </div>
    )
  }

  const Part = (props) => {
    return(
      <p>{props.part} {props.exercises}</p>
    )
  }

  const Total = () => {
    return(
      <p>Number of exercises {content[0].exercises + content[1].exercises + content[2].exercises}</p>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total />
    </div>
  )
}

export default App