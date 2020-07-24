import React from 'react'
import NewPost from './NewPost'
import { addPostCreator, createPostCreator } from '../../../redux/store'


const NewPostContainer = (props) => {

    let publishPost = () => {
        props.dispatch(addPostCreator())
    }

    let typePost = (text) => {
        props.dispatch(createPostCreator(text))
    }

    return <NewPost typePost={typePost} publishPost={publishPost} textInputValue={props.textInputValue} />
}

export default NewPostContainer;