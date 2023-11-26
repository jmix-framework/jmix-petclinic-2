package io.jmix.petclinic.view.main;

import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import io.jmix.flowui.UiComponents;
import io.jmix.flowui.app.main.StandardMainView;
import io.jmix.flowui.view.Subscribe;
import io.jmix.flowui.view.ViewController;
import io.jmix.flowui.view.ViewDescriptor;
import io.jmix.petclinic.online.OnlineDemoDataCreator;
import org.springframework.beans.factory.annotation.Autowired;

@Route("")
@ViewController("MainView")
@ViewDescriptor("main-view.xml")
public class MainView extends StandardMainView {

    @Autowired
    private UiComponents uiComponents;

    @Autowired(required = false)
    private OnlineDemoDataCreator onlineDemoDataCreator;

    @Subscribe
    public void onInit(final InitEvent event) {
        Image image = uiComponents.create(Image.class);
        image.setSrc("images/petclinic_logo_with_slogan.svg");
        image.setClassName("login-image");
        image.setMaxWidth("50%");
        VerticalLayout verticalLayout = uiComponents.create(VerticalLayout.class);
        verticalLayout.setAlignItems(FlexComponent.Alignment.CENTER);
        verticalLayout.add(image);
        verticalLayout.setHeightFull();
        verticalLayout.setWidthFull();
        getContent().showRouterLayoutContent(verticalLayout);
    }

    @Subscribe
    public void onReady(final ReadyEvent event) {
        if (onlineDemoDataCreator != null) {
            onlineDemoDataCreator.createDemoData();
        }
    }
}
