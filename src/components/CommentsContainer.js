import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CommentsList from './CommentsList.js';
import { updateComments } from '../utils/commentSlice';


const CommentsContainer = () => {
    
    const dispatch = useDispatch();
    const [comments] = useSelector(store => store.commentSlice.comments);
    const [formattedComments, setFormattedComments] = useState([]);
    const [replyText, setReplyText ] = useState('');
    

    const cancelEdit = () => {
        setReplyText('');
    }
    
    const submitClicked = () => {
        const parentCommentsLength = comments.filter(comment => comment.isRootComment).length;
        replyText.length>0 && dispatch(updateComments({ name: "Nikhil Kumar", text: replyText, isRootComment: true, parentId: null, id: parentCommentsLength.toString() }));
        setReplyText('');
    }
    
    let commentList = [];

    useEffect(()=> {
        formatComments();

        return () => {
            setFormattedComments([]);
            commentList = [];
          };
    },[comments]);

    const formatComments = () => {
        comments.forEach((comment) => {
            if(comment.isRootComment){
                commentList.push({...comment, replies:[]});
            }
            if(!comment.isRootComment && comment.parentId.length === 1){
                commentList[comment.parentId].replies.push({...comment, replies:[]})
            }
            if(!comment.isRootComment && comment.parentId.length >= 2){
                const modifiedParentIdArray = comment.parentId.split('-');
                const mainParentId = modifiedParentIdArray.shift();
                commentList[mainParentId].replies =  appendMultilevelComments(comment, commentList[mainParentId].replies, modifiedParentIdArray );
            }
        });
        setFormattedComments(commentList);
    }

    const appendMultilevelComments = (comment, parentComment, modifiedParentIdArray) => {
        if(modifiedParentIdArray.length > 1){
            const mainParentId = modifiedParentIdArray.shift();
            parentComment[mainParentId].replies =  appendMultilevelComments(comment, parentComment[mainParentId].replies, modifiedParentIdArray ); 
        } else {
            parentComment.push({...comment, replies:[]})
        }
        return parentComment;
    }


    return (
        <div className="m-3">
            <h1 className="text-lg text-gray-700">{comments.length} Comments</h1>
            <div className='w-full m-3'>
                <input
                    className=" w-full border-b border-b-gray-400 px-3 h-8 m-1 focus:border-b focus-within:border-b"
                    type="text"
                    placeholder='Add a reply...'
                    onChange={(e) => setReplyText(e.target.value)}
                />
                <div className='flex my-1 justify-end'>
                    <div className='py-1 px-2 hover:bg-gray-100 rounded-full cursor-pointer mx-2 text-xs' onClick={() => cancelEdit()}>Cancel</div>
                    <div className='py-1 px-2 bg-gray-100 cursor-pointer rounded-full text-xs' onClick={() => submitClicked()}>Submit</div>
                </div>
            </div>
            <CommentsList comments={formattedComments} />
        </div>
    );
};



export default CommentsContainer

