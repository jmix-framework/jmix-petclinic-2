package io.jmix.petclinic.view.visit.calendar;

import io.jmix.core.metamodel.datatype.EnumClass;

import org.springframework.lang.Nullable;
import org.vaadin.stefan.fullcalendar.CalendarView;
import org.vaadin.stefan.fullcalendar.CalendarViewImpl;


public enum CalendarMode implements EnumClass<String> {

    DAY("DAY", CalendarViewImpl.DAY_GRID_DAY),
    WEEK("WEEK", CalendarViewImpl.DAY_GRID_WEEK),
    MONTH("MONTH", CalendarViewImpl.DAY_GRID_MONTH);

    private final String id;
    private final CalendarView calendarView;

    CalendarMode(String id, CalendarView calendarView) {
        this.id = id;
        this.calendarView = calendarView;
    }

    public String getId() {
        return id;
    }

    @Nullable
    public static CalendarMode fromId(String id) {
        for (CalendarMode at : CalendarMode.values()) {
            if (at.getId().equals(id)) {
                return at;
            }
        }
        return null;
    }

    public CalendarView getCalendarView() {
        return calendarView;
    }
}
