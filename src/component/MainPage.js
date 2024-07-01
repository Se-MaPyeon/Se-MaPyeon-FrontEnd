import React, { useState } from 'react';
import '../assets/css/Main.css';
import { BsPersonSquare } from "react-icons/bs";
import SuggestionForm from './SuggestionForm';

function MainPage() {
  const [selectedBoard, setSelectedBoard] = useState('board1');
  const [selectedRow, setSelectedRow] = useState(null);
  const boards = {
    board1: [
      { id: 1, 추천수: 63, 건의대상: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 건의내용: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      { id: 2, 추천수: 36, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      { id: 3, 추천수: 36, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      { id: 4, 추천수: 36, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      { id: 5, 추천수: 36, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      { id: 6, 추천수: 36, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      { id: 7, 추천수: 36, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      { id: 8, 추천수: 36, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      { id: 9, 추천수: 36, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      { id: 10, 추천수: 36, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      { id: 11, 추천수: 36, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      { id: 12, 추천수: 36, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      { id: 13, 추천수: 36, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      { id: 14, 추천수: 36, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      { id: 15, 추천수: 36, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      { id: 16, 추천수: 36, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      { id: 17, 추천수: 36, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      { id: 18, 추천수: 36, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      { id: 19, 추천수: 36, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      { id: 20, 추천수: 36, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      { id: 21, 추천수: 36, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      { id: 22, 추천수: 36, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      { id: 23, 추천수: 36, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' }
      // 다른 항목 추가
    ],
    board2: [
      { id: 1, 추천수: 2, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      // 다른 항목 추가
    ],
    board3: [
      { id: 1, 추천수: 3, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      // 다른 항목 추가
    ],
    board4: [
      { id: 1, 추천수: 4, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      // 다른 항목 추가
    ],
    board5: [
      { id: 1, 추천수: 5, 건의대상: '건의대상 설명', 건의내용: '건의내용 설명', 생성일자: '2024/xx/xx', 소속학과: '컴퓨터공학과' },
      // 다른 항목 추가
    ],
  };

  // 클릭시 건의사항 보여주기
  const handleRowClick = (item) => {
    setSelectedRow(item);
  };
  // 추천버튼 함수
  const handleRecommend = () => {
    const confirmRecommend = window.confirm("이 건의사항을 추천하시겠습니까?");
    if (confirmRecommend) {
      console.log("추천 완료");
    } else {
      console.log("추천 취소");
    }
  };
  // 신고버튼 함수
  const handleReport = () => {
    const confirmReport = window.confirm("이 건의사항을 신고하시겠습니까?");
    if (confirmReport) {
      console.log("신고 완료");
    } else {
      console.log("신고 취소");
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
          {['board1', 'board2', 'board3', 'board4', 'board5'].map((board) => (
            <button
              key={board}
              onClick={() => setSelectedBoard(board)}
              className={`board-button ${selectedBoard === board ? 'selected' : ''}`}
              disabled={selectedRow !== null}
            >
              건의함 이름{board.slice(-1)}
            </button>
          ))}
        </div>
        <div className="table-container">
          <SuggestionForm />
          {selectedRow ? (
            <div className="detailed-view-content">
              <div className="icon-container">
                <BsPersonSquare size={40} color="#4a5a6a" />
                <div className="icon-text-container">
                  <div id='c1'>{selectedRow.소속학과}</div>
                  <div>{selectedRow.생성일자}</div>
                </div>
              </div>
              <p><h3>건의대상</h3> {selectedRow.건의대상}</p>
              <p><h3>건의내용</h3> {selectedRow.건의내용}</p>
              <p><strong>추천수:</strong> {selectedRow.추천수}</p>
              <div className="inner-button-container">
                <button className="recommend-button" onClick={handleRecommend}>추천</button>
                <button className="report-button" onClick={handleReport}>신고</button>
                <button className="close-button" onClick={handleClose}>글목록</button>
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
                  <th className="col5">소속 학과</th>
                </tr>
              </thead>
              <tbody>
                {(boards[selectedBoard] || []).map(item => (
                  <tr key={item.id} onClick={() => handleRowClick(item)} className="clickable-row">
                    <td className="col1">{item.추천수}</td>
                    <td className="col2">{item.건의대상}</td>
                    <td className="col3">{item.건의내용}</td>
                    <td className="col4">{item.생성일자}</td>
                    <td className="col5">{item.소속학과}</td>
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

export default MainPage;