export default function Button({text, amount, action, classes, ...props}) {
    return (
        <button className={classes} onClick={action}>
            {text} {amount ? `(${amount})` : ""}
        </button>
    )
}