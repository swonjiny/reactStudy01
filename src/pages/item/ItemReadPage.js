import MainLayout from "../../layout/MainLayout";
import ItemReadContainer from "../../containers/item/ItemReadContainer";

const ItemReadPage = ({ match }) => {
    const { itemId } = match.params;
    return (
        <MainLayout>
            <ItemReadContainer itemId={itemId}/>
        </MainLayout>
    )
}
export default ItemReadPage