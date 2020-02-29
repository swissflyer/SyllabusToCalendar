import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

//Components:
import UploadPage from './components/uploadSyllabus'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      documentUploaded : false,
      documentBinary : '',

      documentSubmitted : false,

      calendarEvents : {},

    };
  }

  onDocumentSubmit = (datatype) => {
    if (datatype == "pdf") {

    }

    if (datatype == "doc") {

    }

    if (datatype == "image") {

    }
  }

  onEventEdit = (eventID, editedEvent) {
    this.state.calendarEvents[eventID] = editedEvent
  }

  render() {
    if (this.state.documentUploaded === false) {
      return (
        <UploadPage />
      );
    } else {
      return (
        <
      )
    }

  }

}

ReactDOM.render(<App />, document.getElementById('root'));
