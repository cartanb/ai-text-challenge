function Results(props) {
  return (
    <output htmlFor="prompt">
      <h3>Responses:</h3>
      <ul>
        {props.completions.length ? (
          <h3>RESPONSES PLACEHOLDER</h3>
        ) : (
          <li>Nothing submitted yet! Why not send a prompt?</li>
        )}
      </ul>
    </output>
  );
}

export default Results;
