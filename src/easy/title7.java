package easy;

import java.util.Scanner;

/**
 * Created by leo on 9/10/18.
 */

//Reverse Integer

public class title7 {

    public static void main(String[] args){

        Scanner in = new Scanner(System.in);
        int x = in.nextInt();

        if( x<0 || (x%10 == 0 && x != 0)) {
            System.out.print("false");
        }
        else{
            int rev = 0;
            while(x > rev){
                rev = rev*10 + x%10;
                x = x/10;
            }

            if( x == rev || x ==rev/10 )
                System.out.println("T");
            else
                System.out.println("F");

        }


    }
}
