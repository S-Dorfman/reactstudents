import Score from './Score';

function Student({student}) {
    return(
        <div>
            <h3>{student.name}</h3>
            <h3>{student.bio}</h3>
            {/* <h3>{student.scores}</h3> */}
            {/* <h3>{student.}</h3> */}
            {student.scores.map((score) => (
                <Score score={score}/>
            ))}
        </div>
    )
}

export default Student;