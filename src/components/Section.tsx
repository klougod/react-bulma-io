import React from 'react'
import PropTypes from 'prop-types'

export const Section = ({ className, children }: any) => (
  <section className={`section ${className}`}>{children}</section>
)

Section.defaultProps = {
  className: ''
}

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Section
