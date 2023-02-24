import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
const ItemModifyForm = ({item, isLoading, onModify}) => {
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [previewFile, setPreviewFile] = useState(null);
    const [description, setDescription] = useState("");
    const handleChangeItemName = useCallback((e) => {
        setItemName(e.target.value);
    }, []);

    const handleChangePrice = useCallback((e) => {
        setPrice(e.target.value);
    }, []);

    const handleChangeFile = useCallback((e) => {
        setFile(e.target.files[0]);
    }, []);

    const handleChangePreviewFile = useCallback((e) => {
        setPreviewFile(e.target.files[0]);
    }, []);

    const handleChangeDescription = useCallback((e) => {
        setDescription(e.target.value);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        onModify(item.itemId, itemName, price, description, file, previewFile);
    };

    useEffect(()=>{
        if(item) {
            setItemName(item.itemName);
            setPrice(item.price);
            setDescription(item.description);
        }
    },[item])
    return (
        <div align="center">
            <h2>상품 수정</h2>
            {isLoading && "로딩중..."}
            {!isLoading && item && (
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                        <tr>
                            <td>상품번호</td>
                            <td>
                                <input value={item.itemId} type="text" disabled />
                            </td>
                        </tr>
                        <tr>
                            <td>상품명</td>
                            <td>
                                <input type="text" value={itemName} onChange={handleChangeItemName} />
                            </td>
                        </tr>
                        <tr>
                            <td>상품가격</td>
                            <td>
                                <input type="text" value={price} onChange={handleChangePrice} />
                            </td>
                        </tr>
                        <tr>
                            <td>상품파일</td>
                            <td>
                                <input type="file" onChange={handleChangeFile} />
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>미리보기파일</td>
                            <td>
                                <input type="file" onChange={handleChangePreviewFile} />
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>상품설명</td>
                            <td>
                  <textarea
                      rows="5"
                      value={description}
                      onChange={handleChangeDescription}
                  ></textarea>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <div>
                        <button type="submit">수정</button>
                        <Link to={`/item/read/${item.itemId}`}>취소</Link>
                    </div>
                </form>
            )}
        </div>
    )
}

export default ItemModifyForm