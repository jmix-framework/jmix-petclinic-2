package io.jmix.petclinic.entity.visit;

import io.jmix.core.metamodel.datatype.EnumClass;

import org.springframework.lang.Nullable;


public enum VisitTreatmentStatus implements EnumClass<String> {


    UPCOMING("UPCOMING"),
    IN_PROGRESS("IN_PROGRESS"),
    DONE("DONE");

    private String id;

    VisitTreatmentStatus(String value) {
        this.id = value;
    }

    public String getId() {
        return id;
    }

    @Nullable
    public static VisitTreatmentStatus fromId(String id) {
        for (VisitTreatmentStatus at : VisitTreatmentStatus.values()) {
            if (at.getId().equals(id)) {
                return at;
            }
        }
        return null;
    }
}