import React from 'react';

type proptype={
    children:React.ReactNode;
}

const PublicLayout:React.FC<proptype>= (props) => {
    return (
        <div>
            <div>{props?.children} </div>
        </div>
    );
};

export default PublicLayout;