export interface PaginaConviteProps {
    params: {
        alias: string
    }
}

export default function PageConvite (props:PaginaConviteProps) {

    console.log(props)
    
    return (
        <div>
            {props.params.alias}
        </div>
    )
}