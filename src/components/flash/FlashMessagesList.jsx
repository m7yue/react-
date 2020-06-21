import React from 'react';
import {connect} from 'react-redux'

import actions from '../../actions'
import FlashMessage from './FlashMessage';

class FlashMessagesList extends React.Component {
  render(){
    const messages=this.props.flashMessages.map(message=>{
      return <FlashMessage message={message} key={message.id} delFlashMessage={this.props.delFlashMessage}/>
    })
    return (
      <div className="container">
        {messages}
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
  return {
    flashMessages:state.flashMessages
  }
}

const delFlashMessage = actions.delFlashMessage

// mapDispatchToProps 这样写 前提是 delFlashMessage 必须为 actionCreator
export default connect(mapStateToProps,{delFlashMessage})(FlashMessagesList)



