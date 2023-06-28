import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('Atamyrat');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
        }).then(() => {
            console.log('New blog added')
            setIsPending(false);

            //  for go back one page after creating blog
            // history.go(-1);
            history.push('/')
        })
    }

    return (
        <div className="create center">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <label>Blog author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Atamyrat">Atamyrat</option>
                    <option value="Meret">Meret</option>
                    <option value="Myrat">Myrat</option>
                </select>
                <label>Blog body:</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
    );
}

export default Create;