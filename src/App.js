import './App.css';
import axios from 'axios';

import React, { Component} from 'react'

export class App extends Component {
  
  constructor(props){
    super(props);
    this.state={firstNewsUrl:''};
    this.state={firstNewsAbstract:''};
    this.state={secondNewsUrl: ''};
    this.state={secondNewsAbstract:''};
    this.state={thirdNewsUrl:''};
    this.state={thirdNewsAbstract:''};
    this.state={value:''};
    this.state={query:''};
    this.search= this.search.bind(this);
    this.searching= this.searching.bind(this);

  }
  componentDidMount(){
  }
  
  search=(event)=>{
    this.setState({value: event.target.value});
    
    console.log(this.state.value);
  }
  searching=(event)=>{
    event.preventDefault();
    this.fetchAdvice();

    console.log('Searching NY Times');
    console.log("===========================");
  }
  fetchAdvice= () =>{
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.state.value}&api-key=RQOqil03Y7fkaSYiZXF77VT1XO3Vu8Ok`)
    .then((response)=>{
      const headlines1= response.data.response.docs[0].web_url;
      const headlinesAbstract= response.data.response.docs[0].abstract;
      const headlinesUrl= response.data.response.docs[1].web_url;
      const headlines2Abstract= response.data.response.docs[1].abstract;
      const headlinesUrl3= response.data.response.docs[2].web_url;
      const headlines3Abstract= response.data.response.docs[2].abstract;
      this.setState({firstNewsUrl:''+headlines1});
      this.setState({firstNewsAbstract:''+headlinesAbstract});
      this.setState({secondNewsUrl:''+headlinesUrl});
      this.setState({secondNewsAbstract:''+headlines2Abstract});
      this.setState({thirdNewsUrl:''+headlinesUrl3});
      this.setState({thirdNewsAbstract:''+headlines3Abstract});
      console.log(headlines1);
      console.log(headlinesUrl);
    }).catch((error)=>{
      console.log(Error);
    })
  }

  render() {
    return (
      <div className="App" style={{backgroundColor:'black',height:'1000px'}}>
        <input style={{width:'600px', margin:'5px'}} type="text" value={this.state.value} onChange={this.search} placeholder="Search The New York Times articles.. "/>
        <button style={{padding:'6px', margin:'3px', position:'relative', bottom:'2px'}} onClick={this.searching}>Submit</button>
       <h3> <a style={{color:'white' }} target='_blank' href={this.state.firstNewsUrl}>{this.state.firstNewsAbstract}</a></h3>
       <h3> <a style={{color:'white'}} target='_blank' href={this.state.secondNewsUrl}>{this.state.secondNewsAbstract}</a></h3>
       <h3> <a style={{color:'white'}} target='_blank' href={this.state.thirdNewsUrl}>{this.state.thirdNewsAbstract}</a></h3>

      </div>
    )
  }
}

export default App
