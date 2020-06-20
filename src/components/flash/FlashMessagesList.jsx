import React from 'react';
import FlashMessage from './FlashMessage';
import {connect} from 'react-redux'
import {delFlashMessage} from '../../actions/flashMessages'

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

// mapDispatchToProps 这样写 前提是 delFlashMessage 必须为 actionCreator
export default connect(mapStateToProps,{delFlashMessage})(FlashMessagesList)



