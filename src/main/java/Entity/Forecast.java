package Entity;

import Util.Dictionary;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by sirius on 16-8-1.
 */
public class Forecast {
    private String model;
    private int time ;
    private String variable;
    private double value;
    private double errorRate;

    public Forecast(long model, int time, long variable, double value, double errorRate) {
        this.model = Dictionary.getModelMap().get(model);
        this.time = time;
        this.variable =Dictionary.getVariableMap().get(variable);
        this.value = value;
        this.errorRate = errorRate;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getTime() {
        return time;
    }

    public void setTime(int time) {
        this.time = time;
    }

    public String getVariable() {
        return variable;
    }

    public void setVariable(String variable) {
        this.variable = variable;
    }

    public double getValue() {
        return value;
    }

    public void setValue(double value) {
        this.value = value;
    }

    public double getErrorRate() {
        return errorRate;
    }

    public void setErrorRate(double errorRate) {
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
