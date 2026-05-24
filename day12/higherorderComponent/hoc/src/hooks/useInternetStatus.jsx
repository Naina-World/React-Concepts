import { useState, useEffect } from 'react'


const useInernetStatus = () => {
    const [status, setStaus] = useState(true);

    const internetOn = () => {
        setStaus(true);
    }

    const internetOff = () => {
        setStaus(false);
    }

    useEffect(() => {
        window.addEventListener('online', internetOn);
        window.addEventListener('offline', internetOff)
    },[])
    return status;

};

export default useInernetStatus;

