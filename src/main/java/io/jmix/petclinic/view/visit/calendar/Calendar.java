package io.jmix.petclinic.view.visit.calendar;

import org.vaadin.stefan.fullcalendar.FullCalendar;

import java.time.LocalDateTime;

public class Calendar {

    private FullCalendar calendar;
    private LocalDateTime startDate;
    private LocalDateTime endDate;

    public Calendar(LocalDateTime startDate,
                    LocalDateTime endDate,
                    FullCalendar calendar) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.calendar = calendar;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public LocalDateTime getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDateTime endDate) {
        this.endDate = endDate;
    }

    public FullCalendar getCalendar() {
        return calendar;
    }
}
