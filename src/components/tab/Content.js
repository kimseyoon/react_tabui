import React from 'react';

import { connect } from 'react-redux'

class Content extends React.Component{

  render(){
    const data = this.props.data;
    const selectedTabNumber = this.props.selectedTabNumber

    const contentData = data.map((v,i) => {
      return (v.content)
    })

    const contList = contentData.map((v, i) => {
      if(selectedTabNumber === i){
        return(<div className="select cont" key={i}>{v}</div>)
      }
      return (<div className="cont" key={i}>{v}</div>)
    })

    return(
      <div className = "content">
        {contList}
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    data : state.tab.data,
    selectedTabNumber : state.tab.selectedTabNumber
  }
}

Content = connect(mapStateToProps)(Content);

export default Content;
