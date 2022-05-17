import Results from './Results';

function Prompt() {


  return (
    <form id="prompt">
      <label htmlFor="input">Enter your prompt:</label>
      <textarea id="input" required minLength="1" rows="10" cols="55" />
      <button type="button">Submit</button>
      <Results />
    </form>
  )
}

export default Prompt;
