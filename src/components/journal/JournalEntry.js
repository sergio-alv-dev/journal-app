import React from 'react';
import moment from 'moment';
import { activeNote } from '../../actions/notes'
import { useDispatch } from 'react-redux';

export const JournalEntry = ( { id, date, title, body, url } ) => {

    const noteDate = moment(date);
    const dispatch = useDispatch();
    
    
    const handleEntryClick = () => {
        // console.log("click entry" , id)
        dispatch( activeNote( id, {
            id, date, title, body, url
        }));

    }

    return (
        <div 
            className ="journal__entry pointer animate__animated animate__fadeIn"
            onClick = { handleEntryClick }

        >
           
           { 
            url
            &&
            (<div
                className ="journal__entry-picture"
                style = {{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${ url })`
                }}
            ></div>)
           } 
            <div className ="journal__entry-body">
                <p className="journal__entry-title">
                    { title }
                </p>

                <p className="journal__entry-content">
                    { body }
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span> { noteDate.format('dddd') } </span>
                <h4> { noteDate.format('do') } </h4>
            </div>

        </div>
    )
}
