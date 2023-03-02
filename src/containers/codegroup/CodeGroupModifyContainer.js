import CodeGroupModifyForm from "../../components/codegroup/CodeGroupModifyForm";
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {FETCH_ONE,fetchOne} from "../../modules/codeGroup";
import {modifyCodeGroup} from "../../lib/api";
import {useEffect} from "react";

const CodeGroupModifyContainer = ({ groupCode, history }) => {
    const dispatch = useDispatch();
    const { codeGroup, isLoading } = useSelector(({ codegroup, loading }) => ({
        codeGroup: codegroup.codeGroup,
        isLoading: loading[FETCH_ONE],
    }));
    const onModify = async (groupCode, groupName) => {
        try {
            await modifyCodeGroup(groupCode, groupName);
            alert("수정이 완료되었습니다.");
            history.push("/codegroup/read/" + groupCode);
        } catch (e) {
            console.error(e)
        }
    };

    useEffect(() => {
        dispatch(fetchOne(groupCode));
    }, [dispatch, groupCode]);

    return (
        <div>
            <CodeGroupModifyForm isLoading={isLoading} onModify={} codeGroup={codeGroup}/>
        </div>
    )
}

export default withRouter(CodeGroupModifyContainer)