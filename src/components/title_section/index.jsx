import styles from './TitleSection.module.css'

import PropTypes from 'prop-types';

function TitleSection({ icon, title }) {
    return (
        <div className={styles.title_section}>
            {icon && <img src={icon} alt={`Ícone para ${title}`} />}
            
            <h2>{title}</h2>
        </div>
    )
}

TitleSection.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired
}

TitleSection.defaultProps = {
  icon: null
};


export default TitleSection