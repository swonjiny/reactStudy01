import ItemRegisterForm from "../../components/item/ItemRegisterForm";
import {writeItem} from "../../lib/api";
import {withRouter} from "react-router-dom";

const ItemRegisterContainer = ({history}) => {
    const onRegister = async (itemName, price, description, file, previewFile) => {
        try {
            const itemObject = {
                itemName : itemName,
                price : price,
                description : description
            }

            let formData = new FormData()
            formData.append("file", file)
            formData.append("file2", previewFile)
            formData.append("item",JSON.stringify(itemObject))

            const response = await writeItem(formData);
            alert("등록이 완료되었습니다.");

            history.push("/item/read/" + response.data.itemId);
        } catch (e) {
            console.error(e)
        }
    };
    return (
        <ItemRegisterForm onRegister={onRegister} />
    )
}
export default withRouter(ItemRegisterContainer)