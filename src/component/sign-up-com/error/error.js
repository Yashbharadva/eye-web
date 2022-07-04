import React from 'react';

const ErrorText = (props) => {
    const { error } = props;

    if (error === '') return null;

    return (
        <div className="text-danger fs-4 mx-auto" style={{ width: "200px", color: "red"}}>
            {error}
        </div>
    );
}

export default ErrorText;