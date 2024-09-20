package io.jmix.petclinic.entity.visit;

import io.jmix.core.metamodel.datatype.EnumClass;

import javax.annotation.Nullable;


public enum VisitType implements EnumClass<String> {

    REGULAR_CHECKUP("REGULAR_CHECKUP", "event-blue", "BLUE", "#BAF7FF", "#249FAF", "#000000"),
    RECHARGE("RECHARGE", "event-green", "GREEN", "#BAF2D8", "#23BA75", "#000000"),
    STATUS_CONDITION_HEALING("STATUS_CONDITION_HEALING", "event-yellow", "YELLOW", "#FFE2AD", "#E3A023", "#000000"),
    DISEASE_TREATMENT("DISEASE_TREATMENT", "event-red", "RED", "#FFC8D0", "#DF6679", "#000000"),
    OTHER("OTHER", "event-purple", "PURPLE", "#D6D0FF", "#6E64B9", "#000000");

    private final String id;
    private final String styleName;
    private final String icon;
    private final String backgroundColor;
    private final String borderColor;
    private final String textColor;

    VisitType(String value, String styleName, String icon, String backgroundColor, String borderColor, String textColor) {
        this.id = value;
        this.styleName = styleName;
        this.icon = icon;
        this.backgroundColor = backgroundColor;
        this.borderColor = borderColor;
        this.textColor = textColor;
    }

    public String getId() {
        return id;
    }

    @Nullable
    public static VisitType fromId(String id) {
        for (VisitType at : VisitType.values()) {
            if (at.getId().equals(id)) {
                return at;
            }
        }
        return null;
    }

    public String getStyleName() {
        return styleName;
    }

    public String getIcon() {
        return icon;
    }

    public String getBackgroundColor() {
        return backgroundColor;
    }

    public String getBorderColor() {
        return borderColor;
    }

    public String getTextColor() {
        return textColor;
    }
}