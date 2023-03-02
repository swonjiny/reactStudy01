import BoardModifyContainer from "../../containers/board/BoardModifyContainer";
import MainLayout from "../../layout/MainLayout";

const BoardModifyPage = ({ match }) => {
    const {boardNo} = match.params
    return (
        <MainLayout>
            <BoardModifyContainer boardNo={boardNo}/>
        </MainLayout>
    )
}

export default BoardModifyPage