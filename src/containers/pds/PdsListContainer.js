import PdsList from "../../components/pds/PdsList";
import {useDispatch, useSelector} from "react-redux";
import {isAdmin as selectIsAdmin} from "../../modules/selector";
import {FETCH_LIST, fetchList} from "../../modules/pds";
import {useEffect} from "react";

const PdsListContainer = () => {
    const dispatch = useDispatch();

    const { pdsItems, isLoading, isAdmin } = useSelector((state) => ({
        pdsItems: state.pds.pdsItems,
        isLoading: state.loading[FETCH_LIST],
        isAdmin: selectIsAdmin(state),
    }));
    useEffect(() => {
        dispatch(fetchList)
    }, [dispatch]);

    return (
        <PdsList pdsItems={pdsItems} isLoading={isLoading} isAdmin={isAdmin} />
    )
}

export default PdsListContainer