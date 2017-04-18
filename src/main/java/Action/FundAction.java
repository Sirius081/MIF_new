package Action;

import Dao.MybatisUtils;
import Entity.Forecast;
import Entity.KeyValue;
import Service.IForecast;
import Util.Dictionary;
import com.opensymphony.xwork2.ActionSupport;

import java.util.ArrayList;
import java.util.List;


/**
 * Created by sirius on 16-7-27.
 */
public class FundAction extends ActionSupport{
    static private IForecast fDao=MybatisUtils.getSqlSession().getMapper(IForecast.class);

    //get,返回给前台
    private List<Forecast> incomeList;
    private List<Forecast> costList;
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
        if(year!=null){
            incomeList=fDao.getForecast("4",Integer.parseInt(year),1);
            costList=fDao.getForecast("3",Integer.parseInt(year),2);
        }else{
            incomeList=fDao.getForecast("4",0,1);
            costList=fDao.getForecast("3",0,2);
        }

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

    public List<Forecast> getIncomeList() {
        return incomeList;
    }

    public List<Forecast> getCostList() {
        return costList;
    }


    public static void main(String[] args) {
        FundAction f=new FundAction();
        List<Forecast> fs=f.fDao.getForecast("1",0,1);
        System.out.println();
    }

}
