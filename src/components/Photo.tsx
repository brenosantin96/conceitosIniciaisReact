import {Children, ReactNode} from 'react'

type Props = {
    url?: string;
    legend: string;
    children: ReactNode
}

export const Photo = (props: Props) => {
    return(
        <div>
            {props.children}
            <p>{props.legend}</p>
        </div>
    )
}