

const Input = ({ className, type, value, color, size, name, id, placeholder, label, children, onClick, onChange, }) => {
    const colorVariants = {
        red: 'text-white border-2 border-red cursor-pointer bg-red',
        slate: 'text-slate-400 border border-transparent bg-white placeholder-gray-400 focus:ring-1 focus:ring-transparent invalid:border-red invalid:focus:ring-red',
    }

    const sizeVariants = {
        sm: 'h-4 px-1 text-sm rounded-sm',
        sm2: 'h-4 px-1 text-sm font-bold rounded-sm',
    }
    const classList = `focus:outline-none ${colorVariants[color]} ${sizeVariants[size]} ${className}`

    return (
        <label htmlFor={id}>
            {label && <span className="text-sm block">{label}</span>}
            <input className={classList} type={type} value={value} id={id} name={name ?? id} placeholder={placeholder} onClick={onClick} onChange={onChange} />
            {children}
        </label>
    )
}

Input.defaultProps = {
    className: '',
    type: 'text',
    placeholder: '...',
    onClick: () => {},
    onChange: () => {}
}

export { Input }