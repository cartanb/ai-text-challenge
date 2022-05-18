function Results(props) {
  return (
    <output htmlFor="prompt">
      <h3>Responses:</h3>
      <ul>
        {props.completions.length ? (
          props.completions.map((completion, idx) => (
            <li key={idx}>
              <span>Prompt:</span>
              <p id={`prompt${idx}`}>{completion[0]}</p>
              <span>Response:</span>
              <p id={`comp${idx}`}>{completion[1]}</p>
            </li>
          ))
        ) : (
          <li>Nothing submitted yet! Why not send a prompt?</li>
        )}
      </ul>
    </output>
  );
}

export default Results;
