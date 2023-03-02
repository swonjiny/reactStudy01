import BoardList from "../../components/board/BoardList";
import {useDispatch, useSelector} from "react-redux";
import { isMember as selectIsMember } from "../../modules/selector";
import {useEffect} from "react";
import {fetchList, FETCH_LIST} from "../../modules/board";
import {withRouter} from "react-router-dom";
const BoardListContainer = () => {
    const dispatch = useDispatch()

    const { boards, isLoading, isMember } = useSelector(state => ({
        boards: state.board.boards,
        isLoading: state.loading[FETCH_LIST],
        isMember: selectIsMember(state)
    }))

    useEffect(()=>{
        dispatch(fetchList())
    },[dispatch])
    return (
        <div>
            <BoardList boards={boards} isMember={isMember} isLoading={isLoading} />
        </div>
    )
}

export default withRouter(BoardListContainer)