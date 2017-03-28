package Dao;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DecimalFormat;
import java.util.ArrayList;

/**
 * Created by song on 2017/1/16.
 */
public class CostDao {
    public double getForecast(int year,int line10,int ratio10,int line11,int ratio11,int line20,int ratio20,int line21,int ratio21,int line30,
                              int ratio30,int line31,int ratio31,int line40,int ratio40,int line41,int ratio41) {
        Connection con = DBtool.getConnection();
        PreparedStatement stmt = null;
        ResultSet rs = null;
        double result = 0;
        StringBuffer sql = new StringBuffer("select * from cost where year=?");
        try {
            stmt = con.prepareStatement(sql.toString());
            stmt.setInt(1,year);
            rs = stmt.executeQuery();
            while (rs.next()) {
                double yjzzjlfy=rs.getDouble("yjzzjlfy");
                double yjzzylfy=rs.getDouble("yjzzylfy");
                int zyrc10=rs.getInt("zyrc10");
                double yjtxjlfy=rs.getDouble("yjtxjlfy");
                double yjtxylfy=rs.getDouble("yjtxylfy");
                int zyrc11=rs.getInt("zyrc11");
                double ejzzjlfy=rs.getDouble("ejzzjlfy");
                double ejzzylfy=rs.getDouble("ejzzylfy");
                int zyrc20=rs.getInt("zyrc20");
                double ejtxjlfy=rs.getDouble("ejtxjlfy");
                double ejtxylfy=rs.getDouble("ejtxylfy");
                int zyrc21=rs.getInt("zyrc21");
                double sjzzjlfy=rs.getDouble("sjzzjlfy");
                double sjzzylfy=rs.getDouble("sjzzylfy");
                int zyrc30=rs.getInt("zyrc30");
                double sjtxjlfy=rs.getDouble("sjtxjlfy");
                double sjtxylfy=rs.getDouble("sjtxylfy");
                int zyrc31=rs.getInt("zyrc31");
                double sqzzjlfy=rs.getDouble("sqzzjlfy");
                double sqzzlyfy=rs.getDouble("sqzzylfy");
                int zyrc40=rs.getInt("zyrc40");
                double sqtxjlfy=rs.getDouble("sqtxjlfy");
                double sqtxylfy=rs.getDouble("sqtxylfy");
                int zyrc41=rs.getInt("zyrc41");
                double result1=((yjzzjlfy+yjzzylfy*0.9-zyrc10*line10)*ratio10+(yjtxjlfy+yjtxylfy*0.9-zyrc11*line11)*ratio11+
                        (ejzzjlfy+ejzzylfy*0.9-zyrc20*line20)*ratio20+(ejtxjlfy+ejtxylfy*0.9-zyrc21*line21)*ratio21+
                        (sjzzjlfy+sjzzylfy*0.9-zyrc30*line30)*ratio30+(sjtxjlfy+sjtxylfy*0.9-zyrc31*line31)*ratio31+
                        (sqzzjlfy+sqzzlyfy*0.9-zyrc40*line40)*ratio40+(sqtxjlfy+sqtxylfy*0.9-zyrc41*line41)*ratio41)/1000000;
                BigDecimal bg = new BigDecimal(result1);
                result =bg.setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                stmt.close();
                rs.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return result;
    }
    public ArrayList<Double> getPastcost(int line10,int ratio10,int line11,int ratio11,int line20,int ratio20,int line21,int ratio21,int line30,
                                         int ratio30,int line31,int ratio31,int line40,int ratio40,int line41,int ratio41) {
        Connection con = DBtool.getConnection();
        PreparedStatement stmt = null;
        ResultSet rs = null;
        ArrayList<Double> result=new ArrayList<Double>();
        double cost=0;
        StringBuffer sql = new StringBuffer("select * from pastcost");
        try {
            stmt = con.prepareStatement(sql.toString());
            rs = stmt.executeQuery();
            while (rs.next()) {
                cost=rs.getDouble("fees")/10000;
                result.add(cost);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                stmt.close();
                rs.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        StringBuffer sql1 = new StringBuffer("select * from cost");
        try {
            stmt = con.prepareStatement(sql1.toString());
            rs = stmt.executeQuery();
            while (rs.next()) {
                double yjzzjlfy=rs.getDouble("yjzzjlfy");
                double yjzzylfy=rs.getDouble("yjzzylfy");
                int zyrc10=rs.getInt("zyrc10");
                double yjtxjlfy=rs.getDouble("yjtxjlfy");
                double yjtxylfy=rs.getDouble("yjtxylfy");
                int zyrc11=rs.getInt("zyrc11");
                double ejzzjlfy=rs.getDouble("ejzzjlfy");
                double ejzzylfy=rs.getDouble("ejzzylfy");
                int zyrc20=rs.getInt("zyrc20");
                double ejtxjlfy=rs.getDouble("ejtxjlfy");
                double ejtxylfy=rs.getDouble("ejtxylfy");
                int zyrc21=rs.getInt("zyrc21");
                double sjzzjlfy=rs.getDouble("sjzzjlfy");
                double sjzzylfy=rs.getDouble("sjzzylfy");
                int zyrc30=rs.getInt("zyrc30");
                double sjtxjlfy=rs.getDouble("sjtxjlfy");
                double sjtxylfy=rs.getDouble("sjtxylfy");
                int zyrc31=rs.getInt("zyrc31");
                double sqzzjlfy=rs.getDouble("sqzzjlfy");
                double sqzzlyfy=rs.getDouble("sqzzylfy");
                int zyrc40=rs.getInt("zyrc40");
                double sqtxjlfy=rs.getDouble("sqtxjlfy");
                double sqtxylfy=rs.getDouble("sqtxylfy");
                int zyrc41=rs.getInt("zyrc41");
                cost=((yjzzjlfy+yjzzylfy*0.9-zyrc10*line10)*ratio10+(yjtxjlfy+yjtxylfy*0.9-zyrc11*line11)*ratio11+
                        (ejzzjlfy+ejzzylfy*0.9-zyrc20*line20)*ratio20+(ejtxjlfy+ejtxylfy*0.9-zyrc21*line21)*ratio21+
                        (sjzzjlfy+sjzzylfy*0.9-zyrc30*line30)*ratio30+(sjtxjlfy+sjtxylfy*0.9-zyrc31*line31)*ratio31+
                        (sqzzjlfy+sqzzlyfy*0.9-zyrc40*line40)*ratio40+(sqtxjlfy+sqtxylfy*0.9-zyrc41*line41)*ratio41)/1000000;
                result.add(cost);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                stmt.close();
                rs.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return result;
    }
}
