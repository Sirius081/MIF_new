package Util;

import Dao.MybatisUtils;
import Service.IDictionary;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by sirius on 16-8-1.
 */
public class Dictionary {
    private static Map<Integer,String> modelMap=null;
    private static Map<Integer,String> variableMap=null;
    public static Map<Integer, String> getModelMap() {
        if(modelMap==null){
            modelMap=new HashMap<Integer, String>();
            for(HashMap<String,Object> map:dao.getModel("model")){
                Integer model=0;
                String name=null;
                for(Map.Entry<String,Object> entry:map.entrySet()){
                    if (entry.getKey().equals("name")){
                        name=(String)entry.getValue();
                    }else{
                        model=(Integer) entry.getValue();
                    }
                }
                modelMap.put(model,name);
            }
        }
        return modelMap;
    }

    public static Map<Integer, String> getVariableMap() {
        if(variableMap==null){
            variableMap=new HashMap<Integer, String>();
            for(HashMap<String,Object> map:dao.getModel("variables")){
                Integer variable=0;
                String name=null;
                for(Map.Entry<String,Object> entry:map.entrySet()){
                    if (entry.getKey().equals("name")){
                        name=(String)entry.getValue();
                    }else{
                        variable=(Integer)entry.getValue();
                    }
                }
                variableMap.put(variable,name);
            }
        }
        return variableMap;
    }
    private static IDictionary dao= MybatisUtils.getSqlSession().getMapper(IDictionary.class);

    public static void main(String[] args) {
        List<HashMap<String,Object>> map=dao.getModel("variables");
        System.out.println();
    }
}
