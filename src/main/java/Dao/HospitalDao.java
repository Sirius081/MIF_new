package Dao;

import Entity.Disease;
import Entity.DiseaseHospital;
import Entity.Hospital;

import java.math.BigDecimal;
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
    public List<Hospital> getHospitals(Hospital condition){
        List<Hospital> hospitals=new ArrayList<Hospital>();
        Connection con=DBtool.getConnection();
        PreparedStatement stmt=null;
        ResultSet rs=null;
        StringBuffer sql=new StringBuffer("select a.*,grade.grade from hospital a " +
                " left join hgrade grade on grade.id=a.grade" +
                " where 1=1 ");
        if(condition.getIdentity()!=-1){
            sql.append( "and identity="+condition.getIdentity());
        }
        if(condition.getH_name()!=null){
            sql.append(" and h_name like '%"+condition.getH_name()+"%' ");
        }
        if(condition.getYear()!=-1){
            sql.append(" and year="+condition.getYear());
        }
        if(condition.getGrade()!=null){
            sql.append(" and grade.grade='"+condition.getGrade()+"'");
        }
        try {
            stmt=con.prepareStatement(sql.toString());
            rs=stmt.executeQuery();
            while(rs.next()){
                Hospital h=new Hospital(rs.getInt("year")
                        , rs.getInt("identity")
                        ,rs.getString("r_name")
                        ,rs.getString("h_name")
                        ,rs.getString("grade.grade")
                        ,rs.getInt("m_count")
                        ,rs.getInt("h_count")
                        ,rs.getDouble("h_fees")
                        ,rs.getDouble("h_groupfees")
                        ,rs.getDouble("m_fees")
                        ,rs.getDouble("m_groupfees")
                        ,rs.getDouble("drugfees"));
                if(h.getM_count()>0){
                    h.setAvg_mfees(new BigDecimal(h.getM_fees()/h.getM_count()).setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue());
                    h.setAvg_mgroupfees(new BigDecimal(h.getM_groupfees()/h.getM_count()).setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue());
                }
                if(h.getH_count()>0){
                    h.setAvg_hfees(new BigDecimal(h.getH_fees()/h.getH_count()).setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue());
                    h.setAvg_hgroupfees(new BigDecimal(h.getH_groupfees()/h.getH_count()).setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue());
                }
                hospitals.add(h);
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
    public List<Hospital> getTop10(String orderBy,Hospital condition){
        List<Hospital> hospitals=new ArrayList<Hospital>();
        Connection con=DBtool.getConnection();
        PreparedStatement stmt=null;
        ResultSet rs=null;
        StringBuffer sql=new StringBuffer("select a.*,grade.grade from hospital a " +
                " left join hgrade grade on a.grade=grade.id where 1=1");
        if(condition.getIdentity()!=-1){
            sql.append(" and identity="+condition.getIdentity());
        }
        if(condition.getYear()!=-1) {
            sql.append(" and year="+condition.getYear());
        }
        sql.append(" order by "+orderBy+" desc limit 10");
        try {
            stmt=con.prepareStatement(sql.toString());

            rs=stmt.executeQuery();
            while(rs.next()){
                Hospital h=new Hospital(rs.getInt("year")
                        , rs.getInt("identity")
                        ,rs.getString("r_name")
                        ,rs.getString("h_name")
                        ,rs.getString("grade.grade")
                        ,rs.getInt("m_count")
                        ,rs.getInt("h_count")
                        ,rs.getDouble("h_fees")
                        ,rs.getDouble("h_groupfees")
                        ,rs.getDouble("m_fees")
                        ,rs.getDouble("m_groupfees")
                        ,rs.getDouble("drugfees"));
                if(h.getM_count()>0){
                    h.setAvg_mfees(new BigDecimal(h.getM_fees()/h.getM_count()).setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue());
                    h.setAvg_mgroupfees(new BigDecimal(h.getM_groupfees()/h.getM_count()).setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue());
                }
                if(h.getH_count()>0){
                    h.setAvg_hfees(new BigDecimal(h.getH_fees()/h.getH_count()).setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue());
                    h.setAvg_hgroupfees(new BigDecimal(h.getH_groupfees()/h.getH_count()).setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue());
                }
                hospitals.add(h);
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
    public List<DiseaseHospital> getDetails(Hospital condition){
        List<DiseaseHospital> hospitals=new ArrayList<DiseaseHospital>();
        Connection con=DBtool.getConnection();
        PreparedStatement stmt=null;
        ResultSet rs=null;
        StringBuffer sql=new StringBuffer("select a.*,grade.grade from disease_hospital a " +
                " left join hgrade grade on grade.id=a.grade" +
                " where 1=1 ");

        if(condition.getIdentity()!=-1){
            sql.append( "and identity="+condition.getIdentity());
        }
        if(condition.getH_name()!=null){
            sql.append(" and h_name like '%"+condition.getH_name()+"%' ");
        }
        if(condition.getYear()!=-1){
            sql.append(" and year="+condition.getYear());
        }
        sql.append(" order by a.h_fees/a.h_count desc");
        try {
            stmt=con.prepareStatement(sql.toString());
            rs=stmt.executeQuery();
            while(rs.next()){
                hospitals.add(new DiseaseHospital(rs.getInt("year")
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
        return hospitals;
    }
    public static void main(String[] args) {
        Hospital h=new Hospital();
        h.setYear(2011);
        HospitalDao d=new HospitalDao();
        d.getHospitals(h);
        d.getDetails(h);
    }
}
