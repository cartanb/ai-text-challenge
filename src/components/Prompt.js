import { useState } from 'react';
import Results from './Results';

function Prompt() {
  const [promptVal, setPromptVal] = useState('');
  const [completions, setCompletions] = useState([]);

  const handleChange = (evt) => {
    setPromptVal(evt.target.value);
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (promptVal.length) {
      const promptBody = {
        prompt: promptVal,
        max_tokens: 64,
        temperature: 0.4
      }
      console.log(`trying API key ${process.env.REACT_APP_OPENAPI_KEY}`)
      const response = await fetch('https://api.openai.com/v1/engines/text-curie-001/completions', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.REACT_APP_OPENAPI_KEY}`
        },
        body: JSON.stringify(promptBody)
      });
      const responseBody = await response.json();
      console.log(responseBody);
      const newCompletion = [promptVal, responseBody.choices[0].text.trim()]
      setCompletions([newCompletion, ...completions])
    }
    setPromptVal('');
  }

  return (
    <form id="prompt">
      <fieldset id="input">
        <legend>Enter your prompt:</legend>
        <textarea required minLength="1" rows="10" cols="55" value={promptVal} onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </fieldset>
      <Results id="results" completions={completions} />
    </form>
  )
}

export default Prompt;
