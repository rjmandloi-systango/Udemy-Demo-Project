import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import UserCard from "./UserCard";
export default function AddUser(props) {
    const [inputUserName, setInputUserName] = useState("");
    const [inputAge, setInputAge] = useState("");

    const addUserHandler = (event) => {
        if (inputUserName.trim().length === 0 || inputAge.trim().length === 0) {
            return;
        }
        if (+inputAge <= 1) {
            return
        }
        console.log(inputAge , inputUserName);
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
    return (
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
                {/* <button type="submit" className="btn btn-primary mx-auto mb-2">Add user</button> */}
            </form>
            <div>
                <UserCard userName={inputUserName} userAge={inputAge}></UserCard>
            </div>
        </Card>
    );
}
