import CodeGroupModifyContainer from "../../containers/codegroup/CodeGroupModifyContainer";
import MainLayout from "../../layout/MainLayout";

const CodeGroupModifyPage = ({match}) => {
    const { groupCode } = match.params
  return (
      <MainLayout>
        <CodeGroupModifyContainer groupCode={groupCode}/>
      </MainLayout>
  )
}
export default CodeGroupModifyPage