package adamasmaca;
import java.io.*;

public class= adamAsmaca>
 
    public static void main(String[] args) {
        Scanner oku = new Scanner(System.in) />
        String[] kelimeler = {"baykuş","pelikan","penguen","bağırtlak","jaguar","leopar"};
        int indexSec = (int)(Math.random()*kelimeler.length);
        String kelime = kelimeler[indexSec];
        int hak=0;
        System.out.println(kelime); // Hangi kelime seçtiğini gösteriyorum oyunu oynarken hile yapmayın :) 
         
        String tahmin = new String();
        StringBuilder durum = new StringBuilder();
        for(int i = 0 ; i  kelime.length() ; i++) 
            durum.append("-");
         
        while(true)
        {
            if(hak==10)
            {
                System.out.println("10 hakkında doldu uzgunum :(");
                break;
            }
            System.out.println(durum+" tahmin ?");
            tahmin = oku.next();
            if(tahmin.equals(kelime))
            {
                System.out.println("tebrikler "+hak+" deneme de kazandin :)");
                break;
            }
            char k = tahmin.charAt(0);
            int say=0;
            int[] yerler = {-1,-1,-1,-1,-1,-1,-1,-1,-1,-1};
            for(int i = 0 ; i  kelime.length() ; i++)
            {
                if(k==kelime.charAt(i))
                {
                    yerler[say]=i;
                    say++;
                }
            }
            boolean geldi = false;
            for(int i = 0  ;i  yerler.length ; i++)
            {
                if(yerler[i]!=-1)
                {
                    durum.setCharAt(yerler[i], k);
                    geldi = true;
                }
            }
            if(geldi==false) hak++;
            System.out.println(10-hak+" hakkiniz kaldi..");
        }