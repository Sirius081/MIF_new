package Dao;

import Entity.Drug;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by sirius on 17-1-11.
 */
public class DrugDao {
    public List<Drug> getDrugs(Drug drug){
        List<Drug> drugs=new ArrayList<Drug>();
        Connection con=DBtool.getConnection();
        PreparedStatement stmt=null;
        ResultSet rs=null;
        StringBuffer sql=new StringBuffer("select * from drug where 1=1 ");
        if(drug.getName()!=null){
            sql.append(" and name like '%"+drug.getName()+"%' ");
        }
        if(drug.getYear()!=0){
            sql.append(" and year="+drug.getYear());
        }
        try {
            stmt=con.prepareStatement(sql.toString());
            rs=stmt.executeQuery();
            while(rs.next()){
                drugs.add(new Drug(rs.getInt("id")
                        , rs.getInt("year")
                        ,rs.getString("name")
                        ,rs.getFloat("fees")));
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
        return drugs;
    }
    public List<Drug> getTop10(String orderBy,int year){
        List<Drug> drugs=new ArrayList<Drug>();
        Connection con=DBtool.getConnection();
        PreparedStatement stmt=null;
        ResultSet rs=null;
        StringBuffer sql=new StringBuffer("select * from drug where year=? order by "+orderBy+" desc limit 10");
        try {
            stmt=con.prepareStatement(sql.toString());
            stmt.setInt(1,year);
            rs=stmt.executeQuery();
            while(rs.next()){
                drugs.add(new Drug(rs.getInt("id")
                        ,rs.getInt("year")
                        ,rs.getString("name")
                        ,rs.getFloat("fees")));
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
        return drugs;
    }
    public static void main(String[] args) {
//        new DrugDao().getDrugs(new Drug());
        new DrugDao().getTop10("fees",2015);
    }
}
