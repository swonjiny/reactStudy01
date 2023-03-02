import MainLayout from "../../layout/MainLayout";
import CodeDetailReadContainer from "../../containers/codedetail/CodeDetailReadContainer";

const CodeDetailReadPage = ({match}) => {
    const { groupCode, codeValue } = match.params;
    return (
        <MainLayout>
            <CodeDetailReadContainer codeValue={codeValue} groupCode={groupCode}/>
        </MainLayout>
    )
}

export default CodeDetailReadPage