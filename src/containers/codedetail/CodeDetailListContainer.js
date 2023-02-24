import {useDispatch} from "react-redux";
import CodeDetailList from "../../components/codedetail/CodeDetailList";

const CodeDetailListContainer = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <CodeDetailList codeDetails={[]} isLoading={true}/>
        </div>
    )
}

export default CodeDetailListContainer