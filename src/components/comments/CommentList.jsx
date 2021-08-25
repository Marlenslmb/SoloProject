import { Button } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { commentContext } from './CommentsContext';

const CommentList = (props) => {

    console.log(props)
    const { comment, getComments, deleteComments } = useContext(commentContext)
    // const {id} = useParams()
    useEffect(() => {
        getComments()
        console.log(comment, 'COMMENT', comment[2]?.heroId,  props.detailId)
        console.log(comment[2]?.heroId === +props.detailId, 'COMMENT bOOL')
    }, [])

    return (
        <div>
            {
                comment  ? (

                    comment.map((item, index) => (
                        item.heroId === +props.detailId ? (
                            <div key={index} style={{ justifyContent: 'center', }}>
                                <p style={{color: 'whitesmoke'}}>{item.name}</p>
                                <p style={{color: 'whitesmoke'}}>{item.desc}</p>
                                <Button variant="contained" onClick={() => deleteComments(item.id, props.history)} color="#2c6335" style={{backgroundColor: 'red',}}>Удалить</Button>
                            </div>
                        ) : (
                            null
                        )
                    ))
                ) : (
                    <h1>Loading...</h1>
                )
            }
            
        </div>
    );
};

export default CommentList;