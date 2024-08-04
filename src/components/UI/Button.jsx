export default function Button({ children, onClick, classes, ...props }) {
    return (
        <button
            className={classes}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}