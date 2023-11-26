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

@ResourceRole(name = "Nurse", code = NurseRole.CODE)
public interface NurseRole {

    String CODE = "Nurse";

    @EntityAttributePolicy(entityClass = Owner.class, attributes = "*", action = EntityAttributePolicyAction.MODIFY)
    @EntityPolicy(entityClass = Owner.class, actions = EntityPolicyAction.ALL)
    void owner();

    @EntityAttributePolicy(entityClass = Pet.class, attributes = "*", action = EntityAttributePolicyAction.MODIFY)
    @EntityPolicy(entityClass = Pet.class, actions = EntityPolicyAction.ALL)
    void pet();

    @EntityAttributePolicy(entityClass = Visit.class, attributes = "*", action = EntityAttributePolicyAction.MODIFY)
    @EntityPolicy(entityClass = Visit.class, actions = EntityPolicyAction.ALL)
    void visit();

    @EntityAttributePolicy(entityClass = Veterinarian.class, attributes = "*", action = EntityAttributePolicyAction.VIEW)
    @EntityPolicy(entityClass = Veterinarian.class, actions = EntityPolicyAction.READ)
    void veterinarian();

    @EntityAttributePolicy(entityClass = User.class, attributes = "*", action = EntityAttributePolicyAction.VIEW)
    @EntityPolicy(entityClass = User.class, actions = EntityPolicyAction.READ)
    void user();

    @EntityAttributePolicy(entityClass = Specialty.class, attributes = "*", action = EntityAttributePolicyAction.VIEW)
    @EntityPolicy(entityClass = Specialty.class, actions = EntityPolicyAction.READ)
    void specialty();

    @EntityAttributePolicy(entityClass = PetType.class, attributes = "*", action = EntityAttributePolicyAction.VIEW)
    @EntityPolicy(entityClass = PetType.class, actions = EntityPolicyAction.READ)
    void petType();

    @ViewPolicy(viewIds = {"petclinic_MyVisits", "petclinic_Pet.list", "petclinic_Owner.list", "petclinic_Visit.list", "petclinic_Specialty.list", "petclinic_Veterinarian.list", "petclinic_PetType.list", "petclinic_Owner.detail", "petclinic_Pet.detail", "petclinic_PetType.detail", "petclinic_PetType.lookup", "petclinic_Specialty.detail", "petclinic_Veterinarian.detail", "petclinic_Visit.detail"})
    void views();

    @MenuPolicy(menuIds = {"petclinic_MyVisits", "petclinic_Pet.list", "petclinic_Owner.list", "petclinic_Visit.list", "petclinic_Specialty.list", "petclinic_Veterinarian.list", "petclinic_PetType.list"})
    void screens();
}
