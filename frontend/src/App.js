import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';



function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <br />
          <Route exact path='https://capable-pasca-47f9c1.netlify.app/' component={ExercisesList} />
          <Route path='https://capable-pasca-47f9c1.netlify.app/edit/:id' component={EditExercise} />
          <Route path='https://capable-pasca-47f9c1.netlify.app/create' component={CreateExercise} />
          <Route path='https://capable-pasca-47f9c1.netlify.app/user' component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;