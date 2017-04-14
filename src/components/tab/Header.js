import React from 'react';

import { connect } from 'react-redux';
import { selectTabNumber } from '../../actions';

class Header extends React.Component{
  render(){
    const data = this.props.data;
    const selectedTabNumber= this.props.selectedTabNumber;

    const titleData = data.map((v,i) => {
      return (v.title)
    })

    const list = titleData.map((v, i) => {
      if(selectedTabNumber === i){
        return(<li className="select" onClick={this.props.selectTabNumber.bind(this, i)} key={i}>{v}</li>)
      }
      return (<li onClick={this.props.selectTabNumber.bind(this, i)} key={i}>{v}</li>)
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

let mapStateToProps = (state) => {
  return {
    data : state.tab.data,
    selectedTabNumber : state.tab.selectedTabNumber
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    selectTabNumber : (index) => dispatch(selectTabNumber(index))
  }
}

Header = connect(mapStateToProps, mapDispatchToProps)(Header);

export default Header;
