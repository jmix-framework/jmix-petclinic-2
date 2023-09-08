package io.jmix.petclinic.view.visit;

import com.vaadin.flow.component.AbstractField;
import com.vaadin.flow.component.html.H4;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import io.jmix.core.TimeSource;
import io.jmix.core.security.CurrentAuthentication;
import io.jmix.flowui.DialogWindows;
import io.jmix.flowui.component.checkboxgroup.JmixCheckboxGroup;
import io.jmix.flowui.component.select.JmixSelect;
import io.jmix.flowui.kit.action.ActionPerformedEvent;
import io.jmix.flowui.model.CollectionContainer;
import io.jmix.flowui.model.CollectionLoader;
import io.jmix.flowui.view.*;
import io.jmix.petclinic.entity.visit.Visit;
import io.jmix.petclinic.entity.visit.VisitType;
import io.jmix.petclinic.view.main.MainView;
import io.jmix.petclinic.view.visit.calendar.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.vaadin.stefan.fullcalendar.*;
import org.vaadin.stefan.fullcalendar.dataprovider.CallbackEntryProvider;
import org.vaadin.stefan.fullcalendar.dataprovider.EntryProvider;
import org.vaadin.stefan.fullcalendar.dataprovider.EntryQuery;

import java.time.LocalDateTime;
import java.time.Month;
import java.time.YearMonth;
import java.util.EnumSet;
import java.util.UUID;
import java.util.stream.Stream;


@Route(value = "visits-new", layout = MainView.class)
@ViewController("petclinic_Visit.newList")
@ViewDescriptor("visit-new-list-view.xml")
@LookupComponent("visitsDataGrid")
@DialogMode(width = "64em")
public class VisitNewListView extends StandardListView<Visit> {
    @ViewComponent
    private VerticalLayout calenderWrapper;
    @Autowired
    private CurrentAuthentication currentAuthentication;
    @ViewComponent
    private CollectionContainer<Visit> visitsCalendarDc;
    @Autowired
    private DialogWindows dialogWindows;
    @ViewComponent
    private JmixCheckboxGroup visitTypeField;
    @Autowired
    protected CalendarNavigators calendarNavigators;
    @ViewComponent
    private CollectionLoader<Visit> visitsCalendarDl;
    private FullCalendar fullCalendar;
    @ViewComponent
    private JmixSelect<CalendarViewMode> calendarViewMode;
    @ViewComponent
    private H4 calendarTitle;

    @Subscribe
    public void onInit(final InitEvent event) {
        initTypeFilter();

        initCalendar();
    }

    private void initCalendar() {
        fullCalendar = FullCalendarBuilder.create().build();
        fullCalendar.setWidthFull();
        fullCalendar.setHeightFull();
        fullCalendar.setLocale(currentAuthentication.getLocale());
        calenderWrapper.add(fullCalendar);
        calenderWrapper.setWidthFull();
        calenderWrapper.setHeightFull();

        CallbackEntryProvider<Entry> entryProvider = EntryProvider.fromCallbacks(
                this::reloadCalendar,
                entryId -> toEntry(visitsCalendarDc.getItem(entryId))
        );

        fullCalendar.setEntryProvider(entryProvider);

        fullCalendar.addEntryClickedListener(e -> {
            Visit visit = visitsCalendarDc.getItem(UUID.fromString(e.getEntry().getId()));
            dialogWindows.detail(this, Visit.class)
                    .editEntity(visit)
                    .open();
        });

        fullCalendar.setNumberClickable(true);
        fullCalendar.addDayNumberClickedListener(e -> {
            setCalendarViewMode(CalendarViewMode.DAY);
            fullCalendar.gotoDate(e.getDate());
        });

        fullCalendar.addWeekNumberClickedListener(e -> {
            setCalendarViewMode(CalendarViewMode.WEEK);
            fullCalendar.gotoDate(e.getDate());
        });

        fullCalendar.addDatesRenderedListener(e -> {
            String title = calculateTitle(e);
            calendarTitle.setText(title);
        });
    }

    private String calculateTitle(DatesRenderedEvent e) {
        return switch (calendarViewMode.getValue()) {
            case WEEK, MONTH ->
                    MonthFormatter.fullMonthYear(YearMonth.from(e.getIntervalStart()), currentAuthentication.getLocale());
            case DAY -> e.getIntervalStart().toString();
        };
    }

    @Subscribe
    public void onReady(final ReadyEvent event) {
        setCalendarViewMode(CalendarViewMode.MONTH);
    }

    private void setCalendarViewMode(CalendarViewMode viewMode) {
        calendarViewMode.setValue(viewMode);
    }


    private Stream<Entry> reloadCalendar(EntryQuery query) {
        loadEvents(query.getStart(), query.getEnd());
        return visitsCalendarDc.getItems().stream().map(this::toEntry);
    }


    private void loadEvents(LocalDateTime start, LocalDateTime end) {
        visitsCalendarDl.setParameter("visitStart", start);
        visitsCalendarDl.setParameter("visitEnd", end);
        visitsCalendarDl.load();
    }

    private void initTypeFilter() {
        visitTypeField.setItems(VisitType.class);
        visitTypeField.setValue(EnumSet.allOf(VisitType.class));
    }


    private Entry toEntry(Visit visit) {
        Entry entry = new Entry(visit.getId().toString());
        entry.setTitle(visit.getPet().getName());
        entry.setColor("#ff3333");
        entry.setStart(visit.getVisitStart());
        entry.setEnd(visit.getVisitEnd());
        return entry;
    }


    @Subscribe("calendarHome")
    public void onCalendarHome(final ActionPerformedEvent event) {
        fullCalendar.today();
    }


    @Subscribe("calendarPrev")
    public void onCalendarPrev(final ActionPerformedEvent event) {
        fullCalendar.previous();
    }

    @Subscribe("calendarNext")
    public void onCalendarNext(final ActionPerformedEvent event) {
        fullCalendar.next();
    }

    @Subscribe("calendarViewMode")
    public void onCalendarViewModeComponentValueChange(final AbstractField.ComponentValueChangeEvent<JmixSelect, CalendarViewMode> event) {
        CalendarViewMode calendarViewMode = event.getValue();
        fullCalendar.changeView(calendarViewMode.getCalendarView());
    }
}
