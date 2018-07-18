/**
 * NoticeIcon Component for uxcore
 * @author Amanda111
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Popover from 'uxcore-popover';
import Icon from 'uxcore-icon';
import Badge from 'uxcore-badge';
import Overlay from './Overlay';


class NoticeIcon extends React.Component {
  static defaultProps = {
    prefixCls: 'kuma-notice',
    icon: 'xiaoxitixingfull',
    title: '通知',
    dot: false,
    count: 0,
    overflowCount: 99,
    placement: 'bottomRight',
    trigger: 'click',
    emptyText: '暂无数据',
    bottomAction: { text: '查看通知', action: () => {} },
  };

  static propTypes = {
    ...Overlay.propTypes,
    overlayClassName: PropTypes.string,
    dot: PropTypes.bool,
    count: PropTypes.number,
    overflowCount: PropTypes.number,
    placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right',
      'topLeft', 'bottomLeft', 'leftTop', 'rightTop', 'topRight', 'bottomRight',
      'leftBottom', 'rightBottom']),
    trigger: PropTypes.oneOf(['hover', 'click']),
    onVisibleChange: PropTypes.func,
  };

  static displayName = 'NoticeIcon';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { prefixCls, icon, dot, count, overflowCount, placement,
      trigger, onVisibleChange, overlayClassName } = this.props;

    return (
      <span className={overlayClassName}>
        <Popover
          overlay={(
            <Overlay
              {...this.props}
            />
          )}
          overlayClassName={`${prefixCls}-popover`}
          placement={placement}
          trigger={trigger}
          {...(onVisibleChange) ? { onVisibleChange } : {}}
        >
          <span className={`${prefixCls}-badge`}>
            <Badge
              dot={dot}
              count={count}
              overflowCount={overflowCount}
            >
              <Icon name={icon} className={`${prefixCls}-dot`} usei/>
            </Badge>
          </span>
        </Popover>
      </span>
    );
  }
}

export default NoticeIcon;
