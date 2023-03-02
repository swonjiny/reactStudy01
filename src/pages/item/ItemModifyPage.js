import MainLayout from "../../layout/MainLayout";
import ItemModifyContainer from "../../containers/item/ItemModifyContainer";

const ItemModifyPage = ({ match }) => {
  const { itemId } = match.params;
  return (
      <MainLayout>
        <ItemModifyContainer itemId={itemId}/>
      </MainLayout>
  )
}

export default ItemModifyPage