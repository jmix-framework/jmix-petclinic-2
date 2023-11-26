package io.jmix.petclinic.online;

import com.vaadin.flow.component.notification.Notification;
import io.jmix.core.session.SessionData;
import io.jmix.flowui.Dialogs;
import io.jmix.flowui.Notifications;
import io.jmix.flowui.backgroundtask.BackgroundTask;
import io.jmix.flowui.backgroundtask.TaskLifeCycle;
import io.jmix.petclinic.visit.VisitTestDataCreation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.web.context.WebApplicationContext;

/**
 * In online demo mode, generates demo data in a background task.
 */
@Component
@Scope(value = WebApplicationContext.SCOPE_SESSION)
@Profile("online")
public class OnlineDemoDataCreator {

    @Autowired
    private VisitTestDataCreation visitTestDataCreation;
    @Autowired
    private Dialogs dialogs;
    @Autowired
    private Notifications notifications;
    @Autowired
    private SessionData sessionData;

    public void createDemoData() {
        Object demoDataCreated = sessionData.getAttribute("demo-data-created");
        if (!Boolean.TRUE.equals(demoDataCreated)) {
            dialogs.createBackgroundTaskDialog(new GenerateDemoVisitsTask())
                    .withHeader("Please wait")
                    .withText("Generating visits demo data...")
                    .open();

            sessionData.setAttribute("demo-data-created", true);
        }
    }

    private class GenerateDemoVisitsTask extends BackgroundTask<Integer, Void> {

        protected GenerateDemoVisitsTask() {
            super(30);
        }

        @Override
        public Void run(TaskLifeCycle<Integer> taskLifeCycle) throws Exception {
            visitTestDataCreation.createData();
            return null;
        }

        @Override
        public void done(Void result) {
            notifications.create("Visits demo data are created 👍")
                    .withType(Notifications.Type.SUCCESS)
                    .withPosition(Notification.Position.BOTTOM_END)
                    .show();
        }
    }

}
