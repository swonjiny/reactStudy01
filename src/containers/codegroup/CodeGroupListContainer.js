import CodeGroupList from "../../components/codegroup/CodeGroupList";
import {useDispatch, useSelector} from "react-redux";
import {FETCH_LIST, fetchList} from "../../modules/codeGroup";
import {useEffect} from "react";

const CodeGroupListContainer = () => {
    const dispatch = useDispatch()

    const {codeGroups, isLoading} = useSelector(({codegroup, loading}) => ({
        codeGroups: codegroup.codeGroups,
        isLoading: loading[FETCH_LIST],
    }))

    useEffect(() => {
        dispatch(fetchList());
    }, [dispatch]);

    return <CodeGroupList isLoading={isLoading} codeGroups={codeGroups}></CodeGroupList>
}

export default CodeGroupListContainer