import React, { useState } from 'react';
import '../assets/css/Main.css';
import '../assets/css/MyPage.css';
import { FaRegTrashAlt } from "react-icons/fa";
import { BsPersonSquare } from "react-icons/bs";
import SuggestionForm from './SuggestionForm';

function MyPage() {
  const [selectedBoard] = useState('myBoard');
  const [selectedRow, setSelectedRow] = useState(null);
  const [boards, setBoards] = useState({
    myBoard: [
      { id: 1, 추천수: 1, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      { id: 2, 추천수: 2, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      { id: 3, 추천수: 3, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      { id: 4, 추천수: 4, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      { id: 5, 추천수: 5, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' }
    ],
  });

  const handleRowClick = (item) => {
    setSelectedRow(item);
  };

  const handleDelete = (id) => {
    if (window.confirm('정말로 이 게시물을 삭제하시겠습니까?')) {
      setBoards((prevBoards) => {
        const updatedBoard = prevBoards[selectedBoard].filter((item) => item.id !== id);
        return { ...prevBoards, [selectedBoard]: updatedBoard };
      });
    }
  };

  // 건의사항 뒤로가기 버튼
  const handleClose = () => {
    setSelectedRow(null);
  };

  return (
    <div>
      <div className="table-container-wrapper">
        <div className="board-buttons-container">
          <button className="board-button selected" disabled>
            마이페이지
          </button>
        </div>
        <div className="table-container">
          <SuggestionForm />
          {selectedRow ? (
            <div className="detailed-view-content">
              <div className="icon-container">
                <BsPersonSquare size={40} color="#4a5a6a"/>
                <div className="icon-text-container">
                  <div id='c1'>{selectedRow.소속학과}</div>
                  <div>{selectedRow.생성일자}</div>
                </div>
              </div>
              <p>
                <h3>건의대상</h3> {selectedRow.건의대상}
              </p>
              <p>
                <h3>건의내용</h3> {selectedRow.건의내용}
              </p>
              <p>
                <strong>추천수:</strong> {selectedRow.추천수}
              </p>
              <div className="inner-button-container">
                <button className="close-button" onClick={handleClose}>
                  글목록
                </button>
              </div>
            </div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th className="col1">추천수</th>
                  <th className="col2">건의대상</th>
                  <th className="col3">건의내용</th>
                  <th className="col4">생성 일자</th>
                  <th className="col_bin">삭제</th>
                </tr>
              </thead>
              <tbody>
                {(boards[selectedBoard] || []).map((item) => (
                  <tr key={item.id} onClick={() => handleRowClick(item)} className="clickable-row">
                    <td className="col1">{item.추천수}</td>
                    <td className="col2">{item.건의대상}</td>
                    <td className="col3">{item.건의내용}</td>
                    <td className="col4">{item.생성일자}</td>
                    <td className="col_bin">
                      <button className="bin" onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }}><FaRegTrashAlt /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyPage;