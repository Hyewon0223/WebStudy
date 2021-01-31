import React, {useState, useEffect} from 'react';
import Post from "../component/Post";
import {TitleBar} from "../../H05/component/TitleBar";
import {CommentList} from "../component/CommentList";
import {createComment, readComments, readFeeds} from "../Api";
import {useHistory} from "react-router";
import './PostPage.css';
import CommentWrite from "../component/CommentWrite";

export const PostPage = (props) => {
    const id = props.match.params.id;
    console.log(id)
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const server = async() => {
            setComments(await readComments(props.match.params.id));
        }
        server();
    }, []);

    return <>
        <table className="PostPage">
            <tbody>
                <tr>
                    <td id = "post"><Post id={id}/></td>
                    <td id = "comment">
                        <div id="list">
                            <CommentList
                            readComments = {readComments}
                            setComments = {setComments}
                            comments = {comments}
                            />
                        </div>

                        <CommentWrite
                            writeCmtFunc = {createComment}
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    </>;
}

export default PostPage;
