import MainLayout from "../../layout/MainLayout";
import CodeDetailModifyContainer from "../../containers/codedetail/CodeDetailModifyContainer";

const CodeDetailModifyPage = ({ match }) => {
    const { groupCode, codeValue } = match.params;
  return (
      <MainLayout>
        <CodeDetailModifyContainer codeValue={codeValue} groupCode={groupCode}/>
      </MainLayout>
  )
}

export default CodeDetailModifyPage