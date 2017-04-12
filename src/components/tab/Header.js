import React from 'react';

class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const data = this.props.data;
    const selectTabNumber= this.props.selectTabNumber;

    const list = data.map((v, i) => {
      if(selectTabNumber === i){
        return(<li className="select" key={i} onClick={this.props.selectTab.bind(this, i)}>{v}</li>)
      }
      return (<li key={i} onClick={this.props.selectTab.bind(this, i)}>{v}</li>)
    })

    return (
      <header>
        <ul>
          {list}
        </ul>
      </header>
    )
  }
}

export default Header;
