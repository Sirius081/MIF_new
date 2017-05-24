package Dao;

import Entity.YLBX;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by sirius on 16-8-1.
 */
public class YLBXDao {
    public List<YLBX> getAllData(){
        List<YLBX> list=new ArrayList<YLBX>();
        Connection con=DBtool.getConnection();
        String sql="select * from ylbx";
        PreparedStatement stmt=null;
        ResultSet rs=null;
        try {
            stmt=con.prepareStatement(sql);
            rs=stmt.executeQuery();
            while(rs.next()){
                list.add(new YLBX(rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getString(4),
                        rs.getString(5),
                        rs.getString(6),
                        rs.getString(7),
                        rs.getString(8),
                        rs.getString(9),
                        rs.getString(10),
                        rs.getString(11),
                        rs.getString(12),
                        rs.getString(13),
                        rs.getString(14),
                        rs.getString(15)));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }finally{
            try {
                rs.close();
                stmt.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }

        return list;
    }

    public static void main(String[] args) {
        List<YLBX> list=new YLBXDao().getAllData();
        System.out.println(list.size());
    }
}
