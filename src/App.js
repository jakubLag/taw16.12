import { Gallery } from "./Gallery";
import { Product } from "./Product";

function App() {
  const data = [
    {
      id: 0,
      url: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
      category: "Nature"
    },
    {
      id: 1,
      url: "https://t3.ftcdn.net/jpg/02/78/42/76/360_F_278427683_zeS9ihPAO61QhHqdU1fOaPk2UClfgPcW.jpg",
      category: "Sport"
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Animals"
    }
  ]
  return (
    <div className="App">
      <Gallery data={data}/>
    </div>
  );
}

export default App;
