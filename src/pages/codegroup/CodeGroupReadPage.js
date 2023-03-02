import CodeGroupReadContainer from "../../containers/codegroup/CodeGroupReadContainer";
import MainLayout from "../../layout/MainLayout";

const CodeGroupReadPage = ({match}) => {
  const { groupCode } = match.params;
  return(
      <MainLayout>
        <CodeGroupReadContainer groupCode={groupCode}/>
      </MainLayout>
  )
}

export default CodeGroupReadPage