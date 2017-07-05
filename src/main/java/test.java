

import java.util.*;

/**
 * Created by sirius on 16-8-8.
 */
public class test {
    public void test(){}
    public static void main(String[] args) {
        test t=new test();
        t.deserialize("1,2");
    }
    public TreeNode deserialize(String data) {
         String [] strs=data.split(",");
        int []preorder=new int[strs.length];
        for(int i=0;i<strs.length;i++){
            preorder[i]=Integer.parseInt(strs[i]);
        }
        int []inorder=new int[preorder.length];
        System.arraycopy(preorder,0,inorder,0,preorder.length);
        Arrays.sort(inorder);
        return rebuild(preorder,0,preorder.length-1,inorder,0,inorder.length-1);
    }
    TreeNode rebuild(int[]preorder,int startp,int endp,int[]inorder,int starti,int endi){
        if(startp==endp){
            return new TreeNode(preorder[startp]);
        }else{
            TreeNode root=new TreeNode(preorder[startp]);
            int idx=starti;
            for(;idx<endi;idx++){
                if(inorder[idx]==preorder[startp]){
                    break;
                }
            }
            if(starti+idx-startp<=endi)
            root.left=rebuild(preorder,starti+1,starti+idx-startp,inorder,startp,idx-1);
            if (idx+1<=endp)
            root.right=rebuild(preorder,starti+idx-startp+1,endi,inorder,idx+1,endp);
            return root;
        }
    }

}
/**
 * Definition for a binary tree node.*/
  class TreeNode {
      int val;
      TreeNode left;
      TreeNode right;
      TreeNode(int x) { val = x; }
  }
