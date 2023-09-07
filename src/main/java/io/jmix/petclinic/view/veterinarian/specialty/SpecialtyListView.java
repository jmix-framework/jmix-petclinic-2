package io.jmix.petclinic.view.veterinarian.specialty;

import io.jmix.petclinic.entity.veterinarian.Specialty;

import io.jmix.petclinic.view.main.MainView;

import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.*;

@Route(value = "specialties", layout = MainView.class)
@ViewController("petclinic_Specialty.list")
@ViewDescriptor("specialty-list-view.xml")
@LookupComponent("specialtiesDataGrid")
@DialogMode(width = "50em")
public class SpecialtyListView extends StandardListView<Specialty> {
}