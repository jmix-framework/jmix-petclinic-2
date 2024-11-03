package io.jmix.petclinic.view.pet.pettype;

import io.jmix.petclinic.entity.pet.PetType;

import io.jmix.petclinic.view.main.MainView;

import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.*;

import static io.jmix.petclinic.view.pet.pettype.ColorGeneration.randomColor;

@Route(value = "pet-types/:id", layout = MainView.class)
@ViewController("petclinic_PetType.detail")
@ViewDescriptor("pet-type-detail-view.xml")
@EditedEntityContainer("petTypeDc")
public class PetTypeDetailView extends StandardDetailView<PetType> {

    @Subscribe
    public void onInitEntity(final InitEntityEvent<PetType> event) {
        event.getEntity().setColor(randomColor());
    }
}