import React from 'react';

class Content extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const data = this.props.data;
    const selectTabNumber = this.props.selectTabNumber

    const contList = data.map((v, i) => {
      if(selectTabNumber === i){
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

export default Content;
