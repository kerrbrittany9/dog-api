import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const PageWrap = Page => {
  return props =>
    <div className="page">
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={props.match.path === '/entered' ? 'SlideIn' : 'SlideOut'}
      >

        <Page {...props} />
      </ReactCSSTransitionGroup>
    </div>;
};
export default PageWrap;
