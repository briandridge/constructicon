import React, { PropTypes } from 'react'
import { withStyles } from '../../lib/css'
import styles from './styles'
import Button from '../button'

const SearchResult = ({
  image,
  subtitle,
  title,
  url,
  button,
  cta,
  classNames
}) => (
  <li className={classNames.root}>
    {image && (
      <div>
        <img src={image} className={classNames.avatar} />
      </div>
    )}
    <div className={classNames.titles}>
      <h4 className={classNames.title}>{title}</h4>
      {subtitle && <h6 className={classNames.subtitle}>{subtitle}</h6>}
    </div>
    <div>
      <Button
        tag='a'
        href={url}
        children={cta}
        {...button}
      />
    </div>
  </li>
)

SearchResult.propTypes = {
  /**
  * Image URL
  */
  image: PropTypes.string,

  /**
  * Name of the result to display
  */
  title: PropTypes.string.isRequired,

  /**
  * Additional text to display below the title
  */
  subtitle: PropTypes.string,

  /**
  * The URL for the page
  */
  url: PropTypes.string,

  /**
  * Props to be passed into the button
  */
  button: PropTypes.object,

  /**
  * The button text
  */
  cta: PropTypes.string
}

SearchResult.defaultProps = {
  cta: 'Support'
}

export default withStyles(styles)(SearchResult)