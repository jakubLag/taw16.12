import { Filter } from "./Filter";
import { useEffect, useState } from "react";
export const Gallery = (props) => {
    const [currentCategory, setCurrentCategory] = useState("");
    const data = props.data;

    return <div>
        <Filter currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
        <div className="image-container">
            {currentCategory.length > 0 ? data.filter(item => item.category === currentCategory).map((item) => (
                <div>
                    <img className="image" src={item.url} alt="XD" />
                </div>
            )) : data.map((item) => (
                <div>
                    <img className="image" src={item.url} alt="XD" />
                </div>
            ))}

        </div>
    </div>
}