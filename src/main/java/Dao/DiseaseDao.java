package Dao;

import Entity.Disease;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by sirius on 17-1-10.
 */
public class DiseaseDao {

    public List<Disease> getDisease(Disease d){
        List<Disease> diseases=new ArrayList<Disease>();
        Connection con=DBtool.getConnection();
        PreparedStatement stmt=null;
        ResultSet rs=null;
        StringBuffer sql=new StringBuffer("select * from disease where 1=1");
        if(d.getName()!=null){
            sql.append(" and name like '%"+d.getName()+"%'");
        }
        if(d.getYear()!=0){
            sql.append(" and year="+d.getYear());
        }
        try {
            stmt=con.prepareStatement(sql.toString());
            rs=stmt.executeQuery();
            while(rs.next()){
                diseases.add(new Disease(rs.getInt("id")
                        , rs.getString("name")
                        ,rs.getInt("year")
                        ,rs.getFloat("fees")
                        ,rs.getFloat("groupfees")
                        ,rs.getInt("s_count")));
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
        return diseases;
    }
    public List<Disease> getTop10(String orderBy,int year){
        List<Disease> diseases=new ArrayList<Disease>();
        Connection con=DBtool.getConnection();
        PreparedStatement stmt=null;
        ResultSet rs=null;
        StringBuffer sql=new StringBuffer("select * from disease where year=? order by "+orderBy+" desc limit 10");
        try {
            stmt=con.prepareStatement(sql.toString());
            stmt.setInt(1,year);
            rs=stmt.executeQuery();
            while(rs.next()){
                diseases.add(new Disease(rs.getInt("id")
                        , rs.getString("name")
                        ,rs.getInt("year")
                        ,rs.getFloat("fees")
                        ,rs.getFloat("groupfees")
                        ,rs.getInt("s_count")));
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
        return diseases;
    }
    public static void main(String[] args) {
        new DiseaseDao().getTop10("fees",2015);
    }
}
