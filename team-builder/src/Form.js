import React from 'react';

export default function Form(props) {
    const { values, update, submit } = props;

    return (
        <form>
            <div>
                <label>Username
                    <input
                        type="text"
                        name="username"
                        placeholder="enter username"
                    />
                </label>

                <label>Email
                    <input
                        type="email"
                        name="email"
                        placeholder="enter email"
                    />
                </label>
                
                <label>Role
                    <select>
                        <option>-Select a Role-</option>
                        <option>Man</option>
                        <option>Elf</option>
                        <option>Dwarf</option>
                        <option>Hobbit</option>
                        <option>Wizard</option>
                    </select>
                </label>

                <div className="submit">
                    <button>Join</button>
                </div>
            </div>
        </form>
    )
}