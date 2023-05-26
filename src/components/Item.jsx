import { forwardRef } from "react"

const Item = forwardRef(({ className, text, color, size, children, onClick, onMouseDown }, ref) => {
    const colorVariants = {
        'blue-100': 'text-blue-100 border-b-2',
        'blue-200': 'text-blue-200',
        'white-100': 'text-white tracking-widest border-blue-100 first-of-type:border-t child:border-b'
    }

    const sizeVariants = {
        sm: 'text-sm',
        md: 'text-md',
        md2: 'pb-1 text-md',
        bs: 'py-1 text-base'
    }
    const classList = `${colorVariants[color]} ${sizeVariants[size]} ${className}`

    return (
        <li className={classList} ref={ref} onClick={onClick} onMouseDown={onMouseDown}>
            {text}
            {children}
        </li>
    )
})

Item.defaultProps = {
    className: '',
    color: 'white',
    size: 'sm',
    onClick: () => {},
    onMouseDown: () => {}
}

export { Item }