

const LinkCompany = ({ className = '', classImg = '', companies = [] }) => {
    return (
        <figure className={className}>
            {companies.map((path, key) => <img className={classImg} key={key} src={path}  />)}
        </figure>
    )
}

export { LinkCompany }
