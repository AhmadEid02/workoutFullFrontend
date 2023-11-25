import React, { useEffect, useState } from 'react'
import axios from 'axios'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
    const [workouts, setWorkouts] = useState([])
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'))
    const fetchData = async () => {
        try {
            //setLoading(true)
            let response = await axios.get("https://workout-full-backend-xmkl.vercel.app/api/workout", {
                headers: {
                    'authorization': `Bearer ${user.token}`
                }
            })
            console.log(response.data)
            setWorkouts(response.data)
            //setLoading(false)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    useEffect(() => {
        setLoading(true);
        fetchData()
            .then(() => setLoading(false))
            .catch(() => setLoading(false));
    }, [show])
    return (
        <div className='home'>
            <div className="workouts">
            {
                loading ? (
                    <div className="loader-container">
                        <div className="spinner"></div>
                    </div>
                ) : (

                    //<div className="workouts">
                    <>
                        {workouts.map(e => (workouts &&
                            <WorkoutDetails workout={e} key={e._id} show={show} setShow={setShow} />
                        ))}
                    </>

                )
            }
            </div>

            <WorkoutForm show={show} setShow={setShow} />
        </div>
    )
}

export default Home
