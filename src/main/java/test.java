import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.*;

/**
 * Created by sirius on 16-8-8.
 */
public class test {
    public void test(){}
    public static void main(String[] args) {
        int[] nums={3,4,2,3,4,5,7,2,4,8,4};
        System.out.println(findKth(nums,0,nums.length-1,nums.length/2));
        List a=new ArrayList();
        PriorityQueue<Integer> q=new PriorityQueue<Integer>(new Comparator<Integer>() {
            public int compare(Integer o1, Integer o2) {
                return 0;
            }
        });
    }
    public static int findKth(int []nums,int from,int to,int k){
        int pivot=from;
        int low=from+1;
        int high=to;
        while(low<high){
            while(nums[high]>nums[pivot]&&low<high){
                high--;
            }
            while(nums[low]<=nums[pivot]&&low<high){
                low++;
            }
            int t=nums[low];
            nums[low]=nums[high];
            nums[high]=t;
        }
        int t=nums[low];
        nums[low]=nums[pivot];
        nums[pivot]=t;
        if(low-pivot+1==k){
            return nums[low];
        }else if(low-pivot+1>k){
            return findKth(nums,from,low-1,k);
        }else{
            return findKth(nums,low+1,to,k-low);
        }
    }
}
class t extends test{
}