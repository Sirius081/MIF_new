package Dao;

import Entity.Forecast;

import java.net.ConnectException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by sirius on 16-8-1.
 */
public class ForecastDao {
    public List<Forecast> getForecast(String model,String year, String variable){
        List<Forecast> list=new ArrayList<Forecast>();
        Connection con=DBtool.getConnection();
        PreparedStatement stmt=null;
        ResultSet rs=null;
        StringBuffer sql=new StringBuffer("select * from forecast where 1=1");
        if(model!=null){
            sql.append(" and model="+model);
        }
        if(year!=null){
            sql.append(" and year="+year);
        }
        if(variable!=null){
            sql.append(" and variable="+variable);
        }
        try {
            stmt=con.prepareStatement(sql.toString());
            rs=stmt.executeQuery();
            while(rs.next()){
                list.add(new Forecast(rs.getInt("model"),
                        rs.getString("time"),
                        rs.getInt("variable"),
                        rs.getString("value"),
                        rs.getString("errorrate")));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            try {
                stmt.close();
                rs.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }

        }
        return list;
    }

    public static void main(String[] args) {
        List<Forecast> list=new ForecastDao().getForecast("1",null,"1");
        for(Forecast forecast: list){
            System.out.println(forecast);
        }
    }
}
