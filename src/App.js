import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
import Todo from './Todo';
import { db } from './firebase';
import firebase from 'firebase'

function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('');

  // console.log(input);

  // when app load 
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo:doc.data().todo})))
    })
  }, [])

  const addTodo = (event) => {
    // this will add todo 
    event.preventDefault()

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input])
    setInput('') // clear input
  }

  return (
    <div className="App">
      <h1>Your Todo</h1>
      <form>
        {/* <input value={input} onChange={event => setInput(event.target.value)} /> */}
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add todo
        </Button>
        {/* <button type="submit" onClick={addTodo}>Add todo</button> */}
      </form>
      <div  className="App">
      <ul className="toto__center">
        {todos.map((todo) => (
          <Todo key={todo} todo={todo} />
        ))}
      </ul>
      </div>

    </div>
  );
}

export default App;
