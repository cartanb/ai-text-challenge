function Results() {
  return (
    <output htmlFor="prompt.">
      <h3>Responses:</h3>
      <ul>
        {/* If results array is empty, render: */}
        <li>Nothing submitted yet! Why not send a prompt?</li>
      </ul>
    </output>
  )
}

export default Results;
