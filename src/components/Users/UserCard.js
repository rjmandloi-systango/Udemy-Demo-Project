import React from 'react'

export default function UserCard(props) {
    return (
        <div>
            <div className="card text-center">
                <div className="card-header">
                    {props.userName}
                </div>
                <div className="card-footer text-muted">
                    {props.userAge}
                </div>
            </div>
        </div>
    )
}
