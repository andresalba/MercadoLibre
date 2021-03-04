/* eslint-disable camelcase */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react'
import './Detail.scss'

class Detail extends Component {

  componentDidMount() {
    const { id } = this.props.match.params
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((res) => res.json())
      .then((product) => {
        this.setState({ product })
        console.log('el product es ', product)
      })
  }

  render() {
    console.log('this.props.state', this.state?.dataJson)
    // eslint-disable-next-line camelcase
    //const { id, title, subtitle, price = 0, currency_id, thumbnail } = this.state.product
    const { id, title, subtitle, price = 0, currency_id, thumbnail, domain_id, condition, sold_quantity, attributes } = this?.state?.product || {}

    if (id) {
      return (
        <div className="detail" key={id}>
          <pre className="detail__title">{domain_id}</pre>
          <div className="detail__cont">
            <input type="image" src={thumbnail} alt="item" className="detail__cont__item" />
            <div className="detail__cont__desc">
              <p className="detail__cont__desc__subtitle">Descripción del producto</p>
              <ul className="detail__cont__desc__complete">
                <li className="detail__cont__desc__complete__li">{`${attributes[0].id}: ${attributes[0].value_name}`}</li>
                <li className="detail__cont__desc__complete__li">{`${attributes[1].id}: ${attributes[1].value_name}`}</li>
                <li className="detail__cont__desc__complete__li">{`${attributes[2].id}: ${attributes[2].value_name}`}</li>
                <li className="detail__cont__desc__complete__li">{`${attributes[3].id}: ${attributes[3].value_name}`}</li>
                <li className="detail__cont__desc__complete__li">{`${attributes[4].id}: ${attributes[4].value_name}`}</li>
              </ul>
            </div>
            <div className="detail__cont__buy">
              <p className="detail__cont__buy__sales">{`${condition} - ${sold_quantity} vendidos`}</p>
              <p className="detail__cont__buy__name">
                {title}
              </p>
              {subtitle && <p>{subtitle}</p>}
              <p className="detail__cont__buy__value">
                {`$${price} ${currency_id}`}
              </p>
              <button className="detail__cont__buy__button" type="button">Comprar</button>
            </div>
          </div>
        </div>
      )
    }
    return <>Loading...</>
  }
}

export default Detail
