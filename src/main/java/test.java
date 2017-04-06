

import java.util.*;

/**
 * Created by sirius on 16-8-8.
 */
public class test {
    public void test(){}
    public static void main(String[] args) {
        int[] nums={3,4,2,3,4,5,7,2,4,8,4};
        List<Integer> r=GetLeastNumbers_Solution(nums,4);
        System.out.println();
    }
    public static ArrayList<Integer> GetLeastNumbers_Solution(int [] input, int k) {
        PriorityQueue<Integer> heap=new PriorityQueue<Integer>(k, new Comparator<Integer>() {
            public int compare(Integer o1, Integer o2) {
                return o2-o1;
            }
        });
        ArrayList<Integer> res=new ArrayList();

            for(int i=0;i<k&&i<input.length;i++){
                heap.offer(input[i]);
            }
            for(int i=k;i<input.length;i++){
                if(input[i]<heap.peek()){
                    heap.poll();
                    heap.offer(input[i]);
                }
            }
        res.addAll(heap);
        return res;

    }
}
class t extends test{
}