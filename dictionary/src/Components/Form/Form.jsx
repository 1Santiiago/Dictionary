import * as c from './style'

function Form({handleWord, word, handleClick}) {
  return (
    <c.Form>
        <div>
            <label htmlFor="word">Word Here </label>
            <input type="text" name="word" id="word" placeholder="Try it here" value={word} onChange={handleWord}/>
        </div>
        <div>
            <button onClick={handleClick}>Search</button>
        </div>
    </c.Form>
  )
}

export default Form