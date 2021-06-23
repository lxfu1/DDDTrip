import { Link } from "react-router-dom";
import "./index.less";

function App() {
  return (
    <div className="container">
      <Link to="/multi-point">多点</Link>
      <Link to="/triangle">三角形</Link>
    </div>
  );
}

export default App;
