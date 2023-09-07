package io.jmix.petclinic.view.veterinarian.veterinarian;

import io.jmix.petclinic.entity.veterinarian.Veterinarian;

import io.jmix.petclinic.view.main.MainView;

import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.*;

@Route(value = "veterinarians", layout = MainView.class)
@ViewController("petclinic_Veterinarian.list")
@ViewDescriptor("veterinarian-list-view.xml")
@LookupComponent("veterinariansDataGrid")
@DialogMode(width = "50em")
public class VeterinarianListView extends StandardListView<Veterinarian> {
}