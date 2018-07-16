/**
 * NoticeIcon Component Demo for uxcore
 * @author Amanda111
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import NoticeIcon from '../src';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  onBottomClick(){
    console.log("Bottom action bar is clicked")
  }
  onTopClick(){
    console.log("Top action is activated")
  }
  onVisibleChange(isDisplay){
    console.log(isDisplay)
  }
  render() {
    let topAction = <span onClick={this.onTopClick}>操作</span>
    // let bottomAction = [{"text":"查看通知","action":function(){console.log("Left Clicked")}},
    //                     {"text":"查看通知","action":function(){console.log("Middle Clicked")}},
    //                     {"text":"查看通知","action":function(){console.log("Right Clicked")}}]
    let bottomAction = {"text":"查看通知","action":function(){console.log("Clicked")}}
    // let bottomAction = _ => <Button/>
    return (
      <div>
        <NoticeIcon>
          {/* <div style={{width:'100%',height:'100px'}}></div>
          <div style={{width:'100%',height:'100px'}}></div>
          <div style={{width:'100%',height:'100px'}}></div>
          <div style={{width:'100%',height:'100px'}}></div>
          <div style={{width:'100%',height:'100px'}}></div>
          <div style={{width:'100%',height:'100px'}}></div>
          <div style={{width:'100%',height:'100px'}}></div>
          <div style={{width:'100%',height:'100px'}}></div> */}
        </NoticeIcon>
      </div>
    );
  }
}

export default Demo;
