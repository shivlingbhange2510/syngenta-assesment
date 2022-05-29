
import './App.css';
import { Circle } from "./Componets/Circle"
import { ShootButton } from "./Componets/ShootButton"
// import { Circle } from "./Componets/Circle"

function App() {
  const[newCircle, setNewCircle] = useState([]);
  return (
    <div className="main">
      <div>
      <Circle/>
      </div>
     <div>
       <ShootButton/>
     </div>
    </div>
  );
}

export default App;
