import UserItemList from "../../components/useritem/UserItemList";
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {FETCH_LIST} from "../../modules/useritem";
import {useEffect} from "react";
import {fetchList} from "../../modules/pds";
import {downloadUserItem} from "../../lib/api";

const UserItemListContainer = ({ history }) => {
    const dispatch = useDispatch();

    const { userItems, isLoading } = useSelector(state => ({
        userItems: state.useritem.userItems,
        isLoading: state.loading[FETCH_LIST],
    }));

    const onDownload = async (userItemNo) => {
        try {
            const response = await downloadUserItem(userItemNo);
            const contentDisposition = response.request.getResponseHeader("Content-Disposition")
            const downloadFilename = contentDisposition.substring(22, contentDisposition.length - 1)
            const decodedDownloadFilename = decodeURIComponent(escape(downloadFilename))
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', decodedDownloadFilename)
            document.body.appendChild(link)
            link.click()
        } catch (e) {
            console.error(e)
        }
    };

    useEffect(() => {
        dispatch(fetchList());
    }, [dispatch]);

    return (
        <UserItemList isLoading={isLoading} userItems={userItems} onDownload={onDownload()} />
    )
}

export default withRouter(UserItemListContainer)