import moment from "moment";
import React from "react";

const Calendar = ({ events }) => {
  // Sort events by date
  // Filter out events without time
  const filteredEvents = events.filter((event) => event.userdata.date & event.userdata.remarks.match(/demo booked/i));

  // Sort events by date
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    const dateA = moment(a.userdata.formattedDate, "dddd, MMMM Do YYYY");
    const dateB = moment(b.userdata.formattedDate, "dddd, MMMM Do YYYY");
    return dateB.diff(dateA);
  });
  console.log({ sortedEvents });
  // Group sorted events by date
  const eventsByDate = {};
  sortedEvents.forEach((event) => {
    const date = event.userdata.formattedDate;
    if (eventsByDate[date]) {
      eventsByDate[date].push(event);
    } else {
      eventsByDate[date] = [event];
    }
  });
  const today = moment().format("dddd, MMMM Do YYYY");

  return (
    <div className="container mt-5 calendarWrapper">
      <h3 className="text-center">Calendar View</h3>
      <div className="calendar">
        {Object.keys(eventsByDate).map((formattedDate) => (
          <div key={formattedDate} className={`calendar-day${formattedDate === today ? ' today' : ''}`}>
            <div className="calendar-day-header bg-primary text-white p-2">{formattedDate}</div>
            <div className="d-flex flex-wrap">
              {eventsByDate[formattedDate].map((event) => (
                <div key={event.title} className="calendar-event bg-light p-2 mb-2 me-2">
                  <div className="event-time">{event.userdata.time}</div>
                  <div className="event-fullname">{event.userdata.fullName}</div>
                  <div className="event-phonenumber">{event.userdata.phoneNumber}</div>
                  <div className="event-selectedCourse">{event.userdata.selectedCourse}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
