import * as React from 'react';
import {Box, ButtonBase} from '@material-ui/core';

type Props = {
    backgroundColor?: string,
    color?:string,
    title: string,
    onSubmit: Function
}

const Button = ({backgroundColor, color, title, onSubmit }: Props) => (
    <ButtonBase
        style = {{
            minWidth: 80,
            padding: 10,
            backgroundColor: backgroundColor||"blue",
            color: color||"#fff",
            borderRadius: 8
        }}
        onClick = {() => onSubmit}
    >
        {title}
    </ButtonBase>

)

export default Button;
