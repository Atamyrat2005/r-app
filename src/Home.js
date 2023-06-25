const Home = () => {

    const handleClick = () => {
        console.log('hello, user')
    }
    const handleClickAgain = (name) => {
        console.log('hello ' + name)
    }

    return (
        <div className="home">
            <h1>Home page</h1>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClickAgain('Atamyrat')}>Click me again</button>
        </div>
    );
}
 
export default Home;