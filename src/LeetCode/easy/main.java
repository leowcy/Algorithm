package easy;

import java.util.Scanner;

/**
 * Created by leo on 9/10/18.
 */
public class main {

    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);
        String s = in.next();

        title13 t13 = new title13();
        System.out.print(t13.romanToInt(s));
    }
}
