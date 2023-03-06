import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = ({ exercise, deleteExercise }) => (
  <tr>
    <td>{exercise.username}</td>
    <td>{exercise.description}</td>
    <td>{exercise.duration}</td>
    <td>{new Date(exercise.date).toDateString()}</td>
    <td>
      <Link to={`/edit/${exercise._id}`}>edit</Link> |{' '}
      <a href="exercise-list.component.js" onClick={() => deleteExercise(exercise._id)}>
        delete
      </a>
    </td>
  </tr>
);

const ExercisesList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/exercises/')
      .then(response => {
        setExercises(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const deleteExercise = id => {
    axios.delete(`http://localhost:4000/exercises/${id}`).then(res => {
      console.log(res.data);
      setExercises(prevExercises => prevExercises.filter(ex => ex._id !== id));
    });
  };

  const exerciseList = () =>
    exercises.map(exercise => (
      <Exercise
        exercise={exercise}
        deleteExercise={deleteExercise}
        key={exercise._id}
      />
    ));

  return (
    <div>
      <h3>Logged Exercises</h3>
      <table>
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{exerciseList()}</tbody>
      </table>
    </div>
  );
};

export default ExercisesList;
