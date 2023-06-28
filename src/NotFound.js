import { Link } from 'react-router-dom'

const Notfound = () => {
    return (
        <div className="not-found center">
            <h2>Sorry</h2>
            <p>Page cannot be found</p>
            <Link className="link" to="/">Back to home</Link>
        </div>
    );
}

export default Notfound;