

const Button = ({ className, text, color, size }) => {
    const colorVariants = {
        blue: 'text-white border-2 border-blue bg-blue hover:text-blue hover:bg-white',
        white: 'text-blue-200 border-2 border-transparent bg-white hover:text-blue-200 hover:border-blue-200',
        transparent: 'text-white uppercase tracking-widest border-2 border-white bg-transparent base:font-normal base:border-red base:bg-red base:hover:text-red base:hover:bg-white'
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