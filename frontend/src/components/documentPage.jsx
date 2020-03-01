import React from 'react';





export default class DocumentPage extends React.Component {


  render() {
    /*
    var calendarObjects = []
    calendarEvents = this.props.calendarEvents;
    for (var i=0; i < calendarEvents; i++) {
      for (var b=0; i < calendarEvents; i++ ) {

      }
    }
    */


    return (
      <div class_="DocumentContent">
        <img src={this.props.fileURL} class_="documentImage"/>
        <div class_="CalendarEvents">
          
        </div>
      </div>

    )
  }
}
