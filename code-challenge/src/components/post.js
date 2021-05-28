/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import PostModal from './modal'
import { useState, useEffect } from 'react'

const Post = ({ post, user }) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div sx={{
            variant: 'containers.post', 
            ':hover': {
                cursor: 'pointer',
            }
        }}
            onClick={toggle}
        >
            <PostModal post={post} user={user[0]} modal={modal} toggle={toggle}/>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}

export default Post;