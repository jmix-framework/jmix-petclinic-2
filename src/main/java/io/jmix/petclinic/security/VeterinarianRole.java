package io.jmix.petclinic.security;

import io.jmix.petclinic.entity.User;
import io.jmix.petclinic.entity.owner.Owner;
import io.jmix.petclinic.entity.pet.Pet;
import io.jmix.petclinic.entity.pet.PetType;
import io.jmix.petclinic.entity.veterinarian.Specialty;
import io.jmix.petclinic.entity.veterinarian.Veterinarian;
import io.jmix.petclinic.entity.visit.Visit;
import io.jmix.security.model.EntityAttributePolicyAction;
import io.jmix.security.model.EntityPolicyAction;
import io.jmix.security.role.annotation.EntityAttributePolicy;
import io.jmix.security.role.annotation.EntityPolicy;
import io.jmix.security.role.annotation.ResourceRole;
import io.jmix.securityflowui.role.annotation.MenuPolicy;
import io.jmix.securityflowui.role.annotation.ViewPolicy;

@ResourceRole(name = "Veterinarian", code = "Veterinarian")
public interface VeterinarianRole {
    @EntityAttributePolicy(entityClass = Visit.class, attributes = "*", action = EntityAttributePolicyAction.MODIFY)
    @EntityPolicy(entityClass = Visit.class, actions = EntityPolicyAction.ALL)
    void visit();

    @EntityAttributePolicy(entityClass = Pet.class, attributes = "*", action = EntityAttributePolicyAction.MODIFY)
    @EntityPolicy(entityClass = Pet.class, actions = EntityPolicyAction.ALL)
    void pet();

    @EntityAttributePolicy(entityClass = Owner.class, attributes = "*", action = EntityAttributePolicyAction.MODIFY)
    @EntityPolicy(entityClass = Owner.class, actions = EntityPolicyAction.ALL)
    void owner();

    @EntityAttributePolicy(entityClass = PetType.class, attributes = "*", action = EntityAttributePolicyAction.MODIFY)
    @EntityPolicy(entityClass = PetType.class, actions = EntityPolicyAction.ALL)
    void petType();

    @EntityAttributePolicy(entityClass = Specialty.class, attributes = "*", action = EntityAttributePolicyAction.MODIFY)
    @EntityPolicy(entityClass = Specialty.class, actions = EntityPolicyAction.ALL)
    void specialty();

    @EntityAttributePolicy(entityClass = User.class, attributes = "*", action = EntityAttributePolicyAction.MODIFY)
    @EntityPolicy(entityClass = User.class, actions = EntityPolicyAction.ALL)
    void user();

    @EntityAttributePolicy(entityClass = Veterinarian.class, attributes = "*", action = EntityAttributePolicyAction.MODIFY)
    @EntityPolicy(entityClass = Veterinarian.class, actions = EntityPolicyAction.ALL)
    void veterinarian();

    @MenuPolicy(menuIds = {"petclinic_Pet.list", "petclinic_Owner.list", "petclinic_Visit.list", "petclinic_Specialty.list", "petclinic_Veterinarian.list", "petclinic_PetType.list"})
    @ViewPolicy(viewIds = {"petclinic_Visit.list", "petclinic_Pet.list", "petclinic_Owner.list", "petclinic_Veterinarian.list", "petclinic_Specialty.list", "petclinic_PetType.list", "petclinic_Visit.detail", "petclinic_Veterinarian.detail", "petclinic_Pet.detail", "petclinic_Owner.detail"})
    void screens();
}