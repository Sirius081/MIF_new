package Dao;

import Entity.Hospital;
import Entity.Region;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by sirius on 17-4-6.
 */
public class RegionDao {
//    public List<Region> getTop10(String orderBy, Region condition){
//        List<Region> regions=new ArrayList<Region>();
//        Connection con=DBtool.getConnection();
//        PreparedStatement stmt=null;
//        ResultSet rs=null;
//        StringBuffer sql=new StringBuffer("select a.year,a.identity,a.r_name as name,sum(a.m_count) as m_count" +
//                ",sum(a.h_count) as h_count,sum(a.h_fees) as h_fees,sum(a.h_groupfees) as h_groupfees" +
//                ",sum(a.m_fees) as m_fees,sum(a.m_groupfees) as m_groupfees" +
//                " from hospital a " +
//                " where 1=1");
//        if(condition.getIdentity()!=-1){
//            sql.append(" and identity="+condition.getIdentity());
//        }
//        if(condition.getYear()!=-1) {
//            sql.append(" and year="+condition.getYear());
//        }
//        if(condition.getName()!=null){
//            sql.append(" and r_name like '%"+condition.getName()+"%'");
//        }
//        if(condition.getIdentity()==-1&&condition.getYear()==-1&&condition.getName()==null){
//            sql.append(" group by r_name,year,identity");
//        }
//        sql.append(" order by "+orderBy+" desc limit 10");
//        try {
//            stmt=con.prepareStatement(sql.toString());
//
//            rs=stmt.executeQuery();
//            while(rs.next()){
//                regions.add(new Region(rs.getInt("year")
//                        , rs.getInt("identity")
//                        ,rs.getString("name")
//                        ,rs.getInt("m_count")
//                        ,rs.getInt("h_count")
//                        ,rs.getDouble("h_fees")
//                        ,rs.getDouble("h_groupfees")
//                        ,rs.getDouble("m_fees")
//                        ,rs.getDouble("m_groupfees")));
//            }
//        } catch (SQLException e) {
//            e.printStackTrace();
//        }finally {
//            try {
//                stmt.close();
//                rs.close();
//            } catch (SQLException e) {
//                e.printStackTrace();
//            }
//        }
//        return regions;
//    }
    public List<Region> getRegions(Region condition){
        List<Region> regions=new ArrayList<Region>();
        Connection con=DBtool.getConnection();
        PreparedStatement stmt=null;
        ResultSet rs=null;
        StringBuffer sql=new StringBuffer();
        sql.append("select a.year,a.identity,a.r_name as name,sum(a.m_count) as m_count" +
                ",sum(a.h_count) as h_count,sum(a.h_fees) as h_fees,sum(a.h_groupfees) as h_groupfees" +
                ",sum(a.m_fees) as m_fees,sum(a.m_groupfees) as m_groupfees" +
                " from hospital a " +
                " where 1=1");

        if(condition.getIdentity()!=-1){
            sql.append(" and identity="+condition.getIdentity());
        }
        if(condition.getYear()!=-1) {
            sql.append(" and year="+condition.getYear());
        }
        if(condition.getName()!=null){
            sql.append(" and r_name like '%"+condition.getName()+"%'");
        }
        sql.append(" group by r_name,year,identity");


        try {
            stmt=con.prepareStatement(sql.toString());

            rs=stmt.executeQuery();
            while(rs.next()){
                regions.add(new Region(rs.getInt("year")
                        , rs.getInt("identity")
                        ,rs.getString("name")
                        ,rs.getInt("m_count")
                        ,rs.getInt("h_count")
                        ,rs.getDouble("h_fees")
                        ,rs.getDouble("h_groupfees")
                        ,rs.getDouble("m_fees")
                        ,rs.getDouble("m_groupfees")));
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
        return regions;
    }
    public List<Hospital> getRegionDetails(Region condition){
        List<Hospital> hospitals=new ArrayList<Hospital>();
        Connection con=DBtool.getConnection();
        PreparedStatement stmt=null;
        ResultSet rs=null;
        StringBuffer sql=new StringBuffer("select a.*,grade.grade from hospital a " +
                " left join hgrade grade on grade.id=a.grade" +
                " where 1=1 ");
        if(condition.getName()!=null){
            sql.append(" and  a.r_name like '%"+condition.getName()+"%'");
        }
        if(condition.getYear()!=-1){
            sql.append(" and a.year="+condition.getYear());
        }
        try {
            stmt=con.prepareStatement(sql.toString());
            rs=stmt.executeQuery();
            while(rs.next()){
                hospitals.add(new Hospital(rs.getInt("year")
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
                        ,rs.getDouble("drugfees")));
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
        RegionDao dao=new RegionDao();
        Region r=new Region();
//
        dao.getRegionDetails(r);
        dao.getRegions(r);
    }
}
