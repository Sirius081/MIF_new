import java.io.*;

/**
 * Created by sirius on 16-8-2.
 */
public class ReadData {
    public static void main(String[] args) throws IOException {
        BufferedReader br=new BufferedReader(new InputStreamReader(new FileInputStream("/home/sirius/桌面/医保/数据/mode_ac01.txt"),"gbk"));
        int count=0;
        String line=null;
        while((line=br.readLine())!=null){
            count++;
        }
        System.out.println(count);
    }
}
