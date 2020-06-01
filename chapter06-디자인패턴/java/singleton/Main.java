package java.singleton;

public class Main {

	public static void main(String[] args) {
		System.out.println("Start.");
		Singleton obj1 = Singleton.getInstance();
		Singleton obj2 = Singleton.getInstance();
		if (obj1 == obj2) {
			System.out.println("같은 인스턴스입니다.");
		} else {
			System.out.println("다른 인스턴스입니다.");
		}
		System.out.println("Finish.");
	}
}
