import React from 'react'
import { addPostCreator, createPostCreator } from '../../../redux/store'


const NewPost = (props) => {

    let textInputArea = new React.createRef()

    let publishPost = () => {
        props.dispatch(addPostCreator())
    }

    let typePost = () => {
        let text = textInputArea.current.value
        props.dispatch(createPostCreator(text))
    }

    return (
        <div className="col-12 my-2 px-5">
            <input ref={textInputArea} onChange={ typePost } value={ props.textInputValue }  className="form-control" placeholder="Enter your message" />
            <button onClick={publishPost} className="btn btn-primary btn-block float-right">Post</button>
        </div>
    )
}

export default NewPost;