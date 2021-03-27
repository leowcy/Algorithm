package easy;

/**
 * Created by leo on 9/10/18.
 */
// Roman to Integer
public class title13 {

    public int romanToInt(String s){

        char [] s1 = s.toCharArray();
        int [] s2 = new int[s1.length]; //create an int array to store the value of char

        for(int i = 0; i < s1.length; i++){
            switch (s1[i]){
                case 'I':
                    s2[i] = 1;
                    break;
                case 'V':
                    s2[i] = 5;
                    break;
                case 'X':
                    s2[i] = 10;
                    break;
                case 'L':
                    s2[i] = 50;
                    break;
                case 'C':
                    s2[i] = 100;
                    break;
                case 'D':
                    s2[i] = 500;
                    break;
                case 'M':
                    s2[i] = 1000;
                    break;
            }
        }

        int outcome = 0;

        for(int j = 0; j<s2.length; j++){

            if(j<s2.length-1) {
                if (s2[j + 1] > s2[j]) {
                    s2[j] = s2[j + 1] - s2[j];
                    outcome += s2[j];
                    j++;
                }else
                    outcome += s2[j];
            }
            else
                outcome += s2[j];
        }


        return outcome;
    }
}
