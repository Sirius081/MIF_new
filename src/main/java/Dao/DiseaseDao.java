package Dao;

import Entity.Disease;
import Entity.DiseaseHospital;

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
        if(d.getIdentity()!=-1){
            sql.append(" and identity="+d.getIdentity());
        }
        if(d.getName()!=null){
            sql.append(" and name like '%"+d.getName()+"%'");
        }
        if(d.getYear()!=-1){
            sql.append(" and year="+d.getYear());
        }
        try {
            stmt=con.prepareStatement(sql.toString());
            rs=stmt.executeQuery();
            while(rs.next()){
                Disease di=new Disease(rs.getInt("year")
                        , rs.getInt("identity")
                        ,rs.getString("name")
                        ,rs.getInt("h_count")
                        ,rs.getDouble("h_fees")
                        ,rs.getDouble("h_groupfees"));
                if(d.getH_count()>0){
                    d.setAvg_hfees(d.getH_fees()/d.getH_count());
                    d.setAvg_groupfees(d.getH_groupfees()/d.getH_count());
                }
                diseases.add(di);
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
    public List<Disease> getTop10(String orderBy,Disease condition){
        List<Disease> diseases=new ArrayList<Disease>();
        Connection con=DBtool.getConnection();
        PreparedStatement stmt=null;
        ResultSet rs=null;
        StringBuffer sql=new StringBuffer("select * from disease where 1=1 ");
        if(condition.getYear()!=-1){
            sql.append(" and year="+condition.getYear());
        }
        if(condition.getIdentity()!=-1){
            sql.append(" and identity="+condition.getIdentity());
        }
        sql.append(" order by "+orderBy+" desc limit 10");
        try {
            stmt=con.prepareStatement(sql.toString());
            rs=stmt.executeQuery();
            while(rs.next()){
                Disease d=new Disease(rs.getInt("year")
                        , rs.getInt("identity")
                        ,rs.getString("name")
                        ,rs.getInt("h_count")
                        ,rs.getDouble("h_fees")
                        ,rs.getDouble("h_groupfees"));
                if(d.getH_count()>0){
                    d.setAvg_hfees(d.getH_fees()/d.getH_count());
                    d.setAvg_groupfees(d.getH_groupfees()/d.getH_count());
                }
                diseases.add(d);
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
    public List<DiseaseHospital> getDetails(Disease d){
        List<DiseaseHospital> diseases=new ArrayList<DiseaseHospital>();
        Connection con=DBtool.getConnection();
        PreparedStatement stmt=null;
        ResultSet rs=null;
        StringBuffer sql=new StringBuffer("select * from disease_hospital a"+
                " left join hgrade grade on grade.id=a.grade"+
                " where 1=1");
        if(d.getIdentity()!=-1){
            sql.append(" and identity="+d.getIdentity());
        }
        if(d.getName()!=null){
            sql.append(" and d_name like '%"+d.getName()+"%'");
        }
        if(d.getYear()!=-1){
            sql.append(" and year="+d.getYear());
        }
        try {
            stmt=con.prepareStatement(sql.toString());
            rs=stmt.executeQuery();
            while(rs.next()){
                diseases.add(new DiseaseHospital(rs.getInt("year")
                        , rs.getInt("identity")
                        ,rs.getString("h_name")
                        ,rs.getString("grade.grade")
                        ,rs.getString("d_name")
                        ,rs.getInt("h_count")
                        ,rs.getDouble("h_fees")
                        ,rs.getDouble("h_groupfees")));
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

        DiseaseDao dao=new DiseaseDao();
        Disease d=new Disease();
        d.setYear(2011);
        dao.getDisease(d);
        dao.getTop10("h_fees",d);
        dao.getDetails(d);
    }
}
