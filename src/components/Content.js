import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'


export default class Content extends Component{
   constructor(props) {
      super(props)
   
      this.state = {
         beers: []
      }
   }
   
   getBeers = async() => {
      try {
         await axios.get('https://api.punkapi.com/v2/beers').then(({data})=>{
            this.setState({beers: data})
         })
      } catch (error) {
         console.log(error)
      }
   }

   componentDidMount(){
      this.getBeers()
   }

   render(){
      const { beers } = this.state
      return (
         <div>
            {beers.map(beer=>{
               return (
                  <>
                     <Card key={beer.id} data={beer}/>
                     <hr />
                  </>
               )
            })}
         </div>
      )
   }
}
