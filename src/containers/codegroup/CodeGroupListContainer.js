import CodeGroupList from "../../components/codegroup/CodeGroupList";
import {useDispatch, useSelector} from "react-redux";

const CodeGroupListContainer = () => {
    const dispatch = useDispatch()

    return <CodeGroupList></CodeGroupList>
}

export default CodeGroupListContainer