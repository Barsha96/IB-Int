
const Links = ({linkto, desc}) => {
    return (
        <>
            <li className="nav-item"><a className="nav-link" href={linkto}>{desc}</a></li>
        </>
    )
}

export default Links
