import java.util.ArrayList;
import java.util.List;
class A{
    public void show1(){
        System.out.println("in A");
    }
}
class B extends A{
    public void show(){
        System.out.println("in B");
    }
    
}

public class Demo{
    public static void main(String[] args){
        // Service service=new Service();
        // service.displayquestions();
        // service.displayscore();
        A obj=new B();
        obj.show1();
    }
}