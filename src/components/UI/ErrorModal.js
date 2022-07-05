import React from 'react'
import Button from './Button'
import './ErrorModal.css'

export default function ErrorModal(props) {
    return (
        <div>
            <div className='backdrop' onClick={props.onErrorHandler}>
                <div className="alert alert-success w-25 h-25  positionOfErrorModal" role="alert">
                    <h4 className="alert-heading">{props.title}</h4>
                    <p >{props.message}</p>
                    <hr></hr>
                    <Button buttonTitle='okay' onClick={props.onErrorHandler} ></Button>
                </div>
            </div>
        </div>
    )
}
