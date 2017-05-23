package Dao;




import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

import static jdk.nashorn.internal.objects.NativeMath.round;

/**
 * Created by song on 2017/1/15.
 */
public class ChargeDao {

    public ArrayList<Double> getForecast(double ceil,double floor,int ratio) {
        Connection con = DBtool.getConnection();
        PreparedStatement stmt = null;
        ResultSet rs = null;
        ArrayList<Double> result=new ArrayList<Double>();
        ArrayList<Double> r1=new ArrayList<Double>();
        ArrayList<Double> r2=new ArrayList<Double>();
        StringBuffer sql = new StringBuffer("select * from charge");
        try {
            stmt = con.prepareStatement(sql.toString());
            rs = stmt.executeQuery();
            while (rs.next()) {
                int year=rs.getInt("year");
                if(year>2015 && year<2021)
                {
                    int avgWage=rs.getInt("avgWage");
                    int working=rs.getInt("working");
                    int retired=rs.getInt("retired");
                    double charge1=((working*0.69/10000*avgWage+working*0.30/10000*avgWage*1.0+working*0.01/10000*avgWage*3)*0.09+avgWage*0.04/10000*retired);
                    DecimalFormat df = new DecimalFormat("0.00");
                    double charge=Double.valueOf(df.format(charge1));
                    r1.add(charge);
                }
                if(year>2015 && year<2021)
                {
                    int avgWage=rs.getInt("avgWage");
                    int working=rs.getInt("working");
                    int retired=rs.getInt("retired");
                    double charge1=(working*0.69/10000*avgWage+working*0.30/10000*avgWage*floor+working*0.01/10000*avgWage*ceil)*ratio/100+avgWage*0.04/10000*retired;
                    DecimalFormat df = new DecimalFormat("0.00");
                    double charge=Double.valueOf(df.format(charge1));
                    r2.add(charge);
                }
            }
            for(int i=0;i<r1.size();i++)
                result.add(r1.get(i));
            for(int i=0;i<r2.size();i++)
                result.add(r2.get(i));
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
    public ArrayList<Double> getGroup(double ceil,double floor,int ratio) {
        Connection con = DBtool.getConnection();
        PreparedStatement stmt = null;
        ResultSet rs = null;
        ArrayList<Double> result=new ArrayList<Double>();
        ArrayList<Double> r1=new ArrayList<Double>();
        StringBuffer sql = new StringBuffer("select * from group_income");
        try {
            stmt = con.prepareStatement(sql.toString());
            rs = stmt.executeQuery();
            while (rs.next()) {
                int avgWage = rs.getInt("avgWage");
                int working = rs.getInt("working");
                int retired = rs.getInt("retired");
                double charge1 = ((working * 0.69 / 10000 * avgWage + working * 0.30 / 10000 * avgWage * floor + working * 0.01 / 10000 * avgWage * ceil) * (ratio-2) / 100 + avgWage * 0.04 / 10000 * retired)*0.7;
                DecimalFormat df = new DecimalFormat("0.00");
                double charge = Double.valueOf(df.format(charge1));
                r1.add(charge);
            }
            for(int i=0;i<r1.size();i++)
                result.add(r1.get(i));
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
