
function Score({score}) {
    console.log(score);
    return(
        <div>
            <h3>
               {score.date} 
            </h3>
            <h3>
            {score.score}
            </h3>
        </div>
    )
}

export default Score;