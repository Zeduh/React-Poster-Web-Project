import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal'
import classes from './PostsList.module.css';

function PostsList(){
    const [ enteredBody, setEnteredBody ] = useState('');
    const [ enteredAuthor, setEnteredAuthor ] = useState('');
    const [ modalIsVisible, setModalIsVisible] = useState(true);

    function hideModalHandler(){
        setModalIsVisible(false)
    }

    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
            {modalIsVisible && 
                <Modal onClose={hideModalHandler}>
                    <NewPost
                        onBodyChange={bodyChangeHandler}
                        onAuthorChange={authorChangeHandler}
                    />
                </Modal>
            }
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Maria" body="Vamos fazer o curso todo!"/>
            </ul>
        </>
    )
}

export default PostsList;