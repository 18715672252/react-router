const Mine = (props) => {
    console.log(props)
    return (
        <div>
            Mine-{props.match.params.id}-{props.match.params.name}
        </div>
    )
}
export default Mine