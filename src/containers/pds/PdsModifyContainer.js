import {withRouter} from "react-router-dom";
import PdsModifyForm from "../../components/pds/PdsModifyForm";
import {useDispatch, useSelector} from "react-redux";
import {FETCH_ONE, removeAttach, resetAttach} from "../../modules/pds";
import {addAttach, fetchAttachList, modifyPds} from "../../lib/api";
import {useCallback, useEffect} from "react";

const PdsModifyContainer = ({ itemId, history }) => {
    const dispatch = useDispatch();
    const { pdsItem, attachments, isLoading } = useSelector(state => ({
        pdsItem: state.pds.pdsItem,
        attachments: state.pds.attachments,
        isLoading: state.loading[FETCH_ONE],
    }));

    const onModify = async (itemId, itemName, description) => {
        const itemObject = {
            itemId : itemId,
            itemName : itemName,
            description : description,
            files : attachments
        };

        try {
            await modifyPds(itemId, itemObject);
            history.push("/pds/read/" + itemId);
        } catch (e) {
            console.error(e)
        }
    };

    const onAddAttach = async (file) => {
        try {
            let formData = new FormData()
            formData.append("file", file)
            const response = await addAttach(formData);
            const attach = response.data;

            await dispatch(addAttach(attach));
        } catch (e) {
            console.error(e)
        }
    };

    const onRemoveAttach = (index) => {
        dispatch(removeAttach(index));
    };

    const getAttachList = useCallback(async () => {
        try {
            const response = await fetchAttachList(itemId);
            await dispatch(fetchAttachList(response.data));
        } catch (e) {
            throw e;
        }
    }, [dispatch, itemId]);

    useEffect(() => {
        getAttachList().then(r => r);
        return () => {
            dispatch(resetAttach());
        };
    }, [dispatch, getAttachList]);

    return (
        <PdsModifyForm isLoading={isLoading} onModify={onModify} pdsItem={pdsItem} attachments={attachments} onAddAttach={onAddAttach} onRemoveAttach={onRemoveAttach} />
    )
}

export default withRouter(PdsModifyContainer);
