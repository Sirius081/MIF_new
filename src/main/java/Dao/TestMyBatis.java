package Dao;

import Entity.Drug;
import Service.IDrug;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

/**
 * Created by sirius on 17-4-10.
 */
public class TestMyBatis {
    public static void main(String[] args) {
        SqlSession s=MybatisUtils.getSqlSession();
        IDrug dao=s.getMapper(IDrug.class);
        Drug h=new Drug();

        h.setYear(2015);
        List<Drug>hs= dao.getDrugs(h);
        List<Drug> dhs=dao.getTop10("h_fees",2015);
        System.out.println();
    }
}
