import React, { Fragment } from 'react';
import { ThemContext } from './../contexts/theme-context';
import { UserContext } from './../contexts/user-context';

export default function Content(props) {
    return (
        <ThemContext.Consumer>
            {theme => (
                <UserContext.Consumer>
                    {({ name }) => (
                        <Fragment>
                            <div>Theme: {theme}</div>
                            <div>Hello {name}</div>
                        </Fragment>
                    )}
                </UserContext.Consumer>
            )}
        </ThemContext.Consumer>
    )
}