import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>메인페이지</h1>
      <Link to="/user/1">User1 페이지로 이동</Link>
      <br />
      <Link to="/user/2">User2 페이지로 이동</Link>
    </div>
    
  )
  
}

export default App;
