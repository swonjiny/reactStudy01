import CodeGroupRead from "../../components/codegroup/CodeGroupRead";
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {FETCH_ONE, fetchOne} from "../../modules/codeGroup";
import {useEffect} from "react";
import {removeCodeGroup} from "../../lib/api";

const CodeGroupReadContainer = ({groupCode, history}) => {
    const dispatch = useDispatch();

    const { codeGroup, isLoading } = useSelector(({ codegroup, loading }) => ({
        codeGroup: codegroup.codeGroup,
        isLoading: loading[FETCH_ONE],
    }));

    useEffect(() => {
        dispatch(fetchOne(groupCode));
    }, [dispatch, groupCode]);

    const onRemove = async () => {
        try {
            await removeCodeGroup(groupCode);
            alert("삭제가 완료되었습니다.");
            history.push("/codegroup");
        } catch (e) {
            console.error(e)
        }
    };
    return (
        <div>
            <CodeGroupRead groupCode={groupCode} isLoading={isLoading} codeGroup={codeGroup} onRemove={onRemove}/>
        </div>
    )
}

export default withRouter(CodeGroupReadContainer)