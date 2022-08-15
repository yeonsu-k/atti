import {useSelector} from 'react-redux'
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from 'styled-components';
import BestChip from './BestChip';

import { palette } from '../../styles/palette';
import apiAcc, {api} from '../../utils/api';
import { CommentOutlined } from '@material-ui/icons';


function CommentList({comments}){
    const { auth } = useSelector(state => state.userInfo)

    // // 단일 comment 지우기
    // const commentDelete = (commentId) => {
    //     api.delete(`/post/comment/delete/${commentId}`
    //     )
    //     .then((res) => {
    //         console.log("댓글 지우기:", res);
    //     });
    // }

    // // 단일 comment 좋아요
    // const [commentLikeCount, setCommentLikeCount] = useState([])
    // const commentLike = (commentId) => {
    //     api.get(`/post/comment/likeBtn/${commentId}/${auth.id}`
    //     ).then((res) => {
    //         console.log("댓글 좋아요: ", res.data )
    //         setCommentLikeCount(res.data)
    //     })
    // }
    // useEffect(() => {
    //     commentLike()
    // }, [commentLikeCount]);


     const hrStyle = {
        height: "0.1px",
        backgroundColor: "gray",
        width: "100%",
        margin: "-10px 0 0 0"
    }
    function timeForToday(value) {
        const today = new Date();
        const timeValue = new Date(value);
      
        const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
        if (betweenTime < 1) return '방금 전';
        if (betweenTime < 60) {
            return `${betweenTime}분 전`;
        }
      
        const betweenTimeHour = Math.floor(betweenTime / 60);
        if (betweenTimeHour < 24) {
            return `${betweenTimeHour}시간 전`;
        }
      
        const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
        if (betweenTimeDay < 365) {
            return `${betweenTimeDay}일 전`;
        }
      
        return `${Math.floor(betweenTimeDay / 365)}년 전`;
      }
    if(comments.length === 0){
        return(
            <div></div>
        )
    }
    else{
        return(
            <CommentDiv>
                {comments.map((e,i) => (
                    <>
                    {console.log( "개별 댓글: ", e)}
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "space-between"}}>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <div style={{display: "flex", flexDirection: "row", height: "40px"}}>
                                <Avatar sx={{ width: 30, height: 30 }} style={{margin: "11px 10px 0 11px"}}>JJ</Avatar>
                                <p>{e.userId}</p>
                                <BestChip/>
                            </div>
                            <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-end", margin: "10px 10px 0 0"}}>
                                <div>
                                    {timeForToday(e.commentRegDate)}
                                </div>
                                <div style={{display: "flex", flexDirection: "row"}}>
                                    <span style={{margin: "10px 0 0 0"}}>답글</span>
                                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />}/> 
                                    <span style={{margin: "10px 0 0 -10px"}}>좋아yo</span>
                                    <CustomDeleteIcon onClick={commentDelete(12)}/>
                                </div>
                            </div>
                        </div>
                            <div style={{margin: "-15px 0 0 15px"}}>
                                <p style={{wordBreak: "break-all", width: "880px"}}>{e.commentContent}</p>
                            </div>
                        
                    </div>
                    <Hr/>
                    </>
                ))}
            </CommentDiv>
        )
    }
}

const CustomDeleteIcon = styled(DeleteIcon)`
margin: 10px 0 0 5px;
&:hover{
    cursor: pointer;
}
`;

const CommentDiv = styled.div`
width: 950px;
height: 210px;
margin: -20px 0 0 25px;
overflow: auto;
overflow-x: hidden;
&::-webkit-scrollbar {
    width: 8px;
    background: ${palette.white};
  }
&::-webkit-scrollbar-thumb {
border-radius: 10px;
background: ${palette.main_grBlue};
}
`;

const Hr = styled.hr`
height: 0.1px;
backgroundColor: gray;
width: 100%;
margin: -10px 0 0 0;
`;


export default CommentList