function Button({ onClick, title, children }) {
    return (
        <button
            className='button__icon'
            onClick={onClick}
            title={title}
        >
            {children}
        </button>
    );
}

export default Button;