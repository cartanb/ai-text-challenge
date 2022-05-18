function Results(props) {
  return (
    <output htmlFor="prompt">
      <h3>Responses:</h3>
      <ul>
        {props.completions.length ? (
          props.completions.map((completion, idx) => (
            <li key={idx} className="Completion">
              <section className="Comp-pair">
                <span>Prompt:</span>
                <p id={`prompt${idx}`}>{completion[0]}</p>
              </section>
              <section className="Comp-pair">
                <span>Response:</span>
                <p id={`comp${idx}`}>{completion[1]}</p>
              </section>
            </li>
          ))
        ) : (
          <li className="Completion">Nothing submitted yet! Why not send a prompt?</li>
        )}
      </ul>
    </output>
  );
}

export default Results;
