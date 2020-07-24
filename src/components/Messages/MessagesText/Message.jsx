import React from 'react';

const Message = (props) => {
    return (
        <div class={`card w-25 my-2 p-2 ${props.align}`}>
            <p class="card-text">{props.text}</p>
        </div>
    )
}

export default Message;