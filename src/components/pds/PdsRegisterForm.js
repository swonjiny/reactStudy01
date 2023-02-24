import {useCallback, useState} from "react";

const PdsRegisterForm = ({ attachments, onRegister, onAddAttach, onRemoveAttach }) => {
    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");

    const handleChangeItemName = useCallback((e) => {
        setItemName(e.target.value);
    }, []);

    const handleChangeDescription = useCallback((e) => {
        setDescription(e.target.value);
    }, []);

    const handleChangeFile = useCallback((e) => {
        onAddAttach(e.target.files[0]);
    }, [onAddAttach]);

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();

            onRegister(itemName, description);
        },
        [itemName, description, onRegister]
    );

    const getOriginalName = (fileName) => {
        const idx = fileName.indexOf("_") + 1

        return fileName.substr(idx)
    };

    const removeAttach = (index) => {
        onRemoveAttach(index);
    };

    return (
        <div align="center">
            <h2>공개자료실 등록</h2>

            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
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
                ></textarea>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <div>
                    <button type="submit">등록</button>
                    <Link to="/pds">취소</Link>
                </div>
            </form>
        </div>
    )
}

export default PdsRegisterForm