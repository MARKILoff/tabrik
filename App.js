import logo from './logo.mp4';
import './App.css';
import Header from './Header/Header';

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      {/* <video autoPlay muted loop style={{ height: "100%", width: "100%", objectFit: "cover" }} src={logo}></video> */}
    </div>
  );
}

export default App;
