package io.jmix.petclinic.entity.pet;

import io.jmix.core.metamodel.annotation.JmixEntity;
import io.jmix.petclinic.entity.NamedEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@JmixEntity
@Table(name = "PETCLINIC_PET_TYPE")
@Entity(name = "petclinic_PetType")
public class PetType extends NamedEntity {
    @Column(name = "COLOR")
    private String color;

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}