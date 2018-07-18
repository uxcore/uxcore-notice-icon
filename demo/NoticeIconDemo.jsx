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
      text: 'hahah',
    };
  }
  onBottomClick= () => {
    console.log('Bottom action bar is clicked');
  }
  onTopClick = () => {
    console.log('Top action is activated');
  }
  onVisibleChange = (isDisplay) => {
    console.log(isDisplay);
  }
  onIconClick = (text) => {
    console.log(text);
  }
  render() {
    const topAction = <span onClick={this.onTopClick}>操作</span>;
    // const bottomAction = [{"text":"查看通知","action":function(){console.log("Left Clicked")}},
    //                     {"text":"查看通知","action":function(){console.log("Middle Clicked")}},
    //                     {"text":"查看通知","action":function(){console.log("Right Clicked")}}]
    // const bottomAction = { text: '查看通知', action() { console.log('Clicked'); } };
    // const bottomAction = _ => <Button/>
    return (
      <NoticeIcon
        overlayClassName="test-popover"
        emptyIcon="active_empty"
        topAction={topAction}
        className="test"
        dot
      >
        {/* <div style={{width:'100%',height:'100px'}}></div>
        <div style={{width:'100%',height:'100px'}}></div>
        <div style={{width:'100%',height:'100px'}}></div>
        <div style={{width:'100%',height:'100px'}}></div>
        <div style={{width:'100%',height:'100px'}}></div>
        <div style={{width:'100%',height:'100px'}}></div>
        <div style={{width:'100%',height:'100px'}}></div>
        <div style={{width:'100%',height:'100px'}}></div> */}
      </NoticeIcon>
    );
  }
}

export default Demo;
