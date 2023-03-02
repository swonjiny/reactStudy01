import UserItemRead from "../../components/useritem/UserItemRead";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {FETCH_ONE, fetchOne} from "../../modules/useritem";
import * as api from '../../lib/api'
const UserItemReadContainer = ({userItemNo}) => {
    const dispatch = useDispatch();

    const { userItem, isLoading } = useSelector(({ useritem, loading }) => ({
        userItem: useritem.userItem,
        isLoading: loading[FETCH_ONE],
    }));

    useEffect(() => {
        dispatch(fetchOne(userItemNo));
    }, [dispatch, userItemNo]);

    return (
        <UserItemRead userItems={userItem} isLoading={isLoading}/>
    )
}
export default UserItemReadContainer