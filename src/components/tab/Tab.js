import React from 'react';
import Header from './Header'
import Content from './Content'
import axios from 'axios';

class Tab extends React.Component{
  constructor(){
    super();
    this.state = {
      /*
      data : [
        {
          "title" : "tab01",
          "content" : "이곳은 tab01의 콘텐트 내용입니다."
        },
        {
          "title" : "tab02",
          "content" : "이곳은 tab02의 콘텐트 내용입니다."
        }
      ],*/
      data : [],
      selectTabNumber : 0
    }
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(number){
    this.setState({"selectTabNumber" : number})
  }

  componentDidMount(){
    axios.get("http://localhost:7777/data.json")
    .then(response =>{
      this.setState({data : response.data})
    })
  }


  render(){
    const data = this.state.data;

    const setHeaderData = data.map((v, i) =>{
      return v.title
    })

    const setContentData = data.map((v, i) =>{
      return v.content
    })

    return (
      <section className="tab">
        <Header
          data = {setHeaderData}
          selectTab = {this.selectTab}
          selectTabNumber = {this.state.selectTabNumber}
        />
        <Content
          data = {setContentData}
          selectTabNumber = {this.state.selectTabNumber}
        />
      </section>
    )
  }
}

export default Tab;
