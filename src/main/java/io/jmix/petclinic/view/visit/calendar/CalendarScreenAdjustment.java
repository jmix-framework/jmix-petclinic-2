package io.jmix.petclinic.view.visit.calendar;


import com.vaadin.flow.component.html.Label;
import org.vaadin.stefan.fullcalendar.FullCalendar;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

public class CalendarScreenAdjustment {
    private Calendar calendar;
//    private DatePicker<LocalDate> calendarNavigator;
    private Label calendarTitle;

    public static CalendarScreenAdjustment of(
            Calendar calendar,
//            DatePicker<LocalDate> calendarNavigator,
            Label calendarTitle
    ) {
        return new CalendarScreenAdjustment(calendar, calendarTitle);
    }

    private CalendarScreenAdjustment(
            Calendar calendar,
//            DatePicker<LocalDate> calendarNavigator,
            Label calendarTitle
    ) {
        this.calendar = calendar;
//        this.calendarNavigator = calendarNavigator;
        this.calendarTitle = calendarTitle;
    }

    public void adjust(LocalDate calendarStart, LocalDate calendarEnd, LocalDate navigatorDate, String title) {
        calendar.setStartDate(calendarStart.atStartOfDay());
        calendar.setEndDate(calendarEnd.atTime(LocalTime.MAX));
//        calendarNavigator.setValue(navigatorDate);
        calendarTitle.setText(title);
    }
}
