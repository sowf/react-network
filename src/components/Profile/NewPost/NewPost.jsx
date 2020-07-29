import React from 'react'

const NewPost = (props) => {

    let textInputArea = new React.createRef()
    
    let publishPost = () => {
        props.publishPost()
    }

    let createPost = () => {
        let text = textInputArea.current.value
        props.createPost(text)
    }

    return (
        <div className="col-12 my-2 px-5">
            <input ref={textInputArea} onChange={ createPost } value={ props.textInputValue }  className="form-control" placeholder="Enter your message" />
            <button onClick={publishPost} className="btn btn-primary btn-block float-right">Post</button>
        </div>
    )
}

export default NewPost;