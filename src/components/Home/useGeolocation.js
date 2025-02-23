import { useEffect, useState } from "react";

const useGeolocation = () => {

    const[position, setPosition] = useState(null)

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error)
        }
        else {
            console.error('Geolocation is not supported by this browser.');
        }
        function success(position) {
            setPosition(position)
        }
        function error() {
            console.error('Unable to retrieve your location');
        }
    }, [])

    return position
   
}
export default useGeolocation