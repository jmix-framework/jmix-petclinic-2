package io.jmix.petclinic.view.owner;

import io.jmix.petclinic.entity.owner.Owner;

import io.jmix.petclinic.view.main.MainView;

import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.*;

@Route(value = "owners", layout = MainView.class)
@ViewController("petclinic_Owner.list")
@ViewDescriptor("owner-list-view.xml")
@LookupComponent("ownersDataGrid")
@DialogMode(width = "50em")
public class OwnerListView extends StandardListView<Owner> {
}