import { useState, useEffect } from 'react';
import Photo from './Photo';
import EmptyPhoto from './EmptyPhoto';

function App() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then((response) => response.json())
      .then((json) => setPhotos(json));
  }, []);

  if (photos.length === 0) {
    return (
      <EmptyPhoto />
    );
  }

  return (
    <div>
      {photos.map((photo) => (
        <Photo key={photo.id} title={photo.title} image={photo.url} />
      ))}
    </div>
 );
}

export default App;
