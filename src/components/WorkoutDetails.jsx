import React from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import axios from 'axios'

const WorkoutDetails = ({ workout, show, setShow }) => {
  
  const click = async () => {
  const user = JSON.parse(localStorage.getItem('user'))
    if (!user) return
    try {
      // let response = await axios.delete("http://localhost:4000/api/workout/",workout._id,{ headers: {
      //           'Authorization': `Bearer ${user.token}`
      //         }})
      await axios.delete(`https://workout-full-backend-xmkl.vercel.app/api/workout/${workout._id}`,{ headers: {
        'Authorization': `Bearer ${user.token}`
      }})

      setShow(!show)
    } catch (error) {
      console.log(error)
    }

  }
  return (

    <div>
      <div key={workout._id} className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load in kg: </strong>{workout.load}</p>
        <p><strong>reps: </strong>{workout.reps}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
        <span className="material-symbols-outlined" onClick={click}>delete</span>
      </div>
    </div>
  )
}

export default WorkoutDetails
