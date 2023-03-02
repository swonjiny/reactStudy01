import MainLayout from "../../layout/MainLayout";
import MemberReadContainer from "../../containers/member/MemberReadContainer";

const MemberReadPage = ({ match }) => {
    const { userNo } = match.params;
    return (
        <MainLayout>
            <MemberReadContainer userNo={userNo} />
        </MainLayout>
    )
}

export default MemberReadPage