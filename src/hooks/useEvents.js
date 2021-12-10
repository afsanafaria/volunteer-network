import { useEffect } from 'react';
import { useState } from 'react';

const useEvents = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('https://frozen-chamber-91634.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return {
        events
    }
};

export default useEvents;