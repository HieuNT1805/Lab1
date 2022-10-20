import * as React from 'react';

const MyBotton = ({disabled, text}) =>(
    <button disabled={disabled}>{text}</button>
);

MyBotton.defaultProps = {
    text:"My Button",
    disabled: false,
};

export default MyBotton;