import propTypes from 'prop-types';
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'blue':'green'} text={showAdd ? 'Close':'Add'} onClick={onAdd}/>
        </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracker',
}

// 'this will make the type set to the props so that other type values cant be inserted'
Header.propTypes = {
    title: propTypes.string.isRequired,
}

export default Header
