package io.jmix.petclinic.view.visit;

import com.google.common.collect.ImmutableMap;
import com.vaadin.flow.component.AbstractField;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.html.H4;
import com.vaadin.flow.component.tabs.Tab;
import com.vaadin.flow.router.QueryParameters;
import com.vaadin.flow.router.Route;
import io.jmix.core.metamodel.datatype.DatatypeFormatter;
import io.jmix.core.security.CurrentAuthentication;
import io.jmix.flowui.DialogWindows;
import io.jmix.flowui.component.checkboxgroup.JmixCheckboxGroup;
import io.jmix.flowui.component.select.JmixSelect;
import io.jmix.flowui.component.tabsheet.JmixTabSheet;
import io.jmix.flowui.facet.UrlQueryParametersFacet;
import io.jmix.flowui.facet.urlqueryparameters.AbstractUrlQueryParametersBinder;
import io.jmix.flowui.kit.action.ActionPerformedEvent;
import io.jmix.flowui.model.CollectionLoader;
import io.jmix.flowui.view.*;
import io.jmix.fullcalendarflowui.component.FullCalendar;
import io.jmix.fullcalendarflowui.component.data.EntityCalendarEvent;
import io.jmix.fullcalendarflowui.component.event.*;
import io.jmix.fullcalendarflowui.kit.component.model.CalendarDisplayMode;
import io.jmix.fullcalendarflowui.kit.component.model.CalendarDisplayModes;
import io.jmix.petclinic.entity.visit.Visit;
import io.jmix.petclinic.entity.visit.VisitType;
import io.jmix.petclinic.view.main.MainView;
import io.jmix.petclinic.view.visit.calendar.MonthFormatter;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.YearMonth;
import java.util.EnumSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;


@Route(value = "visits", layout = MainView.class)
@ViewController("petclinic_Visit.list")
@ViewDescriptor("visit-list-view.xml")
@DialogMode(width = "64em")
public class VisitListView extends StandardListView<Visit> {

    private static final String CALENDAR_DISPLAY_MODE_PARAM = "calendarDisplayMode";
    private static final String DATE_PARAM = "date";
    @Autowired
    private CurrentAuthentication currentAuthentication;
    @Autowired
    private DialogWindows dialogWindows;
    @ViewComponent
    private JmixCheckboxGroup<VisitType> visitTypeField;
    @ViewComponent
    private CollectionLoader<Visit> visitsCalendarDl;
    @ViewComponent
    private H4 calendarTitle;
    @ViewComponent
    private FullCalendar calendar;
    @ViewComponent
    private JmixSelect<CalendarViewMode> calendarViewMode;
    @ViewComponent("contentTabSheet.allVisitsTab")
    private Tab contentTabSheetAllVisitsTab;
    @ViewComponent
    private CollectionLoader<Visit> visitsDl;
    @Autowired
    private DatatypeFormatter datatypeFormatter;
    @ViewComponent
    private UrlQueryParametersFacet urlQueryParameters;

    private class CalendarUrlQueryParametersBinder extends AbstractUrlQueryParametersBinder {

        public CalendarUrlQueryParametersBinder() {
            calendar.addDatesSetListener(datesSetEvent -> {

                CalendarDisplayMode displayModeParam = CalendarViewMode.fromCalendarDisplayMode(datesSetEvent.getDisplayModeInfo().getDisplayMode())
                        .map(CalendarViewMode::getCalendarDisplayMode)
                        .orElse(datesSetEvent.getDisplayModeInfo().getDisplayMode());

                QueryParameters qp = new QueryParameters(
                        ImmutableMap.of(
                                CALENDAR_DISPLAY_MODE_PARAM, List.of(displayModeParam.getId()),
                                DATE_PARAM, List.of(datesSetEvent.getStartDate().toString())
                        )
                );
                fireQueryParametersChanged(new UrlQueryParametersFacet.UrlQueryParametersChangeEvent(this, qp));
            });
        }

        @Override
        public void updateState(QueryParameters queryParameters) {
            List<String> calendarDisplayMode = queryParameters.getParameters().get(CALENDAR_DISPLAY_MODE_PARAM);
            if (calendarDisplayMode != null) {
                CalendarViewMode.fromCalendarDisplayMode(CalendarDisplayModes.fromId(calendarDisplayMode.get(0)))
                        .map(CalendarViewMode::getCalendarDisplayMode)
                        .ifPresent(calendar::setCalendarDisplayMode);
            }
            List<String> date = queryParameters.getParameters().get(DATE_PARAM);
            if (calendarDisplayMode != null) {
                calendar.navigateToDate(LocalDate.parse(date.get(0)));
            }
        }

        @Override
        public Component getComponent() {
            return calendar;
        }
    }

    @Subscribe
    public void onInit(final InitEvent event) {
        initTypeFilter();

        initCalendar();
        urlQueryParameters.registerBinder(new CalendarUrlQueryParametersBinder());
    }

    private void initCalendar() {

//        fullCalendar.setNumberClickable(true);
//        fullCalendar.addDayNumberClickedListener(this::openDayView);
//        fullCalendar.addWeekNumberClickedListener(this::openWeekView);
//
//        fullCalendar.addTimeslotClickedListener(this::createVisit);
//        fullCalendar.addEntryClickedListener(this::editVisit);
//        fullCalendar.addEntryDroppedListener(this::updateVisit);
//        fullCalendar.addEntryResizedListener(this::updateVisit);
    }


    @Subscribe
    public void onReady(final ReadyEvent event) {
        setCalendarViewMode(CalendarViewMode.MONTH);
    }

    private void setCalendarViewMode(CalendarViewMode viewMode) {
        calendarViewMode.setValue(viewMode);
    }

    private void initTypeFilter() {
        visitTypeField.setItems(VisitType.class);
        visitTypeField.setValue(EnumSet.allOf(VisitType.class));
    }

    @Subscribe("calendar")
    public void onCalendarEventClick(final EventClickEvent event) {
        EntityCalendarEvent<Visit> entityCalendarEvent = (EntityCalendarEvent) event.getCalendarEvent();
        dialogWindows.detail(this, Visit.class)
                .editEntity(entityCalendarEvent.getEntity())
                .open();
    }

    @Subscribe("calendarHome")
    public void onCalendarHome(final ActionPerformedEvent event) {
        calendar.navigateToToday();
    }

    @Subscribe("calendarPrev")
    public void onCalendarPrev(final ActionPerformedEvent event) {
        calendar.navigateToPrevious();
    }

    @Subscribe("calendarNext")
    public void onCalendarNext(final ActionPerformedEvent event) {
        calendar.navigateToNext();
    }

    @Subscribe("calendarViewMode")
    public void onCalendarViewModeComponentValueChange(final AbstractField.ComponentValueChangeEvent<JmixSelect<CalendarViewMode>, CalendarViewMode> event) {
        if (event.isFromClient()) {
            calendar.setCalendarDisplayMode(event.getValue().getCalendarDisplayMode());
        }
    }

    @Subscribe("calendar")
    public void onCalendarDateClick(final DateClickEvent event) {

        CalendarViewMode.fromCalendarDisplayMode(calendar.getCurrentCalendarDisplayMode())
                .ifPresent(it -> {
                    if (it.equals(CalendarViewMode.MONTH)) {
                        calendar.navigateToDate(event.getDateTime().toLocalDate());
                        calendar.setCalendarDisplayMode(CalendarViewMode.DAY.getCalendarDisplayMode());
                    }
                });
    }


    @Subscribe("calendar")
    public void onCalendarSelect(final SelectEvent event) {
        CalendarViewMode.fromCalendarDisplayMode(calendar.getCurrentCalendarDisplayMode())
                .ifPresent(it -> {
                    if (it.equals(CalendarViewMode.DAY) || it.equals(CalendarViewMode.WEEK)) {
                        dialogWindows.detail(this, Visit.class)
                                .newEntity()
                                .withInitializer(visit -> {
                                    visit.setVisitStart(event.getStartDateTime());
                                    visit.setVisitEnd(event.getEndDateTime());
                                })
                                .withAfterCloseListener((DialogWindow.AfterCloseEvent<View<?>> afterCloseEvent) -> {
                                    if (afterCloseEvent.closedWith(StandardOutcome.SAVE)) {
                                        reloadEvents();
                                    }
                                })
                                .open();
                    }
                });

    }

    @Subscribe("calendar")
    public void onCalendarEventResize(final EventResizeEvent event) {
        LocalDateTime startDateTime = event.getCalendarEvent().getStartDateTime();
        LocalDateTime endDateTime = event.getCalendarEvent().getEndDateTime();
    }

    @Subscribe("calendar")
    public void onCalendarEventDrop(final EventDropEvent event) {
        LocalDateTime startDateTime = event.getCalendarEvent().getStartDateTime();
        LocalDateTime endDateTime = event.getCalendarEvent().getEndDateTime();
    }

//    private void updateVisit(EntryTimeChangedEvent e) {
//        Entry entry = e.getEntry();
//        visitsCalendarDc.getMutableItems().stream()
//                .filter(it -> it.getId().equals(UUID.fromString(entry.getId())))
//                .findFirst()
//                .ifPresent(it ->  {
//                    it.setVisitStart(parseDate(e, "start"));
//                    it.setVisitEnd(parseDate(e, "end"));
//                    dataContext.save();
//                });
//    }

    @Subscribe("calendar")
    public void onCalendarDatesSet(final DatesSetEvent event) {
        DisplayModeInfo displayModeInfo = event.getDisplayModeInfo();

        loadEvents(displayModeInfo.getActiveStartDate().atStartOfDay(), displayModeInfo.getActiveEndDate().atStartOfDay());

        CalendarViewMode.fromCalendarDisplayMode(displayModeInfo.getDisplayMode())
                .ifPresent(this::setCalendarViewMode);


        String title = calculateTitle(event);
        calendarTitle.setText(title);
    }

    private String calculateTitle(DatesSetEvent e) {
        LocalDate currentStartDate = e.getDisplayModeInfo().getCurrentStartDate();
        return switch (calendarViewMode.getValue()) {
            case WEEK, MONTH ->
                    MonthFormatter.fullMonthYear(YearMonth.from(currentStartDate), currentAuthentication.getLocale());

            case DAY -> datatypeFormatter.formatLocalDate(currentStartDate);
        };
    }

    @Subscribe("visitTypeField")
    public void onVisitTypeFieldComponentValueChange(final AbstractField.ComponentValueChangeEvent<JmixCheckboxGroup, Set<VisitType>> event) {
        visitsCalendarDl.setParameter("type", event.getValue());

        if (visitsCalendarDl.getParameters().containsKey("visitStart") && visitsCalendarDl.getParameters().containsKey("visitEnd")) {
            visitsCalendarDl.load();
        }
    }

    private void loadEvents(LocalDateTime start, LocalDateTime end) {
        if (parameterValueChanged("visitStart", start) || parameterValueChanged("visitEnd", end)) {
            visitsCalendarDl.setParameter("visitStart", start);
            visitsCalendarDl.setParameter("visitEnd", end);
            visitsCalendarDl.load();
        }
    }

    private boolean parameterValueChanged(String parameterName, LocalDateTime newValue) {
        return !Objects.equals(visitsCalendarDl.getParameter(parameterName), newValue);
    }

    private void reloadEvents() {
        visitsCalendarDl.load();
    }

    @Subscribe("contentTabSheet")
    public void onContentTabSheetSelectedChange(final JmixTabSheet.SelectedChangeEvent event) {
        if (Objects.equals(event.getSelectedTab(), contentTabSheetAllVisitsTab) &&
                !Objects.equals(event.getPreviousTab(), contentTabSheetAllVisitsTab)
        ) {
            visitsDl.load();
        }
    }
}
