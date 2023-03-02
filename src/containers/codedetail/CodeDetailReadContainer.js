import CodeDetailRead from "../../components/codedetail/CodeDetailRead";
import {useDispatch, useSelector} from "react-redux";
import * as api from "../../lib/api";
import {FETCH_ONE, fetchOne} from "../../modules/codeDetail";
import {withRouter} from "react-router-dom";
import {useEffect} from "react";

const CodeDetailReadContainer = ({ groupCode, codeValue, history }) => {
    const dispatch = useDispatch();
    const { codeDetail, isLoading } = useSelector( ({codedetail, loading}) => (
        {
            codeDetail: codedetail.codeDetail,
            isLoading: loading[FETCH_ONE],
        }
    ) )

    const onRemove = async () => {
        try {
            await api.removeCodeDetail(groupCode, codeValue)
            history.push("/codedetail");
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(()=>{
        dispatch(fetchOne(groupCode, codeValue))
    },[groupCode, codeValue, dispatch])

    return (
        <div>
            <CodeDetailRead codeValue={codeValue} groupCode={groupCode} isLoading={isLoading} codeDetail={codeDetail} onRemove={onRemove}/>
        </div>
    )
}

export default withRouter(CodeDetailReadContainer);