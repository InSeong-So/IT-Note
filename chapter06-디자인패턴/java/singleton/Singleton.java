package java.singleton;

public class Singleton {
	// 기본
	// 정적 필드
	private static Singleton singleton = new Singleton();

	// 생성자
	private Singleton() {
	}

	// 정적 메소드
	static Singleton getInstance() {
		return singleton;
	}

}
