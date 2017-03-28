package Action;

import Dao.ForecastDao;
import Entity.Forecast;
import Entity.KeyValue;
import Util.Dictionary;
import com.opensymphony.xwork2.ActionSupport;

import java.util.ArrayList;
import java.util.List;


/**
 * Created by sirius on 16-7-27.
 */
public class FundAction extends ActionSupport{
    static private ForecastDao fDao;
    static{
        fDao=new ForecastDao();
    }
    //get,返回给前台
    private List<Forecast> forecastList;
    private List<KeyValue> modelList;
    private List<KeyValue> variableList;
    //set,前台传参
    private String model;
    private String variable;
    private String year;

    public String init(){
        modelList=new ArrayList<KeyValue>();
        variableList=new ArrayList<KeyValue>();
        for(int key: Dictionary.getModelMap().keySet()){
            modelList.add(new KeyValue(key,Dictionary.getModelMap().get(key)));
        }
        for(int key: Dictionary.getVariableMap().keySet()){
            variableList.add(new KeyValue(key,Dictionary.getVariableMap().get(key)));
        }
        return SUCCESS;
    }
    /**
     *
     * @return
     */
    public String query(){
        forecastList=fDao.getForecast(model,year,variable);
        return SUCCESS;
    }

    public List<KeyValue> getVariableList() {
        return variableList;
    }

    public List<KeyValue> getModelList() {
        return modelList;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public void setModel(String model) {

        this.model = model;
    }

    public void setVariable(String variable) {
        this.variable = variable;
    }


    public List<Forecast> getForecastList() {
        return forecastList;
    }


}
