

const Button = ({ className, text, color, size }) => {
    const colorVariants = {
        blue: 'text-white border-2 border-blue bg-blue',
        white: 'text-blue-200 border-2 border-transparent bg-white',
        transparent: 'text-white border-2 border-white bg-transparent'
    }

    const sizeVariants = {
        sm: 'h-4 px-1 text-sm font-bold rounded-sm',
        sm2: 'h-4 px-2 text-sm font-bold rounded-sm',
        md: 'h-4.5 px-1.5 text-md font-bold rounded-sm',
    }

    const classList = `cursor-pointer ${colorVariants[color]} ${sizeVariants[size]} ${className}`

    return (
        <button className={classList}>
            {text}
        </button>
    )
}

export { Button }