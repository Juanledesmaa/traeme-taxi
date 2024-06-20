import '../styles/App.scss';

import Banner from './Banner/Banner';
import NavigationBar from './NavigationBar/NavigationBar';

const App = () => {
  return (
    <div className="App">
      <div className="text-center">
        <NavigationBar />
        <h1 className="text-center mt-5">Hello Rigo!</h1>
        <Banner />
      </div>
    </div>
  );
};

export default App;
