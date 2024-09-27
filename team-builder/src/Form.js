import React from 'react';

export default function Form(props) {
    const { values, update, submit } = props;

    const onChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        update(name, value);
    }
    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    return (
        <form className="form-container" onSubmit={onSubmit}>
            <div>
                <label>Username
                    <input
                        type="text"
                        name="username"
                        placeholder="enter username"
                        value={values.username}
                        onChange={onChange}
                    />
                </label>

                <label>Email
                    <input
                        type="email"
                        name="email"
                        placeholder="enter email"
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                
                <label>Role
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value="">-Select a Role-</option>
                        <option value="Man">Man</option>
                        <option value="Elf">Elf</option>
                        <option value="Dwarf">Dwarf</option>
                        <option value="Hobbit">Hobbit</option>
                        <option value="Wizard">Wizard</option>
                    </select>
                </label>

                <div className="join">
                    <button>Join</button>
                </div>
            </div>
        </form>
    )
}