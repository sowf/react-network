import React, {useState} from "react";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    let activateEditMode = () => {
        setEditMode(true);
    };
    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    };
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <>
            {!editMode && (
                <div className="mt-1" onDoubleClick={activateEditMode}>
                    {status
                        ? status
                        : "Статус не установлен"}
                </div>
            )}
            {editMode && (
                <input
                    onChange={onStatusChange}
                    autoFocus
                    onBlur={deactivateEditMode}
                    value={status}
                    class="form-control w-50"
                ></input>
            )}
        </>
    );
};

export default ProfileStatus