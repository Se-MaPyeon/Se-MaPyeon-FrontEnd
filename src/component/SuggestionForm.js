import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import '../assets/css/SuggestionForm.css';

function SuggestionForm() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmSubmit = window.confirm("해당 건의함에 제출하시겠습니까? // 백엔드 연결해야함");
    if (confirmSubmit) {
      // 제출 동작
      console.log("제출 완료");
    } else {
      // 제출 취소 동작
      console.log("제출 취소");
    }
  };

  return (
    <div className={`suggestion-form-container ${isFormOpen ? 'open' : ''}`}>
      <div className="toggle-button-container" onClick={toggleForm}>
        건의사항 작성
        {isFormOpen ? <BsChevronUp size={20} /> : <BsChevronDown size={20} />}
      </div>
      {isFormOpen && (
        <form className="suggestion-form" onSubmit={handleSubmit}>
          <div className="form-group form-group-inline">
            <select id="board" name="board" required>
              <option value="board1">건의함 1</option>
              <option value="board2">건의함 2</option>
              <option value="board3">건의함 3</option>
              <option value="board4">건의함 4</option>
              <option value="board5">건의함 5</option>
            </select>
            <button type="submit" className="submit-button">제출</button>
          </div>
          <div className="form-group">
            <input type="text" id="title" placeholder="제목" name="title" required />
          </div>
          <div className="form-group">
            <textarea id="content" placeholder=" ▶ 게시판 게시글 삭제 기준
               특정 개인 및 단체를 비방하거나 왜곡, 선동 또는 허위 및 확인되지 않은 사실을 유포하는 경우
               제목, 내용 또는 게시자명 등 욕설, 음란한 표현을 담고 있는 경우
               광고 및 상업적인 게시물에 해당하는 경우
               동일한 내용을 반복하여 올리는 경우
               상식 및 통신 예절에 어긋난다고 판단되는 경우
               기타 관계법령을 위배하거나 정상적인 홈페이지 운영을 저해한다고 판단되는 경우" 
              name="content" required></textarea>
          </div>
        </form>
      )}
    </div>
  );
}

export default SuggestionForm;