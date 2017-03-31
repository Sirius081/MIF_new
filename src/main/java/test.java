import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

/**
 * Created by sirius on 16-8-8.
 */
public class test {
    public void test(){}
    public static void main(String[] args) {
        double f = 111231.5585;
        BigDecimal bg = new BigDecimal(f);
        double f1 = bg.setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
        System.out.println(f1);

    }

}
class t extends test{
}