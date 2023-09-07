package io.jmix.petclinic.view.visit;

import io.jmix.petclinic.entity.visit.Visit;

import io.jmix.petclinic.view.main.MainView;

import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.*;

@Route(value = "visits/:id", layout = MainView.class)
@ViewController("petclinic_Visit.detail")
@ViewDescriptor("visit-detail-view.xml")
@EditedEntityContainer("visitDc")
public class VisitDetailView extends StandardDetailView<Visit> {
}
