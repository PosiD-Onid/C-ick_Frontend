import React, { useMemo, useReducer, useCallback, useRef } from "react";
import * as L from "./scheduleInquiryPage.style";
import ScheduleList from "./ScheduleList";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.targetId
          ? {
              ...it,
              isDone: !it.isDone,
            }
          : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
}

export const ScheduleContext = React.createContext();
export const ScheduleStateContext = React.createContext();
export const ScheduleDispatchContext = React.createContext();

function ScheduleInquiryPage() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);
  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createdDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  };

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);

  const memoizedDispatches = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  });
  return (
    <>
      <L.FullScreenColor>
        <div>
          <div>
            <L.List>내가 작성한 글</L.List>
            <L.Line />
            <L.Select>선택</L.Select>
            <L.Title>제목</L.Title>
          </div>
          <ScheduleStateContext.Provider value={todo}>
            <ScheduleDispatchContext.Provider value={memoizedDispatches}>
              <ScheduleList />
            </ScheduleDispatchContext.Provider>
          </ScheduleStateContext.Provider>
          <L.LineG />
          <L.Delete>삭제</L.Delete>
        </div>
      </L.FullScreenColor>
    </>
  );
}

export default ScheduleInquiryPage;
