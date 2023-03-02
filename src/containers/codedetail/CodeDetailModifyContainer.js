import CodeDetailModifyForm from "../../components/codedetail/CodeDetailModifyForm";
import {useDispatch, useSelector} from "react-redux";
import * as api from "../../lib/api";
import {FETCH_ONE, fetchOne} from "../../modules/codeDetail";
import {useEffect} from "react";

const CodeDetailModifyContainer = ({ groupCode, codeValue, history } ) => {
    const dispatch = useDispatch()

    const onModify = async (groupCode, codeValue, codeName) =>{
        try {
            await api.modifyCodeDetail(groupCode , codeValue, codeName)
            history.push(`/codedetail/read/${groupCode}/${codeValue}`);
        } catch (e) {
            console.error(e)
        }
    }

    const {codeDetail, isLoading} = useSelector(({codedetail, loading}) => ({
        codeDetail: codedetail.codeDetail,
        isLoading: loading[FETCH_ONE],
    }))

    useEffect(()=>{
        dispatch(fetchOne(groupCode, codeValue))
    },[groupCode, codeValue, dispatch])

    return (
        <CodeDetailModifyForm codeDetail={codeDetail} isLoading={isLoading} onModify={onModify} />
    )
}

export default CodeDetailModifyContainer