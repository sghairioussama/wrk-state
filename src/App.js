import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Component/Profile';

function App() {
  // alert on button using handleName
  function handleName() {
    alert("For more information check linkedin or facebook account on Sghairi Oussama")
  }
  
  return (
        /* calling prop-children and giving them properties */
    <div className="App">
      <Profile name="sghairi oussama" age="34" bio="Open to learn new things" profession="Fullstack js Developer" data={handleName} >
      <img src="https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="Gojo" />
      </Profile>
    </div>
  );
}

export default App;