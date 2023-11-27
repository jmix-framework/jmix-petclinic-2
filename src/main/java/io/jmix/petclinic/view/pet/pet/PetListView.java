package io.jmix.petclinic.view.pet.pet;

import io.jmix.flowui.component.propertyfilter.PropertyFilter;
import io.jmix.flowui.kit.action.ActionPerformedEvent;
import io.jmix.petclinic.entity.pet.Pet;

import io.jmix.petclinic.view.main.MainView;

import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.*;

@Route(value = "pets", layout = MainView.class)
@ViewController("petclinic_Pet.list")
@ViewDescriptor("pet-list-view.xml")
@LookupComponent("petsDataGrid")
@DialogMode(width = "50em")
public class PetListView extends StandardListView<Pet> {

    @ViewComponent
    private PropertyFilter identificationNumberFilter;
    @ViewComponent
    private PropertyFilter typeFilter;
    @ViewComponent
    private PropertyFilter ownerFilter;

    @Subscribe("clearFilterAction")
    public void onClearFilterAction(final ActionPerformedEvent event) {
        identificationNumberFilter.clear();
        typeFilter.clear();
        ownerFilter.clear();
    }

}
