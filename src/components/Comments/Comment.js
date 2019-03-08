import React from 'react';
import ReactHtmlParser from 'react-html-parser';

function htmlDecode(input){
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}

function convertedHtml(input) {
    return ReactHtmlParser(htmlDecode(input))
}

const Comment = props => {
    const comment = props.comment;
    
    return (
        <div className="comment">
            <strong className="commentAuthor">{comment.author}</strong> - <span className="commentPoints">{comment.score} points</span>
            {convertedHtml(comment.body_html)}
        </div>
    )
}

export default Comment;