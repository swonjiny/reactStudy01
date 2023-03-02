import {useDispatch, useSelector} from "react-redux";
import {FETCH_ONE, fetchOne} from "../../modules/board";
import BoardRead from "../../components/board/BoardRead";
import * as api from "../../lib/api";
import {useEffect} from "react";
import {withRouter} from "react-router-dom";

const BoardReadContainer = ({boardNo, history }) => {
    const dispatch = useDispatch();
    const { board, isLoading, myInfo } = useSelector(({ board, loading, auth }) => ({
        board: board.board,
        isLoading: loading[FETCH_ONE],
        myInfo: auth.myInfo,
    }));
    
    const onRemove = async () => {
        try {
            await api.removeBoard(boardNo, board.writer);
            history.push("/board");
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        dispatch(fetchOne(boardNo));
    }, [dispatch, boardNo]);

    return (
        <div>
            <BoardRead isLoading={isLoading} myInfo={myInfo} boardNo={boardNo} board={board} onRemove={onRemove}/>
        </div>
    )
}

export default withRouter(BoardReadContainer);