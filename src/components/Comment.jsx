import PropTypes from "prop-types"

const Comment = ({ className, classTitle, classText, title, text, colorTitle, colorText, sizeTitle, sizeText }) => {
    const colorVariantsTitle = {
        blue: 'text-blue-200',
        white: 'text-white',
    }
    
    const colorVariantsText = {
        'blue-100': 'text-blue-100',
        'white': 'text-white'
    }
    
    const sizeVariants = {
        sm: 'text-sm',
        md: 'text-md',
        bs: 'text-base font-bold',
        lg: 'text-lg font-bold'
    }

    const classListTitle = `${colorVariantsTitle[colorTitle]} ${sizeVariants[sizeTitle]} ${classTitle}`
    const classListText = `${colorVariantsText[colorText]} ${sizeVariants[sizeText]} ${classText}`

    return (
        <article className={`text-center ${className}`}>
            <h2 className={classListTitle}>{title}</h2>
            <p className={classListText}>{text}</p>
        </article>
    )
}

Comment.defaultProps = {
    className: '',
    classTitle: '',
    classText: '',
    colorTitle: 'blue',
    colorText: 'blue-100'
}

Comment.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    sizeTitle: PropTypes.string.isRequired,
    sizeText: PropTypes.string.isRequired,
}

export { Comment }