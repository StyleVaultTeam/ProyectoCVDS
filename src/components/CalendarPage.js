import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import Footer from './Reusable/Footer.js';
import 'react-calendar/dist/Calendar.css';
import './stylesCalendarPage.css'; // Importa tus estilos CSS personalizados

function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [importantDates, setImportantDates] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddImportantDate = () => {
    if (selectedDate && !importantDates.includes(selectedDate)) {
      setImportantDates([...importantDates, selectedDate]);
    }
  };

  const handleRemoveImportantDate = () => {
    const updatedDates = importantDates.filter(date => !moment(date).isSame(selectedDate, 'day'));
    setImportantDates(updatedDates);
  };

  const tileClassName = ({ date }) => {
    if (selectedDate && selectedDate.toDateString() === date.toDateString()) {
      return 'selected-date';
    }
    if (importantDates.some((importantDate) => importantDate.toDateString() === date.toDateString())) {
      return 'important-date';
    }
    if (date.toDateString() === new Date().toDateString()) {
        return 'today';
    }
    return '';
  };

  return (
    <div>
    <div className="calendar-container">
      <h1>Tu Calendario</h1>
      <div className="calendar-wrapper">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          className="custom-calendar"
          tileClassName={tileClassName}
        />
        <div className="buttons">
          <button onClick={handleAddImportantDate}>Agregar fecha importante</button>
          <button onClick={handleRemoveImportantDate}>Eliminar fecha importante</button>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default CalendarPage;