package Dao;

import Entity.AgeDistribution;
import Entity.FeesDetail;
import Entity.TotalTrend;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by sirius on 17-3-30.
 */
public class StatisticDao {
    /**
     * get totalTrend by year
     * @return
     */
    public List<TotalTrend> getTotalTrend(TotalTrend condition){
        List<TotalTrend> list=new ArrayList<TotalTrend>();
        Connection con=DBtool.getConnection();
        PreparedStatement stmt=null;
        ResultSet rs=null;
        //sql string
        StringBuffer sql=new StringBuffer("select * from totalTrend where 1=1 ");
        if(condition.getIdentity()!=-1){//query by identity
            sql.append("and identity="+condition.getIdentity());
        }
        sql.append(" order by year");
        try {
            stmt=con.prepareStatement(sql.toString());
            rs=stmt.executeQuery();
            while(rs.next()){
                list.add(new TotalTrend(rs.getInt("year")
                        ,rs.getInt("identity")
                        , rs.getDouble("income")
                        ,rs.getDouble("cost")
                        ,rs.getInt("numbers")
                        ,rs.getInt("avgwage")
                        ,rs.getInt("working")
                        ,rs.getInt("retired")
                ));
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

    public List<FeesDetail> getFeesDetail(FeesDetail condition){
        List<FeesDetail> list=new ArrayList<FeesDetail>();
        Connection con=DBtool.getConnection();
        PreparedStatement stmt=null;
        ResultSet rs=null;
        //sql string
        StringBuffer sql=new StringBuffer("select year,identity,h.grade as grade,m_fees,h_fees,m_count,h_count,drugfees" +
                " from feesDetail f " +
                " left join hgrade h on h.id=f.grade" +
                " where 1=1 ");
        if(condition.getIdentity()!=-1){//query by identity
            sql.append(" and identity="+condition.getIdentity());
        }
        sql.append("");
        sql.append(" order by year, h.id");


        try {
            stmt=con.prepareStatement(sql.toString());
            rs=stmt.executeQuery();
            while(rs.next()){
                list.add(new FeesDetail(rs.getInt("year")
                        ,rs.getInt("identity")
                        ,rs.getString("grade")
                        ,rs.getDouble("m_fees")
                        ,rs.getDouble("h_fees")
                        ,rs.getInt("m_count")
                        ,rs.getInt("h_count")
                        ,rs.getDouble("drugfees")
                ));
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

    public List<AgeDistribution> getAgeDistribution(AgeDistribution condition){
        List<AgeDistribution> list=new ArrayList<AgeDistribution>();
        Connection con=DBtool.getConnection();
        PreparedStatement stmt=null;
        ResultSet rs=null;
        StringBuffer sql=new StringBuffer("select * from ageDistribution where 1=1 ");
        if(condition.getIdentity()!=-1){//query by identity
            sql.append("and identity="+condition.getIdentity());
        }
        sql.append(" order by year, ageId");
        try {
            stmt=con.prepareStatement(sql.toString());
            rs=stmt.executeQuery();
            while(rs.next()){
                list.add(new AgeDistribution(rs.getInt("year")
                        ,rs.getInt("ageId")
                        ,rs.getInt("identity")
                        ,rs.getInt("c_count")
                        ,rs.getInt("m_count")
                        ,rs.getInt("h_count")
                        , rs.getDouble("m_fees")
                        ,rs.getDouble("h_fees")
                        ));
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
    }
}
