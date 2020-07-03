import React, { Fragment } from 'react';

export default function Wrapper(props) {
    const { children } = props;
    return (
        <Fragment>
            {children}
        </Fragment>
    )
}