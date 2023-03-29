
import { useState } from 'react';
import { studentData } from './data/studentdata';
import Student from './components/Student'

import './App.css';

function App() { 
  const [studentsData, setStudentData] = useState(studentData);
  return (
    <div className="App">
  {studentsData.map((student) => {
    console.log(student);
    return(
      <Student
      student={student}
      // name={student.name}
      // bio={student.bio}
      // date={student.scores.date}
      // score={student.scores.score}
      />
      )
    })}
  
     
  
      {/* <student  /> */}
    </div>
  )};
  


export default App;
