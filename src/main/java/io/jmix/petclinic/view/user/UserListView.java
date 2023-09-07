package io.jmix.petclinic.view.user;

import io.jmix.petclinic.entity.User;
import io.jmix.petclinic.view.main.MainView;
import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.*;

@Route(value = "users", layout = MainView.class)
@ViewController("User.list")
@ViewDescriptor("user-list-view.xml")
@LookupComponent("usersDataGrid")
@DialogMode(width = "50em")
public class UserListView extends StandardListView<User> {
}