import Modal from "react-modal";

//component rendered under Post component. uses react-modal package
const PostModal = ({ post, user, toggle, modal }) => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };
    return (
        <Modal isOpen={modal} onRequestClose={() => toggle} style={customStyles}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <h3>{user.name}</h3>
            <p>{user.company.catchPhrase}</p>
            <button onClick={() => toggle}>Close</button>
        </Modal>
    );
}

export default PostModal;
