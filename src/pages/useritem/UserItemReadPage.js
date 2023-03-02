import MainLayout from "../../layout/MainLayout";
import UserItemReadContainer from "../../containers/useritem/UserItemReadContainer";

const UserItemReadPage = ({ match }) => {
    const { userItemNo } = match.params;
    return (
        <MainLayout>
            <UserItemReadContainer userItemNo={userItemNo}/>
        </MainLayout>
    )
}

export default UserItemReadPage