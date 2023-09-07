package io.jmix.petclinic.view.visit.calendar;


import com.vaadin.flow.component.icon.Icon;

public enum VisitTypeIcon {

    PURPLE("theme:icons/purple.png"),
    YELLOW("theme:icons/yellow.png"),
    RED("theme:icons/red.png"),
    GREEN("theme:icons/green.png"),
    BLUE("theme:icons/blue.png");

    private final String source;

    VisitTypeIcon(String source) {
        this.source = source;
    }

    public String getSource() {
        return source;
    }
}
