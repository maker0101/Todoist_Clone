import Main from './components/Main';
import Contexts from './components/Contexts';

const App = () => {
  return (
    <div className='App'>
      <Contexts>
        <Main />
      </Contexts>
    </div>
  );
};

export default App;
