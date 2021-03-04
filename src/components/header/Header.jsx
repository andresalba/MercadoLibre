import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Header.scss'

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      msn: '',
    }
    this.captureMsn = this.captureMsn.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch('https://api.mercadolibre.com/sites/MLA/search?q= :query').then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('Request Failed')
    }, (networkError) => console.log(networkError.message)).then((jsonRes) => {
    //   console.log(jsonRes)
    })
  }

  captureMsn(event) {
    this.setState({ msn: event.target.value })
    console.log('capture ', this.state.msn)
    console.log('state es ', this.state)
  }

  handleSubmit(event) {
    event.preventDefault()
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${this.state.msn}`).then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('Request Failed')
    }, (networkError) => console.log(networkError.message)).then((jsonRes) => {
      console.log(jsonRes.results[0])
      this.props.dispatch(
        {
          type: 'makeSearch',
          payload: jsonRes.results,
        },
      )
    })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="head">
        <img id="logo" src="/img/meliLogo1.png" alt="Logo" className="head__logo" />
        <form type="submit" onSubmit={this.handleSubmit} className="head__form">
          <input type="text" placeholder="Nunca dejes de buscar" id="search" onChange={this.captureMsn} className="head__form__search" />
          <input type="image" src="/img/lupa3.png" alt="Lupa" className="head__form__lupa" />
        </form>
      </div>
    )
  }

}

export default connect()(Header)
