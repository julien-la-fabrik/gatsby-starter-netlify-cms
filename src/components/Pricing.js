import React from 'react'
import PropTypes from 'prop-types'

const Pricing = ({ data }) => (
  <div className="uk-grid uk-child-width-expand@s">
    {data.map(price => (
      <div key={price.plan} >
        <div className="uk-card uk-card-default uk-card-small uk-card-body">
          <h3 className="uk-card-title">{price.plan}</h3>
          <h2 className="">
            ${price.price}
          </h2>
          <p>{price.description}</p>
          <ul className="uk-list">
            {price.items.map(item => (
              <li key={item} className="is-size-5">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
)

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Pricing
