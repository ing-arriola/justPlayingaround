import axios from 'axios'
import React, { Component } from 'react'

export default class App extends Component {

  state = {
    search:"",
    images:[], 
    loading:true
  }



  handleSearch = async () => {
    //axios get from giphy
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${this.state.search}&limit=10`)
    console.log(res.data.data)
    this.setState({images:res.data.data, loading:false})
  }

  render() {
    return (
      <>
        <input  placeholder='Que buscas' value={this.state.search}  onChange={ (e) => this.setState({search:e.target.value})} />
        <button onClick={this.handleSearch}>Buscar</button>
        {this.state.loading && this.state.images.length === 0 ? null : <h1>Cargando...</h1> }
        {!this.state.loading &&  <div>{JSON.stringify(this.state.images)}</div> }
      </>
    )
  }
}
