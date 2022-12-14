import { useState } from 'react'

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    { votes: 0, anecdote: 'If it hurts, do it more often.' },
    { votes: 0, anecdote: 'Adding manpower to a late software project makes it later!' },
    { votes: 0, anecdote: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.' },
    { votes: 0, anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.' },
    { votes: 0, anecdote: 'Premature optimization is the root of all evil.' },
    { votes: 0, anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.' },
    { votes: 0, anecdote: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.' }
  ])
   
  const [selected, setSelected] = useState(0)

  const nextAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  const castVote = () => {
    const newAnecdotes = [ ...anecdotes ]
    newAnecdotes[selected].votes++
    setAnecdotes(newAnecdotes)
  }

  const mostVoted = () =>
    anecdotes.reduce((prevIndex, curAnecdote, curIndex) =>
      curAnecdote.votes > anecdotes[prevIndex].votes ? curIndex : prevIndex
    , 0)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected].anecdote}</p>
      <p>has {anecdotes[selected].votes} votes</p>
      <Button text='vote' onClick={castVote} />
      <Button text='next anecdote' onClick={nextAnecdote} />

      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[mostVoted()].anecdote}</p>
      <p>has {anecdotes[mostVoted()].votes} votes</p>
    </div>
  )
}

export default App