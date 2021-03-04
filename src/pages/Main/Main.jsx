import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductCard from '../../components/ProductCard/ProductCard'
import './Main.scss'

class Main extends Component {
  render() {
    const { search } = this.props
    //console.log('props es ', this.props)
    const { results } = search
    //console.log('search trae ', search)
    console.log('result tiene ', results)
    console.log('result[0] tiene ', results[0])
    return (
      <div className="main">
        <h2 className="main__title">{results[0]?.domain_id}</h2>
        {results.map((result) => (
          <ProductCard result={result} />
        ))}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Main)
