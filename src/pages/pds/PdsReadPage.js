import MainLayout from "../../layout/MainLayout";
import PdsReadContainer from "../../containers/pds/PdsReadContainer";

const PdsReadPage = ({ match }) => {
    const { itemId } = match.params;
    return (
        <MainLayout >
            <PdsReadContainer itemId={itemId}/>
        </MainLayout>
    )
}

export default PdsReadPage