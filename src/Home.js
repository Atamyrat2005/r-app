import { useState } from "react";

const Home = () => {
    // let name = 'Atamyrat';
    const [name, setName] = useState('Atamyrat');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('Shukurov');
        setAge(30);
    }

    return (
        <div className="home">
            <h1>Home page</h1>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;