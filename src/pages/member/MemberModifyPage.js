import MainLayout from "../../layout/MainLayout";
import MemberModifyContainer from "../../containers/member/MemberModifyContainer";

const MemberModifyPage = ({ match }) => {
    const { userNo } = match.params;
    return (
        <MainLayout>
            <MemberModifyContainer userNo={userNo} />
        </MainLayout>
    )
}

export default MemberModifyPage