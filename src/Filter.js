import { useState } from "react"
export const Filter = ({currentCategory, setCurrentCategory}) => {
    return <div>
        <form>
            <label htmlFor="nature">Nature</label>
            <input type="checkbox" id="nature" value="Nature" onChange={() => setCurrentCategory("Nature")}/>
            <label htmlFor="sport">Sport</label>
            <input type="checkbox" id="sport" value="Sport" onChange={() => setCurrentCategory("Sport")}/>
            <label htmlFor="animals">Animals</label>
            <input type="checkbox" id="animals" value="Animals" onChange={() => setCurrentCategory("Animals")}/>
            <button onClick={() => setCurrentCategory("")}>Reset</button>
        </form>
    </div>
}