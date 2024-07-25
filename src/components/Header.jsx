export default function Header({amount}) {

    return (
        <header id="main-header">
            <h1 id="title">
                <img src="../../public/logo.jpg" alt=""/>
                REACT FOODORDER
            </h1>
            <button type="button" className="text-button">Cart{amount}</button>
        </header>
    )
}