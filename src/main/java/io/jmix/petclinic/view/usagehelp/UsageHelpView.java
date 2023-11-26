package io.jmix.petclinic.view.usagehelp;


import io.jmix.flowui.view.DialogMode;
import io.jmix.petclinic.view.main.MainView;

import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.StandardView;
import io.jmix.flowui.view.ViewController;
import io.jmix.flowui.view.ViewDescriptor;

@Route(value = "UsageHelpView", layout = MainView.class)
@ViewController("petclinic_UsageHelpView")
@ViewDescriptor("usage-help-view.xml")
@DialogMode(closeOnOutsideClick = true, closeOnEsc = true)
public class UsageHelpView extends StandardView {
}