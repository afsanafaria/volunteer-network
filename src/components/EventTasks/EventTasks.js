import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './EventTasks.css'

const EventTasks = () => {
    const { userId } = useParams();

    const [volunteers, setVolunteers] = useState([])
    useEffect(() => {
        fetch('https://frozen-chamber-91634.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, [])

    const matched = volunteers.filter(v => v.email === userId);
    // const name=matched.map(n=><p>{n.name}</p>)

    return (
        <div className="event-tasks mt-5 pt-5">
            <h2>Event Tasks {userId}</h2>
            {
                matched.map(n => <p>{n.name}</p>)
            }
        </div>
    );
};

export default EventTasks;