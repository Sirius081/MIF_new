package Util;

import Dao.DictionaryDao;
import Entity.Forecast;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by sirius on 16-8-1.
 */
public class Dictionary {
    private static Map<Integer,String> modelMap=null;
    private static Map<Integer,String> variableMap=null;
    public static Map<Integer, String> getModelMap() {
        if(modelMap==null){
            modelMap=dao.getModel("model");
        }
        return modelMap;
    }

    public static Map<Integer, String> getVariableMap() {
        if(variableMap==null){
            variableMap=dao.getModel("variables");
        }
        return variableMap;
    }
    private static DictionaryDao dao=new DictionaryDao();

}
