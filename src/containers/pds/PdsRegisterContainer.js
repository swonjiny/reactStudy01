import PdsRegisterForm from "../../components/pds/PdsRegisterForm";
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as api from "../../lib/api";
import {addAttach, removeAttach} from "../../modules/pds";
import {useCallback} from "react";

const PdsRegisterContainer = ({ history }) => {
    const dispatch = useDispatch()
    const { attachments } = useSelector(state => ({
        attachments: state.pds.attachments,
    }));
    const onRegister = async (itemName, description) => {
        const itemObject = {
            itemName : itemName,
            description : description,
            files : attachments
        }

        try {
            const response = await api.writePds(itemObject);
            history.push("/pds/read/" + response.data.itemId);
        } catch (e) {
            console.error(e)
        }
    };

    const onAddAttach = async (file) => {
        try {
            let formData = new FormData()
            formData.append("file", file)
            const response = await api.addAttach(formData);
            const attach = response.data;
            dispatch(addAttach(attach));
        } catch (e) {
            console.error(e)
        }
    };

    const onRemoveAttach = useCallback(index => {
        dispatch(removeAttach(index));
    }, []);

    return (
        <PdsRegisterForm attachments={attachments} onRemoveAttach={onRemoveAttach} onAddAttach={onAddAttach} onRegister={onRegister} />
    )
}

export default withRouter(PdsRegisterContainer);