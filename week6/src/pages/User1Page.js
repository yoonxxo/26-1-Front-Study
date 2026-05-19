import EmptyData from "../components/EmptyData";
import useFetchUser from "../hooks/useFetchUser";
import Photo from "../components/Photo";

function User1Page() {
    const photos = useFetchUser(1); //커스텀훅을 이용하여 리팩토링
    
    if (photos.length === 0) {
      return (
        <EmptyData />
      );
    }
    return (
        <div>
            <h1>User1 페이지입니다.</h1>
            {photos.map((photo) => (
            <Photo key={photo.id} title={photo.title} image={photo.url}/>
            ))}
        </div>
    );
    
}

export default User1Page
