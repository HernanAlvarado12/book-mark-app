
const Span = ({ className, text, color, size }) => {
    const colorVariants = {
        'red-100': 'text-red',
        'blue-100': 'text-blue-100',
        'blue-200': 'text-blue-200',
        'white-invalid': 'text-white invisible italic rounded-b-sm transition-[margin] duration-300 -translate-y-0.5 bg-red peer-invalid:visible peer-invalid:mb-3'
    }

    const sizeVariants = {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-md',
        bs: 'text-base'
    }
    const classList = `block ${colorVariants[color]} ${sizeVariants[size]} ${className}`

    return (
        <span className={classList}>
            {text}
        </span>
    )
}

export { Span }
