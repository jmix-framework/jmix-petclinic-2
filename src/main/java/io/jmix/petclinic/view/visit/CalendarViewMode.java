package io.jmix.petclinic.view.visit;

import io.jmix.core.metamodel.datatype.EnumClass;

import org.springframework.lang.Nullable;
import org.vaadin.stefan.fullcalendar.CalendarView;
import org.vaadin.stefan.fullcalendar.CalendarViewImpl;


public enum CalendarViewMode implements EnumClass<String> {

    MONTH("dayGridMonth", CalendarViewImpl.DAY_GRID_MONTH),

    DAY("timeGridDay", CalendarViewImpl.TIME_GRID_DAY),
    WEEK("timeGridWeek", CalendarViewImpl.TIME_GRID_WEEK);

    private final String id;
    private final CalendarView calendarView;

    CalendarViewMode(String id, CalendarView calendarView) {
        this.id = id;
        this.calendarView = calendarView;
    }

    public String getId() {
        return id;
    }

    @Nullable
    public static CalendarViewMode fromId(String id) {
        for (CalendarViewMode at : CalendarViewMode.values()) {
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
