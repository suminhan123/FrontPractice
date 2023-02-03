import React from "react";
import './Post.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';

export default function Post(){
    return (
        <div className="post">
            <table className="postTable">
                <thead>
                    <tr className="postOption">
                        <th>번호</th>
                        <th>카테고리</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>댓글수</th>
                        <th>수정</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="postInfo">
                        <td>1</td>
                        <td>사물</td>
                        <td>--잃어버렸어요</td>
                        <td>이름</td>
                        <td>2023.1.20</td>
                        <td>1</td>
                        <td><EditIcon/></td>
                        <td><DeleteIcon/></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="postInfo">
                        <td>2</td>
                        <td>동물</td>
                        <td>--잃어버렸어요</td>
                        <td>이름</td>
                        <td>2023.1.2</td>
                        <td>2</td>
                        <td><EditIcon/></td>
                        <td><DeleteIcon/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}