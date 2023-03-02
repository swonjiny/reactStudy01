import BoardModifyForm from "../../components/board/BoardModifyForm";
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {FETCH_ONE,fetchOne} from "../../modules/board";
import * as api from "../../lib/api";
import {useEffect} from "react";

const BoardModifyContainer = ({ boardNo, history }) => {
    const dispatch = useDispatch();
    const { board, isLoading, myInfo } = useSelector(({ board, loading, auth }) => ({
        board: board.board,
        isLoading: loading[FETCH_ONE],
        myInfo: auth.myInfo,
    }));

    const onModify = async (boardNo, title, content, writer) => {
        try {
            await api.modifyBoard(boardNo, title, content, writer);
            history.push("/board/read/" + boardNo);
        }catch (e) {
            console.error(e)
        }
    }
    useEffect(() => {
        dispatch(fetchOne(boardNo));
    }, [dispatch, boardNo]);
    return (
        <div>
            <BoardModifyForm onModify={onModify} board={board} isLoading={isLoading} myInfo={myInfo}/>
        </div>
    )
}

export default withRouter(BoardModifyContainer);