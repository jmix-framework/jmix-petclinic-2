package io.jmix.petclinic.listener;

import io.jmix.core.security.Authenticated;
import io.jmix.petclinic.visit.VisitTestDataCreation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationStartedEvent;
import org.springframework.context.annotation.Profile;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component("petclinic_CreateVisitTestdataOnApplicationStart")
@Profile("!online")
public class CreateVisitTestdataOnApplicationStart {

    @Autowired
    protected VisitTestDataCreation visitTestDataCreation;

    @Authenticated
    @EventListener
    public void onApplicationStarted(ApplicationStartedEvent event) {
        visitTestDataCreation.createData();
    }
}