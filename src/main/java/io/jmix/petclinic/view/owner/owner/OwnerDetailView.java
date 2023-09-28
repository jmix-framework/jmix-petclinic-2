package io.jmix.petclinic.view.owner.owner;

import com.vaadin.flow.component.html.H3;
import io.jmix.petclinic.entity.owner.Owner;

import io.jmix.petclinic.view.main.MainView;

import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.*;
import org.springframework.beans.factory.annotation.Autowired;

@Route(value = "owners/:id", layout = MainView.class)
@ViewController("petclinic_Owner.detail")
@ViewDescriptor("owner-detail-view.xml")
@EditedEntityContainer("ownerDc")
public class OwnerDetailView extends StandardDetailView<Owner> {
    @ViewComponent
    private H3 nameHeader;
    @Autowired
    private MessageBundle messageBundle;

    @Subscribe
    public void onReady(final ReadyEvent event) {
        nameHeader.setText(messageBundle.formatMessage("ownerNameHeader", getEditedEntity().getFullName()));
    }





}
