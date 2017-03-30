package Dao;

import Entity.AgeDistribution;
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
    public List<TotalTrend> getTotalTrend(){
        List<TotalTrend> list=new ArrayList<TotalTrend>();
        Connection con=DBtool.getConnection();
        PreparedStatement stmt=null;
        ResultSet rs=null;
        String sql="select * from totalTrend where 1=1";

        try {
            stmt=con.prepareStatement(sql);
            rs=stmt.executeQuery();
            while(rs.next()){
                list.add(new TotalTrend(rs.getInt("year")
                        , rs.getDouble("income")
                        ,rs.getDouble("cost")
                        ,rs.getInt("numbers")
                        ,rs.getInt("avgwage")));
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



    public List<AgeDistribution> getAgeDistribution(){
        List<AgeDistribution> list=new ArrayList<AgeDistribution>();
        Connection con=DBtool.getConnection();
        PreparedStatement stmt=null;
        ResultSet rs=null;
        String sql="select * from ageDistribution where 1=1";

        try {
            stmt=con.prepareStatement(sql);
            rs=stmt.executeQuery();
            while(rs.next()){
                list.add(new AgeDistribution(rs.getInt("year")
                        ,rs.getInt("ageId")
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
        new StatisticDao().getTotalTrend();
    }
}
