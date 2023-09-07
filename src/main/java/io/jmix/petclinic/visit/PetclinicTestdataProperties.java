package io.jmix.petclinic.visit;

import jakarta.validation.constraints.NotNull;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.bind.ConstructorBinding;
import org.springframework.context.annotation.Configuration;
import org.springframework.validation.annotation.Validated;

import java.util.List;

@Configuration
@ConfigurationProperties(prefix = "petclinic.testdata.visit")
@Validated
public class PetclinicTestdataProperties {

    @NotNull
    private Integer visitStartAmountPastDays;
    @NotNull
    private Integer visitStartAmountFutureDays;
    @NotNull
    private Integer amountPerDay;

    @NotNull
    private List<String> descriptionOptions;

    public void setVisitStartAmountPastDays(Integer visitStartAmountPastDays) {
        this.visitStartAmountPastDays = visitStartAmountPastDays;
    }

    public void setVisitStartAmountFutureDays(Integer visitStartAmountFutureDays) {
        this.visitStartAmountFutureDays = visitStartAmountFutureDays;
    }

    public void setAmountPerDay(Integer amountPerDay) {
        this.amountPerDay = amountPerDay;
    }

    public void setDescriptionOptions(List<String> descriptionOptions) {
        this.descriptionOptions = descriptionOptions;
    }

    public Integer getVisitStartAmountPastDays() {
        return visitStartAmountPastDays;
    }

    public Integer getVisitStartAmountFutureDays() {
        return visitStartAmountFutureDays;
    }

    public Integer getAmountPerDay() {
        return amountPerDay;
    }

    public List<String> getDescriptionOptions() {
        return descriptionOptions;
    }
}