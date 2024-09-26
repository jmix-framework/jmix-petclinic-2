package io.jmix.petclinic.view.visit;

import io.jmix.core.metamodel.datatype.EnumClass;

import io.jmix.fullcalendarflowui.kit.component.model.CalendarDisplayMode;
import org.springframework.lang.Nullable;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static io.jmix.fullcalendarflowui.kit.component.model.CalendarDisplayModes.*;

public enum CalendarViewMode implements EnumClass<String> {

    MONTH("dayGridMonth", DAY_GRID_MONTH, List.of(LIST_MONTH)),

    DAY("timeGridDay", TIME_GRID_DAY, List.of(DAY_GRID_DAY)),
    WEEK("timeGridWeek", TIME_GRID_WEEK, List.of(LIST_WEEK, DAY_GRID_WEEK) );

    private final String id;
    private final CalendarDisplayMode calendarDisplayMode;
    private final List<CalendarDisplayMode> alternativeCalendarDisplayModes;

    CalendarViewMode(String id, CalendarDisplayMode calendarDisplayMode, List<CalendarDisplayMode> alternativeCalendarDisplayModes) {
        this.id = id;
        this.calendarDisplayMode = calendarDisplayMode;
        this.alternativeCalendarDisplayModes = alternativeCalendarDisplayModes;
    }

    public static Optional<CalendarViewMode> fromCalendarDisplayMode(CalendarDisplayMode calendarDisplayMode) {
        return Arrays.stream(values())
                .filter(it -> it.calendarDisplayMode.equals(calendarDisplayMode) || it.alternativeCalendarDisplayModes().contains(calendarDisplayMode))
                .findAny();
    }

    private List<CalendarDisplayMode> alternativeCalendarDisplayModes() {
        return alternativeCalendarDisplayModes;
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

    public CalendarDisplayMode getCalendarDisplayMode() {
        return calendarDisplayMode;
    }
}