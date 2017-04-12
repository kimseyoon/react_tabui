import React from 'react';

class MyBlog extends React.Component{
  constructor(){
    super();
    this.state = {
      posts :[
        {
          "title" : "mbc"
        },
        {
          "title" : "sbs"
        }
      ],
      showLog : false,
      selectedNumber : 0
    };
  }

  addCount(number){
    number++;
    this.setState({'showLog' : true, 'selectedNumber' : number});
  }

  render(){
    let data = this.state.posts;
    let currentNumber;

    let myHTML = data.map((v, i) => {
      return (<li key={i} onClick = {this.addCount.bind(this, i)}>{v.title}</li>)
    })

    const bShow = this.state.showLog;

    if(bShow){
      currentNumber = this.state.selectedNumber;
    }

    return(
      <div>
        <h2>Myblog post</h2>
        <ul>
          {myHTML}
        </ul>
        {(bShow) ? (<div>{currentNumber} 번째 li가 선택</div>) : (<div></div>)}
      </div>
    )
  }
}

export default MyBlog;
