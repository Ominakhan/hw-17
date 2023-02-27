const Link = ({children, onClick, path}) => {
    const clickHandler = (event) => {
        event.preventDefault();
        onClick();
    };

    return (
        <a onClick={clickHandler}>{children}</a>
    );

};

export default Link;