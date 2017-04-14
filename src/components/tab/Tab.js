import React from 'react';
import Header from './Header'
import Content from './Content'

//import { connect } from 'react-redux';

//import axios from 'axios';

class Tab extends React.Component{
  /*
  constructor(){
    super();

    this.state = {

      data : [
        {
          "title" : "tab01",
          "content" : "이곳은 tab01의 콘텐트 내용입니다."
        },
        {
          "title" : "tab02",
          "content" : "이곳은 tab02의 콘텐트 내용입니다."
        }
      ],
      data : [],
      selectTabNumber : 0
    }
    this.selectTab = this.selectTab.bind(this);

  }
  */
/*
  selectTab(number){
    this.setState({"selectTabNumber" : number})
  }
  */
/*
  componentDidMount(){
    axios.get("http://localhost:7777/data.json")
    .then(response =>{
      this.setState({data : response.data})
    })
  }
*/

  render(){
    return (
      <section className="tab">
        <Header/>
        <Content/>
      </section>
    )
  }
}

export default Tab;
