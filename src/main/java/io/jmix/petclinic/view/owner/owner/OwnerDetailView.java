package io.jmix.petclinic.view.owner.owner;

import io.jmix.petclinic.entity.owner.Owner;

import io.jmix.petclinic.view.main.MainView;

import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.*;

@Route(value = "owners/:id", layout = MainView.class)
@ViewController("petclinic_Owner.detail")
@ViewDescriptor("owner-detail-view.xml")
@EditedEntityContainer("ownerDc")
public class OwnerDetailView extends StandardDetailView<Owner> {
}