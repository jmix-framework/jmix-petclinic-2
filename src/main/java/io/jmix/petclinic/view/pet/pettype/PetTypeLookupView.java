package io.jmix.petclinic.view.pet.pettype;

import io.jmix.petclinic.entity.pet.PetType;

import io.jmix.petclinic.view.main.MainView;

import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.*;

@ViewController("petclinic_PetType.lookup")
@ViewDescriptor("pet-type-lookup-view.xml")
@LookupComponent("petTypesDataGrid")
@DialogMode(width = "50em")
@PrimaryLookupView(PetType.class)
public class PetTypeLookupView extends StandardListView<PetType> {
}