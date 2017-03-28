package Dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;

/**
 * Created by sirius on 16-8-1.
 */
public class DictionaryDao {
    public HashMap<Integer,String> getModel(String tableName){
        HashMap<Integer,String> map=new HashMap<Integer, String>();
        Connection con=DBtool.getConnection();
        PreparedStatement stmt=null;
        ResultSet rs=null;
        String sql="select * from "+tableName;
        try {
            stmt=con.prepareStatement(sql);
            rs=stmt.executeQuery();
            while(rs.next()){
                map.put(rs.getInt(1),
                        rs.getString(2));
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
        return map;
    }
}
