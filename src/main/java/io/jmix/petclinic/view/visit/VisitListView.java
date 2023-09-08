package io.jmix.petclinic.view.visit;

import com.vaadin.flow.component.AbstractField;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import io.jmix.core.TimeSource;
import io.jmix.core.metamodel.datatype.DatatypeFormatter;
import io.jmix.core.security.CurrentAuthentication;
import io.jmix.flowui.DialogWindows;
import io.jmix.flowui.component.SupportsTypedValue;
import io.jmix.flowui.component.checkboxgroup.JmixCheckboxGroup;
import io.jmix.flowui.component.datepicker.TypedDatePicker;
import io.jmix.flowui.component.radiobuttongroup.JmixRadioButtonGroup;
import io.jmix.flowui.kit.action.ActionPerformedEvent;
import io.jmix.flowui.model.CollectionContainer;
import io.jmix.flowui.model.CollectionLoader;
import io.jmix.petclinic.entity.visit.Visit;

import io.jmix.petclinic.entity.visit.VisitType;
import io.jmix.petclinic.view.main.MainView;

import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.*;
import io.jmix.petclinic.view.visit.calendar.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.CollectionUtils;
import org.vaadin.stefan.fullcalendar.Entry;
import org.vaadin.stefan.fullcalendar.FullCalendar;
import org.vaadin.stefan.fullcalendar.FullCalendarBuilder;
import org.vaadin.stefan.fullcalendar.dataprovider.CallbackEntryProvider;
import org.vaadin.stefan.fullcalendar.dataprovider.EntryProvider;
import org.vaadin.stefan.fullcalendar.dataprovider.EntryQuery;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.EnumSet;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Stream;

import static io.jmix.petclinic.view.visit.calendar.CalendarNavigationMode.*;


@Route(value = "visits", layout = MainView.class)
@ViewController("petclinic_Visit.list")
@ViewDescriptor("visit-list-view.xml")
@LookupComponent("visitsDataGrid")
@DialogMode(width = "64em")
public class VisitListView extends StandardListView<Visit> {
    @ViewComponent
    private VerticalLayout calenderWrapper;
    @Autowired
    private CurrentAuthentication currentAuthentication;
    @ViewComponent
    private CollectionContainer<Visit> visitsCalendarDc;
    private Calendar calendar;
    @Autowired
    private TimeSource timeSource;
    @Autowired
    private DialogWindows dialogWindows;
    @ViewComponent
    private JmixCheckboxGroup visitTypeField;
    @Autowired
    protected CalendarNavigators calendarNavigators;
    @ViewComponent
    private CollectionLoader<Visit> visitsCalendarDl;
    @ViewComponent
    private JmixRadioButtonGroup<CalendarMode> calendarModeField;
    @Autowired
    private DatatypeFormatter datatypeFormatter;
    @ViewComponent
    private Label calendarTitle;
    @ViewComponent
    private TypedDatePicker<LocalDate> calendarNavigator;

    @Subscribe
    public void onInit(final InitEvent event) {
        initTypeFilter();

        initCalendar();
    }

    private void initCalendar() {
        FullCalendar fullCalendar = FullCalendarBuilder.create().build();
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

        calendar = new Calendar(
                timeSource.now().toLocalDateTime(),
                timeSource.now().toLocalDateTime().plusDays(1),
                fullCalendar
        );
    }

    private Stream<Entry> reloadCalendar(EntryQuery query) {
//        calendar.setStartDate(query.getStart());
//        calendar.setEndDate(query.getEnd());
        loadEvents();
        return visitsCalendarDc.getItems().stream().map(this::toEntry);
    }


    private void loadEvents() {
        visitsCalendarDl.setParameter("visitStart", calendar.getStartDate());
        visitsCalendarDl.setParameter("visitEnd", calendar.getEndDate());
        visitsCalendarDl.load();
    }

    private void initTypeFilter() {
        visitTypeField.setItems(VisitType.class);
        visitTypeField.setValue(EnumSet.allOf(VisitType.class));
    }


    @Subscribe
    public void onReady(final ReadyEvent event) {
        current(CalendarMode.WEEK);
    }
    private void current(CalendarMode calendarMode) {
        change(calendarMode, AT_DATE, timeSource.now().toLocalDate());
    }
    private void change(CalendarMode calendarMode, CalendarNavigationMode navigationMode, LocalDate referenceDate) {
        calendarModeField.setValue(calendarMode);

        calendarNavigators
                .forMode(
                        CalendarScreenAdjustment.of(calendar, calendarNavigator, calendarTitle),
                        datatypeFormatter,
                        calendarMode
                )
                .navigate(navigationMode, referenceDate);

        loadEvents();

        calendar.getCalendar().getEntryProvider().refreshAll();
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
        current(calendarModeField.getValue());
    }


    @Subscribe("calendarPrev")
    public void onCalendarPrev(final ActionPerformedEvent event) {
        previous(calendarModeField.getValue());
    }

    @Subscribe("calendarNext")
    public void onCalendarNext(final ActionPerformedEvent event) {
        next(calendarModeField.getValue());
    }

    private void next(CalendarMode calendarMode) {
        change(calendarMode, NEXT, calendarNavigator.getValue());
    }

    private void previous(CalendarMode calendarMode) {
        change(calendarMode, PREVIOUS, calendarNavigator.getValue());
    }

    @Subscribe("calendarModeField")
    public void onCalendarModeFieldComponentValueChange(final AbstractField.ComponentValueChangeEvent<JmixRadioButtonGroup<CalendarMode>, CalendarMode> event) {
        calendar.getCalendar().changeView(event.getValue().getCalendarView());
    }

    @Subscribe("visitTypeField")
    public void onVisitTypeFieldComponentValueChange(final AbstractField.ComponentValueChangeEvent<JmixCheckboxGroup, Object> event) {


        if (event.getValue() == null) {
            visitsCalendarDl.removeParameter("type");
        } else if (CollectionUtils.isEmpty((Set<VisitType>) event.getValue())) {
            visitsCalendarDl.setParameter("type", Collections.singleton(""));
        } else {
            visitsCalendarDl.setParameter("type", event.getValue());
        }

        if (event.isFromClient()) {
            loadEvents();
            calendar.getCalendar().getEntryProvider().refreshAll();
        }
    }


    private void atDate(CalendarMode calendarMode, LocalDate date) {
        change(calendarMode, AT_DATE, date);
    }
    @Subscribe("calendarNavigator")
    public void onCalendarNavigatorTypedValueChange(final SupportsTypedValue.TypedValueChangeEvent<TypedDatePicker<LocalDate>, LocalDate> event) {
        if (event.isFromClient()) {
            atDate(calendarModeField.getValue(), event.getValue());
        }
    }
}
