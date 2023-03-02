import ItemRead from "../../components/item/ItemRead";
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import {isAdmin as selectIsAdmin} from "../../modules/selector";
import {FETCH_ONE, fetchOne} from "../../modules/item";
import {useEffect} from "react";
import {buyItem, removeItem} from "../../lib/api";

const ItemReadContainer = ({ itemId, history }) => {
    const dispatch = useDispatch();

    const { item, isLoading, isAdmin } = useSelector((state) => ({
        item: state.item.item,
        isLoading: state.loading[FETCH_ONE],
        isAdmin: selectIsAdmin(state),
    }));

    const onRemove = async () => {
        try {
            await removeItem(itemId);
            history.push("/item");
        } catch (e) {
            console.error(e)
        }
    };

    const onBuy = async () => {
        try {
            const response = await buyItem(itemId);

            alert(response.data);
        } catch (e) {
            console.error(e)
        }
    };

    useEffect(() => {
        dispatch(fetchOne(itemId));
    }, [dispatch, itemId]);

    return (
        <ItemRead isLoading={isLoading} itemId={itemId} item={item} isAdmin={isAdmin} onBuy={onBuy} onRemove={onRemove} />
    )
}

export default withRouter(ItemReadContainer)