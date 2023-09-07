package io.jmix.petclinic.view.veterinarian.veterinarian;

import io.jmix.flowui.component.multiselectcomboboxpicker.JmixMultiSelectComboBoxPicker;
import io.jmix.flowui.component.textfield.TypedTextField;
import io.jmix.petclinic.entity.veterinarian.Specialty;
import io.jmix.petclinic.entity.veterinarian.Veterinarian;

import io.jmix.petclinic.view.main.MainView;

import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.*;

@Route(value = "veterinarians/:id", layout = MainView.class)
@ViewController("petclinic_Veterinarian.detail")
@ViewDescriptor("veterinarian-detail-view.xml")
@EditedEntityContainer("veterinarianDc")
public class VeterinarianDetailView extends StandardDetailView<Veterinarian> {

}