import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

//Components:
import UploadPage from './components/uploadSyllabus'
import DocumentPage from './components/documentPage'

var sampleCalendarData = {
  officeHours : [
    {
      title : "Office Hours",
      reoccuring : true,

      reocurringDays : ['Tuesday', 'Thursday'],
      time: ['3:00', '4:00'],
      location: "Room 219 Bldg 42",

      date: ''
    },


  ],

  projects : [
    {
      title : "Project 1",
      reoccuring : false,

      reocurringDays : [],
      time: [],
      location: '',

      date : "Tuesday, January 3rd"
    }
  ]

}




class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      documentUploaded : false,
      file : null,
      fileURL : '',
      documentSubmitted : false,

      calendarEvents : sampleCalendarData,

    };
  }

  onDocumentChange = (e) => {
    this.setState({file:e.target.files[0]})
    this.setState({fileURL: URL.createObjectURL(e.target.files[0])})
  }

  onDocumentSubmit = (e) => {
    e.preventDefault()
    //console.log()

    fetch('/api/syllabus', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: this.state.file
    })
    //Add behaivor to get returned data

    this.setState({documentSubmitted : true})

    console.log(this.state.documentURL)

  }
  /*
  onEventEdit = (eventID, editedEvent) => {
    this.setState(calendarEvents[eventID] = editedEvent)
  }
  */
  render() {
    if (this.state.documentSubmitted === false) {
      return (
        <UploadPage onSubmit={this.onDocumentSubmit} onChange={this.onDocumentChange}/>
      );
    } else {
      return (
        <DocumentPage fileURL={this.state.fileURL} calendarEvents={this.state.calendarEvents}/>
      )
    }

  }

}

ReactDOM.render(<App />, document.getElementById('root'));
