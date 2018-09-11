package easy;

import java.util.Scanner;

/**
 * Created by leo on 9/10/18.
 **/

//Reverse Integer

public class title7 {

    public boolean reverse(int x){

        if( x<0 || (x%10 == 0 && x != 0)) {
            return false;
        }
        else{
            int rev = 0;
            while(x > rev){
                rev = rev*10 + x%10;
                x = x/10;
            }

            if( x == rev || x ==rev/10 )
                return true;
            else
                return false;

        }


    }
}
