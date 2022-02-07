import Header from './components/Header';
import Main from './components/Main';
import Contexts from './components/Contexts';

const App = () => {
  return (
    <div className='App'>
      <Contexts>
        <Header />
        <Main />
      </Contexts>
    </div>
  );
};

export default App;
