package io.jmix.petclinic.online;

import com.vaadin.flow.component.notification.Notification;
import io.jmix.core.session.SessionData;
import io.jmix.flowui.Notifications;
import io.jmix.flowui.backgroundtask.BackgroundTask;
import io.jmix.flowui.backgroundtask.BackgroundTaskHandler;
import io.jmix.flowui.backgroundtask.BackgroundWorker;
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
    private Notifications notifications;
    @Autowired
    private SessionData sessionData;
    @Autowired
    private BackgroundWorker backgroundWorker;

    public void createDemoData() {
        Object demoDataCreated = sessionData.getAttribute("demo-data-created");
        if (!Boolean.TRUE.equals(demoDataCreated)) {
            notifications.create("Generating visits demo data...")
                    .withPosition(Notification.Position.BOTTOM_END)
                    .show();

            BackgroundTaskHandler<Void> handler = backgroundWorker.handle(new GenerateDemoVisitsTask());
            handler.execute();

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
