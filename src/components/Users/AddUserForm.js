import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";
import Card from "../UI/Card";

export default function AddUserForm(props) {
    const [inputUserName, setInputUserName] = useState("");
    const [inputAge, setInputAge] = useState("");
    const [error, setError] = useState();
    const addUserHandler = (event) => {
        event.preventDefault();
        if (inputUserName.trim().length === 0 || inputAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter your name and age  '
            })
            return;
        }
        if (+inputAge <= 1) {
            setError({
                title: 'Invalid Age',
                message: 'Age can neither be Negative nor 0'
            })
            return
        }
        console.log(inputAge, inputUserName);
        props.onAddUser(inputUserName, inputAge);
        setInputAge("");
        setInputUserName("");
    };

    const inputUserNameHandler = (event) => {
        setInputUserName(event.target.value);
        // console.log(inputUserName);
    };

    const inputAgeHandler = (event) => {
        setInputAge(event.target.value);
        // console.log(inputAge);
    };
    const errorHandler = () => {
        setError();
        setInputAge("");
        setInputUserName("");
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} onErrorHandler={errorHandler} message={error.message}></ErrorModal>}
            <Card>
                <form onSubmit={addUserHandler}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input
                            type="username"
                            value={inputUserName}
                            onChange={inputUserNameHandler}
                            className="form-control"
                            id="username"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">
                            Age
                        </label>
                        <input
                            type="number"
                            value={inputAge}
                            step={1}
                            onChange={inputAgeHandler}
                            className="form-control"
                            id="age"
                        />
                    </div>
                    <Button type="submit" buttonTitle="Add User"></Button>
                </form>
            </Card>
        </div>
    );
}
