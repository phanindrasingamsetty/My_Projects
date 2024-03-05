import java.util.*;

import javax.security.auth.SubjectDomainCombiner;

public class Service {
    int[] answers=new int[5];
    Questions[] que=new Questions[5];
    List<Integer> a=Arrays.asList(1,2,3,4);

    

    public Service(){
        que[0]=new Questions(1,"size of byte",1,2,3,4,1);
        que[1]=new Questions(2,"size of int",1,2,3,4,4);
        que[2]=new Questions(3,"size of float",1,2,3,4,1);
        que[3]=new Questions(4,"size of double",1,2,3,4,1);
        que[4]=new Questions(5,"size of long",1,2,3,4,1);
    }
    public void displayquestions(){
        int i=0;
        for(Questions q:que){
            System.out.println(q.getId());
            System.out.println(q.getQuestion());
            System.out.println(q.getOpt1());
            System.out.println(q.getOpt2());
            System.out.println(q.getOpt3());
            System.out.println(q.getOpt4());
            Scanner scan=new Scanner(System.in);
            answers[i]=scan.nextInt();
            i++;
        }
    }
    public void displayscore(){
        int score=0;
        for(int i=0;i<5;i++){
            if(que[i].getAnswer()==answers[i]){
                score++;
            }
        }
        System.out.println("Your total score is: "+score);
    }
    
}
