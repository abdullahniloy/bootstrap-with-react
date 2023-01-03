
import { Button, Spinner } from 'react-bootstrap';
import './App.css';
import CardGroup2 from './Component/CardGroup2/CardGroup2';


function App() {
  return (
    <div className='App'>
      <Button variant='danger'>My Button</Button>
      <br />
      <Spinner animation="border" role="status">
        <span className="visually-hidden">HI</span>
      </Spinner>
      <CardGroup2></CardGroup2>

    </div>
  );
}

export default App;
