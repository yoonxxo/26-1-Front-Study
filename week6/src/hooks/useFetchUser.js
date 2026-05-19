import { useEffect, useState } from "react";

export default function useFetchUser(userId) {
    const [photos, setPhotos] = useState([]);
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then((response) => response.json())
            .then((json) => setPhotos(json));
        }, []);
    
    return photos;
}   



  