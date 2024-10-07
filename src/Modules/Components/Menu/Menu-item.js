const MenuItem = ({
    props = {}
}) => {
    return (
        <span
            className={`menu-item button ${props.active
                ? 'activeSection'
                : ''}`}
            onClick={props.func}>
            {props.name}
        </span>
    );
}

export default MenuItem;

