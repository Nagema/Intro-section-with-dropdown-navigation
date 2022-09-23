import React from 'react'
import iconTodo from '../../assets/images/icon-todo.svg';
import iconCalendar from '../../assets/images/icon-calendar.svg';
import iconReminders from '../../assets/images/icon-reminders.svg';
import iconPlanning from '../../assets/images/icon-planning.svg';
import './styles.css';

export const FeatureBoxOptions = () => {
  return (
    <>
        <div className='feature-options'>
            <ul className='list-option'>
                <li>
                    <img className='list-icon' src={iconTodo} alt="icon todo" /> 
                    <span>Todo List</span> 
                </li>
                <li>
                    <img className='list-icon' src={iconCalendar} alt="icon todo" /> 
                    <span>Calendar</span>
                </li>
                <li>
                    <img className='list-icon' src={iconReminders} alt="icon todo" /> 
                    <span>Reminders</span>
                </li>
                <li>
                    <img className='list-icon' src={iconPlanning} alt="icon todo" /> 
                    <span>Planning</span>
                </li>
            </ul>
        </div>
    </>
  )
}
