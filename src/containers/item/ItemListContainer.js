import ItemList from "../../components/item/ItemList";
import {useDispatch, useSelector} from "react-redux";
import {FETCH_LIST, fetchList} from "../../modules/item";
import { isAdmin as selectIsAdmin } from "../../modules/selector";
import {useEffect} from "react";
const ItemListContainer = () => {
    const dispatch = useDispatch();

    const {items, isLoading, isAdmin} = useSelector((state) => ({
        items: state.item.items,
        isLoading: state.loading[FETCH_LIST],
        isAdmin: selectIsAdmin(state)
    }))

    useEffect(() => {
        dispatch(fetchList());
    }, [dispatch]);

    return (
       <ItemList isLoading={isLoading} items={items} isAdmin={isAdmin} />
    )
}

export default ItemListContainer