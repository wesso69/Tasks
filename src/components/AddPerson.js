import { useState } from "react";

const AddPerson = () => {
    const [first_name, setFname] = useState('');
    const [middle_name, setMname] = useState('');
    const [last_name, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescreption] = useState('');

    const handleSubmet = (e) => {
        e.preventDefault();
        const person = { first_name, middle_name, last_name, email, description };
        fetch('http://icloudjo.com:8050/REST/persons/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(person)

        }).then(()=>{
            console.log('person added succsessfuly')
        })
    };

    return (
        <div className="addperson">
            <h2> Add a new person </h2>
            <form onSubmit={handleSubmet}>
                <label > Person first name </label>
                <input
                    type="text"
                    required
                    value={first_name}
                    onChange={(e) => setFname(e.target.value)}
                />
                <label > Person middle name </label>
                <input
                    type="text"
                    required
                    value={middle_name}
                    onChange={(e) => setMname(e.target.value)}
                />
                <label > Person last name </label>
                <input
                    type="text"
                    required
                    value={last_name}
                    onChange={(e) => setLname(e.target.value)}
                />
                <label > Person email </label>
                <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label> description</label>
                <textarea
                    required
                    value={description}
                    onChange={(e) => setDescreption(e.target.value)}
                />
                <br />
                <button> Add person</button>
            </form>

        </div>
    );
}

export default AddPerson;