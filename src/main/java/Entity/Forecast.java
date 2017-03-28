package Entity;

import Util.Dictionary;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by sirius on 16-8-1.
 */
public class Forecast {
    private String model;
    private String time ;
    private String variable;
    private String value;
    private String errorRate;

    public Forecast(int model, String time, int variable, String value, String errorRate) {
        this.model = Dictionary.getModelMap().get(model);
        this.time = time.substring(0,4);
        this.variable =Dictionary.getVariableMap().get(variable);
        this.value = value;
        this.errorRate = errorRate;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getVariable() {
        return variable;
    }

    public void setVariable(String variable) {
        this.variable = variable;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getErrorRate() {
        return errorRate;
    }

    public void setErrorRate(String errorRate) {
        this.errorRate = errorRate;
    }

    @Override
    public String toString() {
        return "Forecast{" +
                "model='" + model + '\'' +
                ", time='" + time + '\'' +
                ", variable='" + variable + '\'' +
                ", value='" + value + '\'' +
                ", errorRate='" + errorRate + '\'' +
                '}';
    }

}
