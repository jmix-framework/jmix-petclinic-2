package io.jmix.petclinic.view.visit.calendar;


import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.html.Label;
import io.jmix.flowui.component.datepicker.TypedDatePicker;
import org.vaadin.stefan.fullcalendar.FullCalendar;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

public class CalendarScreenAdjustment {
    private Calendar calendar;
    private TypedDatePicker<LocalDate> calendarNavigator;
    private Label calendarTitle;

    public static CalendarScreenAdjustment of(
            Calendar calendar,
            TypedDatePicker<LocalDate> calendarNavigator,
            Label calendarTitle
    ) {
        return new CalendarScreenAdjustment(calendar, calendarNavigator, calendarTitle);
    }

    private CalendarScreenAdjustment(
            Calendar calendar,
            TypedDatePicker<LocalDate> calendarNavigator,
            Label calendarTitle
    ) {
        this.calendar = calendar;
        this.calendarNavigator = calendarNavigator;
        this.calendarTitle = calendarTitle;
    }

    public void adjust(LocalDate calendarStart, LocalDate calendarEnd, LocalDate navigatorDate, String title) {
        calendar.setStartDate(calendarStart.atStartOfDay());
        calendar.setEndDate(calendarEnd.atTime(LocalTime.MAX));
        calendarNavigator.setValue(navigatorDate);
        calendarTitle.setText(title);
    }
}
