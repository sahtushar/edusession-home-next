import { Button, Input } from "reactstrap";
import React, { useEffect, useState } from "react";

import moment from "moment";

export const BookSlot = ({
  date,
  setDate,
  selectedTimeSlot,
  setSelectedTimeSlot,
  disableSlot=true
}) => {

const timeSlots = [
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM"
];

  const handleDateChange = (newDate) => {
    setDate(moment(newDate));
    setSelectedTimeSlot(null);
  };

  const handleTimeSlotClick = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  const isDisabled = (timeSlot) => {
    const now = moment();
    const selectedDateTime = moment(date)
      .set("hour", parseInt(timeSlot.split(":")[0]))
      .set("minute", 0)
      .set("second", 0)
      .set("millisecond", 0);
    if (timeSlot.includes("PM") && parseInt(timeSlot.split(":")[0]) !== 12) {
      selectedDateTime.add(12, "hours");
    }
    return selectedDateTime.isBefore(now);
  };

  return (
    <div className="mb-2 slotbookWrapper">
      <div className="mb-2">
        <label htmlFor={"date"}>Select Date</label>
        <Input
          type="date"
          value={date?.format("YYYY-MM-DD")}
          onChange={(e) => handleDateChange(e.target.value)}
          id="date"
        />
      </div>
      <div className="mb-2">
        <label htmlFor={"timeselect"}>Select Time</label>
        <div>
          {timeSlots.map((timeSlot) => (
            <Button
              key={timeSlot}
              onClick={() => handleTimeSlotClick(timeSlot)}
              disabled={disableSlot ? isDisabled(timeSlot): false}
              style={{
                backgroundColor: selectedTimeSlot === timeSlot ? "#5658dd" : "",
              }}
              color="primary"
              className="m-1"
            >
              {timeSlot}
            </Button>
          ))}
        </div>
      </div>
      {selectedTimeSlot && (
        <div className="mb-2 selectedTimeSlot">
          <div>Selected Time Slot:</div>
          <span>{date?.format("dddd, MMMM Do YYYY")}</span>
          <span>{selectedTimeSlot}</span>
        </div>
      )}
    </div>
  );
};
