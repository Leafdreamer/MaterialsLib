import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchMaterials } from '../actions';

class MaterialsList extends Component {
  componentDidMount(){
    //fetch materials
    this.props.fetchMaterials()
  }


  renderList() {
    return this.props.materials.map(material => {
      return (
        //<Link to={`/MovieDetails/${movie.id}`}>
          //<li onClick={() => this.props.selectMovie(movie.id)} className="item" key={movie.id}>
            <h4>{material.name} - {material.amount}</h4>
          //</li>
        //</Link>
      )
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">               
          <h1>Materials:</h1>
          <ul>
            {this.renderList()}
          </ul>
        </div>
        <div className="col-1"></div>
    </div>
    )
  }

}

const mapStateToProps = (state) => {
  return { 
    materials: state.materials
  };
}

export default connect(mapStateToProps, {fetchMaterials})(MaterialsList);