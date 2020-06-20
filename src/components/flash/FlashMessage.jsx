import React from 'react';
import classnames from 'classnames'

class FlashMessage extends React.Component {

  onClick=(e)=>{
    this.props.delFlashMessage(this.props.message.id)
  }

  render(){
    const {type,text,id} = this.props.message
    return (
      <div className={classnames('alert',{
        'alert-success':type==='success',
        'alert-danger':type==='danger'
      })}>
        <button data-index={id} onClick={this.onClick}>&times;</button>
        { text }
      </div>
    );
  }
}
export default FlashMessage