package Dao;

import Entity.Hospital;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by sirius on 17-1-11.
 */
public class HospitalDao {
    public List<Hospital> getHospitals(Hospital hospital){
        List<Hospital> hospitals=new ArrayList<Hospital>();
        Connection con=DBtool.getConnection();
        PreparedStatement stmt=null;
        ResultSet rs=null;
        StringBuffer sql=new StringBuffer("select * from hospital where 1=1 ");
        if(hospital.getNum()!=null){
            sql.append(" and num like '%"+hospital.getNum()+"%' ");
        }
        if(hospital.getYear()!=0){
            sql.append(" and year="+hospital.getYear());
        }
        if(hospital.getLevel()!=null){
<<<<<<< HEAD
            sql.append(" and level='"+hospital.getLevel()+"\r'");
=======
            sql.append(" and level='"+hospital.getLevel()+"'");
>>>>>>> df9c04cbc0372faff294ebe0e59fdb5909d9d5b9
        }
        try {
            stmt=con.prepareStatement(sql.toString());
            rs=stmt.executeQuery();
            while(rs.next()){
                hospitals.add(new Hospital(rs.getInt("id")
                        , rs.getString("num")
                        ,rs.getInt("year")
                        ,rs.getFloat("fees")
                        ,rs.getFloat("groupfees")
                        ,rs.getInt("m_count")
                        ,rs.getInt("h_count")
<<<<<<< HEAD
                        ,rs.getString("level")));
=======
                ,rs.getString("level")));
>>>>>>> df9c04cbc0372faff294ebe0e59fdb5909d9d5b9
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
        return hospitals;
    }
    public List<Hospital> getTop10(String orderBy,int year){
        List<Hospital> hospitals=new ArrayList<Hospital>();
        Connection con=DBtool.getConnection();
        PreparedStatement stmt=null;
        ResultSet rs=null;
<<<<<<< HEAD
        StringBuffer sql=new StringBuffer("select * from hospital where year=? order by "+orderBy+" desc limit 10");
=======
        StringBuffer sql=new StringBuffer("select * from disease where year=? order by "+orderBy+" desc limit 10");
>>>>>>> df9c04cbc0372faff294ebe0e59fdb5909d9d5b9
        try {
            stmt=con.prepareStatement(sql.toString());
            stmt.setInt(1,year);
            rs=stmt.executeQuery();
            while(rs.next()){
                hospitals.add(new Hospital(rs.getInt("id")
                        , rs.getString("num")
                        ,rs.getInt("year")
                        ,rs.getFloat("fees")
                        ,rs.getFloat("groupfees")
                        ,rs.getInt("m_count")
                        ,rs.getInt("h_count")
                        ,rs.getString("level")));
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
        return hospitals;
    }
    public static void main(String[] args) {
        new HospitalDao().getHospitals(new Hospital());
    }
}
