import { useEffect, useState } from "react";


const useCityName = (lat, lon) => {
    const [city, setCity] = useState(null);

        useEffect(() => {
            async function getCityName() {
                try {
                    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
                    const data = await response.json();
                    setCity(data.address.city || data.address.town);
                } catch (err) {
                    console.error('Error fetching city name:', err);
                }
            }
    
            if(lat && lon) {
                getCityName();
            }
        }, [lat, lon])
        
    
        return city
}
export default useCityName