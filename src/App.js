import './App.css';
import SideBar from './components/SideBar/SideBar'
import ContentWrapper from './containers/ContentWrapper';


function App() {
  return (
    <div id="wrapper">
      <SideBar />
      <ContentWrapper />
    </div>
  );
}

export default App;
