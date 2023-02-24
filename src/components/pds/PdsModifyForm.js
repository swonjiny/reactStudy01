import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
const PdsModifyForm = ({ pdsItem, attachments, isLoading, onModify, onAddAttach, onRemoveAttach,}) => {
    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const handleChangeItemName = (e) => {
        setItemName(e.target.value);
    };

    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleChangeFile = useCallback((e) => {
        onAddAttach(e.target.files[0]);
    }, [onAddAttach]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onModify(pdsItem.itemId, itemName, description);
    };
    const getOriginalName = (fileName) => {
        const idx = fileName.indexOf("_") + 1
        return fileName.substr(idx)
    };

    const removeAttach = (index) => {
        onRemoveAttach(index);
    };
    useEffect(() => {
        if(pdsItem) {
            setItemName(pdsItem.itemName);
            setDescription(pdsItem.description);
        }
    }, [pdsItem]);

    return (
        <div align="center">
            <h2>공개자료실 수정</h2>
            {isLoading && "로딩중"}
            {!isLoading && pdsItem && (
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                        <tr>
                            <td>자료번호</td>
                            <td>
                                <input value={pdsItem.itemId} type="text" disabled />
                            </td>
                        </tr>
                        <tr>
                            <td>자료명</td>
                            <td>
                                <input type="text" value={itemName} onChange={handleChangeItemName} />
                            </td>
                        </tr>
                        <tr>
                            <td>파일</td>
                            <td>
                                <input type="file" onChange={handleChangeFile} />
                                <div>
                                    {attachments.map((attachment, index) => (
                                        <div key={index}>{getOriginalName(attachment)}<span onClick={() => removeAttach(index)}>X</span></div>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>자료설명</td>
                            <td>
                              <textarea
                                  rows="5"
                                  value={description}
                                  onChange={handleChangeDescription}
                              />
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <div>
                        <button type="submit">수정</button>
                        <Link to={`/pds/read/${pdsItem.itemId}`}>취소</Link>
                    </div>
                </form>
            )}
        </div>
    )
}

export default PdsModifyForm