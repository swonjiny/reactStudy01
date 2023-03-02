import {withRouter} from "react-router-dom";
import PdsRead from "../../components/pds/PdsRead";
import {useDispatch, useSelector} from "react-redux";
import {isAdmin as selectIsAdmin} from "../../modules/selector";
import {FETCH_ONE, fetchAttachList, resetAttach, fetchOne} from "../../modules/pds";
import {useCallback, useEffect} from "react";
import * as api  from "../../lib/api";
const PdsReadContainer = ({ itemId, history }) => {
    const dispatch = useDispatch();
    const { pdsItem, attachments, isLoading, isAdmin } = useSelector((state) => ({
        pdsItem: state.pds.pdsItem,
        attachments: state.pds.attachments,
        isLoading: state.loading[FETCH_ONE],
        isAdmin: selectIsAdmin(state),
    }));

    const onRemove = async () => {
        try {
            await api.removePds(itemId);
            history.push("/pds");
        } catch (e) {
            console.error(e)
        }
    };

    const getAttachList = useCallback(async () => {
        try {
            const response = await fetchAttachList(itemId);
            await dispatch(api.fetchAttachList(response.data));
        } catch (e) {
            throw e;
        }
    }, [dispatch, itemId]);

    useEffect(() => {
        dispatch(fetchOne(itemId));
    }, [dispatch, itemId]);

    useEffect(() => {
        getAttachList().then(r => r);

        return () => {
            dispatch(resetAttach());
        };
    }, [dispatch, getAttachList]);
    return (
        <PdsRead pdsItem={} itemId={itemId} isLoading={} isAdmin={} attachments={} onRemove={}/>
    )
}

export default withRouter(PdsReadContainer);