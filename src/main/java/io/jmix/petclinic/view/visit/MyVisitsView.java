package io.jmix.petclinic.view.visit;

import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.router.Route;
import io.jmix.flowui.Notifications;
import io.jmix.flowui.component.grid.DataGrid;
import io.jmix.flowui.kit.action.ActionPerformedEvent;
import io.jmix.flowui.model.DataContext;
import io.jmix.flowui.view.*;
import io.jmix.petclinic.entity.visit.Visit;
import io.jmix.petclinic.entity.visit.VisitTreatmentStatus;
import io.jmix.petclinic.view.main.MainView;
import org.springframework.beans.factory.annotation.Autowired;

@Route(value = "my-visits", layout = MainView.class)
@ViewController("petclinic_MyVisits")
@ViewDescriptor("my-visits-view.xml")
@LookupComponent("visitsDataGrid")
@DialogMode(width = "64em")
public class MyVisitsView extends StandardListView<Visit> {

    @ViewComponent
    private DataGrid<Visit> visitsDataGrid;
    @Autowired
    private Notifications notifications;
    @Autowired
    private MessageBundle messageBundle;
    @ViewComponent
    private DataContext dataContext;

    @Subscribe("visitsDataGrid.startTreatment")
    public void onStartTreatment(final ActionPerformedEvent event) {
        Visit visit = visitsDataGrid.getSingleSelectedItem();
        if (visit == null)
            return;

        if (visit.hasStarted()) {
            notifications.create(messageBundle.formatMessage("treatmentAlreadyStarted", visit.getPetName()))
                    .withType(Notifications.Type.WARNING)
                    .show();
            return;
        }

        updateTreatmentTo(visit, VisitTreatmentStatus.IN_PROGRESS);
        notifications.create(messageBundle.formatMessage("treatmentStarted", visit.getPetName()))
                .withType(Notifications.Type.SUCCESS)
                .withPosition(Notification.Position.TOP_END)
                .show();
    }

    @Subscribe("visitsDataGrid.finishTreatment")
    public void onFinishTreatment(final ActionPerformedEvent event) {
        Visit visit = visitsDataGrid.getSingleSelectedItem();
        if (visit == null)
            return;

        if (visit.hasFinished()) {
            notifications.create(messageBundle.formatMessage("treatmentAlreadyFinished", visit.getPetName()))
                    .withType(Notifications.Type.WARNING)
                    .show();
            return;
        }

        updateTreatmentTo(visit, VisitTreatmentStatus.DONE);
        notifications.create(messageBundle.formatMessage("treatmentFinished", visit.getPetName()))
                .withType(Notifications.Type.SUCCESS)
                .withPosition(Notification.Position.TOP_END)
                .show();
    }

    private void updateTreatmentTo(Visit visit, VisitTreatmentStatus targetStatus) {
        visit.setTreatmentStatus(targetStatus);
        dataContext.save();
    }

}
