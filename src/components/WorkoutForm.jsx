import axios from 'axios'
import React, { useState } from 'react'

const WorkoutForm = ({ show, setShow }) => {
  const[title,setTitle]=useState('')
  const[load,setLoad]=useState('')
  const[reps,setReps]=useState('')
  const[error,setError]=useState('')
  const user = JSON.parse(localStorage.getItem('user'))
  const handleSubmit = async(e) => {
    e.preventDefault()//to trun off Default sittings of form to reload page ever time button is click(submit)
    try {
      //const workout={title,load,reps}
      await axios.post("http://localhost:4000/api/workout/",{title,load,reps},{ headers: {
        'Authorization': `Bearer ${user.token}`
      }})
      setLoad("")
      setTitle("")
      setReps("")
      setError("")
      setShow(!show)
    } catch (error) {
      setError("please fill out all fields")
    }

  }
  return (

    <div>
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add new workout</h3>
      <label >Exercise Title:</label>
      <input type="text" value={title}onChange={e=>setTitle(e.target.value)}/>
      <label >Load (in kg):</label>
      <input type="number" value={load}onChange={e=>setLoad(e.target.value)}/>
      <label >Reps:</label>
      <input type="number" value={reps}onChange={e=>setReps(e.target.value)}/>
      <button>add new</button>
      {error&& <div className='error'>{error}</div>}
      </form>
    </div>
  )
}

export default WorkoutForm