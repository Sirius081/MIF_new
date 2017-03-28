package Dao;




import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import static jdk.nashorn.internal.objects.NativeMath.round;

/**
 * Created by song on 2017/1/15.
 */
public class ChargeDao {

    public double getForecast(int year,int avgWage,int ceil,int floor,int ratio) {
        Connection con = DBtool.getConnection();
        PreparedStatement stmt = null;
        ResultSet rs = null;
        double result=0;
        StringBuffer sql = new StringBuffer("select * from charge where year=?");
        try {
            stmt = con.prepareStatement(sql.toString());
            stmt.setInt(1,year);
            rs = stmt.executeQuery();
            while (rs.next()) {

                int ceil_number=rs.getInt("ceil_number");
                int floor_number=rs.getInt("floor_number");
                int number=rs.getInt("number");
                double base=rs.getInt("base");
                double result1=((floor_number*avgWage+ceil_number*ceil)*ratio/100+number*base*0.04)/10000;
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

    public ArrayList<Double> getForecast(int year,int avgWage,int ceil,int floor,int ratio1,int ratio2) {
        Connection con = DBtool.getConnection();
        PreparedStatement stmt = null;
        ResultSet rs = null;
        ArrayList<Double> result=new ArrayList<Double>();
        StringBuffer sql = new StringBuffer("select * from charge where year=?");
        try {
            stmt = con.prepareStatement(sql.toString());
            stmt.setInt(1,year);
            rs = stmt.executeQuery();
            while (rs.next()) {

                int ceil_number=rs.getInt("ceil_number");
                int floor_number=rs.getInt("floor_number");
                int number=rs.getInt("number");
                double base=rs.getInt("base");
                for (double ratio=ratio1;ratio<=ratio2;ratio=ratio+0.1){
                    double charge1=((floor_number*avgWage+ceil_number*ceil)*ratio/100+number*base*0.04)/10000;
                    BigDecimal bg = new BigDecimal(charge1);
                    double charge =bg.setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
                    result.add(charge);
                }

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
    public static void main(String[] args) {
        double result=new ChargeDao().getForecast(2016,45120,45120,135360,9);                ///测试拿数据是否成功
        System.out.println(result);
    }
}
