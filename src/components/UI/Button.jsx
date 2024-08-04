export default function Button({ children, text, amount, action, classes, ...props }) {
    return (
        <button
            className={classes}
            onClick={action}
            {...props}
        >
            {text} {amount ? `(${amount})` : ""}
        </button>
    )
}