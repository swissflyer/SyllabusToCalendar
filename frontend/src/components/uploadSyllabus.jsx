import React from 'react';
import FileDrop from 'react-file-drop';

export default class UploadPage extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input type="file" onChange={this.props.onChange} />
        <button type="submit">Upload</button>
      </form>
    )
  }
}
