package io.jmix.petclinic.view.pet.pettype;

import io.jmix.petclinic.entity.pet.PetType;

import io.jmix.petclinic.view.main.MainView;

import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.*;

@Route(value = "pet-types", layout = MainView.class)
@ViewController("petclinic_PetType.list")
@ViewDescriptor("pet-type-list-view.xml")
@LookupComponent("petTypesDataGrid")
@DialogMode(width = "50em")
public class PetTypeListView extends StandardListView<PetType> {
}