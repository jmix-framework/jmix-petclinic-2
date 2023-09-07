package io.jmix.petclinic.view.veterinarian.specialty;

import io.jmix.petclinic.entity.veterinarian.Specialty;

import io.jmix.petclinic.view.main.MainView;

import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.*;

@Route(value = "specialties/:id", layout = MainView.class)
@ViewController("petclinic_Specialty.detail")
@ViewDescriptor("specialty-detail-view.xml")
@EditedEntityContainer("specialtyDc")
public class SpecialtyDetailView extends StandardDetailView<Specialty> {
}