
const Item = ({ className = '', text, color = 'white', size = 'sm' }) => {
    const colorVariants = {
        'white-100': 'text-white tracking-widest border-blue-100 first-of-type:border-t child:border-b'
    }

    const sizeVariants = {
        sm: 'text-sm',
        bs: 'text-base py-1'
    }
    const classList = `${colorVariants[color]} ${sizeVariants[size]} ${className}`

    return (
        <li className={classList}>
            {text}
        </li>
    )
}

export { Item }