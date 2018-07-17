/**
 * NoticeIcon Component for uxcore
 * @author Amanda111
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import EmptyData from 'uxcore-empty-data'
import Popover from 'uxcore-popover';
import Icon from 'uxcore-icon';
import Badge from 'uxcore-badge';
import Button from 'uxcore-button';



class NoticeIcon extends React.Component {

  static defaultProps = {
    prefixCls: 'kuma-notice',
    icon:'xiaoxitixingfull',
    title:'通知',
    dot:false,
    count:0,
    overflowCount:99,
    placement:'bottomRight',
    trigger:'click',
    emptyText:'暂无数据',
    topAction:<span>操作</span>,
    bottomAction:{"text":"查看通知","action":()=>{}}
  };

  static propTypes = {
    prefixCls: PropTypes.string,
    overlayClassName: PropTypes.string,
    icon:PropTypes.string,
    title:PropTypes.string,
    dot:PropTypes.bool,
    count:PropTypes.number,
    overflowCount:PropTypes.number,
    placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right',
    'topLeft', 'bottomLeft', 'leftTop', 'rightTop', 'topRight', 'bottomRight',
    'leftBottom', 'rightBottom']),
    trigger: PropTypes.oneOf(['hover', 'click']),
    emptyIcon:PropTypes.oneOf(['access_restriction','acitve_empty','request_error','search_empty','unknown_error']),
    emptyText:PropTypes.string,
    topAction:PropTypes.element,
    bottomAction:PropTypes.oneOfType([PropTypes.object, PropTypes.func,PropTypes.array]),
    onVisibleChange:PropTypes.func,
    children:PropTypes.node
  };

  static displayName = 'NoticeIcon';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {prefixCls,icon,title,dot,count,overflowCount,placement,trigger,emptyText,topAction,bottomAction,emptyIcon,children,onVisibleChange,overlayClassName} = this.props
    
    // props of bottom action could be Function|Array Object|Object
    let type = Object.prototype.toString.call(bottomAction).slice(8,-1)
    let render
    if(type == 'Function'){
      render = bottomAction()
    }else if(type == 'Array'){
      let actionGroup = bottomAction.map((item,index) =>{
        return <div className={`${prefixCls}-bottom-text`} onClick={item.action} key={index}>{item.text}</div>
      })
      render =  (
        <div className={`${prefixCls}-bottom-wrap`}>
          {actionGroup}
        </div>
      )
    }else{
      render = (
          <div className={`${prefixCls}-bottom-wrap`}>
            <div className={`${prefixCls}-bottom-text`} onClick={bottomAction.action}>{bottomAction.text}</div>
          </div>
        )
      }
    
    // display emptydata
    let emptydata = (
      <EmptyData className={`${prefixCls}-empty`} {...(emptyIcon) ? {icon:emptyIcon} : {}}>
        <div style={{ lineHeight: 2 }}>
          <div className={`${prefixCls}-empty-text`}>{emptyText}</div>
        </div>
      </EmptyData>
    )

    // popover overlay
    let overlay = 
    (<div className={`${prefixCls}-container`}>
      <div className={`${prefixCls}-top`}>
        <div className={`${prefixCls}-top-info`}>
          <Icon name={icon} className={`${prefixCls}-dot ${prefixCls}-dot-small`}/>
          <span className={`${prefixCls}-title`}>{title}</span>
        </div>
        <div>
          {topAction}
        </div>
      </div>
      <div className={`${prefixCls}-list`}>
        {children?children:emptydata}
      </div>
      <div className={`${prefixCls}-bottom`}>
        {render}
      </div>
    </div>)

    return (
      <div className={overlayClassName}>
        <Popover 
          overlay={overlay} 
          overlayClassName={`${prefixCls}-popover`}
          placement={placement} 
          trigger={trigger} 
          {...(onVisibleChange) ? {onVisibleChange:onVisibleChange} : {}} >
          <Button className={`${prefixCls}-button`}>
            <Badge 
              dot = {dot} 
              count={count}              
              overflowCount={overflowCount}>
              <Icon name={icon} className={`${prefixCls}-dot`}/>
            </Badge>
          </Button>
        </Popover>
      </div>
    );
  }
}

export default NoticeIcon;
