import MainLayout from "../../layout/MainLayout";
import PdsModifyContainer from "../../containers/pds/PdsModifyContainer";

const PdsModifyPage = ({ match }) => {
    const { itemId } = match.params;
    return (
        <MainLayout>
            <PdsModifyContainer itemId={itemId}/>
        </MainLayout>
    )
}
export default PdsModifyPage