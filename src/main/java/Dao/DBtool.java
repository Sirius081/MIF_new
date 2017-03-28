package Dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by sirius on 16-8-1.
 */
public class DBtool {
    static  Connection con;
    static {

        try {
            Class.forName("com.mysql.jdbc.Driver");
            String username="root";
<<<<<<< HEAD
            String password="123";
            String url="jdbc:mysql://127.0.0.1:3306/mif";
=======
            String password="ecnu105";
            String url="jdbc:mysql://58.198.176.227:3306/MIF";
>>>>>>> df9c04cbc0372faff294ebe0e59fdb5909d9d5b9
            con=(Connection) DriverManager.getConnection(url,username,password);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    public static Connection getConnection(){
        return con;
    }

    public static void main(String[] args)throws  Exception {
        Connection con=getConnection();
        PreparedStatement stmt=con.prepareStatement("insert into variables value(4,'的冯绍峰')");
        stmt.execute();
    }
}
