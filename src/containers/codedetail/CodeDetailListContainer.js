import {useDispatch, useSelector} from "react-redux";
import CodeDetailList from "../../components/codedetail/CodeDetailList";
import {FETCH_LIST, fetchList} from "../../modules/codeDetail";
import {useEffect} from "react";

const CodeDetailListContainer = () => {
    const dispatch = useDispatch()

    const {codeDetails, isLoading} = useSelector(({codedetail, loading})=>({
        codeDetails: codedetail.codeDetails,
        isLoading: loading[FETCH_LIST],
    }))

    useEffect(()=>{
        dispatch(fetchList)
    },[dispatch])

    return (
        <div>
            <CodeDetailList codeDetails={codeDetails} isLoading={isLoading}/>
        </div>
    )
}

export default CodeDetailListContainer