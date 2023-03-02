import ItemModifyForm from "../../components/item/ItemModifyForm";
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {FETCH_ONE, fetchOne} from "../../modules/item";
import {modifyItem} from "../../lib/api";
import {useEffect} from "react";

const ItemModifyContainer = ({ itemId, history }) => {
    const dispatch = useDispatch();
    const { item, isLoading } = useSelector(({ item, loading }) => ({
        item: item.item,
        isLoading: loading[FETCH_ONE],
    }));

    const onModify = async (itemId, itemName, price, description, file, previewFile) => {
        const itemObject = {
            itemId : itemId,
            itemName : itemName,
            price : price,
            description : description
        }

        let formData = new FormData()

        formData.append("file", file)
        formData.append("file2", previewFile)
        formData.append("item",JSON.stringify(itemObject))

        try {
            await modifyItem(itemId, formData);
            alert("수정이 완료되었습니다.");
            history.push("/item/read/" + itemId);
        } catch (e) {
            console.error(e)
        }
    };

    useEffect(() => {
        dispatch(fetchOne(itemId));
    }, [dispatch, itemId]);

    return (
        <ItemModifyForm isLoading={isLoading} onModify={onModify} item={item} />
    )
}

export default withRouter(ItemModifyContainer)