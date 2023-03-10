import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateComments } from '../utils/commentSlice';

const Comment = ({ data, repliesLength }) => {
    const dispatch = useDispatch();
    const { name, text, id } = data;
    const [showInput, setShowInput] = useState(false);
    const [replyText, setReplyText ] = useState('');
    

    const cancelEdit = () => {
        setShowInput(!showInput);
        setReplyText('');
    }
    
    const submitClicked = () => {
        replyText.length > 0 && dispatch(updateComments({ name: "Nikhil Kumar", text: replyText, isRootComment: false, parentId: id, id: id+'-'+repliesLength }));
        setShowInput(!showInput);
        setReplyText('');
    }

    return (
        <>
        <div>
            <div className="flex shadow-sm bg-gray-50 p-1 rounded-lg my-2 w-full">
                <div className='h-10 w-10 bg-blue-400 rounded-full flex items-center justify-center mr-2 '><span className=' text-white
                    text-xl font-semibold'>KN</span></div>
                <div className="px-1 w-full">
                    <p className="font-semibold text-sm">{name }</p>
                    <div className="flex justify-between w-">
                        <div className='text-xs'>{ text }</div>
                         {!showInput &&
                            <div className=''>
                                <div className='py-1 px-2 hover:bg-gray-100 rounded-full cursor-pointer w-fit text-xs' onClick={() => setShowInput(!showInput)}>Reply
                                </div>
                            </div>}
                        </div>
                </div>
            </div>
            
        </div>
            { showInput&& <div className='w-full'>
                <input
                    className=" w-full border-b border-b-gray-400 px-3 h-5 "
                    type="text"
                    value={replyText}
                    placeholder='Add a reply...'
                    onChange={(e) => setReplyText(e.target.value)}
                />
                <div className='flex my-1 justify-end'>
                    <div className='py-1 px-2 hover:bg-gray-100 rounded-full cursor-pointer mx-2 text-xs' onClick={() => cancelEdit()}>Cancel</div>
                    <div className='py-1 px-2 bg-gray-100 cursor-pointer rounded-full text-xs' onClick={() => submitClicked()}>Submit</div>
                </div>
            </div>}
        </>
    );
};

export default Comment